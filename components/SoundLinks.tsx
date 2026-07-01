import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { LINKS } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

const SC_EMBED =
  `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/santiago-beltran-alba` +
  `&visual=true&auto_play=false&color=%23ffffff&hide_related=true` +
  `&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;

const MC_EMBED =
  `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=0&light=0` +
  `&feed=%2Fnotalkmusik%2Flab-nights%2F`;

export default function SoundLinks({ dict }: { dict: Dictionary["sound"] }) {
  return (
    <section
      id="sound"
      className="py-24 md:py-36"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            label={dict.label}
            title={dict.title}
            description={dict.description}
          />
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <FadeIn delay={100}>
            <div
              className="p-8 md:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-[#111111]"
              style={{ background: "#0B0B0B" }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: "#9A9A9A" }}
                >
                  {dict.streaming}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                >
                  {dict.soundcloudTitle}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#9A9A9A" }}>
                  {dict.soundcloudDescription}
                </p>

                <div className="w-full overflow-hidden" style={{ height: 166 }}>
                  <iframe
                    width="100%"
                    height="200"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={SC_EMBED}
                    className="w-full"
                    style={{ border: "none", marginTop: -2 }}
                  />
                </div>
              </div>

              <a
                href={LINKS.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase font-medium text-foreground"
              >
                {dict.openSoundcloud}
                <span className="block h-px w-6 bg-foreground transition-all duration-300 group-hover:w-10" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className="p-8 md:p-10 flex flex-col justify-between min-h-[280px] transition-colors duration-300 hover:bg-[#111111]"
              style={{ background: "#0B0B0B" }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: "#9A9A9A" }}
                >
                  {dict.mixes}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                >
                  {dict.mixcloudTitle}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#9A9A9A" }}>
                  {dict.mixcloudDescription}
                </p>

                <div className="w-full overflow-hidden" style={{ height: 166 }}>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={MC_EMBED}
                    className="w-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              <a
                href={LINKS.mixcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase font-medium text-foreground"
              >
                {dict.openMixcloud}
                <span className="block h-px w-6 bg-foreground transition-all duration-300 group-hover:w-10" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}