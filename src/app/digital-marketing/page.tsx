import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Sacramento | Bamberg Digital",
  description:
    "Full-service digital marketing for Sacramento businesses. Strategy, execution, and AI automation. Consultation from $497. Retainers from $997/mo.",
  alternates: { canonical: "https://www.bambergdigital.com/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Agency Sacramento | Bamberg Digital",
    description:
      "Full-service digital marketing for Sacramento businesses. Strategy, execution, and AI automation. Consultation from $497. Retainers from $997/mo.",
    url: "https://www.bambergdigital.com/digital-marketing",
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
    title: "Digital Marketing Agency Sacramento | Bamberg Digital",
    description:
      "Full-service digital marketing for Sacramento businesses. Strategy, execution, and AI automation. Consultation from $497. Retainers from $997/mo.",
  },
};

const included = [
  "Multi-channel strategy — SEO, social, email, and PPC working together",
  "AI-powered campaign optimization — we use automation to do more with less budget",
  "Competitor analysis — know exactly what your rivals are doing and where they're weak",
  "Monthly performance reports — clear metrics tied to revenue, not vanity numbers",
  "A/B testing — continuous improvement on copy, creative, and targeting",
  "Marketing automation setup — email sequences and follow-ups that run themselves",
];

const pricing = [
  {
    name: "Strategy Consultation",
    price: "$497",
    period: "one-time",
    desc: "A 90-minute deep dive into your business — custom marketing plan and channel prioritization delivered.",
    features: [
      "90-minute strategy session",
      "Custom marketing plan",
      "Channel prioritization",
      "Competitor snapshot",
      "Budget recommendations",
    ],
    highlight: false,
  },
  {
    name: "Starter Retainer",
    price: "$997",
    period: "/mo",
    desc: "SEO, social media, and email handled monthly with a full performance report.",
    features: [
      "SEO maintenance",
      "Social media management",
      "Email marketing",
      "Monthly performance report",
      "Dedicated account manager",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Growth Retainer",
    price: "$1,997",
    period: "/mo",
    desc: "All channels plus paid ads and weekly optimization — for businesses ready to scale fast.",
    features: [
      "All Starter features",
      "Paid ads management (PPC)",
      "Weekly optimization calls",
      "A/B testing",
      "Marketing automation",
      "Competitor tracking",
      "Weekly performance report",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What channels are included in a retainer?",
    a: "SEO, social media, and email are included in Starter. Growth adds paid ads (PPC) management. Ad spend is separate and goes directly to the platform.",
  },
  {
    q: "How is Bamberg Digital different from other agencies?",
    a: "We use AI to automate and optimize — most agencies are still doing things manually. That means we move faster, spot opportunities sooner, and deliver more value per dollar spent.",
  },
  {
    q: "Do you work with specific industries?",
    a: "We specialize in real estate, home services, medical practices, legal firms, restaurants, and e-commerce. Sacramento businesses in Elk Grove, Folsom, Roseville, and Rancho Cordova are our backyard.",
  },
  {
    q: "What's a realistic budget for paid ads?",
    a: "We recommend $500–$2,000/mo in ad spend for meaningful results. We optimize every dollar, but ad spend goes directly to Google, Meta, or wherever your customers are.",
  },
  {
    q: "Is there a contract?",
    a: "Month-to-month after the first 90 days. We earn your business every month, not lock you in.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing",
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
    "Full-service digital marketing agency in Sacramento using AI to deliver results.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/digital-marketing" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What channels are included in a retainer?", "acceptedAnswer": {"@type": "Answer", "text": "SEO, social media, and email are included in Starter. Growth adds paid ads (PPC) management. Ad spend is separate and goes directly to the platform."}}, {"@type": "Question", "name": "How is Bamberg Digital different from other agencies?", "acceptedAnswer": {"@type": "Answer", "text": "We use AI to automate and optimize \u2014 most agencies are still doing things manually. That means we move faster, spot opportunities sooner, and deliver more value per dollar spent."}}, {"@type": "Question", "name": "Do you work with specific industries?", "acceptedAnswer": {"@type": "Answer", "text": "We specialize in real estate, home services, medical practices, legal firms, restaurants, and e-commerce. Sacramento businesses in Elk Grove, Folsom, Roseville, and Rancho Cordova are our backyard."}}, {"@type": "Question", "name": "What's a realistic budget for paid ads?", "acceptedAnswer": {"@type": "Answer", "text": "We recommend $500\u2013$2,000/mo in ad spend for meaningful results. We optimize every dollar, but ad spend goes directly to Google, Meta, or wherever your customers are."}}, {"@type": "Question", "name": "Is there a contract?", "acceptedAnswer": {"@type": "Answer", "text": "Month-to-month after the first 90 days. We earn your business every month, not lock you in."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Digital Marketing Agency · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sacramento Digital Marketing Agency Powered by AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We run the full playbook — SEO, social, email, and paid ads — using
            AI to move faster and optimize harder than traditional agencies.
            Sacramento businesses and clients nationwide rely on us to drive
            consistent, measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Book a strategy consultation
            </a>
            <a
              href="#pricing"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              See retainer pricing →
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              What every retainer includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We don't just manage channels — we build a system that compounds
              over time.
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
              Marketing plans
            </h2>
            <p className="text-gray-600">
              Start with a strategy session or go straight to a retainer.
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
              { href: "/seo", label: "SEO Services" },
              { href: "/social-media", label: "Social Media Marketing" },
              { href: "/consulting", label: "AI & Automation Consulting" },
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
              Let's build your growth engine
            </h2>
            <p className="text-gray-600 text-lg">
              Start with a $497 strategy consultation — you'll leave with a full
              marketing plan whether you hire us or not.
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
            <ContactForm service="digital-marketing" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
