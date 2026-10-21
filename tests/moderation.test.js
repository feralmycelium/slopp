import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { handleApi } from "../server/api.js";
import { createDatabase } from "../server/local.js";
import { REPORTS_PER_HOUR, tokenMatches } from "../server/moderation.js";

let directory, database, db;
const TOKEN = "test-admin-token-123";
const env = { ADMIN_TOKEN: TOKEN };
const A = "0f8fad5b-d9cb-469f-a165-70867728950e", B = "1f8fad5b-d9cb-469f-a165-70867728950e";
const mark = (id, x) => ({ id, x, y: 4200, strokes: [{ kind: "script", ink: "ink", seed: 1, points: [[0, 0, .25], [30, -12, .75]] }] });

const call = async (path, init = {}, environment = env) => {
  const response = await handleApi(new Request(`http://world.test${path}`, init), db, environment);
  const text = await response.text();
  return { status: response.status, body: text ? JSON.parse(text) : null };
};
const admin = (path, init = {}) => call(path, { method: "POST", ...init, headers: { authorization: `Bearer ${TOKEN}`, ...init.headers } });
const reportFrom = (id, ip, body) => call(`/api/marks/${id}/report`, { method: "POST", headers: { "cf-connecting-ip": ip }, ...(body ? { body: JSON.stringify(body) } : {}) });

beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), "slopp-moderation-"));
  ({ database, db } = createDatabase(join(directory, "world.sqlite")));
  for (const [id, x] of [[A, 4200], [B, 9000]]) expect((await call("/api/marks", { method: "POST", body: JSON.stringify(mark(id, x)) })).status).toBe(201);
});
afterEach(async () => { database.close(); await rm(directory, { force: true, recursive: true }); });

test("a hidden mark leaves the world and export but stays stored, and unhiding restores it", async () => {
  const hidden = await admin(`/api/admin/marks/${A}/hide`, { body: JSON.stringify({ reason: "spam" }) });
  expect(hidden.status).toBe(200);
  expect(hidden.body).toMatchObject({ id: A, hiddenReason: "spam" });
  expect(typeof hidden.body.hiddenAt).toBe("string");
  const world = await call("/api/world");
  expect(world.body.items.map((i) => i.id)).toEqual([B]);
  expect(world.body.total).toBe(1);
  expect((await call("/api/world/export")).body).toMatchObject({ total: 1, items: [{ id: B }] });
  expect(database.query("SELECT COUNT(*) AS n FROM marks").get().n).toBe(2);
  const shown = await admin(`/api/admin/marks/${A}/unhide`);
  expect(shown.body).toEqual({ id: A, hiddenAt: null, hiddenReason: null });
  expect((await call("/api/world")).body.items.map((i) => i.id)).toEqual([A, B]);
});

test("admin endpoints are absent without a secret and refuse wrong or missing tokens", async () => {
  expect((await call(`/api/admin/reports`, {}, {})).status).toBe(404);
  expect((await call(`/api/admin/reports`)).status).toBe(401);
  expect((await call(`/api/admin/reports`, { headers: { authorization: "Bearer nope" } })).status).toBe(401);
  expect((await call(`/api/admin/marks/${A}/hide`, { method: "POST", headers: { authorization: `Bearer ${TOKEN}x` } })).status).toBe(401);
  expect((await call("/api/world")).body.total).toBe(2);
  expect((await admin(`/api/admin/marks/2f8fad5b-d9cb-469f-a165-70867728950e/hide`)).status).toBe(404);
  expect((await admin(`/api/admin/marks/not-a-uuid/hide`)).status).toBe(404);
  expect(await tokenMatches(TOKEN, TOKEN)).toBe(true);
  expect(await tokenMatches("", TOKEN)).toBe(false);
  expect(await tokenMatches(TOKEN, undefined)).toBe(false);
});

test("visitors can report a mark anonymously, once each, and admins can list reports", async () => {
  expect((await reportFrom(A, "203.0.113.5", { reason: "  not nice  " })).status).toBe(201);
  expect((await reportFrom(A, "203.0.113.5", { reason: "again" })).status).toBe(200);
  expect((await reportFrom(A, "198.51.100.7")).status).toBe(201);
  expect((await reportFrom("2f8fad5b-d9cb-469f-a165-70867728950e", "203.0.113.5")).status).toBe(404);
  expect((await reportFrom(A, "203.0.113.5", { reason: 5 })).status).toBe(400);
  expect((await call(`/api/marks/${A}/report`, { method: "POST", headers: { origin: "https://elsewhere.test" } })).status).toBe(403);
  const rows = database.query("SELECT reporter_hash FROM reports").all();
  expect(rows).toHaveLength(2);
  expect(rows.every((r) => /^[0-9a-f]{64}$/.test(r.reporter_hash) && !r.reporter_hash.includes("203"))).toBe(true);
  await admin(`/api/admin/marks/${A}/hide`);
  const listed = await call("/api/admin/reports", { headers: { authorization: `Bearer ${TOKEN}` } });
  expect(listed.status).toBe(200);
  expect(listed.body.reports).toHaveLength(2);
  expect(listed.body.reports.map((r) => r.reason)).toEqual([null, "not nice"]);
  expect(listed.body.reports.every((r) => r.markId === A && r.hiddenAt)).toBe(true);
  expect(JSON.stringify(listed.body)).not.toContain("reporter");
});

test("one network address is rate limited across many reports", async () => {
  const ids = Array.from({ length: REPORTS_PER_HOUR }, (_, i) => `${String(i).padStart(8, "0")}-d9cb-469f-a165-70867728950e`);
  ids.forEach((id, i) => database.query("INSERT INTO marks (id, created_at, x, y, bounds_x, bounds_y, bounds_right, bounds_bottom, cell_x, cell_y, payload) VALUES (?, ?, 0, 0, 0, 0, 0, 0, 0, 0, ?)").run(id, new Date().toISOString(), JSON.stringify(mark(id, i))));
  for (const id of ids) expect((await reportFrom(id, "192.0.2.1")).status).toBe(201);
  expect((await reportFrom(A, "192.0.2.1")).status).toBe(429);
  expect((await reportFrom(A, "192.0.2.2")).status).toBe(201);
});
