# Untranslatable: a world of different gestures

Approved direction, 13 October 2026. Next deliverable: local playable preview.

## The work

1. **Six connected environments.** Loose ends: fine wandering filaments. Soft geometry: pleated colour and shifting relief. Almost touching: asymmetric cut forms with space between them. Overprint: dry, offset marks and irregular hatching. Inside out: nested angular contours and long elastic bands. The hush: enormous spare gestures and small intimate marks. Shapes remain entirely abstract. Spatial anchors and shared boundary motifs join these places into one continuous world.
2. **Make with the place.** Four or five local inks and three simple tools, with names and depth treatments suited to each environment. Freeze the palette and environment when a draft begins. Store that environment with the drawing; old drawings retain their colours and position.
3. **A surprise that draws itself.** A shuffled deck of colour blocks, delicate lines, cut shapes, ribbons, scratches, scattered marks, stacked contours and loose gestures. Avoid immediate family repetition. Draw lines progressively, open colour patches, unfold into depth over roughly 2–3 seconds. Keep anchors fixed. Manual drawings also unfold on release. Pause arrests ambient motion; reduced motion shows the finished trace directly.
4. **Present the playable result.** Focused behaviour checks for metadata persistence and surprise variety, build, and direct visual inspection of environment changes and release. Preserve existing saved art. Present locally before broader testing or publication.

## Reference interpretation

All eight 13 October Design Atlas profiles are unscored reference seeds, not scored user verdicts: Camille Walala (flat colour rhythm), Adam Nathaniel Furman (relief and alternating repetition), Alex Proba (asymmetric forms and accent), Laura Slater (dry brush and print misregistration), Hattie Stewart (nested contour and playful density, no faces), Rose Wylie (scale and radical empty space, no figures), Marion Deuchars (hand tremor and direct marks), Bastianilk (tender fine line and pastel proximity, no figures or flowers). These are our abstractions from the profiles and inspected reference images, not copied compositions.

Earlier scored anchors: `tezos-dragonfly-31759`, 10/love, fine ghost filaments; `brutalist-leojamesart-com`, 10/love, no written reason, so no invented rationale. Cream ground, drawing, spaciousness and playful colour come directly from Alex's brief.

Lead and native Fable 5.1 independently considered the direction. The verified consultation used the existing Claude Max route and returned the requested primary model. Adopt its relief, scale contrast and surprise-deck ideas. Reject rigid prohibitions on visitors' gestures and a one-world-only prototype: Alex asked for creative freedom and distinct connected environments in this pass. Keep implementation with the lead because world geometry, rendering, local tools and saved metadata are closely coupled.

## Implementation / motion

- Shared environment definitions and deterministic surprise generator in `public/environments.js`; procedural sculpture geometry in `src/art.js`; navigation and scene lifecycle in `src/world.js`.
- Existing JSON payload stores optional `space.environment`. No table migration or deletion. Legacy marks still render.
- Environment sculptures stay at fixed anchors. Slow bounded deformation differs per family; parallax reveals the relief. Boundary motifs use the neighbour's geometry in a small proportion, never blend all palettes into a gradient.
- Local palette changes only between drawing sessions. A quiet environment label and “elsewhere” shortcut make the six places discoverable. Explicit travel lasts about four seconds; drag, keys, pinch, pause or drawing interrupt it. Reduced motion arrives directly.
- Release progressively reveals line geometry and colour surfaces, then expands depth. Its seed and stored environment determine the final sculpture for every visitor. This is procedural interpretation, not an AI service.
- Preserve pinch-to-travel independently of drift speed. Keep pause, draft recovery, original art archive and shared persistence.

## Progress

- [x] References and bounded independent art-direction consultation.
- [x] World geometry, local tools and animated surprise implementation.
- [x] Focused checks and direct visual inspection.
- [x] Local preview presented, project ledger and open-source contract updated.

## Observed result

Six focused behavioural tests pass: environment locality, surprise variety,
depth interpretation, pinch independence, spatial persistence and environment
persistence. The Worker/client build succeeds. The actual browser shows all
six different environments, changing palettes and tools, successful freehand
release and two different animated surprises. Desktop and 390px-wide drawing
controls were inspected. A reduced-motion preference was observed setting
pause to true and speed to zero; environment travel arrived directly.

Fixed empty drafts returning visitors to the wrong environment, and made a
manual release reset any automatic draw-on range before unfolding. No browser
errors were reported in the inspected views. Broader regression and physical
trackpad testing were not run. The old browser script still targets the earlier
interface. This is a local preview; the public deployment is unchanged.

Design skills already read for this work: Apple interaction/web guidance
(free travel and interruptible controls), Emil (bounded motion, pause and
reduced motion), Impeccable (cohesion and restrained UI), verify-rendered-visual
(actual screenshots), and Docs Guard (source-matched contributor notes).
Native Fable 5.1 supplied bounded artistic advice; it did not implement or test.
