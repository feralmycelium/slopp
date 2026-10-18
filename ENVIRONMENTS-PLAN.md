# slopp: a world of different gestures

Approved direction, 13 October 2026. Next deliverable: local playable preview.

## The work

1. **Six connected environments.** Loose ends: fine wandering filaments. Soft geometry: pleated colour and shifting relief. Almost touching: asymmetric cut forms with space between them. Overprint: dry, offset marks and irregular hatching. Inside out: nested angular contours and long elastic bands. The hush: enormous spare gestures and small intimate marks. Shapes remain entirely abstract. Spatial anchors and shared boundary motifs join these places into one continuous world.
2. **Make with the place.** Four or five local inks and three simple tools, with names and depth treatments suited to each environment. Freeze the palette and environment when a draft begins. Store that environment with the drawing; old drawings retain their colours and position.
3. **A surprise that draws itself.** A shuffled deck of colour blocks, delicate lines, cut shapes, ribbons, scratches, scattered marks, stacked contours and loose gestures. Avoid immediate family repetition. Draw lines progressively, open colour patches, unfold into depth over roughly 2–3 seconds. Keep anchors fixed. Manual drawings also unfold on release. Pause arrests ambient motion; reduced motion shows the finished trace directly.
4. **Present the playable result.** Focused behaviour checks for metadata persistence and surprise variety, build, and direct visual inspection of environment changes and release. Preserve existing saved art. Present locally before broader testing or publication.

## Visual qualities

Flat colour rhythm, relief and alternating repetition, asymmetric forms,
dry brush and print misregistration, nested contours, changes in scale,
hand tremor, fine filaments and nearby pastel colours shape the environments.
Keep every composition abstract: no faces, figures, flowers or copied artwork.
Cream ground, drawing, spaciousness and playful colour come directly from
Alex's brief. Describe the work through its own forms and behaviour; reference
artists' names do not belong in the source or published documentation.

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

## 15 October — quieter arrival and discovery

Alex approved a clear opening, generous spacing between traces, random saved
trace discovery, closable instructions and a more obvious sound toggle.
The implementation preserves saved artwork and original storage coordinates;
a deterministic display layout gives each composition room. Visibility is
limited to three separated compositions, including procedural scenery.
Find chooses a saved trace without an immediate repeat and frames its actual
ink bounds, including on portrait screens. New releases use that same layout.

The guide remembers dismissal, reopens from Help and closes with Escape.
Turn sound on / Turn sound off is a persistent labelled control with a 46px height,
including during drawing and idle. Find cannot move an active draft.

Detailed plan and verification: `UX-PLAN-2026-10-15.md`. Creative proposals from
GPT-6 and verified native Fable 5.1: `IDEAS-2026-10-15.md`. The recommendation
is to prototype plucking a line, followed by invited responses to an unfinished
gesture. These proposals are not implemented or approved as additional scope.

Verification: 40 normal tests and 18 sound-musician tests passed; final desktop
and phone browser acceptance passed after the visibility repair, with eight
criterion groups recorded. Independent Sol 5.6 review identified that repair,
and the new browser regression reproduced the failure first. Lead
inspected actual renders with the 154-contribution local preview and a smaller
320x568 window. Audio output remained muted; physical touch and other browsers
were not exercised. Local preview is http://127.0.0.1:9742/; public deployment
is unchanged.

## 16 October — sound wording and disappearing drawings

Alex clarified that the sound label must describe the action: Turn sound on
to listen, Turn sound off to mute. Visible and accessible labels now match.
Help and About explain the immersive soundscape and how drawing, movement
and discovering traces trigger its sounds.

Fixed a visibility regression introduced by the spacing pass: off-screen
drawings could acquire enormous projected rectangles and suppress visible
art. Test the actual camera frustum first, then prefer compositions centred
in the view over mostly off-screen bounds. Scenery uses its measured centre.
Both failures were reproduced before repair: one renderer regression and one
composition-selection regression. With the copied 154-trace world, a sweep
through 57 positions that included the failing view produced no empty frames;
the previously blank view now renders three separate compositions.

## 16 October — restore core art and gradual shared discovery

Alex reported continued disappearance and missing core pieces, requested a
reset, then chose our artworks for the opening and shared traces after a few
minutes. The three-composition screen filter is retired. Full-scale authored
landmarks are restored; trace layout reserves space around them. Radial fog
and distance loading leave drawings stable through turns and travel.

