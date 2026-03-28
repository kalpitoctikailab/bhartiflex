"use client";

import { PRODUCTS_CATALOG } from "@/lib/constants";
import { ArrowRight, Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  // Take top 3 for the home page showcase
  const featured = PRODUCTS_CATALOG.slice(0, 3);

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-t border-slate-200">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase mb-6"
            >
              <Hexagon size={16} className="text-primary" /> Core Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4"
            >
              Engineered for <span className="text-primary">Extremes.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Hand-built expansion joints designed for major pipelines and high-pressure performance.
            </motion.p>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-highlight transition-colors whitespace-nowrap group"
          >
            View Full Catalog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className="group">
              <div className="glass-panel h-full flex flex-col relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Wrapper */}
                <div className="relative w-full h-[280px] bg-slate-100 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>

                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold font-heading text-text-primary mb-3 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed line-clamp-3 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                    Explore Configuration 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
