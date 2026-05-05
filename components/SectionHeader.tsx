interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      {label && (
        <p
          className="text-xs tracking-[0.25em] uppercase mb-4"
          style={{ color: "#9A9A9A" }}
        >
          {label}
        </p>
      )}
      <h2
        className="leading-none mb-4"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(3.5rem, 8vw, 7rem)",
          color: "#F2F2F2",
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base max-w-lg leading-relaxed" style={{ color: "#9A9A9A" }}>
          {description}
        </p>
      )}
    </div>
  );
}
