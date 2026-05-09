import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ManagedAIStarterClient from "./ManagedAIStarterClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Managed AI Starter — $997/mo | Bamberg Digital",
  description:
    "One AI agent deployed for your business — lead qualifier, AI receptionist, or review responder. Monthly dashboard and strategy call included. Ideal for dental, construction, service businesses under $2M.",
  alternates: { canonical: `${SITE_URL}/services/managed-ai-starter` },
  openGraph: {
    title: "Managed AI Starter — Bamberg Digital",
    description:
      "One AI agent. $997/mo. Lead qualifier, receptionist, or review responder. Built and managed for you.",
    url: `${SITE_URL}/services/managed-ai-starter`,
    type: "website",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Managed AI Starter — Bamberg Digital",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/managed-ai-starter#service`,
      name: "Managed AI Starter",
      description:
        "One AI agent deployed for local service businesses. Lead qualifier, AI receptionist, or review responder. Monthly dashboard and strategy call.",
      provider: { "@id": `${SITE_URL}#bd-organization` },
      offers: {
        "@type": "Offer",
        price: "997",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "997",
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
      url: `${SITE_URL}/services/managed-ai-starter`,
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
          name: "Managed AI Starter",
          item: `${SITE_URL}/services/managed-ai-starter`,
        },
      ],
    },
  ],
};

export default function ManagedAIStarterPage() {
  return (
    <>
      <Script
        id="managed-ai-starter-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/services" />
      <ManagedAIStarterClient />
      <SiteFooter />
    </>
  );
}
