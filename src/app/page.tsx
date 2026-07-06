import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import GlobalReach from "@/components/sections/GlobalReach";
import CTASection from "@/components/sections/CTASection";
import TrustBar, { HOME_INDUSTRY_SECTORS } from "@/components/sections/TrustBar";
import FAQ from "@/components/sections/FAQ";
import { HOME_FAQS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar labels={HOME_INDUSTRY_SECTORS} />
      <FeaturedProducts />
      <GlobalReach />
      <FAQ 
        title="Frequently Asked Questions"
        description="Common questions about our products and services"
        faqs={HOME_FAQS}
        variant="light"
      />
      <CTASection />
    </>
  );
}
