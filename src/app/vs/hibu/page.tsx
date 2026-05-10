import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Bamberg Digital vs Hibu | Real Strategy vs Yellow Pages Marketing",
  description:
    "Comparing Bamberg Digital vs Hibu? We deliver custom AI-powered marketing — not recycled directory listings and cookie-cutter websites. See the full comparison.",
  alternates: { canonical: "https://www.bambergdigital.com/vs/hibu" },
  openGraph: {
    title: "Bamberg Digital vs Hibu | Real Strategy vs Yellow Pages Marketing",
    description:
      "Bamberg Digital vs Hibu: AI-powered SEO and custom strategy vs directory-based marketing packages. See exactly what you get for your money.",
    url: "https://www.bambergdigital.com/vs/hibu",
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
    title: "Bamberg Digital vs Hibu",
    description:
      "Custom AI marketing vs directory-based Hibu packages. An honest comparison for small business owners.",
  },
};

const rows = [
  {
    feature: "Website ownership",
    bd: "You own your site, code, and domain outright",
    them: "Hibu hosts and owns your site — lose it if you cancel",
  },
  {
    feature: "SEO approach",
    bd: "Technical SEO + AI content strategy + local targeting",
    them: "Basic local directory listings",
  },
  {
    feature: "AI & automation",
    bd: "AI chatbots, lead scoring, automated follow-up",
    them: "Not offered",
  },
  {
    feature: "Custom design",
    bd: "Fully custom — built for your brand and conversion goals",
    them: "Template-based websites",
  },
  {
    feature: "Reporting",
    bd: "Full analytics dashboard — traffic, leads, revenue attribution",
    them: "Basic call tracking; limited transparency",
  },
  {
    feature: "Social media",
    bd: "Strategy + content creation + scheduling",
    them: "Automated post syndication",
  },
  {
    feature: "Contract terms",
    bd: "Month-to-month after onboarding",
    them: "Annual contracts common",
  },
  {
    feature: "Starting price",
    bd: "From $997/mo — all-in",
    them: "Varies; packages often $500–$1,500/mo with hidden fees",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bamberg Digital vs Hibu",
  description:
    "Comparison of Bamberg Digital's AI-first digital marketing vs Hibu's directory-based small business marketing packages.",
  url: "https://www.bambergdigital.com/vs/hibu",
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
      { "@type": "ListItem", position: 3, name: "Bamberg Digital vs Hibu" },
    ],
  },
};

export default function VsHibuPage() {
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
            Bamberg Digital vs Hibu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hibu evolved from Yellow Pages into bundled digital marketing
            packages. If you&apos;re paying for one of those packages and
            wondering why leads haven&apos;t moved — this comparison explains
            why, and what the alternative looks like.
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

      {/* Warning callout */}
      <section className="py-8 px-4 bg-amber-50 border-y border-amber-100">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-4 h-4 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
          </div>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> With Hibu, your website is hosted on
            their platform. If you cancel your contract, you typically lose
            access to the site entirely. At Bamberg Digital, you own everything
            — your domain, your code, your content — from day one.
          </p>
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
                    Hibu
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

      {/* Key differentiators */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-6 text-center">
            What you get with Bamberg Digital that Hibu can&apos;t offer
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Ownership",
                body: "Your website, your domain, your data — fully portable. No vendor hostage situation.",
              },
              {
                title: "AI-powered growth",
                body: "We wire AI into your lead gen, content, and follow-up sequences. Hibu doesn't offer this at any tier.",
              },
              {
                title: "Real accountability",
                body: "Monthly reports show exactly what moved — rankings, leads, revenue. Not vanity metrics.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
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

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Audit your current marketing — free
            </h2>
            <p className="text-gray-600 text-lg">
              Already with Hibu and not seeing results? We&apos;ll audit your
              current setup and show you specifically where the gaps are — no
              obligation.
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
            <ContactForm service="comparison-hibu" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
