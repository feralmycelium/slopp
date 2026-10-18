# One world, many hands

This contract keeps slopp recognisable as other people develop it.
The maker approved this expanded direction on 13 October 2026.

## The language — design version 3

Cream ground, drawn gestures, solid colour and real depth. Six connected
environments have distinct structures, movement and small local palettes.
Neighbouring places borrow gestures. Quiet space matters as much as density.

Everything is abstract. Do not introduce photographs, figures, faces, literal
objects or copies of reference artworks. Artist references inform rhythm,
texture, scale and relationships. They are not a catalogue to reproduce.

| Element | Current parameter |
|---|---|
| Ground | Continuous cream, `#f0e8d9`, with a cream distance fade |
| Environments | Loose ends, Soft geometry, Almost touching, Overprint, Inside out, The hush |
| Colour | Four named inks per current environment; 13 named inks including legacy colours |
| Drawing | Three local tools: line, ribbon and filled shape, with different depth treatments |
| Surprise | Ten seeded gesture families, no immediate repeat in a browser session |
| Placement | A stable spaced display position and original orientation; stored anchors are preserved |
| Saved style | Optional `space.environment` records the drawing's environment |
| Complexity | 128 strokes, 512 points per stroke, 4,096 points total |
| World boundary | Camera bounded to ±49,000; saved coordinates validated within ±50,000 |
| Existing contributions | Append only; no visitor edit/delete API |
| Sound | Six connected stem palettes; opt-in playback, mute and independent volume |

The world uses a repeating spatial field to give procedural places stable
identities. Contributions remain individually stored at their original
anchors. A deterministic display layout gives each trace its own room, keeps
the opening clear, and preserves earlier display positions when new records
arrive. Your own releases keep their original drawing anchors for the current
session, so repeated Surprise presses can layer gestures in front of you.
Rendering, sound proximity and trace navigation use the same active placement.
The original environment artworks remain at full scale. The opening belongs
to them; community drawings begin after thirty seconds of visible use. One nearby
drawing is introduced every eight seconds with an eight-second fade, or
immediately with reduced motion. Introduced drawings keep their place through
turning and movement. Spatial separation and distance fog provide breathing
room; a camera-dependent composition cap must never hide visible artwork.
Outside the opening, supporting environment pieces occupy 7.5% of spatial cells,
with their existing size and positions preserved. An empty central view can
rest for five visible seconds, then a local artwork appears about ninety
world units ahead. It fades in over four seconds, immediately with reduced
motion, and stays fixed in world space. Before thirty seconds appearances
use authored art only; afterwards they alternate with weighted community
copies when available. They never change shared records or existing anchors.
An occupied central view receives no additional appearances. At most twelve
local copies are kept; distant copies are disposed, or the oldest offscreen
copy is retired when room is needed. Manual navigation and drawing restart
the wait. Hidden time does not advance it; automatic drift does.
This is a bounded shared artwork, not infinite storage.

Local palettes stay fixed for an active draft. Crossing into another place
changes the tools for the next drawing; it never recolours earlier work.
Keep saved points and colour meanings compatible. Legacy paper records use
a deterministic spatial adapter and remain readable.

## Motion and interaction

Drawing stays direct. Drift and movement keys remain active while drawing;
drag paints instead of turning the view. Pause drift / Start drifting stays
visible beside the drawing tools. A held pen leaves a trail as the camera
moves, and the ink stays at its world position. Travel depth is saved as an
optional fourth point value in drawing units; the third value remains pressure.
Legacy three-value points retain their procedural depth. Release gently
unfolds stationary gestures; a travelling stroke retains its recorded depth.
The surprise button draws lines progressively and opens colour shapes over
roughly three seconds. Depth interpretation is procedural and reproducible;
do not describe it as AI.

Drift has its own speed slider. Drag or arrows turn the camera; W/A/S/D and
Q/E move through space. Trackpad pinch travels forward or backward along the
current gaze without changing drift speed. Turn around reverses the full gaze,
including its vertical tilt, so visitors can see the route behind them without
changing position. The “elsewhere” shortcut travels to another environment in
about four seconds; movement, drag, pinch, drawing or pause interrupts it.

