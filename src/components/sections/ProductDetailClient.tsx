"use client";

import { useRef, useState } from "react";
import { CheckCircle2, FileDown, PhoneCall } from "lucide-react";
import { PRODUCT_DN_SIZES } from "@/lib/constants";
import ProductEnquiry from "@/components/sections/ProductEnquiry";

interface Product {
  title: string;
  slug: string;
  description: string;
  features: string[];
  size?: string;
  temperature?: string;
}

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [dnSize, setDnSize] = useState("");
  const enquiryRef = useRef<HTMLDivElement>(null);

  function handleSizeChange(size: string) {
    setDnSize(size);
    if (size) {
      setTimeout(() => {
        enquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  return (
    <>
      {/* Right Column */}
      <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-10">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase self-start">
          Hand-Built Engineered Bellow
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-extrabold font-sans text-text-primary mb-6 leading-[1.15] tracking-tight">
          {product.title}
        </h1>

        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 font-sans">
          {product.description}
        </p>

        {/* Size Dropdown — shown only when product has a size range */}
        {product.size && (
          <div className="space-y-2 mb-10">
            <label className="text-sm font-semibold text-slate-600">Select Size (DN)</label>
            <select
              value={dnSize}
              onChange={(e) => handleSizeChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            >
              <option value="">Select DN Size</option>
              {PRODUCT_DN_SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Divider */}
        <div className="w-16 h-1 bg-slate-200 mb-10"></div>

        {/* Feature List */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Technical Specifications
          </h3>
          <ul className="space-y-4">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium font-sans leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Size info text */}
        {product.size && (
          <p className="text-sm font-semibold text-slate-500 mb-10">
            Size: <span className="text-text-primary">{product.size}</span>
            {product.temperature && product.temperature !== "—" && (
              <span className="ml-4">Temperature: <span className="text-text-primary">{product.temperature}</span></span>
            )}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <a
            href="#quote-request"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-gradient hover:opacity-90 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md shadow-primary/20 whitespace-nowrap"
          >
            <FileDown size={18} />
            Request Specs
          </a>
          <a
            href="tel:+919227105232"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-text-primary font-bold py-3.5 px-8 rounded-full transition-all shadow-sm whitespace-nowrap"
          >
            <PhoneCall size={18} className="text-primary" />
            Talk to Sales
          </a>
        </div>
      </div>

      {/* Enquiry Form — receives the selected size from the dropdown above */}
      <div ref={enquiryRef} id="quote-request" className="lg:col-span-12 border-t border-slate-200 mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <ProductEnquiry
          productTitle={product.title}
          productSlug={product.slug}
          selectedDnSize={dnSize}
          onDnSizeChange={setDnSize}
        />
      </div>
    </>
  );
}
