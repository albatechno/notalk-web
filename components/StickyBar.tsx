"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LINKS } from "@/lib/config";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: "rgba(5,5,5,0.96)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
      }}
      aria-hidden={!visible}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-12 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-300 shrink-0">
          <Image src="/NTK.svg" alt="NoTalk" width={28} height={22} />
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={LINKS.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300"
          >
            Listen
          </a>

          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.6rem" }}>|</span>

          <a
            href="#video"
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300"
          >
            Video Sets
          </a>

          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.6rem" }}>|</span>

          <a
            href={LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase px-4 py-1.5 transition-all duration-300 border border-white/20 text-foreground hover:bg-foreground hover:text-background"
          >
            Booking
          </a>
        </div>
      </div>
    </div>
  );
}
