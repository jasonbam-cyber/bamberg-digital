import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Pricing | Bamberg Digital — Agentic AI Management & Digital Marketing",
  description:
    "Transparent pricing for Agentic AI Management, web design, SEO, social media, and AI consulting. Atelier Pro at $10K/mo — LLM drift monitoring, prompt versioning, outcome-driven pricing.",
  alternates: { canonical: "https://www.bambergdigital.com/pricing" },
  openGraph: {
    title:
      "Pricing | Bamberg Digital — Agentic AI Management & Digital Marketing",
    description:
      "Transparent pricing for Agentic AI Management, web design, SEO, social media, and AI consulting. Atelier Pro at $10K/mo.",
    url: "https://www.bambergdigital.com/pricing",
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
    title: "Pricing | Bamberg Digital — Sacramento Digital Agency",
    description:
      "Transparent pricing for Agentic AI Management, web design, SEO, social media, and AI consulting. Atelier Pro at $10K/mo — LLM drift monitoring, prompt versioning, outcome-driven pricing.",
  },
};

const services = [
  {
    name: "Website Design",
    href: "/web-design",
    tiers: [
      { label: "Starter", price: "$497", note: "one-time" },
      { label: "Business", price: "$997", note: "one-time" },
      { label: "Growth", price: "$1,997", note: "one-time" },
    ],
  },
  {
    name: "Social Media Marketing",
    href: "/social-media",
    tiers: [
      { label: "Starter", price: "$199", note: "/mo" },
      { label: "Growth", price: "$497", note: "/mo" },
      { label: "Pro", price: "$897", note: "/mo" },
    ],
  },
  {
    name: "SEO Services",
    href: "/seo",
    tiers: [
      { label: "Audit", price: "$497", note: "one-time" },
      { label: "Local SEO", price: "$497", note: "/mo" },
      { label: "Full SEO", price: "$997", note: "/mo" },
    ],
  },
  {
    name: "Content Creation",
    href: "/content-creation",
    tiers: [
      { label: "Strategy", price: "$297", note: "one-time" },
      { label: "Monthly", price: "$397", note: "/mo" },
      { label: "Full Package", price: "$697", note: "/mo" },
    ],
  },
  {
    name: "Digital Marketing Retainer",
    href: "/digital-marketing",
    tiers: [
      { label: "Consultation", price: "$497", note: "one-time" },
      { label: "Starter", price: "$997", note: "/mo" },
      { label: "Growth", price: "$1,997", note: "/mo" },
    ],
  },
  {
    name: "Brand Identity Design",
    href: "/branding",
    tiers: [
      { label: "Starter", price: "$697", note: "one-time" },
      { label: "Standard", price: "$1,497", note: "one-time" },
      { label: "Premium", price: "$2,497", note: "one-time" },
    ],
  },
  {
    name: "Lead Generation",
    href: "/leads",
    tiers: [
      { label: "One-time", price: "$197", note: "50 leads" },
      { label: "Growth", price: "$397", note: "/mo" },
      { label: "Pro", price: "$797", note: "/mo" },
    ],
  },
  {
    name: "AI & Automation Consulting",
    href: "/consulting",
    tiers: [
      { label: "Hourly", price: "$197", note: "/hr" },
      { label: "Project", price: "$1,997", note: "one-time" },
      { label: "Advisory", price: "$997", note: "/mo" },
    ],
  },
];

const faqs = [
  {
    q: "Are there setup fees?",
    a: "No setup fees on any plan. The price you see is the price you pay.",
  },
  {
    q: "Can I change plans?",
    a: "Yes, anytime. Upgrades take effect immediately. Downgrades take effect at the next billing cycle with 30 days notice.",
  },
  {
    q: "Do you offer bundles?",
    a: "Yes — contact us for bundle pricing. Clients who combine services (e.g., website design + SEO, or social media + content creation) receive discounted rates.",
  },
  {
    q: "Do you require a contract?",
    a: "No long-term contracts. All recurring services are month-to-month after the first 90 days.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="/pricing" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            New client intro rates — limited availability
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            Every service. Every tier. No surprises.
          </p>
          <p className="text-sm text-gray-400">
            All prices in USD. Month-to-month after first 90 days. No setup
            fees.
          </p>
        </div>
      </section>

      {/* Managed Agentic AI */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Managed Agentic AI
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              ModelOps for SMBs Scaling AI
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We own your AI stack end-to-end — workflows, LLMs, prompt
              versioning, drift monitoring, and agent development. You get
              outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Atelier */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                Atelier
              </p>
              <div className="flex items-end gap-2 mb-3">
                <span className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-white">
                  $5,000
                </span>
                <span className="text-slate-400 mb-1">/mo</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Entry-level agentic AI management for businesses scaling
                automation.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "AI workflow setup & integration",
                  "Monthly optimization cycles",
                  "Prompt versioning & governance",
                  "Basic LLM monitoring",
                  "Dedicated AI strategist (10 hrs/mo)",
                  "Monthly executive review",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-slate-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block text-center bg-white text-slate-900 font-[family-name:var(--font-montserrat)] font-bold text-sm py-3 px-6 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Book strategy call
              </a>
            </div>

            {/* Atelier Pro */}
            <div className="bg-blue-600 rounded-2xl p-8 border border-blue-500 flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Annual: $8,500/mo
              </div>
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-3">
                Atelier Pro
              </p>
              <div className="flex items-end gap-2 mb-3">
                <span className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-white">
                  $10,000
                </span>
                <span className="text-blue-200 mb-1">/mo</span>
              </div>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Full ModelOps partnership. Output-based billing available.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "Everything in Atelier",
                  "LLM drift monitoring & alerting",
                  "RAG pipeline maintenance",
                  "Custom agent development",
                  "Weekly executive sync",
                  "Output-based billing options",
                  "Dedicated AI infrastructure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-white text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block text-center bg-white text-blue-600 font-[family-name:var(--font-montserrat)] font-bold text-sm py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Book strategy call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <a
                    href={service.href}
                    className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {service.name} →
                  </a>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="bg-white rounded-xl p-5 border border-gray-100 text-center"
                    >
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        {tier.label}
                      </p>
                      <div className="flex items-end justify-center gap-1">
                        <span className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-gray-900">
                          {tier.price}
                        </span>
                        <span className="text-sm text-gray-400 mb-1">
                          {tier.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
            All prices in USD. Month-to-month after first 90 days. No setup
            fees.{" "}
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact us for bundle pricing.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-10 text-center">
            Pricing questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white group"
              >
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-sm pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-gray-600 text-lg">
              Book a free consultation. We&apos;ll look at your business and
              recommend the highest-impact starting point.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Call us:{" "}
              <a
                href="tel:9169077782"
                className="text-blue-600 hover:underline"
              >
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
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm service="pricing-inquiry" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
