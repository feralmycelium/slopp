# Adaptive sound planning — progress ledger

## 14 October — published

Alex requested “ship it with the music”. The approved B3 stem mix, six palettes,
softened attacks/reverb, -3 dB high shelf and foreground drawing fix are live
at https://sloppworld.com. Sites version 12; source
e7c6b975c8e7433b0a3d1b322e36b97693e998c0; deployment
appgdep_6acf9c37145c8191b43e93de287bc9a6 succeeded. GitHub source pushed.

Release assets are 181 lossless FLAC files (55 MB); every decoded PCM hash
matches the approved WAV. All six palettes decoded in the live browser;
drawing produced audio and mute silenced it. Desktop/phone screenshots were
inspected. Music is separately all rights reserved and excluded from the
source ZIP. Raw stems, retired A and personal prep files were not published.
Evidence: .evidence/sound-release/. Full release record: PLAN.md.

## 14 October — high shelf refinement

Alex requested a -3 dB high shelf because the overall top end remains bright.
Set the existing shared output shelf to -3 dB at 2.8 kHz (previously -2.5 dB).
This covers all six palettes and the reverb return. Reverb, attacks and output
level are otherwise unchanged. Refresh the local preview to load this setting.

## Current choice — stems only

Alex explicitly retired A: “bin off a we will use b”. The live app now starts directly with the softened stem kit, never requests A, and offers only mute, volume and restart. A failed or delayed stem load remains silent and retryable. The listening page now has one player per palette plus one transition clip. Historical original renders and Live sources are retained outside the active experience.

Verification: 81 unit tests, 17 updated browser scenarios and the softened-mix render regression pass. Desktop and 390 px phone screenshots inspected in `.evidence/sound-stems-only/`. Browser network checks confirm no original-kit requests; stem failure/retry, drawing, continuous control, palette crossing, reset and mute all work. One timing attempt measured 183 ms at the analyser; a serial rerun passed at 102 ms, with 3 ms handler-to-schedule time. Live preview and listening page return 200, with no version selector and seven stem-only players respectively. The earlier spectral metrics are preserved as `metrics-before-softening.json`; the default Python lacks their analysis dependencies, so those historical figures were not regenerated or relabelled as current.

## 14 October — softer stem mix

Alex prefers B's stems and says the interactions are much better. Requested a little more softness and reverb. B now uses a 14 ms minimum attack, a gentle -2.5 dB high shelf above 2.8 kHz, 0.8 dB less output, and a 40% higher reverb return. The existing decay, density ducking, gesture timing and six identities are retained; A's mix is unchanged.

Focused verification: the new browser OfflineAudioContext regression failed on the previous mix, then passed with a 3.46 dB gentler first 10 ms, 1.61 dB less high-frequency emphasis, 1.07 dB more tail and no onset delay on its controlled test signal. All 16 instrument/stroke tests pass. These measurements establish the direction of the adjustment, not a listening verdict. Comparison clips regenerated from the current engine.

## STATUS 14 October (later): iteration 3 ready for audition; human taste review pending

Alex heard iteration 2: B not bad, but only 3–4 sounds, palettes alike, unclear link to the screen. Authorised the full six-palette revision. Plan: SOUND-PLAN-3.md.

### Iteration 3 ledger

