import { MaterialCard, TexxRoot } from "@texx/ui";

const grid: React.CSSProperties = {
  padding: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: 24,
};

export const CollectionGrid = () => (
  <TexxRoot>
    <div style={grid}>
      <MaterialCard
        tag="Natural Stone"
        title="Marble & Travertine"
        description="หินธรรมชาติจากเหมืองคัดเกรด โทนอบอุ่น ลายเฉพาะตัวทุกแผ่น"
      />
      <MaterialCard
        tag="Engineered"
        title="Terrazzo & Quartz"
        description="พื้นผิววิศวกรรมทนทานสูง สม่ำเสมอ เหมาะพื้นที่พาณิชย์"
      />
      <MaterialCard
        tag="Metal"
        title="Brushed Bronze"
        description="โลหะบรอนซ์ผิวขัดด้าน ให้ดีเทลระดับพรีเมียม"
      />
    </div>
  </TexxRoot>
);

export const Single = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: 320 }}>
      <MaterialCard
        tag="Wood"
        title="Smoked Oak"
        description="ไม้โอ๊กรมควันผิวสัมผัสธรรมชาติ อบอุ่นและร่วมสมัย"
      />
    </div>
  </TexxRoot>
);

export const AsLink = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: 320 }}>
      <MaterialCard
        href="/portfolio/sathorn-penthouse"
        tag="Residential"
        title="Sathorn Penthouse"
        description="Calacatta · Smoked Oak · 2024"
      />
    </div>
  </TexxRoot>
);

export const TitleOnly = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: 320 }}>
      <MaterialCard title="Onyx & Basalt" />
    </div>
  </TexxRoot>
);
