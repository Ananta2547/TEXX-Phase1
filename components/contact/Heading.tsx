export default function Heading() {
  return (
    <section
      style={{
        padding:
          "clamp(9rem,20vh,13rem) clamp(1.5rem,5vw,6rem) clamp(3rem,6vh,4rem)",
      }}
    >
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <span
          data-reveal
          style={{
            display: "inline-block",
            fontSize: ".75rem",
            fontWeight: 500,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "#B99A6B",
          }}
        >
          Contact TEXX
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
          }}
        >
          <span data-reveal data-delay="80" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
            <span data-reveal-line data-delay="120" style={{ display: "block" }}>มาสร้างพื้นที่</span>
          </span>
          <span data-reveal data-delay="200" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
            <span data-reveal-line data-delay="240" style={{ display: "block" }}>ที่ดีที่สุดด้วยกัน</span>
          </span>
        </h1>
        <p
          data-reveal
          data-delay="360"
          style={{
            fontSize: "1.125rem",
            color: "#A9A99A",
            maxWidth: "48ch",
            margin: "1.5rem 0 0",
          }}
        >
          บอกเราเกี่ยวกับโปรเจกต์ของคุณ ทีมงานจะติดต่อกลับพร้อมคำแนะนำวัสดุ ตัวอย่าง และใบเสนอราคาภายใน 2 วันทำการ
        </p>
      </div>
    </section>
  );
}
