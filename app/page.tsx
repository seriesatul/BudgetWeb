// src/app/page.tsx - THE RESPONSIVE ROOT LAYOUT

import FinalCTASection from "./components/FinalCTASection";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import Marquee from "./components/Marquee";
import PhilosophySection from "./components/PhilosophySection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    // 1. min-h-screen: Ensures footer stays at bottom on short pages
    // 2. w-full: Ensures the main container takes full width
    // 3. overflow-x-hidden: CRITICAL. Prevents horizontal scrolling on mobile due to animations.
    <main className="bg-zinc-50 min-h-screen w-full overflow-x-hidden">
      
      {/* 
        Hero Wrapper:
        - w-full: Ensures the hero can stretch
        - flex-col items-center: Centers the hero content
      */}
      <div className="relative w-full flex flex-col items-center">
        <HeroSection/>
      </div>

      {/* Full-bleed sections (No wrapper needed) */}
      <Marquee/>

      {/* 
        Manifesto Wrapper:
        - overflow-hidden: Extra safety for the doodles in the manifesto
      */}
      <div className="relative w-full flex flex-col items-center overflow-hidden">
        <ManifestoSection/>
      </div>
      
      {/* Portfolio is full-bleed */}
      <PortfolioSection/>

      {/* 
        Philosophy & Testimonials Wrapper:
        - Grouped together as they share similar centering needs
      */}
      <div className="relative w-full flex flex-col items-center overflow-hidden">
        <PhilosophySection />
        <TestimonialsSection />
      </div>

      {/* Final CTA is full-bleed */}
      <FinalCTASection />
    </main>
  );
}