"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statsData = [
  { value: 50, suffix: "+", label: "Years of Trust", desc: "Established in 1974" },
  { value: 500, suffix: "+", label: "Global Clients", desc: "Across diverse sectors" },
  { value: 25, suffix: "+", label: "Countries Served", desc: "Worldwide export presence" },
  { value: 10000, suffix: "+", label: "Custom Bellows", desc: "Manufactured & deployed" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-dark relative">
      <div className="container relative z-10">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white/5 border border-white/10 p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary to-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-4xl lg:text-5xl font-extrabold font-heading text-primary mb-2 flex items-center justify-center">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : "0"}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-1">{stat.label}</h4>
              <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
