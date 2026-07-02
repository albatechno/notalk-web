import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales, LOCALE_COOKIE } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = cookieLocale && hasLocale(cookieLocale) ? cookieLocale : null;

  // Always land on a locale route; the language gate is shown as an overlay
  // on every page load (see SiteContent), so it no longer lives at "/".
  return NextResponse.redirect(
    new URL(`/${locale ?? defaultLocale}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
