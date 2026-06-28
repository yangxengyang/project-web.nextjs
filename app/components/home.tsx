"use client";

import { useEffect, useState } from "react";



export default function Homepage() {
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

        {/* Dark overlay — fades left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,rgba(10,10,14,1) 35%, rgba(10,10,14,0.55) 65%, rgba(10,10,14,0.15) 100%)",
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
              "background: linear-gradient(90deg, #177CE8, #60a5fa)",
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
              color: "#177CE8",
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
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1.4rem",
            }}
          >
            Hi,
            <br />
            <span style={{ color: "#177CE8" }}>I'm Xeng</span>
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
               color:"#FFFF"
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
         
          </div>
        </div>
      </section>
  );
}