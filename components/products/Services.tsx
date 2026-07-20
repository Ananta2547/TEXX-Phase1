import { services } from "@/lib/products-content";

export default function Services() {
  return (
    <section
      style={{
        padding: "var(--section-y) var(--gutter)",
        background: "#1E2016",
        borderTop: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: "52rem", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
            Services
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
            มากกว่าการขายวัสดุ
          </h2>
          <p data-reveal data-delay="140" style={{ fontSize: "1.05rem", color: "#A9A99A", maxWidth: "50ch", margin: "1.25rem 0 0" }}>
            เราดูแลตั้งแต่การเลือกวัสดุ ไปจนถึงการส่งมอบและติดตั้งหน้างาน ด้วยทีมผู้เชี่ยวชาญเฉพาะทาง
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 1,
            background: "rgba(234,232,221,.12)",
            border: "1px solid rgba(234,232,221,.12)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {services.map((s) => (
            <div
              key={s.no}
              data-reveal
              data-delay={s.delay}
              data-cursor
              className="texx-service"
              style={{ background: "#26281E", padding: "clamp(1.75rem,3vw,2.5rem)", display: "flex", flexDirection: "column", gap: "1rem", transition: "background 500ms cubic-bezier(0.16,1,0.3,1)" }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".9rem", color: "#B99A6B" }}>{s.no}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", color: "#F5F4EE", margin: 0 }}>{s.title}</h3>
              <p style={{ color: "#A9A99A", fontSize: ".95rem", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
