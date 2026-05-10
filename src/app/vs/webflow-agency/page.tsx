import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Bamberg Digital vs Webflow Agency | Which Is Right for Your Business?",
  description:
    "Comparing Bamberg Digital vs a Webflow agency? We deliver custom-coded sites, AI-powered SEO, and hands-on strategy — not template builds. See the difference.",
  alternates: { canonical: "https://www.bambergdigital.com/vs/webflow-agency" },
  openGraph: {
    title:
      "Bamberg Digital vs Webflow Agency | Which Is Right for Your Business?",
    description:
      "Comparing Bamberg Digital vs a Webflow agency? We deliver custom-coded sites, AI-powered SEO, and hands-on strategy — not template builds.",
    url: "https://www.bambergdigital.com/vs/webflow-agency",
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
    title: "Bamberg Digital vs Webflow Agency",
    description:
      "Custom-coded sites, AI SEO, and founder-direct strategy vs template-based Webflow builds. See how we compare.",
  },
};

const rows = [
  {
    feature: "Tech stack",
    bd: "Next.js / custom code",
    them: "Webflow CMS (no-code)",
  },
  {
    feature: "SEO control",
    bd: "Full technical SEO — schema, Core Web Vitals, crawl",
    them: "Limited to Webflow built-in tools",
  },
  {
    feature: "AI integration",
    bd: "AI automations, chatbots, lead scoring built-in",
    them: "Third-party add-ons only",
  },
  {
    feature: "Lead generation",
    bd: "CRM integrations, call tracking, conversion funnels",
    them: "Form embeds; minimal native lead routing",
  },
  {
    feature: "Content strategy",
    bd: "Monthly content + keyword targeting included",
    them: "Typically not included",
  },
  {
    feature: "Lock-in",
    bd: "You own your code, your repo, your data",
    them: "Locked to Webflow hosting",
  },
  {
    feature: "Ongoing support",
    bd: "Dedicated account management, monthly reports",
    them: "Varies widely by agency",
  },
  {
    feature: "Starting price",
    bd: "From $997/mo",
    them: "From $1,500–$3,000+ one-time, then hosting fees",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bamberg Digital vs Webflow Agency",
  description:
    "Comparison of Bamberg Digital's full-stack digital marketing services vs a Webflow design agency.",
  url: "https://www.bambergdigital.com/vs/webflow-agency",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bambergdigital.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comparisons",
        item: "https://www.bambergdigital.com/vs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bamberg Digital vs Webflow Agency",
      },
    ],
  },
};

export default function VsWebflowAgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Comparison · Agency Selection Guide
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Bamberg Digital vs a Webflow Agency
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Webflow agencies build clean-looking sites fast. But if you need
            AI-powered SEO, custom integrations, and a growth system — not just
            a website — the comparison goes deeper than templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Get a free AI audit
            </a>
            <a
              href="/pricing"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              See pricing →
            </a>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-10 text-center">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-500 w-1/3">
                    Feature
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-blue-700">
                    Bamberg Digital
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-500">
                    Webflow Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      <span className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {row.bd}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why BD wins */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-6 text-center">
            When Bamberg Digital is the right choice
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "You need more than a brochure site",
                body: "If the goal is leads, bookings, or revenue — not just a URL — you need a growth system. We build conversion funnels, CRM integrations, and content engines alongside the site.",
              },
              {
                title: "SEO is a priority",
                body: "Webflow's SEO tools are limited. We control every technical SEO lever: schema markup, Core Web Vitals, crawl architecture, and AI-driven content targeting.",
              },
              {
                title: "You want AI automation",
                body: "From AI chatbots that qualify leads to automated follow-up sequences, we wire AI into your marketing stack — not as an add-on, but from day one.",
              },
              {
                title: "You want to own your stack",
                body: "Your code lives in your repo. Your data lives in your CRM. No vendor lock-in to a platform that can change pricing or shut down.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When they might be right */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mb-4 text-center">
            When a Webflow agency might be the better fit
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We&apos;re honest about this: if you need a simple 5-page marketing
            site fast, with no ongoing growth work, a Webflow agency can get you
            live quickly. Our services are built for businesses that want
            measurable growth, not just a digital presence.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-blue-800 font-semibold mb-4">
              Not sure which is right for you? Let us audit your current
              situation — free.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Book a free consultation →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Get your free AI audit
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your business. We&apos;ll show you exactly
              what&apos;s holding back your growth and what a custom system
              would look like.
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
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <ContactForm service="comparison-webflow" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
