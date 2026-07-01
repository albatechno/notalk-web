import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const SITE_URL = "https://notalk.co";
const ROUTES = [
  { path: "", priority: 1 },
  { path: "/coming-soon", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${route.path}`])
        ),
      },
    }))
  );
}
