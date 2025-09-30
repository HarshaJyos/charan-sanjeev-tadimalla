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
      src: "/gallery/1.jpg",
      alt: "Gallery Image 1",
      title: "Innovation & Leadership",
      span: "tall", // tall, wide, or default
    },
    {
      src: "/gallery/6.jpg",
      alt: "Gallery Image 2",
      title: "Startup Ecosystem",
      span: "wide",
    },
    {
      src: "/gallery/3.jpg",
      alt: "Gallery Image 3",
      title: "Professional Growth",
      span: "default",
    },
    {
      src: "/gallery/4.jpg",
      alt: "Gallery Image 4",
      title: "Entrepreneurship",
      span: "default",
    },
    {
      src: "/gallery/2.jpg",
      alt: "Gallery Image 6",
      title: "Technology",
      span: "tall",
    },
    {
      src: "/gallery/5.jpg",
      alt: "Gallery Image 5",
      title: "Innovation",
      span: "tall",
    },
    {
      src: "/gallery/8.jpg",
      alt: "Gallery Image 6",
      title: "Technology",
      span: "wide",
    },
  ];

  const getSpanClass = (span: string) => {
    switch (span) {
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "big":
        return "md:col-span-2 md:row-span-2";
      default:
        return "";
    }
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px]">
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
              className={`${getSpanClass(
                image.span
              )} relative rounded-[20px] border border-white/20 overflow-hidden shadow-lg`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <h3 className="font-semibold text-white text-base sm:text-lg p-4 font-inter">
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
