# slopp sound, iteration 2: design and build plan

14 October 2026. Lead: claude-opus-5-5. Adviser: claude-fable-5-1 (native route; model verified in the stream, details at the end). Supersedes the musical direction of SOUND-PLAN.md and AB-PROTOTYPE.md (both kept as history). Postmortem: [POSTMORTEM-1.md](POSTMORTEM-1.md). Ledger: [PROGRESS.md](PROGRESS.md).

**Authority.** Alex's audition feedback and corrected brief (14 October, relayed by the parent thread). Alex then authorised building both versions overnight, without further approval, for a morning listen. Values marked *(tune)* are hypotheses. Everything delivered is a draft for Alex's ears.

## What a visitor should hear

The default is near-silence, not a quieter loop.

- **Arriving:** a faint hum or fuzz, one held note filtering slowly in and out with plenty of reverb, or almost nothing.
- **Touching:** answers at once. As the hand starts to move, a chime or airy swoosh sounds. The same stroke again gives a related voice on another note. Broad tools let a soft chord bloom; fine tools give a bright, fluttering, pitched sparkle.
- **Bigger moments** are caused by the world: flying towards a drawing as it grows on screen, the surprise button drawing itself, crossing into another place. Each adds detail and a little volume, then lets go.
- **Sustained activity thins itself out,** so calm keeps returning even while someone keeps drawing.

## Two versions, one musician

Both versions share one **musician**: the same input, the same palette rules, states, budgets and limits. Only the **instrument kit** differs.

| | Version A: original | Version B: your stems |
|---|---|---|
| Source | New sounds made in Ableton Live 12 Beta with stock instruments and effects, played from new MIDI. The seven tracks guide mood, harmony, timbre and pace only; none of their recordings is played, sampled or granulated. Provenance sidecar per file. | Alex's supplied stems from **all four** stem sets (Undertow, Haze, Meridian, Deepwater), cut into short regions with measured pitch and chord labels. No pitch shifting. |
| Units per palette *(tune)* | About 10 onset files (5 notes × 2 variants, 1–3 s); 3–5 held tones (8–15 s, loopable); 4–6 micro-phrases (2–4 notes, 1.5–3 s); 1 rest texture (hum or fuzz). | The same unit types: onset regions (single bells, piano or lead notes, pad attacks, texture breaths), held-tone regions, short phrase regions, and a rest texture (hiss, air or returns). Each carries a measured dominant pitch class and chord set. |
| Pitch variety for repeated strokes | Rendered per pitch. | Chosen from separate regions with known, different dominant notes. A palette needs at least 4 distinct-note onset regions. If a palette cannot reach 4, its fine-pen answer uses fewer notes plus timbre variants, and the gap is recorded. |

The browser performs choice, timing, one filter, send, gain and pan. Every timbre comes from Live (A) or the stems (B). No browser-synthesised tone is presented as music.

Iteration 1 is the historical baseline. Its "A" was the master plus grains, a mistake, and it is not relabelled.

## Harmony

**The shared material is a working hypothesis, not a guarantee.** The pitch classes common to the references' candidate keys are **C D E G A**. Each palette has a home degree and one colour note, following Fable's assignment, which gives each place its own centre of gravity:

| Palette | Home | Colour | Character |
|---|---|---|---|
| Loose ends | D | B♭ | wandering thread |
| Soft geometry | A | F | filtered chord folds |
| Almost touching | E | F♯ | sparse breath, the most silence |
| Overprint | G | F | rough, short, saturated |
| Inside out | D | B | pure tones with pitched echoes |
| The hush | A | F♯ | whisper and a very high soft bell |

Colour notes can clash across a boundary (for example F against F♯, or B♭ against B). Transitions therefore follow explicit rules:

1. **Pivot.** As the blend passes about 0.3 towards the neighbour, colour-note voices of the outgoing palette are released over 1–2 s, and no new colour notes start from either side until the blend passes about 0.7.
2. **Common tones.** The held tone during a crossing is chosen from notes both palettes share (always within C D E G A).
3. **Evidence.** For B, the selected regions' measured chroma decides what is allowed. A region whose energy sits on a pitch class outside its palette's set is rejected. A region with a colour note is tagged and obeys the pivot rule. Each crossing pair is checked with a short layered render and listened to via the ears route (described, not verdict).

## Six palettes (from `public/environments.js`)

