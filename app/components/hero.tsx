"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "I craft fast, beautiful, and responsive web experiences.",
    "I build modern UI with clean and scalable code.",
    "Turning ideas into pixel-perfect products.",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "700px" }}
    >
      {/* Background Image */}
      <img
        src="https://teamplatedev.github.io/iict-lecture/public/images/hero_bg.jpg"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,10,30,0.75) 0%, rgba(5,15,40,0.65) 60%, rgba(10,10,14,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="font-mono text-[#63c8ff] text-xs uppercase mb-5"
          style={{ letterSpacing: "0.22em" }}
        >
      Student at National University of Laos
        </p>

        <h1
          className="text-white font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.08 }}
        >
          Front End
          <br />
          <span style={{ color: "#63c8ff" }}>Developer</span>
        </h1>

        {/* Typing Text */}
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          <span className="bg-gradient-to-r from-[#63c8ff] to-blue-400 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="animate-pulse ml-1">|</span>
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 text-[14px] font-semibold bg-[#63c8ff] text-[#0a0a0e] rounded-md
                       hover:opacity-85 transition-all duration-200 hover:-translate-y-px"
          >
            View my work
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 text-[14px] font-medium text-white/70 rounded-md
                       border border-white/15 hover:border-white/30 hover:text-white
                       transition-all duration-200"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}