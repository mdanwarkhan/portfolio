import Link from "next/link";
import { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Services | Terra Core Innovations",
  description: "Explore our services including web design, ecommerce development, mobile app development, and custom CRM software solutions.",
  keywords: ["web design", "ecommerce", "mobile app development", "CRM software", "services"],
  openGraph: {
    title: "Services | Terra Core Innovations",
    description: "Professional web and mobile development services",
    type: "website",
    url: "https://terracoreinnovations.com/services",
  },
  alternates: {
    canonical: "https://terracoreinnovations.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Services</h1>
      <p className="text-slate-300 mb-8 sm:mb-12 text-sm sm:text-base">
        Comprehensive solutions for your digital transformation needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            title={s.title}
            summary={s.summary}
            description={s.description}
            icon={<s.icon size={28} className="sm:w-8 sm:h-8" />}
            href={`/services/${s.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
