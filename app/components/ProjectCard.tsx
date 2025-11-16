// src/components/ProjectCard.tsx - THE DESKTOP-FIXED VERSION

"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../data/project';

type ProjectCardProps = {
  project: Project;
  isFullWidth: boolean; // Accept the new prop
};

const ProjectCard = ({ project, isFullWidth }: ProjectCardProps) => {
  const container = useRef<HTMLAnchorElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <Link href={`/portfolio/${project.slug}`} ref={container} className="block w-full h-full rounded-2xl md:rounded-3xl overflow-hidden group relative">
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 transition-duration-300"></div>
      </motion.div>

      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        {/* Top Section: Tags */}
        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="border-2 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 
          Bottom Section:
          - Now uses the `isFullWidth` prop to conditionally change layout on desktop.
        */}
        <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-2'>
          <h3
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            {project.title}
          </h3>

          {/* 
            Description: 
            - Conditionally rendered. On desktop, it ONLY shows if the card is full-width.
          */}
          {isFullWidth && (
            <p className='hidden md:block font-bold text-md text-white/80 drop-shadow-lg max-w-[250px] text-left md:text-right'>
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;