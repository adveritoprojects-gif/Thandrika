import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Inter,
  Noto_Sans_Malayalam,
  Noto_Serif_Malayalam,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language";
import SkipLink from "@/components/SkipLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifMalayalam = Noto_Serif_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "600"],
  variable: "--font-ml-serif",
  display: "swap",
});

const notoSansMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "500", "600"],
  variable: "--font-ml-sans",
  display: "swap",
});

const description =
  "Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom — traditional Jyothisha, Thandrika guidance and spiritual consultation at Pantheerankavu, Kerala.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#swamikal`,
      name: SITE.person,
      jobTitle: SITE.personTitle,
      description:
        "Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom.",
      worksFor: { "@id": `${SITE_URL}/#santhidham` },
    },
    {
      "@type": ["LocalBusiness", "ReligiousOrganization"],
      "@id": `${SITE_URL}/#santhidham`,
      name: SITE.name,
      alternateName: ["Santhidham Ashram", "Santhidham"],
      url: SITE_URL,
      telephone: `+${SITE.whatsappNumber}`,
      email: SITE.email,
      founder: { "@id": `${SITE_URL}/#swamikal` },
      slogan: "Guidance Rooted in Ancient Wisdom",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: "IN",
      },
      areaServed: SITE.region,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sri. Muraleedhara Swamikal | Santhidham Dharma Peedom, Pantheerankavu",
    template: "%s | Santhidham Dharma Peedom",
  },
  description,
  keywords: [
    "Sri Muraleedhara Swamikal",
    "Thandrika Jyothisha Acharyan",
    "Santhidham Dharma Peedom",
    "Santhidham Ashram",
    "Pantheerankavu",
    "Madadhipathi Sadguru Ashram",
    "Jyothisha Kerala",
    "Thandrika guidance",
    "spiritual consultation Kerala",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Sri. Muraleedhara Swamikal | Santhidham Dharma Peedom",
    description,
    url: "/",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Sri. Muraleedhara Swamikal at Santhidham Dharma Peedom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri. Muraleedhara Swamikal | Santhidham Dharma Peedom",
    description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2A0710",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${inter.variable} ${notoSerifMalayalam.variable} ${notoSansMalayalam.variable}`}
    >
      <body className="min-h-screen">
        <JsonLd data={organizationJsonLd} />
        <LanguageProvider>
          <SkipLink />
          <ScrollProgress />
          <Navbar />
          <main id="main" className="pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
