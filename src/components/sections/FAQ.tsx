"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  /** Background color variant */
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
  const borderClass = variant === "dark" ? "border-white/10" : "border-slate-200";

  return (
    <section className={`py-24 ${bgClass} relative overflow-hidden`}>
      <div className="container relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-heading font-black uppercase ${textClass} leading-tight mb-6`}
            >
              {title.split(" ").map((word, i) => {
                // Highlight last word
                const isLast = i === title.split(" ").length - 1;
                return (
                  <span key={i} className={isLast ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </motion.h2>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-lg ${textSecondaryClass}`}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border ${borderClass} rounded-lg overflow-hidden ${
                variant === "dark" ? "bg-white/5" : "bg-surface/50"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors ${
                  variant === "dark" ? "hover:bg-white/10" : "hover:bg-surface"
                }`}
              >
                <span className={`font-bold text-base md:text-lg ${textClass}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  } ${variant === "dark" ? "text-white/70" : "text-text-secondary"}`}
                  size={20}
                />
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
                <div className={`px-6 pb-5 pt-2 ${textSecondaryClass} leading-relaxed`}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
