import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Company in Muzaffarpur | Terra Core Innovations",
  description:
    "Terra Core Innovations is a trusted web development company in Muzaffarpur, Bihar, offering website design, ecommerce development, SEO, and business software solutions for local brands.",
  keywords: [
    "web development company in Muzaffarpur",
    "website design company Muzaffarpur",
    "ecommerce development Muzaffarpur",
    "SEO services Muzaffarpur",
    "Muzaffarpur digital agency",
    "Bihar website developer",
    "best website design company in Muzaffarpur",
    "website developer in Muzaffarpur",
    "local SEO company in Muzaffarpur",
    "Muzaffarpur ecommerce website company",
    "digital marketing agency Muzaffarpur",
  ],
  alternates: {
    canonical: "https://terracoreinnovations.com/muzaffarpur",
  },
  openGraph: {
    title: "Web Development Company in Muzaffarpur | Terra Core Innovations",
    description:
      "Website design, ecommerce, SEO, and custom digital solutions for businesses in Muzaffarpur and across Bihar.",
    type: "website",
    url: "https://terracoreinnovations.com/muzaffarpur",
  },
};

const services = [
  "Business website design",
  "Ecommerce website development",
  "Custom web applications",
  "SEO and search visibility",
  "Landing pages and lead generation",
  "Mobile-friendly responsive websites",
];

const highlights = [
  {
    title: "Strategy-first positioning",
    text: "We build websites around your offer, audience, and growth goals so your message lands clearly and converts better.",
  },
  {
    title: "Conversion-focused design",
    text: "Every page is designed to turn visitors into leads through clear messaging, compelling calls to action, and mobile-first experiences.",
  },
  {
    title: "Fast, scalable delivery",
    text: "From a startup landing page to a full digital platform, we build systems that are reliable, efficient, and ready to grow.",
  },
];

const pricingPlans = [
  {
    name: "Starter Website",
    price: "₹18,999",
    description: "Perfect for small businesses that need a polished online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Fast-loading layout",
      "Basic SEO setup",
    ],
    featured: false,
  },
  {
    name: "Business Growth",
    price: "₹39,999",
    description: "Best for growing brands that want stronger visibility and lead generation.",
    features: [
      "Custom business website",
      "Lead capture forms",
      "SEO structure and optimization",
      "WhatsApp/contact integration",
    ],
    featured: true,
  },
  {
    name: "Ecommerce + Custom",
    price: "Custom Quote",
    description: "For businesses ready to sell online or automate operations digitally.",
    features: [
      "Ecommerce storefront",
      "Custom dashboards",
      "Advanced integrations",
      "Priority support",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    name: "Ritika Sharma",
    business: "Boutique Retail Brand",
    quote:
      "Our website finally feels premium and helps customers understand our offer instantly. The process was simple, thoughtful, and focused on results.",
  },
  {
    name: "Aman Kumar",
    business: "Service Business",
    quote:
      "Their process was clear, fast, and practical. We got a mobile-friendly site and a much smoother enquiry flow without the usual agency confusion.",
  },
  {
    name: "Neha Verma",
    business: "Consulting Practice",
    quote:
      "We needed a modern, credible online presence for trust and lead generation. The final result feels polished, strategic, and easy to scale.",
  },
];

const serviceAreas = [
  "India",
  "B2B brands",
  "Service businesses",
  "Startups",
  "Retail brands",
  "Global audiences",
];

const comparisonRows = [
  {
    factor: "Audience understanding",
    terra: "We tailor strategy around your offer, industry, and customer journey.",
    typicalAgency: "Many agencies rely on generic templates and broad messaging without real positioning.",
  },
  {
    factor: "Communication",
    terra: "Clear project updates, direct collaboration, and fast response times.",
    typicalAgency: "Long delays, vague timelines, and poor handoff between teams.",
  },
  {
    factor: "Conversion focus",
    terra: "Design and messaging optimized to generate enquiries, calls, and sales.",
    typicalAgency: "Looks good but often lacks strategic conversion planning.",
  },
  {
    factor: "SEO & performance",
    terra: "Clean structure, technical optimization, and performance-focused builds.",
    typicalAgency: "Basic templates with weak technical SEO and slower pages.",
  },
  {
    factor: "Scalable support",
    terra: "We build systems that can expand into future features and growth channels.",
    typicalAgency: "One-off projects with little long-term strategy or growth planning.",
  },
];

