"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const galleryItems = [
  {
    src: "/gallery/QQ408992.JPG",
    title: "Speaking Stages",
    caption: "Sharing the vision of ecosystem building in Andhra Pradesh.",
    span: "col-span-12 md:col-span-8 h-[400px]",
    overlay: "var(--color-amber)",
  },
  {
    src: "/gallery/QQ400980.JPG",
    title: "National Awards",
    caption: "A moment of recognition for grassroots entrepreneurship.",
    span: "col-span-6 md:col-span-4 h-[400px]",
    overlay: "var(--color-teal)",
  },
  {
    src: "/gallery/DSC_2249.JPG",
    title: "In the Workshop",
    caption: "Empowering early-stage founders with operational tools.",
    span: "col-span-6 md:col-span-4 h-[300px]",
    overlay: "var(--color-royal)",
  },
  {
    src: "/gallery/GMC02012026_141613.jpg",
    title: "Community Growth",
    caption: "Celebrating milestones with the founder community.",
    span: "col-span-12 md:col-span-4 h-[300px]",
    overlay: "var(--color-teal)",
  },
  {
    src: "/gallery/QQ401132.JPG",
    title: "Global Mentorship",
    caption: "Connecting with international mentors and partners.",
    span: "col-span-6 md:col-span-4 h-[300px]",
    overlay: "var(--color-amber)",
  },
  {
    src: "/gallery/DSC_2301.JPG",
    title: "Innovation Forums",
    caption: "Representing university incubation at major summits.",
    span: "col-span-12 md:col-span-6 h-[400px]",
    overlay: "var(--color-royal)",
  },
  {
    src: "/gallery/QQ409009.JPG",
    title: "The Journey",
    caption: "Reflecting on the path from founder to ecosystem architect.",
    span: "col-span-6 md:col-span-6 h-[400px]",
    overlay: "var(--color-teal)",
  },
];

export const GallerySection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="section-padding bg-white-950 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="container relative z-10">

        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3 text-muted"
          >
            <Heart size={14} className="text-amber" />
            <span className="font-inter text-[10px] font-black uppercase tracking-[0.5em]">
              Memories & Moments
            </span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-navy tracking-tighter leading-[0.95]">
            The visual journey of <br className="hidden md:block" /> entrepreneurship.
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className={`${item.span} relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover duration-1000 sepia-[0.3]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}

    </section>
  );
};
