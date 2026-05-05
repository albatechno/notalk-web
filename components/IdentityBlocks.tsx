import FadeIn from "@/components/FadeIn";

const BLOCKS = [
  {
    number: "01",
    title: "Mental",
    description: "Focused repetition, tension and controlled intensity.",
  },
  {
    number: "02",
    title: "Hypnotic",
    description: "Long-form movement designed to pull the listener inward.",
  },
  {
    number: "03",
    title: "Fast",
    description: "High-energy structures with raw, direct momentum.",
  },
  {
    number: "04",
    title: "Textural",
    description: "Ambient layers, noise, pressure and sonic detail.",
  },
];

export default function IdentityBlocks() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-14"
            style={{ color: "#9A9A9A" }}
          >
            Sound Identity
          </p>
        </FadeIn>

        {/* gap-px with background creates hairline grid lines */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.08)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.number} delay={i * 80}>
              <div
                className="py-10 px-6 md:px-8 h-full"
                style={{ background: "#0B0B0B" }}
              >
                <p
                  className="text-xs tracking-[0.2em] mb-6"
                  style={{
                    color: "rgba(255,255,255,0.18)",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {block.number}
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                >
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
                  {block.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
