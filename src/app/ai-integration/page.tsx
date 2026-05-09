import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Integration Sacramento | Bamberg Digital",
  description:
    "Practical AI integration for Sacramento businesses. Automated follow-ups, smart scheduling, chatbots & lead scoring. $497 consultation + implementation.",
  alternates: { canonical: "https://www.bambergdigital.com/ai-integration" },
  openGraph: {
    title: "AI Integration Sacramento | Bamberg Digital",
    description:
      "Practical AI integration for Sacramento businesses. Automated follow-ups, smart scheduling, chatbots & lead scoring. $497 consultation + implementation.",
    url: "https://www.bambergdigital.com/ai-integration",
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
    title: "AI Integration Sacramento | Bamberg Digital",
    description:
      "Practical AI integration for Sacramento businesses. Automated follow-ups, smart scheduling, chatbots & lead scoring. $497 consultation + implementation.",
  },
};

const examples = [
  {
    name: "AI Chatbot for Your Website",
    desc: "A trained chatbot that answers questions, qualifies leads, and books appointments — 24/7, without you involved.",
  },
  {
    name: "Automated Social Media",
    desc: "AI-generated captions, scheduling, and hashtag targeting. Post consistently without spending hours on content.",
  },
  {
    name: "Smart Lead Scoring",
    desc: "Automatically rank inbound leads by likelihood to convert. Your sales team works the hot leads first, every time.",
  },
  {
    name: "Email Automation",
    desc: "Follow-up sequences that adapt to what each prospect does — opens, clicks, replies — without manual intervention.",
  },
  {
    name: "Inventory Predictions",
    desc: "AI that reads your sales history and flags what to reorder before you run out. No more stockouts or overbuying.",
  },
];

const pricing = [
  {
    name: "AI Audit",
    price: "$497",
    period: "one-time",
    desc: "We map your current workflows and deliver a prioritized list of AI opportunities with ROI estimates.",
    features: [
      "Full workflow audit",
      "AI opportunity mapping",
      "ROI estimates per use case",
      "Tool recommendations",
      "Implementation roadmap",
    ],
    highlight: false,
  },
  {
    name: "Implementation",
    price: "$497",
    period: "+ build cost",
    desc: "Audit plus hands-on implementation of your top AI opportunity. Most projects completed in 2–3 weeks.",
    features: [
      "Everything in AI Audit",
      "Full AI implementation",
      "Integration with existing tools",
      "Team training session",
      "30-day support window",
      "Documentation included",
    ],
    highlight: true,
  },
  {
    name: "Ongoing Optimization",
    price: "$297",
    period: "/mo",
    desc: "Monthly tuning, performance reviews, and new AI additions as your business grows.",
    features: [
      "Monthly performance review",
      "Prompt and model tuning",
      "New automation additions",
      "Priority support",
      "Quarterly strategy call",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do I need to be technical to use AI tools?",
    a: "No. We handle all setup and configuration. We train your team on how to use what we build, and we write documentation so it's maintainable without us.",
  },
  {
    q: "Which AI tools do you use?",
    a: "OpenAI, Claude, and purpose-built models depending on the task. For workflows, we use n8n, Zapier, and Make. We choose based on what fits your stack and budget — not what's newest.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable time savings in week one. Lead scoring and email automation typically show ROI within 30 days.",
  },
  {
    q: "What if the AI makes mistakes?",
    a: "We build with human review steps where the stakes are high. AI handles volume and speed; your team handles judgment calls. We tune the system until error rates are within your tolerance.",
  },
  {
    q: "What cities do you serve?",
    a: "We're based in Sacramento, CA and serve clients in Elk Grove, Folsom, Roseville, Rancho Cordova, and nationwide remotely.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Integration and Automation",
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
    "Practical AI integration for Sacramento businesses. Automated follow-ups, smart scheduling, chatbots, lead scoring, and email automation.",
};

export default function AiIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/ai-integration" />

      {/* Hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need to be technical to use AI tools?", "acceptedAnswer": {"@type": "Answer", "text": "No. We handle all setup and configuration. We train your team on how to use what we build, and we write documentation so it's maintainable without us."}}, {"@type": "Question", "name": "Which AI tools do you use?", "acceptedAnswer": {"@type": "Answer", "text": "OpenAI, Claude, and purpose-built models depending on the task. For workflows, we use n8n, Zapier, and Make. We choose based on what fits your stack and budget \u2014 not what's newest."}}, {"@type": "Question", "name": "How fast will I see results?", "acceptedAnswer": {"@type": "Answer", "text": "Most clients see measurable time savings in week one. Lead scoring and email automation typically show ROI within 30 days."}}, {"@type": "Question", "name": "What if the AI makes mistakes?", "acceptedAnswer": {"@type": "Answer", "text": "We build with human review steps where the stakes are high. AI handles volume and speed; your team handles judgment calls. We tune the system until error rates are within your tolerance."}}, {"@type": "Question", "name": "What cities do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "We're based in Sacramento, CA and serve clients in Elk Grove, Folsom, Roseville, Rancho Cordova, and nationwide remotely."}}]}),
        }}
      />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            AI Integration · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            AI Integration — Make Your Business Smarter, Not Busier
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Your competitors are using AI. Are you?
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We integrate AI into existing business workflows: automated
            follow-ups, smart scheduling, content generation, data analysis,
            chatbots. No fluff, no hype — just practical AI that saves you time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Book a free AI audit
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
              What we automate
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We start with your biggest time drains and build AI solutions that
              plug directly into your existing workflow.
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
              Straightforward pricing
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Start with an audit
            </h2>
            <p className="text-gray-600">
              Know exactly what you&apos;re getting before you commit to
              implementation.
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
              { href: "/consulting", label: "AI Consulting" },
              { href: "/custom-tools", label: "Custom Business Tools" },
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
              Book a free AI audit
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;ll review your current workflows and show you exactly
              where AI can save you time — before you spend a dollar.
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
            <ContactForm service="ai-integration" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
