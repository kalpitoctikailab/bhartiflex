"use client";

import { COMPANY_DETAILS, NAV_LINKS } from "@/lib/constants";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 border-t border-white/10 relative overflow-hidden text-white/70">
      <div className="container relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <Hexagon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                <span className="text-primary">SHROFF</span>{" "}
                <span className="text-white/85">PROCESS</span>{" "}
                <span className="text-white">PRODUCTS</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              Leading manufacturer, supplier & exporter of Rubber Expansion Bellows and Joints.
            </p>
            <p className="font-mono text-sm tracking-wider text-white/45 uppercase">
              Est. {COMPANY_DETAILS.yearFounded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/55 hover:text-white transition-colors inline-block relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider font-heading">Contact Us</h4>
            <ul className="space-y-4 text-white/55">
              <li>{COMPANY_DETAILS.address}</li>
              <li className="space-y-1">
                <a
                  href={`mailto:${COMPANY_DETAILS.emailPrimary}`}
                  className="block hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.emailDisplayLine1}
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.emailSecondary}`}
                  className="block hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.emailDisplayLine2}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/45 text-sm text-center">
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
