"use client";
import React, { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, Instagram, Phone } from "lucide-react";

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ContactSection = ({ id }: { id?: string }): JSX.Element => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const formFields = [
    { id: "name", label: "Name", type: "input", placeholder: "Your Name" },
    { id: "email", label: "Email", type: "input", placeholder: "Your Email" },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your Message",
    },
  ];

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xovkdnzr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      // Formspree returns {"ok": true, "next": "..."} on success
      if (response.ok && data.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id={id} className="w-full py-6 sm:py-4 lg:py-6 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight leading-tight font-inter mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-white/80 text-base sm:text-lg lg:text-xl text-center font-inter max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s collaborate to build the future of entrepreneurship!
          Whether you&apos;re a startup founder, innovator, or seeking
          mentorship, I&apos;m here to connect and create impactful solutions
          together.
        </motion.p>

        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {status === "success" ? (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-green-400 font-bold font-inter text-xl mb-2">
                    Message sent successfully!
                  </p>
                  <p className="text-white/70 text-base">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full h-12 sm:h-14 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg font-semibold font-inter"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center p-6 bg-red-500/10 border border-red-500/30 rounded-2xl">
                  <div className="text-5xl mb-4">❌</div>
                  <p className="text-red-400 font-bold font-inter text-xl mb-2">
                    Something went wrong
                  </p>
                  <p className="text-white/70 text-base">
                    Please try again or contact me directly via email.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full h-12 sm:h-14 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg font-semibold font-inter"
                >
                  Try Again
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <Label
                      htmlFor={field.id}
                      className="font-semibold text-white text-base sm:text-lg font-inter"
                    >
                      {field.label}
                    </Label>
                    {field.type === "input" ? (
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.id === "email" ? "email" : "text"}
                        placeholder={field.placeholder}
                        required
                        disabled={status === "loading"}
                        className="h-12 rounded-xl border border-white/30 bg-white/5 text-white placeholder:text-gray-400 text-base sm:text-lg font-inter focus:border-white/50 focus:ring-2 focus:ring-white/20 transition duration-300 disabled:opacity-50"
                      />
                    ) : (
                      <Textarea
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        required
                        disabled={status === "loading"}
                        className="min-h-[100px] sm:min-h-[120px] rounded-xl border border-white/30 bg-white/5 text-white placeholder:text-gray-400 text-base sm:text-lg font-inter focus:border-white/50 focus:ring-2 focus:ring-white/20 transition duration-300 resize-none disabled:opacity-50"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-12 sm:h-14 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg font-semibold font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 flex justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
