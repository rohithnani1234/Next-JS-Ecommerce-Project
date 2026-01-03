"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
            Global Database
          </p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
            Explore <br /> <span className="text-gray-200">Everything.</span>
          </h1>

          <div className="relative group">
            <input
              type="text"
              placeholder="Search the archive..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-gray-50 border-2 border-gray-100 p-6 pl-16 rounded-2xl font-black uppercase tracking-widest text-sm focus:outline-none focus:border-black transition-all"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
              <button className="h-10 w-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {["All", "Fashion", "Lifestyle", "Electronics", "Accessories"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-1 ${
                  activeFilter === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <ProductGrid
          limit={50}
          activeCategory={activeFilter}
          searchQuery={query}
          onCategoryChange={setActiveFilter}
          // Passing a prop to hide the default header in ProductGrid to allow this page to control it
          // Assuming we might need to modify ProductGrid later if it forces a header,
          // but for now relying on it being flexible or just rendering below.
        />
      </section>
    </main>
  );
}
