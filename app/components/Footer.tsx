export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/80">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-xs sm:text-sm text-slate-400">
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <a href="tel:+917411008507" className="text-primary hover:text-accent transition-colors font-medium">
            Call +91 74110 08507
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a href="https://wa.me/917411008507" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            WhatsApp Us
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a href="/contact" className="text-primary hover:text-accent transition-colors font-medium">
            Book a Free Consultation
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Terra Core Innovations — web design and development company
        </p>
      </div>
    </footer>
  );
}
