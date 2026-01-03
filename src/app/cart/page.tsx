"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 container mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-end md:gap-10 mb-12 sm:mb-14 md:mb-16 border-b border-gray-100 pb-6 sm:pb-8 md:pb-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="h-0.5 w-6 sm:w-8 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[8px] sm:text-[10px]">
                Pending Acquisitions
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none">
              Your <br /> <span className="text-gray-300">Archive.</span>
            </h1>
          </div>
          <p className="font-bold text-[8px] sm:text-[9px] md:text-xs uppercase tracking-widest text-gray-400">
            {cart.length} Item{cart.length !== 1 ? "s" : ""} Selected
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-6 text-gray-300">
              Archive is Empty
            </h2>
            <Link href="/shop">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all">
                Initiate Discovery
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 border-b border-gray-50 pb-6 sm:pb-8 group"
                >
                  <div className="relative w-full sm:w-32 md:w-40 aspect-square sm:aspect-[3/4] bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-1 sm:py-2 min-w-0">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2 sm:mb-3 md:mb-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter">
                          {item.name}
                        </h3>
                        <p className="font-black text-base sm:text-lg md:text-lg flex-shrink-0">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
                        {item.category} / REF: {item.id.padStart(4, "0")}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 bg-gray-50 rounded-lg p-1.5 sm:p-2 border border-gray-100">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-7 sm:h-8 w-7 sm:w-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Minus className="h-2.5 sm:h-3 w-2.5 sm:w-3" />
                        </button>
                        <span className="font-black text-xs w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-7 sm:h-8 w-7 sm:w-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Plus className="h-2.5 sm:h-3 w-2.5 sm:w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[8px] sm:text-xs font-bold uppercase tracking-widest text-red-500 hover:text-black transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="h-3 sm:h-4 w-3 sm:w-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-gray-100 sticky top-24 sm:top-32">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-6 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex justify-between text-[8px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-[8px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Shipping Protocol</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-[8px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between text-base sm:text-lg font-black uppercase tracking-tighter mb-6 sm:mb-8 pt-3 sm:pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-black text-white py-4 sm:py-5 rounded-lg sm:rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-2 sm:gap-4 group">
                    <span>Process Order</span>
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    Secure AES-256 Encryption Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
