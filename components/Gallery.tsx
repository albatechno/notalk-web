import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

const PHOTOS = [
  { id: "01", ratio: "aspect-[3/4]" },
  { id: "02", ratio: "aspect-[3/4]" },
  { id: "03", ratio: "aspect-[3/4]" },
  { id: "04", ratio: "aspect-[3/4]" },
  { id: "05", ratio: "aspect-[3/4]" },
];

export default function Gallery() {
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
            Press / Live
          </p>
        </FadeIn>
      </div>

      <div
        className="flex gap-3 overflow-x-auto"
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
              seed={`live${photo.id}`}
              width={800}
              height={1067}
              className={`${photo.ratio} w-full`}
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
