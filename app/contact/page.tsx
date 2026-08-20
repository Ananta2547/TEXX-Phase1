import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Heading from "@/components/contact/Heading";
import FormSection from "@/components/contact/FormSection";

import MobileShell from "@/components/mobile/MobileShell";
import MobileNav from "@/components/mobile/MobileNav";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileHeading from "@/components/contact/mobile/MobileHeading";
import MobileFormSection from "@/components/contact/mobile/MobileFormSection";

export const metadata: Metadata = {
  title: "Contact — TEXX",
  description:
    "บอกเราเกี่ยวกับโปรเจกต์ของคุณ ทีมงานจะติดต่อกลับพร้อมคำแนะนำวัสดุ ตัวอย่าง และใบเสนอราคาภายใน 2 วันทำการ",
};

// Two 1:1 ports of the same page — one per Design Composer source file
// (TEXX Contact.dc.html and TEXX Contact Mobile.dc.html). The breakpoint in
// globals.css shows exactly one; see .texx-viewport-* there.
export default function ContactPage() {
  return (
    <>
      <div className="texx-viewport-desktop">
        <MotionRoot>
          <Nav />
          <Heading />
          <FormSection />
          <Footer />
        </MotionRoot>
      </div>

      <div className="texx-viewport-mobile">
        <MobileShell>
          <MobileNav active="Contact" />
          <MobileHeading />
          <MobileFormSection />
          <MobileFooter />
        </MobileShell>
      </div>
    </>
  );
}
