// The inner mobile pages (About / Products / Portfolio) all open with the same
// hero: a slow-zooming photo under a darkening wash, an eyebrow, a two-line
// masked headline and a lede. Only the artwork, height and headline size move.

export interface MobilePageHeroProps {
  eyebrow: string;
  /** Headline split across lines — each one is masked and revealed in turn. */
  lines: [string, string];
  lede: string;
  /** Background artwork under the wash. */
  image: string;
  /** Viewport share the hero fills, e.g. "78svh". */
  minHeight: string;
  /** Headline size. Portfolio and Products run larger than About. */
  headingSize?: string;
}

export default function MobilePageHero({
  eyebrow,
  lines,
  lede,
  image,
  minHeight,
  headingSize = "2.5rem",
}: MobilePageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight,
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <div data-herobg style={{ position: "absolute", inset: "-6%", zIndex: 0, willChange: "transform" }}>
        <div
          data-bg={image}
          data-pos="center"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg,#3a3d2e 0%,#2b2e22 52%,#1E2016 100%)",
            transformOrigin: "50% 100%",
            animation: "texx-heroZoom-soft 24s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(30,32,22,.6) 0%,rgba(30,32,22,.28) 32%,rgba(30,32,22,.88) 80%,rgba(30,32,22,.96) 100%)",
          }}
        />
      </div>

      <div
        data-herocontent
        style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 var(--gutter-m) 3rem" }}
      >
        <span
          data-reveal
          data-delay="0"
          style={{
            display: "block",
            fontSize: ".65rem",
            fontWeight: 500,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "#B99A6B",
          }}
        >
          {eyebrow}
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: headingSize,
            lineHeight: headingSize === "2.35rem" ? 1.08 : 1.06,
            letterSpacing: "-.02em",
            color: "#F5F4EE",
            margin: "1rem 0 0",
            textShadow: "0 2px 24px rgba(30,32,22,.5)",
          }}
        >
          {lines.map((line, i) => (
            <span
              key={line}
              data-reveal
              data-delay={80 + i * 120}
              style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}
            >
              <span data-reveal-line data-delay={120 + i * 120} style={{ display: "block" }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-reveal
          data-delay="360"
          style={{
            fontSize: "1rem",
            color: "#EAE8DD",
            margin: "1.25rem 0 0",
            textShadow: "0 1px 16px rgba(30,32,22,.6)",
          }}
        >
          {lede}
        </p>
      </div>
    </section>
  );
}
