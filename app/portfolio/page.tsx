import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Stats from "@/components/home/Stats";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import CTA from "@/components/portfolio/CTA";
import { stats } from "@/lib/portfolio-content";

import MobileShell from "@/components/mobile/MobileShell";
import MobileNav from "@/components/mobile/MobileNav";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobilePageHero from "@/components/mobile/MobilePageHero";
import MobileStatsBand from "@/components/mobile/MobileStatsBand";
import MobileCtaSection from "@/components/mobile/MobileCtaSection";
import MobileCtaBar from "@/components/mobile/MobileCtaBar";
import MobileProjects from "@/components/portfolio/mobile/MobileProjects";

export const metadata: Metadata = {
  title: "Portfolio — TEXX",
  description:
    "โปรเจกต์ที่ TEXX ร่วมส่งมอบวัสดุ — โรงแรม ที่พักอาศัย รีเทล และพื้นที่พาณิชย์ทั่วภูมิภาค",
};

// Two 1:1 ports of the same page — one per Design Composer source file
// (TEXX Portfolio.dc.html and TEXX Portfolio Mobile.dc.html). The breakpoint
// in globals.css shows exactly one; see .texx-viewport-* there.
export default function PortfolioPage() {
  return (
    <>
      <div className="texx-viewport-desktop">
        <MotionRoot>
          <Nav />
          <Hero />
          <Projects />
          <Stats items={stats} accentColor="#8C7550" />
          <CTA />
          <Footer />
        </MotionRoot>
      </div>

      <div className="texx-viewport-mobile">
        <MobileShell>
          <MobileNav active="Work" />
          <MobilePageHero
            eyebrow="Selected Work"
            lines={["Spaces we", "helped shape."]}
            lede="โปรเจกต์ที่ TEXX ร่วมส่งมอบวัสดุ — โรงแรม ที่พักอาศัย รีเทล และพื้นที่พาณิชย์ทั่วภูมิภาค"
            image="/assets/showroom-right.svg"
            minHeight="72svh"
          />
          <MobileProjects />
          <MobileStatsBand items={stats} accent="bronze-dark" />
          <MobileCtaSection
            eyebrow="Your project next"
            lines={["อยากให้พื้นที่ของคุณ", "อยู่ในหน้านี้"]}
            primary={{ label: "เริ่มคุยกับเรา", href: "/contact" }}
            secondary={{ label: "ดูวัสดุทั้งหมด", href: "/products" }}
            tone="night"
          />
          <MobileFooter />
          <MobileCtaBar
            eyebrow="Start a project"
            text="คุยกับทีมเรื่องโปรเจกต์ของคุณ"
            label="Contact"
            href="/contact"
          />
        </MobileShell>
      </div>
    </>
  );
}
