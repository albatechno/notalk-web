import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="border-t mb-20"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <FadeIn>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-10"
            style={{ color: "#9A9A9A" }}
          >
            About
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  color: "#F2F2F2",
                  letterSpacing: "0.01em",
                }}
              >
                No Talk.
                <br />
                Just Pressure.
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-4">
            <FadeIn delay={120}>
              <p
                className="text-base md:text-lg font-light leading-relaxed mb-8"
                style={{ color: "#F2F2F2" }}
              >
                NoTalk was born from a personal union — a musical project where two
                people's connection finds its purest form. Not a collaboration,
                but a shared frequency.
              </p>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#9A9A9A" }}
              >
                For us, music is the channel where understanding flows without
                words. Rhythm and atmosphere replace language. What can't be said
                is felt on the dancefloor — and those who stop to listen will
                know that some dialogues only happen there.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-4">
            <FadeIn delay={200}>
              <ImagePlaceholder src="/photos/photo_3.webp" className="aspect-[3/4] w-full" objectPosition="bottom center" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
