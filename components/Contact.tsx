import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CalendlyModal from "@/components/CalendlyModal";
import { LINKS } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

const SOCIALS = [
  { label: "YouTube", href: LINKS.youtube },
  { label: "SoundCloud", href: LINKS.soundcloud },
  { label: "Mixcloud", href: LINKS.mixcloud },
  { label: "Instagram", href: LINKS.instagram },
];

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
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

        {/* Live photo strip */}
        <FadeIn>
          {/* desktop */}
          <div className="hidden md:grid grid-cols-3 gap-3 mb-20">
            {["/live/live_2.webp", "/live/live_1.webp", "/live/live_3.webp"].map((src) => (
              <ImagePlaceholder key={src} src={src} className="aspect-video w-full" />
            ))}
          </div>
          {/* mobile horizontal scroll */}
          <div
            className="flex md:hidden gap-3 mb-16 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {["/live/live_2.webp", "/live/live_1.webp", "/live/live_3.webp"].map((src) => (
              <div key={src} className="shrink-0 w-[78vw]">
                <ImagePlaceholder src={src} className="aspect-video w-full" />
              </div>
            ))}
            <div className="shrink-0 w-6" aria-hidden="true" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-6">
            <FadeIn>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "#9A9A9A" }}
              >
                {dict.label}
              </p>
              <h2
                className="leading-none mb-8"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  color: "#F2F2F2",
                  letterSpacing: "0.01em",
                }}
              >
                {dict.title1}
                <br />
                {dict.title2}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-10 max-w-sm"
                style={{ color: "#9A9A9A" }}
              >
                {dict.description}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${LINKS.bookingEmail}`}
                  className="group inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase font-medium text-foreground hover:text-accent transition-colors duration-300"
                >
                  {LINKS.bookingEmail}
                  <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                </a>

                <CalendlyModal url={LINKS.calendly} label={dict.scheduleCall} />
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6">
            <FadeIn delay={150}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <ImagePlaceholder src="/photos/photo_1.webp" className="aspect-[3/4] w-full" />
                <ImagePlaceholder src="/photos/photo_2.webp" className="aspect-[3/4] w-full" />
              </div>

              <p
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "#9A9A9A" }}
              >
                {dict.linksLabel}
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
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
