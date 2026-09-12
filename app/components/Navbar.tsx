"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/muzaffarpur", label: "Muzaffarpur" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="w-full sticky top-0 z-50 border-b border-white/10"
      style={{
        background: "rgba(17, 24, 39, 0.88)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <Logo />

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917411008507" className="btn-ghost text-xs px-3 py-2">
            Call Now
          </a>
          <a
            href="https://wa.me/917411008507"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-3 py-2"
          >
            WhatsApp
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm md:text-base relative px-3 py-2 rounded-md transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-base py-2 px-3 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="tel:+917411008507" className="btn-ghost text-sm justify-center">
                Call Now
              </a>
              <a
                href="https://wa.me/917411008507"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm justify-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
