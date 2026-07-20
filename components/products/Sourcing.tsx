const MEDIA_PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 25%, #4d503b 0%, #3f4232 46%, #26281E 100%)";

export default function Sourcing() {
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
        <div data-reveal data-cursor style={{ position: "relative", aspectRatio: "3/2", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(30,32,22,.16)" }}>
          <div data-zoom data-bg="/assets/showroom-left.svg" data-pos="center" style={{ position: "absolute", inset: 0, background: MEDIA_PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
          <div data-curtain style={{ position: "absolute", inset: 0, background: "#3a3d2e", transformOrigin: "right", transform: "scaleX(1)", transition: "transform 1050ms cubic-bezier(0.16,1,0.3,1)" }} />
        </div>
        <div>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#8C7550" }}>
            Sourcing
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#1E2016", margin: "1rem 0 0" }}>
            คัดจากต้นทาง<br />ตรวจทุกแผ่น
          </h2>
          <p data-reveal data-delay="160" style={{ fontSize: "1.05rem", color: "#565A45", maxWidth: "50ch", margin: "1.5rem 0 0" }}>
            เราเดินทางไปถึงเหมืองและโรงงาน เพื่อคัดเลือกวัสดุด้วยตาตัวเอง ทุกล็อตผ่านการตรวจสอบเฉดสี ลาย และคุณภาพ ก่อนถึงมือคุณ
          </p>
        </div>
      </div>
    </section>
  );
}
