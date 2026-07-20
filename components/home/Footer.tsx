import Link from "next/link";
import TexxLogo from "@/components/TexxLogo";
import { navLinks } from "@/lib/home-content";

const headingStyle = {
  display: "block",
  fontSize: ".72rem",
  fontWeight: 500,
  letterSpacing: ".2em",
  textTransform: "uppercase" as const,
  color: "#7B7C6E",
  marginBottom: "1rem",
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#1E2016",
        borderTop: "1px solid rgba(234,232,221,.12)",
        padding: "clamp(3rem,6vh,5rem) var(--gutter) 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ color: "#F5F4EE" }}>
            <TexxLogo height={56} />
          </div>
          <p style={{ color: "#7B7C6E", fontSize: ".9rem", margin: "1rem 0 0", maxWidth: "30ch" }}>
            Premium materials for world-class spaces. Sourced globally, delivered to one standard.
          </p>
        </div>

        <div>
          <span style={headingStyle}>Explore</span>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", fontSize: ".92rem" }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "#A9A99A" }}>
                {l.label === "Work" ? "Portfolio" : l.label === "About" ? "About us" : l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span style={headingStyle}>Contact</span>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", fontSize: ".92rem", color: "#A9A99A" }}>
            <span>hello@texx.co</span>
            <span>+66 2 000 0000</span>
            <span>Bangkok · Showroom by appointment</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "2.5rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(234,232,221,.12)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          color: "#7B7C6E",
          fontSize: ".82rem",
        }}
      >
        <span>© {year} TEXX. All rights reserved.</span>
        <span>Olive · Cream · Bronze — quiet luxury</span>
      </div>
    </footer>
  );
}
