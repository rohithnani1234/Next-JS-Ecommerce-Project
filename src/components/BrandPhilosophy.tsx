"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Heart, Globe } from "lucide-react";

const BrandPhilosophy = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const qualities = [
    {
      icon: Shield,
      title: "Authentic Quality",
      desc: "Every item is verified by our master curators for genuine craftsmanship.",
      color: "from-blue-500/10 to-transparent",
    },
    {
      icon: Zap,
      title: "Instant Logistics",
      desc: "Global delivery nodes ensuring your products arrive with unprecedented speed.",
      color: "from-purple-500/10 to-transparent",
    },
    {
      icon: Heart,
      title: "Ethical Curation",
      desc: "We prioritize sustainable materials and fair commerce in all our collections.",
      color: "from-red-500/10 to-transparent",
    },
    {
      icon: Globe,
      title: "Global Vision",
      desc: "Bridging the gap between niche creators and global collectors.",
      color: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative border-y border-gray-50">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Editorial Decorative Number */}
      <div className="absolute top-10 left-10 opacity-[0.02] text-[15vw] font-black pointer-events-none select-none text-black leading-none">
        001
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-0.5 w-8 bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.6em] text-[10px]">
              The Core Theory
            </span>
            <div className="h-0.5 w-8 bg-blue-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black uppercase mb-10"
          >
            Boutique <br />
            <span className="text-gray-200 italic">Genetics.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto tracking-tight italic"
          >
            "Access is the true luxury. We verify every piece in our archival
            node to ensure genuine innovation and absolute status."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-xl hover:border-blue-600/20"
            >
              <div className="h-20 w-20 bg-gray-50 rounded-[2rem] shadow-lg flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-rotate-[15deg] group-hover:scale-105">
                <item.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-black mb-4 tracking-tighter text-black uppercase group-hover:text-blue-600 transition-colors">
                {item.title}.
              </h4>
              <p className="text-gray-400 font-bold text-[9px] leading-relaxed uppercase tracking-[0.3em] px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center mt-24 border-t border-gray-50 pt-16">
          <p className="text-gray-300 font-black tracking-[0.4em] text-[10px] uppercase mb-6">
            End of Manifesto
          </p>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;
