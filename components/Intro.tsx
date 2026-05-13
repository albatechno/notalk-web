"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Intro() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2200);
    const t2 = setTimeout(() => setGone(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{
        background: "#050505",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <style>{`
        @keyframes ntk-on {
          0%   { opacity: 0; filter: blur(8px) brightness(3); transform: scale(1.06); }
          8%   { opacity: 0.9; filter: blur(0px) brightness(2.4); transform: scale(1.01); }
          12%  { opacity: 0.15; filter: blur(2px) brightness(1); transform: scale(1.03); }
          18%  { opacity: 0.85; filter: blur(0px) brightness(1.8); transform: scale(1.005); }
          22%  { opacity: 0.3; filter: blur(1px) brightness(0.8); }
          30%  { opacity: 1; filter: blur(0px) brightness(1.2); transform: scale(1); }
          38%  { opacity: 0.7; filter: blur(0.5px) brightness(0.9); }
          44%  { opacity: 1; filter: blur(0px) brightness(1.05); transform: scale(1); }
          100% { opacity: 0.92; filter: blur(0px) brightness(1); transform: scale(1); }
        }

        @keyframes ntk-scanline {
          0%   { transform: translateY(-100%); opacity: 0.06; }
          100% { transform: translateY(200%); opacity: 0.06; }
        }

        .ntk-logo {
          animation: ntk-on 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .ntk-scanline {
          position: absolute;
          left: -20%;
          width: 140%;
          height: 2px;
          background: rgba(242, 242, 242, 0.12);
          animation: ntk-scanline 1.8s linear 0.1s infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="relative overflow-hidden" style={{ width: 72, height: 54 }}>
        <div className="ntk-scanline" />
        <Image
          src="/NTK.svg"
          alt="NoTalk"
          width={72}
          height={54}
          className="ntk-logo"
          style={{ opacity: 0 }}
          priority
        />
      </div>
    </div>
  );
}
