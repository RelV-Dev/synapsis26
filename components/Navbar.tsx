"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Infografis", href: "#" },
    { label: "Tentang", href: "#" },
  ];

  const linkColor = scrolled || menuOpen
    ? "text-[#1a1a1a] hover:text-[#003d7a]"
    : "text-white/90 hover:text-white";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled || menuOpen
          ? "bg-[#fff6dd]/95 backdrop-blur-sm border-b border-[#003d7a]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled || menuOpen ? "text-[#1a1a1a]" : "text-white"}`}>
            Synapsis 26
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center text-sm">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={`transition-colors ${linkColor}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-full rounded-full transition-all duration-300 origin-center ${
            scrolled || menuOpen ? "bg-[#1a1a1a]" : "bg-white"
          } ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
            scrolled || menuOpen ? "bg-[#1a1a1a]" : "bg-white"
          } ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full transition-all duration-300 origin-center ${
            scrolled || menuOpen ? "bg-[#1a1a1a]" : "bg-white"
          } ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-[#1a1a1a] hover:text-[#003d7a] transition-colors border-b border-[#003d7a]/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
