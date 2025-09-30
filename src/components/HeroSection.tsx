"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center py-4 sm:py-6 lg:py-8 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">
        {/* Image Section */}
        <motion.div
          className="order-1 lg:order-2 relative w-full aspect-square max-w-[85vw] sm:max-w-[70vw] lg:max-w-[38vw] mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Premium Multi-Layer Organic Blob System */}

          {/* Layer 1: Deep purple foundation - creates atmospheric depth */}
          <motion.div
            className="absolute -z-10 w-[170%] h-[170%] -top-12 -left-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: [-5, 5, -5] }}
            transition={{
              opacity: { duration: 1.2, delay: 0.3 },
              scale: { duration: 1.2, delay: 0.3 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 1200'%3E%3Cpath fill='%235b21b6' d='M598.3,398.8Q618,547.7,469.2,569.8Q320.3,592,199.2,545.8Q78,499.7,50.8,374.8Q23.7,250,91.2,151.8Q158.7,53.7,279.8,38.2Q401,22.7,509.2,81.8Q617.3,141,608.2,195.5Q599,250,598.3,398.8Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(90px)",
              opacity: 0.25,
            }}
          />

          {/* Layer 2: Large primary gradient blob - main glow effect */}
          <motion.div
            className="absolute -z-10 w-[145%] h-[145%] -top-8 left-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: [12, 18, 12] }}
            transition={{
              opacity: { duration: 1, delay: 0.4 },
              scale: { duration: 1, delay: 0.4 },
              rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236d28d9;stop-opacity:1'/%3E%3Cstop offset='45%25' style='stop-color:%237c3aed;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g1)' d='M521.8,377.3Q529,504.7,401.7,521.3Q274.3,538,168.2,507.7Q62,477.3,44.3,363.7Q26.7,250,72.8,159.8Q119,69.7,224.5,56.8Q330,44,425,86.2Q520,128.3,514.5,189.2Q509,250,521.8,377.3Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(50px)",
              opacity: 0.75,
            }}
          />

          {/* Layer 3: Indigo accent from right - adds depth */}
          <motion.div
            className="absolute -z-10 w-[120%] h-[120%] top-4 right-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, rotate: [-22, -28, -22] }}
            transition={{
              opacity: { duration: 0.9, delay: 0.5 },
              x: { duration: 0.9, delay: 0.5 },
              rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900'%3E%3Cpath fill='%234f46e5' d='M476.5,351.3Q472,452.7,370.7,478.8Q269.3,505,176.8,475.5Q84.3,446,61.2,348Q38,250,78.8,167.5Q119.7,85,214.8,71.2Q310,57.3,391.7,93.8Q473.3,130.3,476.2,190.2Q479,250,476.5,351.3Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(60px)",
              opacity: 0.6,
            }}
          />

          {/* Layer 4: Bright blue accent - pop of color */}
          <motion.div
            className="absolute -z-10 w-[100%] h-[100%] top-18 left-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: [28, 35, 28] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              y: { duration: 0.8, delay: 0.6 },
              rotate: { duration: 22, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='%233b82f6' d='M441.8,333.5Q435,417,351.5,438.8Q268,460.7,192.2,430.8Q116.3,401,84.7,325.5Q53,250,77.2,169.8Q101.3,89.7,185.7,72.8Q270,56,348.8,90.2Q427.7,124.3,438.2,187.2Q448.7,250,441.8,333.5Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(45px)",
              opacity: 0.55,
            }}
          />

          {/* Layer 5: Violet gradient from bottom - ambient fill */}
          <motion.div
            className="absolute -z-10 w-[135%] h-[135%] -bottom-12 left-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, rotate: [-12, -18, -12] }}
            transition={{
              opacity: { duration: 1, delay: 0.7 },
              y: { duration: 1, delay: 0.7 },
              rotate: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 950 950'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238b5cf6;stop-opacity:1'/%3E%3Cstop offset='50%25' style='stop-color:%237c3aed;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%236366f1;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g2)' d='M492.7,365.8Q503,481.7,387.2,500.3Q271.3,519,168.7,487.2Q66,455.3,46.2,352.7Q26.3,250,65.7,164.8Q105,79.7,203.5,63.8Q302,48,397.8,87.7Q493.7,127.3,492.8,188.7Q492,250,492.7,365.8Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(70px)",
              opacity: 0.5,
            }}
          />

          {/* Layer 6: Purple glow accent right side */}
          <motion.div
            className="absolute -z-10 w-[110%] h-[110%] top-10 right-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, rotate: [6, 12, 6] }}
            transition={{
              opacity: { duration: 0.9, delay: 0.8 },
              scale: { duration: 0.9, delay: 0.8 },
              rotate: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 850 850'%3E%3Cpath fill='%23a855f7' d='M458.2,341.5Q451,433,359.5,457.2Q268,481.3,186.2,446.2Q104.3,411,77.7,330.5Q51,250,85.2,176Q119.3,102,203.7,80.7Q288,59.3,368.2,93.8Q448.3,128.3,458.8,189.2Q469.3,250,458.2,341.5Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(55px)",
              opacity: 0.45,
            }}
          />

          {/* Layer 7: Cyan accent - cool tone balance */}
          <motion.div
            className="absolute -z-10 w-[95%] h-[95%] -bottom-4 -right-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, rotate: [42, 48, 42] }}
            transition={{
              opacity: { duration: 0.85, delay: 0.9 },
              x: { duration: 0.85, delay: 0.9 },
              rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 750 750'%3E%3Cpath fill='%2360a5fa' d='M429.7,328.3Q424,406.7,345.7,426.8Q267.3,447,195.8,418.5Q124.3,390,93.2,320Q62,250,97.7,183.5Q133.3,117,206.7,98.8Q280,80.7,349.8,106.8Q419.7,133,424.8,191.5Q430,250,429.7,328.3Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(48px)",
              opacity: 0.4,
            }}
          />

          {/* Layer 8: Soft purple atmospheric halo */}
          <motion.div
            className="absolute -z-10 w-[155%] h-[155%] -top-20 -right-16"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, rotate: [-8, -2, -8] }}
            transition={{
              opacity: { duration: 1.1, delay: 1 },
              scale: { duration: 1.1, delay: 1 },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1100 1100'%3E%3Cpath fill='%239333ea' d='M556.8,388.7Q557,527.3,417.7,549.8Q278.3,572.3,165.7,536.2Q53,500,37.8,375Q22.7,250,76.3,152.5Q130,55,245.2,48.7Q360.3,42.3,464.2,85.8Q568,129.3,557.5,189.7Q547,250,556.8,388.7Z'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(85px)",
              opacity: 0.35,
            }}
          />

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/hero.png"
              alt="Hero PNG"
              fill
              className="object-contain relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>
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
