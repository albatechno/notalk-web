import FadeIn from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n";

const NUMBERS = ["01", "02", "03", "04"];

export default function IdentityBlocks({ dict }: { dict: Dictionary["identity"] }) {
  const BLOCKS = dict.blocks.map((block, i) => ({ ...block, number: NUMBERS[i] }));
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
            {dict.label}
          </p>
        </FadeIn>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{
            background: "rgba(255,255,255,0.08)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.number} delay={i * 80}>
              <div
                className="py-10 px-6 md:px-8 h-full"
                style={{ background: "#0B0B0B" }}
              >
                <p
                  className="text-xs tracking-[0.2em] mb-4"
                  style={{ color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-syne)" }}
                >
                  {block.number}
                </p>
                <h3
                  className="leading-none mb-4"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "#F2F2F2",
                    letterSpacing: "0.02em",
                  }}
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
