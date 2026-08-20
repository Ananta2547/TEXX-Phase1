const headlineLines = ["มาสร้างพื้นที่", "ที่ดีที่สุดด้วยกัน"];

export default function MobileHeading() {
  return (
    <section style={{ padding: "6.5rem var(--gutter-m) 2.5rem" }}>
      <span
        data-reveal
        style={{
          display: "block",
          fontSize: ".65rem",
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
          fontSize: "2.35rem",
          lineHeight: 1.08,
          letterSpacing: "-.02em",
          color: "#F5F4EE",
          margin: "1rem 0 0",
        }}
      >
        {headlineLines.map((line, i) => (
          <span
            key={line}
            data-reveal
            data-delay={80 + i * 120}
            style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}
          >
            <span data-reveal-line data-delay={120 + i * 120} style={{ display: "block" }}>
              {line}
            </span>
          </span>
        ))}
      </h1>

      <p
        data-reveal
        data-delay="360"
        style={{ fontSize: "1rem", color: "#A9A99A", margin: "1.25rem 0 0" }}
      >
        บอกเราเกี่ยวกับโปรเจกต์ของคุณ ทีมงานจะติดต่อกลับพร้อมคำแนะนำวัสดุ ตัวอย่าง
        และใบเสนอราคาภายใน 2 วันทำการ
      </p>
    </section>
  );
}
