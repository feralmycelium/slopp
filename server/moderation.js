// Reports from visitors and admin-only hiding. Hidden marks stay stored and
// exportable by the owner; they are only withheld from public reads.
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_REPORT_BYTES = 2048;
const MAX_REASON = 500;
export const REPORTS_PER_HOUR = 10;

const json = (body, init = {}) => Response.json(body, { ...init, headers: { "cache-control": "no-store", ...init.headers } });
const error = (status, code) => json({ error: code }, { status });

const hex = (buffer) => [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
const sha256 = async (text) => crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));

// Both sides are hashed first so lengths match and timing does not reveal the token.
export const tokenMatches = async (given, expected) => {
  if (typeof given !== "string" || typeof expected !== "string" || !expected) return false;
  const [a, b] = (await Promise.all([sha256(given), sha256(expected)])).map((d) => new Uint8Array(d));
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a[i] ^ b[i];
  return difference === 0;
};

const readSmallBody = async (request) => {
  if (!request.body) return "";
  const reader = request.body.getReader(), decoder = new TextDecoder();
  let size = 0, text = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) return text + decoder.decode();
      size += value.byteLength;
      if (size > MAX_REPORT_BYTES) { await reader.cancel(); return null; }
      text += decoder.decode(value, { stream: true });
    }
  } catch { return null; }
  finally { reader.releaseLock(); }
};

const parseReason = (text) => {
  if (!text.trim()) return { reason: null };
  let value;
  try { value = JSON.parse(text); } catch { return null; }
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  if (value.reason === undefined || value.reason === null) return { reason: null };
  if (typeof value.reason !== "string") return null;
  const reason = value.reason.trim().slice(0, MAX_REASON);
  return { reason: reason || null };
};

const reporterOf = async (request, env) => {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  return hex(await sha256(`${env.REPORT_SALT || "slopp-reports"}:${ip}`));
};

export const reportMark = async (request, db, env, id) => {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return error(403, "cross_origin_write");
  if (!UUID.test(id)) return error(404, "not_found");
  const text = await readSmallBody(request);
  const parsed = text === null ? null : parseReason(text);
  if (!parsed) return error(400, "invalid_payload");
  try {
    const mark = await db.prepare("SELECT id FROM marks WHERE id = ?").bind(id).first();
    if (!mark) return error(404, "not_found");
    const reporter = await reporterOf(request, env);
    const since = new Date(Date.now() - 3600_000).toISOString();
    const recent = await db.prepare("SELECT COUNT(*) AS count FROM reports WHERE reporter_hash = ? AND created_at > ?").bind(reporter, since).first();
    const already = await db.prepare("SELECT 1 FROM reports WHERE mark_id = ? AND reporter_hash = ?").bind(id, reporter).first();
    if (already) return json({ ok: true }, { status: 200 });
    if (recent.count >= REPORTS_PER_HOUR) return error(429, "rate_limited");
    const result = await db.prepare("INSERT INTO reports (mark_id, created_at, reason, reporter_hash) VALUES (?, ?, ?, ?) ON CONFLICT(mark_id, reporter_hash) DO NOTHING")
      .bind(id, new Date().toISOString(), parsed.reason, reporter).run();
    return json({ ok: true }, { status: result.meta?.changes ? 201 : 200 });
  } catch {
    return error(503, "storage_unavailable");
  }
};

const authorised = async (request, env) => {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  return token && tokenMatches(token, env.ADMIN_TOKEN);
};

export const handleAdmin = async (request, db, env, url) => {
  // Without a configured secret the admin surface does not exist.
  if (!env.ADMIN_TOKEN) return error(404, "not_found");
  if (!(await authorised(request, env))) return json({ error: "unauthorized" }, { status: 401, headers: { "www-authenticate": "Bearer" } });
  try {
    if (request.method === "GET" && url.pathname === "/api/admin/reports") {
      const limit = Math.min(Math.max(Number.parseInt(url.searchParams.get("limit") ?? "100", 10) || 100, 1), 500);
      const reports = (await db.prepare(`SELECT reports.id, reports.mark_id, reports.created_at, reports.reason, marks.hidden_at, marks.hidden_reason
        FROM reports LEFT JOIN marks ON marks.id = reports.mark_id ORDER BY reports.id DESC LIMIT ?`).bind(limit).all()).results;
      return json({ reports: reports.map((r) => ({ id: r.id, markId: r.mark_id, createdAt: r.created_at, reason: r.reason, hiddenAt: r.hidden_at ?? null, hiddenReason: r.hidden_reason ?? null })) });
    }
    const match = url.pathname.match(/^\/api\/admin\/marks\/([^/]+)\/(hide|unhide)$/);
    if (request.method === "POST" && match && UUID.test(match[1])) {
      const [, id, action] = match;
      let reason = null;
      if (action === "hide") {
        const text = await readSmallBody(request);
        const parsed = text === null ? null : parseReason(text);
        if (!parsed) return error(400, "invalid_payload");
        reason = parsed.reason;
      }
      const statement = action === "hide"
        ? db.prepare("UPDATE marks SET hidden_at = COALESCE(hidden_at, ?), hidden_reason = ? WHERE id = ?").bind(new Date().toISOString(), reason, id)
        : db.prepare("UPDATE marks SET hidden_at = NULL, hidden_reason = NULL WHERE id = ?").bind(id);
      const result = await statement.run();
      if (!result.meta?.changes) return error(404, "not_found");
      const mark = await db.prepare("SELECT id, hidden_at, hidden_reason FROM marks WHERE id = ?").bind(id).first();
      return json({ id: mark.id, hiddenAt: mark.hidden_at ?? null, hiddenReason: mark.hidden_reason ?? null });
    }
  } catch {
    return error(503, "storage_unavailable");
  }
  return error(404, "not_found");
};
