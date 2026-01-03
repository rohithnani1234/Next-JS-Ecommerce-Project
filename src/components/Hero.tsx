"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  // Parallax effect for background image
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, -100]);
  const scaleRange = useTransform(scrollY, [0, 500], [1, 1.05]);
  const yRange2 = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 sm:pt-24 md:pt-32">
      {/* Editorial Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yRange, scale: scaleRange }}
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Lifestyle"
          fill
          className="object-cover opacity-60 grayscale-[0.5] brightness-[1.1] scale-105 transition-all duration-[2000ms]"
          priority
        />
        <motion.div
          className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"
          style={{ y: yRange2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-white" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 py-8 sm:py-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 sm:mb-8 md:mb-12 flex items-center gap-3 sm:gap-6 overflow-hidden flex-wrap justify-center">
              <span className="h-px w-12 sm:w-20 bg-blue-600/30" />
              <span className="text-blue-600 font-black uppercase tracking-[0.8em] text-[8px] sm:text-[10px] whitespace-nowrap">
                Elite Curatorial Protocol
              </span>
              <span className="h-px w-12 sm:w-20 bg-blue-600/30" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-black leading-[0.9] mb-4 sm:mb-6 md:mb-8 uppercase flex flex-col items-center">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Archival.
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="italic font-light text-blue-600 -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4"
              >
                Identities.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium max-w-lg mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed uppercase tracking-[0.2em] px-2"
            >
              "We transcend commerce to curate the benchmarks of modern living."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full px-2 sm:px-0"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative bg-black text-white px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-lg sm:rounded-[2rem] font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-blue-600 shadow-xl hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
                  <span>Enter the Vault</span>
                  <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
                </span>
              </button>

              <button className="group relative flex items-center justify-center gap-2 sm:gap-4 text-gray-900 font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] px-6 sm:px-8 py-4 sm:py-5 rounded-lg sm:rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-md hover:bg-white transition-all hover:-translate-y-1 w-full sm:w-auto">
                <div className="h-8 w-8 rounded-full border border-black/5 flex items-center justify-center group-hover:border-blue-600/30 transition-colors">
                  <Play className="h-3 w-3 fill-current ml-0.5 text-blue-600" />
                </div>
                <span>Watch Manifesto</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Meta Info */}
      <div className="absolute bottom-12 left-12 md:left-24 hidden lg:block">
        <div className="flex items-center space-x-4">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            Protocol LIVE • MILAN/SEOUL
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 md:right-24 hidden lg:block">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">
          v1.04.22 // ARCHIVE 01
        </span>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 group"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
          Discovery
        </span>
        <div className="w-px h-12 bg-black/10 group-hover:bg-blue-600 transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
