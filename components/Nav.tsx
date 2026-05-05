"use client";

import { useEffect, useState } from "react";
import { LINKS } from "@/lib/config";

const NAV_LINKS = [
  { label: "Sound", href: "#sound" },
  { label: "Video", href: "#video" },
  { label: "Booking", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#home"
          className="text-sm font-bold tracking-[0.15em] uppercase text-foreground hover:text-muted transition-colors duration-300"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          NoTalk
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href={LINKS.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-muted hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            Listen
          </a>
        </nav>
      </div>
    </header>
  );
}
