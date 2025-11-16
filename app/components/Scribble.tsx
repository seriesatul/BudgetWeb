// src/components/Scribble.tsx
import React from 'react';

const Scribble = () => {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-auto text-blue-600 pointer-events-none"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 C20,0 40,20 60,10 C80,0 100,20 120,10 C140,0 160,20 180,10 C200,0 200,10 200,10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default Scribble;