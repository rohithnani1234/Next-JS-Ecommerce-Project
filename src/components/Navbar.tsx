"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } =
    useCart();
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      if (onSearch) onSearch(val);
    }, 400);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl border-gray-100 py-3 md:py-4 shadow-xl shadow-black/5"
            : "bg-white/50 backdrop-blur-md border-transparent py-4 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4 sm:px-6 md:px-8">
          {/* Logo - Hidden when search is wide on smaller desktops */}
          <Link
            href="/"
            className={cn(
              "text-xl sm:text-2xl md:text-3xl font-black tracking-tighter transition-all duration-300 whitespace-nowrap",
              isScrolled ? "text-black" : "text-black"
            )}
          >
            VOGUE<span className="text-blue-600 italic">STORE</span>
          </Link>

          {/* Desktop Nav - Hidden when search active */}
          <AnimatePresence>
            {!isSearchActive && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="hidden lg:flex items-center space-x-8"
              >
                {[
                  "Shop",
                  "New Arrivals",
                  "Men",
                  "Women",
                  "Electronics",
                  "Lifestyle",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === "Shop") {
                        window.location.href = "/shop";
                        return;
                      }
                      if (onSearch) onSearch(item);
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "text-[11px] font-black uppercase tracking-[0.4em] transition-all relative group",
                      isScrolled
                        ? "text-black hover:text-blue-600"
                        : "text-black/70 hover:text-black"
                    )}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions & Transformative Search */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <motion.div
              animate={{
                width: isSearchActive
                  ? window.innerWidth > 1024
                    ? "400px"
                    : "280px"
                  : "40px",
              }}
              className={cn(
                "relative flex items-center rounded-full transition-all duration-500 overflow-hidden h-10",
                isSearchActive
                  ? isScrolled
                    ? "bg-gray-100 border-gray-200 shadow-inner"
                    : "bg-gray-50 border-gray-100 backdrop-blur-md"
                  : isScrolled
                  ? "hover:bg-gray-50"
                  : "hover:bg-gray-50/50"
              )}
            >
              <button
                onClick={() => setIsSearchActive(!isSearchActive)}
                className={cn(
                  "absolute left-0 w-10 h-10 flex items-center justify-center z-10 transition-colors",
                  isSearchActive
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-black"
                    : "text-black"
                )}
              >
                <Search className="h-4 w-4" />
              </button>

              <input
                ref={searchInputRef}
                type="text"
                value={searchVal}
                onChange={handleSearchChange}
                onBlur={() => !searchVal && setIsSearchActive(false)}
                placeholder="Protocol Search..."
                className={cn(
                  "bg-transparent border-none focus:ring-0 pl-12 pr-10 text-[11px] font-bold w-full outline-none transition-opacity duration-300",
                  !isSearchActive && "opacity-0",
                  isScrolled
                    ? "text-black placeholder:text-gray-400"
                    : "text-black placeholder:text-gray-400"
                )}
              />

              {isSearchActive && searchVal && (
                <button
                  onClick={() => {
                    setSearchVal("");
                    if (onSearch) onSearch("");
                  }}
                  className={cn(
                    "absolute right-2 p-1 rounded-full transition-colors",
                    isScrolled
                      ? "text-gray-400 hover:text-black"
                      : "text-gray-400 hover:text-black"
                  )}
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </motion.div>

            <div className="flex items-center space-x-1 md:space-x-2">
              <Link
                href="/profile"
                className={cn(
                  "p-3 rounded-full transition-all hidden md:flex",
                  isScrolled
                    ? "text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                    : "text-black hover:bg-gray-50 hover:text-blue-600"
                )}
              >
                <User className="h-5 w-5" />
              </Link>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className={cn(
                "p-3 rounded-full transition-all relative shadow-xl active:scale-95 ml-2",
                isScrolled
                  ? "bg-gray-900 text-white hover:bg-blue-600 shadow-gray-200"
                  : "bg-black text-white hover:bg-blue-600 shadow-black/20"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce-short">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={cn(
                  "flex flex-col gap-1.5 transition-all text-black",
                  isMobileMenuOpen ? "gap-0" : ""
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Global Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[70px] left-0 right-0 h-24 bg-white/95 backdrop-blur-xl z-[80] flex items-center justify-center border-b border-gray-100 shadow-xl"
            >
              <div className="flex flex-row items-center justify-center gap-8 md:gap-16 px-6 w-full">
                {[
                  { label: "Home", href: "/" },
                  { label: "Explore", href: "/explore" },
                  { label: "Profile", href: "/profile" },
                  { label: "Cart", href: "/cart" },
                  { label: "Checkout", href: "/checkout" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-[0.25em] hover:text-blue-600 transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-full md:max-w-md bg-white z-[101] shadow-2xl flex flex-col transition-colors duration-500"
            >
              <div className="p-6 sm:p-8 md:p-10 border-b border-gray-100 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-900">
                    Private Bag
                  </h2>
                  <p className="text-gray-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] mt-2">
                    {totalItems} artifacts identified
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="h-12 w-12 flex flex-shrink-0 items-center justify-center hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 sm:space-y-10 md:space-y-12 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-10 italic">
                    <div className="h-40 w-40 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner">
                      <ShoppingCart className="h-16 w-16 text-gray-200" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-900 font-black text-xl tracking-tighter">
                        Your archive is empty.
                      </p>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
                        Discover our collection to add your first artifact.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-black text-white px-12 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl"
                    >
                      Browse Gallery
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 sm:gap-6 md:gap-8 group"
                    >
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 bg-gray-50 rounded-[2rem] overflow-hidden flex-shrink-0 border border-gray-100 transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover p-2 sm:p-3 rounded-[2rem]"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1 min-w-0">
                        <div>
                          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1 sm:mb-2">
                            {item.category}
                          </p>
                          <h3 className="font-black text-gray-900 text-sm sm:text-base md:text-lg leading-tight mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors tracking-tighter line-clamp-2">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-gray-100 rounded-2xl p-1 border border-gray-200">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all font-black text-gray-400 hover:text-black text-sm"
                            >
                              —
                            </button>
                            <span className="text-xs sm:text-sm font-black w-4 text-center text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all font-black text-gray-400 hover:text-black text-sm"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-black text-gray-900 text-base sm:text-lg md:text-lg tracking-tighter">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 sm:p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all self-start flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 sm:p-8 md:p-10 bg-gray-50 border-t border-gray-100 space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                      <span>Valuation</span>
                      <span className="text-gray-900">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                      <span>Logistics</span>
                      <span className="text-blue-600 font-black italic">
                        Archival Delivery
                      </span>
                    </div>
                    <div className="h-px bg-gray-200 my-4 sm:my-6" />
                    <div className="flex justify-between items-end gap-2">
                      <span className="text-lg sm:text-xl font-black tracking-tighter text-gray-900">
                        Total Capital
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-black text-white py-5 sm:py-6 md:py-7 rounded-[2rem] font-black text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-3xl active:scale-[0.98]">
                    Secure Archival Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
