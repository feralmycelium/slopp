import { afterEach, beforeEach, expect, test } from 'bun:test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createDatabase } from '../server/local.js';
import { handleApi } from '../server/api.js';

let directory, database, db;
const ids = Array.from({length: 5}, () => crypto.randomUUID());
const sample = (overrides={}) => ({pageId:ids[0],sessionId:ids[1],visitorId:ids[2],activeMs:0,persistent:true,test:false,referrer:'example.com',device:'desktop',...overrides});
const send = (data, origin='https://slopp.test') => handleApi(new Request('https://slopp.test/api/analytics', {method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(data)}),db);
beforeEach(async()=>{directory=await mkdtemp(join(tmpdir(),'slopp-analytics-'));({database,db}=createDatabase(join(directory,'world.sqlite')));});
afterEach(async()=>{database.close();await rm(directory,{recursive:true,force:true});});

test('a visit persists and repeated or reordered heartbeats do not inflate time',async()=>{
  expect((await send(sample())).status).toBe(204);
  await send(sample({activeMs:12000}));
  await send(sample({activeMs:12000}));
  await send(sample({activeMs:4000}));
  const rows=database.query('SELECT * FROM analytics_pages').all();
  expect(rows).toHaveLength(1);
  expect(rows[0].active_ms).toBe(12000);
  expect(rows[0].visitor_id).toBe(ids[2]);
});
test('page IDs cannot be rebound to another visitor or visit',async()=>{
  await send(sample());
  expect((await send(sample({visitorId:ids[3]}))).status).toBe(409);
  expect((await send(sample({sessionId:ids[4]}))).status).toBe(409);
});
test('a tampered heartbeat cannot claim hours of activity immediately',async()=>{
  await send(sample({activeMs:3600000}));
  expect(database.query('SELECT active_ms FROM analytics_pages').get().active_ms).toBe(60000);
  await send(sample({activeMs:7200000}));
  expect(database.query('SELECT active_ms FROM analytics_pages').get().active_ms).toBeLessThan(61000);
});
test('bad inputs and cross-origin collection are rejected without writing',async()=>{
  for(const patch of [{activeMs:-1},{activeMs:Infinity},{visitorId:'wrong'},{device:'unknown'},{referrer:'https://site.test/private?secret=yes'},{test:'false'}]) expect((await send(sample(patch))).status).toBe(400);
  expect((await send(sample(),'https://elsewhere.test')).status).toBe(403);
  expect(database.query('SELECT COUNT(*) AS n FROM analytics_pages').get().n).toBe(0);
});
test('analytics has no public read endpoint and does not leak into drawing export',async()=>{
  await send(sample({test:true}));
  expect((await handleApi(new Request('https://slopp.test/api/analytics'),db)).status).toBe(404);
  const data=await (await handleApi(new Request('https://slopp.test/api/world/export'),db)).json();
  expect(data).toEqual({items:[],total:0});
});
