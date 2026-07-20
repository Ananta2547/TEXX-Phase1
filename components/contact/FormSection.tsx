import type { CSSProperties } from "react";
import ContactForm from "@/components/contact/ContactForm";

const blockHeadingStyle: CSSProperties = {
  display: "block",
  fontSize: ".72rem",
  fontWeight: 500,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#7B7C6E",
  marginBottom: ".8rem",
};

export default function FormSection() {
  return (
    <section
      style={{
        padding: "0 clamp(1.5rem,5vw,6rem) clamp(6rem,12vh,10rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "clamp(2.5rem,6vw,5rem)",
          alignItems: "start",
        }}
      >
        <ContactForm />

        <div data-reveal data-delay="120" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <span style={blockHeadingStyle}>Email</span>
            <a
              href="mailto:hello@texx.co"
              data-cursor
              style={{
                position: "relative",
                display: "inline-block",
                color: "#F5F4EE",
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                paddingBottom: 3,
              }}
            >
              hello@texx.co
              <span
                data-underline
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 1.5,
                  background: "#B99A6B",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </a>
          </div>

          <div>
            <span style={blockHeadingStyle}>Phone</span>
            <span style={{ color: "#F5F4EE", fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
              +66 2 000 0000
            </span>
          </div>

          <div>
            <span style={blockHeadingStyle}>Showroom</span>
            <p style={{ color: "#A9A99A", fontSize: "1rem", margin: 0, maxWidth: "26ch" }}>
              สุขุมวิท กรุงเทพฯ<br />เปิดโดยนัดหมายล่วงหน้า
            </p>
          </div>

          <div>
            <span style={blockHeadingStyle}>Hours</span>
            <p style={{ color: "#A9A99A", fontSize: "1rem", margin: 0 }}>
              จันทร์–ศุกร์ · 9:00–18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
