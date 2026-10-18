# slopp

Release your inner child.

A simple beautiful and abstract world of moving art. Explore six connected abstract environments,
draw into the air and make your own, leave a abstract message for someone to find. 

The spatial renderer uses Three.js 0.186.1 and unlit geometry. A persistent API
runs on Bun/SQLite locally or a Cloudflare Worker with D1. Drafts stay in the
browser; published contributions live in the shared database.


## Run locally

Install Bun, Node.js and the `zip` command, then:

```sh
npm install
bun run build
PORT=8783 bun run start
```

Open http://127.0.0.1:8783. The database is created in `data/world.sqlite`.
The default port without `PORT` is 8770; choose another if it is occupied.
Rebuild after changing `src/`; files in `public/` are served directly.

`bun run build` bundles the renderer into `public/world.js`, creates the
downloadable `public/source.zip`, and prepares `dist/server/index.js` and
`dist/client/` for deployment. Keep live databases out of source control.

## Explore and draw

Drag to look. W/S move forward and backward; A/D move sideways; Q/E move down
and up. Arrow keys look around. Pinch a trackpad to travel through depth.
The drift slider separately controls automatic travel. Space pauses when the
canvas has focus. “Elsewhere” visits the next environment.

Leave the world drifting to watch it without input. After five seconds facing
empty space, an artwork begins appearing in the distance. The opening uses
the original art; community drawings join after thirty seconds. These local
appearances stay in place and do not create new shared drawings.

“Draw something” starts a drawing at the current location or resumes a saved
draft. Choose a local colour and one of three tools. Undo removes a stroke.
Drawing begins at a gentle pace, keeping Pause and any slower speed. The
drawing pace slider lets you speed up again. Drift and movement keys keep
working while you draw. Hold or drag the pen to
leave a trail, or choose “Pause drift” to draw in one place. “Start drifting”
resumes movement, including after a reduced-motion start.
“Let it go” publishes the drawing, preserving a travelling trail's depth, and
restores the speed and pause setting from before drawing. Close or Escape
keeps a private draft for later. Only Let it go shares the drawing.
Empty drafts are discarded on close.

The round surprise button chooses a colour block, fine line, ribbon, cut-out,
scattered marks or another abstract gesture. It draws itself into the space.
The final result is deterministic procedural geometry, not AI generation.

Other browsers poll for contributions every five seconds. Failed drawing
writes keep the draft. Reduced motion starts still and skips automatic release
animations. The About dialog contains the original artworks, source download
and drawing export. Tap the speaker for the optional soundtrack; tap again to
mute. Six related musical palettes respond to movement, drawing and nearby art.
Sparse views make the music quieter; a soft layer continues until sound is
muted or the tab is hidden.

## Extend the work

Read [DESIGN-CONTRACT.md](DESIGN-CONTRACT.md) and
[CONTRIBUTING.md](CONTRIBUTING.md). The contract protects the artistic identity
as the project develops. The current preview plan is in
[ENVIRONMENTS-PLAN.md](ENVIRONMENTS-PLAN.md).

- `public/environments.js`: palettes, environment field and seeded surprise deck.
- `src/art.js`: original procedural compositions.
- `src/world.js`: 3D scene, camera, release animation and drawing interpretation.
- `public/app.js`: controls, drafts, publishing and shared polling.
- `server/api.js`: shared storage API; `public/rules.js`: data limits.

`GET /api/world` reads cursor-paginated contributions. `POST /api/marks`
publishes an idempotent contribution. `GET /api/world/export` exports JSON.
A spatial drawing includes `space.position`, `space.rotation` and optionally
`space.environment`. Points are `[x, y, pressure]`, with an optional fourth
value for recorded depth in the same drawing units as x/y (0.03 world units).
Depth requires spatial metadata and is bounded to ±3,000, like x/y offsets.
Existing paper records remain renderable. The API has
no visitor edit or delete operation.

## Checks

The environment pass has focused tests for locality, surprise variety,
depth interpretation, pinch behaviour and metadata persistence. Run:

```sh
bun test tests/environments.test.js tests/pinch.test.js
bun test tests/api.test.js -t 'spatial freehand|local environment'
```

`bun test` runs the data and geometry checks. `node tests/browser.mjs` checks
exploration, local tools, drawing/undo, draft recovery after a failed save,
shared updates, persistence, reduced motion and a phone layout using a temporary
database on port 8771. Install its browser with `npx playwright install chromium`.
The browser check follows the spatial UI; the previous 2D raster-cache check
does not apply to the WebGL renderer.

Code: MIT. Shared artwork: CC BY 4.0, see [ART-LICENSE.md](ART-LICENSE.md).
Music: all rights reserved, see [MUSIC-LICENSE.md](MUSIC-LICENSE.md). The source
download excludes recordings. Licensed release assets live in `music/kit-b3`;
the build copies them to `/sound-assets/kit-b3/`. With no installed music, the
world runs in silence. The publisher can regenerate the lossless release kit
with `bun scripts/package-music.js /path/to/approved-wav-kit` and FFmpeg.
