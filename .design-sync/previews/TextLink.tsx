import { Button, TextLink, TexxRoot } from "@texx/ui";

export const BesideAButton = () => (
  <TexxRoot>
    <div
      style={{
        padding: "2rem",
        display: "flex",
        gap: "1.75rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary" arrow>
        ดูคอลเลกชัน
      </Button>
      <TextLink href="/portfolio">ดูผลงาน</TextLink>
    </div>
  </TexxRoot>
);

export const Stacked = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", display: "grid", gap: "1rem", justifyItems: "start" }}>
      <TextLink href="/products">ดาวน์โหลดแคตตาล็อก</TextLink>
      <TextLink href="/contact">ขอตัวอย่างวัสดุ</TextLink>
      <TextLink href="/about">รู้จักเรา</TextLink>
    </div>
  </TexxRoot>
);

export const OnCreamGround = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", background: "#F5F4EE" }}>
      <TextLink href="/portfolio" on="light">
        ดูผลงานทั้งหมด
      </TextLink>
    </div>
  </TexxRoot>
);
