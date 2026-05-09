import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BambergAIGrowthClient from "./BambergAIGrowthClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Bamberg AI Growth — $2,500/mo | Bamberg Digital",
  description:
    "Full AI automation stack, SEO content, live dashboard, and weekly check-ins. For medical, real estate, and e-commerce businesses between $500K and $5M revenue.",
  alternates: { canonical: `${SITE_URL}/services/bamberg-ai-growth` },
  openGraph: {
    title: "Bamberg AI Growth — Bamberg Digital",
    description:
      "Full AI automation stack + SEO + live reporting. $2,500/mo. For businesses $500K–$5M.",
    url: `${SITE_URL}/services/bamberg-ai-growth`,
    type: "website",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bamberg AI Growth — Bamberg Digital",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/bamberg-ai-growth#service`,
      name: "Bamberg AI Growth",
      description:
        "Full AI automation stack with lead capture, nurture, CRM integration, SEO content, live reporting dashboard, and weekly async check-ins.",
      provider: { "@id": `${SITE_URL}#bd-organization` },
      offers: {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "2500",
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
      url: `${SITE_URL}/services/bamberg-ai-growth`,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#bd-organization`,
      name: "Bamberg Digital",
      url: SITE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bamberg AI Growth",
          item: `${SITE_URL}/services/bamberg-ai-growth`,
        },
      ],
    },
  ],
};

export default function BambergAIGrowthPage() {
  return (
    <>
      <Script
        id="bamberg-ai-growth-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/services" />
      <BambergAIGrowthClient />
      <SiteFooter />
    </>
  );
}
