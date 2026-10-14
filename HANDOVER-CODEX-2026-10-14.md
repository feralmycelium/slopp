# Handover to Codex — review and ship the drawn invitation and hear-a-trace features

From Claude (Fable 5.1 lead), 14 October 2026, early evening. Alex approved both features and asked for a Codex check before shipping.

## What is on the branch

Branch `codex/shared-manuscript` (GitHub default) is three commits ahead of `origin`:

- `e75b636` Ship the sound layer and animation download — your own working tree as deployed this afternoon, committed and tagged `deploy-2026-10-14`.
- `a5be680` Draw the invitation and let drawings be heard — the two features (built by Claude Opus 5.5 from a written brief; Codex's draft route was unavailable).
- `0745c19` Fade the drawn invitation after seven seconds; the heading keeps its 25 s window.

## Feature A: the drawn invitation

- `public/invitation.js`: `invitationGesture()` makes one seeded `line` stroke in the environment's first ink, 96–120 points, spanning 60% of the view width with one loop near its right end; `space.position` is an offset from the camera (6 units ahead, slightly left and below eye line). `createInvitationClock()` shows once the tab is visible, ends on first activity or after 25 s, fires `end` once.
- `src/world.js`: `ghost(item,{draw})` paints it with cloned materials, follows the camera every frame, unfolds with the existing release animation; `dismissGhost(id,{fadeMs})` fades and disposes; ghosts are hidden from stills and animation captures. Reduced motion: still stroke, instant drop.
- `public/app.js`: clock wiring; the ghost is dismissed 7 s after show; `wandered()` now ends the invitation (pointer, wheel, keys, touch, buttons, slider, surprise, Find a trace); the `travel>8` rule and the 9 s timer are gone; the instruction sentence was removed from `index.html` (eyebrow and h1 stay).

## Feature B: hear other people's drawings

- `public/app.js` passes `{x, item}` with the salience call (screen x of the salient trace, the trace itself).
- `public/sound/musician.js`: `hear()` plays a trace's strokes through the same stroke-to-voice mapping as `surprise` (now shared as `figure()`; surprise output verified byte-identical), `role:'hear'`, 6 dB under surprise, `pan` clamped to ±0.6 from screen x, once per trace (`heard` set, cleared by `reset()`), `RULES.hearGap` 6 s, `RULES.hearAfterStroke` 1.5 s, never during a stroke, never calls `touch()`. Plays in the current primary palette, not the trace's own environment.
- `public/sound/score.js`: `salience()` now plays what the musician returns.

## Verified so far

- `bun run test`: 34 pass (includes `tests/invitation.test.js`, 7 new; `tests/sound-musician.test.js` extended). `bun scripts/build.js` run; `public/world.js` contains `dismissGhost`.
- Real Chrome, local server, 1280×800 and 390×844: ghost draws in under the heading, gone by about 9 s, heading stays until input; a drag ends both; no console errors.
- Not verified: how `hear` sounds (nobody has listened), Safari/Firefox, real touch/pen, the ghost's line weight on a real GPU (estimated about 14 px at 900 px tall, which may be heavy).

## What to check before shipping

1. Review the three commits for anything that breaks the design contract or the sound rules you shipped today (rest clock, ducking, limiter headroom).
2. Listen: speaker on, float past "Find a trace"; judge gain, pan and whether 6 s gaps feel right. Adjust `quieter`/`hearGap` if needed, nothing else.
3. Look at the ghost once on a real screen; if it is too heavy, reduce its tube radius in `paintTrace` for ghosts only, not for real traces.

## Ship

Deploy the way you deployed sloppworld.com this afternoon. If Cloudflare builds from `origin/codex/shared-manuscript`, pushing this branch is the deploy. Then verify live: `https://sloppworld.com/invitation.js` returns 200, live `app.js` imports it, the home page loads, and `/sound/score.js` still serves. Do not touch `data/`, the port 8784 preview, or the `.sound-assets` directory.
