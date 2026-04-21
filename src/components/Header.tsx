"use client";
import React, { JSX, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connect", href: "#contact" },
];

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Standard Sticky Header ────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 w-full ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-navy/[0.05] py-4"
          : "bg-transparent border-b border-transparent py-6 md:py-8"
          }`}
      >
        <div className="container flex items-center justify-between">

          {/* Logo - Always Left */}
          <a href="#home" className="font-display font-bold text-2xl tracking-tighter text-navy shrink-0">
            Charan<span className="text-royal">.</span>
          </a>

          {/* Navigation - Always Right */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-muted hover:text-navy transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Simple Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-10 md:hidden">
          <div className="flex justify-between items-center mb-16">
            <span className="font-display font-bold text-2xl text-navy">Charan.</span>
            <button onClick={() => setIsOpen(false)} className="text-navy">
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-4xl text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
