"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 nav-blur shadow-lg border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-shadow">
              <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <div>
              <p className={`font-bold text-sm leading-tight transition-colors ${scrolled ? "text-blue-900" : "text-white"}`}>
                Sree Isai
              </p>
              <p className={`text-xs font-medium transition-colors ${scrolled ? "text-blue-600" : "text-yellow-300"}`}>
                Electrical Contractor
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-800 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 mx-4 mt-3 bg-yellow-500 text-white font-semibold py-3 rounded-full"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
