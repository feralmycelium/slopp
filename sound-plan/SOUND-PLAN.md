# slopp adaptive sound: implementation plan

Status: plan only, 14 October 2026. No product code, music edits or publication were made. Lead: claude-opus-5-5. Adviser: native claude-fable-5-1 (verified route), whose brainstorm was integrated with the corrections listed at the end. Listening evidence: [LISTENING-EVIDENCE.md](LISTENING-EVIDENCE.md). Ledger: [PROGRESS.md](PROGRESS.md).

## Update, 14 October: two comparable prototypes

Alex authorised two local prototypes in one scene, to compare and possibly combine. Both use the Haze passage at bars 41–55 in Loose ends, the same control model (public/sound/intent.js), the same input, lifecycle and UI, and matched resting loudness.

- **Version A (this plan's Path A):** the finished master passage as the bed, with granular derived layers.
- **Version B (stems):** pad, piano, lead, texture, air and the two returns played as separate synchronised layers. Gestures move their gains directly, and the same grain layers read from the matching stems.

Haze replaces Deepwater for this comparison because Deepwater has no melody stem; the full palette decision stays open. Status, evidence and the comparison: [AB-PROTOTYPE.md](AB-PROTOTYPE.md).

## What it should feel like

Beatless ambient music that keeps evolving by itself. Every movement nudges the soundtrack the way it nudges the canvas, so a visitor half-wonders "am I doing this?". Each gesture follows one envelope shape: a small response starts immediately, blooms gradually, accumulates only within a hard cap, and lingers on release. The bed underneath stays stable. Specifically:

- Speed makes musical detail accelerate, flutter and brighten.
- Pinch changes space and, slightly, pitch.
- Broad drawing washes a pad in.
- A fine pen draws out a scratchy, fluttering musical texture. It must not sound like pen foley.
- No note is triggered per pointer event.
- The mixed master is never sped up or pitched.
- Overlapping tails and harmony are composed deliberately. Nothing in the engine is assumed to make them consonant automatically.

## Core design rules

1. **Two kinds of sound.** The *bed* is the composed piece. Gestures never alter its rate, pitch or timing; at most it gets a slow gain dip or a slight tilt EQ for space. The *derived layers* (detail, wash, scratch) are made from the same environment's material, and gestures drive only them.
2. **Granulate the present, and manage chord changes explicitly.** Pitched derived layers read grains only from the current environment's own bed region, from a window just behind the bed's playhead (roughly 0.1 to 1.5 s). That keeps most grain content on the sounding chord, but it does not guarantee consonance: a chord can change inside the lookback window or during a long tail. At every marked chord change, therefore, the lookback window jumps to the new chord, and voices still holding the old chord are crossfaded out or released over 1–3 s. Transposition is limited to octaves (0, +12, rarely +24). Any other interval goes through a resonator tuned to the notes the pieces share. **Pitched material from another track is deferred** until chord-compatible regions have been selected and checked. Material from other tracks may be used now only if it is band-filtered noise with no pitch.
3. **Gestures set targets; the engine owns time.** Pointer and camera events only update target values. A clock inside the audio engine schedules grains as a random process at a rate that follows the smoothed target. Doubling the pointer event rate must not change the sound.
4. **Asymmetric envelopes with a hard cap.** Each layer has an onset acknowledgement, a bloom time constant, an energy integrator capped with soft saturation, and a long release.
5. **Autonomy overlaps gesture range.** Slow random walks (30–120 s periods) move the derived-layer parameters on their own, across roughly a third to half of the gesture range. Input is perceptible but deniable.
6. **Silence is complete.** The visual world is unchanged when sound is off. Sound starts only from an explicit tap; mute is always visible; volume is independent.

## Where it connects to the existing code

| Seam | File | Use |
|---|---|---|
| Frame callback every 8 frames with position, travel, environment | `src/world.js` (`onFrame`), `public/app.js` | Camera speed (per-second position delta), environment, and the crossfade value |
| `environmentAt(position)` → primary, neighbour, `blend` | `public/environments.js` | Equal-power or "dip-and-pivot" bed crossfade |
| Drift slider `state.speed` 0–100, `state.paused` | `src/world.js`, `public/app.js` | Speed target (combined with measured camera speed) |
| Trackpad pinch: `wheel` with `ctrlKey` → `world.dolly` | `src/world.js` `wheelTravel` | Pinch velocity and accumulated pinch. Read from `dolly` input, because `pinchRemaining` decays in about 55 ms |
| Drawing: `pointermove` adds points with `kind` (line/ribbon/form), `ink`, `event.pressure` | `public/app.js` | Pen speed, pressure, curvature, and stroke kind (fine versus broad) |
| Look drag `world.look(dx,dy)` | `public/app.js` | Optional, small: detail stereo spread |
| `document.hidden`, `visibilitychange`, reduced-motion, `blur` | both | Audio lifecycle |
| Touch: single pointer only, **no touch pinch** | `public/app.js` | A two-pointer pinch must be added for phones (a visual feature that audio depends on) |
| Controls footer, About dialog ("The world is silent for now") | `public/index.html` | Sound button, mute and volume; copy update |

New code lives in `public/sound/`: `intent.js` (a pure control model with no Web Audio, so it is testable under bun), `engine.js` (graph and lifecycle), `grain-worklet.js` (AudioWorklet) and `manifest.json` (assets, loop points, chord-change marks, gains). App wiring is a few calls from `app.js` and `onFrame`. **Audio files stay out of `public/source.zip` and out of the MIT-licensed tree** (see Decisions).

## Environment palette (default proposal; a taste decision)

| Environment (id) | Visual character | Bed (master-only) | Derived-layer source | Candidate key |
|---|---|---|---|---|
| Loose ends (flow), the start | wandering filaments | Deepwater, two cycles about 176–294 s | Pitched: Deepwater region only. Unpitched: HOTHOUSE's noise opening, band-filtered | A minor |
| Soft geometry (fold) | pleated colour, relief | Undertow, voice-free span to be chosen (about 0–110 s) | Undertow pad, sub swells | D minor |
| Almost touching (soft) | air between forms | Haze, about 60–180 s | Haze chimes and whistles | E minor / G |
| Overprint (print) | dry marks, the "Scratch" tool | Haze pad thinned, or the HOTHOUSE 33–200 s figure (decision) | Pitched: the chosen bed's own region only. Unpitched: HOTHOUSE noise, filtered | depends on the bed chosen |
| Inside out (echo) | one gesture, a few echoes | Meridian 0–60 s (voice-free) | Meridian bell or harp arpeggio and delays | G collection (centre ambiguous) |
| The hush (hush) | spare, enormous or small | Reduced bed: the neighbour bed heavily thinned, with a held resonator drone on C D E G A | Resonator only. Pitched grains from other tracks are deferred | shared common tones |

Perfect Loop 2 and Ambient v4 are reserved: too rhythmic for beds, and outside the key group. Ambient v4's kick-free arpeggio spans are an optional flutter source once confirmed by ear.

## Harmony and transitions

- **Working hypothesis, to be confirmed per loop region by chroma and Alex's ears.** The bed keys form a chain: D minor → A minor → E minor / G collection. Each step changes one note (B♭/B, then F/F♯). The pitch classes common to all of them are **C D E G A**.
- **One step apart** (for example Deepwater to Undertow): equal-power crossfade on `blend` across the middle 40% of the blend range, with the shared reverb carrying the tails.
- **Two steps apart** (for example D minor to E minor): **dip and pivot.** The outgoing bed low-passes and ducks before the incoming bed rises, so they overlap only briefly. A resonator drone on the shared pitch classes bridges the midpoint, and derived layers hold back for about 3 s.
- **Fast travel.** The 4-second `flight` uses the same rules, compressed. Reduced-motion arrival (instant) gets a 2-second audio crossfade.
- **Within a piece.** The manifest marks chord changes, found offline by chroma novelty and checked by ear. At each mark the grain read windows jump to the new chord, and wash, detail and scratch voices still holding the old chord are crossfaded out or released over 1–3 s. This reduces stale-chord overlap but does not eliminate it, so it is an explicit audition criterion.
- **Pitch from pinch** affects derived layers only, and never moves the bed's pitch.

## Gesture mappings

All numbers are **tuning hypotheses** for the first listening session, not specifications. Time constants are for `setTargetAtTime` or one-pole smoothing.

| Input | Derived signal | Musical effect | Onset / bloom / release | Bounds |
|---|---|---|---|---|
| Speed: max(drift slider, measured camera speed) | 0–1 smoothed speed | Detail grains: density about 0.5 → 6 per second, grain length 250 → 60 ms, a gentle tilt and band lift of up to about +4 dB at 3–6 kHz on the detail layer, amplitude flutter LFO 0.2 → 3 Hz | Acknowledged within 0.15 s; bloom about 1.5 s; release 6–8 s | Detail layer ≤ −8 dB relative to the bed. Bed playback rate untouched; bed tilt ≤ +1 dB |
| Pinch velocity, signed, plus accumulated pinch | in / out | In: drier, closer (reverb send down, pre-delay shorter). Out: wetter, farther, low-pass darker. Derived-layer detune glide of about ±20–40 cents that returns; sustained pinch-in can blend in an octave-up grain voice (≤ 30%) | Glide 0.3 s; return 2–3 s; space change 1–2 s | Pitch never past ±2 semitones; default ±40 cents |
| Broad drawing (ribbon or form tool, or wide fast strokes) | time-based energy integrator: normalised stroke distance per second × width factor × pressure, integrated over elapsed time with leak. Never counts points or events | Pad wash: long overlapping grains (300–800 ms, 4–8 overlaps) from the playhead window, low-mid band, slow drift | About +2 dB within 80 ms; bloom 4–6 s; release 12–20 s | Wash ≤ −6 dB relative to the bed; energy saturates (tanh) after about 20–30 s of continuous broad drawing (hypothesis) |
| Fine pen (line or thread tool, slow precise strokes, pressure) | ink energy (normalised distance per second × pressure, integrated over time), curvature, pressure | Scratch cloud: 8–30 ms grains from the current bed region's high band, octave-up, jittered position. Curvature drives a small per-grain detune flutter (±15–30 cents); pressure moves the band centre. A light resonant comb bank on C D E G A in the high octaves gives the "screech" a pitch | Acknowledged within 40 ms; bloom about 2 s; release 6–8 s | ≤ 40 simultaneous grains; layer ≤ −9 dB relative to the bed; density follows the smoothed target, never the pointer event count |
| Frantic scribble or extreme speed | all integrators | Plateau: caps hold, the bed stays audible | n/a | Master limiter only as a safety net (true peak ≤ −1 dBTP), never as part of the sound |
| Look drag (optional) | yaw velocity | Detail stereo spread ± small | 0.5 s / 3 s | Width change ≤ 20% |
| Release ("Let it go") and the animated surprise | event | One gentle wash swell on the current chord, through the same envelope. No discrete notes | bloom 2–3 s; release 10 s | Counts toward the same caps |
| Stillness | none | Bed plus autonomous drift only | n/a | Derived layers fall to autonomous levels within 20 s |

## Architecture

### Path A: master-only prototype (build first)

- **Bed.** A pre-cut loop region for each environment, prepared offline: cut at bar boundaries (1 bar = 3.636 s at 66 BPM where it applies), crossfade baked into the loop point, gain-matched to −16 LUFS, then encoded. It plays as one decoded `AudioBufferSourceNode` with `loop`, so the loop is sample-accurate. Region length is 60–120 s; a decoded stereo float buffer costs about 21 MB per minute.
- **Grain engine.** One AudioWorklet that reads the *same* decoded buffer. It knows the bed playhead from the shared `AudioContext.currentTime`, so "granulate the present" is exact. It renders detail, wash and scratch voices with per-voice band filters. The resonator bank and shared convolver (or feedback delay) run on native nodes.
- **Memory.** Keep the current and neighbour environments decoded and release others once they are 20 s out of range. Raw region PCM alone is about 21 MB per stereo minute, roughly 85 MB for two 2-minute regions. That is not the full budget. If the bed plays from an \`AudioBuffer\` while the worklet holds its own PCM copy (posted channel data), every region is resident twice. Count also crossfade overlap (three regions briefly), the convolver impulse response, and decode temporaries. Preferred: the worklet owns the only PCM copy and renders the bed loop itself, or regions get shorter. The real requirement is to measure total resident memory on a real phone (Safari Web Inspector or the platform memory tools) during a transition, and set region lengths from that number.
- **Assets.** AAC or MP3 at 160–192 kbps is the primary format, still subject to a device test. Opus is optional: its \`decodeAudioData\` support on iOS is unverified. Each file stays under 25 MiB, the Cloudflare static-asset limit ([limits](https://developers.cloudflare.com/workers/platform/limits/)). Load lazily by environment proximity. AudioWorklet support on the oldest targeted iOS version is also unverified and goes into the device matrix.

### Path B: aligned stems (full implementation)

- Each environment has 4–6 stems (see the specification below). **Independently streamed stems are not acceptable**: media elements drift and cannot be sample-locked.
- **Shared sample clock.** All stems of an environment are cut into identical chunks of 8–16 s, decoded with `decodeAudioData` per chunk, and scheduled as `AudioBufferSourceNode`s started at exactly `t0 + n × chunkFrames / sampleRate` on one `AudioContext`.
- **Chunk boundaries must be sample-exact.** Use lossless WAV or FLAC chunks, or lossy chunks encoded with explicit priming and padding trimmed by a manifest offset and verified. WebCodecs `AudioDecoder` is Safari/iOS 26+ only ([caniuse](https://caniuse.com/mdn-api_audiodecoder), read 14 October 2026), so it is not the primary path.
- **Memory.** About 3 chunks ahead per stem.
- **Required drift test.** Sum the stems in-app over 10 minutes. The inter-stem cross-correlation lag must stay 0 samples at the start and the end, and the sum must null against the reference pre-master render to −40 dB or better.
- **What stems change.** The detail and scratch layers read the detail and air stems, so transposed grains no longer carry bass. "Details flutter" becomes literal. Voice and pulse stems become optional layers the engine can hold back. The bed is assembled from the remaining stems.

## Mobile, unlock and lifecycle

- Create or resume the `AudioContext` inside the Sound button's tap handler ([MDN best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices), [MDN autoplay guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay)). Set `navigator.audioSession.type = "playback"` first where supported (Safari iOS 16.4+ per [caniuse](https://caniuse.com/mdn-api_navigator_audiosession); [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioSession/type)); this matters for the silent switch ([WebKit 251532](https://bugs.webkit.org/show_bug.cgi?id=251532)).
- **Safari "interrupted" state** ([MDN state](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state); screen lock, background, another audio app, phone call): show "tap to restore sound", call `resume()` from a gesture, and if the state reads running but output is silent, rebuild the graph. WebKit has bug reports of contexts stuck interrupted or silent ([273511](https://bugs.webkit.org/show_bug.cgi?id=273511), [276016](https://bugs.webkit.org/show_bug.cgi?id=276016)). All browser-version claims were read on 14 October 2026 and must be rechecked at implementation time.
- **Hidden tab:** fade out over 0.3 s, then `suspend()`. **Visible:** resume and fade in over 1.5 s.
- **Pause:** leaves music playing and freezes the autonomous drift; this is a decision.
- **Drawing mode:** keeps sound.
- **Reduced motion:** does not affect audio.
- **Touch pinch:** add two-pointer pinch to `app.js`, feeding `world.dolly` the same way trackpad pinch does.
- **Performance budget:** worklet CPU about 15% or less on a mid-range phone; no main-thread grain scheduling, because the WebGL frame loop is the bottleneck; at most one convolver; at most 64 active grain voices in total.

## Phased build

Each phase ends with Alex's ears on captured renders, recorded offline or from `MediaStreamDestination`. No autonomous speaker playback.

### Phase 0: asset prep and verification (0.5–1 day)

1. Re-measure brightness in per-band dB for each loop region, replacing the energy-share figure.
2. Verify candidate keys per region with chroma, and mark chord changes.
3. Pick voice-free and kick-free loop regions from LISTENING-EVIDENCE, and confirm the open beat and voice questions with Alex in one short listening pass.
4. Cut, gain-match, bake loop crossfades, encode, and write `manifest.json`.
5. Test: seam discontinuity below threshold, and LUFS of each region within ±1 LU of target.

### Phase 1: one-scene listening prototype (2–3 days)

Loose ends with the Deepwater bed. All pitched derived layers use the Deepwater region only; HOTHOUSE's noise opening may be added band-filtered and unpitched. Plus Sound, mute and volume UI. This is test-first. Behavioural tests on `intent.js` under bun:

- Onset reaches the acknowledgement level within 0.15 s (speed) or 0.04 s (scratch).
- Bloom reaches 90% within its window.
- Release falls below 5% by its release time.
- The same motion delivered at 20 versus 120 events per second gives output within 5% (no event-per-note behaviour).
- Frantic input holds every layer at or below its cap.
- Stillness returns derived layers to autonomous levels.

Browser tests (Playwright, offline rendering):

- No `AudioContext` exists before the Sound tap.
- Mute reaches zero gain within 100 ms.
- Hidden tab suspends the context.
- Existing visual tests still pass with sound off.

### Phase 2: audition and interaction acceptance (2 days, including one tuning round with Alex, about 1 hour)

Scripted gesture renders and a live session, judged by Alex's ears. The Gemini judge may only describe captures through neutral prompts with null and positive controls, and never decides acceptance.

| Scenario | Pass condition |
|---|---|
| Stillness, 5 minutes | Evolves audibly; loudness within ±2 LU; no gesture layers |
| Slow drift → fast speed | Detail accelerates and brightens; bed unchanged in pitch and tempo |
| Pinch in and out | Space change heard; pitch glide subtle and returns |
| Broad wash | Pad blooms over seconds; lingers 10–20 s |
| Fine scratch | Reads as a musical texture, not pen sound |
| Frantic 60 s | Plateaus; bed audible; no clipping (true peak ≤ −1 dBTP measured) |
| Lifecycle | Background, lock, silent switch, call interruption and Bluetooth on an iPhone; Android Chrome; desktop Safari and Chrome trackpads |
| Coherence, 10 minutes | No harmonic clashes in tails; no audible loop seam |
| Causality A/B | Alex hears paired captures (gesture-driven versus autonomous-only, same seed) and guesses which had input. Target: right more often than chance, but not trivially (rough guide 60–80%) |

### Phase 3: six environments and transitions (2–3 days)

- Remaining beds and manifests, lazy loading, and memory release.
- Crossfade rules, including dip-and-pivot, and the hush treatment.
- Test: an automated camera walk through every adjacent pair has no gap below −40 dBFS longer than 1 s and no loudness bump above +2 LU. Alex listens to the transitions.

### Phase 4: mobile hardening and touch pinch (1–2 days, needs Alex's phone)

The lifecycle matrix above, plus the memory ceiling on a real device.

### Phase 5: aligned stems (2–3 days after delivery, plus about 1 hour of Alex's time for export)

The Path B engine, the drift and null test, and stem-specific mappings.

### Phase 6: release preparation (half a day; Alex approves publication)

- Music licence and asset hosting.
- Exclude audio from `source.zip`.
- Update the About copy and the design contract's sound row.

## Stem delivery specification

- **Format:** WAV, 24-bit, at each piece's session rate (the masters are 44.1 kHz; Perfect Loop 2 is 48 kHz). Every stem for a piece has the same start sample and length, starts on a bar, and includes tails.
- **Groups per piece:**
  - Bed: pads and chords.
  - Low: sub and bass, mono acceptable.
  - Detail: bells, plucks, arpeggios, sequences.
  - Air and texture: noise, hiss, the air bus.
  - Voice: Suno vox and similar.
  - Pulse: only if present.
- **Effects and summing.** Every stem shares a common zero point and an identical length. Bypass any shared nonlinear processing on the main or master bus (limiter, saturator, compressor) for every stem render; applying it to isolated stems will not sum back to the mix. Export shared returns (reverb, delay) as their own stems. Each return's contribution can be printed into individual stems only if it is linear and verified not to be duplicated in the returns.
- **Reference.** Prefer a pre-master full-mix render of the same span from the source project, with the same bus bypass, for the null test (target −40 dB or better). Report the mastering gain and any master processing separately, so the app can reapply a static gain.
- **Notes per piece:** tempo, bar positions of the recommended loop regions, and any known chord changes.
- **Source set caution.** The 17 July masters came from `8 ambient tracks +suno.als`. A later `+suno d4.als` changed the air envelope over other pieces. Stems from d4 must pass the null test against a pre-master render from the same set before use.
- **Asset prep.** Locate each piece's session during asset prep (the Ambient Eight set is listed in the brain note; HOTHOUSE, Perfect Loop 2 and Ambient v4 sessions were not looked for in this planning task), and choose an export route (scripted or manual).

## Master-only fallback

If stems never arrive, Path A is the product. Derived layers come from frequency-banded grains of the bed's playhead window, and the voice and pulse spans are avoided by choosing loop regions. Missing compared with stems: no clean isolation of arpeggios from pads, octave-up grains carry some low-mid content (reduce it with band filtering), and voice layers cannot be optional.

## Decisions for Alex

1. The environment-to-track assignments above, and what The hush and Overprint use.
2. Whether Meridian's "still up there" and the vocal fragments in Undertow and Deepwater may appear, either as rare events or never.
3. Whether HOTHOUSE's steady figure, and the possible soft pulse in Undertow and Meridian, count as "beatless enough".
4. Whether Perfect Loop 2 and Ambient v4 are excluded, or used only as source material.
5. Whether a remembered sound preference resumes on the first tap of a new visit or always asks again; and whether pause keeps the music playing.
6. Whether the music ships inside the open-source download (it should not be MIT-licensed by default) or is hosted separately as all rights reserved.

## Advice integrated, and corrections applied

Adopted from Fable 5.1:

- Streamed or decoded beds with a separate worklet grain engine.
- Excerpt-based memory planning.
- Leaky integrators with asymmetric time constants and hard caps.
- Autonomous drift overlapping the gesture range.
- Failure-mode tests for event-per-pointer feel, saturation, transitions and soak.
- Keeping reference artists' names out of the repository.

Corrected:

- **Its pitch ceilings of up to +7 semitones are replaced** by ±40 cents by default and ±2 semitones at most, on derived layers only.
- **"Filtering cannot brighten a master" is overbroad.** Relative balance can change, and the under-0.2%-above-2-kHz figure is an energy share that understates treble. It will be re-measured in Phase 0.
- **Mean-chroma keys are candidates.** Meridian stays ambiguous between G major and D mixolydian.
- **"Swap streamed beds for stems" is replaced** by a shared-clock, sample-exact chunk engine with a required drift and null test.
- **Media-element beds are replaced** by decoded region buffers. The grain engine needs the exact bed playhead. Memory must then count duplicate PCM copies; see Path A.
- **Its point-count accumulation (saturating at 2,000 points) is replaced** by time-based integrators of normalised distance, velocity and pressure, so the event-rate-independence test can pass.

Corrected after the parent's review:

- "Granulate the present" no longer claims guaranteed consonance; chord changes are handled by explicit crossfade or release.
- Pitched grains from another track are deferred; the prototype uses only Deepwater for pitched material.
- The stem specification no longer prints shared nonlinear main-bus effects into stems.
- An earlier, unrelated stem-export failure is not presented as a current blocker.

## Estimate

Phases 0–4 (master-only, all six environments, mobile hardened) take about 8–11 working days of implementation, plus about 3 hours of Alex's listening across three sessions. Stems add 3–4 days after delivery.

