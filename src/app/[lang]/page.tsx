import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import { PAGE_METADATA } from "@/lib/content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { tr } from "@/lib/tr";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.home;
  return buildPageMetadata({
    lang,
    path: "/",
    title: t(meta.title),
    description: t(meta.description),
    images: ["/images/hero.jpg"],
  });
}

export default function HomePage() {
  return <HomeView />;
}
