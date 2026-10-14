# slopp sound: A/B prototype

Local prototype, 14 October 2026. Not published. Lead: claude-opus-5-5.

## Listen

1. Open **http://127.0.0.1:8784/** (or run `PORT=8784 bun run start` in `living-manuscript`).
2. Tap the speaker (bottom right) to start sound. Nothing plays before that tap.
3. Use **A | B** to switch versions at the same musical moment, **↺** to restart both from the same seeded origin, and the slider for volume (default 0.7). The speaker mutes and unmutes. While drawing it moves to the top right; when the controls rest it stays faintly visible.
4. Try stillness, drift speed, trackpad pinch (two-finger spread on a phone), dragging to look, **Draw something** with Thread (fine pen) and Ribbon or Colour (broad).

Sound needs the local audio files in `.sound-assets/haze-loose-ends/` (gitignored, all rights reserved). Without them, the speaker stays hidden and the world is silent, as in the public build.

## What is being compared

Both versions play the same Haze passage (stem time 149.09–200.00 s, bars 41–55, 14 bars, 50.9 s loop with a 2 s crossfade) in the Loose ends scene. They share one control model, the same input, lifecycle and UI, and matched resting loudness.

| Gesture | Version A: finished master + derived grains | Version B: separate stems |
|---|---|---|
| Rest | The master passage; seeded slow autonomy (30–120 s periods) adds faint detail and wash grains | Pad −3 dB, lead −2 dB, texture −6 dB, piano, air and returns at mix level; the same seeded autonomy |
| Speed (drift or camera travel, look-drag up to 60%) | Detail grains from the master: denser (0.4→6.4/s), shorter (250→60 ms), more octave-up, band rises 2.5→4.5 kHz, amplitude flutter 0.2→3 Hz, master tilt up to +1.5 dB | Lead up to +2 dB with up to +4 dB treble, piano up to +8 dB, plus the same detail grains read from lead and piano |
| Pinch | Reverb sends ×0.2 (in) to ×1.8 (out), slight master dip when widening; ±40-cent glide on grains only | Real reverb and delay returns −6 dB (in) to +4 dB (out), plus the same send scaling and grain glide |
| Broad drawing | Long overlapping grains (0.3–0.8 s, 8/s) from the master below 1.2 kHz, bus up to −6 dB | Pad up to +1 dB with its low-pass opening 2→12 kHz, plus long grains from the pad stem |
| Fine pen | 8–30 ms octave-up grains above 2.5 kHz with E6/G6/A6/D7 resonators, density 20→80/s, curvature flutter ±15–30 cents | Texture stem up to 0 dB plus the same scratch grains read from texture and lead |

Shared rules: no change to bed playback rate or pitch; no note per pointer event (an engine clock schedules grains from smoothed targets); onset acknowledged in 40–120 ms, bloom 1.2–3.5 s, release time constants 3–5 s; time-based accumulation saturates.

Every number above is a tuning hypothesis for Alex's ears.

## Evidence

All evidence lives outside the repository (it derives from the music): `/Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/ab/`.

**Listen to the captures.** They are offline renders of identical scripted gestures through the real engine, seed 1, final code. Files are `captures/<scenario>-a.wav` and `-b.wav`, with MP3 copies in `listen-mp3/`. Scenarios:

- `still`: 45 s, no input.
- `speed`: drift rises from 8 s, released at 25 s.
- `pinch`: in at 6–8 s, out at 18–20 s.
- `wash`: broad drawing at 6–18 s.
- `scratch`: fine pen at 6–16 s.
- `frantic`: everything at maximum with 240 Hz input, 5–35 s.
- `rate20` and `rate120`: the same fine drawing delivered at 20 vs 120 events per second.

**Measured effect of each gesture** (`analysis.json`). Each value is the gesture window compared with the same version's stillness:

| Scenario | A level | A 2–8 kHz | A onsets/s (still) | B level | B 2–8 kHz | B onsets/s (still) |
|---|---|---|---|---|---|---|
| speed (12–25 s) | −0.03 dB | +1.69 dB | 3.62 (1.62) | +0.51 dB | +0.91 dB | 1.23 (1.38) |
| pinch-in (6–10 s) | −0.02 dB, side −0.26 dB | +0.02 dB | 0.75 (1.25) | +0.11 dB, side −0.25 dB | −0.14 dB | 0.75 (1.00) |
| wash (10–18 s) | +1.80 dB | +0.06 dB | 3.00 (1.75) | +3.24 dB | +1.99 dB | 1.88 (1.25) |
| scratch (8–16 s) | +0.70 dB | +4.03 dB | 16.4 (1.9) | +0.47 dB | +1.70 dB | 2.12 (1.12) |
| frantic (10–35 s) | +4.30 dB | +11.97 dB | 16.1 (1.0) | +6.04 dB | +10.54 dB | 2.28 (1.12) |

What the numbers suggest, before anyone listens:

- **A's detail and scratch** come through as many small onsets (16 per second in scratch).
- **B's wash** is the stronger level change: its real pad and returns rise as whole layers.
- **Pinch** is the subtlest gesture in both, mainly a small stereo-width change.

**Matched loudness.** At rest A and B both measure −17.39 LUFS (trim B +3.46 dB, A 0). True peak at rest is −2.89 dBTP (A) and −5.25 dBTP (B).

