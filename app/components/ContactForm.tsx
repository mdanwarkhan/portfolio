"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [service, setService] = useState("Web Development");
  const [budget, setBudget] = useState("₹25,000 - ₹50,000");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  function validateEmail(value: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  }

  function validatePhone(value: string) {
    try {
      // try parsing with India as default, then general parse
      const pn = parsePhoneNumberFromString(value, "IN") || parsePhoneNumberFromString(value);
      if (!pn) return false;
      if (pn.country === "IN") {
        const national = (pn.nationalNumber || "").replace(/\D/g, "");
        // enforce exactly 10 digits for Indian national number
        return national.length === 10 && pn.isValid();
      }
      return pn.isValid();
    } catch (e) {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10;
    }
  }

  function formatPhone(value: string) {
    try {
      // prefer parsing with explicit default country if missing country code
      const pn = parsePhoneNumberFromString(value, "IN") || parsePhoneNumberFromString(value);
      return pn ? pn.formatInternational() : value;
    } catch (e) {
      return value;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // client-side validation
    let ok = true;
    setEmailError(null);
    setPhoneError(null);

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      ok = false;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number with country code.");
      ok = false;
    }

    if (!ok) {
      setStatus(null);
      return;
    }

    try {
      // EmailJS client-side send. Configure these environment variables in your .env.local:
      // NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* env vars.");
      }

      const templateParams = { name, company, email, phone, service, budget, message };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Optionally still log the submission server-side
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(templateParams),
        });
      } catch (e) {
        // non-fatal
        console.warn("Failed to POST to /api/contact", e);
      }

      setStatus("sent");
      setName("");
      setCompany("");
      setEmail("");
      // reset phone to default +91
      setPhone("+91 ");
      setService("Web Development");
      setBudget("₹25,000 - ₹50,000");
      setMessage("");

      setTimeout(() => router.push("/"), 2500);
    } catch (err: any) {
      setStatus("error");
      console.error(err);
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-2xl mx-auto rounded-3xl border border-green-400/20 bg-slate-950/80 p-10 text-white shadow-xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 text-green-300 ring-1 ring-green-500/20">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Inquiry Submitted</h2>
        <p className="text-slate-300 mb-6">Thanks for reaching out to Terra Core Innovations. Your project inquiry has been received and we’ll contact you shortly.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/80 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Service</p>
            <p className="mt-2 text-lg font-semibold">{service}</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Budget</p>
            <p className="mt-2 text-lg font-semibold">{budget}</p>
          </div>
        </div>
        <p className="mt-7 text-sm text-slate-400">Redirecting to the homepage…</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 border border-slate-700 rounded-2xl p-6 sm:p-8 bg-slate-950/40">
      <h2 className="text-xl sm:text-2xl font-semibold">New Project Inquiry</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium">Name</label>
          <input
            placeholder="John Doe"
            className="mt-1 input text-sm sm:text-base"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium">Company</label>
          <input
            placeholder="ABC Technologies"
            className="mt-1 input text-sm sm:text-base"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="john@abc.com"
            className="mt-1 input text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-xs sm:text-sm text-red-400 mt-1">{emailError}</p>}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium">Phone</label>
          <input
            placeholder="+91 9876543210"
            className="mt-1 input text-sm sm:text-base"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={(e) => setPhone(formatPhone(e.target.value))}
          />
          {phoneError && <p className="text-xs sm:text-sm text-red-400 mt-1">{phoneError}</p>}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium">Service</label>
          <select className="mt-1 input text-sm sm:text-base bg-slate-950" value={service} onChange={(e) => setService(e.target.value)}>
            <option>Web Development</option>
            <option>ECommerce Development</option>
            <option>Mobile App Development</option>
            <option>CRM Software</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium">Budget <span className="text-slate-400 font-normal">(optional)</span></label>
          <select className="mt-1 input text-sm sm:text-base bg-slate-950" value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option>&lt;₹25,000</option>
            <option>₹25,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,25,000</option>
            <option>₹1,25,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium">Message</label>
        <textarea
          placeholder="We need an MVP for our logistics platform."
          className="mt-1 input h-24 sm:h-32 text-sm sm:text-base"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <button type="submit" className="btn-primary text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 w-full sm:w-auto" disabled={status === "sending" || status === "sent"}>
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
        {status === "error" && <span className="text-red-600 text-sm sm:text-base">Something went wrong.</span>}
      </div>
    </form>
  );
}
