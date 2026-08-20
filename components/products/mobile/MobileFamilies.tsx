import { materialFamilies } from "@/lib/products-content";

export default function MobileFamilies() {
  return (
    <section
      style={{
        padding: "var(--section-y-m) 0",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div style={{ padding: "0 var(--gutter-m)" }}>
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
          Material Families
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
          เลื่อนดูวัสดุทั้งหมด
        </h2>
        <p
          data-reveal
          data-delay="140"
          style={{
            color: "#A9A99A",
            fontSize: ".85rem",
            margin: ".85rem 0 0",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span style={{ display: "block", width: 20, height: 1, background: "#B99A6B" }} />
          ปัดเพื่อดูทั้ง {materialFamilies.length} รายการ
        </p>
      </div>

      <div
        data-rail
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          padding: "1.75rem var(--gutter-m) .5rem",
          scrollbarWidth: "none",
        }}
      >
        {materialFamilies.map((c) => (
          <article
            key={c.title}
            data-reveal
            style={{
              flex: "0 0 76%",
              scrollSnapAlign: "start",
              background: "#434634",
              border: "1px solid rgba(234,232,221,.12)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <div
                data-zoom
                data-bg={c.img}
                data-pos={c.pos}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(120% 120% at 30% 20%,#4d503b 0%,#3f4232 46%,#2b2e22 100%)",
                  transition: "transform 700ms var(--ease-out)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(120% 100% at 30% 20%,rgba(185,154,107,.2),transparent 60%)",
                }}
              />
            </div>
            <div style={{ padding: "1.2rem 1.25rem 1.4rem" }}>
              <span
                style={{
                  display: "block",
                  fontSize: ".68rem",
                  fontWeight: 500,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#B99A6B",
                  marginBottom: ".5rem",
                }}
              >
                {c.tag}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#F5F4EE",
                  margin: 0,
                }}
              >
                {c.title}
              </h3>
              <p style={{ color: "#A9A99A", fontSize: ".9rem", margin: ".5rem 0 0" }}>{c.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", gap: ".4rem", padding: "1.25rem var(--gutter-m) 0" }}>
        {materialFamilies.map((c, i) => (
          <span
            key={c.title}
            data-dot={i}
            style={{
              display: "block",
              height: 2,
              flex: 1,
              background: "rgba(234,232,221,.16)",
              transition: "background 400ms var(--ease-out)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
