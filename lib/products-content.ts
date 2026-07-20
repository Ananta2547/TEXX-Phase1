// TEXX Products — content from the Claude Design source (Products.dc.html).
// Card textures map to the local procedural SVGs by material family.

export type MaterialCard = { tag: string; title: string; desc: string; img: string; pos: string };

export const materialFamilies: MaterialCard[] = [
  { tag: "Natural Stone", title: "Marble & Travertine", desc: "หินธรรมชาติจากเหมืองคัดเกรด โทนอบอุ่น ลายเฉพาะตัวทุกแผ่น", img: "/assets/marble.svg", pos: "left top" },
  { tag: "Engineered", title: "Terrazzo & Quartz", desc: "พื้นผิววิศวกรรมทนทานสูง สม่ำเสมอ เหมาะพื้นที่พาณิชย์", img: "/assets/terrazzo.svg", pos: "left bottom" },
  { tag: "Metal", title: "Brushed Bronze", desc: "โลหะบรอนซ์ผิวขัดด้าน ให้ดีเทลระดับพรีเมียม", img: "/assets/bronze.svg", pos: "right top" },
  { tag: "Wood", title: "Smoked Oak", desc: "ไม้โอ๊กรมควันผิวสัมผัสธรรมชาติ อบอุ่นและร่วมสมัย", img: "/assets/oak.svg", pos: "right bottom" },
  { tag: "Natural Stone", title: "Onyx & Basalt", desc: "หินโทนลึกลายพิเศษ เหมาะงานผนังไฮไลต์และเคาน์เตอร์", img: "/assets/marble.svg", pos: "center" },
  { tag: "Engineered", title: "Microcement", desc: "ผิวปูนขัดไร้รอยต่อ ให้ลุคมินิมอลร่วมสมัย ทนทานสูง", img: "/assets/terrazzo.svg", pos: "center" },
  { tag: "Metal", title: "Blackened Steel", desc: "เหล็กรมดำผิวด้าน เพิ่มมิติเข้มให้ดีเทลสถาปัตย์", img: "/assets/bronze.svg", pos: "center" },
  { tag: "Wood", title: "Walnut & Teak", desc: "ไม้เนื้อแข็งโทนอบอุ่น ลายสวยเหมาะงานบิลต์อิน", img: "/assets/oak.svg", pos: "center" },
];

export type Service = { no: string; title: string; desc: string; delay: number };

export const services: Service[] = [
  { no: "01", title: "Material Consulting", desc: "ให้คำปรึกษาเลือกวัสดุที่เหมาะกับดีไซน์ งบประมาณ และการใช้งานจริง", delay: 0 },
  { no: "02", title: "Sampling & Mockup", desc: "จัดส่งตัวอย่างวัสดุจริง และทำ mockup ให้เห็นภาพก่อนตัดสินใจ", delay: 90 },
  { no: "03", title: "Fabrication & Cut", desc: "บริการตัด เจียร และแปรรูปตามแบบ ด้วยเครื่องจักรความละเอียดสูง", delay: 180 },
  { no: "04", title: "Delivery & Install", desc: "ขนส่งและติดตั้งหน้างานโดยทีมช่างผู้เชี่ยวชาญ ตรงเวลา ปลอดภัย", delay: 270 },
];
