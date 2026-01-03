"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Watch,
  Smartphone,
  ShoppingBag,
  Home,
  Headphones,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    desc: "Digital utility and high-performance engineering.",
  },
  {
    name: "Fashion",
    icon: ShoppingBag,
    desc: "Archival silhouettes and modern editorial style.",
  },
  {
    name: "Wristwear",
    icon: Watch,
    desc: "Horological benchmarks and timeless prestige.",
  },
  {
    name: "Home Decor",
    icon: Home,
    desc: "Refined living spaces and sculptural utility.",
  },
];

interface CategorySectionProps {
  onSelectCategory: (name: string) => void;
  activeCategory: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-10 mb-12 sm:mb-14 md:mb-16 border-b border-gray-50 pb-6 sm:pb-8 md:pb-10">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
            >
              <div className="h-0.5 w-5 sm:w-6 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[8px] sm:text-[10px]">
                Operational Sectors
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-black leading-[0.9] uppercase">
              Identify <br /> Your{" "}
              <span className="text-gray-200 italic">Sector.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-xs sm:text-sm md:text-base max-w-sm leading-relaxed border-l border-gray-100 pl-4 sm:pl-6">
            "We have mapped the landscape of modern utility into four
            foundational pillars."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              onClick={() => onSelectCategory(cat.name)}
              className={`group cursor-pointer relative p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl bg-white border-2 transition-all duration-500 active:scale-95 flex flex-col items-center text-center ${
                activeCategory === cat.name
                  ? "border-black shadow-xl scale-[1.02]"
                  : "border-gray-50 hover:border-blue-600/30 hover:shadow-lg"
              }`}
            >
              <div
                className={`h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center transition-all duration-500 ${
                  activeCategory === cat.name
                    ? "bg-black text-white rotate-[15deg] scale-110 shadow-lg"
                    : "bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12"
                }`}
              >
                <cat.icon className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8" />
              </div>

              <h3
                className={`text-base sm:text-lg md:text-xl font-black tracking-tighter mb-2 sm:mb-3 transition-all duration-500 uppercase ${
                  activeCategory === cat.name
                    ? "text-black"
                    : "text-gray-300 group-hover:text-blue-600"
                }`}
              >
                {cat.name}.
              </h3>
              <p className="text-gray-400 font-bold text-[8px] sm:text-[9px] uppercase tracking-[0.3em] leading-relaxed max-w-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.desc}
              </p>

              {/* Active Indicator */}
              {activeCategory === cat.name && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 h-1 sm:h-1.5 w-10 sm:w-12 bg-blue-600 rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
