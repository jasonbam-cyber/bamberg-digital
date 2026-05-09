import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Bundle Pricing | Bamberg Digital — Sacramento All-in-One Business Packages",
  description:
    "Website + SEO + Layer UI workspace bundled into one annual plan. Sacramento small businesses get more for less — starting at $19/seat/mo. 14-day money-back guarantee.",
  alternates: { canonical: "https://www.bambergdigital.com/bundles" },
  openGraph: {
    title:
      "Bundle Pricing | Bamberg Digital — Sacramento All-in-One Business Packages",
    description:
      "Website + SEO + Layer UI workspace bundled into one annual plan. Starting at $19/seat/mo with 14-day money-back guarantee.",
    url: "https://www.bambergdigital.com/bundles",
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
    title: "Bundle Pricing | Bamberg Digital — Sacramento All-in-One Business Packages",
    description:
      "Website + SEO + Layer UI workspace bundled into one annual plan. Sacramento small businesses get more for less — starting at $19/seat/mo.",
  },
};

const bundles = [
  {
    id: "starter",
    name: "Starter Launch",
    tagline: "Perfect for small teams getting started",
    price: 19,
    minSeats: 3,
    badge: null,
    example: { seats: 5, monthly: 95, annual: 1140 },
    includes: [
      "FREE 5-page website (built by us, hosted on Vercel)",
      "FREE SEO audit + basic optimization",
      "Layer UI/Strata workspace: chat, tasks, kanban",
      "5 AI calls/day per seat",
      "14-day money-back guarantee",
      "Cancel anytime after annual term",
    ],
    cta: "Start with Starter",
    color: "border-slate-700",
    accentColor: "text-blue-400",
    badgeBg: "",
  },
  {
    id: "growth",
    name: "Growth Engine",
    tagline: "Best value for growing Sacramento businesses",
    price: 39,
    minSeats: 3,
    badge: "Most Popular",
    example: { seats: 5, monthly: 195, annual: 2340 },
    includes: [
      "FREE 10-page website with blog + contact forms",
      "FREE comprehensive SEO setup + 3 months optimization",
      "FREE social media profile setup (3 platforms)",
      "Layer UI/Strata Pro: 20 AI calls/day, automations, CRM",
      "14-day money-back guarantee",
      "Cancel anytime after annual term",
    ],
    cta: "Start with Growth",
    color: "border-blue-500",
    accentColor: "text-blue-400",
    badgeBg: "bg-blue-500",
  },
  {
    id: "overhaul",
    name: "Full Digital Overhaul",
    tagline: "Everything you need to dominate your local market",
    price: 59,
    minSeats: 5,
    badge: null,
    example: { seats: 10, monthly: 590, annual: 7080 },
    includes: [
      "FREE custom website (up to 20 pages, e-commerce ready)",
      "FREE full SEO implementation + 6 months optimization",
      "FREE social media management (3 months)",
      "FREE brand identity package (logo refresh, color palette)",
      "Layer UI/Strata Business: 50 AI calls/day, full suite",
      "14-day money-back guarantee",
      "Cancel anytime after annual term",
    ],
    cta: "Start with Full Overhaul",
    color: "border-slate-700",
    accentColor: "text-cyan-400",
    badgeBg: "",
  },
];

const faqs = [
  {
    q: "How does the 14-day guarantee work?",
    a: "If you're not satisfied within the first 14 days of your contract, we'll refund 100% of your payment — no questions asked. After 14 days, the annual contract applies.",
  },
  {
    q: "What happens after 12 months?",
    a: "Your contract renews annually at the same rate. We'll send a reminder 60 days before renewal. You can cancel, downgrade, or continue — your call.",
  },
  {
    q: "Can I add more seats?",
    a: "Yes, anytime. Additional seats are prorated to your current billing cycle at the same per-seat rate. There's no cap on seats.",
  },
  {
    q: "What if I need custom features?",
    a: "Custom features are scoped separately as a one-time project. Bundle clients get priority scheduling and a 20% discount on custom development.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bamberg Digital Bundle Packages",
  description:
    "All-in-one website, SEO, and workspace bundles for Sacramento small businesses",
  itemListElement: bundles.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `Bamberg Digital ${b.name} Bundle`,
      description: b.tagline,
      offers: {
        "@type": "Offer",
        price: b.price,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: b.price,
          priceCurrency: "USD",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "MON",
          },
        },
        seller: {
          "@type": "Organization",
          name: "Bamberg Digital",
          url: "https://bambergdigital.com",
          areaServed: "Sacramento, CA",
        },
      },
    },
  })),
};

