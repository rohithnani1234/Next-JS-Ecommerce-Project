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

      <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-0.5 w-8 bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Pending Acquisitions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Your <br /> <span className="text-gray-300">Archive.</span>
            </h1>
          </div>
          <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mt-6 md:mt-0">
            {cart.length} Item{cart.length !== 1 ? "s" : ""} Selected
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 text-gray-300">
              Archive is Empty
            </h2>
            <Link href="/shop">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all">
                Initiate Discovery
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row gap-8 border-b border-gray-50 pb-8 group"
                >
                  <div className="relative w-full md:w-40 aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-2">
                          {item.name}
                        </h3>
                        <p className="font-black text-lg">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                        {item.category} / REF: {item.id.padStart(4, "0")}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center space-x-6 bg-gray-50 rounded-lg p-2 border border-gray-100">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-black text-xs w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-black transition-colors flex items-center space-x-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="hidden md:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 sticky top-32">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-gray-200 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Shipping Protocol</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-black uppercase tracking-tighter mb-8 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-black text-white py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-4 group">
                    <span>Process Order</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
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
