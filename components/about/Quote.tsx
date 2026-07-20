export default function Quote() {
  return (
    <section style={{ padding: "clamp(6rem,14vh,11rem) var(--gutter)", background: "#1E2016", textAlign: "center" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <span data-reveal style={{ display: "inline-block", fontSize: "2.4rem", color: "#B99A6B", lineHeight: 1 }}>
          &ldquo;
        </span>
        <p data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.5rem,3vw,2.4rem)", lineHeight: 1.35, letterSpacing: "-.01em", color: "#F5F4EE", margin: ".5rem 0 0" }}>
          ความหรูหราที่แท้จริง ไม่ได้อยู่ที่การตกแต่งมากมาย แต่อยู่ที่วัสดุที่เลือกอย่างตั้งใจ
        </p>
        <p data-reveal data-delay="180" style={{ fontSize: ".85rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#7B7C6E", margin: "1.75rem 0 0" }}>
          TEXX — Design Philosophy
        </p>
      </div>
    </section>
  );
}
