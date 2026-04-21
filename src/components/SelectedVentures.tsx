"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "Aditya EDC",
    category: "Ecosystem Builder",
    image: "/gallery/DSC_2301.JPG",
    description: "Architecting a high-performance incubation engine mentoring 200+ early-stage university startups.",
    metrics: [
      { label: "Success Rate", value: "Investor Ready", color: "var(--color-emerald)" },
      { label: "Impact", value: "200+ Mentored", color: "var(--color-teal)" },
    ],
  },
  {
    name: "GetMyTailor",
    category: "Retail & Vernacular Tech",
    image: "/gallery/DSC_2249.JPG",
    description: "India's first vernacular online tailoring platform, simplifying luxury bespoke tailoring for the masses.",
    metrics: [
      { label: "Recognition", value: "Govt. of AP", color: "var(--color-emerald)" },
      { label: "Reach", value: "Verified Scale", color: "var(--color-royal)" },
    ],
  },
  {
    name: "Woxsen Trade Tower",
    category: "Incubation Strategy",
    image: "/gallery/GMC02012026_141613.jpg",
    description: "Designed frameworks for industry-academia linkages, transforming student research into viable ventures.",
    metrics: [
      { label: "Network", value: "Global VCs", color: "var(--color-royal)" },
      { label: "Support", value: "End-to-End", color: "var(--color-emerald)" },
    ],
  },

];

export const SelectedVentures = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="section-padding bg-bg">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="font-inter text-xs font-bold uppercase tracking-[0.4em] text-royal mb-6">
              Selected Portfolio
            </h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-7xl text-navy font-bold tracking-tighter">
              Ventures & High-Impact <br /> Ecosystems.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block pb-4"
          >
            <span className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              Slide to explore case studies
            </span>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ventures.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-white mb-8 border border-navy/5 shadow-xl transition-all duration-700 hover:shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Category */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-navy/5 shadow-sm">
                  <span className="font-inter text-[9px] font-bold uppercase tracking-widest text-royal">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-2xl font-bold text-navy">{project.name}</h4>
                  <button className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy transition-all duration-300 hover:bg-navy hover:text-white group-hover:shadow-lg">
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <p className="font-inter text-muted text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-8 border-t border-navy/5 pt-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display font-bold text-lg" style={{ color: metric.color }}>{metric.value}</p>
                      <p className="font-inter text-[9px] font-bold uppercase tracking-widest text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
