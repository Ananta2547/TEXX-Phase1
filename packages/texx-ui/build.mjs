// Builds @texx/ui into dist/: an ESM bundle, the stylesheet, and .d.ts files.
// React stays external — the consumer supplies it.

import { build } from "esbuild";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

await build({
  entryPoints: [join(root, "src/index.ts")],
  outfile: join(dist, "index.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  jsx: "automatic",
  external: ["react", "react-dom", "react/jsx-runtime"],
  sourcemap: false,
  logLevel: "info",
});

cpSync(join(root, "src/texx-ui.css"), join(dist, "texx-ui.css"));

// Type declarations, emitted straight into dist/. Run tsc's JS entry through
// node directly — spawning the .cmd shim fails with EINVAL on Windows.
const require = createRequire(import.meta.url);
execFileSync(
  process.execPath,
  [require.resolve("typescript/bin/tsc"), "--project", "tsconfig.build.json"],
  { cwd: root, stdio: "inherit" },
);

console.log("texx-ui: dist/index.js, dist/texx-ui.css and .d.ts written");
