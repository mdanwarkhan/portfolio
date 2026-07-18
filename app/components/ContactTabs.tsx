"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";

export default function ContactTabs() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<"project" | "recruitment">("project");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "recruitment" || tabParam === "project") {
      setTab(tabParam);
    }
  }, [searchParams]);

  return (
    <div>
      <div className="inline-flex rounded-lg bg-slate-900/50 p-1 mb-6">
        <button
          onClick={() => setTab("project")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === "project" ? "bg-slate-800 text-white" : "text-slate-300"}`}>
          Project Enquiry
        </button>
        <button
          onClick={() => setTab("recruitment")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === "recruitment" ? "bg-slate-800 text-white" : "text-slate-300"}`}>
          Recruitment
        </button>
      </div>

      <ContactForm mode={tab} />
    </div>
  );
}
