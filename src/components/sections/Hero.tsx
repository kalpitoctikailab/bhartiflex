"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

/** Back = large / top-right; front = smaller / bottom-left overlap (reference collage). */
const HERO_COLLAGE = {
  back: {
    src: "/HeroBanner-1.jpeg",
    alt: "Rubber expansion bellows with flange connections",
  },
  front: {
    src: "/HeroBanner-2.jpeg",
    alt: "Industrial rubber expansion joint detail",
  },
} as const;

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-dark">
      {/* Dark base Background */}
      <div className="absolute inset-0 bg-dark z-0"></div>
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Main Content — Split Layout */}
      <div className="container relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 pt-28 pb-44 lg:pt-32">
        {/* LEFT: Headline & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[42%] xl:w-[43%] shrink-0"
        >
          {/* Accent Label Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em]">
              Precision Engineering Since 1974
            </span>
          </div>

          {/* Massive Heading */}
          <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-heading font-black uppercase leading-[0.9] text-white tracking-tight mb-8">
            Engineering
            <br />
            <span className="text-primary">Beyond</span>
            <br />
            Limits.
          </h1>

          {/* Sub-copy */}
          <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Hand-built Rubber Expansion Bellows &amp; Joints trusted by Tata
            Steel, BHEL, NTPC, and 500+ industrial leaders across 25+ countries.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-sm uppercase tracking-widest transition-all duration-300"
            >
              GET A QUOTE
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/products"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/10"
            >
              OUR PRODUCTS
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: overlapping collage — portrait frames to match vertical product shots (no wide “cinematic” gutters) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[58%] xl:w-[57%] pl-0 lg:pl-4 xl:pl-8"
        >
          <div className="relative mx-auto w-full min-h-[min(96vw,500px)] sm:min-h-[560px] lg:min-h-[min(76vh,760px)] max-w-[min(100%,680px)] lg:max-w-[min(100%,760px)]">
            {/* Large card — top / right; width + portrait aspect (not a low wide box) */}
            <div className="absolute right-0 top-0 sm:top-[2%] z-1 w-[min(82vw,340px)] sm:w-[min(78vw,380px)] lg:w-[min(44vw,440px)] aspect-3/4 max-w-[440px] rounded-[1.75rem] overflow-hidden border border-white/10 bg-dark-2 shadow-2xl shadow-black/40 group">
              <Image
                src={HERO_COLLAGE.back.src}
                alt={HERO_COLLAGE.back.alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 85vw, 440px"
                priority
                loading="eager"
              />
            </div>

            {/* Smaller card — bottom / left, overlaps back */}
            <div className="absolute left-0 bottom-0 sm:bottom-[3%] z-3 w-[min(74vw,300px)] sm:w-[min(70vw,320px)] lg:w-[min(36vw,360px)] aspect-3/4 max-w-[360px] rounded-[1.75rem] overflow-hidden border border-white/10 bg-dark-2 shadow-2xl shadow-black/50 group">
              <Image
                src={HERO_COLLAGE.front.src}
                alt={HERO_COLLAGE.front.alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 75vw, 360px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-36 right-8 z-10 hidden xl:flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce mt-6" />
      </motion.div>
    </section>
  );
}
