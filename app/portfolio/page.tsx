import ProjectCard from "../components/ProjectCard";
import { products } from "../data/products";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <ProjectCard key={p.slug} title={p.title} description={p.description} link={`/portfolio/${p.slug}`} />
        ))}
      </div>
    </div>
  );
}
