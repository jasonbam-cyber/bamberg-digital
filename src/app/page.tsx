import type { Metadata } from "next";
import HomeNarrative from "@/components/HomeNarrative";

export const metadata: Metadata = {
  title: "Bamberg Digital | Sacramento Web Design, SEO & Marketing",
  description:
    "Sacramento's founder-led digital agency. Custom websites, SEO systems, and lead engines — engineered from blueprint to launch. Browse 50+ website builds by industry.",
  alternates: { canonical: "https://www.bambergdigital.com" },
  openGraph: {
    title: "Bamberg Digital — Engineered to Perform.",
    description:
      "Custom websites, SEO, lead generation & AI automation for small businesses. Browse our project catalog — 50+ industries. Sacramento roots, national reach.",
    url: "https://www.bambergdigital.com",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return <HomeNarrative />;
}
