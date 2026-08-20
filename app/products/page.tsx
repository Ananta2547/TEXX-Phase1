import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Hero from "@/components/products/Hero";
import MaterialCarousel from "@/components/products/MaterialCarousel";
import Sourcing from "@/components/products/Sourcing";
import Finishing from "@/components/products/Finishing";
import Services from "@/components/products/Services";
import CTA from "@/components/products/CTA";

import MobileShell from "@/components/mobile/MobileShell";
import MobileNav from "@/components/mobile/MobileNav";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobilePageHero from "@/components/mobile/MobilePageHero";
import MobileCtaSection from "@/components/mobile/MobileCtaSection";
import MobileCtaBar from "@/components/mobile/MobileCtaBar";
import MobileFamilies from "@/components/products/mobile/MobileFamilies";
import MobileMediaBlock from "@/components/products/mobile/MobileMediaBlock";
import MobileServices from "@/components/products/mobile/MobileServices";

export const metadata: Metadata = {
  title: "Products — TEXX",
  description:
    "สี่ตระกูลวัสดุที่คัดสรรมาเพื่องานระดับพรีเมียม — หิน พื้นผิววิศวกรรม โลหะ และไม้",
};

// Two 1:1 ports of the same page — one per Design Composer source file
// (TEXX Products.dc.html and TEXX Products Mobile.dc.html). The breakpoint in
// globals.css shows exactly one; see .texx-viewport-* there.
export default function ProductsPage() {
  return (
    <>
      <div className="texx-viewport-desktop">
        <MotionRoot>
          <Nav />
          <Hero />
          <MaterialCarousel />
          <Sourcing />
          <Finishing />
          <Services />
          <CTA />
          <Footer />
        </MotionRoot>
      </div>

      <div className="texx-viewport-mobile">
        <MobileShell>
          <MobileNav active="Products" />
          <MobilePageHero
            eyebrow="Products"
            lines={["Signature", "materials."]}
            lede="สี่ตระกูลวัสดุที่คัดสรรมาเพื่องานระดับพรีเมียม — หิน พื้นผิววิศวกรรม โลหะ และไม้"
            image="/assets/marble.svg"
            minHeight="74svh"
          />
          <MobileFamilies />
          <MobileMediaBlock
            tone="cream"
            eyebrow="Sourcing"
            lines={["คัดจากต้นทาง", "ตรวจทุกแผ่น"]}
            body="เราเดินทางไปถึงเหมืองและโรงงาน เพื่อคัดเลือกวัสดุด้วยตาตัวเอง ทุกล็อตผ่านการตรวจสอบเฉดสี ลาย และคุณภาพ ก่อนถึงมือคุณ"
            image="/assets/showroom-left.svg"
          />
          <MobileMediaBlock
            tone="olive"
            eyebrow="Finishing"
            lines={["ผิวสัมผัสที่ใช่", "สำหรับทุกพื้นที่"]}
            body="เลือกได้ทั้งผิวขัดเงา ด้าน หรือผิวธรรมชาติ พร้อมคำแนะนำการใช้งานให้เหมาะกับพื้นที่พาณิชย์และที่พักอาศัย"
            image="/assets/showroom-right.svg"
            link={{ label: "ขอตัวอย่างวัสดุ", href: "/contact" }}
          />
          <MobileServices />
          <MobileCtaSection
            eyebrow="Start a project"
            lines={["หาวัสดุที่ใช่", "สำหรับงานของคุณ"]}
            primary={{ label: "Contact us", href: "/contact" }}
            secondary={{ label: "ดูผลงาน", href: "/portfolio" }}
            tone="cream"
          />
          <MobileFooter />
          <MobileCtaBar
            eyebrow="Samples"
            text="ขอตัวอย่างวัสดุจริงถึงออฟฟิศ"
            label="ขอตัวอย่าง"
            href="/contact"
          />
        </MobileShell>
      </div>
    </>
  );
}
