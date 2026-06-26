import { PRODUCTS_CATALOG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProductDetailClient from "@/components/sections/ProductDetailClient";
import ProductMarquee from "@/components/ui/ProductMarquee";

// Generate SSG routes for all products
export async function generateStaticParams() {
  return PRODUCTS_CATALOG.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === resolvedParams.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | SHROFF PROCESS PRODUCTS`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const detailHeroSrc = product.detailImage ?? product.image;

  return (
    <main className="pt-32 bg-white min-h-screen">
      <div className="container pb-20">

        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Main Grid — image left, right column + form handled by client component */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Image */}
          <div className="lg:col-span-7 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center p-8 lg:p-16">
            <Image
              src={detailHeroSrc}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain p-8 lg:p-16 mix-blend-multiply drop-shadow-xl"
            />
          </div>

          {/* Right Column + Enquiry Form (client) */}
          <ProductDetailClient
            product={{
              title: product.title,
              slug: product.slug,
              description: product.description,
              features: product.features,
              size: "size" in product ? product.size : undefined,
              temperature: "temperature" in product ? product.temperature : undefined,
            }}
          />

        </div>
      </div>

      {/* Product image marquee */}
      <ProductMarquee />
    </main>
  );
}
