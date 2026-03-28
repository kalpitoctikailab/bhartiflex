"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
                Let's Build <span className="text-primary">Together.</span>
              </h2>
              <p className="text-lg text-text-secondary pr-4">
                Have a challenging project? Our engineering team is ready to analyze your requirements and provide custom solutions.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold mb-1">Global Headquarters</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold mb-1">Direct Line</h4>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-text-secondary text-sm hover:text-primary transition-colors">{COMPANY_DETAILS.phone}</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold mb-1">Email Support</h4>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-text-secondary text-sm hover:text-primary transition-colors">{COMPANY_DETAILS.email}</a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel p-8 md:p-10 shadow-lg relative z-10">
              <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">Request Technical Specs</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Corporate Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Project Requirements</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Describe your operating conditions, temperature, pressure, etc..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Soft decorative background shape behind form */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 rounded-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
