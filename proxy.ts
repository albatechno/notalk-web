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

  if (pathname === "/") {
    // No saved preference yet: let app/page.tsx render the language gate.
    if (!locale) return;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.redirect(
    new URL(`/${locale ?? defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
