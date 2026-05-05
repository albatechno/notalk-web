import Image from "next/image";
import { LINKS } from "@/lib/config";

const SOCIALS = [
  { label: "YouTube", href: LINKS.youtube },
  { label: "SoundCloud", href: LINKS.soundcloud },
  { label: "Bandcamp", href: LINKS.bandcamp },
  { label: "Instagram", href: LINKS.instagram },
];

export default function Footer() {
  return (
    <footer
      className="py-8 md:py-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#050505",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Image
            src="/NTK.svg"
            alt="NoTalk"
            width={48}
            height={36}
            className="opacity-30 hover:opacity-100 transition-opacity duration-300"
          />

          <nav className="flex items-center gap-6 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase transition-colors duration-300 text-white/25 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
