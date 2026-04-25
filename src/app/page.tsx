import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HomeNarrative from "@/components/HomeNarrative";

export const metadata: Metadata = {
  title: "Bamberg Digital | Sacramento's AI-Powered Digital Agency",
  description:
    "Sacramento's AI-powered digital agency. Web design, SEO, social media & lead generation for small businesses. We find the customers your competitors miss.",
  alternates: { canonical: "https://www.bambergdigital.com" },
  openGraph: {
    title: "Bamberg Digital — Sacramento's AI-Powered Digital Agency",
    description:
      "Web design, SEO, social media, lead generation, branding, and AI automation for small businesses. Start with a free consultation.",
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
      <SiteNav />
      <HomeNarrative />
      <div className="bd-footer-wrap">
        <SiteFooter />
      </div>
    </>
  );
}
