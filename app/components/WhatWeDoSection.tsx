// src/components/WhatWeDoSection.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";

// --- 1. DATA: Customized for BudgetWeb ---
const SERVICES_DATA = [
  {
    id: 0,
    column: "left",
    title: "The Productive Route: Launch in Days.",
    title2: "Speed & Efficiency",
    hoverTitle: "We skip the fluff. Using our optimized AI stack, we build robust, professional websites in record time. Perfect for businesses that need to get online and start selling immediately.",
    image: "/project-image-2.avif", // Using your local image
    text_color: "#ffffff",
    bg_class: "bg-zinc-900", // Dark card
  },
  {
    id: 1,
    column: "middle",
    title: "AI-Powered Automation",
    title2: "Work Smarter",
    hoverTitle: "We don't just build pages; we build systems. Chatbots, booking automations, and smart analytics integrated directly into your site.",
    image: "/project-image-3.avif", // Using your local image
    text_color: "#ffffff",
    bg_class: "bg-zinc-800",
  },
  {
    id: 2,
    column: "middle",
    title: "Transparent Pricing",
    title2: "No Hidden Fees",
    hoverTitle: "We believe in budget clarity. What we quote is what you pay. No surprise maintenance fees, no hourly rate shocks.",
    image: "/project-image-1.avif", // Using your local image
    text_color: "#000000",
    bg_class: "bg-white", // White card for contrast
  },
  {
    id: 3,
    column: "middle",
    title: "Human Support",
    title2: "We Are Real People",
    hoverTitle: "AI builds the code, but we build the relationship. You get a dedicated team of student developers who care about your success.",
    // No image for this one, just a cool gradient or solid color
    gradient: true, 
    text_color: "#ffffff",
    bg_class: "bg-zinc-900",
  },
  {
    id: 4,
    column: "right",
    title: "The Creative Route: Storytelling.",
    title2: "Bespoke Design",
    hoverTitle: "For brands that need to stand out. We dive deep into your story to craft a unique, emotion-driven digital experience that captivates your audience.",
    image: "/images/showcase-2.jpg", // Using your local image
    text_color: "#000000",
    bg_class: "bg-primary", // Your Lime Green brand color!
  },
];

// --- 2. SUB-COMPONENT: INDIVIDUAL CARD ---
const BentoCard = ({ data, isActive, onHover, className = "" }: any) => {
  return (
    <motion.div
      layout
      onMouseEnter={() => onHover(data.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative overflow-hidden rounded-3xl cursor-pointer group ${className} ${data.bg_class}`}
      // Animation logic: Active card grows, others shrink slightly
      animate={{ flex: isActive ? 3 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60"
          />
        )}
        {/* Gradient Overlay for text readability */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
            data.bg_class === 'bg-primary' || data.bg_class === 'bg-white' 
            ? 'bg-white/10' // Lighter overlay for light cards
            : 'bg-black/40' // Darker overlay for dark cards
        }`} />
      </div>

      {/* --- Content Overlay --- */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        
        {/* Decorative Icon/Arrow */}
        <div className="flex justify-end w-full">
            <div className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                 data.text_color === "#ffffff" ? "bg-white/20 text-white" : "bg-black/10 text-black"
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 mt-auto">
          <motion.div layout="position" className="flex flex-col justify-end">
            {/* Title */}
            <motion.h3
              layout="position"
              className="text-4xl font-semibold md:text-4xl font-sans leading-tight"
              style={{ color: data.text_color }}
            >
              {isActive ? data.title2 : data.title}
            </motion.h3>

            {/* Description Reveal */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p 
                    className="pt-4 text-sm md:text-base font-medium leading-relaxed opacity-90"
                    style={{ color: data.text_color }}
                  >
                    {data.hoverTitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. MAIN COMPONENT ---
export default function WhatWeDoSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const colLeft = SERVICES_DATA.find(d => d.column === "left");
  const colRight = SERVICES_DATA.find(d => d.column === "right");
  const colMiddle = SERVICES_DATA.filter(d => d.column === "middle");

  const isMiddleHovered = colMiddle.some(card => card.id === hoveredId);

  return (
    <section className="w-full py-24 sm:py-32 px-4 md:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl text-black mx-auto w-full mb-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          More than just <br/> a web agency.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl">
          We combine the speed of AI with the creativity of human design to give you the best of both worlds.
        </p>
      </div>

      {/* --- THE BENTO GRID --- */}
      <div className="max-w-7xl mx-auto">
        <LayoutGroup>
            <motion.div 
            className="w-full h-auto lg:h-[700px] flex flex-col lg:flex-row gap-4"
            layout
            >
            
            {/* COLUMN 1: LEFT (Productive) */}
            <BentoCard 
                data={colLeft} 
                isActive={hoveredId === colLeft?.id} 
                onHover={setHoveredId}
                className="w-full lg:h-full min-h-[350px]"
            />

            {/* COLUMN 2: MIDDLE (Details) */}
            <motion.div 
                className="flex flex-col gap-4 w-full lg:h-full min-h-[700px] lg:min-h-auto"
                animate={{ flex: isMiddleHovered ? 2 : 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                layout
            >
                {colMiddle.map((card) => (
                <BentoCard
                    key={card.id}
                    data={card}
                    isActive={hoveredId === card.id}
                    onHover={setHoveredId}
                    className="w-full min-h-[200px]"
                />
                ))}
            </motion.div>

            {/* COLUMN 3: RIGHT (Creative) */}
            <BentoCard 
                data={colRight} 
                isActive={hoveredId === colRight?.id} 
                onHover={setHoveredId}
                className="w-full lg:h-full min-h-[350px]"
            />

            </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}