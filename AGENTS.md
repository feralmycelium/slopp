# Working on slop

Alex named the project slop, with “release your inner child” as its invitation.
The repository is https://github.com/feralmycelium/slop. Preserve local draft
keys and stored identifiers. Keep reference artists' names out of code,
comments, published documentation and downloadable source.

Read DESIGN-CONTRACT.md and PRODUCT.md before changing the experience.
Alex approved the six-environment spatial direction on 13 October 2026.
Keep cream ground, entirely abstract drawn forms, small local palettes,
distinct environments and continuity through borrowed gestures. Drawing and
exploring are the core. No profiles, social dashboards, chat or uploads.

The world is Three.js/WebGL, with a shared Web Request API. Keep source in
src/ and public/; regenerate public/world.js using bun run build. Environment
definitions and surprise generation are shared through public/environments.js.
Store space.environment with new drawings. Preserve legacy marks and original
ink meanings; never rewrite applied database migrations.

Use focused behavioural tests for changed data and interaction rules. Tests
write to temporary databases, never the visitor preview database. Observe
the actual rendered result before reporting it ready.

Current ruling: present creative previews before heavy testing. No additional
security audit or exhaustive review cycle. A local preview is not a public
deployment. The 13 October release is visual; adaptive sound using Alex's
existing music library is the next phase, with explicit start and visible mute.

Keep the plan and progress in ENVIRONMENTS-PLAN.md and the local PLAN.md ledger.
Code is MIT and shared contributions are CC BY 4.0. Preserve the source and
drawing exports so the work can develop without the original makers.
