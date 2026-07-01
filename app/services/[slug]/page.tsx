import Link from "next/link";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "../../data/services";
import { ArrowLeft, CheckCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Terra Core Innovations`,
    description: service.description,
    keywords: [service.title.toLowerCase(), ...service.details.keyFeatures],
    openGraph: {
      title: service.title,
      description: service.summary,
      type: "website",
      url: `https://terracoreinnovations.com/services/${slug}`,
    },
  };
}

interface Params {
  slug: string;
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-accent hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition mb-8 text-sm sm:text-base"
      >
        <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        Back to Services
      </Link>

      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6">
          <div className="text-accent text-3xl sm:text-5xl flex-shrink-0">
            <service.icon size={40} className="sm:w-12 sm:h-12" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{service.title}</h1>
            <p className="text-base sm:text-lg text-slate-300">{service.summary}</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-12 sm:mb-16 p-4 sm:p-8 rounded-lg border border-white/10 bg-gradient-to-br from-slate-950/50 to-transparent">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Overview</h2>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{service.details.overview}</p>
      </section>

      {/* Key Features */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {service.details.keyFeatures.map((feature) => (
            <div key={feature} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-white/10 hover:border-accent/40 transition">
              <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1 sm:w-5 sm:h-5" />
              <p className="text-slate-200 text-sm sm:text-base">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functionalities */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Functionalities Provided</h2>
        <div className="space-y-6 sm:space-y-8">
          {service.details.functionalities.map((section) => (
            <div
              key={section.category}
              className="p-4 sm:p-6 rounded-lg border border-white/10 hover:border-accent/40 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3 text-slate-200 text-sm sm:text-base">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-12 sm:mb-16 p-4 sm:p-8 rounded-lg border border-white/10 bg-gradient-to-br from-slate-950/50 to-transparent">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {service.details.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 text-accent border border-accent/40 text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {service.details.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2 sm:gap-3 p-4 rounded-lg border border-white/10">
              <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1 sm:w-5 sm:h-5" />
              <p className="text-slate-200 text-sm sm:text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/40 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Ready to Get Started?</h3>
        <p className="text-slate-200 mb-4 sm:mb-6 text-sm sm:text-base">
          Let's discuss how {service.title} can help your business grow.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold text-slate-950 transition hover:bg-accent/90"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}
