import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { LINKS, VIDEO_SETS } from "@/lib/config";

function isRealEmbedId(id: string) {
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}

function VideoCard({
  title,
  description,
  embedId,
  index,
}: {
  title: string;
  description: string;
  embedId: string;
  index: number;
}) {
  const real = isRealEmbedId(embedId);

  return (
    <FadeIn delay={index * 120}>
      <div
        className="group"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="aspect-video relative overflow-hidden"
          style={{ background: "#0B0B0B" }}
        >
          {real ? (
            <iframe
              src={`https://www.youtube.com/embed/${embedId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className="w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:border-white/30"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                }}
              >
                <div
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid rgba(255,255,255,0.35)",
                  }}
                />
              </div>
              <p
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Add embed ID in config
              </p>
            </div>
          )}
        </div>

        <div className="pt-5 pb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-2"
                style={{ color: "#9A9A9A" }}
              >
                Set {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-lg font-semibold tracking-tight mb-2"
                style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
                {description}
              </p>
            </div>

            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group/watch shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium mt-1 text-muted hover:text-foreground transition-colors duration-300"
            >
              Watch
              <span className="block h-px w-4 bg-current transition-all duration-300 group-hover/watch:w-7" />
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function VideoSets() {
  return (
    <section
      id="video"
      className="py-24 md:py-36"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            label="Live"
            title="Video Sets"
            description="Recorded sessions, live selections and extended journeys."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          {VIDEO_SETS.map((set, i) => (
            <VideoCard
              key={set.id}
              title={set.title}
              description={set.description}
              embedId={set.embedId}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
