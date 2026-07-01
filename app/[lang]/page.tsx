import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import SiteContent from "@/components/SiteContent";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return <SiteContent initialLang={lang} />;
}
