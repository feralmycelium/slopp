export const INKS={ink:'#282429',blue:'#2b4587',red:'#a74343',orange:'#fd6e22',pink:'#ef88b9',mint:'#1dd0ae',yellow:'#ffb003',cyan:'#08beed',lilac:'#b6a5d2',coral:'#e96050',butter:'#dfd354',petrol:'#236466',rose:'#c58e95'};
export const ENVIRONMENTS=[
  {id:'flow',name:'Loose ends',center:[0,0,-12],inks:['ink','mint','orange','blue'],tools:['Thread','Ribbon','Colour'],note:'A thread can wander. Let it.'},
  {id:'fold',name:'Soft geometry',center:[52,12,-50],inks:['blue','pink','yellow','ink'],tools:['Line','Fold','Cut-out'],note:'Colour opens up when you move around it.'},
  {id:'soft',name:'Almost touching',center:[-48,-12,-64],inks:['coral','lilac','blue','butter'],tools:['Wander','Ribbon','Shape'],note:'Leave a little air between things.'},
  {id:'print',name:'Overprint',center:[14,-24,-108],inks:['ink','coral','petrol','pink'],tools:['Scratch','Brush','Patch'],note:'Rough edges. Happy accidents.'},
  {id:'echo',name:'Inside out',center:[57,-22,30],inks:['blue','orange','lilac','mint'],tools:['Contour','Band','Shape'],note:'One gesture. A few echoes.'},
  {id:'hush',name:'The hush',center:[-52,24,18],inks:['ink','rose','lilac','orange'],tools:['Whisper','Smudge','Patch'],note:'Something small. Or something enormous.'},
];
export const environmentById=id=>ENVIRONMENTS.find(e=>e.id===id)||ENVIRONMENTS[0];
export const seeded=seed=>()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
export const hash=text=>[...text].reduce((h,c)=>Math.imul(h^c.charCodeAt(0),16777619)>>>0,2166136261);

export function environmentAt(position){
  const nearest=ENVIRONMENTS.map(env=>{
    const center=env.center.map((n,i)=>n+Math.round((position[i]-n)/240)*240);
    return {env,center,distance:Math.hypot(...position.map((n,i)=>n-center[i]))};
  }).sort((a,b)=>a.distance-b.distance);
  return {primary:nearest[0].env,neighbour:nearest[1].env,center:nearest[0].center,
    blend:nearest[0].distance/(nearest[0].distance+nearest[1].distance)};
}

export function traceDepth(t,seed,environment){
  const phase=(seed%997)/997*Math.PI*2,envelope=Math.sin(t*Math.PI);
  switch(environment){
    case 'fold':return Math.sin(t*Math.PI*4+phase)*1.65*envelope;
    case 'soft':return Math.sin(t*Math.PI+phase)*2.8*envelope;
    case 'print':return (t-.5)*2.4+Math.sin(t*9+phase)*.35;
    case 'echo':return Math.sin(t*Math.PI*2+phase)*1.9;
    case 'hush':return Math.sin(t*Math.PI*.8+phase)*1.1;
    default:return Math.sin(t*Math.PI*2+phase)*2.1*envelope;
  }
}

const FAMILIES=['breath','blocks','ribbon','cutout','scatter','overprint','contours','gesture','stitches','bars'];
export function makeSurprise(seed,environment,previous){
  const env=typeof environment==='string'?environmentById(environment):environment,rand=seeded(seed);
  let index=Math.floor(rand()*FAMILIES.length);
  if(FAMILIES[index]===previous)index=(index+1+Math.floor(rand()*(FAMILIES.length-1)))%FAMILIES.length;
  const family=FAMILIES[index],strokes=[],scale=.55+rand()*1.15,tilt=(rand()-.5)*1.8;
  const palette=[...env.inks],offset=Math.floor(rand()*palette.length),phase=rand()*Math.PI*2;
  const ink=i=>palette[(offset+i)%palette.length];
  const add=(kind,points,color=ink(0))=>strokes.push({kind,ink:color,seed:Math.floor(rand()*0xffffffff),points:points.map(([x,y])=>[(x*Math.cos(tilt)-y*Math.sin(tilt))*scale,(x*Math.sin(tilt)+y*Math.cos(tilt))*scale,.5])});
  const path=(fn,n=90)=>Array.from({length:n+1},(_,i)=>fn(i/n));
  const block=(x,y,w,h,skew=0)=>[[x,y],[x+w,y+skew],[x+w-9,y+h],[x-5,y+h-skew],[x,y]];
  if(family==='breath')add('line',path(t=>[(t-.5)*620,Math.sin(t*4+phase)*22+Math.sin(t*9)*7]));
  if(family==='blocks')for(let i=0,n=2+Math.floor(rand()*3);i<n;i++)add('form',block(i*94-140,(rand()-.5)*100,55+rand()*50,80+rand()*130,(rand()-.5)*30),ink(i));
  if(family==='ribbon')add('ribbon',path(t=>[(t-.5)*480,Math.sin(t*8+phase)*65+Math.sin(t*19)*12]));
  if(family==='cutout'){
    const points=path(t=>{const a=t*Math.PI*2,r=105+Math.sin(a*3+phase)*30+Math.cos(a*5)*17;return[Math.cos(a)*r*1.4,Math.sin(a)*r];},48);
    add('form',points);if(rand()>.45)add('line',points.map(([x,y])=>[x*1.17+12,y*1.12-15]),ink(1));
  }
  if(family==='scatter')for(let i=0,n=8+Math.floor(rand()*12);i<n;i++){
    const x=(rand()-.5)*420,y=(rand()-.5)*240,w=8+rand()*25;
    add(i%4?'line':'form',i%4?[[x,y],[x+w,y-5],[x+w*1.8,y+3]]:block(x,y,w,12),ink(i%3));
  }
  if(family==='overprint'){
    add('form',block(-120,-95,172,150,28));add('form',block(-25,-50,130,150,-18),ink(1));
    for(let i=0;i<9;i++)add('line',path(t=>[-150+t*340,-90+i*22+Math.sin(t*7+i)*8],24),ink(2));
  }
  if(family==='contours'){
    const points=[[-150,-55],[-25,-112],[125,-50],[145,65],[20,115],[-95,72],[-150,-55]];
    for(let i=0,n=3+Math.floor(rand()*4);i<n;i++)add('line',points.map(([x,y])=>[x*(1-i*.1)+i*8,y*(1-i*.11)]),ink(i%2));
  }
  if(family==='gesture')for(let j=0,n=1+Math.floor(rand()*3);j<n;j++)add(j===0?'ribbon':'line',path(t=>[(t-.5)*470+Math.sin(t*17+phase)*55,Math.sin(t*7+phase)*75+Math.sin(t*23+j*.12)*20]),ink(j));
  if(family==='stitches')for(let i=0,n=8+Math.floor(rand()*8);i<n;i++){
    const x=(i-n/2)*26,y=Math.sin(i*.55+phase)*55;
    add('line',[[x,y-15],[x+10+rand()*10,y+20]],ink(i%7===0?1:0));
  }
  if(family==='bars')for(let i=0,n=3+Math.floor(rand()*4);i<n;i++)add('form',block(-170+i*55,-120+rand()*60,14+rand()*15,140+rand()*100,20),ink(i%2));
  return {family,strokes};
}
