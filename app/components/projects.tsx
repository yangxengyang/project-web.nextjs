'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from "react";
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaCode, FaGraduationCap, FaMobileAlt, FaRobot, FaSchool, FaShoppingCart } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';
import { IoSchool } from 'react-icons/io5';
import { GrMandriva } from 'react-icons/gr';
import Link from 'next/link';

/* ─── Types ─── */
type Tab = 'projects' | 'certificates' | 'techstack';

/* ─── Tech stack data ─── */
const techStack = [
  // Languages
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    invert: false,
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    invert: false,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    invert: false,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    invert: false,
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    invert: false,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    invert: false,
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    invert: false,
  },

  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    invert: false,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    invert: false,
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    invert: false,
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    invert: false,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    invert: false,
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    invert: false,
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    invert: false,
  },

  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    invert: false,
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    invert: false,
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    invert: false,
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    invert: false,
  },

  // Database
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    invert: false,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    invert: false,
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    invert: false,
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    invert: false,
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    invert: false,
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    invert: false,
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    invert: false,
  },
  {
    name: "Visual Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
    invert: false,
  },
  {
  name: "Figma",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  invert: false,
},
];

const projects = [
      {
  title: 'HAL Tech Full Stack Development Training',
  desc: 'Completed Full Stack Development training at HAL Tech, gaining practical experience with HTML, CSS, JavaScript, Vue.js, Laravel, and NestJS for building modern web applications.',
  tags: [
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Laravel',
    'NestJS',
    'Full Stack Development'
  ],
  image: '/HALTECH.png',
  live: '#',
  github: '#',
  accent: '#42b883',
  status: 'Completed' as const,
  year: '2025',
},
{
  title: 'Korea-ASEAN Digital Academy (KADA) Lao PDR',
  desc: 'Completed Full Stack Development training at KADA Lao PDR, using React, Next.js, Supabase, Firebase, Tailwind CSS, and JavaScript to develop modern web applications.',
  tags: [
    'HTML',
    'CSS',
    'JavaScript',
    'Tailwind CSS',
    'React',
    'Next.js',
    'Supabase',
    'Firebase',
    'Full Stack Development'
  ],
  image: './KADA.png',
  live: '#',
  github: '#',
  accent: '#339933',
  status: 'Completed' as const,
  year: '2024',
},
{
  title: 'DDD Laos Training Program',
  desc: 'Completed professional training at DDD Laos, developing skills in touch typing, English communication, Microsoft Office, teamwork, and workplace professionalism.',
  tags: [
    'Typing',
    'English',
    'Microsoft Word',
    'Microsoft Excel',
    'PowerPoint',
    'Teamwork'
  ],
  image: './DDD.png',
  Openimage: '#',
  github: '#',
  accent: '#4f8ef7',
  status: 'Completed' as const,
  year: '2024',
},  
];

export const certificates = [
  {
    title: "Appy Course Online",
    issuer: "Frontend Development",
    date: "Jan 2024",
    id: "ERZRKQO1YZD5",
    color: "#4F8EF7",
    icon: FaGraduationCap,
  },
  {
    title: "Appy Course Online",
    issuer: "Backend Development",
    date: "Mar 2024",
    id: "NVP74KO1RZR0",
    color: "#38BDF8",
    icon: FaCode,
  },
  {
    title: "E-Commerce System",
    issuer: "Full Stack Development",
    date: "Jun 2024",
    id: "FCC-RWD-EKI",
    color: "#00B9FF",
    icon: FaShoppingCart,
  },
  {
    title: "Object Detection System",
    issuer: "C# Development",
    date: "Aug 2024",
    id: "FCC-JS-EKI",
    color: "#F7DF1E",
    icon: FaRobot,
  },
  {
    title: "School Management System",
    issuer: "Backend Development",
    date: "Oct 2024",
    id: "CISCO-NB-EKI",
    color: "#1BA0D8",
    icon: FaSchool,
  },
  {
    title: "Flutter Login App",
    issuer: "Flutter Development",
    date: "Nov 2024",
    id: "FLUTTER-LOGIN-001",
    color: "#02569B",
    icon: FaMobileAlt,
  },
];

