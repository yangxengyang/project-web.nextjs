'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuSend, LuMail, LuUser, LuMessageSquare,
  LuGithub,
} from 'react-icons/lu';
import { SiTiktok } from 'react-icons/si';
import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

interface Comment {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

const socials = [
    {
      label: "Facebook",
      sub: "",
      icon: <FaFacebook size={20} />,
      color: "#1877F2",
      bg: "rgba(24,119,242,0.12)",
      href: "#",
      wide: false,
    },
    {
    label: "Messenger",
    sub: "Chat with me",
    icon: <FaFacebookMessenger size={20} />,
    color: "#0084FF",
    bg: "rgba(0,132,255,0.12)",
    href: "https://m.me/yourusername",
    wide: true,
  },
      {
      label: "WhatsApp",
      sub: "Chat with me",
      icon: <FaWhatsapp size={18} />,
      color: "#25D366",
      bg: "rgba(37,211,102,0.12)",
      href: "https://wa.me/85620XXXXXXXX",
      wide: true,
    },

    {
      label: "GitHub",
      sub: "",
      icon: <LuGithub size={18} />,
      color: "#f0f6fc",
      bg: "rgba(240,246,252,0.07)",
      href: "https://github.com/EkiZR",
      wide: false,
    },

    {
      label: "TikTok",
      sub: "",
      icon: <SiTiktok size={16} />,
      color: "#EE1D52",
      bg: "rgba(238,29,82,0.10)",
      href: "#",
      wide: false,
    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [guestName, setGuestName] = useState('');
  const [guestMsg, setGuestMsg] = useState('');
  const [posting, setPosting] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const handlePost = async () => {
    if (!guestName.trim() || !guestMsg.trim()) return;
    setPosting(true);
    await new Promise((r) => setTimeout(r, 800));
    const initials = guestName.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase() || '??';
    setComments([
      { id: Date.now(), name: guestName.trim(), avatar: initials, message: guestMsg.trim(), time: 'Just now' },
      ...comments,
    ]);
    setGuestName('');
    setGuestMsg('');
    setPosting(false);
  };

  const inputClass =
    'w-full py-[14px] pr-4 pl-11 bg-[#0a1020] border border-white/[0.08] rounded-xl text-[#ddd] text-sm outline-none transition-colors duration-200 focus:border-[#4f8ef7]/50 font-dm placeholder:text-[#444]';

  return (
    <div id="connect" className="min-h-screen bg-[#060b18] text-white relative overflow-hidden font-dm">
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 20% 60%, rgba(79,142,247,0.11) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 80% 20%, rgba(30,64,175,0.09) 0%, transparent 60%)' }}
      />

      {/* ─── Grid texture ─── */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="cg" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4f8ef7" strokeWidth="0.5" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#cg)" />
      </svg>

      {/* ════════ CONTENT ════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-[100px] pb-[120px]">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-[72px]"
        >
          <p className="font-mono-jb text-[12px] text-[#4f8ef7] tracking-[0.22em] mb-4 uppercase">
            — Get In Touch
          </p>
          <h1 className="font-playfair font-black text-[clamp(40px,5vw,68px)] leading-[1.08] mb-5">
            Let&apos;s <em className="text-[#4f8ef7] not-italic">Connect</em>
          </h1>
          <p className="text-base text-[#94a3b8] leading-[1.8] max-w-[480px] mx-auto">
            Punya pertanyaan, proyek, atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        {/* ══════════ MAIN GRID ══════════ */}
        <div className="grid grid-cols-2 gap-8 items-start">

          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-6">

            {/* ── Contact Form ── */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="bg-[#080f1e] border border-white/[0.07] rounded-3xl p-8"
            >
              <p className="font-mono-jb text-[11px] text-[#4f8ef7] tracking-[0.18em] mb-6 uppercase">
                — Send a Message
              </p>

              <form onSubmit={handleSend} className="flex flex-col gap-4">
                {/* Name */}
                <div className="relative">
                  <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#4f8ef7] flex">
                    <LuUser size={16} />
                  </span>
                  <input
                    type="text" placeholder="Your Name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#4f8ef7] flex">
                    <LuMail size={16} />
                  </span>
                  <input
                    type="email" placeholder="Your Email"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <span className="absolute left-[14px] top-4 text-[#4f8ef7] flex">
                    <LuMessageSquare size={16} />
                  </span>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                  whileTap={{ scale: 0.97 }}
                  disabled={sending || sent}
                  className={`
                    w-full py-4 rounded-xl text-[15px] font-medium
                    flex items-center justify-center gap-2.5 transition-all duration-300
                    font-dm cursor-pointer disabled:cursor-not-allowed
                    ${sent
                      ? 'bg-[rgba(79,200,120,0.2)] border border-[rgba(79,200,120,0.4)] text-[#4fc878]'
                      : 'bg-gradient-to-br from-[#4f8ef7] to-[#2563eb] text-white border-none'
                    }
                  `}
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        className="inline-block"
                      >⟳</motion.span>
                      Sending...
                    </>
                  ) : (
                    <><LuSend size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* ── Connect With Me ── */}
            <motion.div
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="bg-[#080f1e] border border-white/[0.07] rounded-3xl p-7"
            >
              <p className="font-mono-jb text-[11px] text-[#4f8ef7] tracking-[0.18em] mb-5 flex items-center gap-2 uppercase">
                <span className="inline-block w-6 h-px bg-[#4f8ef7]" />
                Connect With Me
              </p>

              <div className="flex flex-col gap-2.5">
                {/* LinkedIn — full width */}
                <motion.a
                  href={socials[0].href} target="_blank" rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3.5 px-[18px] py-4 rounded-2xl border border-white/[0.06] no-underline transition-all duration-200"
                  style={{ background: socials[0].bg }}
                >
                  <span className="flex shrink-0" style={{ color: socials[0].color }}>{socials[0].icon}</span>
                  <div>
                    <p className="m-0 text-[#eee] text-sm font-medium">{socials[0].label}</p>
                    <p className="m-0 text-[#555] text-[12px] font-mono-jb">{socials[0].sub}</p>
                  </div>
                  <span className="ml-auto text-[#333] text-lg">↗</span>
                </motion.a>

                {/* 2×2 grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {socials.slice(1).map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href} target="_blank" rel="noreferrer"
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/[0.06] no-underline transition-all duration-200"
                      style={{ background: s.bg }}
                    >
                      <span className="flex shrink-0" style={{ color: s.color }}>{s.icon}</span>
                      <div className="min-w-0">
                        <p className="m-0 text-[#eee] text-[13px] font-medium">{s.label}</p>
                        <p className="m-0 text-[#444] text-[11px] font-mono-jb truncate">{s.sub}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ════ RIGHT COLUMN — Guestbook ════ */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="bg-[#080f1e] border border-white/[0.07] rounded-3xl p-8 flex flex-col gap-5"
          >
            <p className="font-mono-jb text-[11px] text-[#4f8ef7] tracking-[0.18em] m-0 uppercase">
              — Guestbook
            </p>
            <h2 className="font-playfair text-[26px] font-bold m-0 leading-snug">
              Leave a <em className="text-[#4f8ef7] not-italic">note</em>
            </h2>
            <p className="text-[13px] text-[#94a3b8] m-0 leading-relaxed">
              Tinggalkan pesan, saran, atau sekedar say hi! Semua komentar disambut dengan hangat. 👋
            </p>

            {/* ── Post form ── */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#4f8ef7] flex">
                  <LuUser size={15} />
                </span>
                <input
                  type="text" placeholder="Your Name"
                  value={guestName} onChange={(e) => setGuestName(e.target.value)}
                  className={`${inputClass} text-[13px]`}
                />
              </div>

              <div className="relative">
                <span className="absolute left-[14px] top-[14px] text-[#4f8ef7] flex">
                  <LuMessageSquare size={15} />
                </span>
                <textarea
                  placeholder="Write your message here..."
                  rows={4}
                  value={guestMsg} onChange={(e) => setGuestMsg(e.target.value)}
                  className={`${inputClass} text-[13px]`}
                />
              </div>

              <motion.button
                onClick={handlePost}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                disabled={posting}
                className={`
                  w-full py-3.5 bg-gradient-to-br from-[#7c3aed] to-[#4f8ef7]
                  border-none rounded-xl text-white text-sm font-medium
                  flex items-center justify-center gap-2 font-dm
                  transition-opacity duration-200 cursor-pointer
                  ${posting ? 'opacity-70 cursor-wait' : 'opacity-100'}
                `}
              >
                {posting ? '⟳ Posting...' : <><LuSend size={14} /> Post Comment</>}
              </motion.button>
            </div>

            {/* ─── Divider ─── */}
            <div className="h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(79,142,247,0.25), transparent)' }}
            />

            {/* ── Comments list ── */}
            <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
              <AnimatePresence initial={false}>
                {comments.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-center py-8 px-4 text-[#475569] text-[13px]"
                  >
                    Belum ada komentar. Jadilah yang pertama meninggalkan pesan! ✨
                  </motion.div>
                ) : (
                  comments.map((c) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: -12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="flex gap-3 items-start bg-[#0a1020] border border-white/[0.05] rounded-2xl px-4 py-3.5"
                    >
                      {/* Avatar */}
                      <div className="w-[38px] h-[38px] rounded-full shrink-0 flex items-center justify-center font-mono-jb text-[12px] font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #4f8ef7, #7c3aed)' }}
                      >
                        {c.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[13px] font-medium text-[#ddd]">{c.name}</span>
                          <span className="text-[11px] text-[#64748b] font-mono-jb">{c.time}</span>
                        </div>
                        <p className="text-[13px] text-[#94a3b8] m-0 leading-relaxed">{c.message}</p>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Comment count */}
            <p className="font-mono-jb text-[11px] text-[#475569] text-center m-0 tracking-[0.12em]">
              {comments.length} message{comments.length !== 1 ? 's' : ''} in the guestbook
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom glow line ─── */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[3px] z-50 opacity-50"
        style={{ background: 'linear-gradient(to right, transparent, #4f8ef7, transparent)' }}
      />
    </div>
  );
}