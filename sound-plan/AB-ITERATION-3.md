# Sound iteration 3: six palettes, one family

Lead: claude-opus-5-5. Branch `codex/shared-manuscript`, uncommitted. Nothing published. Plan: SOUND-PLAN-3.md.

**Current choice:** Alex has retired A. The world and listening page now use only the stem version, with the softer mix below. Earlier A/B evidence is retained as development history.

## Latest mix adjustment — 14 October

Alex prefers the stem version and approves the improved interactions. B is now slightly softer and wetter: short attacks start with a 14 ms ramp, upper frequencies receive a gentle -2.5 dB shelf, output is 0.8 dB lower, and the reverb return is 40% higher. Gesture timing, palette identities, reverb decay and density ducking are retained. A is unchanged. The comparison clips use this new mix. Numeric listening evidence below describes the earlier iteration 3 mix unless stated otherwise; the new focused test is `tests/sound-soft-mix.mjs`, with its results in PROGRESS.md.

## Compare the six palettes (about 6 minutes)

1. Open http://127.0.0.1:8784/sound-assets/review/index.html (local audition page, outside the art flow and the public build; the folder URL without index.html returns Not found).
2. Each palette plays the same gestures in the same order: slow line, the same line fast, slow rising ribbon, the same ribbon fast, a shape, a short tap, then tails.
3. Play the six palette clips, then the crossing clip. Each now has one player, using your stems.
4. To try it live: http://127.0.0.1:8784/, tap the speaker, press **elsewhere** to change palette, then draw with each of the three tools.

## What each palette is now

| Palette | Line register (B, from reel selections) | Line tool | Ribbon tool | Shape tool | B foreground sources |
|---|---|---|---|---|---|
| Loose ends | middle, MIDI 64–76 | wandering plucks, one per distance, brighter when fast | warm held ribbon: speed opens the filter and raises the level, up/down bends, curves flutter | bloom over a dark held ribbon | Meridian bells (mostly an octave down), Meridian pad, Deepwater hiss |
| Soft geometry | low-middle, MIDI 57–67 | muffled dyads at corners | pleated chord: dips per distance travelled, cutoff follows speed | cut-out stabs, one per distance | Haze lead (an octave down), Undertow chords (held and stab cuts) |
| Almost touching | high, MIDI 79–84, few notes | one long note, then a long gap | breath: air through a band filter that follows height and speed | air swell with one soft lead note | Haze lead, Meridian air |
| Overprint | polyphonic piano-chord and texture grains at native rate, no single pitch; brightness centroid about 820 Hz slow, 1,340 Hz fast | grainy scratches: rate and brightness follow speed | brushed texture, grains thicken with speed | stacked fifth over a dark texture | Haze piano chord grains, Haze S-Tex, Haze lead, Undertow hiss |
| Inside out | high, MIDI 76–83 | notes at turns, then the drawn contour echoes back twice | held SawPad wash with echoed onsets | bloom with echoes | Meridian bells (native pitch), Haze SawPad |
| The hush | low breath and sub, one distant bell at MIDI 96 | near-silent breath plus one distant bell | sub voice under a slow low-pass that opens with movement | dark held texture and a slow low bloom | Deepwater hiss, Undertow sub, Deepwater S-Tex, Meridian bells |

Foreground sources are the ones that carry each palette's identity. Every source played in each clip, including supporting pads, chords and rest textures, is listed on the audition page from the reel logs.

**What ties them together:** the same pentatonic core with one colour note per palette, one shared reverb space, calm rest, and a sparse call and answer. A long first stroke after a pause is answered once by a note a fourth or fifth above its first note, at most every 6 s (12 s in The hush). Quick repeats and short taps stay silent.

**Screen and sound agree:** a new gesture always plays the palette named on screen. Ambience and tails crossfade over the travel blend. A palette's colour note is part of its sound across its whole area. It pauses only in the narrow band at the boundary (blend 0.42 to 0.5) and until a crossing settles, and the outgoing palette's colour voices fade as the crossing starts.

**Retired A · original:** used the same behaviours on its own Live presets. It is no longer loaded or offered by the app.

## Evidence

- Measured, not heard. Line register comes from the reel's actual selections: for single-pitch samples, sample note plus the logged playback rate (B: fold 57–67, flow 64–76, echo 76–83, soft 79–84, hush bell 96; A: fold 57–67, flow 62–76, print 67–81, echo 76–83, soft 79–84, hush 96). Overprint's B grains are polyphonic chord and noise cuts played at rate 1, so the guide gives their measured brightness band instead of a pitch range.
- Isolated renders, fast vs slow ribbon (level while moving): +4 to +11 dB in most palettes in both kits. Darker B sources (pads, sub) change mainly in level, less in brightness.
- Pre-softening reel metrics (`.sound-assets/review/metrics-before-softening.json`): B hush ribbon is 94–100% low end, the others 0–25%.
- Scheduled notes for the same line, slow (3 s) / fast (0.5 s), from the reel event logs and identical in A and B: flow 13/3, fold 10/6 (dyads count both notes), print 13/4 (grains), echo 8/3 (echoes not counted), soft 2/1, hush 1/1. The onset counts in metrics.json come from a detector that also counts ringing and tremolo, so they are not note counts.
- Tests: `bun test` 81 pass, covering musician, strokes (six distinct behaviour signatures per tool, slow/fast, held voice, release, sparse answer, bounded output, screen palette, contour echo), instrument lifecycle (renewal, queue, cleanup, real crossing fade) and harmony (pitch sets, coverage, source rank, pivot, octave placement). `node tests/sound-browser.mjs`: 18 real-browser checks pass, including a ribbon shaped by 30 control messages and released on lift. `node tests/sound-latency.mjs`: 60 gesture renders audible within 60 ms of scheduled time, and the reverb tail ducks 15 dB under density.
- Independent review: the first pass blocked on an Overprint register overclaim and two over-trusting tests. All three are fixed, and the bounded re-check approved. Report: `.omo/evidence/slopp-sound-iter3-review.md`.
- Audition page check: all 14 clips load (12 × 22 s, 2 × 26 s); screenshots in `.omo/evidence/slopp-sound/iter3/review-desktop.png` and `review-phone.png`.
- No paid listening judges were used for iteration 3. Nobody has listened to these clips yet; Alex's ears decide.

## Limits

- Haze piano is sparse (about 12 usable chords), so Overprint's pitched grains rely partly on Haze S-Tex noise.
- The very first stroke right after tapping the speaker can sound late (up to about 0.4 s) while the audio device starts.
- B's darker sources respond to speed mostly through level, less through brightness.
- Real devices are untested.

