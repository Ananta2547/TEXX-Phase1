export interface MaterialCardProps {
  /** Material or project name — the card's headline. */
  title: string;
  /** Small uppercase bronze label above the title, e.g. "Natural stone". */
  tag?: string;
  /** One or two lines on origin, finish or use. */
  description?: string;
  /** Image URL for the 3:2 media area. Omitted, the card shows the olive placeholder. */
  image?: string;
  /** CSS `background-position` for the image, when the crop needs steering. */
  imagePosition?: string;
  /** Make the whole card a link. */
  href?: string;
  className?: string;
}

/**
 * The material card — the repeating unit of collection and portfolio grids.
 *
 * The whole card lifts 6px on hover while the image zooms to 1.06 behind a
 * fixed frame, both over 700ms. A bronze wash sits over the image so every
 * photo, whatever its own colour, stays inside the brand's tone.
 */
export function MaterialCard({
  title,
  tag,
  description,
  image,
  imagePosition,
  href,
  className,
}: MaterialCardProps) {
  const classes = ["texx-card"];
  if (className) classes.push(className);

  const body = (
    <>
      <div className="texx-card__media">
        <div
          className="texx-card__image"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundPosition: imagePosition,
            background: image
              ? undefined
              : "radial-gradient(120% 120% at 30% 20%, #4d503b 0%, #3f4232 46%, #2b2e22 100%)",
          }}
        />
        <div className="texx-card__wash" />
      </div>
      <div className="texx-card__body">
        {tag ? <span className="texx-card__tag">{tag}</span> : null}
        <h3 className="texx-card__title">{title}</h3>
        {description ? <p className="texx-card__desc">{description}</p> : null}
      </div>
    </>
  );

  if (href) {
    return (
      <a className={classes.join(" ")} href={href}>
        {body}
      </a>
    );
  }

  return <article className={classes.join(" ")}>{body}</article>;
}
