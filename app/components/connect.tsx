'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuSend, LuMail, LuUser, LuMessageSquare,
  LuGithub, LuInstagram, LuLinkedin,
  LuFacebook,
} from 'react-icons/lu';
import { SiTiktok } from 'react-icons/si';

/* ─── Types ─── */
interface Comment {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

/* ─── Social links ─── */
const socials = [
  {
    label: "Let's Connect",
    sub: 'on LinkedIn',
    icon: <LuLinkedin size={20} />,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.12)',
    href: 'https://linkedin.com/in/ekizulfar',
    wide: true,
  },
  {
    label: 'Instagram',
    sub: '@ekizr_',
    icon: <LuInstagram size={18} />,
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.12)',
    href: 'https://instagram.com/ekizr_',
    wide: false,
  },
  {
    label: 'Facebook',
    sub: '@eki zulfar',
    icon: <LuFacebook size={18} />,
    color: '#1877F2',              // ← was '#blue' (invalid)
    bg: 'rgba(24,119,242,0.12)',   // ← was hardcoded '#0a66c2' (LinkedIn color)
    href: '#',
    wide: false,
  },
  {
    label: 'GitHub',
    sub: '@EkiZR',
    icon: <LuGithub size={18} />,
    color: '#f0f6fc',              // ← GitHub white on dark
    bg: 'rgba(240,246,252,0.07)',
    href: 'https://github.com/EkiZR',
    wide: false,
  },
  {
    label: 'TikTok',
    sub: '@eki_zulfar',
    icon: <SiTiktok size={16} />,
    color: '#EE1D52',              // ← TikTok red (brand primary)
    bg: 'rgba(238,29,82,0.10)',
    href: '#',
    wide: false,
  },
];

