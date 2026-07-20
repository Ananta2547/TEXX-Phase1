import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Stats from "@/components/home/Stats";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import CTA from "@/components/portfolio/CTA";
import { stats } from "@/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio — TEXX",
  description:
    "โปรเจกต์ที่ TEXX ร่วมส่งมอบวัสดุ — โรงแรม ที่พักอาศัย รีเทล และพื้นที่พาณิชย์ทั่วภูมิภาค",
};

export default function PortfolioPage() {
  return (
    <MotionRoot>
      <Nav />
      <Hero />
      <Projects />
      <Stats items={stats} accentColor="#8C7550" />
      <CTA />
      <Footer />
    </MotionRoot>
  );
}
