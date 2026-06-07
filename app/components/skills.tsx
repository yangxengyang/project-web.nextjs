'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from "react";
import { DiCode } from "react-icons/di";


/* ─── Types ─── */
type Tab = 'projects' | 'certificates' | 'techstack';

/* ─── Tech stack data with devicon CDN icons ─── */
const techStack = [
  { name: 'HTML',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',              color: '#e34f26' },
  { name: 'CSS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',                color: '#1572b6' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',    color: '#f7df1e' },
  { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',   color: '#3178c6' },
  { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',             color: '#61dafb' },
  { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',           color: '#ffffff' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38bdf8' },
  { name: 'Node JS',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',           color: '#339933' },
  { name: 'Bootstrap',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',     color: '#7952b3' },
  { name: 'Firebase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',       color: '#ffca28' },
  { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',             color: '#f24e1e' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',                 color: '#f05032' },
  { name: 'Vercel',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',           color: '#ffffff' },
  { name: 'Vite',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',           color: '#646cff' },
  { name: 'Material UI',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',   color: '#007fff' },
  { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',             color: '#4479a1' },
  { name: 'VS Code',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',           color: '#007acc' },
  { name: 'Linux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',             color: '#fcc624' },
];

/* ─── Projects data ─── */
const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing my skills and projects.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://eki.my.id',
    github: '#',
    accent: '#4f8ef7',
    status: 'Live',
    year: '2025',
  },
  {
    title: 'School Management System',
    desc: 'A full-featured web app for managing students, classes, attendance, and grades with role-based authentication.',
    tags: ['React.js', 'Node.js', 'Firebase', 'Material UI'],
    live: '#',
    github: '#',
    accent: '#339933',
    status: 'Completed',
    year: '2024',
  },
  {
    title: 'E-Commerce Landing Page',
    desc: 'A sleek product landing page with cart functionality, smooth animations, and a fully responsive layout.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    live: '#',
    github: '#',
    accent: '#f7df1e',
    status: 'Completed',
    year: '2024',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app using OpenWeather API displaying forecasts, humidity, and wind data with dynamic themes.',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Vite'],
    live: '#',
    github: '#',
    accent: '#38bdf8',
    status: 'Completed',
    year: '2024',
  },
  {
    title: 'Task Management App',
    desc: 'A Kanban-style productivity app with drag-and-drop, priority labels, and local storage persistence.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    live: '#',
    github: '#',
    accent: '#a78bfa',
    status: 'Completed',
    year: '2023',
  },
  {
    title: 'Network Monitor Dashboard',
    desc: 'A real-time network monitoring dashboard displaying device status, bandwidth usage, and alert logs.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Chart.js'],
    live: '#',
    github: '#',
    accent: '#f05032',
    status: 'In Progress',
    year: '2025',
  },
];

/* ─── Certificates data ─── */
const certificates = [
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2024',
    id: 'ERZRKQO1YZD5',
    color: '#4f8ef7',
    icon: '🎓',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'Mar 2024',
    id: 'NVP74KO1RZR0',
    color: '#38bdf8',
    icon: '💻',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Jun 2023',
    id: 'fcc-rwd-eki',
    color: '#00b9ff',
    icon: '📱',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Aug 2023',
    id: 'fcc-js-eki',
    color: '#f7df1e',
    icon: '⚡',
  },
  {
    title: 'Cisco Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2023',
    id: 'cisco-nb-eki',
    color: '#1ba0d8',
    icon: '🌐',
  },
  {
    title: 'Google IT Support',
    issuer: 'Google / Coursera',
    date: 'Dec 2023',
    id: 'google-it-eki',
    color: '#34a853',
    icon: '🔧',
  },
  {
    title: 'React.js — The Complete Guide',
    issuer: 'Udemy',
    date: 'Feb 2024',
    id: 'udemy-react-eki',
    color: '#61dafb',
    icon: '⚛️',
  },
];

/* ─── Tab config ─── */

const tabs: { id: Tab; label: string; icon: ReactNode }[] = [
  { id: 'projects', label: 'Projects', icon: <DiCode/> },
  { id: 'certificates', label: 'Certificates', icon: '🏅' },
  { id: 'techstack', label: 'Tech Stack', icon: '⚡' },
];
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  show:   (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>('techstack');

  return (
    <div
      id="skills"
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: '#060b18', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── Fonts ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #4f8ef7; color: #060b18; }
      `}</style>

      {/* ─── Ambient glow ─── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,142,247,0.13) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(30,64,175,0.10) 0%, transparent 60%)',
      }} />

      {/* ─── Grid texture ─── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sg" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4f8ef7" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sg)" />
      </svg>

      {/* ════════════════ CONTENT ════════════════ */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px 120px' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
            color: '#4f8ef7', letterSpacing: '0.22em', marginBottom: '16px',
          }}>
            — PORTFOLIO SHOWCASE
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 900, lineHeight: 1.08, margin: '0 0 20px',
          }}>
            Skills &amp; <em style={{ color: '#4f8ef7', fontStyle: 'italic' }}>Expertise</em>
          </h1>
          <p style={{
            fontSize: '16px', color: '#666', lineHeight: 1.8,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Explore my journey through projects, certifications, and technical expertise.
            Each section represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'flex', gap: '0', marginBottom: '48px',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
            overflow: 'hidden', background: '#080f1e',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1, padding: '18px 24px',
                  background: isActive ? 'rgba(79,142,247,0.15)' : 'transparent',
                  border: 'none',
                  borderRight: '1px solid rgba(255,255,255,0.07)',
                  color: isActive ? '#fff' : '#555',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px', fontWeight: 500,
                  cursor: 'pointer', transition: 'all 0.25s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  position: 'relative',
                }}
              >
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '2px', background: '#4f8ef7', borderRadius: '2px 2px 0 0',
                    }}
                  />
                )}
                <span style={{
                  fontFamily: tab.icon === '<>' ? "'JetBrains Mono', monospace" : 'inherit',
                  fontSize: tab.icon === '<>' ? '13px' : '16px',
                  color: isActive ? '#4f8ef7' : '#444',
                }}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '16px',
              }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -6, borderColor: `${tech.color}55`, scale: 1.03 }}
                    style={{
                      background: '#080f1e',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '18px', padding: '28px 16px',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '14px',
                      cursor: 'default', transition: 'border-color 0.25s, transform 0.25s',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Corner glow */}
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      width: '50px', height: '50px',
                      background: `radial-gradient(circle at top right, ${tech.color}18, transparent 70%)`,
                    }} />

                    {/* Icon */}
                    <div style={{
                      width: '56px', height: '56px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${tech.color}12`,
                      borderRadius: '14px', padding: '10px',
                    }}>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={36}
                        height={36}
                        style={{ objectFit: 'contain', filter: tech.name === 'Next.js' || tech.name === 'Vercel' ? 'invert(1)' : 'none' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Name */}
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px', fontWeight: 600,
                      color: '#ccc', letterSpacing: '0.04em',
                      textAlign: 'center', lineHeight: 1.3,
                    }}>
                      {tech.name}
                    </span>

                    {/* Color dot */}
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: tech.color, opacity: 0.7,
                    }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '20px',
              }}>
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -6, borderColor: `${project.accent}44` }}
                    style={{
                      background: '#080f1e',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '20px', overflow: 'hidden',
                      display: 'flex', flexDirection: 'column',
                      transition: 'border-color 0.25s, transform 0.25s',
                      position: 'relative',
                    }}
                  >
                    {/* ── Banner ── */}
                    <div style={{
                      height: '120px', position: 'relative',
                      background: `linear-gradient(135deg, ${project.accent}22 0%, ${project.accent}08 50%, transparent 100%)`,
                      borderBottom: `1px solid ${project.accent}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {/* Large faded number */}
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '80px', fontWeight: 900,
                        color: `${project.accent}15`, lineHeight: 1,
                        userSelect: 'none',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {/* Status badge */}
                      <div style={{
                        position: 'absolute', top: '14px', right: '14px',
                        padding: '4px 12px', borderRadius: '999px',
                        background: project.status === 'Live'
                          ? 'rgba(79,200,120,0.15)'
                          : project.status === 'In Progress'
                          ? 'rgba(250,189,67,0.15)'
                          : 'rgba(79,142,247,0.15)',
                        border: `1px solid ${
                          project.status === 'Live' ? 'rgba(79,200,120,0.3)'
                          : project.status === 'In Progress' ? 'rgba(250,189,67,0.3)'
                          : 'rgba(79,142,247,0.3)'
                        }`,
                        fontSize: '11px', fontFamily: "'JetBrains Mono', monospace",
                        color: project.status === 'Live' ? '#4fc878'
                          : project.status === 'In Progress' ? '#fabd43'
                          : '#4f8ef7',
                        display: 'flex', alignItems: 'center', gap: '5px',
                      }}>
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          background: 'currentColor', display: 'inline-block',
                        }} />
                        {project.status}
                      </div>
                      {/* Year */}
                      <div style={{
                        position: 'absolute', top: '14px', left: '14px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px', color: '#444', letterSpacing: '0.1em',
                      }}>
                        {project.year}
                      </div>
                    </div>

                    {/* ── Content ── */}
                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '20px', fontWeight: 700,
                        color: '#fff', margin: 0, lineHeight: 1.2,
                      }}>
                        {project.title}
                      </h3>

                      <p style={{
                        fontSize: '14px', color: '#666', lineHeight: 1.7,
                        margin: 0, flex: 1,
                      }}>
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                        {project.tags.map((tag) => (
                          <span key={tag} style={{
                            padding: '4px 10px',
                            background: `${project.accent}12`,
                            border: `1px solid ${project.accent}30`,
                            borderRadius: '6px',
                            fontSize: '11px', fontFamily: "'JetBrains Mono', monospace",
                            color: project.accent, letterSpacing: '0.03em',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div style={{
                        display: 'flex', gap: '10px', marginTop: '8px',
                        paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <a href={project.live} target="_blank" rel="noreferrer" style={{
                          flex: 1, padding: '10px',
                          background: `${project.accent}18`,
                          border: `1px solid ${project.accent}30`,
                          borderRadius: '10px', textDecoration: 'none',
                          color: project.accent, fontSize: '13px',
                          fontFamily: "'JetBrains Mono', monospace",
                          textAlign: 'center', transition: 'background 0.2s',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}>
                          ↗ Live Demo
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer" style={{
                          flex: 1, padding: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px', textDecoration: 'none',
                          color: '#888', fontSize: '13px',
                          fontFamily: "'JetBrains Mono', monospace",
                          textAlign: 'center', transition: 'background 0.2s',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}>
                          ⌥ GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project count */}
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{
                  textAlign: 'center', marginTop: '40px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', color: '#333', letterSpacing: '0.15em',
                }}
              >
                {projects.length} projects completed &amp; counting
              </motion.p>
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '16px',
              }}>
                {certificates.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -5, borderColor: `${cert.color}44` }}
                    style={{
                      background: '#080f1e',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '18px', padding: '24px',
                      display: 'flex', gap: '18px', alignItems: 'flex-start',
                      transition: 'border-color 0.25s, transform 0.25s',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Side accent bar */}
                    <div style={{
                      position: 'absolute', left: 0, top: '20%', bottom: '20%',
                      width: '3px', borderRadius: '0 3px 3px 0',
                      background: cert.color, opacity: 0.7,
                    }} />

                    {/* Corner glow */}
                    <div style={{
                      position: 'absolute', top: 0, right: 0, width: '80px', height: '80px',
                      background: `radial-gradient(circle at top right, ${cert.color}15, transparent 70%)`,
                    }} />

                    {/* Icon badge */}
                    <div style={{
                      width: '52px', height: '52px', flexShrink: 0,
                      borderRadius: '14px',
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '22px',
                    }}>
                      {cert.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '15px', fontWeight: 500,
                        color: '#eee', margin: '0 0 6px',
                        lineHeight: 1.3,
                      }}>
                        {cert.title}
                      </h3>

                      <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px', color: cert.color,
                        margin: '0 0 10px', letterSpacing: '0.04em',
                      }}>
                        {cert.issuer}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        {/* Date */}
                        <span style={{
                          fontSize: '11px', color: '#444',
                          fontFamily: "'JetBrains Mono', monospace",
                          display: 'flex', alignItems: 'center', gap: '4px',
                        }}>
                          📅 {cert.date}
                        </span>

                        {/* Credential ID */}
                        <span style={{
                          fontSize: '10px', color: '#333',
                          fontFamily: "'JetBrains Mono', monospace",
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          maxWidth: '140px',
                        }}>
                          ID: {cert.id}
                        </span>
                      </div>

                      {/* View credential link */}
                      <a href="#" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        marginTop: '12px',
                        fontSize: '12px', fontFamily: "'JetBrains Mono', monospace",
                        color: cert.color, textDecoration: 'none',
                        opacity: 0.8, transition: 'opacity 0.2s',
                      }}>
                        View Credential ↗
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cert count */}
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{
                  textAlign: 'center', marginTop: '40px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', color: '#333', letterSpacing: '0.15em',
                }}
              >
                {certificates.length} certificates earned
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Bottom count label ─── */}
        {activeTab === 'techstack' && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{
              textAlign: 'center', marginTop: '40px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', color: '#333', letterSpacing: '0.15em',
            }}
          >
            {techStack.length} technologies &amp; counting
          </motion.p>
        )}
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