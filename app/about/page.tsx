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

export const metadata: Metadata = {
  title: "About — TEXX",
  description:
    "TEXX คือผู้คัดสรรและจัดหาวัสดุพรีเมียมสำหรับงานสถาปัตยกรรมและตกแต่งภายใน ด้วยมาตรฐานเดียวจากทั่วโลก",
};

export default function AboutPage() {
  return (
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
  );
}
