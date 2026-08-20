export interface ServiceTileProps {
  /** Sequence marker, e.g. `01` — services are an ordered process. */
  no: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * One numbered step in a service or process list.
 *
 * Tiles are meant to sit edge to edge in a gapless grid, separated by the
 * grid's own hairline background rather than by margins; the ground warms
 * slightly on hover. The number is real information here — use these only
 * where the order actually matters.
 */
export function ServiceTile({
  no,
  title,
  description,
  className,
}: ServiceTileProps) {
  const classes = ["texx-service"];
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <span className="texx-service__no">{no}</span>
      <h3 className="texx-service__title">{title}</h3>
      <p className="texx-service__desc">{description}</p>
    </div>
  );
}