const faqQuestions = [
  {
    question: "How much does a website cost?",
    answer:
      "A small business website typically starts around ₹18,999, while custom business sites and ecommerce projects vary based on pages, features, and integrations. We can recommend the right option after understanding your goals.",
  },
  {
    question: "Do you build websites for growing brands?",
    answer:
      "Yes. We work with service businesses, ecommerce brands, consultants, and startup teams to build professional websites and digital systems that support growth.",
  },
  {
    question: "Can you help with SEO and search visibility?",
    answer:
      "Absolutely. We structure websites for better search visibility, strong technical performance, and conversion-focused traffic from search engines and discovery channels.",
  },
  {
    question: "Do you offer website redesigns and landing pages?",
    answer:
      "Yes. We can redesign outdated sites, improve conversion rates, and launch new landing pages for promotions, service campaigns, and lead generation.",
  },
];

export default function MuzaffarpurPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <section className="mb-12 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Web design and digital growth
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Strategic Website Design Partner for Growing Brands
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
              Terra Core Innovations helps businesses launch fast, professional websites and digital systems that attract attention, build trust, and increase revenue.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get a Free Quote
              </Link>
              <a href="tel:+917411008507" className="btn-ghost inline-flex items-center justify-center">
                Call +91 74110 08507
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Modern web design and digital growth strategy team"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Search visibility and lead generation</p>
              <p className="mt-2 text-lg font-semibold text-white">Websites built for trust, speed, and growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-slate-900 to-slate-950 p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Business support</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Need a website company that understands growth?</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-200">
              Speak with Terra Core Innovations today for web design, ecommerce, SEO, and custom business software solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+917411008507" className="btn-primary inline-flex items-center justify-center">
              Call +91 74110 08507
            </a>
            <a href="https://wa.me/917411008507" target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center justify-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Best website design company for business growth</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          If you are searching for a dependable website design partner, ecommerce specialist, or SEO-focused digital team, Terra Core Innovations helps businesses build stronger online visibility and generate more qualified leads. We create fast, mobile-friendly websites and business tools that support brand trust, customer acquisition, and long-term growth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Website development services</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="card p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-white">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="card p-5">
            <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm sm:text-base text-slate-300">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Website packages for growing businesses</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-5 ${
                plan.featured ? "border-primary bg-primary/5" : "border-slate-700 bg-slate-900/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-950">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-5 text-3xl font-extrabold text-white">{plan.price}</p>
              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`mt-6 inline-flex w-full items-center justify-center ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">What clients say</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card p-5">
              <p className="text-base text-slate-200">“{item.quote}”</p>
              <div className="mt-5 border-t border-slate-700 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.business}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why choose us vs other agencies</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm sm:text-base">
            <thead>
              <tr>
                <th className="pb-2 pr-4 text-slate-400 font-medium">Factor</th>
                <th className="pb-2 pr-4 text-primary font-semibold">Terra Core Innovations</th>
                <th className="pb-2 text-slate-400 font-medium">Typical agency</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="align-top">
                  <td className="rounded-l-xl bg-slate-900/80 px-4 py-4 font-medium text-white">{row.factor}</td>
                  <td className="bg-slate-900/80 px-4 py-4 text-slate-200">{row.terra}</td>
                  <td className="rounded-r-xl bg-slate-900/80 px-4 py-4 text-slate-300">{row.typicalAgency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Frequently asked questions about website costs</h2>
        <div className="space-y-3">
          {faqQuestions.map((item) => (
            <div key={item.question} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Supporting businesses across modern industries</h2>
        <p className="mb-5 text-slate-300 text-sm sm:text-base">
          We support brands that want to grow beyond a basic online presence, whether they need a new website, ecommerce storefront, lead generation funnel, or digital transformation roadmap.
        </p>
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <span key={area} className="rounded-full border border-slate-600 bg-slate-900 px-3 py-2 text-xs sm:text-sm text-slate-200">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ecommerce website company and growth partner</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Whether you need a business website for a service brand, a conversion-focused ecommerce experience, or a custom web application for your operations, we design digital experiences that support sustainable growth. From startup teams to established service brands, our focus stays on responsive design, SEO structure, lead generation, and technical performance.
        </p>
      </section>

      <section className="mb-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Book a free consultation</h2>
        <p className="mx-auto max-w-2xl text-slate-300 mb-6">
          Need a website design partner, a growth-focused SEO plan, or a custom ecommerce website? Let’s talk about your next project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
            Book a Free Consultation
          </Link>
          <a href="https://wa.me/917411008507" target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center justify-center">
            WhatsApp us
          </a>
        </div>
      </section>
    </div>
  );
}
