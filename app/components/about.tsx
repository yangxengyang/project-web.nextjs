'use client';

import Image from 'next/image';
import { PiCodeBold, PiGlobeBold, PiMedalBold } from "react-icons/pi";
import { FcDownload } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const stats = [
  {
    icon: PiCodeBold,
    number: 11,
    label: "Projects",
    description: "Innovative web solutions crafted",
  },
  {
    icon: PiMedalBold,
    number: 7,
    label: "Certificates",
    description: "Professional skills validated",
  },
  {
    icon: PiGlobeBold,
    number: 3,
    label: "Years Active",
    description: "Continuous learning journey",
  },
];

const skills = ['HTML & CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Git', 'Node.js'];

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen text-white overflow-hidden relative bg-[#060b18] font-sans selection:bg-[#4f8ef7] selection:text-[#060b18]"
    >
      {/* ─── Ambient background ─── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 70% 20%, rgba(79,142,247,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(30,64,175,0.12) 0%, transparent 60%)',
        }}
      />

      <section className="relative z-10 max-w-[1200px] mx-auto px-8 pt-[100px] pb-20">
        <div className="flex flex-col gap-16">

          {/* Top row: avatar + intro text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ── Left: avatar ── */}
            <div className="relative">
              {/* Floating label */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#4f8ef7] text-[#060b18] rounded-full px-5 py-1.5 text-xs font-semibold tracking-wider whitespace-nowrap z-10">
                ✦ Available for work
              </div>

              {/* Avatar ring */}
              <div className="relative w-full max-w-[380px] mx-auto">
                <div className="border border-[#4f8ef7]/30 bg-[#0a1020] rounded-[24px] overflow-hidden aspect-[1/1.1] relative">
                  <Image
                    src="/image/myimage.png"
                    alt="Mr Yangxeng YANG"
                    fill
                    className="object-cover grayscale-[30%] contrast-[1.05]"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09]/85 via-transparent to-transparent" />
                  
                  {/* Name inside image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs text-[#4f8ef7] tracking-widest mb-1.5 font-semibold">
                      SOFTWARE DEVELOPER
                    </p>
                    <p className="text-white font-bold text-2xl mb-3 leading-tight">
                      Mr Yangxeng YANG
                    </p>
                  </div>
                </div>

                {/* Experience badge (Static - No floating effect) */}
                <div className="absolute top-[30px] -right-6 bg-[#0a1020] border border-[#4f8ef7]/40 rounded-[16px] px-[18px] py-3 backdrop-blur-[10px]">
                  <p className="text-[22px] font-bold text-[#4f8ef7] m-0 leading-none">3+</p>
                  <p className="text-[11px] text-[#888] mt-1 mb-0 whitespace-nowrap">Years exp.</p>
                </div>

                {/* Glow */}
                <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[#4f8ef7]/25 blur-[30px] rounded-full -z-10" />
              </div>
            </div>

            {/* ── Right: text content ── */}
            <div className="flex flex-col gap-7">
              <p className="text-xs text-[#4f8ef7] tracking-[0.15em] m-0 font-semibold">
                — HELLO, WORLD / 2026
              </p>

              <h1 className="text-[36px] sm:text-[4.5vw] lg:text-[60px] font-extrabold leading-[1.15] m-0">
                Crafting{' '}
                <span className="text-[#4f8ef7]">digital</span>
                <br />
                experiences<br />
                <span className="text-[#444]">that matter.</span>
              </h1>

              <p className="text-base text-[#999] leading-[1.7] max-w-[420px] m-0">
                I&apos;m Xeng, a Computer Science student and Software developer
                passionate about creating beautiful, scalable, and interactive
                web applications. I love turning ideas into real digital products.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/yangxengyang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#177CE8] text-white px-[2.2rem] py-[0.82rem] rounded-[50px] text-[0.9rem] font-semibold no-underline inline-flex items-center gap-2.5 transition duration-300 hover:bg-[#177CE8]/90"
                >
                  <FaGithub size={22} />
                  View on GitHub
                </a>

                <a
                  href="./My CV.pdf"
                  className="bg-transparent text-white border border-white/35 px-[2.2rem] py-[0.82rem] rounded-[50px] text-[0.9rem] font-semibold cursor-pointer no-underline inline-flex items-center gap-2 transition duration-300 hover:bg-blue-100/15"
                >
                  <FcDownload size={20}/>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          SKILLS SECTION
      ════════════════════════════ */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-8 pb-[120px]">
            <div className="mb-10">
          <p className="text-[11px] text-[#4f8ef7] tracking-widest mb-3 font-semibold">
            — TECH STACK
          </p>

          <h2 className="text-[28px] sm:text-[3.5vw] lg:text-[42px] font-bold m-0 leading-tight">
            Tools I use to build modern digital experiences
          </h2>

          <p className="text-sm text-white/40 mt-3 max-w-[520px] leading-relaxed">
            A curated set of technologies, frameworks, and tools I rely on to design, develop,
            and deliver fast, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-[22px] py-2.5 border border-white/10 rounded-full text-sm text-[#bbb] cursor-default transition-all duration-200 hover:scale-105 hover:bg-[#4f8ef7]/15 hover:border-[#4f8ef7] hover:text-[#4f8ef7]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ─── Bottom ambient glow ─── */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[3px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent z-50 opacity-60" />
    </div>
  );
}