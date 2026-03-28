"use client";

import { motion, Variants } from "framer-motion";
import { APPLICATIONS } from "@/lib/constants";
import { Zap, FlaskConical, Droplets, Wind, Factory, Cog } from "lucide-react";
import clsx from "clsx";

const iconMap: Record<string, React.ReactNode> = {
  power: <Zap size={36} strokeWidth={1.5} />,
  chem: <FlaskConical size={36} strokeWidth={1.5} />,
  water: <Droplets size={36} strokeWidth={1.5} />,
  hvac: <Wind size={36} strokeWidth={1.5} />,
  factory: <Factory size={36} strokeWidth={1.5} />,
  cog: <Cog size={36} strokeWidth={1.5} />,
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const hexVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function Applications() {
  return (
    <section id="applications" className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6"
          >
            Industrial <span className="text-primary">Applications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Our rubber expansion joints are engineered to perform reliably across a wide spectrum of demanding industrial sectors.
          </motion.p>
        </div>

        {/* CSS Hexagonal Layout Grid for Applications */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {APPLICATIONS.map((app, i) => (
            <motion.div 
              key={i} 
              variants={hexVariant}
              whileHover={{ scale: 1.05 }}
              className={clsx(
                "relative flex flex-col items-center justify-center group cursor-default",
                "w-[260px] h-[300px]" // Dimensions for the hex shape
              )}
            >
              {/* Hexagon Wrapper */}
              <div 
                className="absolute inset-0 bg-white border border-slate-200 transition-colors duration-300 group-hover:bg-primary z-0 shadow-sm group-hover:shadow-md"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              ></div>
              
              {/* Inner Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="text-primary mb-4 group-hover:text-white transition-colors duration-300">
                  {iconMap[app.icon]}
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
                  {app.title}
                </h3>
                <p className="text-sm text-text-secondary group-hover:text-white/90 transition-colors duration-300">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
