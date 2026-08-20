import { values } from "@/lib/about-content";

export default function MobileValues() {
  return (
    <section
      style={{
        padding: "var(--section-y-m) var(--gutter-m)",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
        borderBottom: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <span
        data-reveal
        style={{
          display: "inline-block",
          fontSize: ".7rem",
          fontWeight: 500,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "#B99A6B",
        }}
      >
        What we stand for
      </span>

      <h2
        data-reveal
        data-delay="80"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.75rem",
          lineHeight: 1.18,
          letterSpacing: "-.01em",
          color: "#F5F4EE",
          margin: ".85rem 0 1.75rem",
        }}
      >
        หลักการที่เรายึดถือ
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {values.map((v) => (
          <div
            key={v.no}
            data-reveal
            data-delay={v.delay}
            style={{ borderTop: "1px solid rgba(234,232,221,.16)", paddingTop: "1.25rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: ".9rem",
                color: "#B99A6B",
              }}
            >
              {v.no}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#F5F4EE",
                margin: ".6rem 0 0",
              }}
            >
              {v.title}
            </h3>
            <p style={{ color: "#A9A99A", fontSize: ".95rem", margin: ".5rem 0 0" }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
