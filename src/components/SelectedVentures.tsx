"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id={id} className="section-padding bg-white-950 py-24">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <h3 className="font-display text-5xl lg:text-7xl text-navy font-black tracking-tighter leading-[0.95] mb-6">
            Ventures & High-Impact <br className="hidden lg:block" /> Ecosystems.
          </h3>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {ventures.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm mb-10 lg:mb-12 border-4 border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="px-6 lg:px-8 pb-8 lg:pb-10">
                {/* Category Badge */}
                <span className="inline-block px-4 py-2 bg-navy/10 text-navy/80 font-inter font-semibold text-sm uppercase tracking-wider rounded-full mb-6">
                  {project.category}
                </span>

                {/* Title */}
                <h4 className="font-display text-2xl lg:text-3xl font-black text-navy tracking-tight mb-6 lg:mb-8 leading-tight group-hover:text-emerald transition-colors duration-300">
                  {project.name}
                </h4>

                {/* Description */}
                <p className="font-inter text-navy/80 text-base lg:text-lg leading-relaxed mb-10 lg:mb-12 max-w-md">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-8 lg:gap-12 pt-8 border-t-2 border-navy/10">
                  {project.metrics.map((metric, j) => (
                    <div key={`${metric.label}-${j}`} className="text-center flex-1">
                      <p
                        className="font-display font-black mb-2"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </p>
                      <p className="font-inter text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-navy/60">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};