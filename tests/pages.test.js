import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import worker from "../server/worker.js";
import { handleApi } from "../server/api.js";
import { createDatabase } from "../server/local.js";
import { handlePages } from "../server/pages.js";

let directory, database, db;
const A = "0f8fad5b-d9cb-469f-a165-70867728950e", B = "1f8fad5b-d9cb-469f-a165-70867728950e";
const mark = (id, x) => ({ id, x, y: 4200, strokes: [{ kind: "script", ink: "blue", seed: 1, points: [[0, 0, .25], [30, -12, .75]] }] });
const get = (path) => handlePages(new Request(`http://world.test${path}`), db);

beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), "slopp-pages-"));
  ({ database, db } = createDatabase(join(directory, "world.sqlite")));
  for (const [id, x] of [[A, 4200], [B, 9000]]) await handleApi(new Request("http://world.test/api/marks", { method: "POST", body: JSON.stringify(mark(id, x)) }), db);
  await handleApi(new Request(`http://world.test/api/admin/marks/${B}/hide`, { method: "POST", headers: { authorization: "Bearer t" } }), db, { ADMIN_TOKEN: "t" });
});
afterEach(async () => { database.close(); await rm(directory, { force: true, recursive: true }); });

test("the sitemap lists the world and only public drawing pages", async () => {
  const response = await get("/sitemap.xml");
  expect(response.headers.get("content-type")).toContain("xml");
  const xml = await response.text();
  expect(xml).toContain("<loc>https://sloppworld.com/</loc>");
  expect(xml).toContain(`<loc>https://sloppworld.com/d/${A}</loc>`);
  expect(xml).not.toContain(B);
});

test("a drawing share page carries social tags, a sketch and a link into the world", async () => {
  const response = await get(`/d/${A}`);
  expect(response.status).toBe(200);
  const html = await response.text();
  expect(html).toContain(`<link rel="canonical" href="https://sloppworld.com/d/${A}">`);
  expect(html).toContain('<meta property="og:image" content="https://sloppworld.com/og-image.png">');
  expect(html).toContain('<meta name="twitter:card" content="summary_large_image">');
  expect(html).toContain('stroke="#2b4587"');
  expect(html).toContain(`href="/?d=${A}"`);
  expect(html).toContain('"@type":"CreativeWork"');
});

test("hidden, unknown and malformed drawings get a noindex 404 page", async () => {
  for (const path of [`/d/${B}`, "/d/2f8fad5b-d9cb-469f-a165-70867728950e", "/d/<script>"]) {
    const response = await get(path);
    expect(response.status).toBe(404);
    const html = await response.text();
    expect(html).toContain('content="noindex"');
    expect(html).not.toContain("<script>");
  }
  expect(await get("/index.html")).toBeNull();
});

test("the Worker sends pages to the page handler, the API with its secrets, and the rest to assets", async () => {
  const env = { DB: db, ADMIN_TOKEN: "t", ASSETS: { fetch: () => new Response("asset") } };
  expect((await worker.fetch(new Request(`http://world.test/d/${A}`), env)).status).toBe(200);
  expect(await (await worker.fetch(new Request("http://world.test/style.css"), env)).text()).toBe("asset");
  expect((await worker.fetch(new Request("http://world.test/api/admin/reports", { headers: { authorization: "Bearer t" } }), env)).status).toBe(200);
});

test("the home page carries canonical, social, structured and crawlable text", async () => {
  const html = await readFile(new URL("../public/index.html", import.meta.url), "utf8");
  expect(html).toContain('<link rel="canonical" href="https://sloppworld.com/">');
  expect(html).toContain('<meta name="twitter:card" content="summary_large_image">');
  expect(html).toContain('<meta property="og:image" content="https://sloppworld.com/og-image.png">');
  const ld = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  expect(ld["@graph"].map((n) => n["@type"])).toEqual(["WebSite", "CreativeWork"]);
  expect(html).toMatch(/<noscript>.*shared world of moving drawings/s);
  expect(await readFile(new URL("../public/robots.txt", import.meta.url), "utf8")).toContain("Sitemap: https://sloppworld.com/sitemap.xml");
});
