import Link from "next/link";

export default function MobileContact() {
  return (
    <section
      id="m-contact"
      style={{
        padding: "5rem var(--gutter-m)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "#F5F4EE",
      }}
    >
      {/* Floating bronze outlines — ambient depth behind the CTA. */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-4%",
          width: 90,
          height: 90,
          border: "1px solid rgba(185,154,107,.35)",
          borderRadius: "50%",
          animation: "texx-float 7s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          right: "-3%",
          width: 56,
          height: 56,
          transform: "rotate(45deg)",
          border: "1px solid rgba(185,154,107,.25)",
          animation: "texx-float 9s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
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
          Start a project
        </span>
        <h2
          data-reveal
          data-delay="80"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.14,
            letterSpacing: "-.015em",
            color: "#1E2016",
            margin: "1rem 0 0",
          }}
        >
          มาสร้างพื้นที่ที่ดีที่สุด
          <br />
          ไปด้วยกัน
        </h2>
        <p
          data-reveal
          data-delay="160"
          style={{ fontSize: "1rem", color: "#565A45", margin: "1.25rem 0 0" }}
        >
          ปรึกษาทีม TEXX เพื่อเลือกวัสดุที่ใช่สำหรับโปรเจกต์ของคุณ — เรายินดีส่งตัวอย่างและใบเสนอราคา
        </p>

        <div
          data-reveal
          data-delay="240"
          style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginTop: "2rem" }}
        >
          <Link
            href="/contact"
            data-magnet
            className="texx-btn-dark"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".6rem",
              minHeight: 52,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
              background: "#26281E",
              color: "#F5F4EE",
              borderRadius: 4,
              transition: "background 400ms var(--ease-out), color 400ms",
            }}
          >
            <span
              data-sheen
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(105deg,transparent 42%,rgba(245,244,238,.35) 50%,transparent 58%)",
                transform: "translateX(-120%)",
                transition: "transform 750ms var(--ease-out)",
                zIndex: 1,
              }}
            />
            Contact us
            <span data-arrow style={{ display: "inline-block", transition: "transform 400ms var(--ease-out)" }}>
              →
            </span>
          </Link>
          <a
            href="#m-collections"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              color: "#26281E",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: ".95rem",
            }}
          >
            ดูวัสดุทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}
