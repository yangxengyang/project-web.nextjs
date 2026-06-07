"use client";

import Spline from "@splinetool/react-spline";
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
    <div>
      {/* ======== NAVBAR ======== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3rem",
          height: "70px",
          background: "rgba(10,10,14,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4C13 4 8 8.5 8 14.5C8 18 9.5 21 12 23.5L10 34L19 30L28 34L26 23.5C28.5 21 30 18 30 14.5C30 8.5 25 4 19 4Z"
              fill="#e8184d"
            />
            <circle cx="15.5" cy="13.5" r="2" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { label: "DOCUMENTATION", badge: false },
            { label: "ENTERPRISE", badge: false },
            { label: "RESOURCES ▾", badge: true },
          ].map((item) => (
            <li key={item.label}>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  opacity: 0.85,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {item.badge && (
                  <span
                    style={{
                      background: "#e8184d",
                      color: "white",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      padding: "2px 6px",
                      borderRadius: 3,
                    }}
                  >
                    NEW
                  </span>
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
          {/* GitHub */}
          <a href="#" style={{ color: "white", opacity: 0.7, display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.3c.85.004 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49C19.13 20.64 22 16.79 22 12.26 22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" style={{ color: "white", opacity: 0.7, display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" style={{ color: "white", opacity: 0.7, display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ======== HERO SECTION ======== */}
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0a0a0e",
        }}
      >
        {/* Background Image */}
        <img
          src="/Ai1.png"
          alt="hero background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
          }}
        />

        {/* Dark overlay — fades left like NestJS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,10,14,1) 35%, rgba(10,10,14,0.55) 65%, rgba(10,10,14,0.15) 100%)",
            zIndex: 1,
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background:
              "linear-gradient(to top, rgba(10,10,14,1) 0%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* ---- Hero Content ---- */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 6%",
            maxWidth: 680,
            marginTop: 70, // offset navbar
          }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#e8184d",
              marginBottom: "1.4rem",
            }}
          >
            Student at National University of Laos
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1.4rem",
            }}
          >
            Hi,
            <br />
            <span style={{ color: "#e8184d" }}>I'm Xeng</span>
          </h1>

          {/* Static subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: "0.4rem",
              maxWidth: 460,
            }}
          >
            I build modern and responsive websites with clean design and smooth
            user experiences.
          </p>

          {/* Typewriter line */}
          <p
            style={{
              fontSize: "1rem",
              minHeight: "1.6rem",
              marginBottom: "2.8rem",
            }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #ff2d6b, #ff8fa3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayed}
            </span>
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "#e8184d",
                marginLeft: 3,
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: "#e8184d",
                color: "white",
                border: "none",
                padding: "0.82rem 2.2rem",
                borderRadius: 50,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Documentation
            </a>

            <a
              href="#"
              style={{
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.35)",
                padding: "0.82rem 2.2rem",
                borderRadius: 50,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.3c.85.004 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49C19.13 20.64 22 16.79 22 12.26 22 6.58 17.52 2 12 2z" />
              </svg>
              Source code
            </a>
          </div>
        </div>
      </section>
   </div>
  );
}