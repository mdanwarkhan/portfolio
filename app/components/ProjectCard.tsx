"use client";

import type { Product } from "../data/products";

type Props = {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ProjectCard({ product, isOpen, onToggle }: Props) {
  return (
    <article className="card p-4 sm:p-6 transition border border-transparent hover:border-accent/40 hover:shadow-lg">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white">{product.title}</h3>
            <p className="mt-2 text-slate-400 text-sm leading-6">{product.description}</p>
          </div>
          <span className="shrink-0 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            {isOpen ? "Hide details" : "View details"}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-5 space-y-5 text-sm leading-6 text-slate-300">
          <div>
            <h4 className="text-sm font-semibold text-slate-100">Business challenge</h4>
            <p className="mt-2 text-slate-300">{product.businessProblem}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100">Solution approach</h4>
            <p className="mt-2 text-slate-300">{product.solutionApproach}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Features</p>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                {product.features.map((feature) => (
                  <li key={feature} className="leading-6">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/15 bg-amber-500/5 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Business impact</p>
            <p className="mt-2 text-slate-300">{product.businessImpact}</p>
          </div>
        </div>
      )}
    </article>
  );
}
