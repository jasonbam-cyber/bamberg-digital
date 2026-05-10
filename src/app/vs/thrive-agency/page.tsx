import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Bamberg Digital vs Thrive Agency | AI-First vs Traditional Digital Marketing",
  description:
    "Bamberg Digital vs Thrive Agency: we offer founder-direct strategy, AI automation, and transparent pricing — without the enterprise contract overhead. Compare now.",
  alternates: { canonical: "https://www.bambergdigital.com/vs/thrive-agency" },
  openGraph: {
    title:
      "Bamberg Digital vs Thrive Agency | AI-First vs Traditional Digital Marketing",
    description:
      "Bamberg Digital vs Thrive Agency: founder-direct strategy, AI automation, transparent pricing — vs a large agency model. Compare services and costs.",
    url: "https://www.bambergdigital.com/vs/thrive-agency",
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
    title: "Bamberg Digital vs Thrive Agency",
    description:
      "Founder-direct AI marketing vs a large traditional agency. See what you actually get for your budget.",
  },
};

const rows = [
  {
    feature: "Agency model",
    bd: "Founder-led, boutique — Jason works your account",
    them: "Large agency; account shuffled between junior staff",
  },
  {
    feature: "AI & automation",
    bd: "AI-native — built into every workflow from day one",
    them: "AI offered as upsell add-on",
  },
  {
    feature: "Reporting",
    bd: "Plain-English monthly reports + live dashboard",
    them: "Automated PDF reports; limited insight",
  },
  {
    feature: "Contract terms",
    bd: "Month-to-month after onboarding",
    them: "Typically 6–12 month contracts",
  },
  {
    feature: "SEO approach",
    bd: "Technical + content + AI-driven keyword targeting",
    them: "Traditional SEO; high volume, lower customization",
  },
  {
    feature: "Lead generation",
    bd: "Custom funnels, CRM wiring, call tracking per client",
    them: "Templated PPC campaigns",
  },
  {
    feature: "Transparency",
    bd: "You see the strategy, the work, the data — always",
    them: "Proprietary dashboards; limited raw access",
  },
  {
    feature: "Starting price",
    bd: "From $997/mo — no hidden fees",
    them: "Often $1,500–$5,000+/mo depending on services",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bamberg Digital vs Thrive Agency",
  description:
    "Comparison of Bamberg Digital's AI-first boutique agency vs Thrive Agency's traditional large-agency model.",
  url: "https://www.bambergdigital.com/vs/thrive-agency",
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
        name: "Bamberg Digital vs Thrive Agency",
      },
    ],
  },
};

export default function VsThriveAgencyPage() {
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
            Bamberg Digital vs Thrive Agency
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thrive is a well-known national agency. But bigger isn&apos;t always
            better — especially if you&apos;re a small or mid-size business that
            wants direct access to senior strategy, AI-powered campaigns, and
            results you can verify.
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
                    Thrive Agency
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

      {/* The boutique advantage */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-6 text-center">
            The boutique advantage
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Direct access to the strategist",
                body: "At Bamberg Digital, Jason runs your account. Not a junior account manager reading from a playbook — the founder who built the system.",
              },
              {
                title: "AI is the default, not the upsell",
                body: "Every campaign we build uses AI for keyword research, content targeting, lead scoring, and reporting. You don't pay extra for the technology that drives results.",
              },
              {
                title: "No 12-month lock-in",
                body: "We earn your business month to month after onboarding. If we're not delivering, you shouldn't be paying. That's the accountability large agencies avoid.",
              },
              {
                title: "Full data transparency",
                body: "You get raw access to your analytics, your ad accounts, your CRM. We don't hide performance inside proprietary dashboards to make switching painful.",
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

      {/* Honest note */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mb-4 text-center">
            When Thrive might be the right choice
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Thrive has scale and a broad service menu. If you&apos;re a large
            enterprise needing multi-market PPC management across dozens of
            locations, a large agency may have more operational capacity. We
            focus on small-to-mid businesses that want senior-level strategy
            without enterprise-level overhead.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-blue-800 font-semibold mb-4">
              Want to see what AI-first marketing looks like for your specific
              business? We&apos;ll audit your current situation — free.
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
              Tell us about your business. We&apos;ll show you exactly what a
              custom AI marketing system would look like for your vertical.
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
            <ContactForm service="comparison-thrive" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
