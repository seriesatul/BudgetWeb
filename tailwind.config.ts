// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F3F3F3', 
        'foreground': '#111111', 
        'primary': '#D4FF00',    
        'primary-dark': '#B8E000',
      },
      // --- ADD THIS SECTION ---
      fontFamily: {
        // This sets Inter as the default 'font-sans'
        sans: ['var(--font-inter)', 'sans-serif'], 
        // This creates a new utility 'font-display' using Space Grotesk
        display: ['var(--font-space)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;