import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { LINKS } from "@/lib/config";

export default function SoundLinks() {
  return (
    <section
      id="sound"
      className="py-24 md:py-36"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            label="Music"
            title="Sound"
            description="Original productions, sketches and sonic explorations from NoTalk."
          />
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <FadeIn delay={100}>
            <div
              className="p-8 md:p-10 flex flex-col justify-between min-h-[280px] transition-colors duration-300 hover:bg-[#111111]"
              style={{ background: "#0B0B0B" }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: "#9A9A9A" }}
                >
                  Streaming
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                >
                  SoundCloud
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
                  Listen to selected tracks, demos and sonic experiments.
                </p>
              </div>

              <a
                href={LINKS.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase font-medium text-foreground"
              >
                Open SoundCloud
                <span className="block h-px w-6 bg-foreground transition-all duration-300 group-hover:w-10" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className="p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
              style={{ background: "#0B0B0B" }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p
                    className="text-xs tracking-[0.25em] uppercase"
                    style={{ color: "#9A9A9A" }}
                  >
                    Releases
                  </p>
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#9A9A9A",
                    }}
                  >
                    Soon
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                >
                  Bandcamp
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
                  Releases and direct music access coming soon.
                </p>
              </div>

              <span
                className="inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: "#9A9A9A" }}
              >
                Coming Soon
                <span
                  className="block h-px w-6"
                  style={{ background: "#9A9A9A" }}
                />
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
