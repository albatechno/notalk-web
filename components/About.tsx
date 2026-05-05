import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="border-t mb-20"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <FadeIn>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "#9A9A9A" }}
              >
                About
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
              >
                No Talk.
                <br />
                Just Pressure.
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-7 md:pt-16">
            <FadeIn delay={120}>
              <p
                className="text-base md:text-lg font-light leading-relaxed mb-8"
                style={{ color: "#F2F2F2" }}
              >
                NoTalk is a techno duo focused on hypnotic movement, mental tension
                and fast rhythmic structures. Their sound combines ambient layers,
                detailed textures and driving percussion to build sets that feel
                immersive, physical and raw.
              </p>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#9A9A9A" }}
              >
                The project exists in the space between repetition and release —
                where atmosphere becomes rhythm, and rhythm becomes trance.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
