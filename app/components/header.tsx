"use client";

import { useState, useEffect } from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home", badge: false },
  { label: "About Me", href: "#about", badge: false },
  { label: "Projects", href: "#projects", badge: false },
  { label: "Skills", href: "#skills", badge: true },
  { label: "Contact", href: "#contact", badge: true },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-[70px] transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0e]/95 border-b border-white/10 backdrop-blur-[20px]"
          : "bg-[#0a0a0e]/80 border-b border-white/5 backdrop-blur-[16px]"
      }`}
    >
      {/* ─── Logo ─── */}
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10">
          <Image
            src="./image/Logowebsite.png"
            fill
            className="object-cover"
            alt="Logo"
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-white text-[13px] font-semibold leading-none tracking-wide">
          XENG-YG
          </p>
        </div>
      </div>

      {/* ─── Nav Links (desktop) ─── */}
      <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-[11.5px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                active === item.label
                  ? "text-white bg-white/10"
                  : "text-white/50 hover:text-white/90 hover:bg-white/[0.06]"
              }`}
            >
              {item.label}
              {item.badge && (
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* ─── Social Icons + Mobile Menu ─── */}
      <div className="flex items-center gap-1">
        {/* Social icons (always visible) */}
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/yangxengyang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 border border-transparent hover:text-white/90 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200"
          >
            <BsGithub size={17} />
          </a>
          <a
            href="mailto:your@email.com"
            aria-label="Gmail"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 border border-transparent hover:text-white/90 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200"
          >
            <SiGmail size={16} />
          </a>
          <a
            href="https://wa.me/8562098033496"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 border border-transparent hover:text-white/90 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200"
          >
            <BsWhatsapp size={17} />
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 bg-white/10 mx-1" />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
        >
          <span className="flex flex-col gap-[5px] w-[16px]">
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* ─── Mobile Dropdown Menu ─── */}
      <div
        className={`md:hidden absolute top-[70px] left-0 right-0 bg-[#0a0a0e]/98 border-b border-white/8 backdrop-blur-[20px] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-3 px-6 gap-1 list-none m-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                  active === item.label
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white/90 hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}