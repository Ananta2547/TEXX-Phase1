import Link from "next/link";
import TexxLogo from "@/components/TexxLogo";

const drawerLinkStyle = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  padding: "1.15rem 0",
  borderBottom: "1px solid rgba(234,232,221,.12)",
  color: "#F5F4EE",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: "1.5rem",
  letterSpacing: "-.01em",
} as const;

const indexStyle = { fontSize: ".7rem", letterSpacing: ".2em", color: "#7B7C6E" } as const;

const links = [
  { label: "About", href: "/about", no: "01" },
  { label: "Products", href: "/products", no: "02" },
  { label: "Work", href: "/portfolio", no: "03" },
  { label: "Contact", href: "/contact", no: "04" },
];

// `active` matches a link label ("Contact", "Products", …) and marks that row
// in the drawer, the way TexxNavMobile takes its active attribute.
export default function MobileNav({ active }: { active?: string }) {
  return (
    <>
      <nav
        data-nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: ".75rem 1.25rem",
          background: "transparent",
          borderBottom: "1px solid transparent",
          transition: "background 400ms var(--ease-out), border-color 400ms",
        }}
      >
        {/* The source file used #m-top, which only made sense when each page
            was a standalone .dc.html. On the real site the logo goes home. */}
        <Link href="/" aria-label="TEXX — home" style={{ display: "inline-flex", alignItems: "center", height: 44 }}>
          <span style={{ display: "block", margin: "-14px 0" }}>
            <TexxLogo height={72} />
          </span>
        </Link>
        <button
          data-menu-open
          type="button"
          aria-label="Open menu"
          style={{
            width: 44,
            height: 44,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 6,
            background: "none",
            border: 0,
            padding: 0,
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <span style={{ display: "block", width: 24, height: 1.5, background: "#EAE8DD" }} />
          <span style={{ display: "block", width: 16, height: 1.5, background: "#EAE8DD" }} />
        </button>
      </nav>

      <div
        data-drawer
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9500,
          background: "#1E2016",
          display: "flex",
          flexDirection: "column",
          padding: ".75rem 1.5rem 2.5rem",
          transform: "translateY(-100%)",
          transition: "transform 700ms var(--ease-out)",
          visibility: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 44,
          }}
        >
          {/* The drawer lists the four inner pages but no home row, so the
              logo is the way back — plain artwork in the source, a link here. */}
          <Link
            href="/"
            data-drawer-link
            aria-label="TEXX — home"
            style={{ display: "block", margin: "-14px 0 -14px -.25rem" }}
          >
            <TexxLogo height={72} />
          </Link>
          <button
            data-menu-close
            type="button"
            aria-label="Close menu"
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              background: "none",
              border: 0,
              color: "#EAE8DD",
              fontSize: "1.6rem",
              lineHeight: 1,
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            ×
          </button>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            borderTop: "1px solid rgba(234,232,221,.12)",
          }}
        >
          {links.map((l) => {
            const on = active === l.label;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-drawer-link
                aria-current={on ? "page" : undefined}
                style={on ? { ...drawerLinkStyle, color: "#B99A6B" } : drawerLinkStyle}
              >
                <span>{l.label}</span>
                <span style={on ? { ...indexStyle, color: "#B99A6B" } : indexStyle}>{l.no}</span>
              </Link>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: ".4rem",
            color: "#A9A99A",
            fontSize: ".9rem",
          }}
        >
          <span
            style={{
              fontSize: ".7rem",
              fontWeight: 500,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "#B99A6B",
              marginBottom: ".5rem",
            }}
          >
            Get in touch
          </span>
          <span>hello@texx.co</span>
          <span>+66 2 000 0000</span>
          <span style={{ color: "#7B7C6E" }}>Bangkok · Showroom by appointment</span>
        </div>
      </div>
    </>
  );
}
