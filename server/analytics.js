const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const response = status => new Response(null, {status, headers:{'cache-control':'no-store'}});

export async function collectAnalytics(request, db) {
  if (request.headers.get('origin') !== new URL(request.url).origin) return response(403);
  if (request.headers.get('sec-fetch-site') === 'cross-site') return response(403);
  if (!request.body) return response(400);
  const reader = request.body.getReader();
  let text = '', bytes = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const {done,value} = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 2048) { await reader.cancel(); return response(413); }
      text += decoder.decode(value,{stream:true});
    }
    text += decoder.decode();
  } catch { return response(400); }
  finally { reader.releaseLock(); }
  let data;
  try { data = JSON.parse(text); } catch { return response(400); }
  if (!data || typeof data !== 'object') return response(400);
  const {pageId,sessionId,visitorId,activeMs,persistent,test,referrer,device} = data;
  if (![pageId,sessionId,visitorId].every(id=>typeof id==='string' && uuid.test(id)) ||
      !Number.isSafeInteger(activeMs) || activeMs < 0 || activeMs > 86400000 ||
      typeof persistent !== 'boolean' || typeof test !== 'boolean' ||
      typeof referrer !== 'string' || referrer.length > 253 || !/^[a-zA-Z0-9.-]*$/.test(referrer) ||
      !['mobile','tablet','desktop'].includes(device)) return response(400);
  const now = new Date().toISOString();
  try {
    const result = await db.prepare(`INSERT INTO analytics_pages
      (page_id, session_id, visitor_id, started_at, last_seen_at, active_ms, persistent, is_test, referrer_host, device)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(page_id) DO UPDATE SET active_ms = MAX(active_ms, MIN(?, MAX(0, CAST((julianday(excluded.last_seen_at) - julianday(started_at)) * 86400000 AS INTEGER)) + 60000)), last_seen_at = excluded.last_seen_at
      WHERE session_id = excluded.session_id AND visitor_id = excluded.visitor_id AND is_test = excluded.is_test AND persistent = excluded.persistent`)
      .bind(pageId,sessionId,visitorId,now,now,Math.min(activeMs,60000),Number(persistent),Number(test),referrer,device,activeMs).run();
    return response(result.meta?.changes ? 204 : 409);
  } catch { return response(503); }
}
