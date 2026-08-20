export interface StatProps {
  /** The figure itself, e.g. `250`. */
  value: number | string;
  /** Unit or qualifier shown in bronze beside the figure, e.g. `+`, `%`. */
  suffix?: string;
  /** What the figure counts. Keep it to a line or two. */
  label: string;
  /** Set `dark` when the stat sits on an olive ground instead of cream. */
  on?: "light" | "dark";
  className?: string;
}

/**
 * A single headline figure with its bronze rule and caption.
 *
 * Stats normally run three or four across on the cream band, where the dark
 * figures carry the contrast. The figure uses tabular numerals so a row of
 * them lines up.
 */
export function Stat({
  value,
  suffix,
  label,
  on = "light",
  className,
}: StatProps) {
  const classes = ["texx-stat"];
  if (on === "dark") classes.push("texx-stat--on-dark");
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <div className="texx-stat__value">
        <span>{value}</span>
        {suffix ? <span className="texx-stat__suffix">{suffix}</span> : null}
      </div>
      <div className="texx-stat__rule" />
      <p className="texx-stat__label">{label}</p>
    </div>
  );
}
