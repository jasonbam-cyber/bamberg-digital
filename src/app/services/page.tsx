import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ServicesClient from "./ServicesClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Services & Packages | Bamberg Digital — AI-Native Digital Agency",
  description:
    "Three productized AI retainer tiers for local service businesses. Managed AI Starter $997/mo, Bamberg AI Growth $2,500/mo, Atelier $5,000/mo. AI Readiness Audit $5,000 one-time. Sacramento CA.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services & Packages — Bamberg Digital",
    description:
      "AI-native retainers for dental, medical, construction, real estate, and e-commerce. Three tiers from $997/mo. Start with the AI Readiness Audit.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bamberg Digital Services & Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Packages — Bamberg Digital",
    description:
      "AI-native retainers for local service businesses. $997–$5,000/mo. Sacramento CA.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#bd-organization`,
      name: "Bamberg Digital",
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}#jason-bamberg` },
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
      "@type": "ItemList",
      name: "Bamberg Digital Service Packages",
      url: `${SITE_URL}/services`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI Readiness Audit",
          url: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Managed AI Starter",
          url: `${SITE_URL}/services/managed-ai-starter`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bamberg AI Growth",
          url: `${SITE_URL}/services/bamberg-ai-growth`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Atelier",
          url: `${SITE_URL}/services/atelier`,
        },
      ],
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
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/services" />
      <ServicesClient />
      <SiteFooter />
    </>
  );
}
