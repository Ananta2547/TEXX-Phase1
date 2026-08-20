import type { Stat } from "@/lib/home-content";

// The cream band of headline figures. The home page uses the bright bronze;
// the inner pages use the darker one against the same ground.

export interface MobileStatsBandProps {
  items: Stat[];
  accent?: "bronze" | "bronze-dark";
}

export default function MobileStatsBand({ items, accent = "bronze" }: MobileStatsBandProps) {
  const color = accent === "bronze-dark" ? "#8C7550" : "#B99A6B";

  return (
    <section style={{ padding: "var(--section-y-m) var(--gutter-m)", background: "#F5F4EE" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
        {items.map((s) => (
          <div
            key={s.label}
            data-reveal
            data-delay={s.delay}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "0 1.25rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: ".1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "2.75rem",
                lineHeight: 1,
                letterSpacing: "-.02em",
                color: "#1E2016",
              }}
            >
              <span data-count={s.value}>0</span>
              <span style={{ color }}>{s.suffix}</span>
            </div>
            <p
              style={{
                color: "#565A45",
                fontSize: ".9rem",
                lineHeight: 1.5,
                margin: 0,
                borderLeft: `1px solid ${color}`,
                paddingLeft: "1.25rem",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