**Clipping and headroom.** The 16 captures above were rendered before a fixed −2 dB headroom gain was added after the safety limiter. That gain is linear, so with the final code every capture is exactly 2 dB quieter and all relative measurements are unchanged. Without it, frantic reached −0.41 dBTP (A) and −0.21 dBTP (B). With it, the worst case (frantic at maximum volume 1.0) measures −1.75 dBTP (A) and −1.66 dBTP (B), and A at the default volume 0.7 measures −2.33 dBTP. That meets the −1 dBTP margin (`peak-check/true-peak.json`).

**One bounded audio-model check** (Gemini 3.6 Flash; neutral prompt asking only for changes with times, layers, and any non-musical sounds or artefacts; files in `judge/`). This is not human listening. In earlier controls this judge missed a soft kick, caught added high noise with correct timing, but named it a "shaker". Treat it as a description, not a verdict.

- **Wash, A:** a low swell "enters" at 15 s (drawing 6–18 s).
- **Wash, B:** "swelling lower-mid pad warmth" at 14 s.
- **Scratch, B:** a "subtle shimmering chime/sparkle accent" at 13 s (drawing 6–16 s), with no non-musical sounds reported.
- **Scratch, A:** no timed change. It described "vinyl crackle / delicate water droplet texture" from the start, and listed that texture as possibly non-musical. A's scratch may therefore read as a noise texture rather than a musical flutter. Alex's ears should decide.
- No artefacts were reported in any of the four files.

**Event-rate independence in the audio.** 20 vs 120 Hz input: 2–8 kHz envelope correlation (1 s smoothing) is 0.955 for A and 0.974 for B; mean level difference is −0.26 dB and −0.14 dB.

**Mute.** Output is exactly 0 from 100 ms after mute in both versions (`mute-timing.json`; peak 0.43 before mute).

**Tests.** `bun test` passes 40/40, including 13 control-model tests in `tests/sound-intent.test.js`:

- onset and bloom, lingering release, 20 vs 120 Hz input,
- bursty and same-timestamp delivery, stepping cadence,
- the bounded frantic plateau,
- broad and fine routing, speed asymmetry, pinch limits, look-drag,
- seeded autonomy.

**Browser QA.** `node tests/sound-browser.mjs` passes in muted headless Chromium. It covers:

- no audio context before the tap,
- load failure followed by a retry,
- speed, trackpad pinch and two-finger touch pinch,
- fine and broad drawing matching the control model,
- the speaker reachable while drawing and when idle,
- A/B switching, reset to the seeded origin, mute, and a simulated hidden tab.

Receipt and screenshots are in `qa/`.

**Build.** `bun run build` passes with the new guard that fails if any audio file is under `public/`. `source.zip` and `dist/client` contain no audio.

**Reviews.** These used fresh Sol 5.6 code-review agents:

- Review 1 requested changes (7 blockers).
- Review 2 requested changes (4 blockers).
- The closure review confirmed mute timing, the build exclusion and the evidence. It blocked on equal-timestamp samples still losing out-and-back movement; that has since been fixed with an out-and-back test.

Main-thread grain scheduling is not fixed. It is explicitly re-scoped to local audition. The final re-check result is recorded in PROGRESS.md.

**First capture set.** `captures-v1` and `analysis-v1.json` are kept for comparison. Version A's gestures were nearly inaudible there (wash +0.1 dB), which led to the gain recalibration.

## Changed files

- New: `public/sound/intent.js`, `engine.js`, `controller.js`, `offline.js`, `scenarios.js`; `scripts/prepare-sound-prototype.py`; `tests/sound-intent.test.js`, `tests/sound-browser.mjs`, `tests/sound-capture.mjs`; `sound-plan/AB-PROTOTYPE.md`.
- Changed: `public/app.js` (sound wiring, look and touch pinch, sound UI), `public/index.html` (sound controls, About copy), `public/style.css` (sound controls, drawing, idle and phone rules), `server/local.js` (local-only `/sound-assets/` route), `tests/serve.js` (`TEST_PORT`), `.gitignore` (`.sound-assets/`), `sound-plan/SOUND-PLAN.md`, `sound-plan/PROGRESS.md`.
- Local only, gitignored: `.sound-assets/haze-loose-ends/` (nine 50.9 s WAVs plus manifest and README).

## Limits

- No person has listened yet. The measurements show that each gesture changes the sound, and one bounded audio-model check (above) describes the wash and B's scratch as musical changes at the right times. Neither can say whether it is beautiful, subtle enough or too subtle. That musical sanity gate is still Alex's.
- Grains are scheduled on the main thread (25 ms tick, 0.25 s lookahead). This is accepted for local audition only; an AudioWorklet engine is required before release.
- About 149 MiB of decoded audio is resident (eight shared buffers, decoded one at a time); not measured on a phone.
- The safety limiter is a fast compressor (threshold −3 dB) followed by fixed −2 dB headroom, not a true-peak limiter. The measured worst case is −1.66 dBTP. A true-peak limiter belongs with the worklet engine.
- Safari's interrupted state, real backgrounding, the silent switch, Bluetooth and output-level mute timing were not tested on devices.
- The DevTools drawing batch in browser QA arrived as two coalesced pointer events per stroke on this overloaded machine. Dense input is covered by unit tests and the 20 vs 120 Hz offline renders.
- Sound does not change between environments yet; the whole world plays the Haze prototype once sound is on.

## Decisions for Alex

1. Which version feels better, or which parts of each to combine (for example, B's real pad and returns with A's master-derived detail).
2. Whether the gesture strengths are too subtle, about right or too obvious, per gesture.
3. Whether Haze is the right material for Loose ends, compared with Deepwater, which has no melody stem.
4. Whether a faint speaker during idle is acceptable, given the "permanently available mute" rule.

