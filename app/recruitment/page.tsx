import Link from "next/link";

export const metadata = {
  title: "Terra Core Innovations | Recruitment & Hiring",
  description: "Technical recruitment services — from DevOps and Cloud to SAP, frontend, backend and more.",
};

export default function Recruitment() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Hire Top Talent with Confidence</h1>
        <p className="text-slate-300 mb-4 max-w-3xl">
          Finding the right talent is crucial to your business success. We simplify the hiring process by connecting you with highly skilled professionals who match your technical requirements, company culture, and business goals.
        </p>
        <p className="text-slate-300 max-w-3xl">
          Whether you're hiring a single specialist or building an entire team, our experienced recruiters deliver qualified candidates quickly and efficiently.
        </p>
      </section>

      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-700/80 bg-slate-950/60 p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Hiring Solutions</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Permanent Recruitment</li>
            <li>Contract Staffing</li>
            <li>Contract-to-Hire</li>
            <li>Executive Search</li>
            <li>Bulk & Campus Hiring</li>
            <li>Recruitment Process Outsourcing (RPO)</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-700/80 bg-slate-950/60 p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Partner with Us?</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Access to a vast network of pre-screened professionals</li>
            <li>Industry-focused recruitment specialists</li>
            <li>Fast turnaround with quality profiles</li>
            <li>Comprehensive technical and HR screening</li>
            <li>Flexible hiring models tailored to your business</li>
            <li>End-to-end recruitment support</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technologies We Recruit For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Software Development",
            "Cloud & DevOps",
            "Data Engineering & Analytics",
            "AI & Machine Learning",
            "Cybersecurity",
            "SAP & ERP",
            "Salesforce",
            "QA & Test Automation",
            "Mobile Development",
            "Embedded Systems & IoT",
          ].map((tech) => (
            <div key={tech} className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4">
              <p className="text-slate-100">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Hiring Process</h2>
        <ol className="list-decimal list-inside text-slate-300 space-y-2">
          <li>Understand Your Requirements</li>
          <li>Source & Screen Candidates</li>
          <li>Technical Evaluation</li>
          <li>Interview Coordination</li>
          <li>Offer Management</li>
          <li>Successful Onboarding</li>
        </ol>
      </section>

      <section className="rounded-3xl border border-slate-700/80 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold mb-4">Ready to Build Your Team?</h2>
        <p className="text-slate-300 mb-4">
          Let us help you find exceptional talent that drives innovation and business growth. Submit your hiring requirements today, and our recruitment experts will connect with you shortly.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base">
          Go to Contact Page
        </Link>
      </section>
    </div>
  );
}
