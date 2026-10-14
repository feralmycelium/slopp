import {test,expect} from 'bun:test';
import {createIntent,createAutonomy,LIMITS} from '../public/sound/intent.js';

const FRAME=1/60,VIEW={w:1000,h:800};
function run(intent,from,to,each=()=>{}){let last;for(let t=from;t<=to+1e-9;t+=FRAME){each(t);last=intent.step(t);}return last;}
function circle(rate,speed,kind='fine',pressure=.5){
  let next=0;
  return (intent,t)=>{
    while(next<=t){const a=next*speed*2*Math.PI/(.3*Math.PI);intent.stroke({t:next,x:500+150*Math.cos(a),y:400+150*Math.sin(a),pressure,kind,view:VIEW});next+=1/rate;}
  };
}
const sample=(intent,from,to,draw)=>{const out=[];for(let t=from;t<=to+1e-9;t+=FRAME){draw?.(intent,t);out.push(intent.step(t));}return out;};

test('stillness leaves every gesture layer at rest',()=>{
  const s=run(createIntent(),0,60);
  expect(s.speed).toBe(0);expect(s.wash).toBe(0);expect(s.scratch).toBe(0);
  expect(s.space).toBe(0);expect(s.pitchCents).toBe(0);
});

test('a fine pen is acknowledged at once, then blooms instead of jumping to full',()=>{
  const intent=createIntent(),draw=circle(60,.5);
  run(intent,0,1);
  const out=sample(intent,1,7,draw),at=t=>out[Math.round((t-1)/FRAME)];
  expect(at(1.06).scratch).toBeGreaterThan(.08);
  expect(at(1.06).scratch).toBeLessThan(.3);
  expect(at(3).scratch).toBeGreaterThan(at(1.06).scratch);
  expect(at(7).scratch).toBeGreaterThan(at(3).scratch);
  expect(at(7).scratch).toBeGreaterThan(.45);
  expect(at(7).wash).toBeLessThan(.05);
});

test('the release lingers, then returns to rest',()=>{
  const intent=createIntent(),draw=circle(60,.5);
  sample(intent,0,6,draw);intent.strokeEnd(6);
  const stop=intent.step(6).scratch,out=sample(intent,6,20),at=t=>out[Math.round((t-6)/FRAME)];
  expect(at(7).scratch).toBeGreaterThan(stop*.5);
  expect(at(20).scratch).toBeLessThan(stop*.05);
});

test('the same gesture sounds the same at 20 or 120 pointer events per second, after the slower input has delivered its first movement',()=>{
  const slow=sample(createIntent(),0,8,circle(20,.5)),fast=sample(createIntent(),0,8,circle(120,.5));
  const settled=Math.round(.1/FRAME);
  const worst=Math.max(...slow.slice(settled).map((s,i)=>Math.abs(s.scratch-fast[i+settled].scratch)));
  expect(worst).toBeLessThan(.02);
  expect(Math.abs(slow.at(-1).scratch-fast.at(-1).scratch)/fast.at(-1).scratch).toBeLessThan(.05);
});

test('events delivered in bursts with the same timestamp lose no movement',()=>{
  const even=sample(createIntent(),0,8,circle(60,.5));
  const burst=createIntent(),points=[];
  circle(60,.5)({stroke:p=>points.push(p)},8);
  const out=[];let k=0;
  for(let t=0;t<=8+1e-9;t+=FRAME){
    const batch=Math.floor(t/.1)*.1;
    while(k<points.length&&points[k].t<=t){burst.stroke({...points[k],t:batch});k++;}
    out.push(burst.step(t));
  }
  expect(Math.abs(out.at(-1).scratch-even.at(-1).scratch)/even.at(-1).scratch).toBeLessThan(.1);
});

test('the result does not depend on how often the model is stepped',()=>{
  const dense=createIntent(),sparse=createIntent(),draw=circle(2.5,.5),drawB=circle(2.5,.5);
  let d,s;
  for(let t=0;t<=6+1e-9;t+=FRAME){draw(dense,t);d=dense.step(t);}
  for(let t=0;t<=6+1e-9;t+=.3){drawB(sparse,t);s=sparse.step(t);}
  expect(Math.abs(s.scratch-d.scratch)/d.scratch).toBeLessThan(.15);
});

test('a stroke whose samples share one timestamp keeps its whole path, even when it returns to its start',()=>{
  const outAndBack=i=>500+(i<15?i:30-i)*24;
  const intent=createIntent();
  run(intent,0,1);
  for(let i=0;i<=30;i++)intent.stroke({t:1,x:outAndBack(i),y:400,pressure:.6,kind:'fine',view:VIEW});
  const held=run(intent,1+FRAME,2);
  expect(held.scratch).toBeGreaterThan(.05);
  const ended=createIntent();
  run(ended,0,1);
  for(let i=0;i<=30;i++)ended.stroke({t:1,x:outAndBack(i),y:400,pressure:.6,kind:'fine',view:VIEW});
  ended.strokeEnd();
  expect(run(ended,1+FRAME,2).scratch).toBeGreaterThan(.05);
  const spread=createIntent();
  run(spread,0,1);
  for(let i=0;i<=30;i++)spread.stroke({t:1+i/600,x:outAndBack(i),y:400,pressure:.6,kind:'fine',view:VIEW});
  expect(Math.abs(run(spread,1+FRAME,2).scratch-held.scratch)/held.scratch).toBeLessThan(.15);
});

