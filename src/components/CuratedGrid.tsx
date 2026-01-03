"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CuratedGrid = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, -80]);
  const collections = [
    {
      title: "The Silver Series",
      subtitle: "Electronics",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Leather Protocol",
      subtitle: "Accessories",
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
      span: "",
    },
    {
      title: "Nordic Minimal",
      subtitle: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      span: "",
    },
    {
      title: "Urban Utility",
      subtitle: "Fashion",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
      span: "lg:col-span-2",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="h-0.5 w-8 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Exhibition 024
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mt-4 text-black uppercase">
              Curated <br />{" "}
              <span className="text-gray-200 italic">Benchmarks.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-base max-w-sm mb-4 leading-relaxed border-l border-gray-100 pl-6">
            Explore our handpicked collections designed for the modern
            individual who values form as much as function.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                y: useTransform(scrollY, [0, 1000], [0, -30 * (i + 1)]),
              }}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-xl ${
                i === 0
                  ? "lg:col-span-8 lg:aspect-[16/10]"
                  : i === 3
                  ? "lg:col-span-7 lg:aspect-[16/9]"
                  : "lg:col-span-4 lg:aspect-square"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Corner Info */}
              <div className="absolute top-8 right-8 overflow-hidden">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                >
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">
                    Series {i + 1}
                  </span>
                </motion.div>
              </div>

              <div className="absolute bottom-12 left-12 text-white max-w-[80%]">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-4 block">
                  {item.subtitle}
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                  {item.title}
                </h3>
                <button className="group/btn flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.4em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <span>Explore Series</span>
                  <div className="h-0.5 w-12 bg-white group-hover/btn:w-20 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedGrid;
