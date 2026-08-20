# design-sync notes — TEXX

Repo-specific gotchas for future syncs. Read this before doing anything else.

## What is being synced

`packages/texx-ui` (`@texx/ui`) — a React component library **created for this sync**. It did not
exist before: the repo is a Next.js marketing site whose `components/` are page sections with
hardcoded Thai copy and no props, which design-sync cannot use. The library extracts the real
design system out of those sections — the inline styles, `app/globals.css` interaction states and
`styles/tokens.css` — into 12 props-driven components.

`components/`, `app/` and `lib/` in the site are NOT synced and are not the source of truth for the
library. `docs/design-system.md` and `docs/motion.md` are.

## Environment

- Node is at `C:\Program Files\nodejs\` and is **not on PATH** in the shell. Call
  `"/c/Program Files/nodejs/npm.cmd"` explicitly, or npm invocations fail with "command not found".
- PowerShell blocks `npm.ps1` (execution policy). Use `npm.cmd` via bash.
- `npx.cmd` cannot be spawned from node on this machine — `spawnSync EINVAL`. `build.mjs` therefore
  runs tsc by resolving `typescript/bin/tsc` and spawning `process.execPath` directly. Do not
  "simplify" that back to npx.
- Playwright is installed in `.ds-sync/` **without browsers**
  (`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`). Every validate/capture run needs the system Chrome:
  `DS_CHROMIUM_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"`. Without it the render
  check fails with `Executable doesn't exist`. This saves the ~200MB chromium download.
- The driver's first run failed with `EBUSY rmdir ds-bundle` because the shell's working directory
  was still inside `ds-bundle/`. Always run converter commands from the repo root.

## Fonts

`[FONT_MISSING]` fires on a clean checkout because the brand faces (Sora, Inter, Noto Sans Thai,
IBM Plex Sans Thai) are fetched by `next/font` at build time and live only under `.next/`.

To regenerate them: `npm run build` at the repo root, then `npm run fonts --prefix packages/texx-ui`
(`packages/texx-ui/scripts/extract-fonts.mjs`). It reads the hashed `@font-face` rules out of
`.next/static/css/`, renames `__Sora_1a977f` → `Sora`, copies the woff2 files into
`packages/texx-ui/fonts/` and writes `fonts.css`. `cfg.extraFonts` points at that file.

`packages/texx-ui/fonts/` is committed — a fresh clone does not need a Next build to sync.

## Build order

1. `npm run build --prefix packages/texx-ui` (esbuild ESM bundle + `.d.ts` + css copy)
2. `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules packages/texx-ui/node_modules --entry ./packages/texx-ui/dist/index.js --out ./ds-bundle [--remote …]`

`--node-modules` points at the **package's** node_modules — react and react-dom resolve there
(npm installed them as peer deps), so the repo root is not needed.

## Known render warns

None. The final run was clean: 12/12 render, 0 bad, 0 thin, 0 variantsIdentical, 0 floor cards.
Any warn on a future run is new — look at it before recording it here.

Two warns were fixed rather than recorded, so they should not come back:

- `[GRID_OVERFLOW]` on Heading — resolved with `cfg.overrides.Heading.cardMode = "column"`, since
  the `Scale` cell renders the display size and cannot fit a grid cell.
- `NavButton` `Pair` and `AtTheStart` rendered identically because the component had no disabled
  styling. Fixed in the library (`.texx-navbtn:disabled`), not in the preview.

## Re-sync risks

- **The library is a derivative, and nothing enforces the link.** If someone changes a colour or a
  hover in `app/globals.css`, `styles/tokens.css` or a section component, `packages/texx-ui/src/
  texx-ui.css` does not change with it and the synced design system silently drifts from the live
  site. On any re-sync, diff the two by eye before trusting the output.
- **React version skew.** The site pins React 18.3.1; `packages/texx-ui/node_modules` resolved
  React 19 from the peer range, so `_vendor/` and every preview render under React 19. Harmless
  today — no component uses hooks — but a component that does could behave differently in the DS
  pane than on the site.
- **`MaterialCard` previews ship no images.** `public/assets/*.svg` are procedural placeholders and
  do not resolve from the bundle, so the cards render the olive placeholder gradient. That is
  honest — the site has no real photography yet — but once real photos land, the previews should
  pass `image` so the cards stop looking murky.
- **Font harvesting depends on next/font's internals.** `extract-fonts.mjs` parses hashed family
  names of the form `__Family_abc123`. A Next major upgrade could change that shape; the script
  would then emit zero faces and `[FONT_MISSING]` would return.
- The site's own `components/` were left untouched. They still carry their inline styles rather
  than consuming `@texx/ui` — migrating them is unstarted work, not an oversight of this sync.
