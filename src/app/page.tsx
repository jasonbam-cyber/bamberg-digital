import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import HomeNarrative from "@/components/HomeNarrative";

export const metadata: Metadata = {
  title: "Bamberg Digital | Sacramento Web Design, SEO & Marketing",
  description:
    "Sacramento's founder-led digital agency. Web design, SEO, social media, lead generation, and branding for small businesses. Jason picks up the phone.",
  alternates: { canonical: "https://www.bambergdigital.com" },
  openGraph: {
    title: "Bamberg Digital — Made in Sacramento. Personal service.",
    description:
      "Founder-led web design, SEO, social media, leads & branding for Sacramento small businesses. Tell me about your business — I'll pick up.",
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
  return (
    <>
      <HomeNarrative />
      <div className="bd-footer-wrap">
        <SiteFooter />
      </div>
    </>
  );
}
