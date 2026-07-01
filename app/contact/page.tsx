import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

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
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-6">Contact Us</h1>
      <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base">Fill the form below and we'll get back to you as soon as possible.</p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
