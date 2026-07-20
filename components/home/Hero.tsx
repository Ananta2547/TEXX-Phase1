import Link from "next/link";
import { MagnetFx } from "./MagnetFx";

const HERO_PLACEHOLDER =
  "linear-gradient(120deg, #3a3d2e 0%, #2b2e22 52%, #1E2016 100%)";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <div data-herobg style={{ position: "absolute", inset: "-6%", zIndex: 0, willChange: "transform" }}>
        <div
          data-bg="/assets/hero-full.jpg"
          data-pos="center bottom"
          style={{
            position: "absolute",
            inset: 0,
            background: HERO_PLACEHOLDER,
            transformOrigin: "50% 100%",
            animation: "texx-heroZoom 26s ease-in-out infinite alternate",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(30,32,22,.72) 0%,rgba(30,32,22,.34) 34%,transparent 62%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(30,32,22,.30) 0%,transparent 20%,transparent 40%,rgba(30,32,22,.94) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(130% 105% at 0% 100%,rgba(30,32,22,.9) 0%,rgba(30,32,22,.5) 34%,transparent 60%)" }} />
      </div>

      <div
        data-herocontent
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          padding: "0 clamp(1.5rem,5vw,6rem) clamp(4rem,10vh,7rem)",
        }}
      >
        <div style={{ maxWidth: "42rem" }}>
          <span
            data-reveal
            data-delay="0"
            style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}
          >
            Premium Materials — Global Standard
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-.02em",
              color: "#F5F4EE",
              margin: "1.25rem 0 0",
              textShadow: "0 2px 24px rgba(30,32,22,.5)",
            }}
          >
            <span data-reveal data-delay="80" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span data-reveal-line data-delay="120" style={{ display: "block" }}>Inspiring spaces,</span>
            </span>
            <span data-reveal data-delay="200" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span data-reveal-line data-delay="240" style={{ display: "block" }}>crafted in stone.</span>
            </span>
          </h1>
          <p
            data-reveal
            data-delay="360"
            style={{ fontSize: "1.125rem", color: "#EAE8DD", maxWidth: "42ch", margin: "1.5rem 0 0", textShadow: "0 1px 16px rgba(30,32,22,.6)" }}
          >
            TEXX คัดสรรวัสดุพรีเมียมจากทั่วโลก — หินธรรมชาติ พื้นผิววิศวกรรม โลหะและไม้ — ด้วยมาตรฐานเดียวสำหรับงานสถาปัตยกรรมและตกแต่งภายในระดับสากล
          </p>
          <div data-reveal data-delay="480" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginTop: "2.25rem" }}>
            <Link
              href="/products"
              data-cursor
              data-magnet
              className="texx-btn-primary"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                gap: ".6rem",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: ".95rem",
                background: "#EAE8DD",
                color: "#26281E",
                padding: ".95rem 1.9rem",
                borderRadius: 4,
                transition: "background 400ms cubic-bezier(0.16,1,0.3,1), color 400ms",
              }}
            >
              <MagnetFx />
              Explore collections
              <span data-arrow style={{ display: "inline-block", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }}>→</span>
            </Link>
            <Link
              href="/contact"
              data-cursor
              data-magnet
              className="texx-btn-secondary"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: ".95rem",
                color: "#EAE8DD",
                padding: ".95rem 1.9rem",
                borderRadius: 4,
                border: "1px solid rgba(234,232,221,.34)",
                transition: "background 400ms cubic-bezier(0.16,1,0.3,1), border-color 400ms",
              }}
            >
              <MagnetFx />
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
