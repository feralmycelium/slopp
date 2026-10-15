const IDLE_MS = 60000, VISIT_MS = 30 * 60000;
const validId = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

export function createAnalytics({storage, now=Date.now, uuid=()=>crypto.randomUUID(), send, engaged=true, test=false, referrer='', device='desktop'}) {
  const prefix = test ? 'slopp.analytics.test.' : 'slopp.analytics.';
  let persistent = true;
  const read = key => {try {return JSON.parse(storage.getItem(prefix+key));} catch {persistent=false;return null;}};
  const write = (key,value) => {try {storage.setItem(prefix+key,JSON.stringify(value));} catch {persistent=false;}};
  let visitorId = read('visitor');
  if (!validId(visitorId)) {visitorId=uuid();write('visitor',visitorId);}
  let session, pageId, activeMs=0, lastTick=now(), lastInput=now();
  const snapshot = () => ({visitorId,sessionId:session.id,pageId,activeMs:Math.floor(activeMs),persistent,test,referrer,device});
  const emit = () => {try {send(snapshot());} catch {}};
  const tick = () => {
    const at=now();
    if (engaged) activeMs+=Math.max(0,Math.min(at,lastInput+IDLE_MS)-lastTick);
    lastTick=at;
  };
  const chooseSession = () => {
    const at=now(), stored=read('visit');
    const candidate=stored?.visitorId===visitorId && validId(stored.id) && Number.isFinite(stored.lastActivity) && at>=stored.lastActivity && at-stored.lastActivity<VISIT_MS ? stored : null;
    if (!session || candidate?.id!==session.id && (candidate || at-session.lastActivity>=VISIT_MS)) {
      if (session) emit();
      session=candidate || {id:uuid(),visitorId,lastActivity:at};
      pageId=uuid();activeMs=0;
    }
  };
  chooseSession();
  if (engaged) {session.lastActivity=now();write('visit',session);}
  emit();
  return {
    snapshot,
    flush() {tick();emit();},
    input() {
      tick();
      if (!engaged) return;
      chooseSession();
      lastInput=now();session.lastActivity=lastInput;write('visit',session);
    },
    setEngaged(value) {
      tick();engaged=value;
      if (engaged) {chooseSession();lastInput=now();session.lastActivity=lastInput;write('visit',session);}
      emit();
    },
  };
}

export function startAnalytics(win=window) {
  try {
    const query=new URLSearchParams(win.location.search), nav=win.navigator, doc=win.document;
    let storage;
    try {storage=win.localStorage;} catch {storage={getItem:()=>{throw Error('storage');},setItem:()=>{throw Error('storage');}};}
    if (query.get('analytics')==='off') {try {storage.setItem('slopp.analytics.disabled','1');} catch {} return;}
    if (query.get('analytics')==='on') {try {storage.removeItem('slopp.analytics.disabled');} catch {}}
    let disabled=false;try {disabled=storage.getItem('slopp.analytics.disabled')==='1';} catch {}
    if (disabled || nav.doNotTrack==='1' || nav.globalPrivacyControl===true) return;
    let referrer='';try {const url=new URL(doc.referrer);if(url.origin!==win.location.origin)referrer=url.hostname;} catch {}
    const send = data => {
      const body=JSON.stringify(data);
      if (doc.visibilityState==='hidden' && nav.sendBeacon?.('/api/analytics',new Blob([body],{type:'application/json'}))) return;
      win.fetch('/api/analytics',{method:'POST',headers:{'content-type':'application/json'},body,keepalive:true}).catch(()=>{});
    };
    const engaged=()=>doc.visibilityState==='visible' && doc.hasFocus();
    const tracker=createAnalytics({storage,send,engaged:engaged(),test:query.get('analytics')==='test',referrer,device:win.innerWidth<768?'mobile':win.innerWidth<1024?'tablet':'desktop'});
    let lastInput=0;
    const input=()=>{const at=Date.now();if(at-lastInput<1000)return;lastInput=at;tracker.input();};
    const visibility=()=>tracker.setEngaged(engaged());
    const events=['pointerdown','pointermove','keydown','wheel','touchstart'];
    for (const name of events) win.addEventListener(name,input,{passive:true});
    doc.addEventListener('visibilitychange',visibility);
    win.addEventListener('focus',visibility);win.addEventListener('blur',visibility);
    win.addEventListener('pagehide',()=>tracker.setEngaged(false));
    win.addEventListener('pageshow',visibility);
    win.setInterval(()=>tracker.flush(),15000);
    return tracker;
  } catch { return null; }
}

if (typeof window !== 'undefined') startAnalytics();
