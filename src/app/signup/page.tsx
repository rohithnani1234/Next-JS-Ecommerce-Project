"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Account initialization successful.");
  };

  return (
    <div className="h-screen w-full bg-white text-gray-900 flex flex-col justify-center items-center px-6 relative overflow-hidden selection:bg-blue-500/30">
      {/* Editorial Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] text-[25vw] font-black text-gray-100 select-none leading-none rotate-12 uppercase">
          Elite
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[400px] z-10"
      >
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-10 group">
            <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-blue-500 transition-colors">
              VOGUE
            </span>
            <span className="text-2xl font-black tracking-tighter text-blue-600 italic">
              STORE
            </span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-[0.85] text-gray-900 text-center">
            JOIN THE <br />{" "}
            <span className="text-blue-600 italic uppercase">Curation.</span>
          </h1>
          <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px]">
            New Account Initiation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-px rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl">
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="FULL NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50/50 py-6 pl-16 pr-8 focus:bg-white transition-all font-black text-[10px] tracking-[0.3em] outline-none border-b border-gray-100 placeholder:text-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50/50 py-6 pl-16 pr-8 focus:bg-white transition-all font-black text-[10px] tracking-[0.3em] outline-none border-b border-gray-100 placeholder:text-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="password"
                placeholder="SECURE PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50/50 py-6 pl-16 pr-8 focus:bg-white transition-all font-black text-[10px] tracking-[0.3em] outline-none placeholder:text-gray-300 text-gray-900"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-8 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.5em] flex items-center justify-center space-x-6 hover:bg-black transition-all mt-8 active:scale-95 shadow-2xl shadow-blue-500/20"
          >
            <span>Initialize Account</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-16 flex flex-col items-center space-y-10">
          <div className="flex items-center w-full">
            <div className="h-px bg-gray-100 flex-grow" />
            <span className="px-6 text-[9px] font-black text-gray-300 tracking-[0.4em] uppercase">
              Identity Link
            </span>
            <div className="h-px bg-gray-100 flex-grow" />
          </div>

          <button className="flex items-center space-x-4 text-gray-400 hover:text-black transition-all transform hover:scale-105 group">
            <Github className="h-5 w-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              GitHub Protocol
            </span>
          </button>

          <p className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-black transition-colors underline underline-offset-8 ml-2"
            >
              Login Here
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Decorative Fixed Info */}
      <div className="absolute bottom-12 right-12 flex flex-col items-end space-y-2 opacity-30">
        <span className="text-[10px] font-black tracking-[0.5em] text-gray-900">
          V.STORE
        </span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-gray-400 uppercase">
          Global Initiation • V1.4
        </span>
      </div>
      <div className="absolute bottom-12 left-12 text-[8px] font-bold text-gray-300 uppercase tracking-[0.5em] opacity-30">
        Secured by Consortium
      </div>
    </div>
  );
};

export default SignupPage;
