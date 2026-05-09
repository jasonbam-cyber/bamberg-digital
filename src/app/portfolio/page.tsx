import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Portfolio | Bamberg Digital — Our Work",
  description:
    "See our work — websites, SEO, branding, and AI automation built for real businesses. View case studies from Layer UI, Recovery Gear, and more.",
  alternates: { canonical: "https://www.bambergdigital.com/portfolio" },
  openGraph: {
    title: "Portfolio | Bamberg Digital — Our Work",
    description:
      "See our work — websites, SEO, branding, and AI automation built for real businesses.",
    url: "https://www.bambergdigital.com/portfolio",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Bamberg Digital — Our Work",
    description:
      "See our work — websites, SEO, branding, and AI automation built for real businesses. View case studies from Layer UI, Recovery Gear, and more.",
  },
};

const caseStudies = [
  {
    client: "Layer UI",
    category: "SaaS Platform",
    description:
      "Built a full-featured remote work OS — custom Next.js application, Supabase backend, Stripe billing integration, and multi-tenant architecture. Launched from zero to live product in under 90 days.",
    result:
      "Live at layerui.io. 12+ active users. $40 MRR within weeks of launch.",
    services: [
      "Web Design",
      "Full-Stack Development",
      "AI Integration",
      "Stripe Billing",
    ],
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    metric: "$40 MRR",
    metricLabel: "within weeks of launch",
  },
  {
    client: "Recovery Gear",
    category: "E-Commerce",
    description:
      "Launched a Shopify store for health and recovery products targeting the consumer wellness market. Built out the product catalog, configured Zendrop fulfillment, and optimized the checkout for conversion.",
    result:
      "Store live at recoverygear.us. LED mask hero product positioned as the flagship. Zendrop fulfillment running hands-free.",
    services: [
      "Web Design",
      "E-Commerce",
      "Product Strategy",
      "Fulfillment Setup",
    ],
    color: "bg-emerald-50 border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    metric: "Hands-free",
    metricLabel: "fulfillment from day one",
  },
  {
    client: "Bamberg Digital",
    category: "Agency Website",
    description:
      "Designed and built the agency's own site — Next.js App Router, SEO-optimized service pages, structured data, lead capture forms, and a content strategy targeting Sacramento digital marketing keywords.",
    result:
      "Ranking for Sacramento digital marketing and web design keywords. Full service page architecture with JSON-LD schema on every page.",
    services: ["Web Design", "SEO", "Copywriting", "Structured Data"],
    color: "bg-purple-50 border-purple-100",
    badge: "bg-purple-100 text-purple-700",
    metric: "Page 1",
    metricLabel: "for Sacramento target keywords",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="/portfolio" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Case Studies
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Work We&apos;re Proud Of
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real projects. Real results. We build websites, launch stores, and
            deploy AI systems for Sacramento businesses and clients nationwide.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.client}
              className={`rounded-2xl p-8 border ${cs.color} flex flex-col lg:flex-row gap-8`}
            >
              {/* Left: content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${cs.badge}`}
                  >
                    {cs.category}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mb-3">
                  {cs.client}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cs.description}
                </p>
                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6">
                  <span className="text-gray-400 font-normal">Result: </span>
                  {cs.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: metric */}
              <div className="flex-shrink-0 flex items-center justify-center lg:w-48">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-gray-900 mb-1">
                    {cs.metric}
                  </div>
                  <div className="text-gray-500 text-xs">{cs.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
            Want results like these?
          </h2>
          <p className="text-gray-600 text-lg">
            Let&apos;s talk. We&apos;ll look at your specific situation and tell
            you exactly what we&apos;d build — no pitch, no pressure.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Call us:{" "}
            <a href="tel:9169077782" className="text-blue-600 hover:underline">
              (916) 907-7782
            </a>{" "}
            &middot;{" "}
            <a
              href="mailto:hello@bambergdigital.com"
              className="text-blue-600 hover:underline"
            >
              hello@bambergdigital.com
            </a>
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <ContactForm service="portfolio-inquiry" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
