import Link from "next/link";
import { getServiceBySlug, getAllServiceSlugs } from "../../data/services";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface Params {
  slug: string;
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-accent hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition mb-8"
      >
        <ArrowLeft size={20} />
        Back to Services
      </Link>

      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-accent text-5xl flex-shrink-0">
            <service.icon size={48} />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-xl text-slate-300">{service.summary}</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16 p-8 rounded-lg border border-white/10 bg-gradient-to-br from-slate-950/50 to-transparent">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-slate-200 text-lg leading-relaxed">{service.details.overview}</p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.details.keyFeatures.map((feature) => (
            <div key={feature} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 hover:border-accent/40 transition">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
              <p className="text-slate-200">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functionalities */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Functionalities Provided</h2>
        <div className="space-y-8">
          {service.details.functionalities.map((section) => (
            <div
              key={section.category}
              className="p-6 rounded-lg border border-white/10 hover:border-accent/40 transition"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
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
      <section className="mb-16 p-8 rounded-lg border border-white/10 bg-gradient-to-br from-slate-950/50 to-transparent">
        <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {service.details.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/40 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.details.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg border border-white/10">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
              <p className="text-slate-200">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="p-8 rounded-lg bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/40 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
        <p className="text-slate-200 mb-6">
          Let's discuss how {service.title} can help your business grow.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-lg font-semibold text-slate-950 transition hover:bg-accent/90"
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
