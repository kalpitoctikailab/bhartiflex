"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

export default function TrustBar() {
  const repeatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 bg-dark overflow-hidden border-y border-white/5">
      <div className="container mb-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase"
        >
          {"// Trusted by Industry Leaders Worldwide"}
        </motion.p>
      </div>

      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-16 items-center px-8 w-max"
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-300 group"
            >
              <span className="text-xl md:text-2xl font-black font-heading text-white group-hover:text-primary tracking-widest uppercase transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Dark gradient edge masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-dark to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-dark to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
