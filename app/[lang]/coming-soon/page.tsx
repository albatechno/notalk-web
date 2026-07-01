import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function ComingSoon({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "#050505" }}
    >
      <div className="max-w-lg w-full">
        <div
          className="mb-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        />

        <p
          className="text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "#9A9A9A" }}
        >
          {dict.comingSoon.eyebrow}
        </p>

        <h1
          className="leading-none mb-8"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 14vw, 8rem)",
            color: "#F2F2F2",
            letterSpacing: "0.02em",
          }}
        >
          {dict.comingSoon.title1}
          <br />
          {dict.comingSoon.title2}
        </h1>

        <p
          className="text-sm leading-relaxed mb-12"
          style={{ color: "#9A9A9A", maxWidth: "28rem" }}
        >
          {dict.comingSoon.description}
        </p>

        <div
          className="mb-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        />

        <Link
          href={`/${lang}`}
          className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium"
          style={{ color: "#F2F2F2" }}
        >
          {dict.comingSoon.backToSite}
          <span className="block h-px w-5 bg-current transition-all duration-300 group-hover:w-9" />
        </Link>
      </div>
    </main>
  );
}
