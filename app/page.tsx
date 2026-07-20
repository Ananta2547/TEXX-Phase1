import MotionRoot from "@/components/home/MotionRoot";
import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import Collections from "@/components/home/Collections";
import Stats from "@/components/home/Stats";
import Work from "@/components/home/Work";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <MotionRoot>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Collections />
      <Stats />
      <Work />
      <Contact />
      <Footer />
    </MotionRoot>
  );
}
