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
| Placement | A fixed 3D position and orientation; visitors can return from any angle |
| Saved style | Optional `space.environment` records the drawing's environment |
| Complexity | 128 strokes, 512 points per stroke, 4,096 points total |
| World boundary | Camera bounded to ±49,000; saved coordinates validated within ±50,000 |
| Existing contributions | Append only; no visitor edit/delete API |
| Sound | Silent; an ambient album layer is a later phase |

The world uses a repeating spatial field to give procedural places stable
identities. Contributions remain individually stored at their original
anchors. This is a bounded shared artwork, not infinite storage.

Local palettes stay fixed for an active draft. Crossing into another place
changes the tools for the next drawing; it never recolours earlier work.
Keep saved points and colour meanings compatible. Legacy paper records use
a deterministic spatial adapter and remain readable.

## Motion and interaction

Drawing stays direct. Release gently unfolds the drawn gesture into depth.
The surprise button draws lines progressively and opens colour shapes over
roughly three seconds. Depth interpretation is procedural and reproducible;
do not describe it as AI.

Drift has its own speed slider. Drag or arrows turn the camera; W/A/S/D and
Q/E move through space. Trackpad pinch travels forward or backward along the
current gaze without changing drift speed. Visitors can turn around and
revisit a trace. The “elsewhere” shortcut travels to another environment in
about four seconds; movement, drag, pinch, drawing or pause interrupts it.

Pause stops automatic motion. Reduced motion starts still, skips release
animation and makes the shortcut arrive directly. Hidden tabs suspend
rendering and travel. Drawing and the About dialog hold travel. No flashing,
camera rolls, countdowns, sound autoplay or attention rewards.

## What can grow

Exploration controls stay visible for the first thirty seconds, then fade after
three seconds without input. Pointer movement, touch or keys restore them
immediately. Drawing tools, open dialogs and keyboard-focused controls stay
visible. The fade lasts 800ms and is removed with reduced motion.

Contact me opens email to alex@sloppworld.com. Download still saves the current
canvas as a PNG without interface elements, with a hand-drawn sloppworld.com
signature. The lettering follows a curve selected around marks in the captured
composition, borrowing a nearby ink and varying its placement between exports.
Capturing a still does not pause or move the world.

Download animation captures eight seconds of the live canvas, with curved
handwriting that draws itself and gently moves. It uses the current drift
and camera, keeps all controls out, and saves MP4 or WebM according to browser
support. Pause and reduced motion also still the lettering. Captures are silent,
can be cancelled, and stop if the tab is hidden.

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

## Future sound

The visual release comes first. The next phase uses Alex's existing music
library, with slow crossfades between environments and layers emerging as
visitors explore. Sound needs an explicit start, permanently available mute
and independent volume. The visual world must remain complete in silence.

Environment definitions and the surprise deck live in `public/environments.js`.
Shared data limits live in `public/rules.js`. Update this contract with changes
to either, and keep existing data renderable.
