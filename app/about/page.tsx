import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Stats from "@/components/home/Stats";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Quote from "@/components/about/Quote";
import CTA from "@/components/about/CTA";

import MobileShell from "@/components/mobile/MobileShell";
import MobileNav from "@/components/mobile/MobileNav";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobilePageHero from "@/components/mobile/MobilePageHero";
import MobileStatsBand from "@/components/mobile/MobileStatsBand";
import MobileCtaSection from "@/components/mobile/MobileCtaSection";
import MobileCtaBar from "@/components/mobile/MobileCtaBar";
import MobileStory from "@/components/about/mobile/MobileStory";
import MobileValues from "@/components/about/mobile/MobileValues";
import MobileQuote from "@/components/about/mobile/MobileQuote";
import { stats } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "About — TEXX",
  description:
    "TEXX คือผู้คัดสรรและจัดหาวัสดุพรีเมียมสำหรับงานสถาปัตยกรรมและตกแต่งภายใน ด้วยมาตรฐานเดียวจากทั่วโลก",
};

// Two 1:1 ports of the same page — one per Design Composer source file
// (TEXX About.dc.html and TEXX About Mobile.dc.html). The breakpoint in
// globals.css shows exactly one; see .texx-viewport-* there.
export default function AboutPage() {
  return (
    <>
      <div className="texx-viewport-desktop">
        <MotionRoot>
          <Nav />
          <Hero />
          <Story />
          <Values />
          <Stats accentColor="#8C7550" />
          <Quote />
          <CTA />
          <Footer />
        </MotionRoot>
      </div>

      <div className="texx-viewport-mobile">
        <MobileShell>
          <MobileNav active="About" />
          <MobilePageHero
            eyebrow="About TEXX"
            lines={["วัสดุคือรากฐาน", "ของงานที่ดี"]}
            lede="TEXX คือผู้คัดสรรและจัดหาวัสดุพรีเมียมสำหรับงานสถาปัตยกรรมและตกแต่งภายใน ด้วยมาตรฐานเดียวจากทั่วโลก"
            image="/assets/showroom-left.svg"
            minHeight="78svh"
            headingSize="2.35rem"
          />
          <MobileStory />
          <MobileValues />
          <MobileStatsBand items={stats} accent="bronze-dark" />
          <MobileQuote />
          <MobileCtaSection
            eyebrow="Work with us"
            lines={["พร้อมเริ่มโปรเจกต์", "ไปกับเราแล้วหรือยัง"]}
            primary={{ label: "Contact us", href: "/contact" }}
            secondary={{ label: "ดูวัสดุทั้งหมด", href: "/products" }}
            tone="cream"
            shapes
          />
          <MobileFooter />
          <MobileCtaBar
            eyebrow="Start a project"
            text="ขอตัวอย่างวัสดุและใบเสนอราคา"
            label="Contact"
            href="/contact"
          />
        </MobileShell>
      </div>
    </>
  );
}
