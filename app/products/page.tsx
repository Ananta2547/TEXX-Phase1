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

export const metadata: Metadata = {
  title: "Products — TEXX",
  description:
    "สี่ตระกูลวัสดุที่คัดสรรมาเพื่องานระดับพรีเมียม — หิน พื้นผิววิศวกรรม โลหะ และไม้",
};

export default function ProductsPage() {
  return (
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
  );
}
