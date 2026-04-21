"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Maximize2 } from "lucide-react";

const galleryItems = [
  {
    src: "/gallery/DSC00024.JPG",
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
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  return (
    <section id={id} className="section-padding bg-navy/5 relative overflow-hidden">
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
            <span className="font-inter text-[10px] font-bold uppercase tracking-[0.4em]">
              Memories & Moments
            </span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-navy tracking-tight">
            The visual journey of <br /> entrepreneurship.
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
              onClick={() => setLightbox(item)}
              className={`${item.span} relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 sepia-[0.3] group-hover:sepia-0"
              />

              {/* Cinematic Warm Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                style={{ backgroundColor: item.overlay, mixBlendMode: 'multiply' }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 block mb-2">
                    Visual Memory
                  </span>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="font-inter text-sm text-white/80 max-w-xs">{item.caption}</p>
                </div>
              </div>

              {/* Icon Hint */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-navy/95 backdrop-blur-2xl"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-[16/10] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full md:w-2/3 h-full bg-black/5">
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/3 p-12 flex flex-col justify-center">
                <Heart size={24} className="text-amber mb-6" />
                <h2 className="font-display text-4xl font-bold text-navy mb-4">{lightbox.title}</h2>
                <p className="font-inter text-muted leading-relaxed text-lg">{lightbox.caption}</p>

                <button
                  onClick={() => setLightbox(null)}
                  className="mt-12 flex items-center gap-3 font-inter font-bold text-xs uppercase tracking-widest text-navy transition-all border-b border-navy/10 pb-2 hover:border-navy"
                >
                  Close Moment
                </button>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-8 right-8 text-navy/40 hover:text-navy transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
