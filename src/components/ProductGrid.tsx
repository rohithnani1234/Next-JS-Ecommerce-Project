"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ProductGridProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery?: string;
  limit?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  activeCategory,
  onCategoryChange,
  searchQuery = "",
  limit,
}) => {
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Wristwear",
    "Audio",
    "Home Decor",
    "Lifestyle",
  ];

  return (
    <section className="py-16 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-10 mb-16 border-b border-gray-100 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="h-1 w-10 bg-blue-600 rounded-full" />
                <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                  The Archives
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 leading-[0.8] uppercase"
              >
                {searchQuery
                  ? `Scan.`
                  : activeCategory === "All"
                  ? "Excellence."
                  : activeCategory + "."}
              </motion.h2>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
              <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                {searchQuery
                  ? `Identifying ${filteredProducts.length} artifacts matching your protocol: "${searchQuery}"`
                  : `A meticulous collection of products bridging the gap between digital utility and physical art.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => onCategoryChange(tab)}
                className={`whitespace-nowrap px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 border-2 flex-shrink-0 ${
                  activeCategory === tab && !searchQuery
                    ? "bg-black text-white border-black shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] -translate-y-1"
                    : "bg-white text-gray-400 border-gray-100 hover:border-blue-600/30 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {limit !== undefined && filteredProducts.length > limit && (
          <div className="mt-32 flex justify-center">
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-black text-white px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center space-x-6 shadow-3xl transition-all"
              >
                <span>Full Inventory Access</span>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  ({filteredProducts.length}) →
                </span>
              </motion.button>
            </Link>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center"
          >
            <p className="text-gray-400 text-3xl italic font-black tracking-tighter">
              No artifacts found.
            </p>
            <button
              onClick={() => {
                onCategoryChange("All");
              }}
              className="mt-10 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] hover:underline"
            >
              Reset Protocol
            </button>
          </motion.div>
        )}

        {/* Extraordinary Stats Section */}
        <div className="mt-48 pt-24 border-t border-gray-100 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: "Archival Quality", val: "MASTERPIECE" },
              { label: "Shipping Protocol", val: "GLOBAL ELITE" },
              { label: "Vogue Verified", val: "100% AUTHENTIC" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4 group-hover:text-blue-600 transition-colors">
                  {stat.label}
                </span>
                <span className="text-2xl font-black text-gray-900 tracking-tighter italic">
                  {stat.val}.
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
