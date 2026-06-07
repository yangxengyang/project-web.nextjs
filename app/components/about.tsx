'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LuDownload } from 'react-icons/lu';
import { PiCodeBold, PiGlobeBold, PiMedalBold } from "react-icons/pi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stats = [
  { icon: <PiCodeBold size={28} />, number: '11', label: 'Total Projects', desc: 'Innovative web solutions crafted' },
  { icon: <PiMedalBold size={28} />, number: '7',  label: 'Certificates',   desc: 'Professional skills validated'   },
  { icon: <PiGlobeBold size={28} />, number: '3',  label: 'Years Active',   desc: 'Continuous learning journey'     },
];

const skills = ['HTML & CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Git', 'Node.js'];

export default function About( ) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    
    <div
      ref={containerRef}
      id="About"
      className="min-h-screen text-white overflow-hidden relative"
      style={{ background: '#060b18', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── Google Fonts ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #4f8ef7; color: #060b18; }
      `}</style>

      {/* ─── Ambient background ─── */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 70% 50% at 70% 20%, rgba(79,142,247,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(30,64,175,0.12) 0%, transparent 60%)',
        }}
     />
      <section style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

          {/* Top row: avatar + intro text */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>

            {/* ── Left: avatar ── */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative' }}
            >
              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
                  background: '#4f8ef7', color: '#060b18', borderRadius: '999px',
                  padding: '4px 20px', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600, letterSpacing: '0.08em', whiteSpace: 'nowrap', zIndex: 10,
                }}
              >
                ✦ Available for work
              </motion.div>

              {/* Avatar ring */}
              <div style={{ position: 'relative', width: '380px', maxWidth: '100%', margin: '0 auto' }}>
                <div style={{
                  borderRadius: '24px', overflow: 'hidden',
                  border: '1px solid rgba(79,142,247,0.3)',
                  aspectRatio: '1 / 1.1', position: 'relative', background: '#0a1020',
                }}>
                  <Image
                    src="/image/myimage.png"
                    alt="Eki Zulfar Rachman"
                    fill
                    style={{ objectFit: 'cover', filter: 'grayscale(30%) contrast(1.05)' }}
                  />
                  {/* Bottom gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(12,11,9,0.85) 0%, transparent 50%)',
                  }} />
                  {/* Name inside image */}
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
                      color: '#4f8ef7', letterSpacing: '0.15em', marginBottom: '6px',
                    }}>
                      FRONT-END DEVELOPER
                    </p>
                    <p style={{
                      fontFamily: "'Playfair Display', serif", fontSize: '26px',
                      fontWeight: 900, lineHeight: 1.1, margin: 0,
                    }}>
                      Mr Yangxeng<br />YANG
                    </p>
                  </div>
                </div>

                {/* Floating experience badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', top: '30px', right: '-24px',
                    background: '#0a1020', border: '1px solid rgba(79,142,247,0.4)',
                    borderRadius: '16px', padding: '12px 18px', backdropFilter: 'blur(10px)',
                  }}
                >
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 600, color: '#4f8ef7', margin: 0, lineHeight: 1 }}>3+</p>
                  <p style={{ fontSize: '11px', color: '#888', margin: '4px 0 0', whiteSpace: 'nowrap' }}>Years exp.</p>
                </motion.div>

                {/* Glow */}
                <div style={{
                  position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)',
                  width: '200px', height: '60px',
                  background: 'rgba(79,142,247,0.25)', filter: 'blur(30px)', borderRadius: '50%', zIndex: -1,
                }} />
              </div>
            </motion.div>

            {/* ── Right: text content ── */}
            <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <motion.p
                custom={0} variants={fadeUp} initial="hidden" animate="show"
                style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
                  color: '#4f8ef7', letterSpacing: '0.2em', margin: 0,
                }}
              >
                — HELLO, WORLD / 2026
              </motion.p>

              <motion.h1
                custom={1} variants={fadeUp} initial="hidden" animate="show"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(44px, 5vw, 72px)',
                  fontWeight: 900, lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Crafting{' '}
                <em style={{ color: '#4f8ef7', fontStyle: 'italic' }}>digital</em>
                <br />
                experiences<br />
                <span style={{ color: '#444' }}>that matter.</span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeUp} initial="hidden" animate="show"
                style={{
                  fontSize: '16px', lineHeight: 1.8, color: '#999',
                  maxWidth: '420px', margin: 0,
                }}
              >
                  I'm Xeng, a Computer Science student and front-end developer
          passionate about creating beautiful, scalable, and interactive
          web applications. I love turning ideas into real digital products.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                custom={3} variants={fadeUp} initial="hidden" animate="show"
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04, backgroundColor: '#6fa8f9' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '14px 28px', background: '#4f8ef7', color: '#060b18',
                    borderRadius: '12px', fontWeight: 500, fontSize: '15px',
                    textDecoration: 'none', cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  <span>
                    <LuDownload/>
                </span> Download CV
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04, borderColor: '#4f8ef7', color: '#4f8ef7' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '14px 28px', background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.15)', color: '#ccc',
                    borderRadius: '12px', fontWeight: 500, fontSize: '15px',
                    textDecoration: 'none', cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                >
                  <span style={{ fontFamily: 'monospace' }}>&lt;/&gt;</span> View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── Divider ─── */}
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(79,142,247,0.4), transparent)' }} />

          {/* ─── Stats row ─── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i} variants={fadeUp} initial="hidden" animate="show"
                whileHover={{ y: -6, borderColor: 'rgba(79,142,247,0.5)' }}
                style={{
                  background: '#080f1e', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px', padding: '32px 28px',
                  cursor: 'default', transition: 'border-color 0.3s, transform 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Subtle corner accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '60px', height: '60px',
                  background: 'radial-gradient(circle at top right, rgba(79,142,247,0.12), transparent 70%)',
                }} />

                <div style={{ fontSize: '28px', marginBottom: '20px' }}>{stat.icon}</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '64px', fontWeight: 900,
                  color: '#4f8ef7', lineHeight: 1, marginBottom: '8px',
                }}>
                  {stat.number}
                </div>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.15em', color: '#fff',
                  margin: '0 0 6px', textTransform: 'uppercase',
                }}>
                  {stat.label}
                </h3>
                <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          SKILLS SECTION
      ════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 32px 120px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
            color: '#4f8ef7', letterSpacing: '0.2em', marginBottom: '12px',
          }}>
            — TECH STACK
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 700, margin: 0,
          }}>
            Tools I work with
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.07, background: 'rgba(79,142,247,0.15)', borderColor: '#4f8ef7', color: '#4f8ef7' }}
              style={{
                padding: '10px 22px', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px', fontSize: '14px', color: '#bbb',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'default', transition: 'all 0.2s',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ─── Bottom ambient glow ─── */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '3px',
        background: 'linear-gradient(to right, transparent, #d4a853, transparent)',
        zIndex: 50, opacity: 0.6,
      }} />
    </div>
  );
}