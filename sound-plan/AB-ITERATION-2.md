# Sound A/B, iteration 2: morning handover

Lead: claude-opus-5-5. Branch `codex/shared-manuscript`, uncommitted. Nothing published.

## Listen first (about 10 minutes)

1. Open http://127.0.0.1:8784/ (server: `bun server/local.js` in this folder).
2. Tap the speaker. Leave it alone for 40 seconds: you should hear a hum or a held note, then real gaps.
3. Press **Draw something**, draw a few thin lines, then one broad ribbon.
4. Close the drawing. Drag to look around, press **Turn around**, then pinch (trackpad or two fingers).
5. Press the surprise button, then **elsewhere**, and wait about 10 seconds for the palette to change.
6. Switch to **B · your stems** and repeat steps 3 to 5. Use ↺ to restart both from the same moment.

Clips if you'd rather not click (rendered on the final kits, same scenarios for A and B, level matched):
`/Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/iter2/clips/<scenario>-a.wav` and `-b.wav`.
Scenarios: rest, strokes, broad, surprise, approach, crossing, frantic, pinch, look.

## What changed since iteration 1

| You said | Now |
|---|---|
| Eerie, relentless, always on | Rest is a hum, a held filtered note or nothing, with 20 to 60 s spans and real gaps. No compulsory bed. Rest peaks sit about 20 dB under touch peaks. |
| Not interactive enough | Each fine stroke plays a chime as it starts. Repeated strokes walk to related notes. Broad strokes start softly at once, then bloom. Look, the Turn button, pinch and surprise give a quiet immediate glint, then a slower held tone. Approaching an artwork adds detail. |
| Calm under heavy use | A density governor, an 8 voice cap and reverb that ducks with density keep frantic drawing gentle (the reverb tail drops about 15 dB at full density). |

## The two versions

Both share one musician (`public/sound/musician.js`), the same six palettes and controls, and loudness matched kits.

**A · original**: 113 units rendered in Ableton Live 12 Beta from stock presets with new MIDI (set: `~/Music/slopp-sound/slopp-kit-a Project/slopp-kit-a.als`). No reference audio is used anywhere. Every unit carries a provenance string in `.sound-assets/kit-a/manifest.json`.

| Palette | Fine | Broad | Held | Rest |
|---|---|---|---|---|
| flow (Loose ends) | Bells Glass | Light Frost | Wave Pad | Rising Fog Pad |
| fold | Vibes Mellow | Bloom Pad | Slow Pad | Drivetime Sine |
| soft | Flutish (swapped) | Sweet Tooth (A3 dropped) | Sines By The Sea | Light Frost |
| print | Clav Celesta | Cracked Piano | Moving String Pad | Noisy Pad |
| echo | Echo Bells | Glass High Strings Pad | Bloom Pad | Scape Shape Pad |
| hush | Bell Plate Long | Bells Deep | Wave Pad | Drivetime Sine (borrowed from fold) |

**B · your stems**: 136 units cut from all four sets. Undertow: chords, sub, hiss, reverb. Haze: lead, pad. Meridian: bells, pad, air. Deepwater: hiss, delay. The source file and start time for each unit are in `.sound-assets/kit-b/manifest.json`.

## Harmony rule

Each chord, pad or texture unit carries the full pitch set measured from its own audio. Weak overtone partials and noisy windows are ignored. A unit plays only if its whole set fits the palette **and** it contains the note the musician asked for. A colour note (the one non-core note per palette) is allowed only away from a palette crossing, and colour voices still ringing fade when a crossing starts. Single notes retune by 2 semitones at most. A chord moves only as a whole, and only if every note lands in scale and the asked note is included. If nothing qualifies, the instrument stays silent; it never plays a substitute note. The kit builder adds units until every note the musician can ask for has a playable unit, counting valid whole-chord moves, and both manifests record no gaps. For flow's B♭ broad colour, which no stem region holds, B moves a Meridian pad {C, E, A} down 2 semitones to {B♭, D, G}. Effect on B: Deepwater's chords all carry B, so Deepwater contributes hiss and delay only. Tests: `tests/sound-harmony.test.js`, checked against the old picker by mutation.

