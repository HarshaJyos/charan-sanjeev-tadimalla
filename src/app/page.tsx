import React, { JSX } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SelectedVentures } from "@/components/SelectedVentures";
import { ImpactMilestones } from "@/components/ImpactMilestones";
import { GallerySection } from "@/components/GallerySection";
import { Testimonials } from "@/components/Testimonials";
import { VisionPhilosophy } from "@/components/VisionPhilosophy";
import { ContactSection } from "@/components/ContactSection";

export default function Home(): JSX.Element {
  return (
    <div className="overflow-x-hidden w-full min-h-screen relative bg-bg">
      <Header />
      
      <main>
        <HeroSection id="home" />
        <AboutMeSection id="about" />
        <SelectedVentures id="ventures" />
        <ImpactMilestones id="experience" />
        <GallerySection id="gallery" />
        <Testimonials id="testimonials" />
        <VisionPhilosophy id="vision" />
        <ContactSection id="contact" />
      </main>

      <Footer />
    </div>
  );
}
