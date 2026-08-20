export interface MarqueeProps {
  /** Words to scroll — material names, disciplines, origins. */
  items: string[];
  /** Seconds for one full pass. Slower reads as more expensive. */
  duration?: number;
  className?: string;
}

/**
 * A slow horizontal band of words that loops without end.
 *
 * It is ambient texture, not navigation — it pauses on hover and stops
 * entirely for readers who ask for reduced motion. The list is rendered
 * twice internally so the loop has no visible seam; pass each word once.
 */
export function Marquee({ items, duration = 28, className }: MarqueeProps) {
  const classes = ["texx-marquee"];
  if (className) classes.push(className);
  const doubled = [...items, ...items];

  return (
    <div
      className={classes.join(" ")}
      style={{ ["--texx-marquee-duration" as string]: `${duration}s` }}
      aria-hidden="true"
    >
      <div className="texx-marquee__track">
        {doubled.map((item, i) => (
          <span className="texx-marquee__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
