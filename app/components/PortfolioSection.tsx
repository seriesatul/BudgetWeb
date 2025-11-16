// src/components/PortfolioSection.tsx - THE FULL-WIDTH CINEMATIC VERSION

"use client";

import React, { useState } from 'react';
import { projectsData } from '../data/project';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

type FilterType = 'All' | 'Productive' | 'Creative';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    // --- CHANGE #1: THE SECTION IS NOW DARK AND HAS MORE PADDING ---
    // We remove px-* (horizontal padding) so the grid can bleed to the edges.
    <section className="py-24 sm:py-32 text-background">
      
      {/* --- CHANGE #2: A NEW CONTAINER FOR THE CENTERED HEADER --- */}
      {/* This div keeps the title and filters neatly centered and readable. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-5xl md:text-9xl font-bold mb-4">From Idea to Impact.</h2>
        <p className="text-base md:text-2xl text-background/70 font-medium mb-12">Here's a glimpse of what we can build together.</p>

        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {(['All', 'Productive', 'Creative'] as FilterType[]).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              // --- CHANGE #3: UPDATED BUTTON STYLES FOR DARK BACKGROUND ---
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeFilter === filter
                  ? 'bg-primary border-primary text-foreground'
                  // Inactive buttons are now lighter for better contrast on the dark background
                  : 'bg-transparent border-background/30 text-background/80 hover:bg-background/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 
        --- CHANGE #4: THE GRID IS NOW OUTSIDE THE MAX-WIDTH CONTAINER ---
        This allows it to span the full width of the screen.
        We add px-4 sm:px-8 here to give it a little breathing room on the edges.
      */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8"
      >
        <AnimatePresence>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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