"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Startups Mentored", color: "var(--color-emerald)" },
  { value: "500+", label: "Entrepreneurs Trained", color: "var(--color-royal)" },
  { value: "5+", label: "Years Experience", color: "var(--color-teal)" },
  { value: "01", label: "National Award", color: "var(--color-amber)" },
];

export const AboutMeSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="section-padding bg-white relative overflow-hidden">

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Cinematic Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky -top-10"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image
                src="/about.jpg"
                alt="Charan Sanjeev Tadimalla"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: The Narrative */}
          <div className="lg:col-span-7 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-inter text-xs font-bold uppercase tracking-[0.4em] text-royal mb-10">
                The Founder & Architect
              </h2>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.1] mb-12 font-bold tracking-tight">
                Empowering the next generation of global innovators.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 mb-16"
            >
              <p className="font-inter text-lg lg:text-xl text-charcoal leading-relaxed font-medium">
                Charan Sanjeev Tadimalla is an entrepreneurship development professional and ecosystem builder.
                His mission is to move beyond theory, architecting the structural environments where founders can fail fast, fix intelligently, and scale exponentially.
              </p>

              <div className="h-[1px] w-full bg-navy/5" />

              <p className="font-inter text-black leading-relaxed">
                As the EDC Coordinator at Aditya University and a certified ILO Trainer, Charan has bridged the gap between academic research and commercial viability.
                Starting his own journey with <strong>GetMyTailor</strong>—India&apos;s first vernacular online tailoring platform—he experienced first-hand the friction points of building from zero.
                Today, he uses that operational empathy to mentor over 200 startups across sectors.
              </p>
            </motion.div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-navy/5 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  <p className="font-display text-4xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="font-inter text-[10px] uppercase font-bold tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
