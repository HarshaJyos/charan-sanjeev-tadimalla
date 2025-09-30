"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AboutMeSection = ({ id }: { id?: string }): JSX.Element => {
  const aboutMeItems = [
    "Began my journey as a student innovator and founder of GetMyTailor, earning recognition from the Government of Andhra Pradesh and the Wonder Book of World Records.",
    "Transitioned into ecosystem-building roles as Incubation Manager, Startups Coordinator, and now EDC Coordinator at Aditya University, fostering innovation and entrepreneurship.",
    "Hold certifications from MSME, Ministry of Food Processing, and ILO as a Trainer of Trainers in SIYB and Women in Digital Business.",
    "Bring over 5 years of experience mentoring startups, managing incubation programs, and supporting women entrepreneurs, student innovators, and grassroots ventures.",
    "Guided by a vision to make entrepreneurship accessible, inclusive, and impactful, with a mission to empower changemakers through mentorship, collaboration, and sustainable ecosystem development.",
  ];

  return (
    <section id={id} className="w-full py-4 sm:py-4 lg:py-4 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-tight leading-tight font-inter mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 items-center">
          <motion.div
            className="hidden sm:block relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[600px] aspect-square rounded-[24px] border border-white/20 shadow-2xl overflow-hidden mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/figmaAssets/image.png"
              alt="About Me Image"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[600px] gap-4 sm:gap-6 mx-auto">
            {aboutMeItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="w-full"
              >
                <Card className="rounded-[16px] border border-white/20 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-3 sm:p-5">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed font-inter">
                      {item}
                    </p>
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
