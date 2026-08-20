import type { ReactNode } from "react";

export type HeadingLevel = "display" | "h1" | "h2" | "h3";

export interface HeadingProps {
  children: ReactNode;
  /**
   * Which step of the type scale to render.
   * - `display` — hero headline only, one per page
   * - `h1` — page title
   * - `h2` — section title, the workhorse
   * - `h3` — card and tile titles
   */
  level?: HeadingLevel;
  /** Override the rendered tag when the visual size and the outline differ. */
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  /** Use `light` on cream/white grounds. */
  on?: "dark" | "light";
  className?: string;
}

const DEFAULT_TAG: Record<HeadingLevel, "h1" | "h2" | "h3"> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

/**
 * Display typography set in Sora, on the design system's fluid type scale.
 *
 * Pick `level` for the size you want and `as` for the tag the document
 * outline needs — they are deliberately separate.
 */
export function Heading({
  children,
  level = "h2",
  as,
  on = "dark",
  className,
}: HeadingProps) {
  const Tag = as ?? DEFAULT_TAG[level];
  const classes = ["texx-heading", `texx-heading--${level}`];
  if (on === "light") classes.push("texx-heading--on-light");
  if (className) classes.push(className);

  return <Tag className={classes.join(" ")}>{children}</Tag>;
}
