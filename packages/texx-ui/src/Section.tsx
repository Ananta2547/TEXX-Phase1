import type { ReactNode } from "react";

export type SectionTone = "olive" | "olive-deep" | "night" | "light";

export interface SectionProps {
  children: ReactNode;
  /**
   * Which ground the section sits on.
   * - `olive` — the default page background
   * - `olive-deep` — the alternating band, hairline-ruled top and bottom
   * - `night` — the deepest olive, used for footers and closing bands
   * - `light` — the cream ground; switch text-carrying children to their
   *   on-light variants when you use it
   */
  tone?: SectionTone;
  /** Constrain content to the 1280px measure. Turn off for full-bleed media. */
  contained?: boolean;
  id?: string;
  className?: string;
}

/**
 * A full-width band with the design system's vertical rhythm and gutters.
 *
 * Sections are the page's structural unit — stack them to build a page, and
 * alternate `tone` to separate one from the next.
 */
export function Section({
  children,
  tone = "olive",
  contained = true,
  id,
  className,
}: SectionProps) {
  const classes = ["texx-section", `texx-section--${tone}`];
  if (className) classes.push(className);

  return (
    <section id={id} className={classes.join(" ")}>
      {contained ? (
        <div className="texx-section__inner">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
