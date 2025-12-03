// src/components/ManifestoSection.tsx

"use client"; 

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// --- HELPER COMPONENT: Splitting text into words for animation ---
const SplitText = ({ children, className = "" }: { children: string, className?: string }) => {
  // Split string by spaces, map to spans. 
  // We add 'inline-block' so transforms (x/y/rotate) work on spans.
  // We add 'mr-[0.25em]' to preserve spacing between words.
  return (
    <>
      {children.split(" ").map((word, i) => (
        <span key={i} className={`manifesto-word inline-block mr-[0.25em] will-change-transform ${className}`}>
          {word}
        </span>
      ))}
    </>
  );
};

const ManifestoSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Select all elements (words + images) that act as "words"
    const words = gsap.utils.toArray<HTMLElement>('.manifesto-word');

    // 2. Create the Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",    // Start when section hits top 80% of viewport
        end: "bottom 40%",
        scrub: 1,            // Smooth scrubbing linked to scroll speed
      }
    });

    // 3. The "Materialize from Chaos" Animation
    tl.fromTo(words, 
      {
        // --- THE CHAOS STATE (START) ---
        opacity: 0,
        scale: 0.5,
        stagger:0.5,          // Start small
        filter: "blur(15px)", // Heavy blur for "materializing" feel
        y: () => Math.random() * 100 - 50, // Random vertical scatter
        x: () => Math.random() * 100 - 50, // Random horizontal scatter
        rotation: () => Math.random() * 30 - 15, // Random tilt
      },
      {
        // --- THE ORDER STATE (END) ---
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.05, // Tight stagger for a ripple effect word-by-word
        ease: "power2.out",
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full py-20 sm:py-24 lg:py-32 px-6 sm:px-16 overflow-hidden">
      
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto text-center">
        
        <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight">
          
          {/* LINE 1 */}
          <div className="py-2 text-black">
            <SplitText>Born from a simple idea,</SplitText>
          </div>
          
          {/* LINE 2 */}
          <div className="py-2 text-black">
            <SplitText>We build digital tools that</SplitText>
          </div>

          {/* LINE 3 */}
          <div className="py-2 text-black">
            <span className="relative inline-block md:flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
               {/* "solve real" */}
               <SplitText>solve real</SplitText>
               
               {/* "problems," + Doodles */}
               <div className="flex items-center gap-4">
                 <SplitText className="text-blue-600">problems,</SplitText>
                 
                 {/* Treat doodles as words (add 'manifesto-word' class) so they animate with the text */}
                 <div className="manifesto-word hidden md:block relative w-20 h-20 lg:w-24 lg:h-24">
                    
                 </div>
                 
                 <Image
                  src="/doodle-1.gif"
                  alt="Doodle of a house"
                  width={100}
                  height={100}
                  className="manifesto-word hidden md:inline-block w-20 h-20 lg:w-24 lg:h-24 opacity-100 rounded"
                  />
               </div>
            </span>
          </div>

          {/* LINE 4 */}
          <div className="py-2 text-black">
             <SplitText>fit your budget, and make</SplitText>
          </div>

          {/* LINE 5 */}
          <div className="py-2 text-black">
            <span className="relative inline-block md:flex flex-wrap items-center justify-center gap-2">
              <SplitText>you say,</SplitText>
              
              <div className="flex items-center gap-2">
                <span className="manifesto-word text-blue-600 inline-block mr-2">'WOW.'</span>
                
                <Image
                  src="/doodle-2.gif"
                  alt="Doodle of a heart"
                  width={80}
                  height={80}
                  className="manifesto-word hidden md:inline-block w-16 h-16 lg:w-20 lg:h-20"
                />
                
              
              </div>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;