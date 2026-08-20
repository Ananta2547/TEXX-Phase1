import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "dark";

export interface ButtonProps {
  children: ReactNode;
  /**
   * - `primary` — cream fill, for the main action on an olive ground
   * - `secondary` — outline only, pairs beside a primary
   * - `dark` — deep olive fill, for the main action on a cream ground
   *
   * All three warm to bronze on hover.
   */
  variant?: ButtonVariant;
  /** Show the trailing arrow, which slides right on hover. */
  arrow?: boolean;
  /** Render as a link. Omit for a real `<button>`. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

/**
 * The design system's action control.
 *
 * A light sheen sweeps across the face on hover and the arrow shifts 4px —
 * both are CSS, so a button needs no page-level motion script to feel right.
 */
export function Button({
  children,
  variant = "primary",
  arrow = false,
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  const classes = ["texx-btn", `texx-btn-${variant}`];
  if (className) classes.push(className);

  const inner = (
    <>
      {children}
      {arrow ? (
        <span className="texx-btn__arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        className={classes.join(" ")}
        href={href}
        onClick={onClick}
        aria-disabled={disabled || undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      className={classes.join(" ")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