## Evidence

- `bun test`: 62 pass. `bun run build` passes, including the audio guard.
- `node tests/sound-browser.mjs`: 17 checks in a real headless browser. Highlights: no AudioContext before the tap; a failed load can be retried and its message clears once sound works; strokes, broad, surprise, pinch, look, the Turn button, approach, palette crossing; switching to B while its samples load slowly keeps answering from A, then B takes over; if B fails to load, A keeps playing and a tap on the speaker retries and completes the switch; reset, mute (true silence measured at the output), hidden-tab suspend and resume, phone fit at 390 px. Screenshots: `.omo/evidence/slopp-sound/iter2/browser/`.
- Onset, rendered audio (`node tests/sound-latency.mjs` → `iter2/latency.json`): one seeded example of each gesture in all six palettes of both kits becomes audible within 60 ms of its scheduled time (broad within 70 ms), most in 10 to 30 ms. This is OfflineAudioContext audio, so it measures the sounds and envelopes only. In dense drawing, broad strokes are masked by ringing chimes, which is masking rather than lag (with/without renders in the same file). The same file holds the reverb ducking check (tail −15 dB at full density) and a move audit. That audit renders every requested note served by a retune or chord move: 5 cases across both kits, including flow B♭ broad, all audible (−7.6 dB or louder against a fine touch), in scale and holding the asked note.
- Note coverage: a picker audit over every note the musician can request, in every palette, unit and colour state, finds 0 silent requests in either kit (`tests/sound-harmony.test.js`).
- End-to-end latency, live browser: pointer to scheduled note takes 3 to 8 ms in our code. Headless input delivery took 26 to 42 ms on this loaded machine, and the browser reports 45 ms of output latency. An analyser on the real output saw sound rise 86 to 128 ms after the pointer. Real devices are untested.
- Levels (`iter2/clips/analysis.json`, final kits): A/B rest −47.5 / −46.9 LUFS; strokes −30.2 / −28.3; every true peak at or below −12 dBTP.
- Model listening (Gemini 3.6 Flash, a model description, not human listening): `iter2/clips/ears/*.json`. No sour notes, clicks or harshness reported. Look, pinch and surprise were described after the glint change; the other clips were described before the final B coverage rebuild.
- Independent review: the first pass blocked on four issues (Turn button silent, A/B switch dropping gestures, failed loads never retried, a substitute-chord fallback), all fixed above. The re-review found one more (a retry after a failed B load left A playing), now fixed with a browser regression. Reports: `.omo/evidence/slopp-sound-iter2-code-review.md` and `-rereview.md`.

## Limits

- Nobody has listened through speakers yet. Human listening is the taste check; metrics and model descriptions are not ears.
- Scheduling runs on the main thread (25 ms tick). Real devices are untested, including iOS Safari interruptions.
- Pitch detection is chroma based. It rejects clear clashes, but a quiet clash below 30% of the strongest pitch class could slip through.
- A and B are drafts for comparing direction. They are not finished mixes.

## Your taste calls

1. A soft fine: Flutish replaced Bell Airy, which measured a semitone smear. Flutish speaks more softly and slowly than the bells in other palettes.
2. A hush rest: High Pad failed (too many pitches), so hush borrows fold's Drivetime Sine. A new hush rest preset needs one Live render.
3. Rest level: −27 dB plus the per-kit levelling. Raise it if rest feels too empty, lower it if it feels like a bed.
4. Gesture strength: the look/turn/pinch glint sits 13 dB under a stroke chime, and the turn answer is rate-limited to once per 8 s.
5. B regions: Undertow chords and Meridian pads now carry most of B's harmony. Deepwater only gives air.

Rebuild kits: `~/code/ableton-copilot/.venv/bin/python scripts/build-kits.py .sound-assets .sound-assets/kit-a/all/units.json .sound-assets/kit-a/all ../.omo/evidence/slopp-sound/kit-b/scan.json ../.omo/evidence/slopp-sound/kit-b/pitch-sets.json`, then `scripts/level-kits.py .sound-assets`.

