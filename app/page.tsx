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

import MobileMotion from "@/components/home/mobile/MobileMotion";
import MobileNav from "@/components/mobile/MobileNav";
import MobileHero from "@/components/home/mobile/MobileHero";
import MobileMarquee from "@/components/home/mobile/MobileMarquee";
import MobileAbout from "@/components/home/mobile/MobileAbout";
import MobileCollections from "@/components/home/mobile/MobileCollections";
import MobileStatsBand from "@/components/mobile/MobileStatsBand";
import { stats } from "@/lib/home-content";
import MobileWork from "@/components/home/mobile/MobileWork";
import MobileContact from "@/components/home/mobile/MobileContact";
import MobileFooter from "@/components/mobile/MobileFooter";

// Two 1:1 ports of the same page — one per Design Composer source file
// (TEXX Home.dc.html and TEXX Home Mobile.dc.html). The breakpoint in
// globals.css shows exactly one; see .texx-viewport-* there.
export default function HomePage() {
  return (
    <>
      <div className="texx-viewport-desktop">
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
      </div>

      <div className="texx-viewport-mobile">
        <MobileMotion>
          <MobileNav />
          <MobileHero />
          <MobileMarquee />
          <MobileAbout />
          <MobileCollections />
          <MobileStatsBand items={stats} />
          <MobileWork />
          <MobileContact />
          <MobileFooter />
        </MobileMotion>
      </div>
    </>
  );
}
