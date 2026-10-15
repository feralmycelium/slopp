import { expect, test } from 'bun:test';
import { analyticsReport } from '../scripts/analytics-report.mjs';

const page=(visitor,session,time,active=10000,extra={})=>({page_id:crypto.randomUUID(),visitor_id:visitor,session_id:session,started_at:time,last_seen_at:time,active_ms:active,persistent:1,is_test:0,device:'desktop',referrer_host:'',...extra});
test('report deduplicates reloads and counts return visits across a date boundary',()=>{
  const rows=[page('a','one','2026-10-14T10:00:00Z'),page('a','two','2026-10-15T10:00:00Z',20000),page('a','two','2026-10-15T10:01:00Z',10000),page('b','three','2026-10-15T11:00:00Z'),page('qa','test','2026-10-15T12:00:00Z',90000,{is_test:1})];
  const r=analyticsReport(rows,{since:'2026-10-15T00:00:00Z'});
  expect(r.uniqueBrowsers).toBe(2);expect(r.returningBrowsers).toBe(1);expect(r.newBrowsers).toBe(1);
  expect(r.visits).toBe(2);expect(r.pageViews).toBe(3);expect(r.totalActiveSeconds).toBe(40);
  expect(r.averageActiveSecondsPerVisit).toBe(20);expect(r.medianActiveSecondsPerVisit).toBe(20);
});
test('non-persistent measurements are separated from unique/returning browser counts',()=>{
  const r=analyticsReport([page('a','one','2026-10-15T10:00:00Z'),page('b','two','2026-10-15T11:00:00Z',5000,{persistent:0})]);
  expect(r.uniqueBrowsers).toBe(1);expect(r.unidentifiedVisits).toBe(1);expect(r.visits).toBe(2);
});
test('visit attribution comes from its first page regardless of row order',()=>{
  const rows=[page('a','one','2026-10-15T10:00:00Z',10000,{referrer_host:'first.example',device:'mobile'}),page('a','one','2026-10-15T10:10:00Z',10000,{referrer_host:'later.example',device:'desktop'})];
  expect(analyticsReport(rows).referrers).toEqual([['first.example',1]]);
  expect(analyticsReport([...rows].reverse())).toEqual(analyticsReport(rows));
});
