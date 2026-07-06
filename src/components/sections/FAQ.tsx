"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  variant?: "light" | "dark";
}

export default function FAQ({ 
  title = "Frequently Asked Questions",
  description,
  faqs,
  variant = "light"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bgClass = variant === "dark" ? "bg-dark" : "bg-white";
  const textClass = variant === "dark" ? "text-white" : "text-text-primary";
  const textSecondaryClass = variant === "dark" ? "text-white/70" : "text-text-secondary";

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="container">
        {/* Two Column Layout: 50/50 Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <div className="label-tag mb-4">Support</div>
              {title && (
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase ${textClass} leading-tight mb-6`}>
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
              )}
              {description && (
                <p className={`text-base ${textSecondaryClass} leading-relaxed`}>
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-1 space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-b ${variant === "dark" ? "border-white/10" : "border-slate-200"} last:border-b-0`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <span className={`font-bold text-lg ${textClass} group-hover:text-primary transition-colors`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-primary text-white rotate-45" 
                      : variant === "dark" ? "bg-white/10 text-white/70" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Plus size={18} strokeWidth={2.5} />
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className={`pb-5 pr-12 ${textSecondaryClass} leading-relaxed`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
