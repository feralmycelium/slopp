# Iteration 1 postmortem: the first A/B (14 October 2026)

**Outcome:** technically working, artistically rejected by Alex on first listen. In Alex's words, both versions are "eerie and relentless, always going, not sufficiently interactive, insufficient respite/calm".

## Verified causes (from code, measurements and logs)

1. **The wrong A.** Alex meant A to be new, original music, composed with the seven tracks only as references. We built A as the finished Haze master plus grains drawn from that master (`public/sound/engine.js`, which plays `buffers.master`). So the comparison was "master vs stems of the same recording", not "original vs stems".
2. **An always-on loop with no rest.** Both versions loop a 50.9 s Haze passage continuously. At rest the measured short-term loudness only ranges between −19.2 and −15.1 LUFS (`analysis.json`, still-a and still-b). The autonomy layer also never goes to zero: detail up to 0.30 and wash up to 0.22 of full (`LIMITS.autonomy`). Nothing in the design could reach quiet.
3. **Imperceptible response, by design.** The brief at the time asked for ambiguous causality, and the gestures were tuned subtle. Measured against stillness:
   - speed: −0.03 dB level (A);
   - pinch: ±0.1 dB;
   - A scratch: +0.7 dB;
   - the onset acknowledgement was 15% of a layer that then bloomed over 2 s.

   Alex now wants soft aesthetics with obvious, immediate causality.
4. **A noisy scratch layer.** The bounded Gemini check described A's scratch as "vinyl crackle / water droplet texture" and listed it as possibly non-musical. That evidence existed before delivery, but it was reported as a caveat rather than fixed.
5. **Tests proved mechanics, not music.** 42 passing tests checked envelope shapes, event-rate independence and limits. None could say whether the response was audible, musical or calm enough. The first human listen rejected it.
6. **Process cost.**
   - The full 16-file capture was rendered 4 times (`captures-v1`, a partial v2, v2, and the final set), and once more after an unnecessary restart: I misread a grep and stopped a correct job.
   - One capture crashed the renderer under load (load average 40–145).
   - The browser QA needed several reruns to separate test-harness issues from real defects.
   - Three review rounds found real bugs (same-timestamp events, mute timing, build exclusion), but no review was asked to judge musical behaviour.

## Inferred (not proven)

- The eeriness comes from the source passage: Haze is E minor or G collection, with a high, sustained, "whistling" lead (the Pro judge's description) under continuous reverb returns. The minor material and constant high tones probably drive the feeling more than the engine does.
- The relentlessness also comes from the stems' printed reverb and delay returns, which were always on in B and carried in the master in A.

## What changes in iteration 2 (SOUND-PLAN-2.md)

- A is composed new in Live; B uses stems from all four stem sets.
- Rest is the default state, with hum, a held tone or near silence, and no mandatory bed.
- Drawing answers immediately with one musical voice per stroke, and repeats vary the note.
- Voice, reverb and fatigue budgets keep calm possible during sustained activity.
- Short audition clips come before integration, with one broad capture pass afterwards.
- Reviews include a musical-behaviour check (quiet-to-full contrast, onset lag, voice counts) alongside the code checks.

