import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Terra Core Innovations",
  description: "Explore digital products, web apps, and mobile experiences built for measurable business impact.",
  keywords: ["portfolio", "case studies", "digital products", "enterprise apps", "mobile apps"],
  openGraph: {
    title: "Portfolio | Terra Core Innovations",
    description: "Business solutions built with modern web and mobile technology.",
    type: "website",
    url: "https://terracoreinnovations.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6">
      <section className="grid gap-8 lg:grid-cols-[1.45fr_1fr] items-start">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Portfolio
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Real business solutions, built for growth.
          </h1>
          <p className="mt-5 text-slate-300 leading-8">
            Discover case studies that blend product strategy, modern engineering, and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Why choose our work</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="rounded-2xl bg-slate-900/80 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Impact focused</p>
                <p className="mt-2">Every project is shaped around business needs, customer value, and measurable ROI.</p>
              </li>
              <li className="rounded-2xl bg-slate-900/80 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Product-first</p>
                <p className="mt-2">We design with usability, speed, and scalability in mind.</p>
              </li>
              <li className="rounded-2xl bg-slate-900/80 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Modern stack</p>
                <p className="mt-2">Built on modern web and mobile technology to keep your product future-ready.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <PortfolioClient />
      </section>
    </div>
  );
}
