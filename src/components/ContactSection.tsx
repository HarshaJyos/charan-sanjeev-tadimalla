"use client";
import React, { JSX, useState } from "react";
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

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
    <section id={id} className="bg-white/20 py-24 md:py-32 relative overflow-hidden">
      <div className="container  height-full overflow-hidden">

        {/* Massive Reference Heading */}
        <div className="mb-20 md:mb-32 flex justify-center">
          <h2 className="font-display text-8xl  font-bold text-black leading-[0.8]">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">

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
              <span className="font-inter text-[10px] uppercase font-bold tracking-[0.4em] text-black/40">Social Platforms</span>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/charansanjeev" target="_blank" className="flex items-center gap-3 font-inter text-sm hover:text-royal transition-colors group">
                  <Linkedin size={16} className="text-black/20 group-hover:text-royal" /> LinkedIn
                </a>
                <a href="https://instagram.com/charan_sanjeev" target="_blank" className="flex items-center gap-3 font-inter text-sm hover:text-amber transition-colors group">
                  <Instagram size={16} className="text-black/20 group-hover:text-amber" /> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" className="flex items-center gap-3 font-inter text-sm hover:text-royal transition-colors group">
                  <Twitter size={16} className="text-black/20 group-hover:text-royal" /> Twitter / X
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
                    className="
      px-10 py-3
      bg-black text-white
      text-[15px] font-medium uppercase tracking-wider
      rounded-md
      border border-white/10
      transition-all duration-200
      hover:border-black
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed
    "
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
