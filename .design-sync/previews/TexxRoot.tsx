import { Button, Eyebrow, Heading, Section, TexxRoot } from "@texx/ui";

export const WrapsAPage = () => (
  <TexxRoot>
    <Section tone="olive">
      <Eyebrow>Premium Materials — Global Standard</Eyebrow>
      <Heading level="h1">วัสดุระดับโลก</Heading>
      <p style={{ color: "#A9A99A", margin: "1rem 0 2rem", maxWidth: "42ch" }}>
        คัดสรรวัสดุจากเหมืองต้นทางทั่วโลก ตรวจสอบคุณภาพทุกแผ่นก่อนถึงหน้างาน
      </p>
      <Button variant="primary" arrow>
        ดูคอลเลกชัน
      </Button>
    </Section>
  </TexxRoot>
);

// Without a Section, the root itself is what paints the olive ground and
// hands down the body face — plain markup nested inside it lands on-brand
// with no styling of its own.
export const SuppliesGroundAndType = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", display: "grid", gap: "1rem" }}>
      <Eyebrow>Sourcing</Eyebrow>
      <p style={{ margin: 0, maxWidth: "46ch" }}>
        ข้อความนี้ไม่ได้ตั้งสีหรือฟอนต์เอง — ทั้งพื้น olive สีตัวอักษรครีม
        และฟอนต์ Inter มาจาก TexxRoot ที่ครอบอยู่
      </p>
      <p style={{ margin: 0, color: "#A9A99A", maxWidth: "46ch" }}>
        เราทำงานกับเหมืองและโรงงานต้นทางโดยตรง คัดทีละล็อต
      </p>
    </div>
  </TexxRoot>
);
