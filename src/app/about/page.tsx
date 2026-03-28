import Stats from "@/components/sections/Stats";
import ProcessStory from "@/components/sections/ProcessStory";
import WhyBhartiflex from "@/components/sections/WhyBhartiflex";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About Us | Bhartiflex",
  description: "Learn about the engineering pedigree and 50 years of trust behind Bhartiflex.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 relative bg-white">
      <div className="container py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4">
          Our <span className="text-primary">Pedigree.</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          For over five decades, we have engineered reliability into every hand-built expansion joint leaving our facility. Get to know how we work.
        </p>
      </div>
      <Stats />
      <ProcessStory />
      <WhyBhartiflex />
      <Testimonials />
    </main>
  );
}
