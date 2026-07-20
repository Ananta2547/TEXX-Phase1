import Link from "next/link";
import { MagnetFx } from "@/components/home/MagnetFx";

export default function CTA() {
  return (
    <section style={{ padding: "clamp(6rem,14vh,11rem) var(--gutter)", textAlign: "center", background: "#F5F4EE" }}>
      <div style={{ maxWidth: "44rem", margin: "0 auto" }}>
        <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#8C7550" }}>
          Start a project
        </span>
        <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.25rem)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1E2016", margin: "1.25rem 0 0" }}>
          หาวัสดุที่ใช่<br />สำหรับงานของคุณ
        </h2>
        <div data-reveal data-delay="200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginTop: "2.25rem" }}>
          <Link
            href="/contact"
            data-cursor
            data-magnet
            className="texx-btn-dark"
            style={{ position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: ".6rem", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", background: "#26281E", color: "#F5F4EE", padding: ".95rem 2rem", borderRadius: 4, transition: "background 400ms cubic-bezier(0.16,1,0.3,1), color 400ms" }}
          >
            <MagnetFx />
            Contact us
            <span data-arrow style={{ display: "inline-block", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }}>→</span>
          </Link>
          <Link href="/portfolio" data-cursor style={{ position: "relative", color: "#26281E", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", paddingBottom: 4 }}>
            ดูผลงาน
            <span data-underline style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 1.5, background: "#8C7550", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
