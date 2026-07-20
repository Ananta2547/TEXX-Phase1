// TEXX Portfolio — content ported from the Claude Design source.
// Edit `img` fields to point at real photos once dropped into /public/assets.

import type { Project, Stat } from "@/lib/home-content";

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
    delay: 90,
  },
  {
    tag: "Retail",
    title: "TEXX Flagship Showroom",
    meta: "Terrazzo · Bronze · 2024",
    img: "/assets/showroom-wall.svg",
    pos: "center",
    delay: 180,
  },
  {
    tag: "Cultural",
    title: "Riverside Gallery",
    meta: "Limestone · Basalt · 2023",
    img: "/assets/marble.svg",
    pos: "center",
    delay: 0,
  },
  {
    tag: "Residential",
    title: "Langsuan Residence",
    meta: "Marble · Oak · 2023",
    img: "/assets/showroom-left.svg",
    pos: "center",
    delay: 90,
  },
  {
    tag: "Commercial",
    title: "Erawan Office Lobby",
    meta: "Quartz · Brushed Bronze · 2022",
    img: "/assets/showroom-right.svg",
    pos: "center",
    delay: 180,
  },
];

export const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "โปรเจกต์ที่ส่งมอบทั่วภูมิภาค", delay: 0 },
  { value: 40, suffix: "+", label: "ประเทศต้นทางที่คัดสรรวัสดุ", delay: 120 },
  { value: 25, suffix: "+", label: "ปีของประสบการณ์งานวัสดุ", delay: 240 },
];
