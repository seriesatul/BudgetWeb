// src/data/projects.ts

// Define the type for a single project for TypeScript
export type Project = {
  slug: string;
  title: string;
  category: 'Productive' | 'Creative';
  image: string;
  description: string;
  tags: string[];
};

// Create an array of our mock projects
export const projectsData: Project[] = [
  {
    slug: 'quick-plumb-services',
    title: 'Quick Plumb',
    category: 'Productive',
    image: '/images/showcase-1.jpg', // Make sure you have these images in /public/images
    description: 'A blazing-fast, professional website for a local plumbing service, launched in 5 days.',
    tags: ['web', 'service', 'local']
  },
  {
    slug: 'rustic-artisan-bakery',
    title: 'The Rustic Bakery',
    category: 'Creative',
    image: '/images/showcase-2.jpg',
    description: 'A bespoke, story-driven website for an artisan bakery that captures its unique charm.',
    tags: ['web', 'service', 'local'],
  },
  {
    slug: 'momentum-fitness-app',
    title: 'Momentum Fitness',
    category: 'Creative',
    image: '/images/showcase-3.jpg',
    description: 'An interactive web app for a personal coach to manage client bookings and progress.',
    tags: ['web', 'service', 'local']
  },
  {
    slug: 'express-eats-cafe',
    title: 'Express Eats',
    category: 'Productive',
    image: '/images/showcase-4.jpg',
    description: 'A clean, modern, and efficient website for a local cafe with online ordering.',
    tags: ['web', 'service', 'local']
  },
];