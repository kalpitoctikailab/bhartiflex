"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, Settings, Handshake } from "lucide-react";

const CTAS = [
  {
    title: "Technical Consultation",
    desc: "Speak with our engineers about custom bellow requirements.",
    icon: <Settings className="w-8 h-8" />,
    btnText: "Talk to Expert",
    color: "primary"
  },
  {
    title: "Product Catalog",
    desc: "Download our comprehensive catalog of expansion joints.",
    icon: <FileText className="w-8 h-8" />,
    btnText: "Download PDF",
    color: "secondary"
  },
  {
    title: "Global Partnership",
    desc: "Become an official distributor of Bhartiflex products.",
    icon: <Handshake className="w-8 h-8" />,
    btnText: "Join Network",
    color: "highlight"
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  },
};

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative border-y border-slate-200">
      <div className="container relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-text-primary mb-6"
          >
            Ready to upgrade your <span className="text-primary">systems?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Whether you need standard fittings or custom-engineered solutions, our team is ready to deliver.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6"
        >
          {CTAS.map((cta, i) => {
            const isPrimary = cta.color === "primary";
            
            return (
              <motion.a 
                href={i === 1 ? "/products" : "/contact"}
                key={i}
                variants={itemVariant}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`
                  relative flex flex-col justify-between p-8 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                  shadow-sm hover:shadow-lg transition-all duration-300 border bg-white
                  ${isPrimary ? 'border-primary shadow-primary/10' : 'border-slate-200'}
                  group overflow-hidden
                `}
              >
                {/* Background Hover Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] transition-opacity duration-300 ${isPrimary ? 'bg-primary/10 opacity-100' : 'bg-slate-200 opacity-0 group-hover:opacity-100'}`}></div>
                
                <div className="relative z-10 mb-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                    ${isPrimary ? 'bg-primary text-white shadow-md' : 'bg-slate-50 text-primary border border-slate-100 group-hover:bg-primary/5'}
                  `}>
                    {cta.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {cta.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {cta.desc}
                  </p>
                </div>
                
                <div className={`mt-auto inline-flex items-center gap-2 font-bold relative z-10
                  ${isPrimary ? 'text-primary hover:text-highlight' : 'text-slate-600 hover:text-primary'}
                  transition-colors
                `}>
                  {cta.btnText}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
