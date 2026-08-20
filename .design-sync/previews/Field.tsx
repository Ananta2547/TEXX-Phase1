import { Button, Field, TexxRoot } from "@texx/ui";

const card: React.CSSProperties = {
  margin: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  background: "#26281E",
  border: "1px solid rgba(234,232,221,.12)",
  borderRadius: 12,
  padding: "2rem",
};

export const ContactForm = () => (
  <TexxRoot>
    <form style={card}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "1.6rem",
        }}
      >
        <Field label="ชื่อ" name="name" placeholder="ชื่อ–นามสกุล" />
        <Field label="อีเมล" name="email" type="email" placeholder="you@email.com" />
      </div>
      <Field label="ประเภทโปรเจกต์" name="type" as="select">
        <option>ที่พักอาศัย (Residential)</option>
        <option>โรงแรม / ฮอสพิทาลิตี้</option>
        <option>รีเทล / ออฟฟิศ</option>
      </Field>
      <Field
        label="รายละเอียด"
        name="message"
        as="textarea"
        rows={3}
        placeholder="เล่าเกี่ยวกับพื้นที่ วัสดุที่สนใจ หรือช่วงเวลาโปรเจกต์"
      />
      <div>
        <Button type="submit" arrow>
          ส่งข้อความ
        </Button>
      </div>
    </form>
  </TexxRoot>
);

export const Controls = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", display: "grid", gap: "1.6rem", maxWidth: 320 }}>
      <Field label="ชื่อโครงการ" placeholder="เช่น Sathorn Penthouse" />
      <Field label="วัสดุที่สนใจ" as="select" defaultValue="Terrazzo">
        <option>Marble</option>
        <option>Terrazzo</option>
        <option>Bronze</option>
      </Field>
    </div>
  </TexxRoot>
);

export const Filled = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", maxWidth: 320 }}>
      <Field label="อีเมล" type="email" defaultValue="studio@texx.co" />
    </div>
  </TexxRoot>
);