After 120 visible seconds, one nearby trace is selected every twelve seconds
and fades in over eight seconds (immediate in reduced motion). Find and new
releases appear immediately. Once introduced, a trace remains eligible for
rendering at its fixed position. Hidden time does not advance the opening.

Alex chose automatic composition ranking with corrections, explicitly as
higher selection probability. Find and timed introduction use weighted random
choice: relative automatic ranks give 1–6x weight, Feature gives 12x, Less often
gives 0.35x. Every drawing retains a chance, and Find avoids immediate repeats.
The heuristic measures gesture extent, density, balance and palette; it cannot
establish objective aesthetic merit. No public scores or leaderboard.

`bun run curate` opens the localhost-only owner review server at port 9743.
Feature, Automatic and Less often save to public/curation.json, with undo.
The preview reloads these preferences; the public site receives them only in a
later authorised release. Drawing records and unrelated analytics are intact.

## 16 October — Surprise layers and curation startup

Surprise and manual release now keep their original drawing anchors for the
current session and immediately appear without moving the camera. Repeated
Surprise presses can layer new gestures while earlier ones are still drawing.
Subsequent syncs preserve those local positions; other visits use the shared
spaced layout. Stored strokes, orientation and anchors are not rewritten.

Curation startup now catches failed module imports as well as data failures,
ends a stalled load after ten seconds, and provides Retry loading with the
failure reason. Recovery from a blocked module and a stalled response is
exercised in the browser tests, alongside saved choices, undo and phone layout.
The reported load failure was a direct file:// opening of scripts/curation.html.
Computer Use opened the running HTTP page at port 9743 and verified 174 drawing
previews. The working browser tab remains open.

## 16 October — draw while travelling

Alex requested drawing during movement. The camera now continues drifting
while the pointer paints; W/A/S/D, Q/E and arrow keys remain available.
Pause drift / Start drifting is visible with drawing tools on desktop and
phone. A held pen samples the journey even without pointer motion.

An optional fourth point value stores travel depth, preserving pressure as
the third value and accepting previous three-value records. Drawing uses a
plane in front of the current camera, so passing through the original draft
plane does not stop the pen. Lines and filled shapes preserve depth through
release and reload. Framing and spacing include the complete 3D bounds.
The existing drawing bounds still apply; reaching them pauses drift and asks
the visitor to release the trail before starting another. Reduced motion
starts still until the visitor chooses movement.

Verification: 61 unit tests and desktop/phone motion-drawing browser checks
pass. Held-pen trails, moving filled shapes, saved depth, pause, movement keys,
reduced-motion start, plane crossing, long empty drift and stationary depth
are exercised. Final screenshots are in .evidence/drawing-motion. Surprise
layering still passes. Preview rebuilt; no public deployment.

## 16 October — gentle drawing pace and return to travel

Drawing caps entry speed at 10/100, preserving lower speeds and Pause. A
visible drawing pace slider lets visitors speed back up. Close keeps a private
local draft; the toolbar explains that only Let it go shares it. Alex then
requested that Let it go restore the previous pace: a successful release now
restores the speed and pause setting captured when drawing opened. A failed
release leaves the drawing open at its current pace.

Focused desktop and phone checks passed after reproducing both failures:
fast drawing entry, and release retaining the drawing pace. Checks include
slider synchronization, reduced-motion start, private draft recovery after
reload, failed-release retention, and successful pace restoration. Existing
moving line/fill depth and persistence checks also pass. Screenshots inspected
at 1440×900 and 390×844. Tests used temporary databases only.

## 16 October — a little more artwork, earlier community arrival

Alex clarified the density target: more of both original and community art,
with occasional empty stretches, and community drawings after thirty seconds.
The main artworks and shared placement remain unchanged. Supporting pieces
now occupy 7.5% of eligible spatial cells instead of 5%. Weighted community
introductions start after thirty visible seconds and continue every eight
seconds, retaining the eight-second fade and reduced-motion override.

Observed the thirty-second arrival test fail before changing the three
parameters. Desktop/phone checks now pass for the core-only opening, four
introductions by about one minute, hidden time exclusion and continuity during
turns and movement. Inspected final journey views; the three sampled positions
each have one more nearby supporting piece and still leave quiet stretches.
Evidence: .evidence/visibility/results.json and its screenshots. No changes to
visitor records or saved curation preferences; tests used a temporary database.

