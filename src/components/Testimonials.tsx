"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Charan's ability to simplify complex incubation frameworks is unmatched. He doesn't just mentor; he builds ecosystems that last.",
    author: "Startup Director",
    role: "Woxsen University",
    logo: "TRADE TOWER",
  },
  {
    quote: "Through the SIYB modules, Charan has fundamentally changed how women entrepreneurs in our region approach digital business.",
    author: "Regional Coordinator",
    role: "ILO Project Hub",
    logo: "ILO / APSSDC",
  },
  {
    quote: "His hands-on experience as a founder of GetMyTailor brings a level of operational empathy that is rare in university entrepreneurship coordinators.",
    author: "Academic Dean",
    role: "Aditya University",
    logo: "ADITYA",
  },
];

export const Testimonials = ({ id }: { id?: string }): JSX.Element => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id={id} className="section-padding bg-white relative">
      <div className="container max-w-5xl mx-auto px-6 overflow-hidden">
        
        <div className="flex justify-center mb-16">
          <Quote size={48} className="text-royal/10" />
        </div>

        <div className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-navy italic leading-relaxed mb-12 max-w-4xl">
                &ldquo;{testimonials[idx].quote}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <span className="font-inter text-xs font-bold uppercase tracking-[0.3em] text-royal mb-2">
                  {testimonials[idx].logo}
                </span>
                <p className="font-display text-xl font-bold text-navy">{testimonials[idx].author}</p>
                <p className="font-inter text-[10px] uppercase font-bold tracking-widest text-muted">{testimonials[idx].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 md:px-0">
            <button onClick={prev} className="p-4 rounded-full border border-navy/5 text-navy hover:bg-navy hover:text-white transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === idx ? 'w-8 bg-royal' : 'w-2 bg-navy/10'}`} 
                />
              ))}
            </div>
            <button onClick={next} className="p-4 rounded-full border border-navy/5 text-navy hover:bg-navy hover:text-white transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
