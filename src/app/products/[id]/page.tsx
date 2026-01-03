"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import {
  Star,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedQty, setSelectedQty] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-2xl tracking-tighter uppercase italic">
        Masterpiece not found
      </div>
    );

  const handleAddToCart = () => {
    addToCart(product, selectedQty);
    showToast(`${selectedQty}x ${product.name} added to bag!`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-40 pb-32 bg-gray-50/30">
        <div className="container mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-16">
            <Link href="/" className="hover:text-black transition-colors">
              Archive
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/" className="hover:text-black transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-black">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Image Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-white rounded-[4rem] border border-gray-100 overflow-hidden shadow-2xl shadow-gray-200/40 group"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover p-8 rounded-[5rem] transition-transform duration-1000 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 to-transparent pointer-events-none" />
              </motion.div>
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-white rounded-3xl border border-gray-100 hover:border-black cursor-pointer transition-all duration-500 shadow-sm overflow-hidden group"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110"
                      sizes="10vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-12">
                <span className="bg-blue-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.3em] mb-8 inline-block shadow-xl shadow-blue-100">
                  {product.category}
                </span>
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.9]">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-8 mb-10 pb-10 border-b border-gray-100">
                  <div className="flex items-center bg-gray-900 text-white px-4 py-1.5 rounded-full space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-black text-xs">{product.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-black text-xs uppercase tracking-widest">
                      {product.reviews}
                    </span>
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-bold font-mono">
                      Verified Reviews
                    </span>
                  </div>
                </div>
                <div className="flex items-end space-x-8">
                  <span className="text-6xl font-black text-gray-900 tracking-tighter">
                    {formatPrice(product.price)}
                  </span>
                  <div className="flex flex-col mb-1 order-last">
                    <span className="text-gray-300 line-through text-lg font-bold italic">
                      {formatPrice(product.price * 1.25)}
                    </span>
                    <span className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em]">
                      Tier One Pricing
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm mb-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100%] transition-all duration-700 group-hover:w-40 group-hover:h-40" />
                <h4 className="font-black text-gray-900 mb-6 text-xs uppercase tracking-widest relative z-10">
                  Product Narrative
                </h4>
                <p className="text-gray-400 text-lg font-medium leading-relaxed relative z-10">
                  {product.description} A definitive statement in contemporary
                  design, this piece encapsulates the vision of forward-thinking
                  creators. Crafted with uncompromising attention to detail and
                  curated for those who demand the extraordinary.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8">
                  Quantity selection
                </h4>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center border-2 border-gray-100 rounded-2xl bg-white p-2 shadow-sm">
                    <button
                      onClick={() =>
                        setSelectedQty(Math.max(1, selectedQty - 1))
                      }
                      className="w-14 h-14 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-all font-black text-xl text-gray-300 hover:text-black"
                    >
                      —
                    </button>
                    <span className="w-20 text-center font-black text-3xl text-gray-900">
                      {selectedQty}
                    </span>
                    <button
                      onClick={() => setSelectedQty(selectedQty + 1)}
                      className="w-14 h-14 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-all font-black text-xl text-gray-300 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-1">
                      Availability Status
                    </span>
                    <span className="text-gray-400 font-bold text-xs">
                      Exclusively 8 remain in vault
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button
                  onClick={handleAddToCart}
                  className="flex-[2] bg-black text-white px-12 py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-6 hover:bg-blue-600 transition-all shadow-2xl shadow-gray-200 group active:scale-[0.98]"
                >
                  <ShoppingCart className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span>Finalize Purchase</span>
                </button>
                <button className="flex-1 border-2 border-gray-100 bg-white rounded-[2rem] flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all group">
                  <Heart className="h-6 w-6 text-gray-300 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
                {[
                  {
                    icon: Truck,
                    title: "Expedited Service",
                    desc: "Complimentary global logistics.",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: RotateCcw,
                    title: "Private Returns",
                    desc: "30-day discrete window.",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Tier One Protection",
                    desc: "Lifetime authenticity card.",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                  >
                    <div
                      className={`h-14 w-14 ${item.bg} rounded-[1.25rem] flex items-center justify-center mb-5 shadow-sm`}
                    >
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-2">
                      {item.title}
                    </span>
                    <p className="text-gray-400 font-bold text-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
