import Link from "next/link";
import TexxLogo from "@/components/TexxLogo";

const columnLabel = {
  display: "block",
  fontSize: ".68rem",
  fontWeight: 500,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#7B7C6E",
  marginBottom: ".9rem",
} as const;

const explore = [
  { label: "About us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function MobileFooter() {
  return (
    <footer
      style={{
        background: "#1E2016",
        borderTop: "1px solid rgba(234,232,221,.12)",
        // 6.5rem of bottom room on every mobile page, per TexxFooterMobile —
        // it also clears the home page's sticky CTA bar.
        padding: "3rem var(--gutter-m) 6.5rem",
      }}
    >
      <span style={{ display: "block", marginLeft: "-.15rem" }}>
        <TexxLogo height={52} />
      </span>
      <p style={{ color: "#7B7C6E", fontSize: ".88rem", margin: "1rem 0 0" }}>
        Premium materials for world-class spaces. Sourced globally, delivered to one standard.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(234,232,221,.12)",
        }}
      >
        <div>
          <span style={columnLabel}>Explore</span>
          <div style={{ display: "flex", flexDirection: "column", gap: ".7rem", fontSize: ".9rem" }}>
            {explore.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "#A9A99A" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <span style={columnLabel}>Contact</span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              fontSize: ".9rem",
              color: "#A9A99A",
            }}
          >
            <span>hello@texx.co</span>
            <span>+66 2 000 0000</span>
            <span>Bangkok · By appointment</span>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(234,232,221,.12)",
          display: "flex",
          flexDirection: "column",
          gap: ".35rem",
          color: "#7B7C6E",
          fontSize: ".75rem",
        }}
      >
        <span>© 2026 TEXX. All rights reserved.</span>
        <span>Olive · Cream · Bronze — quiet luxury</span>
      </div>
    </footer>
  );
}
