"use client";

import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Each pin has custom leader-line offsets to avoid all overlaps.
// dx/dy = tip of leader line from dot (SVG map units)
// anchor = SVG text-anchor at label position
interface Pin {
  coords: [number, number];
  label: string;
  dx: number;
  dy: number;
  anchor: "middle" | "start" | "end";
}

const mapPins: Pin[] = [
  // ── South Asia (densely packed — fan labels outward) ──
  // India  → right
  { coords: [77.0,  20.0], label: "India",       dx:  26, dy:   0, anchor: "start"  },
  // Nepal  → upper-right (above India label)
  { coords: [84.1,  28.0], label: "Nepal",        dx:  20, dy: -18, anchor: "start"  },
  // Bangladesh → far right, well above Nepal line
  { coords: [90.4,  23.7], label: "Bangladesh",   dx:  26, dy: -22, anchor: "start"  },
  // Sri Lanka → straight down (90°)
  { coords: [80.8,   7.9], label: "Sri Lanka",    dx:   0, dy:  24, anchor: "middle" },

  // ── Southeast Asia ──
  // Thailand → straight up (90°), clear of Bangladesh
  { coords: [100.5, 13.7], label: "Thailand",     dx:   0, dy: -24, anchor: "middle" },
  // Malaysia → right
  { coords: [109.7,  4.2], label: "Malaysia",     dx:  24, dy:   0, anchor: "start"  },
  // Singapore → down
  { coords: [103.8,  1.4], label: "Singapore",    dx:   0, dy:  22, anchor: "middle" },
  // Indonesia → down-right
  { coords: [117.0, -5.0], label: "Indonesia",    dx:  22, dy:  16, anchor: "start"  },
  // Philippines → right
  { coords: [122.0, 13.0], label: "Philippines",  dx:  24, dy:   0, anchor: "start"  },

  // ── Middle East (fan carefully) ──
  // Iran → up (well above the cluster)
  { coords: [53.7,  32.0], label: "Iran",         dx:   0, dy: -24, anchor: "middle" },
  // Azerbaijan → upper-left of Iran
  { coords: [47.7,  40.4], label: "Azerbaijan",   dx: -24, dy: -18, anchor: "end"    },
  // Kuwait → upper-left diagonal (away from Jordan)
  { coords: [47.5,  29.5], label: "Kuwait",       dx: -20, dy: -18, anchor: "end"    },
  // Jordan → straight left (90°), below Kuwait
  { coords: [36.2,  31.0], label: "Jordan",       dx: -28, dy:   0, anchor: "end"    },
  // UAE → right
  { coords: [54.4,  24.5], label: "UAE",          dx:  24, dy:   0, anchor: "start"  },
  // Qatar → down-right (below UAE)
  { coords: [51.2,  25.3], label: "Qatar",        dx:  22, dy:  18, anchor: "start"  },
  // Saudi Arabia → down
  { coords: [45.0,  24.0], label: "Saudi Arabia", dx:   0, dy:  24, anchor: "middle" },

  // ── Africa ──
  // Egypt → left
  { coords: [30.0,  26.0], label: "Egypt",        dx: -20, dy:   0, anchor: "end"    },
  // Kenya → left
  { coords: [37.9,   0.0], label: "Kenya",        dx: -24, dy:   0, anchor: "end"    },
  // Tanzania → down-left
  { coords: [34.9,  -6.0], label: "Tanzania",     dx: -24, dy:  16, anchor: "end"    },

  // ── Europe ──
  { coords: [10.0,  51.0], label: "Europe",       dx:   0, dy: -24, anchor: "middle" },

  // ── Americas ──
  { coords: [-96.0, 60.0], label: "Canada",       dx:   0, dy: -24, anchor: "middle" },
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

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 153, center: [10, 10] }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E5E7EB"
                    stroke="#FFFFFF"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover:   { outline: "none", fill: "#E5E7EB" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {mapPins.map((pin, i) => (
              <Marker key={i} coordinates={pin.coords}>
                {/* Leader line from dot to label */}
                <line
                  x1={0}
                  y1={0}
                  x2={pin.dx}
                  y2={pin.dy}
                  stroke="#E8460A"
                  strokeWidth={0.7}
                  strokeDasharray="2 1.5"
                />

                {/* Dot — rendered on top of line */}
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.04,
                    type: "spring",
                    stiffness: 220,
                  }}
                  r={5}
                  fill="#E8460A"
                  stroke="#FFFFFF"
                  strokeWidth={1.5}
                />

                {/* Country name at tip of leader line */}
                <text
                  x={pin.dx + (pin.anchor === "start" ? 2 : pin.anchor === "end" ? -2 : 0)}
                  y={pin.dy + (pin.dy > 0 ? 5 : pin.dy < 0 ? -3 : 2)}
                  textAnchor={pin.anchor}
                  style={{
                    fontSize: "7px",
                    fontWeight: 700,
                    fill: "#0F172A",
                    fontFamily: "inherit",
                    pointerEvents: "none",
                  }}
                >
                  {pin.label}
                </text>
              </Marker>
            ))}
          </ComposableMap>
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
