import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Lead Generation Services | Bamberg Digital",
  description:
    "Verified B2B lead lists for small businesses. Phone, email, and LinkedIn verified. 50 leads from $197. Weekly delivery available.",
  alternates: { canonical: "https://www.bambergdigital.com/leads" },
  openGraph: {
    title: "Lead Generation Services | Bamberg Digital",
    description:
      "Verified B2B lead lists for small businesses. Phone, email, and LinkedIn verified. 50 leads from $197. Weekly delivery available.",
    url: "https://www.bambergdigital.com/leads",
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
    title: "Lead Generation Services | Bamberg Digital",
    description:
      "Verified B2B lead lists for small businesses. Phone, email, and LinkedIn verified. 50 leads from $197. Weekly delivery available.",
  },
};

const included = [
  "Phone verification — every number checked within 30 days of delivery",
  "Email verification — no bounces, no dead inboxes",
  "Business details — company size, revenue estimate, and decision maker name",
  "Industry and geography targeting — city, county, zip code, or nationwide",
  "CSV or CRM-ready format — HubSpot, Salesforce, and Zoho supported",
  "Replacement guarantee — we replace any contacts that bounce above 5%",
];

const pricing = [
  {
    name: "Starter",
    price: "$197",
    period: "one-time",
    desc: "50 verified leads for your target industry and geography — perfect for testing a new market.",
    features: [
      "50 verified leads",
      "Your target industry",
      "Your target geography",
      "Phone + email verified",
      "CSV delivery",
      "5% bounce replacement guarantee",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$397",
    period: "/mo",
    desc: "200 leads per month delivered weekly — a steady, scalable pipeline.",
    features: [
      "200 verified leads/month",
      "Weekly delivery",
      "Up to 3 industries",
      "Phone + email + LinkedIn",
      "CSV or CRM upload",
      "5% bounce replacement guarantee",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$797",
    period: "/mo",
    desc: "500 leads per month plus email sequence setup and direct CRM upload.",
    features: [
      "500 verified leads/month",
      "Weekly delivery",
      "Unlimited industries",
      "Full contact enrichment",
      "Email sequence included",
      "Direct CRM upload",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "How are leads verified?",
    a: "Phone and email are checked within 30 days of delivery using live verification tools. We don't deliver contacts that haven't been confirmed active.",
  },
  {
    q: "What industries do you source leads for?",
    a: "Any B2B industry. We specialize in real estate, home services, legal, medical, and financial — but we've built lists for over 40 industry categories.",
  },
  {
    q: "What format do I receive leads in?",
    a: "CSV file or direct CRM upload. We support HubSpot, Salesforce, and Zoho. Other CRMs available on request.",
  },
  {
    q: "What's your bounce rate?",
    a: "Under 5%. We replace any contacts that bounce above that threshold at no extra charge.",
  },
  {
    q: "Can you target specific cities or zip codes?",
    a: "Yes. We can target by city (Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova), county, zip code, metro area, or nationwide. The more specific your ICP, the better the list quality.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lead Generation",
  provider: {
    "@type": "LocalBusiness",
    name: "Bamberg Digital",
    telephone: "+19169077782",
    email: "hello@bambergdigital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  description:
    "Verified B2B lead lists for small businesses. Phone, email, and LinkedIn verified.",
};

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/leads" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How are leads verified?", "acceptedAnswer": {"@type": "Answer", "text": "Phone and email are checked within 30 days of delivery using live verification tools. We don't deliver contacts that haven't been confirmed active."}}, {"@type": "Question", "name": "What industries do you source leads for?", "acceptedAnswer": {"@type": "Answer", "text": "Any B2B industry. We specialize in real estate, home services, legal, medical, and financial \u2014 but we've built lists for over 40 industry categories."}}, {"@type": "Question", "name": "What format do I receive leads in?", "acceptedAnswer": {"@type": "Answer", "text": "CSV file or direct CRM upload. We support HubSpot, Salesforce, and Zoho. Other CRMs available on request."}}, {"@type": "Question", "name": "What's your bounce rate?", "acceptedAnswer": {"@type": "Answer", "text": "Under 5%. We replace any contacts that bounce above that threshold at no extra charge."}}, {"@type": "Question", "name": "Can you target specific cities or zip codes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We can target by city (Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova), county, zip code, metro area, or nationwide. The more specific your ICP, the better the list quality."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Verified Lead Generation
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Verified Lead Generation — No Bounces, No Wasted Calls
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every lead is phone and email verified before it reaches you.
            Targeted by industry, city, or zip code — Sacramento businesses and
            clients nationwide use our lists to fill their pipelines without
            wasting time on dead contacts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Get your first 50 leads
            </a>
            <a
              href="#pricing"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              See pricing →
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              What every lead list includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Not a scraped database dump — a curated, verified, and targeted
              list ready to work the moment you receive it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              New client intro rates
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Lead generation plans
            </h2>
            <p className="text-gray-600">
              Start with a one-time order or subscribe for weekly delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${
                  p.highlight
                    ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105"
                    : "bg-white border-gray-100"
                }`}
              >
                <h3
                  className={`font-[family-name:var(--font-montserrat)] font-bold text-xl mb-1 ${p.highlight ? "text-white" : "text-gray-900"}`}
                >
                  {p.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`font-[family-name:var(--font-montserrat)] text-4xl font-extrabold ${p.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${p.highlight ? "text-blue-100" : "text-gray-500"}`}
                >
                  {p.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.highlight ? "text-blue-200" : "text-emerald-500"}`}
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
                      <span
                        className={
                          p.highlight ? "text-blue-50" : "text-gray-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                    p.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden group"
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

      {/* Related services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Related services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/consulting", label: "AI & Automation Consulting" },
              { href: "/digital-marketing", label: "Digital Marketing" },
              { href: "/seo", label: "SEO Services" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm transition-colors"
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Tell us your target market
            </h2>
            <p className="text-gray-600 text-lg">
              Share your industry, geography, and ideal customer — we&apos;ll
              tell you what a list looks like before you pay anything.
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
            <ContactForm service="lead-generation" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
