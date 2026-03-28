"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="bg-surface py-24 md:py-32 relative overflow-visible border-t border-slate-200">
      <div className="container px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
        {/* Section heading above the card */}
        <div className="text-center mb-48">
          <div className="label-tag mb-4 justify-center">Client Voices</div>
          <h2 className="text-5xl md:text-6xl font-heading font-black uppercase text-text-primary leading-none">
            What Clients <span className="text-primary">Say.</span>
          </h2>
        </div>

        {/* Main Box */}
        <div className="bg-white relative rounded-none md:rounded-3xl shadow-sm border border-slate-100">
          {/* Subtle Geometric Graphic watermark */}
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-40 rounded-l-4xl hidden md:block z-0">
            <div className="w-[400px] h-[150%] bg-slate-50 -rotate-12 transform -translate-x-32 -translate-y-12 shrink-0 border-r border-slate-100"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-stretch relative z-10 w-full min-h-[400px] lg:min-h-[450px]"
            >
              {/* Left Side: Cutout Overflow Portrait */}
              <div className="w-full md:w-5/12 relative h-[280px] sm:h-[350px] md:h-auto shrink-0 flex items-end justify-center">
                {/* 
                  The portrait sits anchored to the bottom. It visually overflows the top of the box.
                  Since we are receiving solid white background JPEGs, we mix-blend-multiply on the white background 
                  so the picture's white background perfectly disappears, turning it into a flawless cutout PNG simulation.
                */}
                <div className="absolute bottom-0 w-[90%] md:w-[130%] h-[120%] md:h-[130%] md:-left-8 lg:-left-16 mix-blend-multiply flex items-end justify-center pointer-events-none z-20">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-contain object-bottom select-none pointer-events-none"
                    sizes="(max-width: 768px) 300px, 400px"
                    priority
                  />
                </div>
              </div>

              {/* Right Side: Text Array */}
              <div className="w-full md:w-7/12 py-12 md:py-20 pr-8 md:pr-16 pl-8 md:pl-0 flex flex-col justify-center bg-transparent relative z-20">
                {/* Corporate Quote Mark */}
                <Quote
                  className="w-16 h-16 text-slate-100 mb-6 rotate-180 shrink-0"
                  fill="currentColor"
                />

                {/* Heading */}
                <h3 className="text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight mb-6 mt-1">
                  Phenomenal Reliability
                </h3>

                {/* Feedback Text */}
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10 font-medium">
                  "{current.feedback}"
                </p>

                {/* Name / Role */}
                <div className="font-extrabold text-text-primary text-lg lg:text-xl flex flex-wrap items-center gap-2">
                  <span>{current.name}</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-primary">{current.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 md:left-[60%] lg:left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-none transition-all duration-300 ${active === idx ? "bg-primary w-6" : "bg-slate-300 hover:bg-slate-400"}`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
