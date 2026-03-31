"use client";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
 
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background: "rgba(10,10,14,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <nav className="flex justify-between items-center px-8 md:px-12 h-16 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          {/* <span className="w-2 h-2 rounded-full bg-[#63c8ff] animate-pulse shadow-[0_0_8px_rgba(99,200,255,0.9)]" /> */}
          <span className="font-mono text-[15px] font-bold tracking-widest text-white">
            XENG-dev
          </span>
        </div>
 
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {["about", "services", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative px-4 py-1.5 text-[13.5px] tracking-wide text-white rounded-md
                         capitalize transition-all duration-200 hover:text-shadow-white group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0
                           bg-[#63c8ff] rounded-full transition-all duration-200 group-hover:w-[60%]"
              />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-3 px-5 py-2 text-[13px] font-semibold tracking-wider
                       bg-[#63c8ff] text-[#0a0a0e] rounded-md
                       transition-all duration-150 hover:opacity-85 hover:-translate-y-px"
          >
            Hire me →
          </button>
        </div>
 
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-5 pt-2 flex flex-col gap-2"
          style={{ background: "rgba(10,10,14,0.97)" }}
        >
          {["about", "services", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-left text-[14px] capitalize text-white/60 hover:text-white py-2 border-b border-white/5"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 px-5 py-2 text-[13px] font-semibold bg-[#63c8ff] text-[#0a0a0e] rounded-md"
          >
            Hire me →
          </button>
        </div>
      )}
    </header>
  );
}