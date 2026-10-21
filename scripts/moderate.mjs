#!/usr/bin/env node
// Moderate drawings on a running slopp. Hiding never deletes; unhide restores.
//   SLOPP_ADMIN_TOKEN=... SLOPP_BASE_URL=https://sloppworld.com node scripts/moderate.mjs reports [limit]
//   ... node scripts/moderate.mjs hide <mark-id> [reason]
//   ... node scripts/moderate.mjs unhide <mark-id>
const [command, id, ...rest] = process.argv.slice(2);
const token = process.env.SLOPP_ADMIN_TOKEN;
const base = (process.env.SLOPP_BASE_URL || "http://127.0.0.1:8770").replace(/\/+$/, "");
const usage = "Usage: moderate.mjs reports [limit] | hide <mark-id> [reason] | unhide <mark-id>\nEnv: SLOPP_ADMIN_TOKEN (required), SLOPP_BASE_URL (default http://127.0.0.1:8770)";

if (!token) { console.error("Set SLOPP_ADMIN_TOKEN.\n" + usage); process.exit(2); }
const request = async (path, init = {}) => {
  const response = await fetch(base + path, { ...init, headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...init.headers } });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) { console.error(`${response.status} ${body.error || response.statusText}`); process.exit(1); }
  return body;
};

if (command === "reports") {
  const { reports } = await request(`/api/admin/reports?limit=${Number(id) || 100}`, { method: "GET" });
  if (!reports.length) console.log("No reports.");
  for (const r of reports) console.log([r.createdAt, r.markId, r.hiddenAt ? "hidden" : "visible", r.reason ?? ""].join("\t"));
} else if ((command === "hide" || command === "unhide") && id) {
  const mark = await request(`/api/admin/marks/${encodeURIComponent(id)}/${command}`, { method: "POST", body: command === "hide" ? JSON.stringify({ reason: rest.join(" ") || null }) : undefined });
  console.log(mark.hiddenAt ? `Hidden ${mark.id} at ${mark.hiddenAt}${mark.hiddenReason ? ` (${mark.hiddenReason})` : ""}` : `Visible again: ${mark.id}`);
} else {
  console.error(usage); process.exit(2);
}
