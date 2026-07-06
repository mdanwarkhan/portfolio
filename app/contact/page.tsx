import { Metadata } from "next";
import { Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

const contactNumber = "+91 74110 08507";
const whatsappUrl = "https://wa.me/917411008507";
const telUrl = "tel:+917411008507";

export const metadata: Metadata = {
  title: "Contact Us | Terra Core Innovations",
  description: "Get in touch with Terra Core Innovations. Let's discuss your project and how we can help your business grow.",
  keywords: ["contact", "inquiry", "project", "web development", "support"],
  openGraph: {
    title: "Contact Us | Terra Core Innovations",
    description: "Get in touch with our team",
    type: "website",
    url: "https://terracoreinnovations.com/contact",
  },
  alternates: {
    canonical: "https://terracoreinnovations.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6">
      <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-slate-200 font-semibold">Reach us directly</p>
            <p className="text-slate-400 text-sm sm:text-base">
              Call us at{' '}
              <a href={telUrl} className="text-primary hover:text-accent transition-colors">
                {contactNumber}
              </a>
            </p>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-20px_rgba(37,211,102,0.8)] transition hover:bg-emerald-400"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.5 3.5A10.5 10.5 0 0 0 3.5 20.5l-1.2 4.4 4.5-1.2A10.5 10.5 0 0 0 20.5 3.5Zm-1.4 15.4c-.7 1.8-2.3 3.2-4.2 3.7l-.7.2-2.6.7a1.2 1.2 0 0 1-1.4-1L9 17.3a7.6 7.6 0 0 1-4.6-4.4 1.2 1.2 0 0 1 1.3-1.5l2.9.4a1.2 1.2 0 0 1 1.1 1l.4 1.9a1.2 1.2 0 0 1-.3 1.1l-.7.8a9.1 9.1 0 0 0 4.1 4.1l.8-.7a1.2 1.2 0 0 1 1.1-.3l1.9.4a1.2 1.2 0 0 1 1 1.1l.4 2.9a1.2 1.2 0 0 1-1.5 1.3 7.6 7.6 0 0 1-4.4-4.6l-4.7-1.4a1.2 1.2 0 0 1-.9-1.4l.7-2.6.2-.7a10.5 10.5 0 0 0 15.4 1.1Z" />
            </svg>
          </span>
          Chat on WhatsApp
        </a>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-6">Contact Us</h1>
      <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base">Fill the form below and we'll get back to you as soon as possible.</p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M20.5 3.5A10.5 10.5 0 0 0 3.5 20.5l-1.2 4.4 4.5-1.2A10.5 10.5 0 0 0 20.5 3.5Zm-1.4 15.4c-.7 1.8-2.3 3.2-4.2 3.7l-.7.2-2.6.7a1.2 1.2 0 0 1-1.4-1L9 17.3a7.6 7.6 0 0 1-4.6-4.4 1.2 1.2 0 0 1 1.3-1.5l2.9.4a1.2 1.2 0 0 1 1.1 1l.4 1.9a1.2 1.2 0 0 1-.3 1.1l-.7.8a9.1 9.1 0 0 0 4.1 4.1l.8-.7a1.2 1.2 0 0 1 1.1-.3l1.9.4a1.2 1.2 0 0 1 1 1.1l.4 2.9a1.2 1.2 0 0 1-1.5 1.3 7.6 7.6 0 0 1-4.4-4.6l-4.7-1.4a1.2 1.2 0 0 1-.9-1.4l.7-2.6.2-.7a10.5 10.5 0 0 0 15.4 1.1Z" />
        </svg>
      </a>
    </div>
  );
}
