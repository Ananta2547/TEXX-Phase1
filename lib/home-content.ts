// TEXX Home — content extracted from the Claude Design source (TEXX Home.dc.html).
// Edit `img` fields to point at real photos once dropped into /public/assets.

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const marqueeItems: string[] = [
  "Travertine",
  "Calacatta Gold",
  "Terrazzo",
  "Brushed Bronze",
  "Smoked Oak",
  "Basalt",
  "Onyx",
  "Limestone",
];

export type Product = {
  tag: string;
  title: string;
  desc: string;
  img: string;
  pos: string;
  delay: number;
};

export const products: Product[] = [
  {
    tag: "Natural Stone",
    title: "Marble & Travertine",
    desc: "หินธรรมชาติจากเหมืองคัดเกรด โทนอบอุ่น ลายเฉพาะตัวทุกแผ่น",
    img: "/assets/marble.svg",
    pos: "left top",
    delay: 0,
  },
  {
    tag: "Engineered",
    title: "Terrazzo & Quartz",
    desc: "พื้นผิววิศวกรรมทนทานสูง สม่ำเสมอ เหมาะพื้นที่พาณิชย์",
    img: "/assets/terrazzo.svg",
    pos: "left bottom",
    delay: 90,
  },
  {
    tag: "Metal",
    title: "Brushed Bronze",
    desc: "โลหะบรอนซ์ผิวขัดด้าน ให้ดีเทลระดับพรีเมียม",
    img: "/assets/bronze.svg",
    pos: "right top",
    delay: 180,
  },
  {
    tag: "Wood",
    title: "Smoked Oak",
    desc: "ไม้โอ๊กรมควันผิวสัมผัสธรรมชาติ อบอุ่นและร่วมสมัย",
    img: "/assets/oak.svg",
    pos: "right bottom",
    delay: 270,
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  delay: number;
};

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "ปีของประสบการณ์งานวัสดุ", delay: 0 },
  { value: 40, suffix: "+", label: "ประเทศต้นทางที่เราคัดสรรวัสดุ", delay: 120 },
  { value: 1200, suffix: "+", label: "โปรเจกต์ที่ส่งมอบทั่วภูมิภาค", delay: 240 },
];

export type Project = {
  tag: string;
  title: string;
  meta: string;
  img: string;
  pos: string;
  delay: number;
};

export const projects: Project[] = [
  {
    tag: "Hospitality",
    title: "The Sukhothai Suites",
    meta: "Travertine · Bronze · 2025",
    img: "/assets/showroom-left.svg",
    pos: "center",
    delay: 0,
  },
  {
    tag: "Residential",
    title: "Sathorn Penthouse",
    meta: "Calacatta · Smoked Oak · 2024",
    img: "/assets/showroom-right.svg",
    pos: "center",
    delay: 120,
  },
];
