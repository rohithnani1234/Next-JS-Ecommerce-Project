"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Check, CreditCard, Truck, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Confirm

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto max-w-6xl">
        <Link
          href="/cart"
          className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] mb-12 text-gray-400 hover:text-black transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Archive</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center font-black ${
                  step >= 1
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                1
              </div>
              <div className="h-px bg-gray-200 flex-1" />
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center font-black ${
                  step >= 2
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                2
              </div>
              <div className="h-px bg-gray-200 flex-1" />
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center font-black ${
                  step >= 3
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                3
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
                    Identity & Logistics
                  </h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Enter details for secure courier dispatch.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="KYLE"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="REECE"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                    placeholder="CLIENT@VOGUESTORE.GLOBAL"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                    placeholder="1010 FIFTH AVENUE"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="10028"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="NEW YORK"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-600 text-white py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl mt-8"
                >
                  Proceed to Authorization
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
                    Protocol Authorization
                  </h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Enter secured transaction credentials.
                  </p>
                </div>

                <div className="p-6 border border-blue-100 bg-blue-50/50 rounded-2xl flex items-start gap-4">
                  <ShieldCheck className="text-blue-600 h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-black text-sm uppercase">
                      Encrypted Transaction
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Your payment data is processed via a 256-bit automated
                      clearing house. No raw data is stored on our servers.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-black bg-white p-4 rounded-xl flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-5 w-5" />
                      <span className="font-bold text-sm uppercase">
                        Credit Card
                      </span>
                    </div>
                    <div className="h-4 w-4 rounded-full bg-black"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Expiry
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-xl py-4 px-4 font-bold text-xs transition-all outline-none"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-100 text-black py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gray-200 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-[2] bg-black text-white py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl"
                  >
                    Authorize Payment
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-20 animate-in zoom-in duration-500 bg-gray-50 rounded-[3rem] border border-gray-100">
                <div className="h-32 w-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30">
                  <Check className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
                  Protocol Successful
                </h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-md mx-auto leading-relaxed mb-12">
                  Your acquisition has been validated. A secure communique with
                  tracking parameters has been dispatched to your email.
                </p>
                <Link href="/">
                  <button className="bg-black text-white px-12 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl">
                    Return to Base
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          {step !== 3 && (
            <div className="bg-gray-50 p-10 rounded-[2.5rem] h-fit border border-gray-100 sticky top-32">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Truck className="h-5 w-5" />
                Manifest Summary
              </h3>

              <div className="space-y-6 max-h-[400px] overflow-y-auto no-scrollbar mb-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-16 w-12 bg-gray-200 rounded-lg relative overflow-hidden flex-shrink-0">
                      {/* Placeholder or real image if imported, using color for now to save imports */}
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="ml-auto font-bold text-xs">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-black uppercase tracking-tighter pt-4 text-black">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
