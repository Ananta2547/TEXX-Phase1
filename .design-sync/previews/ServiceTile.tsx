import { ServiceTile, TexxRoot } from "@texx/ui";

// Tiles sit edge to edge — the hairline between them is the grid's own
// background showing through a 1px gap, which is how the site renders them.
const grid: React.CSSProperties = {
  margin: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: 1,
  background: "rgba(234,232,221,.12)",
  border: "1px solid rgba(234,232,221,.12)",
  borderRadius: 12,
  overflow: "hidden",
};

export const ProcessGrid = () => (
  <TexxRoot>
    <div style={grid}>
      <ServiceTile
        no="01"
        title="Material Consulting"
        description="ให้คำปรึกษาเลือกวัสดุที่เหมาะกับดีไซน์ งบประมาณ และการใช้งานจริง"
      />
      <ServiceTile
        no="02"
        title="Sampling & Mockup"
        description="จัดส่งตัวอย่างวัสดุจริง และทำ mockup ให้เห็นภาพก่อนตัดสินใจ"
      />
      <ServiceTile
        no="03"
        title="Fabrication & Cut"
        description="บริการตัด เจียร และแปรรูปตามแบบ ด้วยเครื่องจักรความละเอียดสูง"
      />
      <ServiceTile
        no="04"
        title="Delivery & Install"
        description="ขนส่งและติดตั้งหน้างานโดยทีมช่างผู้เชี่ยวชาญ ตรงเวลา ปลอดภัย"
      />
    </div>
  </TexxRoot>
);

export const SingleTile = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: 340 }}>
      <ServiceTile
        no="02"
        title="Sampling & Mockup"
        description="จัดส่งตัวอย่างวัสดุจริง และทำ mockup ให้เห็นภาพก่อนตัดสินใจ"
      />
    </div>
  </TexxRoot>
);
