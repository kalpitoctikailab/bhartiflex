"use client";

import { COMPANY_DETAILS, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

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
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@Bhartiflex_bellows"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/bhartiflexbellows/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
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
                    {COMPANY_DETAILS.emailDisplayLine1}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailSecondary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.emailDisplayLine2}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailTertiary}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.emailDisplayLine3}
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
