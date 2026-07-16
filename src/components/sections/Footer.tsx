"use client";

import { COMPANY_DETAILS, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 border-t border-white/10 relative overflow-hidden text-white/70">
      <div className="container relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/Bhartiflex-shroff-inline-registered.svg"
                alt="Bhartiflex"
                width={160}
                height={32}
                className="h-17 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              Leading manufacturer, supplier & exporter of Rubber Expansion
              Joints & Bellows.
            </p>
            <p className="font-mono text-sm tracking-wider text-white/45 uppercase mb-4">
              Est. {COMPANY_DETAILS.yearFounded}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/bhartiflex_bellows/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                {/* Instagram SVG Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Bhartiflex_bellows"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                {/* YouTube SVG Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/bhartiflexbellows/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                {/* Facebook SVG Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gradient transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider font-heading">
              Contact Us
            </h4>
            <ul className="space-y-6 text-white/55">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
                <div className="space-y-1">
                  <p className="font-semibold text-white">SHROFF PROCESS PRODUCTS</p>
                  <p className="font-medium text-white/70">Bhartiflex House</p>
                  <p>Sun Phram - Atladra Road</p>
                  <p>Vadodara - 390012, Gujarat Bharat</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary shrink-0 mt-0.5" size={20} />
                <div className="space-y-1">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.phoneSecondaryDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneThird}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.phoneThirdDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-0.5" size={20} />
                <div className="space-y-1">
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailPrimary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.emailDisplayLine1} (Sales Enquiry)
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailSecondary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.emailDisplayLine2} (Technical Enquiry)
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailTertiary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.emailDisplayLine3} (Purchase Enquiry)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/45 text-sm text-center">
            &copy; {new Date().getFullYear()} Bhartiflex. Part of{" "}
            <a 
              href="https://www.shroffprocesspumps.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline"
            >
              Shroff Process Pumps
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
