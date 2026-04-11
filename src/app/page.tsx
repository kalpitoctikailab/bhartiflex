import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import GlobalReach from "@/components/sections/GlobalReach";
import CTASection from "@/components/sections/CTASection";
import TrustBar, { HOME_INDUSTRY_SECTORS } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar labels={HOME_INDUSTRY_SECTORS} />
      <FeaturedProducts />
      <GlobalReach />
      <CTASection />
    </>
  );
}