export default function BundlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-gray-950 text-white">
        <SiteNav active="/bundles" />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Annual contracts — Sacramento small businesses only
            </div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
              Everything bundled.
              <br />
              <span className="text-blue-400">One annual price.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              Website + SEO + AI-powered workspace. Built for Sacramento
              businesses that want to compete without paying agency rates for
              every service separately.
            </p>
            <p className="text-sm text-gray-500">
              Annual commitment. 14-day money-back guarantee. Minimum 3 seats.
            </p>
          </div>
        </section>

        {/* Bundle cards */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`relative rounded-2xl border ${bundle.color} bg-gray-900 p-8 flex flex-col ${
                  bundle.badge
                    ? "ring-2 ring-blue-500/50 shadow-2xl shadow-blue-500/10 md:-mt-4"
                    : ""
                }`}
              >
                {bundle.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={`${bundle.badgeBg} text-white text-xs font-bold px-4 py-1.5 rounded-full`}
                    >
                      {bundle.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white mb-1">
                    {bundle.name}
                  </h2>
                  <p className="text-sm text-gray-400">{bundle.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span
                      className={`font-[family-name:var(--font-montserrat)] text-5xl font-extrabold ${bundle.accentColor}`}
                    >
                      ${bundle.price}
                    </span>
                    <span className="text-gray-400 text-sm mb-2">/seat/mo</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Billed annually · Min {bundle.minSeats} seats
                  </p>
                </div>

                <div className="bg-gray-800/60 rounded-xl p-4 mb-6 text-sm">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Example
                  </p>
                  <p className="text-white font-medium">
                    {bundle.example.seats} seats ={" "}
                    <span className={bundle.accentColor}>
                      ${bundle.example.monthly}/mo
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    ${bundle.example.annual}/year — website + services included
                    free
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-300">
                      <span
                        className={`mt-0.5 flex-shrink-0 ${bundle.accentColor}`}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                    bundle.badge
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                  }`}
                >
                  {bundle.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            All prices in USD. Annual contract. 14-day money-back guarantee.{" "}
            <a href="#contact" className="text-blue-400 hover:underline">
              Book a free consultation
            </a>{" "}
            to find the right fit.
          </p>
        </section>

        {/* Value callout */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white text-center mb-12">
              What you&apos;d pay separately vs. bundled
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  À la carte (typical agency)
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>10-page website</span>
                    <span className="text-red-400 font-semibold">$1,997</span>
                  </li>
                  <li className="flex justify-between">
                    <span>SEO setup + 3 months</span>
                    <span className="text-red-400 font-semibold">$1,991</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Social media setup</span>
                    <span className="text-red-400 font-semibold">$497</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Workspace (5 seats/yr)</span>
                    <span className="text-red-400 font-semibold">$1,800</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-700 pt-3 font-bold text-white">
                    <span>Total</span>
                    <span className="text-red-400">$6,285</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-950/40 border border-blue-500/30 rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                  Growth Engine bundle (5 seats)
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>10-page website</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>SEO setup + 3 months</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Social media setup</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Workspace (5 seats/yr)</span>
                    <span className="text-blue-400 font-semibold">$2,340</span>
                  </li>
                  <li className="flex justify-between border-t border-blue-800 pt-3 font-bold text-white">
                    <span>Total</span>
                    <span className="text-blue-400">$2,340</span>
                  </li>
                </ul>
                <p className="text-green-400 text-sm font-bold mt-4 text-center">
                  You save $3,945
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-white mb-10 text-center">
              Bundle questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900 group"
                >
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
                    <span className="font-semibold text-white text-sm pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform"
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
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-white mb-4">
                Book a free consultation
              </h2>
              <p className="text-gray-400 text-lg">
                We&apos;ll match you to the right bundle based on your team
                size, goals, and current digital presence.
              </p>
              <p className="text-gray-500 text-sm mt-3">
                Call us:{" "}
                <a
                  href="tel:9169077782"
                  className="text-blue-400 hover:underline"
                >
                  (916) 907-7782
                </a>{" "}
                &middot;{" "}
                <a
                  href="mailto:hello@bambergdigital.com"
                  className="text-blue-400 hover:underline"
                >
                  hello@bambergdigital.com
                </a>
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <ContactForm service="bundle-inquiry" />
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
