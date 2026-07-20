import { products } from "@/lib/home-content";

const PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 20%, #4d503b 0%, #3f4232 46%, #2b2e22 100%)";

export default function Collections() {
  return (
    <section
      id="collections"
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
            Products
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
            Signature materials
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 24 }}>
          {products.map((p) => (
            <article
              key={p.title}
              data-reveal
              data-delay={p.delay}
              data-cursor
              className="texx-card"
              style={{ background: "#434634", border: "1px solid rgba(234,232,221,.12)", borderRadius: 12, overflow: "hidden" }}
            >
              <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
                <div data-zoom data-bg={p.img} data-pos={p.pos} style={{ position: "absolute", inset: 0, background: PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 100% at 30% 20%,rgba(185,154,107,.2),transparent 60%)" }} />
                <div data-curtain style={{ position: "absolute", inset: 0, background: "#3a3d2e", transformOrigin: "right", transform: "scaleX(1)", transition: "transform 1050ms cubic-bezier(0.16,1,0.3,1)" }} />
              </div>
              <div style={{ padding: "1.4rem 1.5rem 1.6rem" }}>
                <span style={{ display: "block", fontSize: ".72rem", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: "#B99A6B", marginBottom: ".6rem" }}>
                  {p.tag}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", color: "#F5F4EE", margin: 0 }}>{p.title}</h3>
                <p style={{ color: "#A9A99A", fontSize: ".95rem", margin: ".6rem 0 0" }}>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
