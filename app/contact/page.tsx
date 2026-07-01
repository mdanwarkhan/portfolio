import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-zinc-600 mb-6">Fill the form and we’ll get back to you.</p>
      <ContactForm />
    </div>
  );
}
