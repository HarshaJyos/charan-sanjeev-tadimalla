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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-premium ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-navy/5 shadow-sm py-4"
            : "bg-transparent py-6 md:py-8"
          }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-1 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="font-display font-bold text-2xl tracking-tighter text-navy">
              Charan
              <span className="text-royal relative transition-all duration-300 group-hover:left-0.5">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-navy/60 hover:text-navy transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-royal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-[110] p-2 text-navy hover:text-royal transition-colors bg-white/50 backdrop-blur-sm rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-white transition-all duration-700 ease-premium md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
          }`}
      >
        <div className="h-full flex flex-col px-8 py-24">
          <nav className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-display text-5xl font-bold text-navy hover:text-royal transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-navy/10">
            <p className="text-muted text-sm font-medium mb-4">Get in touch</p>
            <a
              href="mailto:contact@charansanjeev.com"
              className="text-2xl font-display font-medium text-navy active:text-royal transition-colors"
            >
              hello@charansanjeev.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};