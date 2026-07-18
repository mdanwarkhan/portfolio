import Link from "next/link";
import { Metadata } from "next";
import AnimatedWord from "./components/AnimatedWord";
import { products } from "./data/products";
import FAQAccordion from "./components/FAQAccordion";

export const metadata: Metadata = {
  title: "Terra Core Innovations | Software Agency & Technical Recruitment",
  description: "Terra Core Innovations delivers software development, digital solutions and technical recruitment — from DevOps and Cloud to SAP and engineering teams.",
  keywords: ["web design", "web development", "mobile app", "ecommerce", "CRM", "software agency", "recruitment", "hiring"],
};

export default function Home() {
  const partnerLogos = [
    { name: "Collabera", initials: "CB", color: "#1F73FF" },
    { name: "Noventiq", initials: "NV", color: "#FF6B00" },
    { name: "Agamin", initials: "AG", color: "#00A651" },
    { name: "Ascendion", initials: "AS", color: "#0066CC" },
    { name: "Peerisland", initials: "PI", color: "#FF1493" },
    { name: "EXL", initials: "EX", color: "#00539B" },
    { name: "Sony", initials: "SN", color: "#000000" },
    { name: "HCL", initials: "HC", color: "#0066B2" },
    { name: "Quest Global", initials: "QG", color: "#E31E24" },
  ];

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
              Building <AnimatedWord /> and recruiting top technical talent — from DevOps to SAP.
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

      <section className="relative mt-8 sm:mt-12 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-yellow-500/10 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="partner-bg-grid">
            {partnerLogos.map((partner) => (
              <span key={partner.name} className="partner-bg-logo" style={{ color: partner.color }}>
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">Recruitment Partners</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Trusted by leading technical teams</h2>
              <p className="mt-3 max-w-2xl text-slate-300">We recruit for enterprise and growth-stage teams alike, partnering with organizations like Collabera, Noventiq, HCL, Quest Global, Sony, and more.</p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 px-4 py-3 border border-white/5 text-sm text-slate-300 inline-flex items-center justify-center">
              <span className="animate-partner-highlight">Explore top hiring partners</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-4">
            <div className="partner-marquee">
              <div className="partner-track">
                {partnerLogos.concat(partnerLogos).map((partner, idx) => (
                  <div key={`${partner.name}-${idx}`} className="partner-logo rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-5 text-center text-sm font-semibold text-white shadow-[0_14px_40px_-24px_rgba(0,0,0,0.65)]">
                    <div className="partner-icon" style={{ backgroundColor: partner.color }}>
                      {partner.initials}
                    </div>
                    <span>{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-8 sm:p-12 shadow-xl shadow-blue-500/5 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400 mb-4">Looking to Hire?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Build Your Dream Team Fast</h2>
          <p className="text-slate-300 mb-8 text-base sm:text-lg">Connect with top-tier technical talent across DevOps, Cloud, SAP, Frontend, Backend, and more. Our recruitment experts handle the entire process — sourcing, screening, interviews, and onboarding.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?tab=recruitment" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold">
              Start Hiring Now
            </Link>
            <Link href="/recruitment" className="btn-ghost text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Learn More
            </Link>
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

      <section className="mt-12 sm:mt-16 rounded-3xl border border-white/10 bg-slate-950/50 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Ready to get started?</h2>
        <p className="text-slate-300 mb-8 text-sm sm:text-base">Whether you need custom software development or top technical talent, we're here to help.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?tab=project" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3">
            Project Inquiry
          </Link>
          <Link href="/contact?tab=recruitment" className="btn-ghost text-sm sm:text-base px-6 sm:px-8 py-3">
            Start Hiring
          </Link>
        </div>
      </section>
    </div>
  );
}
