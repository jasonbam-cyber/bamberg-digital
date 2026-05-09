import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Web Design Sacramento | Bamberg Digital",
  description:
    "Professional website design for Sacramento small businesses. Custom sites from $497. Mobile-first, SEO-ready, and built to convert. Free consultation.",
  alternates: { canonical: "https://www.bambergdigital.com/web-design" },
  openGraph: {
    title: "Web Design Sacramento | Bamberg Digital",
    description:
      "Professional website design for Sacramento small businesses. Custom sites from $497. Mobile-first, SEO-ready, and built to convert.",
    url: "https://www.bambergdigital.com/web-design",
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
    title: "Web Design Sacramento | Bamberg Digital",
    description:
      "Professional website design for Sacramento small businesses. Custom sites from $497. Mobile-first, SEO-ready, and built to convert.",
  },
};

const included = [
  "Mobile-first responsive design — works perfectly on every device",
  "SEO-optimized structure — built to rank from day one",
  "Google Analytics setup — know exactly where visitors come from",
  "Contact and lead capture forms — turn visitors into inquiries",
  "Fast load times under 3 seconds — don't lose visitors to slow pages",
  "1-year hosting guidance and platform recommendations",
];

const pricing = [
  {
    name: "Starter",
    price: "$497",
    period: "one-time",
    desc: "A clean, professional 3–5 page brochure site that builds trust and captures leads.",
    features: [
      "3–5 page custom website",
      "Mobile-first responsive design",
      "Contact form + lead capture",
      "SEO-optimized structure",
      "Google Analytics setup",
      "Delivered in 2–3 weeks",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "$997",
    period: "one-time",
    desc: "Up to 10 pages with blog and forms — everything a growing business needs online.",
    features: [
      "Up to 10 pages",
      "Blog setup",
      "Multiple contact/lead forms",
      "Basic SEO setup",
      "Google Business integration",
      "14-day post-launch support",
    ],
    highlight: true,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "one-time",
    desc: "Custom design from scratch, SEO-ready architecture, and 30 days of post-launch support.",
    features: [
      "Fully custom design",
      "Unlimited pages",
      "Advanced SEO setup",
      "Speed optimization",
      "Analytics dashboard setup",
      "30-day post-launch support",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "Typically 2–3 weeks for a 5-page site. Larger or more complex projects run 4–6 weeks. We give you a clear timeline before we start.",
  },
  {
    q: "Do I own the website?",
    a: "Yes, 100%. You own all code, content, and hosting. We hand everything over when the project is complete.",
  },
  {
    q: "Can you redesign my existing site?",
    a: "Yes — redesigns start at $497. We'll modernize your current site or build a completely fresh design depending on your needs.",
  },
  {
    q: "Do you build e-commerce sites?",
    a: "Yes. Shopify and WooCommerce stores starting at $1,497. We handle product setup, payment integration, and launch.",
  },
  {
    q: "What cities do you serve?",
    a: "We're based in Sacramento, CA and serve clients in Elk Grove, Folsom, Roseville, Rancho Cordova, and nationwide remotely.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design",
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
    "Professional website design for Sacramento small businesses. Custom sites from $497. Mobile-first, SEO-ready, and built to convert.",
};

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/web-design" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long does a website take?", "acceptedAnswer": {"@type": "Answer", "text": "Typically 2\u20133 weeks for a 5-page site. Larger or more complex projects run 4\u20136 weeks. We give you a clear timeline before we start."}}, {"@type": "Question", "name": "Do I own the website?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, 100%. You own all code, content, and hosting. We hand everything over when the project is complete."}}, {"@type": "Question", "name": "Can you redesign my existing site?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 redesigns start at $497. We'll modernize your current site or build a completely fresh design depending on your needs."}}, {"@type": "Question", "name": "Do you build e-commerce sites?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Shopify and WooCommerce stores starting at $1,497. We handle product setup, payment integration, and launch."}}, {"@type": "Question", "name": "What cities do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "We're based in Sacramento, CA and serve clients in Elk Grove, Folsom, Roseville, Rancho Cordova, and nationwide remotely."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Website Design · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sacramento Website Design That Converts Visitors Into Customers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build fast, mobile-first websites for Sacramento small businesses
            — from plumbers in Rancho Cordova to law firms in Folsom. Sites
            starting at $497, delivered in 2–3 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Get a free consultation
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
              What every site includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No cookie-cutter templates. Every site is built to perform in
              Sacramento search results and convert your specific customers.
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
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600">
              No setup fees. No surprises. You own everything.
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
              { href: "/branding", label: "Brand Identity Design" },
              { href: "/seo", label: "SEO Services" },
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
              Ready for a site that actually converts?
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your business and we'll put together a proposal — no
              obligation, no pitch deck.
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
            <ContactForm service="web-design" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
