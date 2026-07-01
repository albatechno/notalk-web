"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyModal({ url, label }: { url: string; label: string }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const open = () => {
    window.Calendly?.initPopupWidget({ url });
  };

  return (
    <button
      onClick={open}
      className="inline-flex items-center px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border border-foreground text-foreground hover:bg-foreground hover:text-background self-start"
    >
      {label}
    </button>
  );
}
