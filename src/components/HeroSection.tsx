"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center py-4 sm:py-2 lg:py-4 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">
        {/* Image Section */}
        <motion.div
          className="order-1 lg:order-2 relative w-full aspect-square max-w-[85vw] sm:max-w-[70vw] lg:max-w-[38vw] mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/figmaAssets/Frame 35.svg"
            alt="Image and social"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center w-full max-w-[90vw] sm:max-w-[70vw] lg:max-w-[42vw] mt-8 lg:mt-0 lg:ml-12">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            <h2 className="text-white font-inter font-medium tracking-wide text-center lg:text-left text-[clamp(1.25rem,2vw,2rem)]">
              Hello, I&apos;m
            </h2>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-white font-inter font-extrabold tracking-tight leading-tight text-center lg:text-left text-[clamp(2.5rem,6vw,5rem)]">
              CHARAN
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-3"
          >
            <p className="text-white font-inter font-medium leading-relaxed text-center lg:text-left text-[clamp(0.9rem,1.4vw,1.125rem)] max-w-prose">
              An entrepreneurship development professional with 5+ years of
              experience in mentoring startups, driving incubation programs, and
              fostering innovation. Currently serving as EDC Coordinator at
              Aditya University and founder of GetMyTailor, I&apos;m passionate
              about building inclusive startup ecosystems that inspire and
              empower the next generation of entrepreneurs.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-black/60 font-nautigal font-bold tracking-tight leading-none text-center lg:text-left text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Charan Sanjeev Tadimalla
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
