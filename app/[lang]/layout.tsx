import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, type Locale } from "@/lib/i18n";
import HtmlLangSync from "@/components/HtmlLangSync";

const SITE_URL = "https://notalk.co";
const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.metadata.title,
      template: "%s — NoTalk",
    },
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.ogDescription,
      url: `${SITE_URL}/${lang}`,
      siteName: "NoTalk",
      locale: OG_LOCALES[lang],
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: dict.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.ogDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <HtmlLangSync lang={lang} />
      {children}
    </>
  );
}
