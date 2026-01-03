"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Rossi",
    role: "Architect",
    content:
      "The attention to detail in the ‘Zenith’ watch is unparalleled. I've never experienced curation of this level elsewhere.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Elena Gilbert",
    role: "Visual Designer",
    content:
      "VOGUESTORE isn't just an ecommerce site; it's an inspiration gallery. The products are as beautiful as the platform.",
    rating: 5,
    avatar: "EG",
  },
  {
    name: "Marcus Thorne",
    role: "Tech Lead",
    content:
      "Seamless logistics. My Acoustic Master arrived in Tokyo within 3 days. Impressive engineering and service.",
    rating: 4.9,
    avatar: "MT",
  },
  {
    name: "Sophia Chen",
    role: "Collector",
    content:
      "A definitive destination for unique finds. Their carbon fiber wallet is my daily favorite. Highly recommend.",
    rating: 5,
    avatar: "SC",
  },
];

const PremiumTestimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 border-b border-gray-50 pb-10">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-0.5 w-6 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[9px]">
                The Consensus
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight uppercase">
              Endorsed <br /> By{" "}
              <span className="text-gray-200 italic">Disciples.</span>
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-5xl font-black text-black tracking-tighter italic">
              4.9
            </div>
            <div className="flex flex-col">
              <div className="flex text-blue-600 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">
                Verified
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="bg-gray-50/30 p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between relative group transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative z-10 mb-8">
                <div className="flex text-blue-600 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-2.5 w-2.5 ${
                        j < Math.floor(item.rating)
                          ? "fill-current"
                          : "opacity-20"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-medium text-base leading-relaxed italic tracking-tight">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-gray-100/50">
                <div className="h-12 w-12 bg-black text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg group-hover:bg-blue-600 transition-all duration-500">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-black font-black tracking-tighter text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 font-black uppercase text-[8px] tracking-[0.3em] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;
