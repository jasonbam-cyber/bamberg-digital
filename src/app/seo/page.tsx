import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SEO Services Sacramento | Bamberg Digital",
  description:
    "Sacramento SEO agency using AI to rank your business on Google. Free SEO audit. Local SEO, technical SEO, and content strategy from $497/mo.",
  alternates: { canonical: "https://www.bambergdigital.com/seo" },
  openGraph: {
    title: "SEO Services Sacramento | Bamberg Digital",
    description:
      "Sacramento SEO agency using AI to rank your business on Google. Free SEO audit. Local SEO, technical SEO, and content strategy from $497/mo.",
    url: "https://www.bambergdigital.com/seo",
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
    title: "SEO Services Sacramento | Bamberg Digital",
    description:
      "Sacramento SEO agency using AI to rank your business on Google. Free SEO audit. Local SEO, technical SEO, and content strategy from $497/mo.",
  },
};

const included = [
  "Technical SEO audit — broken links, missing tags, slow pages, crawl errors",
  "Keyword research and targeting — find the searches your customers are already making",
  "On-page optimization — titles, meta descriptions, headers, and content structure",
  "Google Business Profile optimization — rank in local map pack results",
  "Local citation building — consistent NAP data across directories",
  "Monthly ranking reports — see exactly where you stand and what moved",
];

const pricing = [
  {
    name: "SEO Audit",
    price: "$497",
    period: "one-time",
    desc: "A full site analysis, competitor gap report, and prioritized action plan — delivered within 5 business days.",
    features: [
      "Full technical site crawl",
      "Competitor keyword gap analysis",
      "Top 3 competitor review",
      "Prioritized fix list",
      "Google Business snapshot",
      "30-min strategy call included",
    ],
    highlight: false,
  },
  {
    name: "Local SEO",
    price: "$497",
    period: "/mo",
    desc: "Dominate Sacramento-area searches — Google Business, citations, and local ranking focus.",
    features: [
      "Google Business Profile management",
      "Local citation building",
      "Local keyword targeting",
      "On-page optimization",
      "Monthly ranking report",
      "Review strategy included",
    ],
    highlight: true,
  },
  {
    name: "Full SEO",
    price: "$997",
    period: "/mo",
    desc: "Technical SEO, content strategy, and link building — the complete program for aggressive growth.",
    features: [
      "Everything in Local SEO",
      "Technical SEO fixes implemented",
      "Content strategy and writing",
      "Link building",
      "Competitor tracking",
      "Monthly performance report",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long does SEO take?",
    a: "90–180 days to see significant movement. Technical fixes and Google Business improvements often show results in 30–60 days. We send monthly reports so you always know where things stand.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No one can guarantee Google rankings — anyone who does is lying. We guarantee our process, our work quality, and transparent monthly reporting. Our clients consistently see results because we follow proven methods.",
  },
  {
    q: "What's the difference between Local and Full SEO?",
    a: "Local SEO targets 'near me' and Sacramento-area searches — Google Maps, local pack, and city-specific keywords. Full SEO adds content strategy and link building to compete for broader keywords at the state or national level.",
  },
  {
    q: "Will you audit my site first?",
    a: "Yes — the $497 one-time SEO Audit is the natural starting point. It tells you exactly where the problems are and what to prioritize. Many clients start there before committing to ongoing work.",
  },
  {
    q: "Do you serve clients outside Sacramento?",
    a: "Yes. We're based in Sacramento and serve local businesses in Elk Grove, Folsom, Roseville, and Rancho Cordova — but we work with businesses nationwide remotely.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SEO Services",
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
  areaServed: { "@type": "City", name: "Sacramento", addressRegion: "CA" },
  description:
    "Sacramento SEO agency using AI to rank businesses on Google. Free SEO audit. Local SEO, technical SEO, and content strategy.",
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/seo" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long does SEO take?", "acceptedAnswer": {"@type": "Answer", "text": "90\u2013180 days to see significant movement. Technical fixes and Google Business improvements often show results in 30\u201360 days. We send monthly reports so you always know where things stand."}}, {"@type": "Question", "name": "Do you guarantee rankings?", "acceptedAnswer": {"@type": "Answer", "text": "No one can guarantee Google rankings \u2014 anyone who does is lying. We guarantee our process, our work quality, and transparent monthly reporting. Our clients consistently see results because we follow proven methods."}}, {"@type": "Question", "name": "What's the difference between Local and Full SEO?", "acceptedAnswer": {"@type": "Answer", "text": "Local SEO targets 'near me' and Sacramento-area searches \u2014 Google Maps, local pack, and city-specific keywords. Full SEO adds content strategy and link building to compete for broader keywords at the state or national level."}}, {"@type": "Question", "name": "Will you audit my site first?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 the $497 one-time SEO Audit is the natural starting point. It tells you exactly where the problems are and what to prioritize. Many clients start there before committing to ongoing work."}}, {"@type": "Question", "name": "Do you serve clients outside Sacramento?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We're based in Sacramento and serve local businesses in Elk Grove, Folsom, Roseville, and Rancho Cordova \u2014 but we work with businesses nationwide remotely."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            SEO Services · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sacramento SEO Services That Get You to Page One
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We use AI to find exactly where you're losing search traffic — then
            fix it. Sacramento businesses from Folsom to Rancho Cordova trust us
            for local SEO, technical optimization, and content strategy that
            moves rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Get a free SEO audit
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
              What every SEO engagement includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We show you exactly where you stand, what your competitors are
              doing better, and what to fix first.
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
              SEO plans
            </h2>
            <p className="text-gray-600">
              Start with a one-time audit or go straight to ongoing
              optimization.
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
              { href: "/content-creation", label: "Content Creation" },
              { href: "/web-design", label: "Website Design" },
              { href: "/digital-marketing", label: "Digital Marketing" },
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
              Get your free SEO audit
            </h2>
            <p className="text-gray-600 text-lg">
              Send us your URL. We&apos;ll deliver a plain-English audit showing
              your top issues and what to fix first — no obligation.
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
            <ContactForm service="seo" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
