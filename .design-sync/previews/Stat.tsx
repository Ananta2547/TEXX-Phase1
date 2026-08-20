import { Stat, TexxRoot } from "@texx/ui";

const row: React.CSSProperties = {
  padding: "2.5rem 2rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
  gap: "clamp(2rem,5vw,4rem)",
};

export const OnCreamBand = () => (
  <TexxRoot>
    <div style={{ ...row, background: "#F5F4EE" }}>
      <Stat value={25} suffix="+" label="ปีของประสบการณ์งานวัสดุ" />
      <Stat value={40} suffix="+" label="ประเทศต้นทางที่เราคัดสรรวัสดุ" />
      <Stat value={1200} suffix="+" label="โปรเจกต์ที่ส่งมอบทั่วภูมิภาค" />
    </div>
  </TexxRoot>
);

export const OnOliveGround = () => (
  <TexxRoot>
    <div style={row}>
      <Stat on="dark" value={25} suffix="+" label="ปีของประสบการณ์งานวัสดุ" />
      <Stat on="dark" value={40} suffix="+" label="ประเทศต้นทางที่เราคัดสรรวัสดุ" />
    </div>
  </TexxRoot>
);

export const NoSuffix = () => (
  <TexxRoot>
    <div style={{ ...row, background: "#F5F4EE" }}>
      <Stat value={2001} label="ปีที่เริ่มต้นธุรกิจวัสดุ" />
    </div>
  </TexxRoot>
);
