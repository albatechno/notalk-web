"use client";

import { useEffect, useRef } from "react";
import { LINKS } from "@/lib/config";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const fit = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    fit();
    window.addEventListener("resize", fit);

    const tick = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const count = 16;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < count; i++) {
        const y0 = (h / (count + 1)) * (i + 1);
        const amp = 1.2 + (i % 4) * 0.9;
        const freq = 0.002 + i * 0.00012;
        const spd = 0.12 + i * 0.018;
        const alpha = i % 3 === 0 ? 0.07 : 0.04;

        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 2) {
          const y =
            y0 +
            Math.sin(x * freq + t * spd) * amp +
            Math.sin(x * freq * 2.8 + t * spd * 0.65) * (amp * 0.3);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      t += 0.4;
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/notalk-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45, transform: "scale(1.35)", filter: "blur(2px)" }}
      >
        <source src="/notalk-video.webm" type="video/webm" />
        <source src="/notalk-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay over video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(5,5,5,0.55)" }}
        aria-hidden="true"
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "#9A9A9A" }}
        >
          Techno / DJs / Producers
        </p>

        {/* 3D perspective container — Plastikman technique */}
        <div style={{ perspective: "1000px", perspectiveOrigin: "0% 60%" }}>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(6.5rem, 22vw, 18rem)",
              color: "#F2F2F2",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              transformStyle: "preserve-3d",
              animation: "depth-breathe 10s ease-in-out infinite",
              display: "block",
            }}
          >
            NoTalk
          </h1>
        </div>

        <div className="max-w-2xl mt-8">
          <p
            className="text-lg md:text-xl font-light leading-relaxed mb-4"
            style={{ color: "#F2F2F2" }}
          >
            Mental, hypnotic and fast techno shaped through atmosphere, texture and repetition.
          </p>

          <p
            className="text-sm md:text-base leading-relaxed mb-12"
            style={{ color: "#9A9A9A" }}
          >
            A DJ and producer duo exploring dense rhythms, ambient pressure and immersive sonic structures.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Listen on SoundCloud
            </a>

            <a
              href="#video"
              className="inline-flex items-center px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border border-white/25 text-muted hover:border-foreground hover:text-foreground"
            >
              Watch Video Sets
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 text-muted hover:text-foreground"
            >
              Booking
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
        aria-hidden="true"
      />
    </section>
  );
}
