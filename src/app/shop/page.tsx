"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import MarqueeScroll from "@/components/MarqueeScroll";
import { motion } from "framer-motion";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <Navbar onSearch={setSearchQuery} />

      {/* Shop Header */}
      <section className="pt-40 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -mr-40 -mt-40" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block"
          >
            Digital Flagship
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-12 italic text-white"
          >
            SHOP ALL.
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <p className="max-w-xl text-gray-400 font-medium text-xl leading-relaxed">
              Explore our complete collection of meticulously curated artifacts,
              ranging from high-end electronics to sartorial excellence.
            </p>
            <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 mr-4">
                Status:
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                Full Inventory Live
              </span>
            </div>
          </div>
        </div>
      </section>

      <MarqueeScroll />

      <div id="categories" className="bg-gray-50/50">
        <CategorySection
          onSelectCategory={setSelectedCategory}
          activeCategory={selectedCategory}
        />
      </div>

      <div id="products">
        <ProductGrid
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
}
