const HERO_PLACEHOLDER =
  "linear-gradient(120deg, #3a3d2e 0%, #2b2e22 52%, #1E2016 100%)";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "64vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <div data-herobg style={{ position: "absolute", inset: "-6%", zIndex: 0, willChange: "transform" }}>
        <div
          data-bg="/assets/showroom-right.svg"
          data-pos="center"
          style={{
            position: "absolute",
            inset: 0,
            background: HERO_PLACEHOLDER,
            transformOrigin: "50% 100%",
            animation: "texx-heroZoom-soft 24s ease-in-out infinite alternate",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(30,32,22,.8) 0%,rgba(30,32,22,.34) 48%,transparent 78%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(30,32,22,.35) 0%,transparent 30%,rgba(30,32,22,.9) 100%)" }} />
      </div>

      <div
        data-herocontent
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          padding: "0 clamp(1.5rem,5vw,6rem) clamp(3.5rem,8vh,6rem)",
        }}
      >
        <div style={{ maxWidth: "44rem" }}>
          <span data-reveal data-delay="0" style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
            Selected Work
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
              <span data-reveal-line data-delay="120" style={{ display: "block" }}>Spaces we</span>
            </span>
            <span data-reveal data-delay="200" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span data-reveal-line data-delay="240" style={{ display: "block" }}>helped shape.</span>
            </span>
          </h1>
          <p data-reveal data-delay="360" style={{ fontSize: "1.125rem", color: "#EAE8DD", maxWidth: "44ch", margin: "1.5rem 0 0", textShadow: "0 1px 16px rgba(30,32,22,.6)" }}>
            โปรเจกต์ที่ TEXX ร่วมส่งมอบวัสดุ — โรงแรม ที่พักอาศัย รีเทล และพื้นที่พาณิชย์ทั่วภูมิภาค
          </p>
        </div>
      </div>
    </section>
  );
}
