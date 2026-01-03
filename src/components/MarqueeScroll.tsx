"use client";

import React from "react";
import { motion } from "framer-motion";

const MarqueeScroll = () => {
  const words = [
    "PREMIUM",
    "QUALITY",
    "CURATED",
    "VOGUE",
    "EXCLUSIVE",
    "MASTERPIECE",
    "LUXURY",
    "MODERN",
  ];

  return (
    <div className="py-4 bg-white overflow-hidden border-y border-gray-50 select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-12 pr-12"
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <React.Fragment key={i}>
                {words.map((word) => (
                  <div key={word + i} className="flex items-center space-x-12">
                    <span className="text-4xl font-black italic cursor-default transition-all duration-300 text-gray-200/50 hover:text-blue-600 uppercase tracking-tighter">
                      {word}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-blue-600/20" />
                  </div>
                ))}
              </React.Fragment>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeScroll;
