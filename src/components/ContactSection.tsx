"use client";
import React, { JSX, useState } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export const ContactSection = ({ id }: { id?: string }): JSX.Element => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xovkdnzr", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id={id} className="bg-white/20 pt-32 md:pt-40 py-24 md:py-32 pb-48 md:pb-64 relative overflow-hidden min-h-screen top-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Massive Reference Heading */}
        <div className="mb-64 md:mb-80 flex justify-start md:-mt-20 overflow-hidden">
          <h2 className="font-display text-[15vw] md:text-8xl font-black text-navy leading-[0.8] tracking-tighter">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 items-start">

          {/* Left Column: Socials & Contact Details */}
          <div className="flex flex-col gap-12 text-black/80">
            <div className="flex flex-col gap-4">
              <a href="mailto:cstadimalla@gmail.com" className="font-inter text-sm md:text-base hover:text-black transition-colors">cstadimalla@gmail.com</a>
              <a href="tel:+919642777062" className="font-inter text-sm md:text-base hover:text-black transition-colors">+91 96427 77062</a>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-inter text-sm md:text-base">Aditya University, EDC Office</p>
              <p className="font-inter text-sm md:text-base">Surampalem, Andhra Pradesh</p>
            </div>

            {/* Social Media Integration */}
            <div className="pt-8 flex flex-col gap-6">
              <span className="font-inter text-[10px] uppercase font-black tracking-[0.5em] text-navy/40">Social Platforms</span>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/charansanjeev" target="_blank" className="flex items-center gap-3 font-inter text-sm font-semibold hover:text-royal transition-colors group">
                  <Linkedin size={16} className="text-navy/20 group-hover:text-royal" /> LinkedIn
                </a>
                <a href="https://instagram.com/charan_sanjeev" target="_blank" className="flex items-center gap-3 font-inter text-sm font-semibold hover:text-amber transition-colors group">
                  <Instagram size={16} className="text-navy/20 group-hover:text-amber" /> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" className="flex items-center gap-3 font-inter text-sm font-semibold hover:text-royal transition-colors group">
                  <Twitter size={16} className="text-navy/20 group-hover:text-royal" /> Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Reference Form */}
          <div>
            {status === "success" ? (
              <div className="h-full flex flex-col justify-center py-10">
                <h3 className="font-display text-4xl text-black mb-6">Thank you.</h3>
                <p className="font-inter text-black/60 mb-10">Message received. I will respond shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-black/40 font-bold uppercase text-[10px] tracking-widest hover:text-black transition-colors">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                  <label className="font-inter text-[10px] uppercase font-bold tracking-widest text-black/40">Name (required)</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-black/20 py-4 font-inter text-base text-black focus:outline-none focus:border-black transition-all placeholder:text-black/5"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-inter text-[10px] uppercase font-bold tracking-widest text-black/40">Email (required)</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-black/20 py-4 font-inter text-base text-black focus:outline-none focus:border-black transition-all placeholder:text-black/5"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-inter text-[10px] uppercase font-bold tracking-widest text-black/40">Message (required)</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-black/20 py-4 font-inter text-base text-black focus:outline-none focus:border-black transition-all placeholder:text-black/5 resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full md:w-auto px-12 py-4"
                  >
                    {status === "loading" ? "Processing..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
