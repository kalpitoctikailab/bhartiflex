import { PRODUCTS_CATALOG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

export const metadata = {
  title: "Product Catalog | SHROFF PROCESS PRODUCTS",
  description:
    "Browse our comprehensive catalog of hand-built rubber expansion bellows, split retainer rings, and custom configurations.",
};

export default function ProductsPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4">
            Industrial <span className="text-primary">Solutions.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore our complete range of hand-built, extreme-condition
            expansion joints and custom mechanical bellows.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container py-20 pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS_CATALOG.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.slug}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative w-full ">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-primary shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Box size={20} />
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="font-bold text-text-primary text-lg mb-2 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide font-bold text-slate-400 group-hover:text-primary transition-colors">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
