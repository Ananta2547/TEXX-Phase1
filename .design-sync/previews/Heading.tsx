import { Eyebrow, Heading, TexxRoot } from "@texx/ui";

const pad: React.CSSProperties = { padding: "2rem", display: "grid", gap: "1.5rem" };

export const Scale = () => (
  <TexxRoot>
    <div style={pad}>
      <Heading level="display">Materials</Heading>
      <Heading level="h1">วัสดุระดับโลก</Heading>
      <Heading level="h2">Signature materials</Heading>
      <Heading level="h3">Travertine Classico</Heading>
    </div>
  </TexxRoot>
);

export const SectionOpening = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: "40rem" }}>
      <Eyebrow>Products</Eyebrow>
      <Heading level="h2" as="h2">
        Signature materials
      </Heading>
      <p style={{ color: "#A9A99A", marginTop: "1rem" }}>
        คัดสรรวัสดุจากเหมืองต้นทางทั่วโลก ตรวจสอบคุณภาพทุกแผ่นก่อนถึงหน้างาน
      </p>
    </div>
  </TexxRoot>
);

export const OnCreamGround = () => (
  <TexxRoot>
    <div style={{ ...pad, background: "#F5F4EE" }}>
      <Eyebrow on="light">Start a project</Eyebrow>
      <Heading level="h1" on="light">
        หาวัสดุที่ใช่สำหรับงานของคุณ
      </Heading>
    </div>
  </TexxRoot>
);
