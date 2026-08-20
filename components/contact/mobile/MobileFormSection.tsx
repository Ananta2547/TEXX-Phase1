import MobileContactForm from "./MobileContactForm";

const quickActionStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".45rem",
  minHeight: 48,
  border: "1px solid rgba(234,232,221,.24)",
  borderRadius: 4,
  color: "#EAE8DD",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: ".85rem",
} as const;

const detailLabel = {
  display: "block",
  fontSize: ".68rem",
  fontWeight: 500,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#7B7C6E",
  marginBottom: ".6rem",
} as const;

const detailBody = { color: "#A9A99A", fontSize: ".92rem", margin: 0 } as const;

export default function MobileFormSection() {
  return (
    <section style={{ padding: "0 var(--gutter-m) 3rem" }}>
      {/* Tap-to-act row — the two things a phone can do that a desktop cannot. */}
      <div style={{ display: "flex", flexDirection: "row", gap: ".6rem", marginBottom: "1.5rem" }}>
        <a href="tel:+6620000000" className="texx-quick-action" style={quickActionStyle}>
          โทรเลย
        </a>
        <a href="mailto:hello@texx.co" className="texx-quick-action" style={quickActionStyle}>
          อีเมล
        </a>
      </div>

      <MobileContactForm />

      <div
        data-reveal
        data-delay="120"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.75rem",
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(234,232,221,.12)",
        }}
      >
        <div>
          <span style={detailLabel}>Email</span>
          <a
            href="mailto:hello@texx.co"
            style={{
              color: "#F5F4EE",
              fontFamily: "var(--font-display)",
              fontSize: ".98rem",
              borderBottom: "1.5px solid #B99A6B",
              paddingBottom: 2,
            }}
          >
            hello@texx.co
          </a>
        </div>
        <div>
          <span style={detailLabel}>Phone</span>
          <span
            style={{ color: "#F5F4EE", fontFamily: "var(--font-display)", fontSize: ".98rem" }}
          >
            +66 2 000 0000
          </span>
        </div>
        <div>
          <span style={detailLabel}>Showroom</span>
          <p style={detailBody}>
            สุขุมวิท กรุงเทพฯ
            <br />
            เปิดโดยนัดหมายล่วงหน้า
          </p>
        </div>
        <div>
          <span style={detailLabel}>Hours</span>
          <p style={detailBody}>
            จันทร์–ศุกร์
            <br />
            9:00–18:00
          </p>
        </div>
      </div>
    </section>
  );
}
