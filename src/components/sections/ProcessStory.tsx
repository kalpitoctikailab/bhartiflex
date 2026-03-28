"use client";

import { motion } from "framer-motion";
import { MANUFACTURING_PROCESS } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function ProcessStory() {
  return (
    <section className="bg-surface py-24 pb-32 border-y border-slate-200 overflow-hidden relative">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="label-tag mb-6">Our Process</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black uppercase text-text-primary mb-6 leading-none"
          >
            The Anatomy of <span className="text-primary block sm:inline">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            Every bellows we produce undergoes a methodical, stringent manufacturing process to ensure absolute reliability in the harshest industrial conditions.
          </motion.p>
        </div>

        {/* Alternating Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
          
          <div className="flex flex-col gap-16 md:gap-0">
            {MANUFACTURING_PROCESS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full min-h-[300px]`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24 text-right' : 'md:pl-16 lg:pl-24 text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}
                    >
                      {/* Accent Edge */}
                      <div className={`absolute top-0 bottom-0 ${isEven ? 'right-0' : 'left-0'} w-1.5 bg-primary/20 group-hover:bg-primary transition-colors duration-300`}></div>
                      
                      <div className={`text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 ${isEven ? 'justify-end' : 'justify-start'} flex`}>
                        Phase 0{index + 1}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>

                      <div className={`flex flex-col gap-3 ${isEven ? 'items-end' : 'items-start'}`}>
                        {step.details.map((detail, i) => (
                          <div key={i} className={`flex items-center gap-3 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                            <CheckCircle2 className="text-primary shrink-0" size={18} />
                            <span className="text-sm font-medium text-slate-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="w-14 h-14 border-4 border-primary bg-white text-primary font-heading font-black text-xl hidden md:flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Blank Space / Large Watermark Number for opposite side */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pl-16 lg:pl-24 justify-start' : 'md:pr-16 lg:pr-24 justify-end'} hidden md:flex items-center`}>
                     <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-[10rem] lg:text-[14rem] font-black text-slate-200/50 leading-none tracking-tighter select-none"
                      >
                        0{index + 1}
                     </motion.span>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
