import type { ReactNode } from "react";

export interface EyebrowProps {
  children: ReactNode;
  /** Use `light` on cream/white grounds — it switches to the darker bronze. */
  on?: "dark" | "light";
  className?: string;
}

/**
 * The small uppercase bronze label that sits above a section heading.
 *
 * This is the design system's signature: wide tracking, small size, bronze.
 * Every section opens with one. It is also the main place bronze is allowed
 * to appear — the palette rule caps bronze at ~5% of a page.
 */
export function Eyebrow({ children, on = "dark", className }: EyebrowProps) {
  const classes = ["texx-eyebrow"];
  if (on === "light") classes.push("texx-eyebrow--on-light");
  if (className) classes.push(className);

  return <span className={classes.join(" ")}>{children}</span>;
}
