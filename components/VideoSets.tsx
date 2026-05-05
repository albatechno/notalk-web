import Image from "next/image";
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
  comingSoon,
  index,
}: {
  title: string;
  description: string;
  embedId: string;
  comingSoon?: boolean;
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
          ) : comingSoon ? (
            <>
              <Image
                src={`https://picsum.photos/seed/ntkvid3/1600/900`}
                alt=""
                fill
                className="object-cover grayscale brightness-50 contrast-[1.1]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Coming Soon
                </p>
              </div>
            </>
          ) : (
            <>
              <Image
                src={`https://picsum.photos/seed/ntkvid${index + 1}/1600/900?grayscale`}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ filter: "brightness(0.35) contrast(1.15)" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </>
          )}
        </div>

        <div className="pt-5 pb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#9A9A9A" }}
                >
                  Set {String(index + 1).padStart(2, "0")}
                </p>
                {comingSoon && (
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#9A9A9A",
                    }}
                  >
                    Soon
                  </span>
                )}
              </div>
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

            {!comingSoon && (
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group/watch shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium mt-1 text-muted hover:text-foreground transition-colors duration-300"
              >
                Watch
                <span className="block h-px w-4 bg-current transition-all duration-300 group-hover/watch:w-7" />
              </a>
            )}
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
              comingSoon={set.comingSoon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
