# Slopp visibility reset

Alex reported disappearing drawings and missing core art after the density
changes, then specified an opening with our artworks and community drawings
introduced after a few minutes of use. Quality prioritisation is also requested;
Alex chose automatic ranking with corrections, and clarified that higher
rank means a greater chance of selection, not guaranteed or exclusive picks.
Existing sound/help and immediate Find behaviour remain approved.

1. Complete: restore full-size core art and stable spatial rendering.
   Remove camera-dependent three-composition selection. Keep spacing in the
   world, load outside the visible/fog boundary, retain pieces through turns.
2. Complete: core-only arrival for two visible minutes, then a gradual community
   introduction. Find and personal releases remain immediately available.
3. Complete: correctable composition heuristic, weighted lottery for Find and
   one nearby introduction every twelve seconds. No drawing is excluded.
   Local review at port 9743 persists overrides to public/curation.json.
4. Complete: directly inspect desktop/phone opening, timed introduction and
   movement; behavioural regressions, independent review, build and ledger.

## Investigation

The current 154-record preview has zero core environment groups at home.
The opening exclusion and trace exclusions remove landmarks, which were also
reduced to 55% scale. Turning through 55 degrees replaces/removes trace groups
five times. The previous tests checked nonempty output, not continuity of each
visible drawing. This plan replaces that acceptance criterion. Prior changes
and analytics work remain intact; no record deletions or public deployment.

## Verification

- 59 normal tests pass; added ranking and persistence checks are registered.
- Desktop/phone timed tests pass: core-only opening, two visible minutes,
  automatic introduction without Find, hidden time excluded, and continuous
  scene groups through 24 turns with forward movement.
- Separate arrival suite passes immediate weighted Find, no repeat, guide,
  sound controls, drawing/release and persisted stroke/anchor preservation.
- Owner review passes file readback, reload, undo, automatic reset, focus,
  environment filtering and no overflow on desktop and phone. Tests use a
  temporary curation file; actual owner preferences remain unchanged.
- Lead inspected opening, movement and owner-page screenshots. Fable primary
  model claude-fable-5-1 verified; independent gpt-5.6-sol review CLEAR/APPROVE.
- Preview9742 and owner review9743 remain running; all work is local.

## 16 October — modest increase after Alex's density review

Alex clarified: more of both our artworks and people's drawings, a few more
pieces while keeping occasional empty stretches, and a thirty-second opening.
Keep the full-size landmarks and stable drawing layout. Raise the supporting
environment occupancy from 5% to 7.5%; start weighted community introductions
at thirty visible seconds and continue every eight seconds. Retain the
eight-second fade and immediate reduced-motion reveal.

- [x] Reproduce the missing community introduction after thirty seconds.
- [x] Adjust the three density/timing parameters without changing stored art.
- [x] Verify timed arrivals, movement continuity and desktop/phone journey views.
- [x] Build and refresh the live preview; update the primary ledger.

The timing test failed before the change and now passes at 1440×900 and
390×844. The opening has no shared traces; four arrive by roughly one minute.
Hidden-tab time is excluded, and introduced groups remain through 24 turns
with forward movement. Inspected the opening, one-minute, turned and journey
screenshots. On the sampled route at z=-160, -280 and -400, supporting pieces
within 130 units increased from 4/4/2 to 5/5/3. Quiet views still occur,
particularly on a narrow screen, as requested. No browser errors.
Build and diff checks pass. Port 9742 returns HTTP 200; the live Chrome preview
was refreshed through Computer Use and its rendered opening inspected.
