import React from "react";
import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full py-12 sm:py-16 lg:py-3 relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-white/60 text-base sm:text-lg font-medium font-inter">
          &copy; 2025 Charan Sanjeev Tadimalla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
