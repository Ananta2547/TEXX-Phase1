export default function MobileStory() {
  return (
    <section style={{ padding: "var(--section-y-m) var(--gutter-m)", background: "#F5F4EE" }}>
      <span
        data-reveal
        style={{
          display: "inline-block",
          fontSize: ".7rem",
          fontWeight: 500,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "#8C7550",
        }}
      >
        Our Story
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
          color: "#1E2016",
          margin: ".85rem 0 0",
        }}
      >
        จากเหมืองหิน
        <br />
        สู่พื้นที่ของคุณ
      </h2>

      <div
        data-reveal
        data-delay="140"
        style={{
          position: "relative",
          aspectRatio: "4/5",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(30,32,22,.16)",
          margin: "1.75rem 0 0",
        }}
      >
        <div
          data-zoom
          data-bg="/assets/showroom-wall.svg"
          data-pos="center"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 120% at 30% 20%,#52553f 0%,#3a3d2e 48%,#26281E 100%)",
            transition: "transform 700ms var(--ease-out)",
          }}
        />
        <div
          data-curtain
          style={{
            position: "absolute",
            inset: 0,
            background: "#26281E",
            transformOrigin: "right",
            transform: "scaleX(1)",
            transition: "transform 1050ms var(--ease-out)",
          }}
        />
      </div>

      <p
        data-reveal
        data-delay="200"
        style={{ fontSize: "1rem", color: "#565A45", margin: "1.75rem 0 0" }}
      >
        เราเริ่มต้นจากความเชื่อง่ายๆ ว่าพื้นที่ที่ดีเริ่มจากวัสดุที่ถูกต้อง ตลอดกว่าสองทศวรรษ TEXX
        ทำงานร่วมกับเหมืองหิน โรงงานพื้นผิว และช่างฝีมือทั่วโลก
        เพื่อคัดสรรวัสดุที่มีทั้งความงาม ความทนทาน และเรื่องราว
      </p>

      <p
        data-reveal
        data-delay="240"
        style={{ fontSize: "1rem", color: "#565A45", margin: "1rem 0 0" }}
      >
        ทุกแผ่นที่ผ่านมือเราถูกตรวจสอบด้วยมาตรฐานเดียว —
        เพื่อให้สถาปนิกและนักออกแบบมั่นใจได้ในทุกโปรเจกต์
      </p>

      <a
        href="/portfolio"
        data-reveal
        data-delay="280"
        style={{
          position: "relative",
          display: "inline-block",
          color: "#26281E",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: ".95rem",
          marginTop: "1.5rem",
          paddingBottom: 6,
          borderBottom: "1.5px solid #8C7550",
        }}
      >
        ดูผลงานของเรา →
      </a>
    </section>
  );
}
