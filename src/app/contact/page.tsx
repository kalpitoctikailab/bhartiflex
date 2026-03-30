import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us | SHROFF PROCESS PRODUCTS",
  description: "Get in touch for technical consultation and project quotes.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 bg-surface min-h-[calc(100vh-400px)]">
      <div className="container py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4">
          Contact <span className="text-primary">Us.</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Reach out to our engineering team for custom bellows solutions and quotations.
        </p>
      </div>
      {/* Contact section handles its own internal layout, but we remove py-24 padding to avoid double spacing if we want. Wait, Contact has py-24. That's fine. */}
      <Contact />
    </main>
  );
}
