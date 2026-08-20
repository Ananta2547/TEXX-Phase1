import { Button, TexxRoot } from "@texx/ui";

const pad: React.CSSProperties = {
  padding: "2rem",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  alignItems: "center",
};

export const Variants = () => (
  <TexxRoot>
    <div style={pad}>
      <Button variant="primary" arrow>
        ดูคอลเลกชัน
      </Button>
      <Button variant="secondary">ติดต่อเรา</Button>
    </div>
  </TexxRoot>
);

export const OnCreamGround = () => (
  <TexxRoot>
    <div style={{ ...pad, background: "#F5F4EE" }}>
      <Button variant="dark" arrow>
        ขอใบเสนอราคา
      </Button>
    </div>
  </TexxRoot>
);

export const WithAndWithoutArrow = () => (
  <TexxRoot>
    <div style={pad}>
      <Button variant="primary" arrow>
        เริ่มโปรเจกต์
      </Button>
      <Button variant="primary">ส่งข้อความ</Button>
    </div>
  </TexxRoot>
);

export const Disabled = () => (
  <TexxRoot>
    <div style={pad}>
      <Button variant="primary" disabled>
        กำลังส่ง…
      </Button>
      <Button variant="secondary" disabled>
        ไม่พร้อมใช้งาน
      </Button>
    </div>
  </TexxRoot>
);
