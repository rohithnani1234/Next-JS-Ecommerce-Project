"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface CollectionItem {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Structural Echo",
    category: "Architecture",
    image: "/images/architectural_structure_monochrome_blue_1767430771271.png",
    year: "2024",
  },
  {
    id: 2,
    title: "Midnight Weave",
    category: "Textile",
    image: "/images/high_fashion_minimalist_garment_1767430787841.png",
    year: "2024",
  },
  {
    id: 3,
    title: "Liquid Chrome",
    category: "Sculpture",
    image: "/images/futuristic_metallic_sculpture_1767430806259.png",
    year: "2025",
  },
  {
    id: 4,
    title: "Glass Interface",
    category: "Tech",
    image:
      "/images/futuristic_transparent_smartphone_interface_1767430886714.png",
    year: "2025",
  },
  {
    id: 5,
    title: "Optic Nerve",
    category: "Accessory",
    image: "/images/luxury_smart_eyewear_blue_tint_1767430903185.png",
    year: "2025",
  },
];

const CollectionsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-black text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row items-end justify-between relative z-10">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-0.5 w-6 bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Visual Archives
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase">
            Curated <br />{" "}
            <span className="text-gray-500 italic">Visions.</span>
          </h2>
        </div>

        <div className="flex space-x-4 mt-8 md:mt-0">
          <button
            onClick={() => scroll("left")}
            className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95 group"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 group"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto pb-12 px-6 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative flex-shrink-0 snap-center group cursor-ne-resize"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-blue-600/50 transition-colors duration-500">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-6 left-6 flex justify-between items-start w-[calc(100%-3rem)]">
                <span className="text-[9px] font-black bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/10">
                  {item.year}
                </span>
                <button className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="absolute bottom-8 left-8">
                <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[9px] mb-2">
                  {item.category}
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Call to action card */}
        <div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative flex-shrink-0 snap-center flex items-center justify-center">
          <div className="text-center group cursor-pointer">
            <div className="h-24 w-24 rounded-full border border-white/20 flex items-center justify-center mb-6 mx-auto group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ChevronRight className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white/50 group-hover:text-white transition-colors">
              View Full <br /> Gallery
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsCarousel;
