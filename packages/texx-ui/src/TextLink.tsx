import type { ReactNode } from "react";

export interface TextLinkProps {
  children: ReactNode;
  href: string;
  /** Use `light` on cream/white grounds. */
  on?: "dark" | "light";
  className?: string;
}

/**
 * A text link with the bronze underline that draws in from the left on hover.
 *
 * Use it as the quiet secondary action beside a Button — "see the work"
 * next to "contact us" — rather than a third button.
 */
export function TextLink({
  children,
  href,
  on = "dark",
  className,
}: TextLinkProps) {
  const classes = ["texx-link"];
  if (on === "light") classes.push("texx-link--on-light");
  if (className) classes.push(className);

  return (
    <a className={classes.join(" ")} href={href}>
      {children}
      <span className="texx-link__underline" aria-hidden="true" />
    </a>
  );
}
