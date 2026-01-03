"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import MarqueeScroll from "@/components/MarqueeScroll";
import StorySection from "@/components/StorySection";
import CuratedGrid from "@/components/CuratedGrid";
import PremiumTestimonials from "@/components/PremiumTestimonials";
import FeaturedSlider from "@/components/FeaturedSlider";
import CollectionsCarousel from "@/components/CollectionsCarousel";
import Chatbot from "@/components/Chatbot";
import {
  Facebook,
  Twitter,
  Instagram,
  ArrowUpRight,
  ArrowRight,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar onSearch={setSearchQuery} />

      <Hero />

      <MarqueeScroll />

      <CollectionsCarousel />

      <div id="categories">
        <CategorySection
          onSelectCategory={handleCategorySelect}
          activeCategory={selectedCategory}
        />
      </div>

      <FeaturedSlider />

      <CuratedGrid />

      <StorySection />

      <div id="products">
        <ProductGrid
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          limit={10}
        />
      </div>

      <BrandPhilosophy />

      {/* Full Width CTA Banner */}
      <section className="py-12 bg-blue-600 text-white relative overflow-hidden group">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-white/5 skew-x-12"
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Ready to elevate your life?
            </h2>
            <p className="text-blue-100/70 font-bold uppercase tracking-widest text-[10px]">
              Join our elite circle of 25,000+ members worldwide.
            </p>
          </div>
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center space-x-4 shadow-xl shadow-gray-900 ring-2 ring-white/10"
            >
              <span>Initialize Elite Membership</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </div>
      </section>

      <PremiumTestimonials />

      <Footer />

      {/* AI Chatbot */}
      <Chatbot />
    </main>
  );
}

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8 overflow-hidden relative border-t border-gray-100">
      {/* Footer background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-3xl font-black tracking-tighter mb-6 text-black">
              VOGUE
              <span className="text-blue-600 italic">STORE</span>
            </h3>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed font-bold text-sm italic tracking-tight">
              "Excellence isn't an act, it's a habit. We curate the benchmarks
              of modern living."
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2563eb",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-100 border border-gray-200 transition-all shadow-md text-gray-600"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Protocol",
              links: [
                "New Archive",
                "Elite Tier",
                "The Vault",
                "Curator Picks",
                "Future Drops",
              ],
            },
            {
              title: "Assistance",
              links: [
                "Concierge",
                "Logistics",
                "Authenticity",
                "Global Returns",
                "Secure Protocol",
              ],
            },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="font-black text-[9px] uppercase tracking-[0.4em] mb-8 text-blue-600">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 font-bold hover:text-black transition-all text-[10px] uppercase tracking-widest group flex items-center"
                    >
                      <span className="h-px w-0 bg-blue-600 transition-all group-hover:w-3 mr-0 group-hover:mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-black text-[9px] uppercase tracking-[0.4em] mb-8 text-blue-600">
              The Broadcast
            </h4>
            <p className="text-gray-400 text-[10px] mb-6 font-bold leading-relaxed uppercase tracking-widest">
              Join our private directory for priority access to limited series
              and aesthetic insight.
            </p>
            <div className="relative group perspective-1000">
              <input
                type="email"
                placeholder="Secure Email Address"
                className="w-full bg-gray-100 border-2 border-gray-200 rounded-xl py-4 px-6 focus:ring-0 focus:border-blue-600 transition-all font-black text-[10px] text-gray-900 placeholder:text-gray-400 uppercase tracking-widest"
              />
              <button className="absolute right-2 top-2 bg-blue-600 text-white p-2.5 rounded-lg hover:bg-black transition-all shadow-xl active:scale-95">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[8px] font-black text-gray-400 uppercase tracking-[0.5em]">
          <p>© 2024 VOGUESTORE GLOBAL CONSORTIUM. DESIGNED IN MILAN.</p>
          <div className="flex space-x-8">
            {["Legal Protocol", "Privacy Shield", "Data Rights"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
