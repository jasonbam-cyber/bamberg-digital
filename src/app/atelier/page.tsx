import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AtelierClient from "./AtelierClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Atelier | Bamberg Digital — AI velocity. Human signature.",
  description:
    "Custom solutions for founders who refuse the template. One client per quarter. $10K–$25K. Signed by the founder.",
  alternates: { canonical: `${SITE_URL}/atelier` },
  openGraph: {
    title: "BD Atelier — AI velocity. Human signature.",
    description:
      "Custom solutions for founders who refuse the template. One client per quarter. $10K–$25K.",
    url: `${SITE_URL}/atelier`,
    type: "website",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BD Atelier — AI velocity. Human signature.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BD Atelier — AI velocity. Human signature.",
    description:
      "Custom solutions for founders who refuse the template. One client per quarter. $10K–$25K.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/atelier#service`,
      name: "BD Atelier — Custom Website and System Design",
      serviceType: "Custom website and system design",
      description:
        "Bespoke custom websites and systems for founders who need something the blueprint catalog cannot serve. One client per quarter. AI velocity with human signature.",
      provider: { "@id": `${SITE_URL}#bd-organization` },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        priceRange: "$10,000–$25,000+",
      },
      url: `${SITE_URL}/atelier`,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#jason-bamberg`,
      name: "Jason Bamberg",
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}#bd-organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#bd-organization`,
      name: "Bamberg Digital",
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}#jason-bamberg` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Atelier",
          item: `${SITE_URL}/atelier`,
        },
      ],
    },
  ],
};

export default function AtelierPage() {
  return (
    <>
      <Script
        id="atelier-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/atelier" />
      <AtelierClient />
      <SiteFooter />
    </>
  );
}
