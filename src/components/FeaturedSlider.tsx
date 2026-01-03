"use client";

import React, { useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const FeaturedSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 1.5
          : scrollLeft + clientWidth / 1.5;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row items-end justify-between relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="h-0.5 w-6 bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              The Edit • 001
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-[0.9] uppercase"
          >
            Seasonal <br />{" "}
            <span className="text-gray-200 italic">Benchmarks.</span>
          </motion.h2>
        </div>

        <div className="flex space-x-4 mt-8 md:mt-0">
          <button
            onClick={() => scroll("left")}
            className="h-16 w-16 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 group shadow-sm bg-white"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-16 w-16 rounded-full border border-black text-black flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 group shadow-xl"
          >
            <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto pb-24 px-6 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] md:min-w-[340px] snap-center py-4"
          >
            <ProductCard product={product} />
          </div>
        ))}

        {/* Premium View All Card */}
        <div className="min-w-[280px] md:min-w-[340px] snap-center py-4">
          <Link href="/shop" className="group block h-full">
            <div className="h-full min-h-[420px] w-full bg-black rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden transition-all duration-500 shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">
                  Inventory Access
                </span>
                <div className="h-1 w-1 rounded-full bg-blue-600" />
              </div>

              <div className="relative z-10 w-full">
                <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-8 mx-auto border border-white/10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-xl relative">
                  <ArrowRight className="h-6 w-6 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-4 leading-[0.9] uppercase">
                  Expand <br /> The{" "}
                  <span className="italic text-gray-400">Archive</span>
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-8">
                  43+ Authenticated Artifacts
                </p>
                <div className="h-px w-16 bg-white/10 mx-auto" />
              </div>

              <div className="absolute bottom-8 w-full text-center">
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">
                  Full Global Catalog
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12">
        <div className="h-px bg-gray-100 w-full" />
      </div>
    </section>
  );
};

export default FeaturedSlider;
