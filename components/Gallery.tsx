"use client";

import { useRef, useEffect } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n";

const PHOTOS = [
  { id: "1",  src: "/textures/texture_1.webp" },
  { id: "2",  src: "/textures/texture_2.webp" },
  { id: "3",  src: "/textures/texture_3.webp" },
  { id: "4",  src: "/textures/texture_4.webp" },
  { id: "5",  src: "/textures/texture_5.webp" },
  { id: "6",  src: "/textures/texture_6.webp" },
  { id: "7",  src: "/textures/texture_7.webp" },
  { id: "8",  src: "/textures/texture_8.webp" },
];

export default function Gallery({ dict }: { dict: Dictionary["gallery"] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.style.cursor = "grabbing";
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    const onDragStart = (e: DragEvent) => e.preventDefault();

    el.style.cursor = "grab";
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#050505", overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <FadeIn>
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "#9A9A9A" }}
          >
            {dict.label}
          </p>
        </FadeIn>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto select-none"
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 3rem)",
          paddingBottom: "4px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className="shrink-0 overflow-hidden"
            style={{ width: "clamp(200px, 22vw, 320px)" }}
          >
            <ImagePlaceholder
              src={photo.src}
              width={800}
              height={1067}
              className="aspect-[3/4] w-full"
            />
          </div>
        ))}

        <div
          className="shrink-0"
          style={{ width: "clamp(1.5rem, 4vw, 3rem)" }}
          aria-hidden="true"
        />
      </div>

      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
