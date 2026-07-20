import type { Metadata } from "next";
import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Heading from "@/components/contact/Heading";
import FormSection from "@/components/contact/FormSection";

export const metadata: Metadata = {
  title: "Contact — TEXX",
  description:
    "บอกเราเกี่ยวกับโปรเจกต์ของคุณ ทีมงานจะติดต่อกลับพร้อมคำแนะนำวัสดุ ตัวอย่าง และใบเสนอราคาภายใน 2 วันทำการ",
};

export default function ContactPage() {
  return (
    <MotionRoot>
      <Nav />
      <Heading />
      <FormSection />
      <Footer />
    </MotionRoot>
  );
}
