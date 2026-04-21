"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Globe, Users } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "EDC Coordinator",
    location: "Aditya University",
    impact: "Architecting a high-performance incubation engine mentoring 200+ early-stage university startups.",
    tags: ["Ecosystem Builder", "Mentorship"],
    icon: <Users size={20} />,
  },
  {
    year: "2024",
    title: "Startups Coordinator",
    location: "Woxsen Trade Tower",
    impact: "Designed frameworks for industry-academia linkages, transforming student research into viable ventures.",
    tags: ["Incubation", "Strategy"],
    icon: <Globe size={20} />,
  },
  {
    year: "2022",
    title: "District Level Trainer",
    location: "PMFME – AP Food Processing",
    impact: "Trained 500+ micro-entrepreneurs in food processing business models and government linkages.",
    tags: ["National Impact", "Training"],
    icon: <TrendingUp size={20} />,
  },
  {
    year: "2015",
    title: "Founder & CEO",
    location: "GetMyTailor",
    impact: "Founded India's first vernacular online tailoring platform, recognized by the Govt. of AP.",
    tags: ["Entrepreneurship", "Founder"],
    icon: <CheckCircle2 size={20} />,
  },
];

export const ImpactMilestones = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="section-padding bg-white relative">
      <div className="container relative">

        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="font-pinter text-[10px] font-bold uppercase tracking-[0.4em] text-royal px-4 py-2 bg-royal/5 rounded-full">
              Impact & Milestones
            </span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            A decade of measurable <br className="hidden md:block" /> impact and innovation.
          </h2>
        </div>

        {/* Investor Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-navy/5 -translate-x-1/2" />

          <div className="flex flex-col gap-20">
            {milestones.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center">

                  {/* Timeline Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white border border-navy/10 flex items-center justify-center shadow-lg text-emerald">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full flex ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[45%] ml-16 md:ml-0 ${isEven ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <span className="font-display text-6xl font-bold text-navy/7 mb-2 block">{item.year}</span>
                        <h4 className="font-display text-2xl font-bold text-navy mb-2 tracking-tight">{item.title}</h4>
                        <p className="font-inter text-xs font-bold uppercase tracking-widest text-emerald mb-4">{item.location}</p>

                        <p className="font-inter text-muted leading-relaxed mb-6">
                          {item.impact}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-navy/5 rounded-full font-inter text-[9px] font-bold uppercase tracking-widest text-navy/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
