"use client";
import React, { JSX } from "react";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-navy/5 py-24 md:py-32 border-t border-navy/5 min-h-[25vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="container flex flex-col items-center justify-between min-h-[15vh] gap-3 md:gap-5">

        {/* Top: Logo - Top-aligned in Auto Layout */}
        <div className="flex justify-center w-full">
          <a href="#home" className="font-display font-black text-2xl md:text-3xl text-navy uppercase tracking-tighter hover:text-royal transition-colors">
            Charan
          </a>
        </div>

        {/* Middle: Navigation - Center-aligned in Auto Layout */}
        <nav className="flex flex-wrap justify-center gap-10 md:gap-14 w-full">
          {["About", "Ventures", "Gallery", "Connect"].map((item) => (
            <a
              key={item}
              href={item === "Connect" ? "#contact" : `#${item.toLowerCase()}`}
              className="font-inter text-sm md:text-3 font-black text-charcoal uppercase tracking-[0.4em] hover:text-royal transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-royal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Bottom: Socials & Copyright - Bottom-aligned in Auto Layout */}
        <div className="flex flex-col items-center gap-12 md:gap-16 w-full">
          <div className="flex gap-8 md:gap-10">
            {[
              { icon: <Facebook size={22} fill="currentColor" />, href: "https://facebook.com/charansanjeev" },
              { icon: <Linkedin size={22} fill="currentColor" />, href: "https://linkedin.com/in/charansanjeev" },
              { icon: <Instagram size={22} />, href: "https://instagram.com/charan_sanjeev" },
              { icon: <Twitter size={22} fill="currentColor" />, href: "https://twitter.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy text-white flex items-center justify-center hover:bg-royal hover:scale-110 transition-all duration-300 shadow-xl shadow-navy/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
