# Draw while travelling

Alex, 16 October 2026: make it possible to draw while moving.

Keep the current visual language and tools. Drawing no longer holds travel.
Drag paints while drift and movement keys continue. Keep Pause visible and
offer it in the drawing tools on small screens. A moving stroke records its
depth, stays at its world anchor and survives release, reload and discovery.
Existing three-value points retain their pressure and procedural depth.
Reduced motion still starts stationary. Saved drafts, Undo and Close remain.

1. [x] Inspect current drawing and travel code; current live art renders again.
2. [x] Reproduce missing travel/depth with focused behaviour tests.
3. [x] Preserve moving strokes and expose drawing motion controls.
4. [x] Exercise desktop/mobile drawing, pause, save and reload.
5. [x] Build the preview and update the project ledger.

Verified: 61 unit tests; desktop and phone browser checks for held-pen travel,
movement keys, pause, line and fill depth after reload, crossing the original
drawing plane, starting after a long empty drift, and stationary sculptural
depth. Surprise layering regression checks pass. Evidence is in
`.evidence/drawing-motion/` and `.evidence/surprise/`. Live Chrome shows the
updated drawing tools. Preview process 76638 serves port 9742.

The earlier blank-screen report recovered without a code change. Current
browser logs have no errors. Its cause is not established; do not claim a fix.

## Gentle drawing pace

Alex requested automatic slowing when drawing begins, with the option to
speed up, and confirmed that Close should keep an unfinished private draft.

Entering drawing mode caps drift at 10/100 while preserving lower speeds and
Pause. The drawing toolbar exposes the full speed range and stays synchronized
with the exploration slider. Starting from still uses the gentle pace. Close
continues to keep a local draft; only Let it go publishes it. Alex then requested
that a successful release restore the speed from before drawing. Restore the
original pause setting too; a failed release stays in drawing mode at its
current pace.

- [x] Observe the failing fast-travel-to-drawing test (100 remained 100).
- [x] Add the gentle entry pace and drawing speed slider.
- [x] Verify desktop/phone controls and private draft recovery.
- [x] Observe release retaining speed 100 and Pause instead of the prior 99 and motion.
- [x] Restore the prior pace after successful release and verify both viewports.

Desktop (1440×900) and phone (390×844, reduced motion) checks pass: gentle
entry, manual speed increase, private draft recovery after Close and reload,
failed release retaining the draft and current pace, and successful release
restoring the prior speed and pause setting. Final drawing screenshots inspected.