test('frantic input reaches a bounded plateau',()=>{
  const intent=createIntent(),fine=circle(240,12),broad=circle(240,12,'broad',1);
  const out=sample(intent,0,60,(i,t)=>{fine(i,t);broad(i,t);i.motion({t,speed:1});i.pinch({t,delta:t%2<1?3:-3});});
  for(const s of out){
    for(const k of ['speed','wash','scratch'])expect(s[k]).toBeLessThanOrEqual(1);
    expect(Math.abs(s.space)).toBeLessThanOrEqual(1);
    expect(Math.abs(s.pitchCents)).toBeLessThanOrEqual(LIMITS.pitchCents);
  }
  const mid=out[Math.round(30/FRAME)],end=out.at(-1);
  expect(Math.abs(end.wash-mid.wash)).toBeLessThan(.02);
  expect(Math.abs(end.scratch-mid.scratch)).toBeLessThan(.02);
});

test('broad strokes wash the pad in; fine strokes do not',()=>{
  const intent=createIntent(),broad=circle(60,1,'broad',.8);
  const out=sample(intent,0,8,broad);
  expect(out.at(-1).wash).toBeGreaterThan(.4);
  expect(out.at(-1).scratch).toBeLessThan(.05);
});

test('speed rises sooner than it falls',()=>{
  const intent=createIntent();
  const up=sample(intent,0,6,(i,t)=>i.motion({t,speed:1}));
  const half=up[0+Math.round(6/FRAME)].speed/2;
  const rise=up.findIndex(s=>s.speed>=half)*FRAME;
  expect(up[Math.round(.2/FRAME)].speed).toBeGreaterThan(.08);
  const down=sample(intent,6,30,(i,t)=>i.motion({t,speed:0}));
  const fall=down.findIndex(s=>s.speed<=half)*FRAME;
  expect(fall).toBeGreaterThan(rise*2);
});

test('pinch in dries the space, pinch out widens it, and pitch stays a small glide that returns',()=>{
  const inward=createIntent();
  const a=sample(inward,0,1,(i,t)=>i.pinch({t,delta:2}));
  expect(a.at(-1).space).toBeLessThan(-.2);
  expect(a.at(-1).pitchCents).toBeGreaterThan(0);
  const outward=createIntent();
  const b=sample(outward,0,1,(i,t)=>i.pinch({t,delta:-2}));
  expect(b.at(-1).space).toBeGreaterThan(.2);
  expect(b.at(-1).pitchCents).toBeLessThan(0);
  const huge=sample(createIntent(),0,1,(i,t)=>i.pinch({t,delta:500}));
  expect(Math.max(...huge.map(s=>Math.abs(s.pitchCents)))).toBeLessThanOrEqual(LIMITS.pitchCents);
  const after=sample(inward,1,9);
  expect(Math.abs(after.at(-1).space)).toBeLessThan(.05);
  expect(Math.abs(after.at(-1).pitchCents)).toBeLessThan(2);
});

test('looking around stirs musical activity a little, and it settles again',()=>{
  const intent=createIntent();
  const turning=sample(intent,0,3,(i,t)=>i.look({t,dx:12,dy:2,view:VIEW}));
  expect(turning.at(-1).speed).toBeGreaterThan(.2);
  expect(turning.at(-1).speed).toBeLessThan(.8);
  const still=sample(intent,3,20);
  expect(still.at(-1).speed).toBeLessThan(.05);
});

test('autonomy is seeded, bounded and slow',()=>{
  const a=createAutonomy(7),b=createAutonomy(7),c=createAutonomy(8);
  const sa=[],sc=[];
  for(let t=0;t<600;t+=.5){const x=a(t);expect(x).toEqual(b(t));sa.push(x);sc.push(c(t));
    for(const k of ['detail','wash','scratch']){expect(x[k]).toBeGreaterThanOrEqual(0);expect(x[k]).toBeLessThanOrEqual(LIMITS.autonomy[k]);}}
  expect(sa.some((x,i)=>Math.abs(x.detail-sc[i].detail)>.01)).toBe(true);
  const steps=sa.slice(1).map((x,i)=>Math.abs(x.detail-sa[i].detail));
  expect(Math.max(...steps)).toBeLessThan(.02);
  expect(Math.max(...sa.map(x=>x.detail))-Math.min(...sa.map(x=>x.detail))).toBeGreaterThan(LIMITS.autonomy.detail*.4);
});

