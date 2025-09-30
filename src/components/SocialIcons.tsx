"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, Instagram, Phone } from "lucide-react";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.2, rotate: 5 },
};

export const SocialIcons = (): JSX.Element => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/charansanjeev",
      icon: (
        <Linkedin
          size={24}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/charan_sanjeev?igsh=ZWZhNnpieW43eDgy",
      icon: (
        <Instagram
          size={24}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/charansanjeev",
      icon: (
        <Facebook
          size={24}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        />
      ),
    },
    {
      name: "Email",
      href: "mailto:cstadimalla@gmail.com",
      icon: (
        <Mail
          size={24}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        />
      ),
    },
    {
      name: "Phone",
      href: "tel:+919642777062",
      icon: (
        <Phone
          size={24}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        />
      ),
    },
  ];

  return (
    <motion.div
      className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-[16px] p-4 shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group"
        >
          <span className="sr-only">{link.name}</span>
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};
