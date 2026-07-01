"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Pin positions calculated for World map.svg (1024×724.04)
// Using approximate lat/lon converted to pixel positions
interface Pin {
  top: string;
  left: string;
  label: string;
}

const mapPins: Pin[] = [
  // Americas
  { top: "40%", left: "22%", label: "Canada" },        // ~60°N, -96°W

  // Europe  
  { top: "48%", left: "55%", label: "Europe" },        // ~52°N, 15°E (Germany)

  // Middle East & Caucasus
  { top: "52%", left: "62%", label: "Azerbaijan" },      // ~40°N, 47°E
  { top: "57.5%", left: "57.5%", label: "Egypt" },           // ~26°N, 30°E
  { top: "57%", left: "59%", label: "Jordan" },        // ~31°N, 36°E
  { top: "56%", left: "62%", label: "Kuwait" },        // ~29°N, 47°E
  { top: "59%", left: "61.5%", label: "Saudi Arabia" },    // ~24°N, 45°E
  { top: "58%", left: "63%", label: "Qatar" },         // ~25°N, 51°E
  { top: "58.5%", left: "64%", label: "UAE" },           // ~24°N, 54°E
  { top: "55%", left: "64%", label: "Iran" },          // ~32°N, 53°E

  // Africa ✓ CORRECT
  { top: "67.5%", left: "59.5%", label: "Kenya" },       // ~0°N, 37°E
  { top: "70%", left: "59%", label: "Tanzania" },        // ~-6°S, 34°E

  // South Asia ✓ ALL CORRECT
  { top: "59%", left: "70%", label: "India" },           // ~20°N, 77°E
  { top: "57%", left: "71.5%", label: "Nepal" },         // ~28°N, 84°E
  { top: "58.5%", left: "73%", label: "Bangladesh" },    // ~23°N, 90°E
  { top: "64%", left: "71%", label: "Sri Lanka" },       // ~8°N, 80°E

  // Southeast Asia ✓ ALL CORRECT
  { top: "63%", left: "76%", label: "Thailand" },        // ~14°N, 100°E
  { top: "67%", left: "79%", label: "Malaysia" },        // ~4°N, 109°E
  { top: "67%", left: "76%", label: "Singapore" },       // ~1°N, 103°E
  { top: "68.5%", left: "81%", label: "Indonesia" },     // ~-5°S, 117°E
  { top: "62.5%", left: "81%", label: "Philippines" },   // ~13°N, 122°E
];

export default function GlobalReach() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-tag mb-4 justify-center">Our Reach</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading font-black uppercase text-text-primary leading-none mb-6"
          >
            Global <span className="text-primary">Footprint.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            A connected network of precision engineering, delivering hand-built
            rubber expansion joints across 25+ countries.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* World Map SVG */}
          <div className="relative w-full">
            <Image
              src="/World map.svg"
              alt="World map showing Bhartiflex global presence"
              width={1024}
              height={724}
              className="w-full h-auto opacity-90"
              priority
            />

            {/* Pins overlaid on map with hover tooltip */}
            {mapPins.map((pin, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + i * 0.04,
                  type: "spring",
                  stiffness: 220,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ top: pin.top, left: pin.left }}
              >
                {/* Dot */}
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full border border-white shadow-md group-hover:scale-125 transition-transform" />
                
                {/* Hover tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-dark text-white text-xs font-semibold whitespace-nowrap rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {pin.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-dark rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-center">
          {[
            { val: "25+",       lbl: "Countries Served" },
            { val: "Connected", lbl: "Global Network" },
            { val: "500+",      lbl: "Industrial Sites" },
            { val: "50+",       lbl: "Year Legacy" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-heading font-black text-4xl text-primary">
                {s.val}
              </span>
              <span className="text-xs uppercase tracking-widest text-text-secondary font-bold mt-1">
                {s.lbl}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
