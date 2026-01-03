"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Authentication successful.");
  };

  return (
    <div className="h-screen w-full bg-[#050505] text-white flex flex-col justify-center items-center px-6 relative overflow-hidden selection:bg-blue-600/30">
      {/* Editorial Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] text-[25vw] font-black text-white/5 select-none leading-none -rotate-12">
          VOGUE
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
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-blue-500 transition-colors">
              VOGUE
            </span>
            <span className="text-2xl font-black tracking-tighter text-blue-600 italic">
              STORE
            </span>
          </Link>
          <h1 className="text-5xl font-black tracking-tighter mb-4 leading-[0.85]">
            MEMBER <br />{" "}
            <span className="text-blue-600 italic">PROTOCOL.</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">
            Authentication Required
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-px rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900/80 py-7 pl-16 pr-8 focus:bg-zinc-800 transition-all font-bold text-[10px] tracking-widest outline-none border-b border-white/5 placeholder:text-zinc-700"
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="password"
                placeholder="ACCESS KEY"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900/80 py-7 pl-16 pr-8 focus:bg-zinc-800 transition-all font-bold text-[10px] tracking-widest outline-none placeholder:text-zinc-700"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-2">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative h-4 w-4">
                <input
                  type="checkbox"
                  className="peer absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                <div className="h-4 w-4 border border-zinc-800 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Keep Session
              </span>
            </label>
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-white transition-colors"
            >
              Recover
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center space-x-4 hover:bg-blue-600 hover:text-white transition-all mt-6 active:scale-95"
          >
            <span>Authorize Access</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center space-y-8">
          <div className="flex items-center w-full">
            <div className="h-px bg-white/5 flex-grow" />
            <span className="px-4 text-[9px] font-bold text-zinc-700 tracking-[0.3em] uppercase">
              External Identity
            </span>
            <div className="h-px bg-white/5 flex-grow" />
          </div>

          <button className="flex items-center space-x-4 text-zinc-500 hover:text-white transition-colors group">
            <Github className="h-5 w-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              GitHub Protocol
            </span>
          </button>

          <p className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]">
            NEW MEMBER?{" "}
            <Link
              href="/signup"
              className="text-white hover:text-blue-600 transition-colors underline underline-offset-4 ml-1"
            >
              INITIALIZE ACCOUNT
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Decorative Fixed Info */}
      <div className="absolute bottom-12 left-12 flex flex-col space-y-2 opacity-20">
        <span className="text-[10px] font-black tracking-[0.5em] text-white">
          V.STORE
        </span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
          Secure Environment
        </span>
      </div>
      <div className="absolute bottom-12 right-12 text-[8px] font-bold text-zinc-500 uppercase tracking-[0.5em] opacity-20">
        © 2024 Consortium
      </div>
    </div>
  );
};

export default LoginPage;
