"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const StorySection = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="py-16 bg-white text-gray-900 overflow-hidden relative">
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"
        style={{ y: yRange }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                alt="Brand Heritage"
                fill
                className="object-cover grayscale transition-all duration-[1500ms] group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>

            {/* Minimal Heritage Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-black p-8 rounded-[2rem] shadow-2xl text-white hidden md:block"
            >
              <p className="text-2xl font-black italic tracking-tighter mb-1">
                Heritage
              </p>
              <div className="h-0.5 w-8 bg-blue-600 mb-3" />
              <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">
                Authorized Since 2018
              </p>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="h-1 w-8 bg-blue-600" />
                <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                  The Manifesto
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight text-black uppercase"
              >
                Pure <br />
                <span className="italic text-gray-300">Ambition</span> <br />
                Defined.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl italic border-l-2 border-gray-100 pl-8"
              >
                "VOGUESTORE emerged as a response to the diluted world of
                digital commerce. We believed that true luxury shouldn't be
                hidden behind exclusive doors, but curated for those who
                appreciate fine engineering and timeless design."
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-12 py-12 border-y border-gray-100">
              <div>
                <h4 className="text-4xl font-black mb-2 tracking-tighter text-black">
                  120+
                </h4>
                <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.4em]">
                  Elite Hubs
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-black mb-2 tracking-tighter text-black">
                  24k
                </h4>
                <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.4em]">
                  Scanned Artifacts
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.4em] bg-black text-white px-10 py-5 rounded-2xl shadow-xl transition-all"
            >
              <span>Explore Genealogy</span>
              <span className="h-px w-6 bg-white/30 group-hover:w-10 transition-all" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
