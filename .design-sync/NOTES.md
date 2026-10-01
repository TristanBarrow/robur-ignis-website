# design-sync notes

- This repo is an Astro + Tailwind v4 site with no React components, so the converter (`package-build.mjs`) has nothing to bundle. The upload is a **hand-built, tokens-only layout**: an empty `_ds_bundle.js` (namespace `RoburIgnis`, zero components), `styles.css` importing Google Fonts, `tokens/tokens.css` and `_ds_bundle.css`.
- `tokens/tokens.css` and `_ds_bundle.css` are copied from `src/styles/global.css` (`@theme` block, and `@layer base` + `@layer components` without the layer wrappers). If `global.css` changes, copy it over again.
- `README.md` = `.design-sync/conventions.md` + a short file list.
- Preview cards are hand-authored static HTML in `.design-sync/cards/<Group>/<Name>/<Name>.html` (each wrapped in `<div id="root">` for the render check), copied to `ds-bundle/components/`. Set `componentCount` in `ds-bundle/.ds-build-meta.json` to the card count or validate fails on a count mismatch.
- `_ds_bundle.css` adds a small Tailwind-preflight subset (box-sizing, margins, list and link resets) ahead of the `global.css` rules; without it links render browser-blue. Guidelines live in `.design-sync/guidelines/brand.md` and upload as `guidelines/brand.md`.
- `package-validate.mjs` crashes on a missing `ds-bundle/components/`; create the empty dir before validating.
- No `_ds_sync.json` is produced (off-script layout): every re-sync re-uploads everything, which is a handful of small files.

## Re-sync risks

- Tokens and classes are copies, not generated: they go stale silently when `global.css` changes.
- The page patterns in `guidelines/brand.md` describe the Astro components by hand (Nav, Hero, Services, Name, About, Footer). Re-read those when sections change.
- Fonts come from Google Fonts at runtime; nothing is shipped locally.
