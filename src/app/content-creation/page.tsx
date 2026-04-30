import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Content Creation & Copywriting | Bamberg Digital",
  description:
    "Blog posts, website copy, email sequences, and social content for small businesses. Strategy from $297. Ongoing content from $397/mo.",
  alternates: { canonical: "https://www.bambergdigital.com/content-creation" },
  openGraph: {
    title: "Content Creation & Copywriting | Bamberg Digital",
    description:
      "Blog posts, website copy, email sequences, and social content for small businesses. Strategy from $297. Ongoing content from $397/mo.",
    url: "https://www.bambergdigital.com/content-creation",
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
  "SEO-optimized blog posts — written to rank and educate your audience",
  "Website copywriting — landing pages, service pages, and about sections that convert",
  "Email newsletter content — keep customers engaged and coming back",
  "Social media captions — platform-ready copy for every post",
  "Product and service descriptions — clear, compelling, and search-friendly",
  "Brand voice guidelines — consistent messaging across every channel",
];

const pricing = [
  {
    name: "Strategy Session",
    price: "$297",
    period: "one-time",
    desc: "A full content audit, 3-month calendar, and keyword targets — everything you need to execute yourself.",
    features: [
      "Content audit of existing assets",
      "3-month content calendar",
      "Keyword targets by page/post",
      "Competitor content analysis",
      "Brand voice recommendations",
    ],
    highlight: false,
  },
  {
    name: "Monthly Content",
    price: "$397",
    period: "/mo",
    desc: "Steady stream of SEO blog posts plus social captions to keep your pipeline moving.",
    features: [
      "4 SEO blog posts/month",
      "Social media captions",
      "2 revision rounds per piece",
      "Monthly editorial calendar",
      "Performance tracking",
    ],
    highlight: true,
  },
  {
    name: "Full Package",
    price: "$697",
    period: "/mo",
    desc: "Maximum content output — blogs, email, and social all handled for you.",
    features: [
      "8 SEO blog posts/month",
      "Monthly email newsletter",
      "Social media captions",
      "2 revision rounds per piece",
      "SEO optimization on all pieces",
      "Monthly content report",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do you write for my industry?",
    a: "Yes — we research your industry, competitors, and target customers before writing a single word. We've written for real estate, home services, medical practices, legal firms, restaurants, and e-commerce.",
  },
  {
    q: "Do I own the content?",
    a: "Yes, all content belongs to you. We hand over full rights when each piece is delivered.",
  },
  {
    q: "Can you match our existing brand voice?",
    a: "Yes — we study your existing content, website, and any style guide you have before writing. Most clients say our content sounds like they wrote it themselves.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds of revisions per piece are included at every tier. We rarely need more than one.",
  },
  {
    q: "Can I see samples?",
    a: "Yes — email hello@bambergdigital.com and we'll send samples from your industry.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Content Creation",
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
    "Blog posts, website copy, email sequences, and social content for small businesses.",
};

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav active="/content-creation" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Content Creation & Copywriting
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Content Creation That Attracts Customers and Ranks on Google
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We write blog posts, web copy, emails, and social content that
            actually move the needle — SEO-optimized, written in your voice, and
            built to convert. Sacramento businesses and clients nationwide trust
            us to fill their content calendars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Start with a strategy session
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
              What we create
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every piece is researched, SEO-optimized, and written to your
              brand voice — ready to publish.
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
              Content packages
            </h2>
            <p className="text-gray-600">
              Start with a one-time strategy session or go straight to ongoing
              content.
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
              Let's build your content engine
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your business and we'll show you what a 3-month
              content plan would look like.
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
            <ContactForm service="content-creation" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
