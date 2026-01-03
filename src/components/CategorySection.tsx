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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 border-b border-gray-50 pb-10">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="h-0.5 w-6 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Operational Sectors
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-[0.9] uppercase">
              Identify <br /> Your{" "}
              <span className="text-gray-200 italic">Sector.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-base max-w-sm mb-2 leading-relaxed border-l border-gray-100 pl-6">
            "We have mapped the landscape of modern utility into four
            foundational pillars."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className={`group cursor-pointer relative p-8 rounded-[2rem] bg-white border-2 transition-all duration-500 active:scale-95 flex flex-col items-center text-center ${
                activeCategory === cat.name
                  ? "border-black shadow-xl scale-[1.02]"
                  : "border-gray-50 hover:border-blue-600/30 hover:shadow-lg"
              }`}
            >
              <div
                className={`h-16 w-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${
                  activeCategory === cat.name
                    ? "bg-black text-white rotate-[15deg] scale-110 shadow-lg"
                    : "bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12"
                }`}
              >
                <cat.icon className="h-8 w-8" />
              </div>

              <h3
                className={`text-xl font-black tracking-tighter mb-3 transition-all duration-500 uppercase ${
                  activeCategory === cat.name
                    ? "text-black"
                    : "text-gray-300 group-hover:text-blue-600"
                }`}
              >
                {cat.name}.
              </h3>
              <p className="text-gray-400 font-bold text-[9px] uppercase tracking-[0.3em] leading-relaxed max-w-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.desc}
              </p>

              {/* Active Indicator */}
              {activeCategory === cat.name && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-1.5 w-12 bg-blue-600 rounded-full"
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
