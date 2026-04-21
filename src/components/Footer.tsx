"use client";
import React, { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black/10 py-20 border-t border-navy/5 flex flex-col justify-center min-h-55">
      <div className="container">

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 ">
          <div className="max-w-xs">
            <a href="#home" className="font-display font-bold text-3xl text-navy block mb-6">
              Charan
            </a>
            <p className="font-inter text-muted text-sm leading-relaxed">
              Architecting ecosystems where innovation lives. Available for global speaking and consultancy on startup infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-6">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Navigation</span>
              <div className="flex flex-col gap-4">
                {["Home", "About", "Ventures", "Connect"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-navy font-medium font-inter text-sm hover:text-royal transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Connect</span>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com" target="_blank" className="text-navy font-medium font-inter text-sm hover:text-royal transition-colors">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" className="text-navy font-medium font-inter text-sm hover:text-royal transition-colors">Instagram</a>
                <a href="https://twitter.com" target="_blank" className="text-navy font-medium font-inter text-sm hover:text-royal transition-colors">X / Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-navy/5 gap-8">
          <p className="font-inter text-[10px] uppercase font-bold tracking-widest text-muted">
            © {new Date().getFullYear()} Charan Sanjeev Tadimalla. World Class Excellence.
          </p>
        </div>

      </div>
    </footer>
  );
};
