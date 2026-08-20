export default function MobileQuote() {
  return (
    <section style={{ padding: "4.5rem var(--gutter-m)", background: "#1E2016", textAlign: "center" }}>
      <span
        data-reveal
        aria-hidden="true"
        style={{ display: "inline-block", fontSize: "2.2rem", color: "#B99A6B", lineHeight: 1 }}
      >
        “
      </span>

      <p
        data-reveal
        data-delay="80"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.4rem",
          lineHeight: 1.4,
          letterSpacing: "-.01em",
          color: "#F5F4EE",
          margin: ".4rem 0 0",
        }}
      >
        ความหรูหราที่แท้จริง ไม่ได้อยู่ที่การตกแต่งมากมาย แต่อยู่ที่วัสดุที่เลือกอย่างตั้งใจ
      </p>

      <p
        data-reveal
        data-delay="180"
        style={{
          fontSize: ".72rem",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#7B7C6E",
          margin: "1.5rem 0 0",
        }}
      >
        TEXX — Design Philosophy
      </p>
    </section>
  );
}
