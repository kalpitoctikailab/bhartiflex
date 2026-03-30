"use client";
import { motion } from "framer-motion";
import { NAV_LINKS, COMPANY_DETAILS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Menu, X, Hexagon, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home unscrolled: white type + gradient over dark hero. Other pages unscrolled: dark type, no gradient.
  // Scrolled anywhere: dark bar + white type (same as home).
  const useLightNavText = isScrolled || isHome;
  const textColor = useLightNavText ? "text-white" : "text-text-primary";
  const textMutedColor = useLightNavText ? "text-white/80" : "text-text-secondary";
  const logoTextColor = useLightNavText ? "text-white" : "text-text-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-6"
      )}
    >
      {isHome && !isScrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/45 to-transparent"
        />
      )}
      <div className="container relative z-10 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Hexagon className="w-8 h-8 text-primary transition-colors duration-300" strokeWidth={1.5} />
          <span
            className={clsx(
              "font-heading font-extrabold tracking-tight transition-colors duration-300",
              "text-lg sm:text-xl lg:text-2xl",
              logoTextColor
            )}
          >
            <span className="text-primary">SHROFF</span>{" "}
            <span className={clsx(useLightNavText ? "text-white/85" : "text-text-secondary")}>
              PROCESS
            </span>{" "}
            <span className={clsx(useLightNavText ? "text-white" : "text-text-primary")}>PRODUCTS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-semibold transition-colors relative group uppercase tracking-wide",
                textMutedColor,
                "hover:text-primary"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className={clsx(
              "flex items-center gap-2 transition-colors text-sm font-medium",
              useLightNavText ? "text-white/70 hover:text-white" : "text-text-secondary hover:text-primary"
            )}
          >
            <Phone size={14} className="text-primary" />
            {COMPANY_DETAILS.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-dark rounded-none transition-all duration-300 uppercase tracking-wide group"
          >
            GET IN TOUCH
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={clsx("md:hidden p-2 transition-colors", textColor)}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="relative z-10 md:hidden overflow-hidden bg-dark/98 backdrop-blur-xl border-t border-white/10"
      >
        <div className="container py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white/80 hover:text-white py-2 border-b border-white/10 uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center px-6 py-3 text-sm font-bold text-white bg-primary uppercase tracking-wide"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
