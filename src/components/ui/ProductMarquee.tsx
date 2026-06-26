"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_CATALOG } from "@/lib/constants";

// Only products that have new images
const marqueeProducts = PRODUCTS_CATALOG.filter((p) =>
  p.image.startsWith("/product-images/")
);

// Duplicate for seamless infinite loop
const items = [...marqueeProducts, ...marqueeProducts];

export default function ProductMarquee() {
  return (
    <div className="w-full bg-white border-t border-slate-200 py-12 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {items.map((product, i) => (
            <Link
              key={`${product.slug}-${i}`}
              href={`/products/${product.slug}`}
              className="group shrink-0"
            >
              <div className="w-80 h-80 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
