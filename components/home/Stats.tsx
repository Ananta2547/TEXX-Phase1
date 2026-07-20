import { stats as defaultStats, type Stat } from "@/lib/home-content";

export default function Stats({
  items = defaultStats,
  accentColor = "#B99A6B",
}: {
  items?: Stat[];
  accentColor?: string;
}) {
  return (
    <section style={{ padding: "var(--section-y) var(--gutter)", background: "#F5F4EE" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "clamp(2rem,5vw,4rem)",
        }}
      >
        {items.map((s) => (
          <div key={s.label} data-reveal data-delay={s.delay}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".15rem", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem,4.5vw,3.75rem)", letterSpacing: "-.02em", color: "#1E2016" }}>
              <span data-count={s.value}>0</span>
              <span style={{ color: accentColor }}>{s.suffix}</span>
            </div>
            <div style={{ width: 40, height: 1, background: accentColor, margin: "1rem 0" }} />
            <p style={{ color: "#565A45", fontSize: ".95rem", margin: 0, maxWidth: "26ch" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
