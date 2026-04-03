"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/client-logos/Amul_official_logo.svg", alt: "Amul" },
  { src: "/client-logos/JSW_Group_logo.svg", alt: "JSW" },
  { src: "/client-logos/NTPC_logo.svg", alt: "NTPC" },
  { src: "/client-logos/SAIL_Logo.svg", alt: "SAIL" },
  { src: "/client-logos/Vedanta.svg", alt: "Vedanta" },
  { src: "/client-logos/bhel-logo.svg", alt: "BHEL" },
  { src: "/client-logos/grasim_industries-logo.svg", alt: "Grasim" },
  { src: "/client-logos/hindalco_logo.svg", alt: "Hindalco" },
  { src: "/client-logos/hindustan_zinc_logo.svg", alt: "Hindustan Zinc" },
] as const;

export default function TrustBar() {
  const repeatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 bg-dark overflow-hidden border-y border-white/5">
      <div className="container mb-10 text-center">
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
              key={`${logo.src}-${index}`}
              className="flex items-center justify-center opacity-100 transition-all duration-300 group"
            >
              <div className="relative h-14 md:h-16 lg:h-20 w-[220px] md:w-[220px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  unoptimized
                  className="object-contain object-center"
                />
              </div>
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