| Palette | Art | Response, both versions | A timbre candidates (checked in Live before use) | B source candidates (accepted only after measurement) |
|---|---|---|---|---|
| Loose ends: Thread, Ribbon, Colour | wandering filaments | Thread steps to a neighbouring note per stroke; Ribbon or Colour starts a held tone | soft mallet or pluck with light delay; breathy wavering tone | Deepwater chords and pad attacks; Meridian air |
| Soft geometry: Line, Fold, Cut-out | pleated colour | Fold gives a two-note dyad; Cut-out a short gated chime; chord cutoff follows movement | filtered pad; mallet | Meridian pad and bells |
| Almost touching: Wander, Ribbon, Shape | air between forms | one note with a long tail; long gaps | breathy, flute-like swoosh | Haze pad swells and single lead notes |
| Overprint: Scratch, Brush, Patch | dry offset marks | Scratch gives short grainy pitched chirps; Patch a stacked tone | detuned, saturated keys; bowed or plucked edge | Haze piano and S-Tex; Undertow hiss |
| Inside out: Contour, Band, Shape | nested contours | Contour gives a phrase with echoes; Band a sustained tone with echoes | pure tone through pitched delay | Meridian bells and delay return; Deepwater delay return |
| The hush: Whisper, Smudge, Patch | spare, huge or tiny | Whisper gives a near-inaudible breath and one bell; Smudge a slow filter sweep | filtered noise whisper; distant high bell | Undertow air, sub and chords (reduced) |

**Crossings** follow `environmentAt().blend`, with gains and rule weights crossfaded along it, never switched. Blend tracking speed follows travel speed: slow travel draws the change out over 8–12 s, fast travel or "elsewhere" takes 2–3 s *(tune)*. This keeps the pace character Alex liked.

## The musician: shared rules

### States

| State | Sound | Entry and exit |
|---|---|---|
| Rest (default) | At most one quiet element: hum or fuzz, a held note around −30 dB filtered in and out on a 20–40 s cycle, or silence | 4 s without input: voices release over 3–6 s. 15 s: only an optional held tone. 60 s: hum or fuzz or nothing. Idle autonomy fires at most one event per 90–180 s and never two before the visitor acts *(tune)*. |
| Touch | Immediate onset plus a voice that lives for the stroke | stroke start or surprise |
| Event | Approach detail, surprise figure, crossing | salience, surprise, blend |
| Release | Tails ring out | after touch or event |

There is **no mandatory floor**. The held tone and hum are choices of the rest scheduler (seeded): hum about 35%, held tone 35%, nothing 30% *(tune)*. Neither runs constantly.

**Motion does not leave Rest.** Drift and travel only recolour the rest element and set the blend tracking speed. They may add at most one sparse detail per 20–30 s while moving. Quiet stays reachable while moving and while drawing (see the density governor).

### Drawing

- **Onset bypasses smoothing.** On stroke start the onset unit is scheduled directly on the audio clock, outside the control model, with an attack of 20 ms or less. Smoothing applies only to the sustained voice that follows the stroke.
- **Target, end to end:** audible onset no more than 30 ms after the pointer event, including envelope and asset latency. Assets for the current and neighbouring palettes are preloaded. This is measured in the browser (see Tests), not inferred from the scheduling time.
- **Pitch walk.** The next note is one or two steps from the last within the palette's set, never the same twice. Fast strokes may jump an octave. Upward strokes lean upwards.
- **Pitch only on new voices.** Pinch glides ±40 cents on new voices only.
- **Broad tools** start with a softened onset (attack of 60 ms or less, still clearly immediate) and then a chord bloom of 1–2 s. They never stay silent for a "slow attack".
- **Direction changes** may add articulations at no more than 3 per second, on palette notes only.
- **Tails** last 2–6 s.

### Density governor (anti-relentless)

- Count onsets per 10 s. Above about 6, each new onset is 1 dB quieter (floor −9 dB), notes lengthen and the reverb send ducks.
- After 20 s of continuous drawing, only touch onsets and held tones respond; detail layers stop.
- A total of 8 voices; the oldest tail is released first.
- One shared reverb whose send scales inversely with onset rate, plus a gentle compressor on the return so tails cannot accumulate.

### Surprise button

Sound is scheduled as the strokes appear over the roughly 3 s draw-on. It comes from the generated stroke list (count, kind, span) through one generic mapping:

- a long line gives one swell;
- many short marks give a cluster of short plucks;
- forms give one stacked tone each;
- stitches give quick repeats;
- nested contours give a phrase with echoes;
- ribbons and gestures give a glide.

The drawing's seed fixes the notes, so the same drawing gives the same figure.

### Salience (approaching a drawing)

- Prominence is based on screen space: the projected screen area of the drawing's bounding sphere, counted only when the drawing is in front of the camera and inside the view (frustum test). Hidden or behind-camera drawings count zero.
- It is smoothed (1 s rise, 3 s fall) with hysteresis: the detail layer enters above 4% of the screen and leaves below 2.5% *(tune)*.
- It unlocks a micro-phrase detail layer seeded by the drawing's id, with gain capped at +3 dB. It never becomes a bed.

## Implementation shape

