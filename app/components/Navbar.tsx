import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full border-b sticky top-0 z-40" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="flex gap-4">
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/portfolio" className="nav-link">
            Work
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
