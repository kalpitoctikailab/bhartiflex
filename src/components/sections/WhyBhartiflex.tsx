"use client";

import { motion } from "framer-motion";
import { USPS, CHECKLIST_ITEMS } from "@/lib/constants";
import { Wrench, Ruler, Toolbox, CheckCircle, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench size={32} strokeWidth={1.5} />,
  ruler: <Ruler size={32} strokeWidth={1.5} />,
  tool: <Toolbox size={32} strokeWidth={1.5} />,
};

export default function WhyBhartiflex() {
  return (
    <section className="py-24 bg-white relative border-y border-slate-200">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & USPS */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="label-tag mb-4">Why Choose Us</div>
              <h2 className="text-5xl md:text-6xl font-heading font-black uppercase text-text-primary mb-6 leading-none">
                Why Industry Leaders Choose <span className="text-primary">Bhartiflex.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                With over five decades of engineering expertise, we don&apos;t just manufacture components; we engineer reliability. Our hand-built approach ensures maximum operational safety and longevity.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {USPS.map((usp, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="glass-panel p-6 flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                    {iconMap[usp.icon]}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary leading-snug">{usp.title}</h4>
                  <p className="text-sm text-text-secondary">{usp.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <a href="#about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-highlight transition-colors group/link">
                Learn more about our heritage 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: Feature Checklist Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:ml-auto w-full max-w-md"
          >
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden backdrop-blur-xl bg-slate-50/80">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold font-heading text-text-primary mb-8 border-b border-slate-200 pb-4">
                The Bhartiflex Standard
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {CHECKLIST_ITEMS.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                    <span className="text-text-secondary font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-10 pt-6 border-t border-slate-200">
                <blockquote className="text-sm italic text-slate-500 border-l-2 border-primary pl-4 py-1">
                  &ldquo;Engineered to flex. Built to last.&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
