import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Custom Business Tools Sacramento | Bamberg Digital",
  description:
    "Custom CRMs, dashboards, booking systems & client portals for Sacramento businesses. Starts at $1,997. Built for how you actually work.",
  alternates: { canonical: "https://www.bambergdigital.com/custom-tools" },
  openGraph: {
    title: "Custom Business Tools Sacramento | Bamberg Digital",
    description:
      "Custom CRMs, dashboards, booking systems & client portals for Sacramento businesses. Starts at $1,997. Built for how you actually work.",
    url: "https://www.bambergdigital.com/custom-tools",
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
    title: "Custom Business Tools Sacramento | Bamberg Digital",
    description:
      "Custom CRMs, dashboards, booking systems & client portals for Sacramento businesses. Starts at $1,997. Built for how you actually work.",
  },
};

const examples = [
  {
    name: "Custom CRM",
    desc: "Track leads, clients, and follow-ups exactly the way your sales process works — not the way Salesforce wants it to.",
  },
  {
    name: "Appointment Booking System",
    desc: "Online scheduling tied directly to your calendar, your staff, and your service types. No third-party booking fees.",
  },
  {
    name: "Inventory Tracker",
    desc: "Know exactly what you have, what's moving, and what to reorder — built around your specific SKUs and suppliers.",
  },
  {
    name: "Client Portal",
    desc: "Give clients a branded login to view proposals, invoices, project status, and files. No more chasing email threads.",
  },
  {
    name: "Reporting Dashboard",
    desc: "Pull data from your existing tools into one view. Sales, ops, marketing — the numbers you actually need, live.",
  },
];

const pricing = [
  {
    name: "Basic Tool",
    price: "$1,997",
    period: "one-time",
    desc: "A focused single-function tool: one workflow, one problem solved. Delivered in 3–4 weeks.",
    features: [
      "Single-function scope",
      "Admin dashboard",
      "Data export (CSV/PDF)",
      "Mobile-responsive UI",
      "30-day support",
      "Full source code handover",
    ],
    highlight: false,
  },
  {
    name: "Business System",
    price: "$3,997",
    period: "one-time",
    desc: "Multi-feature internal tool with integrations, user roles, and reporting. Most popular.",
    features: [
      "Multi-feature scope",
      "User roles & permissions",
      "Third-party integrations",
      "Reporting & analytics",
      "60-day support",
      "Full source code handover",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Build",
    price: "Custom",
    period: "quote",
    desc: "Complex systems with multiple modules, API connections, and ongoing maintenance. Let's scope it together.",
    features: [
      "Unlimited modules",
      "API & webhook integrations",
      "Custom authentication",
      "Dedicated QA testing",
      "SLA-backed support",
      "Maintenance retainer available",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Why not just use off-the-shelf software?",
    a: "Off-the-shelf software is built for the average business. If you're spending hours working around its limitations — exporting to spreadsheets, managing workarounds, paying for features you don't use — a custom tool pays for itself fast.",
  },
  {
    q: "Who owns the code?",
    a: "You do. 100%. We hand over the full source code on delivery. No licensing fees, no dependency on us to keep it running.",
  },
  {
    q: "How long does a build take?",
    a: "Basic tools typically take 3–4 weeks. Business system builds run 5–8 weeks. Complex enterprise builds are scoped individually.",
  },
  {
    q: "Can you integrate with my existing software?",
    a: "Yes. We connect to QuickBooks, Shopify, HubSpot, Google Workspace, Zapier, Stripe, and most platforms with a public API.",
  },
  {
    q: "What if we need changes after launch?",
    a: "The support window covers bug fixes and minor adjustments. For larger feature additions, we quote them as a separate project at a discounted rate for existing clients.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Business Software Development",
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
    "Custom internal tools for Sacramento businesses — CRMs, dashboards, booking systems, client portals, and reporting. Starts at $1,997.",
};

export default function CustomToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/custom-tools" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why not just use off-the-shelf software?", "acceptedAnswer": {"@type": "Answer", "text": "Off-the-shelf software is built for the average business. If you're spending hours working around its limitations \u2014 exporting to spreadsheets, managing workarounds, paying for features you don't use \u2014 a custom tool pays for itself fast."}}, {"@type": "Question", "name": "Who owns the code?", "acceptedAnswer": {"@type": "Answer", "text": "You do. 100%. We hand over the full source code on delivery. No licensing fees, no dependency on us to keep it running."}}, {"@type": "Question", "name": "How long does a build take?", "acceptedAnswer": {"@type": "Answer", "text": "Basic tools typically take 3\u20134 weeks. Business system builds run 5\u20138 weeks. Complex enterprise builds are scoped individually."}}, {"@type": "Question", "name": "Can you integrate with my existing software?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We connect to QuickBooks, Shopify, HubSpot, Google Workspace, Zapier, Stripe, and most platforms with a public API."}}, {"@type": "Question", "name": "What if we need changes after launch?", "acceptedAnswer": {"@type": "Answer", "text": "The support window covers bug fixes and minor adjustments. For larger feature additions, we quote them as a separate project at a discounted rate for existing clients."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Custom Business Tools · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Custom Business Tools — Built for How You Actually Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Not off-the-shelf software. Not a template. Built specifically for
            your business.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build custom internal tools: CRMs, dashboards, booking systems,
            inventory management, client portals. When generic software creates
            workarounds instead of solving problems, you need something built
            for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Tell us what you need
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

      {/* Examples */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              What we build
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every tool is scoped, designed, and built around your specific
              workflow — not adapted from a generic template.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
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
              Transparent project pricing
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Investment
            </h2>
            <p className="text-gray-600">
              Fixed-price projects. No hourly billing surprises.
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
              { href: "/ai-integration", label: "AI Integration" },
              { href: "/consulting", label: "AI Consulting" },
              { href: "/web-design", label: "Website Design" },
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
              Tell us what you need — we&apos;ll show you how we&apos;d build it
            </h2>
            <p className="text-gray-600 text-lg">
              Describe your workflow problem. We&apos;ll come back with a scope,
              timeline, and fixed price — no obligation.
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
            <ContactForm service="custom-tools" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
