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
          <p
            className="text-xs tracking-[0.15em] uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            NoTalk — Techno duo / DJs / Producers
          </p>

          <nav className="flex items-center gap-6 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.25)" }}
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
