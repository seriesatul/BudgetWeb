// tailwind.config.ts - CORRECT CODE

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
        'background': '#F3F3F3', // Light grey background
        'foreground': '#111111', // Black for text
        'primary': '#D4FF00',    // The vibrant lime green accent
        'primary-dark': '#B8E000',// A darker green for hover states
      },
    },
  },
  plugins: [],
};
export default config;