/* ─── Tab config ─── */
const tabs: { id: Tab; label: string; icon: ReactNode }[] = [
  { id: 'projects',      label: 'Certificates', icon: <IoSchool size={22} /> },
  { id: 'certificates',  label: 'Projects',     icon: <LiaLaptopCodeSolid size={22} /> },
  { id: 'techstack',     label: 'Skills',       icon: <GrMandriva size={22} /> },
];

/* ─── Status helpers ─── */
type Status = 'Live' | 'Completed' | 'In Progress';

const statusDot: Record<Status, string> = {
  'Live':        'bg-emerald-400',
  'Completed':   'bg-blue-400',
  'In Progress': 'bg-amber-400',
};
const statusText: Record<Status, string> = {
  'Live':        'text-emerald-400',
  'Completed':   'text-blue-400',
  'In Progress': 'text-amber-400',
};
const statusBg: Record<Status, string> = {
  'Live':        'bg-emerald-400/10 border border-emerald-400/30',
  'Completed':   'bg-blue-400/10 border border-blue-400/30',
  'In Progress': 'bg-amber-400/10 border border-amber-400/30',
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  return (
    <div id="projects" className="min-h-screen bg-[#060b18] text-white relative overflow-hidden">

      {/* ─── Ambient glow ─── */}
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,142,247,0.13) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(30,64,175,0.10) 0%, transparent 60%)' }}
      />
      {/* ════════ CONTENT ════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-[100px] pb-[120px]">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          <p className="font-mono-jb text-[11px] text-[#4f8ef7] tracking-[0.22em] mb-4 uppercase">
             — Portfolio Overview
          </p>
          <h1 className="font-playfair font-black leading-[1.08] text-[clamp(40px,5vw,68px)] mb-5">
            Certifications &amp; <em className="text-[#4f8ef7] not-italic"> Projects & Skills</em>
          </h1>
          <p className="font-dm text-base text-[#666] leading-[1.8] max-w-[520px] mx-auto">
           Showcasing my journey as a Full Stack Developer building modern web & mobile applications.
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex mb-12 border border-white/[0.08] rounded-2xl overflow-hidden bg-[#080f1e]"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex-1 flex items-center justify-center gap-2.5 px-6 py-[18px]
                  font-dm text-[15px] font-medium border-r border-white/[0.07] last:border-r-0
                  transition-all duration-300 cursor-pointer
                  ${isActive ? 'bg-[#4f8ef7]/15 text-white' : 'bg-transparent text-[#555] hover:text-[#888]'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4f8ef7] rounded-t-sm"
                  />
                )}
                <span className={`text-base flex items-center ${isActive ? 'text-[#4f8ef7]' : 'text-[#444]'}`}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">

          {/* ══ TECH STACK ══ */}
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="relative overflow-hidden bg-[#080f1e] border border-white/[0.07] rounded-[18px] p-7 flex flex-col items-center gap-3.5 cursor-default transition-colors duration-300 hover:border-white/20"
                  >
                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                      style={{ background: 'radial-gradient(circle at top right, rgba(79,142,247,0.12), transparent 70%)' }}
                    />
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center bg-white/[0.05] rounded-2xl p-2.5">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className={`object-contain w-9 h-9 ${tech.invert ? 'invert' : ''}`}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    {/* Name */}
                    <span className="font-mono-jb text-[11px] font-semibold text-[#ccc] tracking-[0.04em] text-center leading-tight">
                      {tech.name}
                    </span>
                    {/* Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7] opacity-60" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ══ PROJECTS ══ */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -6 }}
                    className="project-card relative flex flex-col bg-[#080f1e] border border-white/[0.07] rounded-[20px] overflow-hidden transition-all duration-300 hover:border-white/20"
                  >
                    {/* ── Banner ── */}
                    <div className="relative h-[180px] overflow-hidden border-b border-white/[0.06]">
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="banner-img w-full h-full object-cover block transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080f1e]/60 pointer-events-none" />
                          {/* Fallback (hidden) */}
                          <div
                            className="absolute inset-0 hidden items-center justify-center"
                            style={{ background: `linear-gradient(135deg, ${project.accent}22 0%, transparent 100%)` }}
                          >
                            <span className="font-playfair font-black text-[80px] leading-none select-none"
                              style={{ color: `${project.accent}18` }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${project.accent}22 0%, ${project.accent}08 50%, transparent 100%)` }}>
                          <span className="font-playfair font-black text-[80px] leading-none select-none"
                            style={{ color: `${project.accent}18` }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      )}

                      {/* Year badge */}
                      <span className="absolute top-3.5 left-3.5 font-mono-jb text-[11px] text-white/40 tracking-widest z-10">
                        {project.year}
                      </span>

                      {/* Status badge */}
                      <span className={`absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-jb text-[11px] backdrop-blur-sm ${statusBg[project.status]} ${statusText[project.status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
                        {project.status}
                      </span>
                    </div>

                    {/* ── Content ── */}
                    <div className="flex-1 flex flex-col gap-3 p-6">
                      <h3 className="font-playfair text-xl font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                      <p className="font-dm text-sm text-[#666] leading-[1.7] flex-1">
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono-jb text-[11px] tracking-[0.03em] px-2.5 py-1 rounded-md border"
                            style={{ color: project.accent, background: `${project.accent}12`, borderColor: `${project.accent}30` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-center mt-10 font-mono-jb text-[11px] text-[#333] tracking-[0.15em]"
              >
                {projects.length} projects completed &amp; counting
              </motion.p>
            </motion.div>
          )}

          {/* ══ CERTIFICATES ══ */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
                {certificates.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ y: -5 }}
                    className="relative overflow-hidden bg-[#080f1e] border border-white/[0.07] rounded-[18px] p-6 flex gap-4 items-start transition-all duration-300 hover:border-white/20"
                  >
                    {/* Side accent bar */}
                    <div
                      className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm opacity-70"
                      style={{ background: cert.color }}
                    />

                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                      style={{ background: `radial-gradient(circle at top right, ${cert.color}18, transparent 70%)` }}
                    />

                    {/* Icon badge */}
                    <div
                      className="w-[52px] h-[52px] shrink-0 rounded-2xl flex items-center justify-center text-[22px] border"
                      style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}
                    >
                       <cert.icon size={22} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-dm text-[15px] font-medium text-[#eee] mb-1.5 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="font-mono-jb text-[11px] tracking-[0.04em] mb-2.5"
                        style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-mono-jb text-[11px] text-[#acacac] flex items-center gap-1">
                          <LuCalendarDays/> {cert.date}
                        </span>
                        <span className="font-mono-jb text-[10px] text-[#acacac] overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]">
                          ID: {cert.id}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 mt-3 font-mono-jb text-[12px] opacity-80 hover:opacity-100 transition-opacity no-underline"
                        style={{ color: cert.color }}
                      >
                        View Credential ↗
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-center mt-10 font-mono-jb text-[11px] text-[#333] tracking-[0.15em]"
              >
                {certificates.length} certificates earned
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Techstack count ─── */}
        {activeTab === 'techstack' && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-center mt-10 font-mono-jb text-[11px] text-[#333] tracking-[0.15em]"
          >
            {techStack.length} technologies &amp; counting
          </motion.p>
        )}
      </div>

      {/* ─── Bottom glow line ─── */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[3px] z-50 opacity-50"
        style={{ background: 'linear-gradient(to right, transparent, #4f8ef7, transparent)' }}
      />
    </div>
  );
}