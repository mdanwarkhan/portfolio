import Link from "next/link";
import { getProductBySlug } from "../../data/products";

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/portfolio" className="btn-ghost">
          Back to portfolio
        </Link>
      </div>
    );
  }

  const hero = product.screenshots?.[0] || "";

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Landing / Hero */}
      <section className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
        {hero && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hero} alt={`${product.title} hero`} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 max-w-2xl">{product.description}</p>
            <div className="mt-4 flex gap-3">
              <Link href="#screenshots" className="btn-primary">
                View Screenshots
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.screenshots.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt={`${product.title} screenshot ${i + 1}`} className="w-full rounded shadow-sm" />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Feature list */}
          <section className="card">
            <h3 className="text-xl font-semibold">Feature List</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-700">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          {/* Architecture overview */}
          <section className="card">
            <h3 className="text-xl font-semibold">Architecture Overview</h3>
            <p className="mt-3 text-sm text-zinc-700">{product.architecture}</p>
          </section>
        </div>

        <aside className="space-y-6">
          {/* Tech stack */}
          <div className="card">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="mt-2 text-sm text-zinc-700">{product.techStack.join(", ")}</div>
          </div>

          {/* Business problem */}
          <div className="card">
            <h3 className="text-xl font-semibold">Business Problem Solved</h3>
            <p className="mt-2 text-sm text-zinc-700">{product.businessProblem}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