- `public/sound/musician.js`: pure and testable. Events in, voice events out. It holds states, walks, governor, budgets, surprise mapping and salience smoothing.
- `public/sound/palettes.js`: the six palette configs.
- `public/sound/instrument.js`: plays voice events from a kit manifest through Web Audio (buffers, envelopes, one filter, shared ducked reverb, limiter, headroom). Onset scheduling happens directly in the input handler.
- Kits: `.sound-assets/kit-a/` and `.sound-assets/kit-b/` (gitignored) with `manifest.json` (unit, palette, note, chroma, provenance).
- The existing controller, lifecycle, mute, volume, A/B and input wiring are reused. The labels become **"A · original"** and **"B · your stems"**. Iteration 1's engine stays in the tree, unused.

## Build sequence

1. **Capability check.** Live 12 Beta launches, AbletonOSC `doctor` responds, a device loads, notes land, a set saves and one export works. Live has changed version since the last recorded check, so this is re-verified first. If Live is truly blocked after diagnosis, A is reported blocked with verified fallbacks; reference audio is never substituted.
2. **A sketch.** Two contrasting palettes (Loose ends and The hush). Up to 3 candidate patches per voice, then render, slice, sanity-check (silence, clipping, onset under 20 ms, tail) and run a bounded audition. Choose defaults and keep the rest as drafts. Then complete all six palettes.
3. **B kit.** Chroma scan of candidate regions across all four stem sets, cut with fades, label pitches, gain-match, sanity-check and run layered crossing checks.
4. **Musician (TDD), instrument and kits.**
5. **Short audition clips before integration**, about 20 s each for A and B: rest alone, one stroke then five repeats, broad bloom, surprise (scatter and bars), approach, crossing, frantic. Analyse quiet-to-full contrast, onset lag, voice counts and peaks, plus a neutral ears description. Fix what fails.
6. **Integration and browser QA**, including the end-to-end onset measurement. Then one broad capture pass.
7. **Independent review** per gate, then the morning handover.

**Failure handling.** Required behaviour (immediate onset, real rest, palettes, both kits, surprise and approach response) is fixed until it works. Diagnostics and retries stay narrow. Only a requirement that is truly blocked by a missing input or capability is marked blocked, with evidence. A run with a failing core feature is not reported as complete. Linear gain changes don't get full re-renders; there is one broad capture pass plus targeted re-renders. No speakers. No publication.

## Tests and acceptance

- **Unit (musician):** stroke start yields exactly one onset event per stroke, independent of event rate; repeated strokes give different notes within the set; rest timeline reached; motion alone never leaves Rest; governor and budgets under frantic input; pivot rule (no colour notes started between blend 0.3 and 0.7); surprise determinism per seed; salience is zero behind the camera and has hysteresis.
- **Browser:** no audio context before the tap; A/B labels; end-to-end onset (pointer event to first audible output, through a monitored analyser or the offline render) of no more than 30 ms plus the audio output latency the browser reports; palette crossing; surprise; approach; mute; lifecycle; phone fit.
- **Audio (clips):** rest level 12–20 dB below the touch and event peaks; peaks at or below −3 dBTP; tails decay to rest within the stated times; ears description of each clip type (no verdict).
- **Human:** Alex's morning listen decides taste. Passing tests do not mean musical success.

## Risks and choices

- **Warmth vs eeriness.** Minor material and constant high tones read as eerie. Rest stays low and warm, high tones are mostly short, and pentatonic material dominates.
- **Direct response vs clutter.** One onset per stroke, the governor, budgets and pivots.
- **Coherence vs monotony.** A different home degree and colour note per palette, distinct attack shapes, seeded walks and motifs.
- **B constraints.** No pitch shifting and stems with printed reverb limit the notes available. Regions are kept short, and the gaps are recorded.
- **Process.** Short clips first, one broad pass, no restarts of correct jobs.

## Fable 5.1 consult

- **Route and verification.** Native Claude Code route, `claude-fable-5-1`. The stream's initial model and every primary message reported `claude-fable-5-1`, with `is_error` false and 4 turns (exact-model probe earlier this task: `model_verified`). Full text: `/Users/alexwarren/Documents/ChatGPT/ART GENERATIVE/.omo/evidence/slopp-sound/fable/redesign-result.md`.
- **Adopted:** near-silence as the default; the rest timeline; onset that bypasses smoothing; the density governor; per-palette home degree and colour; surprise sound from the stroke list; the unit sizes; preloading only the current and neighbouring palettes; B sliced by labelled pitch; a layered compatibility check.
- **Not adopted, or qualified:**
  - Fable presented the shared pool as "everything stays consonant". Replaced with pivot rules and measured evidence.
  - A pure browser filtered noise for The hush. Its whisper must be rendered in Live (A) or taken from stems (B).
  - Its suggestion to bounce the first audition clips from Live before any browser code. A's kit is bounced from Live, but the behaviour clips use the browser offline renderer, because they test the musician.

