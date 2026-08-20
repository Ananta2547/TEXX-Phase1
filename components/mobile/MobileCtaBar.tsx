import Link from "next/link";

// The bar that slides up once the reader is past the hero, and stands down
// again when the page's own CTA section arrives. MobileShell drives it; the
// selector in `hideTarget` is what it watches.

export interface MobileCtaBarProps {
  eyebrow: string;
  text: string;
  label: string;
  href: string;
  /** CSS selector for the section that should suppress the bar, e.g. "#m-cta". */
  hideTarget?: string;
}

export default function MobileCtaBar({
  eyebrow,
  text,
  label,
  href,
  hideTarget = "#m-cta",
}: MobileCtaBarProps) {
  return (
    <div
      data-cta-bar
      data-cta-hide-target={hideTarget}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 800,
        display: "flex",
        gap: ".75rem",
        alignItems: "center",
        padding: ".7rem 1rem calc(.7rem + env(safe-area-inset-bottom))",
        background: "rgba(30,32,22,.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(234,232,221,.12)",
        transform: "translateY(120%)",
        transition: "transform 500ms var(--ease-out)",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: ".62rem",
            fontWeight: 500,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#B99A6B",
          }}
        >
          {eyebrow}
        </span>
        <span
          style={{
            display: "block",
            fontSize: ".85rem",
            color: "#EAE8DD",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </span>
      </div>
      <Link
        href={href}
        className="texx-btn-primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: ".4rem",
          minHeight: 44,
          padding: "0 1.2rem",
          background: "#EAE8DD",
          color: "#26281E",
          borderRadius: 4,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: ".85rem",
          whiteSpace: "nowrap",
        }}
      >
        {label}
        <span>→</span>
      </Link>
    </div>
  );
}
