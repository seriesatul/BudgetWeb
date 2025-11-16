// src/app/page.tsx - THE CORRECTED FULL-BLEED STRUCTURE

import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import Marquee from "./components/Marquee";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      {/* 
        This wrapper is ONLY for centered content.
        Notice that PortfolioSection is NOT inside it.
      */}
      <div className="relative flex flex-col items-center">
        <HeroSection/>
      </div>

      {/* Full-bleed sections are placed directly inside <main> */}
      <Marquee/>

      <div className="relative flex flex-col items-center overflow-hidden">
        <ManifestoSection/>
      </div>
      
      {/* PortfolioSection is now a top-level, full-bleed component */}
      <PortfolioSection/>

      {/* Any future centered sections would go inside another wrapper */}
      {/* <div className="relative flex flex-col items-center overflow-hidden">
        <TestimonialsSection />
      </div> */}
    </main>
  );
}