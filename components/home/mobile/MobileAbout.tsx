export default function MobileAbout() {
  return (
    <section
      id="m-about"
      style={{ padding: "var(--section-y-m) var(--gutter-m)", background: "#F5F4EE" }}
    >
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
        About TEXX
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
        วัสดุคือรากฐาน
        <br />
        ของงานที่ดี
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
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(120% 90% at 30% 15%,rgba(185,154,107,.18),transparent 60%)",
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
        เราเชื่อว่าพื้นที่ที่ดีเริ่มต้นจากวัสดุที่ถูกต้อง TEXX
        ทำงานร่วมกับสถาปนิกและนักออกแบบเพื่อคัดสรรพื้นผิวที่มีทั้งความงาม ความทนทาน และเรื่องราว —
        ตั้งแต่เหมืองหินในยุโรปจนถึงโรงงานพื้นผิววิศวกรรมชั้นนำ
      </p>

      <a
        href="#m-work"
        data-reveal
        data-delay="260"
        style={{
          position: "relative",
          display: "inline-block",
          color: "#26281E",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: ".95rem",
          marginTop: "1.5rem",
          paddingBottom: 6,
          borderBottom: "1.5px solid #B99A6B",
        }}
      >
        ดูผลงานของเรา →
      </a>
    </section>
  );
}
