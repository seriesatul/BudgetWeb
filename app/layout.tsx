// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import Inter
import './globals.css';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] }); // Initialize Inter

export const metadata: Metadata = {
  title: 'BudgetWeb',
  description: 'Your Website, Your Way.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}