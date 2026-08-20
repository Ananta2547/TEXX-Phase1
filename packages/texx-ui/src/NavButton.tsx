export interface NavButtonProps {
  /** Which way the arrow points. */
  direction: "prev" | "next";
  onClick?: () => void;
  disabled?: boolean;
  /** Accessible name. Defaults to "Previous" / "Next". */
  label?: string;
  className?: string;
}

/**
 * The round outline arrow that steps a carousel.
 *
 * It fills bronze on hover. Always ships in a pair — one `prev`, one `next` —
 * sitting to the right of the section heading, never floating over the media.
 */
export function NavButton({
  direction,
  onClick,
  disabled,
  label,
  className,
}: NavButtonProps) {
  const classes = ["texx-navbtn"];
  if (className) classes.push(className);

  return (
    <button
      type="button"
      className={classes.join(" ")}
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (direction === "prev" ? "Previous" : "Next")}
    >
      <span aria-hidden="true">{direction === "prev" ? "←" : "→"}</span>
    </button>
  );
}
