"use client";

import { motion } from "framer-motion";

// Coordinates for specific regions and countries mentioned by user
// Using equirectangular projection logic for consistent mapping
const mapPins = [
  { top: "42.5%", left: "69%",   label: "India" },
  { top: "39.5%", left: "71.3%", label: "Nepal" },
  { top: "41.5%", left: "73.3%", label: "Bangladesh" },
  { top: "34.5%", left: "63.3%", label: "Iran" },
  { top: "38.5%", left: "58.3%", label: "Egypt" },
  { top: "37%",   left: "60.3%", label: "Jordan" },
  { top: "53.5%", left: "77.3%", label: "Singapore" },
  { top: "51.5%", left: "76.3%", label: "Malaysia" },
  { top: "49.5%", left: "70.3%", label: "Sri Lanka" },
  { top: "40.5%", left: "63.3%", label: "UAE" },
  { top: "40%",   left: "62.3%", label: "Qatar" },
  { top: "38.5%", left: "61.6%", label: "Kuwait" },
  { top: "41.5%", left: "60.6%", label: "Saudi Arabia" },
  { top: "58%",   left: "57.3%", label: "Africa" },
  { top: "26.5%", left: "55.8%", label: "Europe" },
];

export default function GlobalReach() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
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

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Real World Map SVG */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full relative px-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World map showing Bhartiflex global presence"
              className="w-full h-auto opacity-[0.08]"
              style={{
                filter:
                  "invert(14%) sepia(13%) saturate(1400%) hue-rotate(180deg) brightness(90%) contrast(90%)",
              }}
            />

            {/* Pins positioned absolutely over the map */}
            {mapPins.map((pin, i) => (
              <div
                key={i}
                className="absolute group z-20"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-primary rounded-full relative z-10 cursor-pointer shadow-md hover:scale-125 transition-transform"
                  ></motion.div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-dark text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                    {pin.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}

          </motion.div>
        </div>

        {/* Stats row below map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-center">
          {[
            { val: "25+", lbl: "Countries Served" },
            { val: "Connected", lbl: "Global Network" },
            { val: "500+", lbl: "Industrial Sites" },
            { val: "50+", lbl: "Year Legacy" },
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
