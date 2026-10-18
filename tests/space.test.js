import {expect,test} from 'bun:test';
import {layoutTraces,traceRadius,traceFrame,chooseTrace,fitDistance} from '../public/space.js';
import {environmentAt} from '../public/environments.js';

const mark=(seq,position=[0,0,0])=>({id:'trace-'+seq,seq,space:{position,rotation:[0,0,0,1],environment:'flow'},strokes:[{points:[[-400,-100,.5],[400,100,.5]]}]});
const distance=(a,b)=>Math.hypot(...a.map((n,i)=>n-b[i]));

test('crowded contributions get distinct, spacious positions outside the opening',()=>{
  const items=Array.from({length:80},(_,i)=>mark(i+1)),original=structuredClone(items),layout=layoutTraces(items);
  for(const a of items){
    const p=layout.get(a.id).position;
    expect(distance(p,[0,0,22])-traceRadius(a)).toBeGreaterThanOrEqual(60);
    for(const b of items.filter(b=>b.seq<a.seq))expect(distance(p,layout.get(b.id).position)-traceRadius(a)-traceRadius(b)).toBeGreaterThanOrEqual(30);
  }
  expect(items).toEqual(original);
});

test('independent visitors, input order and later arrivals preserve existing places',()=>{
  const items=Array.from({length:12},(_,i)=>mark(i+1));
  const first=layoutTraces(items),reversed=layoutTraces([...items].reverse()),later=layoutTraces([...items,mark(13)]);
  for(const item of items){expect(reversed.get(item.id)).toEqual(first.get(item.id));expect(later.get(item.id)).toEqual(first.get(item.id));}
  const legacy={id:'old-paper',seq:0,x:1200,y:-800,strokes:[{points:[[0,0,.5],[20,20,.5]]}]};
  expect(layoutTraces([legacy]).get(legacy.id).position.every(Number.isFinite)).toBe(true);
});

test('random discovery covers saved contributions and never repeats immediately',()=>{
  const items=[mark(1),mark(2),mark(3)];
  expect(chooseTrace([],null,()=>0)).toBeNull();
  expect(chooseTrace([items[0]],items[0].id,()=>0)).toBe(items[0]);
  expect(chooseTrace(items,null,()=>0)).toBe(items[0]);
  expect(chooseTrace(items,null,()=>.99)).toBe(items[2]);
  expect(chooseTrace(items,items[0].id,()=>0)).toBe(items[1]);
});

test('portrait framing leaves room around the whole drawing',()=>{
  const r=30,tan=Math.tan(57*Math.PI/360),aspect=390/844;
  const phone=fitDistance(r,aspect),desktop=fitDistance(r,1440/900);
  expect(phone).toBeGreaterThan(desktop);
  expect((phone-r)*tan*aspect).toBeGreaterThan(r);
});

test('a travelling drawing is framed and spaced using its complete depth',()=>{
  const item={strokes:[{points:[[0,0,.5,0],[0,0,.5,-1000]]}]};
  expect(traceFrame(item)).toEqual({center:[0,0,-15],radius:20});
  expect(traceRadius(item)).toBe(35);
});

test('framing centres an off-axis drawing on its ink rather than its original anchor',()=>{
  const item={strokes:[{points:[[900,300,.5],[1100,500,.5]]}]};
  const frame=traceFrame(item);
  expect(frame.center).toEqual([30,-12,0]);
  expect(frame.radius).toBeLessThan(10);
  expect(traceRadius(item)).toBeGreaterThan(35);
});

test('community placement leaves breathing room around the authored core pieces',()=>{
  const items=Array.from({length:80},(_,i)=>mark(i+1)),layout=layoutTraces(items);
  for(const item of items){const p=layout.get(item.id).position;expect(distance(p,environmentAt(p).center)).toBeGreaterThanOrEqual(45+Math.min(25,traceRadius(item)));}
});
