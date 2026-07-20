import Link from "next/link";

const CARD_PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 20%, #52553f 0%, #3a3d2e 48%, #26281E 100%)";

export default function Story() {
  return (
    <section style={{ padding: "var(--section-y) var(--gutter)", background: "#F5F4EE" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "clamp(2.5rem,6vw,6rem)",
          alignItems: "center",
        }}
      >
        <div>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#8C7550" }}>
            Our Story
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#1E2016", margin: "1rem 0 0" }}>
            จากเหมืองหินสู่พื้นที่ของคุณ
          </h2>
          <p data-reveal data-delay="160" style={{ fontSize: "1.05rem", color: "#565A45", maxWidth: "52ch", margin: "1.5rem 0 0" }}>
            เราเริ่มต้นจากความเชื่อง่ายๆ ว่าพื้นที่ที่ดีเริ่มจากวัสดุที่ถูกต้อง ตลอดกว่าสองทศวรรษ TEXX ทำงานร่วมกับเหมืองหิน โรงงานพื้นผิว และช่างฝีมือทั่วโลก เพื่อคัดสรรวัสดุที่มีทั้งความงาม ความทนทาน และเรื่องราว
          </p>
          <p data-reveal data-delay="220" style={{ fontSize: "1.05rem", color: "#565A45", maxWidth: "52ch", margin: "1rem 0 0" }}>
            ทุกแผ่นที่ผ่านมือเราถูกตรวจสอบด้วยมาตรฐานเดียว — เพื่อให้สถาปนิกและนักออกแบบมั่นใจได้ในทุกโปรเจกต์
          </p>
          <Link href="/portfolio" data-reveal data-delay="280" data-cursor style={{ position: "relative", display: "inline-block", color: "#26281E", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", marginTop: "2rem", paddingBottom: 4 }}>
            ดูผลงานของเรา →
            <span data-underline style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 1.5, background: "#8C7550", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }} />
          </Link>
        </div>

        <div data-reveal data-delay="120" data-cursor style={{ position: "relative", aspectRatio: "4/5", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(30,32,22,.16)" }}>
          <div data-zoom data-bg="/assets/showroom-wall.svg" data-pos="center" style={{ position: "absolute", inset: 0, background: CARD_PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
          <div data-curtain style={{ position: "absolute", inset: 0, background: "#26281E", transformOrigin: "right", transform: "scaleX(1)", transition: "transform 1050ms cubic-bezier(0.16,1,0.3,1)" }} />
        </div>
      </div>
    </section>
  );
}
