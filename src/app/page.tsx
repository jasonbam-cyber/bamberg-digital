import type { Metadata } from "next";
import HomeNarrative from "@/components/HomeNarrative";

export const metadata: Metadata = {
  title: "Bamberg Digital | Agentic AI Management & Digital Marketing",
  description:
    "Agentic AI Management and ModelOps for SMBs scaling automation. Custom websites, SEO, and lead engines — founder-led, AI-native. Sacramento roots, national reach.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Bamberg Digital offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bamberg Digital offers web design, SEO, social media marketing, lead generation, content creation, branding, AI integration, and digital marketing strategy. We serve small and mid-size businesses in Sacramento and nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost at Bamberg Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Services start at $997/mo for the Managed AI Starter plan, which includes local SEO, Google Business management, and monthly reporting. The Bamberg AI Growth plan starts at $1,997/mo and adds content strategy, AI automation, and paid ads management. Custom Atelier engagements start at $4,500/mo.",
      },
    },
    {
      "@type": "Question",
      name: "Does Bamberg Digital work with businesses outside Sacramento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Sacramento, California, and serve clients nationwide remotely. We have worked with businesses in California, Oregon, Texas, Florida, and across the United States.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Bamberg Digital different from other digital agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bamberg Digital is founder-led — Jason Bamberg personally oversees every client account. We are AI-native, meaning artificial intelligence is built into our SEO, content, and lead generation workflows from day one, not added as an upsell. We offer month-to-month contracts after a 90-day onboarding period, and clients own all data, code, and accounts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see initial ranking movement within 60–90 days. Significant organic traffic and lead volume improvements typically take 3–6 months. Google Business Profile optimizations and local SEO improvements can show results faster, often within 30–45 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free audit or consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer a free AI marketing audit for new prospects. We review your website, SEO, and current marketing setup, then deliver a plain-English report showing your top opportunities and what to prioritize. No obligation. Contact us at hello@bambergdigital.com or call (916) 907-7782.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Bamberg Digital specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have built marketing systems for 50+ industries including dental practices, law firms, restaurants, HVAC companies, real estate agencies, medical offices, gyms, salons, e-commerce brands, and professional service firms. Browse our industry blueprint library at bambergdigital.com/blueprints.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website and marketing assets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At Bamberg Digital, you own your website code, your domain, your Google Analytics account, your ad accounts, and all content we produce. We never hold assets hostage. If you leave, everything comes with you.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeNarrative />
    </>
  );
}
