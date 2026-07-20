import Link from "next/link";
import { MagnetFx } from "@/components/home/MagnetFx";

export default function CTA() {
  return (
    <section style={{ padding: "clamp(6rem,14vh,11rem) var(--gutter)", textAlign: "center", background: "#1E2016" }}>
      <div style={{ maxWidth: "44rem", margin: "0 auto" }}>
        <span data-reveal style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
          Your project next
        </span>
        <h2 data-reveal data-delay="80" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.25rem)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#F5F4EE", margin: "1.25rem 0 0" }}>
          อยากให้พื้นที่ของคุณ<br />อยู่ในหน้านี้
        </h2>
        <div data-reveal data-delay="200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginTop: "2.25rem" }}>
          <Link
            href="/contact"
            data-cursor
            data-magnet
            className="texx-btn-primary"
            style={{ position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: ".6rem", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", background: "#EAE8DD", color: "#26281E", padding: ".95rem 2rem", borderRadius: 4, transition: "background 400ms cubic-bezier(0.16,1,0.3,1), color 400ms" }}
          >
            <MagnetFx />
            เริ่มคุยกับเรา
            <span data-arrow style={{ display: "inline-block", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }}>→</span>
          </Link>
          <Link href="/products" data-cursor style={{ position: "relative", color: "#EAE8DD", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: ".95rem", paddingBottom: 4 }}>
            ดูวัสดุทั้งหมด
            <span data-underline style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 1.5, background: "#B99A6B", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
