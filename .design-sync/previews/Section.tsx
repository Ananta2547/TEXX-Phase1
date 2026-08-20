import { Eyebrow, Heading, MaterialCard, Section, Stat, TexxRoot } from "@texx/ui";

export const OliveBand = () => (
  <TexxRoot>
    <Section tone="olive">
      <Eyebrow>About</Eyebrow>
      <Heading level="h2">วัสดุที่เลือกมาแล้วว่าดี</Heading>
      <p style={{ color: "#A9A99A", marginTop: "1rem", maxWidth: "44ch" }}>
        เราทำงานกับเหมืองและโรงงานต้นทางโดยตรง คัดทีละล็อต
      </p>
    </Section>
  </TexxRoot>
);

export const DeepBandWithGrid = () => (
  <TexxRoot>
    <Section tone="olive-deep">
      <Eyebrow>Products</Eyebrow>
      <Heading level="h2">Signature materials</Heading>
      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 24,
        }}
      >
        <MaterialCard tag="Natural Stone" title="Marble & Travertine" />
        <MaterialCard tag="Metal" title="Brushed Bronze" />
      </div>
    </Section>
  </TexxRoot>
);

export const LightBand = () => (
  <TexxRoot>
    <Section tone="light">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "3rem",
        }}
      >
        <Stat value={25} suffix="+" label="ปีของประสบการณ์งานวัสดุ" />
        <Stat value={1200} suffix="+" label="โปรเจกต์ที่ส่งมอบทั่วภูมิภาค" />
      </div>
    </Section>
  </TexxRoot>
);

export const NightBand = () => (
  <TexxRoot>
    <Section tone="night">
      <Eyebrow>Contact</Eyebrow>
      <Heading level="h2">เริ่มต้นโปรเจกต์กับเรา</Heading>
    </Section>
  </TexxRoot>
);
