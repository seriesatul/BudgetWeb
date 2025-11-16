// src/components/ManifestoSection.tsx - THE RESPONSIVE VERSION

"use client"; 

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Scribble from './Scribble';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ManifestoSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // This GSAP animation is already responsive. No changes needed here.
    gsap.from(".manifesto-line", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    // section: Adjusted vertical padding for responsiveness.
    <section ref={container} className="relative w-full py-20 sm:py-24 lg:py-32 px-6 sm:px-16 overflow-hidden">
      
      <div className="max-w-4xl flex flex-col justify-center items-center mx-auto text-center">
        
        {/*
          MAIN CONTAINER FOR TEXT:
          - We apply the responsive font size here to affect all children.
          - Mobile (default): text-5xl
          - Small screens (sm): text-6xl
          - Medium screens (md): text-7xl
          - Large screens (lg): text-8xl
        */}
        <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
          
          {/*
            Each line now inherits the responsive font size from the parent.
            We remove the hardcoded `text-9xl`.
            We use `text-foreground` for theme consistency.
          */}
          <div className="manifesto-line text-black">
            Born from a simple idea,
          </div>
          <div className="manifesto-line text-black">
            We build digital tools that solve real
          </div>
          <div className="manifesto-line text-black">
            {/*
              Span: On mobile, doodles are hidden for clarity.
              The span is `inline-block` on mobile, `flex` on desktop.
            */}
            <span className="relative inline-block md:flex items-center justify-center gap-4 text-blue-600">
               problems,
              <div className="hidden md:block"><Scribble/></div>
               <Image
                src="/doodle-1.gif"
                alt="Doodle of a house"
                width={100}
                height={100}
                className="hidden md:inline-block w-20 h-20 lg:w-24 lg:h-24 opacity-100 rounded"
                />
            
            </span>
          </div>
          <div className="manifesto-line text-black">
            fit your budget, and make
          </div>
          <div className="manifesto-line text-black">
            you say,{' '}
            <span className="relative inline-block md:flex items-center justify-center gap-2 text-blue-600">
              'WOW.' 
            <Image
            src="/doodle-2.gif"
            alt="Doodle of a heart"
            width={80}
            height={80}
            // Image: Also hidden on mobile, shown on desktop with responsive sizing.
            className="hidden md:inline-block w-16 h-16 lg:w-20 lg:h-20"
      />
              <div className="hidden md:block"><Scribble /></div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;