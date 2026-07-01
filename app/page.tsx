import Link from "next/link";
import { Metadata } from "next";
import AnimatedWord from "./components/AnimatedWord";
import { products } from "./data/products";
import FAQAccordion from "./components/FAQAccordion";

export const metadata: Metadata = {
  title: "Terra Core Innovations | Web Design & Development Agency",
  description: "Terra Core Innovations builds modern websites, mobile apps, ecommerce platforms, and CRM solutions. Transform your business with our expert development team.",
  keywords: ["web design", "web development", "mobile app", "ecommerce", "CRM", "software agency"],
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <section className="relative w-full h-48 sm:h-80 rounded-lg overflow-hidden mb-8 sm:mb-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
          alt="Software agency desk setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 flex items-center justify-center gap-3">
              Terra Core Innovations
              <span className="cursor-blink" aria-hidden="true" />
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Building <AnimatedWord /> together with software, design, and digital strategy.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/portfolio" className="btn-primary text-sm sm:text-base">
                View Work
              </Link>
              <Link href="/services" className="btn-ghost text-sm sm:text-base">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {products.filter((p) => p.slug !== "vehicle-auction-platform").slice(0, 2).map((project) => (
            <div key={project.slug} className="card p-4 sm:p-6 hover:border-accent/40 hover:shadow-lg transition border border-transparent">
              <div className="mb-4">
                <h3 className="font-medium text-base sm:text-lg mb-2 text-white">{project.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button disabled className="btn-primary text-xs sm:text-sm py-2 px-3 opacity-50 cursor-not-allowed" aria-disabled>
                  View Details
                </button>
                {project.downloadUrl && (
                  <a href={project.downloadUrl} download className="btn-ghost text-xs sm:text-sm py-2 px-3 inline-flex items-center gap-2">
                    <span className="inline-block text-base">⬇️</span>
                    Project Overview
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      <section className="mt-12 sm:mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Let's work together</h2>
        <p className="text-slate-300 mb-6 text-sm sm:text-base">Have a project? Tell us about it.</p>
        <Link href="/contact" className="btn-primary text-sm sm:text-base inline-flex">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
