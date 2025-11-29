// src/components/TestimonialsSection.tsx - Dark Themed with Logos

"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo: string; // Company logo text or emoji
  accentColor: string; // Neon accent color
  bgColor: string; // Dark background color
}

interface TestimonialCardProps extends Testimonial {
  className?: string;
  style?: React.CSSProperties; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  company, 
  logo,
  accentColor,
  bgColor,
  className = '',
  style 
}) => (
  <div 
    className={`shrink-0 w-[280px] sm:w-[120px] md:w-[180px] lg:w-[350px] p-8 sm:p-10 flex flex-col items-center justify-between gap-4 shadow-2xl transition-all duration-300 ${className}`}
    style={{ 
      backgroundColor: bgColor, 
      ...style 
    }}
  >
    

    {/* Quote */}
    <div className="flex-1 flex items-center">
      <p className="text-5xl text-center text-white mt-2 capitalize font-extrabold tracking-tighter">{company}</p>
    </div>

    <div className="mb-6">
      <div 
        className="text-6xl sm:text-7xl font-black hover:scale-120 transition-all leading-none"
        style={{ color: accentColor }}
      >
        {logo}
      </div>
    </div>

    {/* Author info at bottom */}
    <div className="mt-6 pt-6">
       <p className="text-center sm:text-sm md:text-md font-bold text-white leading-relaxed">
        {quote}
      </p>
      <p className="font-bold text-center text-white text-sm sm:text-sm mb-1">-{name}</p>
     
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "Websites that hit different. Emotional, interactive, unforgettable.",
      name: "Rohan Sharma",
      role: "Creative Director",
      company: "PixelBridge Studios",
      logo: "⚡",
      accentColor: "#D4FF00",
      bgColor: "#0A0A0A"
    },
    {
      quote: "Branding with attitude. From positioning to full-scale branding—we build brands that last.",
      name: "Priya Menon",
      role: "Brand Strategist",
      company: "Aurora Learning Hub",
      logo: "🌀",
      accentColor: "#00F0FF",
      bgColor: "#0D1B2A"
    },
    {
      quote: "Creative strategy. Naming, concepts, storytelling—we dig deep, break the mold.",
      name: "Anjali Gupta",
      role: "Marketing Head",
      company: "Northwind Analytics",
      logo: "◐",
      accentColor: "#FF006E",
      bgColor: "#1A1A2E"
    },
    {
      quote: "Design systems that scale. Clean, consistent, conversion-focused UI that works.",
      name: "Vikram Singh",
      role: "Product Designer",
      company: "MacroStack Tech",
      logo: "∞",
      accentColor: "#D4FF00",
      bgColor: "#16213E"
    },
    {
      quote: "Bold ideas, bolder execution. They challenged everything we thought we knew.",
      name: "Aarav Verma",
      role: "Founder",
      company: "BrightLeaf Media",
      logo: "★",
      accentColor: "#FFB800",
      bgColor: "#000000"
    },
    {
      quote: "Strategic thinking meets stunning design. Our brand finally reflects our ambition.",
      name: "Kritika Nair",
      role: "CEO",
      company: "Horizon Legal",
      logo: "◈",
      accentColor: "#00FFB3",
      bgColor: "#0F0F1E"
    },
    {
      quote: "Fast, focused, flawless. Every sprint delivered exactly what we needed.",
      name: "Siddharth Jain",
      role: "Tech Lead",
      company: "ClimbUp Fitness",
      logo: "↗",
      accentColor: "#FF5D00",
      bgColor: "#1C1C1C"
    },
    {
      quote: "From dated to daring. Our site now screams confidence and creativity.",
      name: "Mahima Rao",
      role: "Marketing Director",
      company: "EverGreen Organics",
      logo: "◯",
      accentColor: "#7FFF00",
      bgColor: "#0A2F35"
    },
    {
      quote: "Performance meets aesthetics. Lightning-fast pages that look absolutely stunning.",
      name: "Rahul Khanna",
      role: "CTO",
      company: "NovaEdge SaaS",
      logo: "◢",
      accentColor: "#FF1744",
      bgColor: "#151515"
    },
    {
      quote: "Visual storytelling that converts. Our funnel metrics jumped 40% overnight.",
      name: "Sneha Kulkarni",
      role: "Growth Lead",
      company: "StorySpark Studio",
      logo: "◐",
      accentColor: "#00E5FF",
      bgColor: "#1B263B"
    }
  ];

  // Y-offset pattern for staggered effect
  const getUniqueYOffset = (index: number) => {
    const pattern = [0, 140, -100, 80, -60, 120, -40, 100, -80, 60]; 
    return pattern[index % pattern.length];
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!rowRef.current || !sectionRef.current) return;
      
      const totalWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(rowRef.current, {
        x: () => -(totalWidth - viewportWidth) * 0.5, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2, 
          invalidateOnRefresh: true,
        }
      });
    });
    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 text-black leading-tight">
          Don't just take our word for it.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto">
          See what our clients have to say about their experience.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        <div 
          ref={rowRef}
          className="flex gap-5 sm:gap-6 md:gap-7 lg:gap-8 px-4 sm:px-6 md:px-8 w-max"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
            const yOffset = getUniqueYOffset(index);
            
            return (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                style={{ transform: `translateY(${yOffset}px)` }}
              />
            );
          })}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;