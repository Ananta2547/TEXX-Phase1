// Sourcing and Finishing are the same block on opposite grounds: a 3:2 image
// wiped in by a curtain, then eyebrow, heading and copy under it.

export interface MobileMediaBlockProps {
  eyebrow: string;
  lines: [string, string];
  body: string;
  image: string;
  /** `cream` is the light band; `olive` is the dark one with the top hairline. */
  tone: "cream" | "olive";
  /** Optional underlined link at the end of the block. */
  link?: { label: string; href: string };
}

export default function MobileMediaBlock({
  eyebrow,
  lines,
  body,
  image,
  tone,
  link,
}: MobileMediaBlockProps) {
  const onCream = tone === "cream";
  const accent = onCream ? "#8C7550" : "#B99A6B";

  return (
    <section
      style={{
        padding: "var(--section-y-m) var(--gutter-m)",
        background: onCream ? "#F5F4EE" : "#26281E",
        borderTop: onCream ? undefined : "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div
        data-reveal
        style={{
          position: "relative",
          aspectRatio: "3/2",
          borderRadius: 12,
          overflow: "hidden",
          border: onCream ? "1px solid rgba(30,32,22,.16)" : "1px solid rgba(234,232,221,.12)",
        }}
      >
        <div
          data-zoom
          data-bg={image}
          data-pos="center"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 120% at 30% 25%,#4d503b 0%,#3f4232 46%,#26281E 100%)",
            transition: "transform 700ms var(--ease-out)",
          }}
        />
        <div
          data-curtain
          style={{
            position: "absolute",
            inset: 0,
            background: "#3a3d2e",
            transformOrigin: "right",
            transform: "scaleX(1)",
            transition: "transform 1050ms var(--ease-out)",
          }}
        />
      </div>

      <span
        data-reveal
        data-delay="60"
        style={{
          display: "inline-block",
          fontSize: ".7rem",
          fontWeight: 500,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: accent,
          marginTop: "1.75rem",
        }}
      >
        {eyebrow}
      </span>

      <h2
        data-reveal
        data-delay="120"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.75rem",
          lineHeight: 1.18,
          letterSpacing: "-.01em",
          color: onCream ? "#1E2016" : "#F5F4EE",
          margin: ".85rem 0 0",
        }}
      >
        {lines[0]}
        <br />
        {lines[1]}
      </h2>

      <p
        data-reveal
        data-delay="180"
        style={{
          fontSize: "1rem",
          color: onCream ? "#565A45" : "#A9A99A",
          margin: "1.25rem 0 0",
        }}
      >
        {body}
      </p>

      {link ? (
        <a
          href={link.href}
          data-reveal
          data-delay="220"
          style={{
            position: "relative",
            display: "inline-block",
            color: onCream ? "#26281E" : "#EAE8DD",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: ".95rem",
            marginTop: "1.5rem",
            paddingBottom: 6,
            borderBottom: `1.5px solid ${accent}`,
          }}
        >
          {link.label} →
        </a>
      ) : null}
    </section>
  );
}
