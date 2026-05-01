import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AgenticAIClient from "./AgenticAIClient";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Agentic AI Management | Bamberg Digital — Agents that actually ship.",
  description:
    "From agent strategy to running stack. Operational AI for teams that have already burned money on consulting decks. Audit / Stack Build / Managed. Capacity-capped.",
  alternates: { canonical: `${SITE_URL}/agentic-ai` },
  openGraph: {
    title: "Agentic AI Management — Bamberg Digital",
    description:
      "Agents that actually ship. Audit $5K–$8K. Stack Build $25K–$60K. Managed $4K–$12K/mo. Cap: 4 retained accounts.",
    url: `${SITE_URL}/agentic-ai`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/agentic-ai#service`,
      name: "Agentic AI Management — Bamberg Digital",
      serviceType: "Agentic AI management and operational stack delivery",
      description:
        "Custom operational agent stacks for teams that need working AI, not another roadmap. Audit, Stack Build, and Managed tiers. Capacity-capped at four retained accounts.",
      provider: { "@id": `${SITE_URL}#bd-organization` },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        priceRange: "$5,000–$60,000+",
      },
      url: `${SITE_URL}/agentic-ai`,
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
          name: "Agentic AI",
          item: `${SITE_URL}/agentic-ai`,
        },
      ],
    },
  ],
};

export default function AgenticAIPage() {
  return (
    <>
      <Script
        id="agentic-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav active="/agentic-ai" />
      <AgenticAIClient />
      <SiteFooter />
    </>
  );
}