Pause stops automatic motion. Reduced motion starts still, skips release
animation and makes the shortcut arrive directly. Hidden tabs suspend
rendering and travel. The About dialog holds travel. Drawing respects the
current pause setting and caps entry speed at 10/100, leaving slower speeds
unchanged. The drawing pace slider can increase speed again. After a successful
Let it go, the speed and pause setting from before drawing are restored. Close
keeps the current pace and a private draft. Reduced motion starts still until the visitor
chooses Start drifting or moves manually. No flashing,
camera rolls, countdowns, sound autoplay or attention rewards.

Find a trace jumps directly to a weighted random saved contribution, excluding
the last one visited when another exists. It works during the opening too.
Automatic composition ranking gives higher-ranked pieces a better chance,
without excluding any drawing. Owner corrections use Feature, Automatic and
Less often in a localhost-only curation tool. The same weights guide gradual
introductions. This is a geometric preference heuristic, not an objective
beauty judgement; no public scores or leaderboard are shown.
The camera fits the whole drawing with room
around it on both portrait and landscape screens. Releasing a drawing or
Surprise leaves the camera in place and immediately reveals the new drawing.
The opening guide stays until closed
or drawing begins; Help reopens it, Escape closes it, and dismissal is remembered.

## What can grow

Exploration controls stay visible for the first thirty seconds, then fade after
three seconds without input. Pointer movement, touch or keys restore them
immediately. Drawing tools, open dialogs and keyboard-focused controls stay
visible. The fade lasts 800ms and is removed with reduced motion.

Contact me opens email to alex@sloppworld.com. Download still saves the current
canvas as a PNG without interface elements, with sloppworld.com in a simple
black sans-serif font at the bottom right, inset from both edges. The same
static signature appears in every frame of an animation.
Capturing a still does not pause or move the world.

Download animation makes an eight-second loop from the current view. A separate
snapshot follows a closed camera path with periodic artwork motion, so position
and motion join continuously. The live world remains free to explore.
WebCodecs exports all 240 frames at 30 fps, independent of rendering speed;
older browsers use real-time recording. MP4 or WebM is selected by browser
support. Pause and reduced motion produce a still loop. Exports contain no
controls or audio, can be cancelled, and stop if the tab is hidden.

New abstract environments, local palettes, drawing treatments, spatial
relationships, export tools and performance improvements can extend this
language. Each environment should have a distinguishable silhouette, a
motion character, a small palette and enough room to see individual marks.
Reuse a few neighbouring gestures without making every place a mixture of
everything. Preserve old contributions and review the rendered result.

Keep profiles, rankings, likes, chat, advertisements and arbitrary uploads
outside this core. The experience is exploring, drawing and leaving a trace.

Code is MIT licensed. Shared drawings use CC BY 4.0. Source and drawing
downloads make the work portable. Contributions to the live world need no
manual review; code and artistic identity changes remain deliberate releases.
Open source does not automatically deploy contributors' patches.

The current preview follows the maker's request for focused checks and direct
visual inspection before broader testing. Do not turn a creative preview into
a security audit or exhaustive review cycle.

## Sound

Alex's stem recordings form six distinct but related musical palettes.
Movement, visible artwork, drawing and surprise shapes gently shape the sound.
A quiet, overlapping musical layer continues without input. Sparse views
lower its dry level by up to 6 dB while reverb tails remain; emptiness never
mutes playback. Only visible introduced drawings can trigger proximity notes,
including local distant appearances. The mix uses softened attacks, a
-3 dB high shelf at 2.8 kHz and shared reverb. Playback starts only when the
visitor taps the labelled Turn sound on button, with Turn sound off to mute and independent volume available while
exploring or drawing. The visual world remains complete in silence.
Bell samples have a separate -6 dB trim before dry and reverb routing; this
leaves pads, other sound sources and the continuous background level unchanged.

The music is all rights reserved, separate from the open-source code and
shared drawings. See MUSIC-LICENSE.md. Downloaded source excludes recordings.

Environment definitions and the surprise deck live in `public/environments.js`.
Shared data limits live in `public/rules.js`. Update this contract with changes
to either, and keep existing data renderable.
