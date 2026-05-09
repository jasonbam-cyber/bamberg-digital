import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Brand Identity & Design Sacramento | Bamberg Digital",
  description:
    "Logo design, brand identity, and full brand guidelines for Sacramento businesses. Starter brand from $697. Full brand package from $1,497.",
  alternates: { canonical: "https://www.bambergdigital.com/branding" },
  openGraph: {
    title: "Brand Identity & Design Sacramento | Bamberg Digital",
    description:
      "Logo design, brand identity, and full brand guidelines for Sacramento businesses. Starter brand from $697. Full brand package from $1,497.",
    url: "https://www.bambergdigital.com/branding",
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
    title: "Brand Identity & Design Sacramento | Bamberg Digital",
    description:
      "Logo design, brand identity, and full brand guidelines for Sacramento businesses. Starter brand from $697. Full brand package from $1,497.",
  },
};

const included = [
  "Logo design — 3 concepts, 2 rounds of revisions, final files in all formats",
  "Brand color palette — primary, secondary, and neutral colors with hex codes",
  "Typography system — heading and body font pairings with usage rules",
  "Brand guidelines PDF — everything in one shareable document",
  "Business card design — print-ready files included",
  "Social media profile graphics — cover photos and profile images for all platforms",
];

const pricing = [
  {
    name: "Brand Starter",
    price: "$697",
    period: "one-time",
    desc: "Everything a new business needs to look professional and consistent from day one.",
    features: [
      "Logo design (3 concepts, 2 revisions)",
      "Brand color palette",
      "2 font pairings",
      "Usage guide PDF",
      "Final files: AI, SVG, PNG, PDF",
    ],
    highlight: false,
  },
  {
    name: "Brand Standard",
    price: "$1,497",
    period: "one-time",
    desc: "Full brand identity with guidelines, business card, and social media kit.",
    features: [
      "Logo suite (primary, secondary, icon)",
      "Full brand guidelines",
      "Business card design",
      "Social media profile kit",
      "Brand color palette",
      "Typography system",
    ],
    highlight: true,
  },
  {
    name: "Brand Premium",
    price: "$2,497",
    period: "one-time",
    desc: "Complete brand identity bundled with a professional website — launch-ready in one package.",
    features: [
      "Everything in Brand Standard",
      "5-page website design",
      "Brand launch kit",
      "Email signature design",
      "30-day post-launch support",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "How many logo concepts do I get?",
    a: "Three distinct logo concepts. Once you pick your direction, we refine it through two revision rounds until it's exactly right.",
  },
  {
    q: "How long does branding take?",
    a: "Brand Starter typically takes 2–4 weeks. Brand Standard is 3–5 weeks. Brand Premium (with website) runs 5–7 weeks.",
  },
  {
    q: "Do I own the logo files?",
    a: "Yes — you receive all source files including AI (Illustrator), SVG, PNG, and PDF. Full ownership, no licensing strings.",
  },
  {
    q: "Can you rebrand an existing business?",
    a: "Yes. Rebrands follow the same process and start at $697. We'll review what exists and either refresh it or start fresh depending on what you need.",
  },
  {
    q: "Do you design websites too?",
    a: "Yes — Brand Premium bundles branding with website design. You can also add a website to any package. See our web design page for standalone pricing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Brand Identity Design",
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
    "Logo design, brand identity, and full brand guidelines for Sacramento businesses.",
};

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/branding" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How many logo concepts do I get?", "acceptedAnswer": {"@type": "Answer", "text": "Three distinct logo concepts. Once you pick your direction, we refine it through two revision rounds until it's exactly right."}}, {"@type": "Question", "name": "How long does branding take?", "acceptedAnswer": {"@type": "Answer", "text": "Brand Starter typically takes 2\u20134 weeks. Brand Standard is 3\u20135 weeks. Brand Premium (with website) runs 5\u20137 weeks."}}, {"@type": "Question", "name": "Do I own the logo files?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 you receive all source files including AI (Illustrator), SVG, PNG, and PDF. Full ownership, no licensing strings."}}, {"@type": "Question", "name": "Can you rebrand an existing business?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rebrands follow the same process and start at $697. We'll review what exists and either refresh it or start fresh depending on what you need."}}, {"@type": "Question", "name": "Do you design websites too?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 Brand Premium bundles branding with website design. You can also add a website to any package. See our web design page for standalone pricing."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Brand Identity Design · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Brand Identity Design That Makes Sacramento Businesses Unforgettable
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We design logos, color systems, and brand guidelines for businesses
            in Sacramento, Elk Grove, Roseville, and nationwide. From a quick
            brand refresh at $697 to a complete identity with website launch at
            $2,497.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Start your brand project
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
              What every brand package includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A brand is more than a logo. We give you a complete system so
              every touchpoint looks intentional.
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
              Brand packages
            </h2>
            <p className="text-gray-600">
              All files included. You own everything.
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
              { href: "/web-design", label: "Website Design" },
              { href: "/content-creation", label: "Content Creation" },
              { href: "/social-media", label: "Social Media Marketing" },
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
              Ready to build a brand that stands out?
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your business and we'll share examples from your
              industry.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Call us:{" "}
              <a
                href="tel:9169077782"
                className="text-blue-600 hover:underline"
              >
                (916) 907-7782
              </a>
              {" · "}
              <a
                href="mailto:hello@bambergdigital.com"
                className="text-blue-600 hover:underline"
              >
                hello@bambergdigital.com
              </a>
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm service="branding" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
