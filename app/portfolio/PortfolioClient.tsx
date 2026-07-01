"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { products } from "../data/products";

export default function PortfolioClient() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project count</p>
          <p className="mt-4 text-3xl font-semibold">{products.length}</p>
          <p className="mt-3 text-slate-400">Case studies ready to explore.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Business outcomes</p>
          <p className="mt-4 text-3xl font-semibold">Impact-driven</p>
          <p className="mt-3 text-slate-400">Every solution is measured by customer value and operational improvement.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech focus</p>
          <p className="mt-4 text-3xl font-semibold">Web & Mobile</p>
          <p className="mt-3 text-slate-400">Built with modern stacks for speed and scalability.</p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 items-start">
        {products.map((product) => (
          <ProjectCard
            key={product.slug}
            product={product}
            isOpen={openSlug === product.slug}
            onToggle={() => setOpenSlug((current) => (current === product.slug ? null : product.slug))}
          />
        ))}
      </div>
    </div>
  );
}
