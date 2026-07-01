import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="relative w-full h-80 rounded-lg overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
          alt="Software agency desk setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Terra Core Innovations</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl">Building tomorrow together with software, design, and digital strategy.</p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/portfolio" className="btn-primary">
                View Work
              </Link>
              <Link href="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-medium">Project Alpha</h3>
            <p className="text-sm text-zinc-600">A modern design system.</p>
          </div>
          <div className="card">
            <h3 className="font-medium">Brand Redesign</h3>
            <p className="text-sm text-zinc-600">Identity + web presence.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s work together</h2>
        <p className="text-zinc-600 mb-6">Have a project? Tell us about it.</p>
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
