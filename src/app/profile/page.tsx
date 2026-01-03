"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { formatPrice } from "@/lib/utils";
import { User, Package, Settings, Heart, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center mb-8 sticky top-32">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-600 to-black rounded-full mx-auto mb-6 shadow-xl flex items-center justify-center text-white text-3xl font-black">
                KR
              </div>
              <h2 className="text-xl font-black uppercase tracking-tighter mb-1">
                Kyle Reece
              </h2>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Elite Member • Tier 1
              </p>

              <div className="space-y-2">
                {[
                  { icon: User, label: "Identity Protocol" },
                  { icon: Package, label: "Acquisitions" },
                  { icon: Heart, label: "Wishlist" },
                  { icon: Settings, label: "Configuration" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all text-left group"
                  >
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      {item.label}
                    </span>
                  </button>
                ))}

                <button className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-red-50 text-left group mt-8">
                  <LogOut className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors">
                    Terminate Session
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-0.5 w-8 bg-blue-600" />
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                  Recent Activity
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-8">
                Data <span className="text-gray-300">Log.</span>
              </h1>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((order) => (
                <div
                  key={order}
                  className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h3 className="text-lg font-black uppercase tracking-tighter">
                        Order #88X-{900 + order}
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Dispatch Pending • via SAL Network
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <span className="block text-2xl font-black text-blue-600">
                        {formatPrice(106250)}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        3 Items
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gray-50 w-full mb-6" />

                  <div className="flex gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-16 w-12 bg-gray-100 rounded-lg"
                      />
                    ))}
                    <div className="h-16 w-12 bg-gray-50 rounded-lg flex items-center justify-center font-black text-xs text-gray-300">
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
