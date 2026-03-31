"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";
import { useMemo, useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const canSubmit = useMemo(() => {
    const e = email.trim();
    return firstName.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && requirements.trim().length > 0;
  }, [email, firstName, requirements]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          requirements,
        }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }
      setStatus({ type: "success", message: "Thanks — your inquiry has been sent. We’ll contact you shortly." });
      setFirstName("");
      setLastName("");
      setEmail("");
      setRequirements("");
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
                Let&apos;s Build <span className="text-primary">Together.</span>
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
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors leading-relaxed"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
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
                  <div className="text-text-secondary text-sm leading-relaxed space-y-1">
                    <a
                      href={`mailto:${COMPANY_DETAILS.emailPrimary}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {COMPANY_DETAILS.emailDisplayLine1}
                    </a>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emailSecondary}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {COMPANY_DETAILS.emailDisplayLine2}
                    </a>
                  </div>
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
              
              <form className="space-y-6" onSubmit={onSubmit}>
                {status && (
                  <div
                    className={
                      status.type === "success"
                        ? "rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
                        : "rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    }
                    role={status.type === "error" ? "alert" : "status"}
                  >
                    {status.message}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">First Name</label>
                    <input 
                      type="text" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Last Name</label>
                    <input 
                      type="text" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Corporate Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Project Requirements</label>
                  <textarea 
                    rows={4}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Describe your operating conditions, temperature, pressure, etc..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/60 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  <Send
                    size={18}
                    className={isSubmitting ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"}
                  />
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
