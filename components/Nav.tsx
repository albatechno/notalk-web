"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LINKS } from "@/lib/config";

const NAV_LINKS = [
  { label: "Sound", href: "#sound" },
  { label: "Video", href: "#video" },
  { label: "Booking", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || open ? "rgba(5,5,5,0.92)" : "transparent",
          backdropFilter: scrolled || open ? "blur(12px)" : "none",
          borderBottom: scrolled || open
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: "calc(3.5rem + env(safe-area-inset-top))", paddingTop: "env(safe-area-inset-top)" }}>
          <a href="#home" onClick={close} className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image src="/NTK.svg" alt="NoTalk" width={42} height={32} priority />
          </a>

          {/* Desktop nav */}
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          >
            <span
              className="block h-px w-5 bg-foreground transition-all duration-300 origin-center"
              style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-5 bg-foreground transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px w-5 bg-foreground transition-all duration-300 origin-center"
              style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-10 md:hidden transition-opacity duration-300"
        style={{
          background: "#050505",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          overscrollBehavior: "none",
        }}
      >
        <nav className="flex flex-col gap-2 mb-12">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="leading-none transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 16vw, 5rem)",
                color: "#F2F2F2",
                letterSpacing: "0.02em",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <a
            href={LINKS.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-foreground"
          >
            Listen on SoundCloud
            <span className="block h-px w-5 bg-current transition-all duration-300 group-hover:w-9" />
          </a>
          <a
            href={`mailto:${LINKS.bookingEmail}`}
            onClick={close}
            className="text-xs tracking-[0.2em] uppercase font-medium text-muted hover:text-foreground transition-colors duration-300"
          >
            {LINKS.bookingEmail}
          </a>
        </div>
      </div>
    </>
  );
}
