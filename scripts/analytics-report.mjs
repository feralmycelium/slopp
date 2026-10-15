export function analyticsReport(rows,{since=null,until=null,complete=true}={}) {
  const from=since ? Date.parse(since) : -Infinity, to=until ? Date.parse(until) : Infinity;
  if (Number.isNaN(from)||Number.isNaN(to)||from>=to) throw Error('Use valid ISO dates with since before until.');
  const real=rows.filter(row=>Number(row.is_test)===0).sort((a,b)=>Date.parse(a.started_at)-Date.parse(b.started_at)||a.page_id.localeCompare(b.page_id));
  const visits=new Map(),firstVisit=new Map();
  for (const row of real) {
    const time=Date.parse(row.started_at);
    if(!Number.isFinite(time)||!Number.isFinite(Number(row.active_ms))) throw Error('Incomplete or invalid analytics row.');
    const key=row.visitor_id+':'+row.session_id;
    if(!visits.has(key))visits.set(key,{start:time,active:0,pages:0,visitor:row.visitor_id,persistent:Number(row.persistent)===1,device:row.device,referrer:row.referrer_host||'direct / unknown'});
    const visit=visits.get(key);visit.start=Math.min(visit.start,time);visit.active+=Number(row.active_ms);visit.pages++;
    firstVisit.set(row.visitor_id,Math.min(firstVisit.get(row.visitor_id)??Infinity,time));
  }
  const selected=[...visits.values()].filter(visit=>visit.start>=from&&visit.start<to);
  const browsers=new Set(selected.filter(v=>v.persistent).map(v=>v.visitor));
  const returning=new Set(selected.filter(v=>v.persistent&&firstVisit.get(v.visitor)<v.start).map(v=>v.visitor));
  const fresh=new Set(selected.filter(v=>v.persistent&&firstVisit.get(v.visitor)>=from&&firstVisit.get(v.visitor)<to).map(v=>v.visitor));
  const seconds=selected.map(v=>v.active/1000).sort((a,b)=>a-b),total=seconds.reduce((a,b)=>a+b,0),mid=Math.floor(seconds.length/2);
  const counts=field=>Object.entries(selected.reduce((out,v)=>{out[v[field]]=(out[v[field]]??0)+1;return out;},Object.create(null))).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
  return {complete,period:{since,until},trackingFirstSeen:real.length?new Date(Math.min(...real.map(r=>Date.parse(r.started_at)))).toISOString():null,
    uniqueBrowsers:browsers.size,newBrowsers:fresh.size,returningBrowsers:returning.size,returnRatePercent:browsers.size?Math.round(returning.size/browsers.size*1000)/10:0,
    visits:selected.length,pageViews:selected.reduce((sum,v)=>sum+v.pages,0),unidentifiedVisits:selected.filter(v=>!v.persistent).length,
    totalActiveSeconds:Math.round(total),averageActiveSecondsPerVisit:seconds.length?Math.round(total/seconds.length):0,
    medianActiveSecondsPerVisit:seconds.length?Math.round(seconds.length%2?seconds[mid]:(seconds[mid-1]+seconds[mid])/2):0,
    devices:counts('device'),referrers:counts('referrer'),excludedTestPages:rows.length-real.length};
}

if(import.meta.main) {
  const input=JSON.parse(await Bun.stdin.text());
  if(!Array.isArray(input.rows)||input.complete!==true) throw Error('Supply {rows:[all untruncated analytics_pages rows],complete:true}; partial exports cannot give reliable visitor totals.');
  console.log(JSON.stringify(analyticsReport(input.rows,{since:process.argv[2],until:process.argv[3]}),null,2));
}
