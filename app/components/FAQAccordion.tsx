"use client";

import { useState } from "react";

const items = [
  {
    q: "What services do you offer?",
    a: "We provide web and mobile development, product design, digital strategy, cloud & DevOps, enterprise integrations (including SAP), and technical recruitment.",
  },
  {
    q: "Do you provide recruitment and hiring services?",
    a: "Yes — we run technical recruitment searches, supply vetted candidate shortlists, and can build dedicated teams (contract, contract-to-hire, or full-time).",
  },
  {
    q: "What roles can you recruit for?",
    a: "We recruit across DevOps, Cloud, SRE, Backend, Frontend, Full-Stack, Data Engineering, QA, SAP consultants, Product, and Design roles.",
  },
  {
    q: "How does your recruitment process work?",
    a: "We gather requirements, source candidates, perform technical screening, present shortlists, and support interviews and offer negotiation until placement.",
  },
  {
    q: "How long does it take to fill a position?",
    a: "Time-to-fill varies by role and seniority — typical searches range from 2–8 weeks; enterprise or niche roles may take longer.",
  },
  {
    q: "How do you price recruitment engagements?",
    a: "We offer flexible models: retained search, success-based placement fees, or ongoing recruitment support and team augmentation — pricing depends on role and engagement model.",
  },
  {
    q: "Do you provide project-based development and ongoing support?",
    a: "Yes — we deliver projects end-to-end and provide maintenance, managed services, and staff augmentation for long-term support.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely — we integrate with CRMs, ERPs, payment providers, analytics, and other third-party systems through secure APIs.",
  },
  {
    q: "Do you sign NDAs and handle sensitive data?",
    a: "Yes, we sign NDAs and follow security best practices for data protection and confidentiality.",
  },
  {
    q: "How can I start a hiring request or project?",
    a: "Use our Contact form on the site or visit the Recruitment page to submit your requirements — we’ll schedule a call and propose next steps.",
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
