"use client";
import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 50 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

export const ExperienceRolesSection = ({
  id,
}: {
  id?: string;
}): JSX.Element => {
  const experienceData = [
    {
      dateRange: "2025 - Present",
      title: "EDC Coordinator - Aditya University",
      description:
        "Leading entrepreneurship initiatives, mentoring startups, and fostering innovation through workshops and incubation programs.",
      side: "left",
    },
    {
      dateRange: "2024 – 2025",
      title: "Startups Coordinator · Trade Tower – Woxsen University",
      description:
        "Supported student startup incubation and industry connections, guiding early-stage founders.",
      side: "right",
    },
    {
      dateRange: "2022 – 2024",
      title: "District Level Trainer · AP Food Processing Society – PMFME",
      description:
        "Trained entrepreneurs in food processing, supporting grassroots innovators and small businesses.",
      side: "left",
    },
    {
      dateRange: "2019 – 2021",
      title: "Venture Coach · Aditya Educational Institutions",
      description:
        "Mentored student innovators in business model development and entrepreneurship workshops.",
      side: "right",
    },
    {
      dateRange: "2018 - Present",
      title: "Trainer of Trainers · ILO, MSME & APSSDC",
      description:
        "Certified trainer empowering women entrepreneurs and youth-led startups through SIYB and digital business modules.",
      side: "left",
    },
    {
      dateRange: "2015 - Present",
      title: "Founder & CEO · GetMyTailor",
      description:
        "Founded an online tailoring venture, recognized by the Government of Andhra Pradesh and Wonder Book of World Records.",
      side: "right",
    },
  ];

  return (
    <section id={id} className="w-full py-6 sm:py-4 lg:py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight leading-tight font-inter mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Experience & Roles
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white/20 to-white/40 h-full"></div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-start lg:items-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="absolute left-3 sm:left-4 lg:left-1/2 top-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-white/40 to-white/60 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white rounded-full shadow-inner"></div>
                  </div>
                </div>
                <Card
                  className={`relative w-full max-w-[85%] sm:max-w-[450px] lg:max-w-[400px] aspect-[3/2] sm:aspect-[5/3] lg:aspect-[2/1] ml-10 sm:ml-12 lg:ml-0 ${
                    experience.side === "left"
                      ? "lg:mr-auto lg:pr-10"
                      : "lg:ml-auto lg:pl-10"
                  } bg-white/5 backdrop-blur-md border border-white/20 rounded-[12px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                >
                  <CardContent className="p-3 sm:px-5 sm:pt-3 sm:pb-2 lg:px-6 lg:pt-3 lg:pb-2">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="font-semibold text-gray-300 text-xs sm:text-sm lg:text-base font-inter">
                        {experience.dateRange}
                      </div>
                      <h3 className="font-bold text-white text-base sm:text-lg lg:text-xl font-inter leading-tight">
                        {experience.title}
                      </h3>
                      <p className="font-medium text-gray-200 text-xs sm:text-sm lg:text-base font-inter leading-relaxed line-clamp-3">
                        {experience.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
