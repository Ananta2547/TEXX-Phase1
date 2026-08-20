import Link from "next/link";

// Every inner mobile page closes on the same block: eyebrow, two-line heading,
// a filled button and a quiet link under it. The ground and the button colour
// flip together, and About adds the floating bronze outlines.

export type CtaTone = "cream" | "night";

export interface MobileCtaSectionProps {
  eyebrow: string;
  lines: [string, string];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  /** `cream` sits on #F5F4EE with a dark button; `night` inverts both. */
  tone?: CtaTone;
  /** Ambient bronze outlines behind the block. */
  shapes?: boolean;
}

export default function MobileCtaSection({
  eyebrow,
  lines,
  primary,
  secondary,
  tone = "cream",
  shapes = false,
}: MobileCtaSectionProps) {
  const onCream = tone === "cream";
  const accent = onCream ? "#8C7550" : "#B99A6B";
  const headingColor = onCream ? "#1E2016" : "#F5F4EE";
  const secondaryColor = onCream ? "#26281E" : "#EAE8DD";
  const btnBackground = onCream ? "#26281E" : "#EAE8DD";
  const btnColor = onCream ? "#F5F4EE" : "#26281E";

  return (
    <section
      id="m-cta"
      style={{
        padding: "5rem var(--gutter-m)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: onCream ? "#F5F4EE" : "#1E2016",
      }}
    >
      {shapes && (
        <>
          <div
            style={{
              position: "absolute",
              top: "9%",
              left: "-4%",
              width: 80,
              height: 80,
              border: "1px solid rgba(140,117,80,.35)",
              borderRadius: "50%",
              animation: "texx-float 7s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "13%",
              right: "-3%",
              width: 52,
              height: 52,
              transform: "rotate(45deg)",
              border: "1px solid rgba(140,117,80,.28)",
              animation: "texx-float 9s ease-in-out infinite",
            }}
          />
        </>
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          data-reveal
          style={{
            display: "inline-block",
            fontSize: ".7rem",
            fontWeight: 500,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: accent,
          }}
        >
          {eyebrow}
        </span>

        <h2
          data-reveal
          data-delay="80"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.9rem",
            lineHeight: 1.16,
            letterSpacing: "-.015em",
            color: headingColor,
            margin: "1rem 0 0",
          }}
        >
          {lines[0]}
          <br />
          {lines[1]}
        </h2>

        <div
          data-reveal
          data-delay="200"
          style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginTop: "2rem" }}
        >
          <Link
            href={primary.href}
            data-magnet
            className={onCream ? "texx-btn-dark" : "texx-btn-primary"}
            style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".6rem",
              minHeight: 52,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
              background: btnBackground,
              color: btnColor,
              borderRadius: 4,
              transition: "background 400ms var(--ease-out), color 400ms",
            }}
          >
            <span
              data-sheen
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(105deg,transparent 42%,rgba(245,244,238,.35) 50%,transparent 58%)",
                transform: "translateX(-120%)",
                transition: "transform 750ms var(--ease-out)",
                zIndex: 1,
              }}
            />
            {primary.label}
            <span data-arrow style={{ display: "inline-block", transition: "transform 400ms var(--ease-out)" }}>
              →
            </span>
          </Link>

          <Link
            href={secondary.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              color: secondaryColor,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
            }}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
