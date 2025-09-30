"use client";
import React, { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl sm:text-3xl font-bold tracking-tight font-nautigal"
        >
          Charan
        </motion.div>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-white text-base lg:text-lg font-medium font-inter hover:text-gray-300 transition duration-300 ease-in-out"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-white p-2">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/95 border-r border-white/10 w-[280px] sm:w-[320px] p-6"
          >
            <SheetTitle className="text-white text-xl font-bold font-nautigal mb-6">
              Menu
            </SheetTitle>
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-white text-lg font-medium font-inter hover:text-gray-300 transition duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
