"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const GallerySection = ({ id }: { id?: string }): JSX.Element => {
  const galleryImages = [
    {
      src: "/figmaAssets/frame 64.svg",
      alt: "Gallery Image 1",
      title: "Innovation & Leadership",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/figmaAssets/frame 67.svg",
      alt: "Gallery Image 2",
      title: "Startup Ecosystem",
      className: "col-span-2",
    },
    {
      src: "/figmaAssets/image.png",
      alt: "Gallery Image 3",
      title: "Professional Growth",
      className: "col-span-1",
    },
    {
      src: "/figmaAssets/Frame 68.svg",
      alt: "Gallery Image 4",
      title: "Entrepreneurship",
      className: "col-span-1",
    },
  ];

  return (
    <section id={id} className="w-full py-6 sm:py-6 lg:py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight leading-tight font-inter mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`${image.className} group relative rounded-[20px] border border-white/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-semibold text-white text-base sm:text-lg lg:text-xl text-center px-4 font-inter">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-medium text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-inter">
            A visual journey through my entrepreneurship and innovation
            experiences, showcasing key moments in building startup ecosystems
            and fostering innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
