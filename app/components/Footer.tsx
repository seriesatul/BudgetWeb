// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-6 text-center">
      <p className="text-sm text-foreground/60">
        © {new Date().getFullYear()} BudgetWeb. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;