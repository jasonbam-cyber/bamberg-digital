import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Fraunces,
  Caveat,
  JetBrains_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import CanvasHost from "@/components/canvas/CanvasHost";
import RouteTransition from "@/components/RouteTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Bamberg Digital — Engineered Systems.",
  description:
    "Sacramento's founder-led digital agency. Custom websites, SEO systems, and lead engines — engineered from blueprint to launch. Browse 47+ industry blueprints.",
  keywords:
    "digital marketing agency sacramento, web design sacramento, SEO services sacramento, social media marketing sacramento, lead generation, AI marketing automation, small business website design, branding sacramento, content creation, AI consulting",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Bamberg Digital — Engineered Systems.",
    description:
      "Sacramento's founder-led digital agency. Custom websites, SEO systems, and lead engines — engineered from blueprint to launch.",
    url: SITE_URL,
    siteName: "Bamberg Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bamberg Digital — Engineered Systems.",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamberg Digital — Engineered Systems.",
    description:
      "Sacramento's founder-led digital agency. Custom websites, SEO systems, and lead engines — engineered from blueprint to launch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Bamberg Digital",
              url: SITE_URL,
              email: "hello@bambergdigital.com",
              telephone: "+19169077782",
              description:
                "Sacramento's AI-powered digital marketing agency. Website design, SEO, social media, lead generation, branding, content creation, and AI consulting for small businesses nationwide.",
              founder: {
                "@type": "Person",
                name: "Jason Bamberg",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Sacramento" },
                { "@type": "City", name: "Elk Grove" },
                { "@type": "City", name: "Folsom" },
                { "@type": "City", name: "Roseville" },
                { "@type": "City", name: "Rancho Cordova" },
                { "@type": "Country", name: "United States" },
              ],
              serviceType: [
                "Website Design",
                "SEO Services",
                "Social Media Marketing",
                "Lead Generation",
                "Content Creation",
                "Digital Marketing Strategy",
                "Brand Identity Design",
                "AI & Automation Consulting",
                "Marketing Automation",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${fraunces.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SmoothScroll />
        <CanvasHost />
        <RouteTransition>{children}</RouteTransition>
        <Analytics />
      </body>
    </html>
  );
}
