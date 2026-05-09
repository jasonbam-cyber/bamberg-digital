import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AtelierServiceClient from "./AtelierServiceClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Atelier — $5,000/mo | Bamberg Digital",
  description:
    "Custom multi-agent builds, full-stack digital management, and dedicated strategy sessions. Revenue-share available. For growth-stage and funded companies.",
  alternates: { canonical: `${SITE_URL}/services/atelier` },
  openGraph: {
    title: "Atelier — Bamberg Digital",
    description:
      "Custom multi-agent builds. Full-stack digital management. Revenue-share available. $5,000/mo.",
    url: `${SITE_URL}/services/atelier`,
    type: "website",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier — Bamberg Digital",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/atelier#service`,
      name: "Atelier",
      description:
        "Custom multi-agent builds and full-stack digital management for growth-stage companies. Revenue-share structures available.",
      provider: { "@id": `${SITE_URL}#bd-organization` },
      offers: {
        "@type": "Offer",
        price: "5000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5000",
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
      url: `${SITE_URL}/services/atelier`,
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
          name: "Atelier",
          item: `${SITE_URL}/services/atelier`,
        },
      ],
    },
  ],
};

export default function AtelierServicePage() {
  return (
    <>
      <Script
        id="atelier-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/services" />
      <AtelierServiceClient />
      <SiteFooter />
    </>
  );
}
