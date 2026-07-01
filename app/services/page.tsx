import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            title={s.title}
            summary={s.summary}
            description={s.description}
            icon={<s.icon size={32} />}
            href={`/services/${s.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