/* ─── Sample comments ─── */
const initialComments: Comment[] = [
  { id: 1, name: 'Eki', avatar: 'EK', message: 'Ngelag kaga bang?', time: '1h ago' },
  { id: 2, name: 'Budi Santoso', avatar: 'BS', message: 'Keren banget portfolionya! Keep it up 🔥', time: '3h ago' },
  { id: 3, name: 'Rina', avatar: 'RI', message: 'Designnya clean abis, suka banget sama color schemenya!', time: '1d ago' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Contact() {
  /* ── Form state ── */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  /* ── Guestbook state ── */
  const [comments, setComments] = useState<Comment[]>(initialComments);
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
    const initials = guestName.trim().split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    setComments([
      { id: Date.now(), name: guestName.trim(), avatar: initials, message: guestMsg.trim(), time: 'Just now' },
      ...comments,
    ]);
    setGuestName('');
    setGuestMsg('');
    setPosting(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px 14px 44px',
    background: '#0a1020', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px', color: '#ddd', fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <div
      id="contact"
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: '#060b18', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── Fonts ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #4f8ef7; color: #060b18; }
        input::placeholder, textarea::placeholder { color: #3a4a60; }
        input:focus, textarea:focus { border-color: rgba(79,142,247,0.5) !important; }
        textarea { resize: none; }
        a:hover { opacity: 0.85; }
      `}</style>

      {/* ─── Ambient glow ─── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 40% at 20% 60%, rgba(79,142,247,0.11) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 80% 20%, rgba(30,64,175,0.09) 0%, transparent 60%)',
      }} />

      {/* ─── Grid texture ─── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="cg" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4f8ef7" strokeWidth="0.5" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#cg)" />
      </svg>

      {/* ════════════════ CONTENT ════════════════ */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px 120px' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#4f8ef7', letterSpacing: '0.22em', marginBottom: '16px' }}>
            — GET IN TOUCH
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 900, lineHeight: 1.08, margin: '0 0 20px' }}>
            Let&apos;s <em style={{ color: '#4f8ef7', fontStyle: 'italic' }}>Connect</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
            Punya pertanyaan, proyek, atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        {/* ══════════ MAIN GRID ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>

          {/* ════ LEFT COLUMN ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* ── Contact Form ── */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              style={{
                background: '#080f1e', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px', padding: '32px',
              }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#4f8ef7', letterSpacing: '0.18em', marginBottom: '24px' }}>
                — SEND A MESSAGE
              </p>

              <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Name */}
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4f8ef7', display: 'flex' }}>
                    <LuUser size={16} />
                  </span>
                  <input
                    type="text" placeholder="Your Name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4f8ef7', display: 'flex' }}>
                    <LuMail size={16} />
                  </span>
                  <input
                    type="email" placeholder="Your Email"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '16px', color: '#4f8ef7', display: 'flex' }}>
                    <LuMessageSquare size={16} />
                  </span>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, paddingTop: '14px', paddingBottom: '14px' }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                 whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.97 }}
                  disabled={sending || sent}
                  style={{
                    width: '100%', padding: '16px',
                    background: sent
                      ? 'rgba(79,200,120,0.2)'
                      : 'linear-gradient(135deg, #4f8ef7 0%, #2563eb 100%)',
                    border: sent ? '1px solid rgba(79,200,120,0.4)' : 'none',
                    borderRadius: '12px', color: sent ? '#4fc878' : '#fff',
                    fontSize: '15px', fontWeight: 500,
                    cursor: sending || sent ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    transition: 'all 0.3s',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : sending ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} style={{ display: 'inline-block' }}>
                        ⟳
                      </motion.span>
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
              style={{
                background: '#080f1e', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px', padding: '28px',
              }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#4f8ef7', letterSpacing: '0.18em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '24px', height: '1px', background: '#4f8ef7', display: 'inline-block' }} />
                CONNECT WITH ME
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* LinkedIn — full width */}
                <motion.a
                  href={socials[0].href} target="_blank" rel="noreferrer"
                  whileHover={{ x: 4, borderColor: `${socials[0].color}44` }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 18px', borderRadius: '14px',
                    background: socials[0].bg, border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s',
                  }}
                >
                  <span style={{ color: socials[0].color, display: 'flex', flexShrink: 0 }}>{socials[0].icon}</span>
                  <div>
                    <p style={{ margin: 0, color: '#eee', fontSize: '14px', fontWeight: 500 }}>{socials[0].label}</p>
                    <p style={{ margin: 0, color: '#555', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>{socials[0].sub}</p>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#333', fontSize: '18px' }}>↗</span>
                </motion.a>

                {/* 2×2 grid for the rest */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {socials.slice(1).map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href} target="_blank" rel="noreferrer"
                      whileHover={{ y: -3, borderColor: `${s.color}44` }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '14px 16px', borderRadius: '14px',
                        background: s.bg, border: '1px solid rgba(255,255,255,0.06)',
                        textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s',
                      }}
                    >
                      <span style={{ color: s.color, display: 'flex', flexShrink: 0 }}>{s.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: 0, color: '#eee', fontSize: '13px', fontWeight: 500 }}>{s.label}</p>
                        <p style={{ margin: 0, color: '#444', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.sub}</p>
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
            style={{
              background: '#080f1e', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '24px', padding: '32px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#4f8ef7', letterSpacing: '0.18em', margin: 0 }}>
              — GUESTBOOK
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              Leave a <em style={{ color: '#4f8ef7', fontStyle: 'italic' }}>note</em>
            </h2>
            <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: 1.6 }}>
              Tinggalkan pesan, saran, atau sekedar say hi! Semua komentar disambut dengan hangat. 👋
            </p>

            {/* ── Post form ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Name input */}
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4f8ef7', display: 'flex' }}>
                  <LuUser size={15} />
                </span>
                <input
                  type="text" placeholder="Your Name"
                  value={guestName} onChange={(e) => setGuestName(e.target.value)}
                  style={{ ...inputStyle, fontSize: '13px' }}
                />
              </div>

              {/* Message */}
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '14px', color: '#4f8ef7', display: 'flex' }}>
                  <LuMessageSquare size={15} />
                </span>
                <textarea
                  placeholder="Write your message here..."
                  rows={4}
                  value={guestMsg} onChange={(e) => setGuestMsg(e.target.value)}
                  style={{ ...inputStyle, fontSize: '13px', paddingTop: '14px' }}
                />
              </div>

              {/* Post button */}
              <motion.button
                onClick={handlePost}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                disabled={posting}
                style={{
                  width: '100%', padding: '14px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #4f8ef7 100%)',
                  border: 'none', borderRadius: '12px',
                  color: '#fff', fontSize: '14px', fontWeight: 500,
                  cursor: posting ? 'wait' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  fontFamily: "'DM Sans', sans-serif", transition: 'opacity 0.2s',
                  opacity: posting ? 0.7 : 1,
                }}
              >
                {posting ? '⟳ Posting...' : <><LuSend size={14} /> Post Comment</>}
              </motion.button>
            </div>

            {/* ─── Divider ─── */}
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(79,142,247,0.25), transparent)' }} />

            {/* ── Comments list ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '360px', overflowY: 'auto', paddingRight: '4px' }}>
              <AnimatePresence initial={false}>
                {comments.map((c) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: -12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      display: 'flex', gap: '12px', alignItems: 'flex-start',
                      background: '#0a1020', border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '14px', padding: '14px 16px',
                    }}
                  >
                    {/* Avatar */}
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, #4f8ef7, #7c3aed)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px', fontWeight: 600, color: '#fff',
                    }}>
                      {c.avatar}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#ddd' }}>{c.name}</span>
                        <span style={{ fontSize: '11px', color: '#333', fontFamily: "'JetBrains Mono', monospace" }}>{c.time}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.6 }}>{c.message}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Comment count */}
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#2a3a50', textAlign: 'center', margin: 0, letterSpacing: '0.12em' }}>
              {comments.length} messages in the guestbook
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom glow line ─── */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '3px',
        background: 'linear-gradient(to right, transparent, #4f8ef7, transparent)',
        zIndex: 50, opacity: 0.5,
      }} />
    </div>
  );
}