## 16 October — unattended viewing and quiet continuous sound

Alex requested a distant artwork after five seconds facing empty space, with
hands-off exploration continuing indefinitely. They clarified that sparse
views should quiet the sound without switching it off. Local appearances now
fade in over four seconds, stay anchored, alternate core and weighted community
art after the thirty-second opening, and never publish new records. A cap of
twelve plus distance disposal bounds allocation; only offscreen copies may be
retired at capacity. Drawing, manual navigation and hidden time interrupt the
empty-view wait. Drift remains eligible. Visibility considers geometry, opacity
and fog, including filled polygons covering the viewport.

Sound proximity now follows visible introduced artwork, including local copies.
The quiet bed overlaps instead of randomly leaving silent gaps; its dry level
falls by up to 6 dB in empty views. Start, mute, volume and hidden-tab behavior
remain visitor-controlled. Actual 90-second offline renders across six palettes
have no silent gaps after startup, no clipping, and lower RMS in the empty-view
comparison. These are rendered-output checks, not a subjective listening claim.

83 unit tests pass. Desktop and reduced-motion phone scenarios verify five-second
arrival, core-only opening, later community appearance, stable anchors,
hidden/drawing suppression, twenty further journey positions and sixty seconds
of uninterrupted drift. Both routes travelled about 760 units; the longest
sampled empty stretch was six seconds. Surprise layering also passes. Screenshots
inspected, build/diff checks pass, existing in-app preview refreshed and visibly
rendering. Evidence is .evidence/passive; independent Sol 5.6 review approves.
Fable 5.1 advised the approach; router model receipts checked. No deployment,
speaker playback or visitor-database test writes. projectctl is not installed
on this host; this repository ledger records the ruling.

## 16 October — quieter chimes and correct return view

Alex clarified that the pads were already balanced; only the chimes were too
loud. Added a -6 dB trim for the kit's meridian-bells source before dry/reverb
routing. Other sources, pad levels and background remain unchanged. Matched
seeded before/after renders verify -6.00 dB for an isolated chime, 0.00 dB for
an isolated foreground pad and unchanged ambient RMS. Eight output passages
were captured without speaker playback; no subjective audition claimed.

Turn around previously added pi to yaw but preserved pitch, so an inclined
journey did not reverse toward the path behind. A browser regression failed
at pitch .6 (direction dot -.362 instead of -1). The fix also negates pitch.
Desktop and phone now pass level/up/down/steep reversal, unchanged position,
double-turn restoration and a recently passed drawing returning into view
at its original anchor. Screenshots inspected in .evidence/turnaround.
All 35 focused sound tests pass. No visitor database test writes, curation
changes or public deployment. See .evidence/foreground-balance for renders.

## 16 October — plain download signature

Alex replaced the animated handwritten signature with simple black
sloppworld.com text at the bottom right of every still and animation.
Both export paths now share the same Arial canvas text, with inset margins;
all video frames keep the complete text fixed and opaque. Removed the retired
curve, borrowed-colour and handwriting code and its obsolete tests. World
motion, video encoding, sound and contribution storage are unchanged.

PNG download browser checks pass; inspected landscape, second-view and phone
exports. The headless animation check exceeded its 60-second download timeout;
the actual in-app preview exported successfully. Verified that MP4 has 240
frames at 30 fps over eight seconds and inspected frames at 0, 4 and 7.96 seconds:
the signature stays black, complete and stationary while artwork moves.
Loop-motion unit check, build and diff check pass. Evidence: .evidence/watermark.
Existing preview refreshed and retained. No deployment or curation changes.

## 18 October — approved website release in progress

Alex approved implementing the preview changes and updating the website.
Release scope is the completed drawing, spacing, core-first arrival, passive
viewing, sound, guide, navigation, draft, curation and export changes recorded
above. Existing public Sites project, audience, drawings, analytics and music
licensing remain in place. Prepare against hosted version 14 in the isolated
slopp-release-2026-10-18 checkout; retain the primary working tree.

All 80 default tests and 16 additional instrument/stroke tests pass. Source
synchronization and live verification are in progress; no new version deployed
yet.
