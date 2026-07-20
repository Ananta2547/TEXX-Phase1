import type { Config } from "tailwindcss";
import { texxTheme } from "./styles/tailwind.tokens";

// tailwind.tokens.ts is declared `as const` (readonly tuples); clone to a
// mutable structure so it satisfies Tailwind's theme types.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const theme = JSON.parse(JSON.stringify(texxTheme)) as any;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      borderRadius: theme.borderRadius,
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionDuration: theme.transitionDuration,
      maxWidth: theme.maxWidth,
    },
  },
  plugins: [],
};

export default config;
