"use client";
import { FaFacebook, FaWhatsapp, FaGithub, FaTiktok } from "react-icons/fa";

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
    hoverBg: "#ffffff15",
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
    <footer className="relative w-full overflow-hidden bg-[#0a0a0e] text-white">

      {/* glow top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#63c8ff] to-transparent opacity-60" />

      {/* soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-[#63c8ff]/10 blur-2xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        {/* HEADER TEXT */}
        <div className="text-center mb-12">
          <p className="text-[#63c8ff] text-[11px] tracking-[0.3em] uppercase">
            Let’s Build Something Great
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            Crafting modern web experiences with passion & precision
          </h2>

          <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">
            Frontend Developer based in Vientiane, Lao PDR — focused on building clean,
            scalable, and modern digital products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#63c8ff] uppercase mb-3">
              // Est. 2024
            </p>

            <h3 className="text-xl font-bold leading-snug">
              XENG_DEV
              <br />
              <span className="text-[#63c8ff] text-sm font-medium">
                Frontend Developer
              </span>
            </h3>

            <p className="text-white/40 text-sm mt-3">
              Turning ideas into clean UI & scalable code.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-[10px] tracking-[0.18em] text-white/30 uppercase mb-5">
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/50 hover:text-white transition flex items-center gap-2 text-sm w-fit"
                >
                  <span className="w-4 h-px bg-[#63c8ff] opacity-0 hover:opacity-100 hover:w-6 transition-all" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-[10px] tracking-[0.18em] text-white/30 uppercase mb-5">
              Connect
            </p>

            <p className="text-white/40 text-xs mb-4">
              Feel free to reach out anytime 👇
            </p>

            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/10 transition-all duration-200 hover:-translate-y-1"
                  style={{ color }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = hoverBg;
                    el.style.boxShadow = `0 0 16px ${color}55`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} XENG_DEV — All rights reserved</p>
          <p className="text-[#63c8ff]/50">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}