- [x] SOUND-PLAN-3.md written.
- [x] Engine: public/sound/strokes.js (18 idioms), held expressive voice, sparse lift answer, screen-palette gestures, narrow colour pivot (blend 0.42+ or unsettled crossing). Tests: sound-strokes.test.js, sound-musician.test.js.
- [x] Instrument: hold/control/release by id, filters, flutter, pleat dips, grains, rest bus, live glide, future-event queue, held renewal and cleanup, source-rank preference. Tests: sound-instrument.test.js, sound-harmony.test.js.
- [x] B bank kit-b3 (181 units after fold's fine voice moved to the Haze lead; 0 gaps, all four sets; new roles voice/stab/breath/sub/grain) built in kit-b3-next and swapped; levelling made idempotent (scripts/level-kits.py).
- [x] Six-palette audition reel + local review page (A and B): http://127.0.0.1:8784/sound-assets/review/index.html (14 clips, metrics.json, events with actual sources).
- [x] Browser QA (18 checks), latency harness (60 rows + reverb + move audit), 81 unit tests; handover AB-ITERATION-3.md.
- [x] Independent review: BLOCK (Overprint register overclaim; crossing test mirrored the fade rule; signature test allowed a collision), fixed, re-check APPROVE (.omo/evidence/slopp-sound-iter3-review.md).

### Earlier status 14 October: iteration 2 ready for audition; human taste review pending

Iteration 1 was artistically rejected. Iteration 2 (A original, B stems) is built, tested and independently approved. Handover and listening sheet: AB-ITERATION-2.md.

The A/B prototype below is a working technical prototype that Alex rejected on listening (eerie, relentless, always on, not interactive enough). Its "A" was the master plus grains, which was a mistake: A must be original music. Kept as the historical baseline. Postmortem: POSTMORTEM-1.md. New plan: SOUND-PLAN-2.md. Alex authorised overnight design, build and review of both versions (A original, made in Live; B stems from all four sets) without further approval.

### Iteration 2 ledger

- [x] Design: SOUND-PLAN-2.md (revised after parent review: pivots in place of consonance guarantees, B pitch labels, screen-space salience with hysteresis, motion stays in Rest, no mandatory floor, end-to-end onset test, fix-until-working rule) and POSTMORTEM-1.md. Fable 5.1 consult done (stream verified claude-fable-5-1); adopted and qualified items listed in the plan.
- [x] Capability check: Live 12 Beta, AbletonOSC doctor, device load, notes, export.
- [x] A kit: 42 kit tracks rendered in slopp-kit-a.als, sliced, defaults chosen by measured pitch check (2 swaps).
- [x] B kit: chroma scan of all four stem sets; regions chosen by measured full pitch sets per cut unit; no gaps.
- [x] Musician (TDD), instrument (full pitch-set picker, colour fade at pivots), kits manifests, per-unit A/B levelling.
- [x] Audition clips A/B for 9 scenarios, analysed and model-described; rest level, levelling and gesture glints fixed.
- [x] Integration and browser QA (14 checks), latency harness (60 gesture renders), phone/tablet layout fix.
- [x] Independent review 1: BLOCK (turn button silent, A/B switch dropped gestures, failed loads cached, substitute-chord fallback; medium: reverb not density-ducked, stale latency evidence). All fixed with tests; B kit rebuilt with coverage-driven selection (136 units, 0 audible gaps).
- [x] Independent re-review: blocked once (retry after a failed B load left A playing); fixed with a browser regression; bounded re-check APPROVE (62/62 tests, 17/17 browser, 60/60 latency rows). Reports: .omo/evidence/slopp-sound-iter2-code-review.md, slopp-sound-iter2-rereview.md.
- [x] Morning handover: AB-ITERATION-2.md.

## Historical: original planning task (superseded by iteration 1 and iteration 2 above)

Task: planning only (no product code, music edits or publication). Delegated from thread 01a1382d-5bc7-7843-977d-10cc35364d36, 14 October 2026. Lead: claude-opus-5-5.

Deliverables:
- Plan: /Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/living-manuscript/sound-plan/SOUND-PLAN.md
- Listening evidence: /Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/living-manuscript/sound-plan/LISTENING-EVIDENCE.md
- Raw evidence, scripts, source map (kept outside the repo because one source filename names reference artists): /Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/

## Status

- [x] Read audio-judge memory, Ambient Eight brain note, project AGENTS/README/PRODUCT/DESIGN-CONTRACT/ENVIRONMENTS-PLAN/PLAN, and src/world.js, public/app.js, public/environments.js.
- [x] Gemini route: the v4-rebuild.env GOOGLE_API_KEY is free tier (429 at 5 RPM). Used the existing ~/.zshrc GEMINI_API_KEY. No values printed.
- [x] Measurements for all 7 tracks: measurements/*.json.
- [x] Listening: 58/58 calls (44 contiguous 60 s windows on gemini-3.6-flash, plus 14 whole-track passes on flash and gemini-3.1-pro-preview). listening/raw, digests in listening/digest_*.txt. Do not rerun.
- [x] Controls: negative pad PASS; high-noise timing PASS; soft 66 BPM kick FAIL (judge said no drums; measured 34.5% at 40–80 Hz). Judge "no beat" verdicts are therefore not evidence.
- [~] Per-window low-band pulse and percussive analysis (scripts/pulse.py): stopped unfinished at the parent's request to avoid a heavy orphan job. No results. Beat questions stay open in the docs.
- [x] Fable 5.1 independent brainstorm: native route model_verified; stream init and all primary messages claude-fable-5-1, is_error false. fable/brainstorm-result.md. Integrated with parent corrections (no +7 st ceilings, brightness claim overbroad, chroma keys are candidates, Meridian ambiguous, stems need a shared sample clock).
- [ ] Fable critique of the written plan: not run (parent asked for no further research cycle). Optional next step.
- [x] LISTENING-EVIDENCE.md written.
- [x] SOUND-PLAN.md written.
- [x] Pointer added to PLAN.md.

## Docs checked (14 October 2026)

- MDN Web Audio best practices and autoplay guide: create/resume the AudioContext inside a user gesture.
- navigator.audioSession.type "playback": Safari iOS 16.4+ (caniuse, MDN).
- Safari "interrupted" AudioContext state; WebKit bugs 273511 and 276016 (stuck interrupted or silent); 251532 (silent switch).
- Cloudflare Workers static assets: 25 MiB per-file limit.
- WebCodecs AudioDecoder: Safari/iOS 26+ only.
- Not verified: Opus decodeAudioData on iOS; AudioWorklet minimum iOS version (memory says 14.1). Test on a device.

## Observations outside scope

- Observed only, not attempted by this task and not a blocker: a separate Ambient Eight stem-bounce job (~/Music/ambient-eight/stems/log.jsonl) had exported Undertow Main.wav, and its later track exports logged dialog errors. Not touched.
- Parent review corrections applied 14 October: chord-change handling replaces any consonance guarantee; pitched grains from other tracks deferred (prototype uses Deepwater only); time-based accumulation; stem summing without shared nonlinear bus effects; worklet PCM duplication in the memory budget; docs links for browser claims; Haze and Deepwater edge levels qualified.

## A/B prototype (authorised 14 October, after the plan)

Scope: two comparable local prototypes in ONE scene (Loose ends), sharing the control model, input, lifecycle and UI. A = finished master passage plus granular derived detail. B = separate stems (pad / melody / texture / returns) driven independently. Matched loudness, reset and seed. No other environments, no release.

Stem inventory (read-only, /Users/alexwarren/Music/ambient-eight/stems/): four sets, all 48 kHz/24-bit stereo, equal length within each set.
- 03-undertow-stems (316.36 s): A-Reverb, Air-Bus, B-Delay, L3-Chords, L3-Hiss, L3-Sub, Pulse, S-Vox, Undertow (full mix).
- 04-haze-stems (294.55 s): A-Reverb, Air-Bus (−82 dB, effectively silent), B-Delay, L2-Lead, L2-Piano (sparse), L2-SawPad, S-Tex (about 40–96 and 144–200 s), S-Vox (about 96–144 and 200–248 s), Haze (full mix).
- 05-meridian-stems (301.82 s): A-Reverb, Air-Bus, B-Delay, L1-Air, L1-Bells, L1-Pad, Pulse, S-Tex, S-Vox, Meridian (full mix).
- 07-deepwater-stems (316.36 s): A-Reverb, Air-Bus, B-Delay, L3-Chords, L3-Hiss, L3-Sub, S-Tex, S-Vox (about 40–195 s; the disputed whisper is a real stem), Deepwater (full mix).
- Haze and Deepwater checked: the sum of the stems nulls against the full mix (−124.8 dB and −100.4 dB). The master sits 0.1 s off the stem render (coarse 8 kHz search). Undertow and Meridian not checked. Evidence: /Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/ab/stem_inventory.txt (the outer ART GENERATIVE/.omo, not living-manuscript/.omo).

Source chosen: Haze. Reasons: cleanest pad / melody / texture split; no Pulse stem; the most beatless master by measurement; S-Tex and piano active. Trade-off: the plan's palette put Deepwater in Loose ends, but Deepwater has no melody stem. For this prototype the scene plays Haze, and sound does not change with environment.

Loop actually used (supersedes an earlier 16-bar draft): bars 41–55, 149.090909–200.000 s of the stem render (14 bars, 50.909 s at 66 BPM), with a 2 s equal-power loop crossfade that borrows from 147.09–149.09 s. Why: the dry S-Vox stem is active until about 144.0 s and returns exactly at 200.0 s (0.5 s envelope check); 141.82 s would have clipped a vocal tail. The master offset was refined at 48 kHz to 0.09994 s (master earlier than the stem render). The stem sum of the prepared loops nulls against the prepared full-mix loop at −115.8 dB once Air-Bus is included (it is −66 dB in this region). Receipt: .sound-assets/haze-loose-ends/manifest.json, regenerated by scripts/prepare-sound-prototype.py.

Matched loudness: trimDb.b = +3.98 dB, trimDb.a = 0. Derived from the first capture set: still-a −16.89 LUFS, still-b −20.87 LUFS (the B rest balance lowers pad, lead and texture). Receipt: /Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/ab/analysis-v1.json. Re-verified on the final capture set (see AB-PROTOTYPE.md).

Accepted deviation from SOUND-PLAN.md: grains are scheduled from the main thread (25 ms tick, 0.25 s lookahead) for this local audition prototype only. Moving the grain engine into an AudioWorklet remains a requirement before any release.

- [x] Control-model tests first (bun), then public/sound/intent.js. 12 tests: onset/bloom, lingering release, 20 vs 120 Hz events, bursty same-timestamp delivery, stepping cadence, bounded frantic plateau, broad→wash and fine→scratch routing, speed asymmetry, pinch space/±40-cent glide/return, look-drag stir, seeded slow autonomy.
- [x] Asset prep script (scripts/prepare-sound-prototype.py) and local-only .sound-assets/haze-loose-ends (gitignored, served only by server/local.js at /sound-assets/, never in public/, dist/ or source.zip).
- [x] Engine A and B plus the shared bus, controller, UI and lifecycle (public/sound/engine.js, controller.js; app.js, index.html, style.css wiring).
- [x] First capture set (captures-v1, analysis-v1.json): A gestures were near-inaudible (wash +0.1 dB), so grain and bus gains were recalibrated toward the plan's ceilings. B trim +3.98 dB derived.
- [x] Review 1 (fresh Sol 5.6 code-review role): REQUEST_CHANGES, 7 blockers. All fixed or re-scoped (see AB-PROTOTYPE.md). Fixes include a real bug found through it: batched same-timestamp pointer events lost their movement, and sparse ticks under load under-integrated input; both are now covered by unit tests.
- [x] Browser QA passes on the final code (qa/QA-RECEIPT.txt).
- [x] Review 2 (fresh Sol 5.6 code-review role): REQUEST_CHANGES, 4 blockers. Fixed: equal-timestamp samples now flush on the next step and on stroke end (new test); mute is a linear ramp, exactly 0 output from 100 ms (mute-timing.json); build fails closed on audio under public/; evidence completed below. Should-fix done: sequential decode. Not done: app.js length (style), browser parity oracle uses the same model (it tests wiring, not the model).
- [x] Final capture set with final code: 16 WAVs in captures/ plus listen-mp3/ (default volume 0.7, limiter −3 dB, trim B +3.46 dB). Earlier sets kept: captures-v1, captures-v2.
- [x] Final measurements (analysis.json): resting loudness A = B = −17.39 LUFS; no capture above 0 dBTP, frantic −0.41/−0.21 dBTP (misses the −1 dBTP margin, documented); 20 vs 120 Hz 1 s envelope correlation 0.955/0.974.
- [x] AB-PROTOTYPE.md written (how to listen, mapping, evidence, limits, decisions).
- [x] Closure review (fresh Sol 5.6): first pass REQUEST_CHANGES on one item (same-timestamp out-and-back strokes still lost movement). Fixed by accumulating the full held path (test: out-and-back via step and strokeEnd within 15% of distinct timestamps). Re-check: APPROVE, no blockers (.omo/evidence/sound-ab-closure-review-code-review.md).
- [x] Peak margin: a fixed −2 dB post-limiter headroom gain. Worst case, frantic at volume 1.0: −1.75 dBTP (A), −1.66 dBTP (B); at 0.7: −2.33 and −2.21 dBTP (peak-check/true-peak.json). Earlier captures are linearly 2 dB louder than the final code would produce; relative measurements are unchanged.
- [x] One bounded Gemini check (judge/: wash-a, wash-b, scratch-a, scratch-b; neutral prompt). Both washes heard as low or pad swells at 14–15 s. B's scratch heard as a chime/sparkle at 13 s. A's scratch heard as constant crackle or water texture, listed as possibly non-musical. A model description, not human listening.
- Final: `bun test` 42/42 (13 sound control-model tests); browser QA pass; build guard pass. Outstanding for Alex: listening and choosing A, B or a hybrid; gesture strength; Haze vs Deepwater; idle speaker visibility. Not done by design: other environments, AudioWorklet engine, true-peak limiter, device tests (Safari interruption, silent switch, memory).
- Local preview for listening: http://127.0.0.1:8784/ (bun server/local.js, PORT=8784, detached). The older preview on 8783 runs pre-sound server code and serves no audio.
- HOTHOUSE in the Music library differs by SHA-256 from Downloads/2026-08-18_hothouse-m2-draft_ambient.mp3. Only the Music-library file was used.

