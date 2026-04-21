"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

export const HeroSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section
      id={id}
      className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Structural Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/[0.01] border-l border-navy/[0.03] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-royal/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-emerald/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 pt-32 md:pt-40">
        <div className="max-w-5xl">
          {/* High-Impact Name */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[14vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.9] text-navy font-bold tracking-tight mb-12">
              Charan Sanjeev <br /> Tadimalla
            </h1>
          </motion.div>

          {/* Structural Line & Tagline Group */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-1">
            <motion.div
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1px] h-24 bg-royal/30 hidden md:block"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-navy/80 leading-tight mb-14">
                Architecting the structural environments where <br className="hidden lg:block" /> bold ideas mature into high-scale ventures.
              </p>

              {/* Action Group */}
              <div className="flex flex-wrap gap-6">
                <a href="#ventures" className="btn-primary group gap-3 border border-navy/10">
                  View Ventures <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#contact" className="btn-secondary group gap-3 shadow-lg shadow-amber/10">
                  Initiate Connect <MousePointer2 size={14} className="group-hover:scale-125 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Industrial Scroll Trace */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6 text-muted/30"
      >
        <span className="font-inter text-[9px] uppercase tracking-[0.5em] font-bold">Discover Ecosystem</span>
        <div className="w-20 h-[1px] bg-navy/10 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-royal/40"
          />
        </div>
      </motion.div>
    </section>
  );
};
