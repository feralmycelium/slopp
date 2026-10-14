# Sound plan 3: six unmistakable palettes, one family

Lead: claude-opus-5-5. 14 October 2026. Extends SOUND-PLAN-2 (approved) after Alex's iteration 2 listen: "B is not bad", but only 3–4 sounds come through, the six palettes sound alike, and the link to the screen is unclear. Goal, in Alex's words: six unmistakably different palettes that are still tied together.

## What was wrong (parent audit, confirmed in code)

1. B sourcing collapsed: four palettes used Meridian bells, two used the Haze lead; broad and held came mostly from Undertow chords or Meridian pad.
2. All three tools reached sound as only fine or broad. The planned per-palette tool behaviours never existed.
3. A stroke made one sound at its start. Broad strokes ignored movement entirely, lifting the hand released nothing, and slow and fast strokes sounded identical.
4. The instrument ignored stir, salience, rest ducking and the echo setting, and glide only reached new voices.
5. The gesture palette lagged behind the visible palette by a 10 s blend.

## Design

**One family.** All six palettes keep their pentatonic core (C D E G A) and one colour note, the colour-pivot rule, one shared reverb space and the calm rest scheduler. Every stroke ends with a lift answer: one note a fourth (or fifth) above the stroke's first note, in the palette's own timbre. Surprise figures open with the same interval. The call (stroke) and answer (lift) is the recurring motif heard in every palette.

**Six identities.** Each palette differs in register, sound source and articulation, so the same gesture sounds different in each.

| Palette | Register | Line tool (Thread / Line / Wander / Scratch / Contour / Whisper) | Ribbon tool (Ribbon / Fold / Ribbon / Brush / Band / Smudge) | Shape tool (Colour / Cut-out / Shape / Patch / Shape / Patch) | B sources |
|---|---|---|---|---|---|
| Loose ends (flow) | middle | wandering plucks: one note per distance travelled, walking with direction | warm held ribbon, brighter and louder with speed, bends with up/down | chord bloom over the ribbon | Meridian bells; Haze SawPad; Meridian pad; Meridian air |
| Soft geometry (fold) | low-middle | dyads (two notes a fourth apart) at corners, muffled | pleated chord: an amplitude gate whose rate follows speed; cutoff follows speed | cut-out stabs: short gated chord stabs, faster with speed | Undertow chords (held and stab cuts); Meridian bells; Undertow reverb |
| Almost touching (soft) | high, airy | one note with a long tail, then a long gap | breath: air through a band filter that follows height | air swell plus one lead note | Haze lead; Meridian air; Meridian pad |
| Overprint (print) | middle, dry | grainy pitched scratches: grain rate and brightness follow speed | brushed grain texture | stacked piano tone over texture | Haze piano and S-Tex grains; Meridian S-Tex; Undertow hiss |
| Inside out (echo) | high | contour: notes at turns, then the contour echoes back twice after lift | band: a held wash with echoed onsets | bloom with echoes | Meridian bells; Undertow and Meridian delay returns |
| The hush (hush) | low, with one distant bell | whisper: near-silent breath plus one distant bell | smudge: a sub voice under a slow low-pass that opens with movement | low patch, slow filter | Deepwater hiss and S-Tex; Undertow sub; Meridian bells; Meridian pad |

A uses the same behaviours on its own Live presets (missing roles fall back: voice→held, stab→broad, breath→rest, sub→held, grain→fine). No reference or stem audio enters A.

**Held expressive voice.** Each stroke keeps one voice per stroke while the hand moves. Speed sets brightness and level (and grain or gate rate), curvature sets flutter, up/down bends pitch by at most about 25 cents, x sets pan, and pressure scales level. Control messages are throttled to about 25 per second, and new notes come from time and distance budgets, never one per pointer event. On lift the voice releases with the palette's tail, followed by the answer note and, in Inside out, the echoes.

**Screen agreement.** New gestures use the palette shown on screen immediately. Ambience, rest and the colour pivot keep the slow blend, so tails crossfade instead of switching.

**Engine.** The instrument gains held voices with a per-voice filter, flutter LFO, gate LFO and pan; control and release by id; grain playback from an offset; a rest bus that ducks; glide applied to active voices; and reverb ducking with density.

**B bank.** Staged as `.sound-assets/kit-b3/` and switched only once complete, so the live preview never loses files. Units are cut from all four sets per the table, with measured pitch sets and per-palette coverage. Longer evolving regions (12–20 s) are used for held voices.

## Acceptance (sparse, musical)

1. The same Line, Ribbon and Shape gestures rendered in all six palettes give measurably different register, brightness, onset density and envelope. A human listen decides whether they are different enough.
2. A slow and a fast pass of the same path differ audibly (brightness, level, note or grain count). Lifting releases the held voice.
3. A crossing clip shows the gesture palette switching at once while the tails crossfade, and the answer motif appears on both sides.
4. Calm still holds: rest gaps, density governor, onset within 60 ms, no beat grid.
5. A local audition page (not part of the art flow) plays the six palettes with the same gestures, for both A and B.

No paid listening judges. Metrics are not taste; Alex's ears decide.

