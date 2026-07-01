import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MEMBERS, type Member } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

function MemberCard({
  member,
  index,
  dict,
}: {
  member: Member;
  index: number;
  dict: Dictionary["members"];
}) {
  const bio = dict.bios[member.id];
  const isRight = index % 2 !== 0;

  return (
    <FadeIn delay={index * 150}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {/* Image — swaps order on right member */}
        <div
          className={`relative aspect-[3/4] overflow-hidden group ${isRight ? "md:order-last" : ""}`}
        >
          <Image
            src={member.image ?? `https://picsum.photos/seed/ntk${member.imageSeed}/800/1067?grayscale`}
            alt={member.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.03] grayscale brightness-75 contrast-[1.05] group-hover:grayscale-0 group-hover:brightness-90"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* name overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
            <p
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "#F2F2F2",
                letterSpacing: "0.02em",
              }}
            >
              {member.name}
            </p>
            <p
              className="text-xs tracking-[0.2em] uppercase mt-1"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {bio.role}
            </p>
          </div>
        </div>

        {/* Text content */}
        <div
          className="flex flex-col justify-between p-8 md:p-12"
          style={{ background: "#0B0B0B" }}
        >
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-syne)" }}
            >
              0{index + 1}
            </p>

            <p
              className="text-sm md:text-base font-light leading-relaxed"
              style={{ color: "#9A9A9A" }}
            >
              {bio.bio}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {member.links.soundcloud && (
              <a
                href={member.links.soundcloud}
                {...(member.links.soundcloud.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-foreground"
              >
                {dict.soundcloud}
                <span className="block h-px w-5 bg-foreground transition-all duration-300 group-hover:w-9" />
              </a>
            )}
            {member.links.instagram && (
              <a
                href={member.links.instagram}
                {...(member.links.instagram.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-muted hover:text-foreground transition-colors duration-300"
              >
                {dict.instagram}
                <span className="block h-px w-5 bg-current transition-all duration-300 group-hover:w-9" />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Members({ dict }: { dict: Dictionary["members"] }) {
  return (
    <section
      id="members"
      className="py-24 md:py-36"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="border-t mb-14"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <FadeIn>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-14"
            style={{ color: "#9A9A9A" }}
          >
            {dict.label}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
