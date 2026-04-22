"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const VisionPhilosophy = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="section-padding bg-white-950 relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-black leading-[1.1] mb-12"
          >
            Building the architecture of <br className="md:block" /> future-proof innovation.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-20 text-left"
          >
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[10px] font-black uppercase tracking-[0.5em] text-teal">Vision</span>
              <p className="font-display text-2xl text-gray-500 leading-tight font-bold tracking-tight">
                To bridge the structural gap between raw potential and commercial impact across the global startup ecosystem.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[10px] font-black uppercase tracking-[0.5em] text-teal">Philosophy</span>
              <p className="font-inter text-gray-500 leading-relaxed font-medium">
                Innovation thrives where operational friction is removed. I focus on architecting the environments where founders can move from chaos to clarity, leveraging hands-on experience to build ventures that actually last.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
