// src/components/PortfolioSection.tsx

"use client";

import React, { useState, useRef } from 'react';
import { projectsData } from '../data/project';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FilterType = 'All' | 'Productive' | 'Creative';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const containerRef = useRef<HTMLElement>(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // --- GSAP ANIMATION LOGIC ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Animation starts when top of section hits 75% of viewport height
        end: "bottom center",
        toggleActions: "play none none reverse", // Reverses when scrolling back up
      }
    });

    // 1. Title Reveal (Skew Up effect)
    tl.from(".portfolio-title", {
      y: 120,          // Start from below
      skewY: 7,        // Skew for momentum feel
      opacity: 0,      // Fade in
      duration: 1.2,
      ease: "power4.out",
    })
    // 2. Subtitle Reveal (Simple fade up)
    .from(".portfolio-subtitle", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1") // Overlap by 1 second
    // 3. Filter Buttons (Staggered Pop)
    .from(".filter-btn", {
      y: 20,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.05, // 50ms delay between each button
      ease: "back.out(1.7)" // Bouncy effect
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 sm:py-32 text-background">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Title Wrapper with Overflow Hidden for the "Rise" effect */}
        <div className="overflow-hidden mb-4">
          <h2 className="portfolio-title text-5xl md:text-9xl font-bold block origin-bottom-left">
            From Idea to Impact.
          </h2>
        </div>

        <div className="overflow-hidden mb-12">
          <p className="portfolio-subtitle text-base md:text-2xl text-background/70 font-medium">
            Here's a glimpse of what we can build together.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {(['All', 'Productive', 'Creative'] as FilterType[]).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn px-6 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeFilter === filter
                  ? 'bg-primary border-primary text-foreground'
                  : 'bg-transparent border-background/30 text-background/80 hover:bg-background/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 
        Project Grid
        We keep Framer Motion here because it handles layout re-ordering (filtering) 
        much better than GSAP for this specific use case.
      */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={
                `aspect-[4/3] ` + 
                (index === 0 || index % 3 === 0
                ? 'md:col-span-2 md:aspect-video' 
                : 'md:col-span-1 md:aspect-square')
              }
              layout="position"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} isFullWidth={index === 0 || index % 3 === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;