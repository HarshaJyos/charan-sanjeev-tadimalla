import React, { JSX } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ExperienceRolesSection } from "@/components/ExperienceRolesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden w-full min-h-screen relative">
      <Header />
      <main className="pt-20">
        <HeroSection id="home" />
        <AboutMeSection id="about" />
        <ExperienceRolesSection id="experience" />
        <GallerySection id="gallery" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
