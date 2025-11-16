// src/components/Marquee.tsx

"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Marquee = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Select all the spans with the text
    const elements = gsap.utils.toArray(".marquee-text");
    
    // Create a seamless loop animation
    const loop = gsap.timeline({
      repeat: -1, // Infinite loop
      ease: "none",
    });

    loop.to(elements, {
      xPercent: -100, // Move each element 100% of its width to the left
      duration: 20,    // Adjust duration to change speed
    });

  }, { scope: container });

  const textContent = "PRODUCTIVE — CREATIVE — AI POWERED — BUDGET-FRIENDLY — BOLD — ";

  return (
    <div ref={container} className="w-full py-4 overflow-hidden z-0 text-background">
      <div className="flex whitespace-nowrap">
        {/* We render the text multiple times to ensure it fills the screen and loops smoothly */}
        <span className="marquee-text text-lg font-bold uppercase">{textContent}</span>
        <span className="marquee-text text-lg font-bold uppercase">{textContent}</span>
        <span className="marquee-text text-lg font-bold uppercase">{textContent}</span>
      </div>
    </div>
  );
};

export default Marquee;