# Slopp analytics — 15 October 2026

Approved: collect unique browsers, returning browsers and active time going forward.
Lead: GPT-6. Native Fable 5.1 design consultation; independent code review before release.

1. [x] Inspect live storage, source and supported Sites deployment route.
2. [x] Add first-party measurement and report with failing behavioural tests first.
3. [x] Independent review; real browser verification using isolated test records.
4. [x] Publish, read back live records, mirror scoped changes into the primary checkout.

Use the current published source (74e1238) in this isolated checkout. Primary has
unpublished UX changes; do not ship or overwrite them. No changes to art or sound.

Design: one random browser ID in localStorage, a shared 30-minute inactivity visit
ID, and one record per page load. Heartbeats send cumulative active milliseconds;
server upserts take maxima so retries cannot inflate totals. Only focused, visible
time within 60 seconds of interaction counts. A per-page clock prevents hidden
time being added on return. New activity after 30 minutes starts another visit.
Reports deduplicate browser and visit IDs and group page time into visits. Returning
means a browser with an earlier recorded visit; a period report also includes
browsers whose first visit predates its start. Test records are always excluded.
No IP addresses, full referrer URLs, or public analytics read endpoint.

Read records through authenticated Sites D1 tools; feed complete rows to the
versioned local report script. Clearly label partial exports as incomplete.
Blocked storage falls back to page-local measurement, labelled non-persistent.

## Verification evidence

- Native Fable 5.1 consultation completed through the verified first-party route.
  The lead selected shared browser visit IDs to avoid counting reloads or extra
  tabs as returns. Advisor suggestions about retention and public dashboards were
  outside this bounded setup and were not added.
- Regression tests failed before implementing collection, the client clock and
  report; later failing cases reproduced inflated time, stale reload activity,
  damaged IDs and row-order-dependent referrals before each repair.
- Chrome on port 9196 wrote two QA page records sharing one browser and visit.
  A hidden page stayed at 60,159 active milliseconds while last_seen advanced
  from 22:43:07 to 22:43:52 UTC. Browser console contained no errors.
- The real QA database report excluded both test pages and returned zero audience
  visits. No test drawing or sound playback was needed.
- Independent Sol 5.6 review found damaged-ID handling and unstable attribution;
  both have regression coverage and fixes. Final bounded re-review approved;
  15 focused tests and the 49-test project suite pass. Build passes.

## Publication

Sites version 14, commit 6ae473831e5b36373d93cbc8f95b6ef6bf820e5b,
deployment appgdep_6ad15985eba881918e0c558440b07a70 succeeded at
2026-10-15T22:54:17Z. GitHub codex/shared-manuscript also pushed to that SHA.
Live D1 table and Chrome test heartbeat verified; test active_ms reached 60179.
The complete captured export in .evidence/analytics-live-readback.json produced
an owner report excluding the marked test page. Unmarked launch traffic may
include hosting previews; it is not verified human traffic. No public drawings
were written by QA. Live browser console had no errors. QA tabs closed.
Scoped changes are mirrored in the primary checkout alongside unpublished UX
changes. Its package test list preserves the independent space tests.

Acceptance: duplicate/out-of-order heartbeats, reloads, inactivity rotation,
hidden/idle time, blocked storage, malformed requests, report definitions, and
test-data exclusion pass. Existing tests/build pass. Live browser beacon reaches
the new D1 table; the artwork still loads.
