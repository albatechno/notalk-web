"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { setLocaleCookie, type Locale } from "@/lib/i18n";

const OPTIONS: { locale: Locale; label: string; flag: string }[] = [
  { locale: "en", label: "English", flag: "/flags/us.svg" },
  { locale: "es", label: "Español", flag: "/flags/co.svg" },
  { locale: "de", label: "Deutsch", flag: "/flags/de.svg" },
];

export default function LanguageGate({
  onSelect,
}: {
  onSelect?: (locale: Locale) => void;
}) {
  const router = useRouter();

  const choose = (locale: Locale) => {
    if (onSelect) {
      onSelect(locale);
      return;
    }
    setLocaleCookie(locale);
    router.push(`/${locale}`);
  };

  return (
    <main
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center px-6"
      style={{ background: "#050505" }}
    >
      <div className="mb-12 opacity-90">
        <Image src="/NTK.svg" alt="NoTalk" width={72} height={54} priority />
      </div>

      <div className="flex flex-col gap-4 items-center">
        {OPTIONS.map(({ locale, label, flag }) => (
          <button
            key={locale}
            onClick={() => choose(locale)}
            className="group relative overflow-hidden text-sm tracking-[0.25em] uppercase font-medium px-8 py-3 border border-white/20 text-muted hover:text-white hover:border-white transition-all duration-300 min-w-[220px]"
          >
            {/* Flag background — revealed on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${flag})` }}
            />
            {/* Dark scrim so the label stays readable over the flag */}
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(5,5,5,0.45)" }}
            />
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
