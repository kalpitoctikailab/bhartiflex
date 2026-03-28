import { PRODUCTS_CATALOG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, FileDown, PhoneCall } from "lucide-react";
import Contact from "@/components/sections/Contact";

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
    title: `${product.title} | Bhartiflex`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

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

        {/* Main Open Layout Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Massive Focus Image */}
          <div className="lg:col-span-7 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center p-8 lg:p-16">
             <Image 
                src={product.image} 
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-8 lg:p-16 mix-blend-multiply drop-shadow-xl"
              />
          </div>

          {/* Right Column: Editorial Typographic Details */}
          <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-10">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase self-start">
              Hand-Built Engineered Bellow
            </div>

            {/* Title - Forced to sans-serif to avoid Space Grotesk futuristic numbers */}
            <h1 className="text-4xl lg:text-5xl font-extrabold font-sans text-text-primary mb-6 leading-[1.15] tracking-tight">
              {product.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 font-sans">
              {product.description}
            </p>

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

            {/* Proper Horizontal Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <a 
                href="#quote-request" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md shadow-primary/20 whitespace-nowrap"
              >
                <FileDown size={18} />
                Request Specs
              </a>
              <a 
                href="tel:+919876543210" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-text-primary font-bold py-3.5 px-8 rounded-full transition-all shadow-sm whitespace-nowrap"
              >
                <PhoneCall size={18} className="text-primary" />
                Talk to Sales
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded Contact / Quote Section at the bottom */}
      <div id="quote-request" className="border-t border-slate-200">
        <Contact />
      </div>

    </main>
  );
}
