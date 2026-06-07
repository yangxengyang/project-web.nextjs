"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center px-8 md:px-12 h-16 max-w-7xl mx-auto">

        {/* ── Logo ── */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => scrollTo("hero")}
        >
          <Image
            src="/Ai1.png"
            alt="Logo"
            width={44}
            height={44}
            priority
            className="transition-transform duration-200 hover:scale-105 drop-shadow-[0_0_10px_rgba(99,200,255,0.6)]"
          />
        </div>

        {/* ── Desktop Menu ── */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-5 py-2 text-sm text-white/80 hover:text-white transition-all relative group"
            >
              {link.label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#63c8ff] group-hover:w-[60%] transition-all"></span>
            </button>
          ))}
        </div>

        {/* ── Mobile Button ── */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4">
          
          {/* Mobile Logo */}
          <div className="mb-4">
            <Image
              src="/Ai1.png"
              alt="Logo"
              width={32}
              height={32}
            />
          </div>

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-white/80 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}