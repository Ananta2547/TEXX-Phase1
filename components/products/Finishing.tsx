import Link from "next/link";

const MEDIA_PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 25%, #4d503b 0%, #3f4232 46%, #26281E 100%)";

export default function Finishing() {
  return (
    <section
      style={{
        padding: "var(--section-y) var(--gutter)",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
      }}
    >
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
        <div style={{ order: 2 }}>
          <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
            Finishing
          </span>
          <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
            ผิวสัมผัสที่ใช่<br />สำหรับทุกพื้นที่
          </h2>
          <p data-reveal data-delay="160" style={{ fontSize: "1.05rem", color: "#A9A99A", maxWidth: "50ch", margin: "1.5rem 0 0" }}>
            เลือกได้ทั้งผิวขัดเงา ด้าน หรือผิวธรรมชาติ พร้อมคำแนะนำการใช้งานให้เหมาะกับพื้นที่พาณิชย์และที่พักอาศัย
          </p>
          <Link href="/contact" data-reveal data-delay="220" data-cursor style={{ position: "relative", display: "inline-block", color: "#EAE8DD", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", marginTop: "2rem", paddingBottom: 4 }}>
            ขอตัวอย่างวัสดุ →
            <span data-underline style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 1.5, background: "#B99A6B", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }} />
          </Link>
        </div>
        <div data-reveal data-cursor style={{ position: "relative", aspectRatio: "3/2", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(234,232,221,.12)", order: 1 }}>
          <div data-zoom data-bg="/assets/showroom-right.svg" data-pos="center" style={{ position: "absolute", inset: 0, background: MEDIA_PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
          <div data-curtain style={{ position: "absolute", inset: 0, background: "#3a3d2e", transformOrigin: "right", transform: "scaleX(1)", transition: "transform 1050ms cubic-bezier(0.16,1,0.3,1)" }} />
        </div>
      </div>
    </section>
  );
}
