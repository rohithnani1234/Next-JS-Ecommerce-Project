"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { cn, formatPrice } from "@/lib/utils";

import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showToast(`${product.name} added to bag!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(product.id);
      showToast(`${product.name} removed from wishlist.`);
    } else {
      addToWishlist(product);
      showToast(`${product.name} added to wishlist!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
      }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full backdrop-blur-sm"
    >
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-square overflow-hidden bg-gray-50/50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 brightness-[1.02] contrast-[1.02] grayscale-[0.3]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
          {product.isFeatured && (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-xl text-[8px] font-black uppercase tracking-[0.2em] flex items-center">
              <span className="mr-1.5 h-1 w-1 bg-white rounded-full animate-pulse" />
              Elite protocol
            </span>
          )}
          {product.isNew && (
            <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-lg shadow-xl text-[8px] font-black uppercase tracking-[0.2em] border border-gray-100">
              New Arrival
            </span>
          )}
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="absolute top-6 right-6 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-3 z-20">
        <button
          onClick={handleToggleWishlist}
          className={`backdrop-blur-md p-4 rounded-2xl shadow-2xl transition-all duration-300 ${
            isLiked
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/90 text-black hover:bg-black hover:text-white"
          }`}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl hover:bg-black text-black hover:text-white transition-all duration-300"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow text-left">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">
              {product.category}
            </span>
          </div>
          <div className="flex items-center space-x-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
            <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-black text-gray-900">
              {product.rating}
            </span>
          </div>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="block mb-6 group/title"
        >
          <h3 className="text-lg font-black text-gray-900 group-hover/title:text-blue-600 transition-colors mb-3 leading-tight tracking-tighter uppercase">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed font-medium italic">
            {product.description}
          </p>
        </Link>

        <div className="mt-auto">
          <div className="h-px bg-gray-100 w-full mb-6" />
          <div className="flex items-center justify-between">
            <span className="text-xl font-black text-gray-900 tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="group/btn relative bg-black hover:bg-blue-600 text-white px-5 py-4 rounded-2xl transition-all shadow-xl shadow-black/10 flex flex-col items-center justify-center min-w-[100px]"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                Archive
              </span>
              <span className="text-sm font-black leading-none">+</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
