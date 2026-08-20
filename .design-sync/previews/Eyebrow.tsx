import { Eyebrow, Heading, TexxRoot } from "@texx/ui";

const pad: React.CSSProperties = { padding: "2rem", display: "grid", gap: "1.25rem" };

export const AboveHeadings = () => (
  <TexxRoot>
    <div style={pad}>
      <div>
        <Eyebrow>Our Collections</Eyebrow>
        <Heading level="h2">Signature materials</Heading>
      </div>
      <div>
        <Eyebrow>Material Families</Eyebrow>
        <Heading level="h2">เลื่อนดูวัสดุทั้งหมด</Heading>
      </div>
    </div>
  </TexxRoot>
);

export const OnBothGrounds = () => (
  <TexxRoot>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ padding: "2rem", background: "#34372A" }}>
        <Eyebrow>Premium Materials</Eyebrow>
      </div>
      <div style={{ padding: "2rem", background: "#F5F4EE" }}>
        <Eyebrow on="light">Start a project</Eyebrow>
      </div>
    </div>
  </TexxRoot>
);
