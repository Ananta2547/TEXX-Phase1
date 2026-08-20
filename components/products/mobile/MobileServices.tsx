import { services } from "@/lib/products-content";

export default function MobileServices() {
  return (
    <section
      style={{
        padding: "var(--section-y-m) var(--gutter-m)",
        background: "#1E2016",
        borderTop: "1px solid rgba(234,232,221,.12)",
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
        Services
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
          margin: ".85rem 0 0",
        }}
      >
        มากกว่าการขายวัสดุ
      </h2>

      <p
        data-reveal
        data-delay="140"
        style={{ fontSize: "1rem", color: "#A9A99A", margin: "1rem 0 1.75rem" }}
      >
        เราดูแลตั้งแต่การเลือกวัสดุ ไปจนถึงการส่งมอบและติดตั้งหน้างาน ด้วยทีมผู้เชี่ยวชาญเฉพาะทาง
      </p>

      {/* Gapless stack — the 1px gaps show the container's own hairline. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
            style={{
              background: "#26281E",
              padding: "1.5rem 1.35rem",
              display: "flex",
              flexDirection: "column",
              gap: ".6rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: ".85rem",
                color: "#B99A6B",
              }}
            >
              {s.no}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1.15rem",
                color: "#F5F4EE",
                margin: 0,
              }}
            >
              {s.title}
            </h3>
            <p style={{ color: "#A9A99A", fontSize: ".9rem", margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
