import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI & Automation Consulting | Bamberg Digital",
  description:
    "AI and automation consulting for small businesses. Cut manual work, automate follow-up, and scale without hiring. From $197/hr or $1,997 project.",
  alternates: { canonical: "https://www.bambergdigital.com/consulting" },
  openGraph: {
    title: "AI & Automation Consulting | Bamberg Digital",
    description:
      "AI and automation consulting for small businesses. Cut manual work, automate follow-up, and scale without hiring. From $197/hr or $1,997 project.",
    url: "https://www.bambergdigital.com/consulting",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const included = [
  "Business process audit — we map every repetitive task and find what to automate first",
  "AI tool selection and setup — the right tools for your workflow, not the most expensive ones",
  "Custom automation workflows — built in n8n, Zapier, or Make depending on your stack",
  "CRM integration — connect your contact database to your automations",
  "Email sequence automation — follow-ups that run 24/7 without you touching them",
  "Team training session — your staff learns to use the system confidently",
];

const pricing = [
  {
    name: "Hourly Consulting",
    price: "$197",
    period: "/hr",
    desc: "Strategy sessions, tech stack review, and automation scoping — pay only for what you need.",
    features: [
      "Strategy and planning sessions",
      "Tech stack review",
      "Automation scoping",
      "Tool recommendations",
      "Minimum 2-hour block",
    ],
    highlight: false,
  },
  {
    name: "Project Package",
    price: "$1,997",
    period: "one-time",
    desc: "Full audit, custom automation build, and 30 days of support — hands-off for you from day one.",
    features: [
      "Business process audit",
      "Custom automation build",
      "CRM integration",
      "Team training session",
      "30-day support window",
      "Documentation included",
    ],
    highlight: true,
  },
  {
    name: "Ongoing Advisory",
    price: "$997",
    period: "/mo",
    desc: "Monthly strategy calls, implementation support, and priority access — your AI partner on retainer.",
    features: [
      "Monthly strategy calls",
      "Implementation support",
      "Priority response",
      "New automation builds",
      "Performance reviews",
      "Permanent support coverage",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What kinds of businesses benefit most?",
    a: "Any business spending more than 5 hours per week on repetitive tasks — scheduling, follow-up, data entry, reporting, quoting, or invoicing. We work with Sacramento businesses and clients across Folsom, Roseville, Rancho Cordova, and nationwide.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. We handle all the technical setup. You review, approve, and then just use the finished system. We write the documentation so your team can maintain it.",
  },
  {
    q: "What tools do you use?",
    a: "n8n, Zapier, Make, OpenAI, Claude, HubSpot, and custom-built solutions depending on your existing tech stack. We work with what you have, not what we prefer.",
  },
  {
    q: "How long does a project take?",
    a: "Most automation projects are complete in 2–4 weeks. More complex builds with multiple integrations can run 5–6 weeks.",
  },
  {
    q: "What if it breaks after you're done?",
    a: "The 30-day support window covers any issues after delivery at no extra cost. Ongoing Advisory clients have permanent support coverage.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation Consulting",
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
    "AI and automation consulting for small businesses. Cut manual work, automate follow-up, and scale without hiring.",
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/consulting" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            AI & Automation Consulting
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            AI Consulting That Automates the Work Slowing Your Business Down
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We identify the manual tasks eating your team's time — follow-up,
            scheduling, reporting, data entry — and automate them. Sacramento
            small businesses use our systems to scale without hiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Book a free discovery call
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
              What every project includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We build the system, train your team, and hand you the keys. No
              ongoing dependency on us — unless you want it.
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
              Flexible engagement options
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Choose your engagement
            </h2>
            <p className="text-gray-600">
              Hour by hour, one project, or ongoing — whichever fits your needs.
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
              { href: "/digital-marketing", label: "Digital Marketing" },
              { href: "/seo", label: "SEO Services" },
              { href: "/leads", label: "Lead Generation" },
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
              Stop doing manually what a system can do for you
            </h2>
            <p className="text-gray-600 text-lg">
              Book a free 30-minute discovery call. We'll identify your top 3
              automation opportunities before we hang up.
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
            <ContactForm service="ai-consulting" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
