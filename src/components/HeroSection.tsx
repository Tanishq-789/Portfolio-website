"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import TextType from "@/components/ui/TextType";
import StarBorder from "@/components/ui/StarBorder"

const HeroSection = () => {
  // 1. Define the text you want to animate as an array of strings.
  const descriptiveText = [
    "Passionate about building intelligent systems and automating complex workflows.",
    "Currently pursuing BE in Computer Engineering with expertise in Machine Learning, Full-Stack Development, and AI-powered solutions."
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Lamp Background */}
      <LampContainer className="absolute inset-0 -z-10" />

      {/* Floating Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />

      {/* Floating animated shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-16 font-Playfair bg-gradient-to-br from-blue-400 to-pink-500 py-4 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          Tanishq Shinde
        </motion.h1>

        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 mt-2">
          Computer Engineer & AI Enthusiast
        </h2>

        {/* 2. Replace the <p> tag with the TextType component. */}
        <TextType
          text={descriptiveText}
          // 3. Pass the original styling classes to maintain the look.
          className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-slate-400 text-md md:text-lg leading-relaxed"
          typingSpeed={40}
          pauseDuration={3000}
        />

        <div className="mt-6 flex justify-center gap-4 flex-wrap">

          <a
            href="/Tanishq_Shinde_C2K221310_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Download Resume ⬇
          </a>

          <a
            href="https://github.com/Tanishq-789"
            className="rounded-full border border-gray-300 dark:border-white/20 px-6 py-3 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 transition-transform"
          >
            View Projects ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;