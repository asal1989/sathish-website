"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { asset } from "@/lib/paths";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#gallery" },
  { label: "Areas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
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
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Sree Isai Electrical Contractor — Home">
            <div
              className={`relative w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden transition-all duration-300 ${
                scrolled
                  ? "bg-white shadow-md"
                  : "bg-white/95 shadow-lg ring-2 ring-white/30"
              } group-hover:scale-105`}
            >
              <Image
                src={asset("/logo.png")}
                alt="Sree Isai Electrical Contractor"
                fill
                priority
                sizes="112px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-extrabold text-sm lg:text-base leading-tight transition-colors ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
              >
                Sree Isai
              </p>
              <p
                className={`text-[10px] lg:text-xs font-semibold tracking-wide uppercase transition-colors ${
                  scrolled ? "text-blue-600" : "text-yellow-300"
                }`}
              >
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
              href="tel:+919688216635"
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
              href="tel:+919688216635"
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
