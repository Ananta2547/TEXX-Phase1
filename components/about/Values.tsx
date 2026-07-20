import { values } from "@/lib/about-content";

export default function Values() {
  return (
    <section
      style={{
        padding: "var(--section-y) var(--gutter)",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
        borderBottom: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: "52rem", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
            What we stand for
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
            หลักการที่เรายึดถือ
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28 }}>
          {values.map((v) => (
            <div key={v.no} data-reveal data-delay={v.delay} style={{ borderTop: "1px solid rgba(234,232,221,.16)", paddingTop: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", color: "#B99A6B" }}>{v.no}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "#F5F4EE", margin: "1rem 0 0" }}>{v.title}</h3>
              <p style={{ color: "#A9A99A", fontSize: ".98rem", margin: ".7rem 0 0" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
