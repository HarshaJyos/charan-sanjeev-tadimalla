"use client";
import React, { JSX, useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Gallery", href: "#gallery" },
];

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] w-full h-12 transition-all duration-700 ease-premium ${scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-navy/5 py-4"
          : "bg-transparent py-8 md:py-12"
          }`}
      >
        <div className="container px-6 flex items-center justify-between">

          {/* 1. Logo - Left */}
          <div className="flex-1 flex justify-start">
            <a href="#home" className="group">
              <span className="font-display font-black text-3xl tracking-tighter text-navy capitalize">
                Charan<span className="text-royal">.</span>
              </span>
            </a>
          </div>

          {/* 2. Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`font-inter text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group/nav ${activeItem === item.label ? "text-navy" : "text-navy/50 hover:text-navy"
                  }`}
              >
                {item.label}
                {activeItem === item.label && (
                  <span className="absolute -left-3 -right-3 top-1/2 -translate-y-1/2 h-6 bg-royal/5 -z-10 rounded-md" />
                )}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-royal transition-all duration-300 ${activeItem === item.label ? "w-full" : "w-0 group-hover/nav:w-full"
                  }`} />
              </a>
            ))}
          </nav>

          {/* 3. Actions - Right */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">

            <a
              href="#contact"
              className="group relative flex items-center justify-center w-8 h-8 md:w-14 md:h-8 bg-charcoal text-white rounded-2xl md:rounded-[20px] transition-all duration-500 hover:bg-royal hover:scale-105 active:scale-95 shadow-xl shadow-navy/20 overflow-hidden"
            >
              <Phone size={20} strokeWidth={2.5} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-royal/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy hover:text-royal transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </header>

      {/* Premium Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-white transition-all duration-700 ease-premium lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
          }`}
      >
        <div className="h-full flex flex-col px-8 py-24">
          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-display text-4xl font-black text-navy hover:text-royal transition-all duration-500 uppercase tracking-tighter ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="items-center justify-between w-10 p-8 bg-charcoal text-white rounded-[32px] font-display text-1xl font-black transition-all hover:bg-royal"
            >
              Start Connection <Phone size={10} />
            </a>
            <div className="pt-6 border-t border-navy/10 px-4">
              <p className="text-muted text-[10px] uppercase font-black tracking-[0.3em] mb-4">Liaise Successfully</p>
              <a href="mailto:cstadimalla@gmail.com" className="text-2xl font-display font-black text-navy">cstadimalla@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};