import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALES,
} from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const PUBLIC_FILE = /\.[^/]+$/;

function isLocale(value: string): value is Lang {
  return LOCALES.includes(value as Lang);
}

function localeFromPath(pathname: string): Lang | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment)) return segment;
  return null;
}

/** Path without locale prefix → `/`, `/about`, … */
function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (!locale) return pathname === "" ? "/" : pathname;
  const parts = pathname.split("/").filter(Boolean);
  const rest = parts.slice(1).join("/");
  return rest ? `/${rest}` : "/";
}

function withLocale(pathname: string, locale: Lang): string {
  const base = stripLocale(pathname);
  if (base === "/") return `/${locale}`;
  return `/${locale}${base}`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/icon.svg" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred =
    cookieLocale && isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const pathLocale = localeFromPath(pathname);

  if (!pathLocale) {
    const url = request.nextUrl.clone();
    url.pathname = withLocale(pathname, preferred);
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, pathLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
