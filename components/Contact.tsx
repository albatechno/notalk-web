import FadeIn from "@/components/FadeIn";
import { LINKS } from "@/lib/config";

const SOCIALS = [
  { label: "YouTube", href: LINKS.youtube },
  { label: "SoundCloud", href: LINKS.soundcloud },
  { label: "Bandcamp", href: LINKS.bandcamp },
  { label: "Instagram", href: LINKS.instagram },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-44"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="border-t mb-20"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-6">
            <FadeIn>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "#9A9A9A" }}
              >
                Contact
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8"
                style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
              >
                Bookings
                <br />& Contact
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-10 max-w-sm"
                style={{ color: "#9A9A9A" }}
              >
                For bookings, releases, collaborations or inquiries, contact NoTalk directly.
              </p>

              <a
                href={`mailto:${LINKS.bookingEmail}`}
                className="group inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase font-medium text-foreground hover:text-accent transition-colors duration-300"
              >
                {LINKS.bookingEmail}
                <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
              </a>
            </FadeIn>
          </div>

          <div className="md:col-span-6 md:flex md:items-end md:justify-end">
            <FadeIn delay={150}>
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "#9A9A9A" }}
                >
                  Links
                </p>
                <ul className="flex flex-col gap-3">
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm tracking-wider uppercase font-medium text-muted hover:text-foreground transition-colors duration-300"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
