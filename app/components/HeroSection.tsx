// src/components/HeroSection.tsx - THE FINAL ANIMATED VERSION

"use client"; // REQUIRED for animations and event listeners in Next.js App Router

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
  // Create a ref for the main container to scope our GSAP selectors
  const container = useRef<HTMLElement>(null);

  // useGSAP is the official hook for using GSAP in React.
  // It automatically handles cleanup.
  useGSAP(() => {
    // --- 1. CHOREOGRAPHED LOAD-IN ANIMATION ---
    // Create a GSAP timeline for a sequence of animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate the title, tagline, and images in a sequence
    tl.from(".hero-title", { y: 100, opacity: 0, duration: 1 })
      .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5") // Overlap with previous animation
      .from(".hero-image", { 
        scale: 0.8, 
        opacity: 0, 
        stagger: 0.2, // Animate each image with a 0.2s delay for a cool effect
        duration: 1 
      }, "-=0.8"); // Overlap heavily

    // --- 2. MOUSE-DRIVEN PARALLAX EFFECT ---
    const parallax = (e: MouseEvent) => {
      // Calculate mouse position from -0.5 (left/top) to +0.5 (right/bottom)
      const xPercent = e.clientX / window.innerWidth - 0.5;
      const yPercent = e.clientY / window.innerHeight - 0.5;

      // Animate all elements with the "hero-image" class
      gsap.to(".hero-image", {
        // Move images based on mouse position. Multiply for intensity.
        x: xPercent * 50,
        y: yPercent * 50,
        // Add a slight rotation for more dynamism
        rotation: xPercent * 4,
        // Stagger the effect slightly for a 3D feel. Negative stagger is cool.
        stagger: -0.1,
        ease: 'power1.out',
        duration: 1, // Makes the movement smooth
      });
    };

    // Add the event listener to the main container
    const currentContainer = container.current;
    currentContainer?.addEventListener('mousemove', parallax);

    // IMPORTANT: Cleanup function to remove the event listener when the component unmounts
    return () => {
      currentContainer?.removeEventListener('mousemove', parallax);
    };

  }, { scope: container }); // We scope the GSAP selectors to our container for performance and safety

  return (
    // Add the ref to the main section element
    <section ref={container} className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-16 pt-24">
      
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-between w-full max-w-7xl">

        {/* ====== LEFT COLUMN: TEXT CONTENT ====== */}
        <div className="relative z-10 w-full md:w-1/2">
          {/* Add the "hero-title" class for GSAP to target */}
          <h1 className="hero-title text-7xl sm:text-9xl lg:text-[10rem] font-extrabold text-black leading-none tracking-tighter">
            Budget
            <span className="text-primary">—</span>
            Web
          </h1>
          {/* Add the "hero-tagline" class for GSAP to target */}
          <div className="hero-tagline mt-12">
            <p className="max-w-[250px] text-sm font-semibold uppercase">
              We build websites that work for your budget, not just your brand.
            </p>
          </div>
        </div>

        {/* ====== RIGHT COLUMN: IMAGE COLLAGE ====== */}
        <div className="relative -top-40 w-full md:w-1/2 h-[500px] mt-16 md:mt-0">
          
          {/* Add the "hero-image" class to each image for GSAP to target */}
          <Image
            src="/project-image-1.avif"
            alt="A piggy bank surrounded by coins, representing budget"
            width={500}
            height={600}
            className="absolute object-cover top-0 h-100 right-0 w-3/5 transform rotate-12 z-10"
          />
          <Image
            src="/project-image-2.avif"
            alt="A laptop on a wooden desk showing a design website"
            width={400}
            height={600}
            className="absolute object-cover h-100 -bottom-50 right-1/4 w-3/5 transform -rotate-6 z-20"
          />
          <Image
            src="/project-image-3.avif"
            alt="A stack of money representing savings"
            width={300}
            height={600}
            className="absolute h-100 object-cover -bottom-100 -left-1/4 w-3/5 transform rotate-6 z-5"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;