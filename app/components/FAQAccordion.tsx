"use client";

import { useState } from "react";

const items = [
  {
    q: "What services do you offer?",
    a: "We provide web and mobile development, product design, and digital strategy focused on measurable business outcomes.",
  },
  {
    q: "How do you price projects?",
    a: "Pricing depends on scope, timeline, and deliverables; we offer fixed-price, milestone-based, and time-and-materials engagements.",
  },
  {
    q: "What is your typical timeline?",
    a: "Small projects take weeks; medium initiatives take 2–3 months; larger, product-grade builds take longer depending on scope.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — we offer maintenance and support plans, as well as staff augmentation for ongoing needs.",
  },
  {
    q: "How do you handle project discovery?",
    a: "We run a discovery phase that includes stakeholder interviews, goals alignment, and a prioritized roadmap.",
  },
  {
    q: "What technologies do you use?",
    a: "We typically use modern JavaScript stacks (Next.js, React), Node.js backends, and relational databases, tailored to project needs.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Yes — we integrate with CRMs, payment providers, analytics, and other third-party services via APIs.",
  },
  {
    q: "How do you measure success?",
    a: "We set KPIs during discovery and track metrics like user engagement, conversion, and operational efficiency.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we can sign NDAs and abide by confidentiality requirements for sensitive projects.",
  },
  {
    q: "How can I get started?",
    a: "Start by contacting us via the Contact form; we’ll schedule a discovery call to understand your needs and next steps.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((cur) => (cur === i ? null : i));
  }

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={i} className="rounded-lg border border-white/6 bg-slate-900/60 p-4">
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left text-white">
                <span className="font-medium">{i + 1}. {it.q}</span>
                <span className={`ml-4 text-slate-300 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  ▲
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`mt-3 text-sm text-slate-300 ${isOpen ? "block" : "hidden"}`}>
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
