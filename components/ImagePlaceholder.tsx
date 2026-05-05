import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  seed?: string | number;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImagePlaceholder({
  src,
  seed = 1,
  width = 800,
  height = 1000,
  className = "",
  style,
}: ImagePlaceholderProps) {
  const imgSrc = src ?? `https://picsum.photos/seed/ntk${seed}/${width}/${height}`;

  return (
    <div className={`relative overflow-hidden group ${className}`} style={style}>
      <Image
        src={imgSrc}
        alt=""
        fill
        className="object-cover transition-all duration-700 group-hover:scale-[1.03] grayscale brightness-75 contrast-[1.05] group-hover:grayscale-0 group-hover:brightness-90"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
