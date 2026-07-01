"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { LINKS, VIDEO_SETS } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Loads the YouTube IFrame Player API script once and shares the promise
// across every card, so we can detect actual play events (not just clicks).
let ytApiPromise: Promise<any> | null = null;

function loadYouTubeApi(): Promise<any> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });

  return ytApiPromise;
}

function isRealEmbedId(id: string) {
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}

function VideoCard({
  id,
  title,
  description,
  embedId,
  comingSoon,
  index,
  isSelected,
  onSelect,
  registerPlayer,
  labels,
}: {
  id: string;
  title: string;
  description: string;
  embedId: string;
  comingSoon?: boolean;
  index: number;
  isSelected: boolean;
  onSelect?: () => void;
  registerPlayer?: (id: string, player: any) => void;
  labels: Pick<
    Dictionary["videoSets"],
    "setPrefix" | "comingSoon" | "soon" | "videoUnavailable" | "watch"
  >;
}) {
  const setNumber = id.replace("set-", "");
  const real = isRealEmbedId(embedId);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  // Kept in a ref so the player is only ever created once per card, while
  // the onStateChange listener still always sees the latest select/selected state.
  const latest = useRef({ isSelected, onSelect, registerPlayer });
  latest.current = { isSelected, onSelect, registerPlayer };

  useEffect(() => {
    if (!real) return;
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !iframeRef.current) return;
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            latest.current.registerPlayer?.(id, playerRef.current);
          },
          onStateChange: (event: any) => {
            const { isSelected: selected, onSelect: select } = latest.current;
            if (event.data === YT.PlayerState.PLAYING && !selected) {
              select?.();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
  }, [real, id]);

  return (
    <FadeIn
      delay={index * 120}
      className={isSelected ? "lg:col-span-3 lg:order-first" : ""}
    >
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
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {comingSoon ? labels.comingSoon : labels.videoUnavailable}
              </p>
            </div>
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
                  {labels.setPrefix} {setNumber}
                </p>
                {comingSoon && (
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#9A9A9A",
                    }}
                  >
                    {labels.soon}
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
                href={`https://www.youtube.com/watch?v=${embedId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/watch shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium mt-1 text-muted hover:text-foreground transition-colors duration-300"
              >
                {labels.watch}
                <span className="block h-px w-4 bg-current transition-all duration-300 group-hover/watch:w-7" />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function VideoSets({ dict }: { dict: Dictionary["videoSets"] }) {
  const [selectedId, setSelectedId] = useState(VIDEO_SETS[0].id);
  const playersRef = useRef<Map<string, any>>(new Map());

  const registerPlayer = useCallback((id: string, player: any) => {
    playersRef.current.set(id, player);
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    playersRef.current.forEach((player, playerId) => {
      if (playerId !== id) {
        player?.pauseVideo?.();
      }
    });
  }, []);

  return (
    <section
      id="video"
      className="py-24 md:py-36"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            label={dict.label}
            title={dict.title}
            description={dict.description}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          {VIDEO_SETS.map((set, i) => {
            const item = dict.items[set.id as keyof Dictionary["videoSets"]["items"]];
            return (
              <VideoCard
                key={set.id}
                id={set.id}
                title={item.title}
                description={item.description}
                embedId={set.embedId}
                comingSoon={set.comingSoon}
                index={i}
                isSelected={selectedId === set.id}
                onSelect={() => handleSelect(set.id)}
                registerPlayer={registerPlayer}
                labels={dict}
              />
            );
          })}
        </div>

        <FadeIn delay={VIDEO_SETS.length * 120}>
          <div className="flex justify-center mt-12">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group/more inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-muted hover:text-foreground transition-colors duration-300"
            >
              {dict.watchMore}
              <span className="block h-px w-4 bg-current transition-all duration-300 group-hover/more:w-7" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
