import { projects } from "@/lib/portfolio-content";

export default function MobileProjects() {
  return (
    <section
      style={{
        padding: "var(--section-y-m) var(--gutter-m)",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {projects.map((w) => (
          <article
            key={w.title}
            data-reveal
            data-delay={w.delay}
            style={{
              display: "block",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(234,232,221,.12)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <div
                data-zoom
                data-bg={w.img}
                data-pos={w.pos}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(120% 120% at 30% 25%,#4d503b 0%,#3f4232 46%,#26281E 100%)",
                  transition: "transform 700ms var(--ease-out)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg,transparent 35%,rgba(30,32,22,.9) 100%)",
                }}
              />
              <div
                data-curtain
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#3a3d2e",
                  transformOrigin: "right",
                  transform: "scaleX(1)",
                  transition: "transform 1050ms var(--ease-out)",
                }}
              />
              <div style={{ position: "absolute", left: "1.25rem", right: "1.25rem", bottom: "1.15rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: ".68rem",
                    fontWeight: 500,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#B99A6B",
                    marginBottom: ".4rem",
                  }}
                >
                  {w.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1.35rem",
                    lineHeight: 1.2,
                    color: "#F5F4EE",
                    margin: 0,
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ color: "#A9A99A", fontSize: ".82rem", margin: ".3rem 0 0" }}>{w.meta}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
