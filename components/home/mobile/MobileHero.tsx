const headlineLines = ["Inspiring", "spaces,", "crafted in stone."];

export default function MobileHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
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
            background: "linear-gradient(120deg,#3a3d2e 0%,#2b2e22 52%,#1E2016 100%)",
            transformOrigin: "50% 100%",
            animation: "texx-heroZoom 26s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(30,32,22,.55) 0%,rgba(30,32,22,.25) 30%,rgba(30,32,22,.86) 78%,rgba(30,32,22,.97) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(130% 100% at 10% 100%,rgba(30,32,22,.88) 0%,rgba(30,32,22,.4) 45%,transparent 72%)",
          }}
        />
      </div>

      <div
        data-herocontent
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "0 var(--gutter-m) 3.25rem",
        }}
      >
        <span
          data-reveal
          data-delay="0"
          style={{
            display: "block",
            fontSize: ".65rem",
            fontWeight: 500,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "#B99A6B",
            lineHeight: 1.6,
          }}
        >
          Premium Materials
          <br />
          Global Standard
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: 1.06,
            letterSpacing: "-.02em",
            color: "#F5F4EE",
            margin: "1rem 0 0",
            textShadow: "0 2px 24px rgba(30,32,22,.5)",
          }}
        >
          {headlineLines.map((line, i) => (
            <span
              key={line}
              data-reveal
              data-delay={80 + i * 80}
              style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}
            >
              <span data-reveal-line data-delay={120 + i * 80} style={{ display: "block" }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-reveal
          data-delay="380"
          style={{
            fontSize: "1rem",
            color: "#EAE8DD",
            margin: "1.25rem 0 0",
            textShadow: "0 1px 16px rgba(30,32,22,.6)",
          }}
        >
          TEXX คัดสรรวัสดุพรีเมียมจากทั่วโลก — หินธรรมชาติ พื้นผิววิศวกรรม โลหะและไม้ ด้วยมาตรฐานเดียวระดับสากล
        </p>

        <div
          data-reveal
          data-delay="480"
          style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginTop: "1.75rem" }}
        >
          <a
            href="#m-collections"
            data-magnet
            className="texx-btn-primary"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".6rem",
              minHeight: 52,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
              background: "#EAE8DD",
              color: "#26281E",
              borderRadius: 4,
              transition: "background 400ms var(--ease-out), color 400ms",
            }}
          >
            <span
              data-sheen
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(105deg,transparent 42%,rgba(245,244,238,.35) 50%,transparent 58%)",
                transform: "translateX(-120%)",
                transition: "transform 750ms var(--ease-out)",
                zIndex: 1,
              }}
            />
            Explore collections
            <span data-arrow style={{ display: "inline-block", transition: "transform 400ms var(--ease-out)" }}>
              →
            </span>
          </a>
          <a
            href="#m-contact"
            className="texx-btn-secondary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 52,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
              color: "#EAE8DD",
              borderRadius: 4,
              border: "1px solid rgba(234,232,221,.34)",
              transition: "background 400ms var(--ease-out), border-color 400ms",
            }}
          >
            Talk to us
          </a>
        </div>
      </div>

      <div
        data-reveal
        data-delay="700"
        style={{
          position: "absolute",
          left: "var(--gutter-m)",
          bottom: "1.1rem",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: ".6rem",
          fontSize: ".62rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#7B7C6E",
        }}
      >
        <span style={{ display: "block", width: 22, height: 1, background: "#B99A6B" }} />
        Scroll
      </div>
    </section>
  );
}
