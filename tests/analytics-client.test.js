import { expect, test } from 'bun:test';
import { createAnalytics } from '../public/analytics.js';

const memory = () => {const values=new Map();return {getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};};
const setup = (storage=memory(), start=1000000) => {
  let time=start; const sent=[];
  const tracker=createAnalytics({storage,now:()=>time,uuid:()=>crypto.randomUUID(),send:data=>sent.push({...data}),engaged:true});
  return {tracker,sent,storage,advance:ms=>{time+=ms;},time:()=>time};
};
test('reloads and other tabs share a browser and visit but have independent page counters',()=>{
  const a=setup(),b=setup(a.storage,a.time()+1000);
  expect(a.tracker.snapshot().visitorId).toBe(b.tracker.snapshot().visitorId);
  expect(a.tracker.snapshot().sessionId).toBe(b.tracker.snapshot().sessionId);
  expect(a.tracker.snapshot().pageId).not.toBe(b.tracker.snapshot().pageId);
});
test('hidden time and inactivity are excluded without losing the last active interval',()=>{
  const a=setup();a.advance(10000);a.tracker.setEngaged(false);
  expect(a.sent.at(-1).activeMs).toBe(10000);
  a.advance(120000);a.tracker.flush();expect(a.sent.at(-1).activeMs).toBe(10000);
  a.tracker.setEngaged(true);a.advance(90000);a.tracker.flush();
  expect(a.sent.at(-1).activeMs).toBe(70000);
  a.tracker.input();a.advance(5000);a.tracker.flush();expect(a.sent.at(-1).activeMs).toBe(75000);
});
test('returning after thirty idle minutes starts a fresh visit for the same browser',()=>{
  const a=setup(),first=a.tracker.snapshot();
  a.advance(31*60000);a.tracker.input();
  const next=a.tracker.snapshot();
  expect(next.visitorId).toBe(first.visitorId);
  expect(next.sessionId).not.toBe(first.sessionId);
  expect(next.pageId).not.toBe(first.pageId);
  expect(next.activeMs).toBe(0);
  expect(a.sent.some(row=>row.pageId===first.pageId&&row.activeMs===60000)).toBe(true);
});
test('a focused reload refreshes the visit activity window',()=>{
  const a=setup(),b=setup(a.storage,a.time()+29*60000),c=setup(a.storage,a.time()+31*60000);
  expect(b.tracker.snapshot().sessionId).toBe(a.tracker.snapshot().sessionId);
  expect(c.tracker.snapshot().sessionId).toBe(a.tracker.snapshot().sessionId);
});
test('blocked storage never breaks the artwork and is labelled non-persistent',()=>{
  const a=setup({getItem:()=>{throw Error('blocked');},setItem:()=>{throw Error('blocked');}});
  expect(a.tracker.snapshot().persistent).toBe(false);
  a.advance(5000);a.tracker.flush();expect(a.sent.at(-1).activeMs).toBe(5000);
});
test('test visits do not reuse real visitor identifiers',()=>{
  const a=setup();
  const b=createAnalytics({storage:a.storage,now:a.time,uuid:()=>crypto.randomUUID(),send:()=>{},test:true});
  expect(b.snapshot().visitorId).not.toBe(a.tracker.snapshot().visitorId);
  expect(b.snapshot().test).toBe(true);
});
test('damaged stored browser and visit IDs are replaced with valid UUIDs',()=>{
  const storage=memory();
  storage.setItem('slopp.analytics.visitor',JSON.stringify('a'.repeat(36)));
  const a=setup(storage);
  expect(a.tracker.snapshot().visitorId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  storage.setItem('slopp.analytics.visit',JSON.stringify({id:'b'.repeat(36),visitorId:a.tracker.snapshot().visitorId,lastActivity:a.time()}));
  const b=setup(storage);
  expect(b.tracker.snapshot().sessionId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
});
