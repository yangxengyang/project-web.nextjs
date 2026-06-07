"use client";

import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaWhatsapp, FaGithub, FaTiktok } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { TbBackground } from "react-icons/tb";

const SOCIAL_LINKS = [
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
    color: "#1877F2",
    hoverBg: "#1877F215",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/85602098033496",
    label: "WhatsApp",
    color: "#25D366",
    hoverBg: "#25D36615",
  },
  {
    icon: FaGithub,
    href: "https://github.com/yangxengyang",
    label: "GitHub",
    color: "#ffffff",
    hoverBg: "#ffffff15",
  },
  {
   icon: FaTiktok,
   href: "",
   label: "TikTok",
   color: "#ffffff",
   hoverBg: "#ffffff15"
  },
  
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0a0e" }}
    >
      {/* Glowing top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #63c8ff55 30%, #63c8ff 50%, #63c8ff55 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-12 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, #63c8ff22 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <p className="font-mono text-[#63c8ff] text-[10px] uppercase tracking-[0.22em] mb-3">
              // Est. 2024
            </p>
            <h2
              className="text-white font-bold text-2xl mb-3 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}
            >
              XENG_DEV
              <br />
              <span style={{ color: "#63c8ff" }}>Front end Developer</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Vientiane, Lao PDR
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="md:col-span-1">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.18em] mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200 w-fit"
                >
                  <span className="inline-block w-4 h-px bg-[#63c8ff] opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-200" />
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Connect */}
          <div className="md:col-span-1">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.18em] mb-5">
              Connect
            </p>
            <div className="flex flex-row flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl rounded-md p-2.5 border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
                  style={{ color }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = hoverBg;
                    el.style.boxShadow = `0 0 14px ${color}44`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 mb-6 h-px w-full"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-white/25 text-[11px] tracking-wider">
            © {year} XENG_DEV Full Stack Development
          </p>
          <p className="font-mono text-[#63c8ff]/40 text-[11px] tracking-wider">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}