import Link from "next/link";
import { projects } from "@/lib/home-content";

const PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 25%, #4d503b 0%, #3f4232 46%, #26281E 100%)";

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "var(--section-y) var(--gutter)",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: "52rem", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
            Selected Work
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
            Recent projects
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 28 }}>
          {projects.map((w) => (
            <Link
              key={w.title}
              href="/portfolio"
              data-reveal
              data-delay={w.delay}
              data-cursor
              className="texx-card-work"
              style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(234,232,221,.12)" }}
            >
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                <div data-zoom data-bg={w.img} data-pos={w.pos} style={{ position: "absolute", inset: 0, background: PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(30,32,22,.85) 100%)" }} />
                <div data-curtain style={{ position: "absolute", inset: 0, background: "#3a3d2e", transformOrigin: "right", transform: "scaleX(1)", transition: "transform 1050ms cubic-bezier(0.16,1,0.3,1)" }} />
                <div style={{ position: "absolute", left: "1.5rem", bottom: "1.4rem", right: "1.5rem" }}>
                  <span style={{ display: "block", fontSize: ".72rem", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: "#B99A6B", marginBottom: ".5rem" }}>
                    {w.tag}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.4rem,2.4vw,1.9rem)", color: "#F5F4EE", margin: 0 }}>{w.title}</h3>
                  <p style={{ color: "#A9A99A", fontSize: ".9rem", margin: ".4rem 0 0" }}>{w.meta}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
