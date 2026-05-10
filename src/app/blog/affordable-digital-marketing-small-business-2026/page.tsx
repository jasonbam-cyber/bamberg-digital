import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Affordable Digital Marketing for Small Business in 2026 | Bamberg Digital",
  description:
    "What does affordable digital marketing actually cost for small businesses in 2026? Breakdown of real pricing, what to expect, and how to get ROI from a $500–$1,500/mo budget.",
  alternates: {
    canonical:
      "https://www.bambergdigital.com/blog/affordable-digital-marketing-small-business-2026",
  },
  openGraph: {
    title:
      "Affordable Digital Marketing for Small Business in 2026 | Bamberg Digital",
    description:
      "Real pricing breakdown for small business digital marketing in 2026 — what $500, $1,000, and $2,500/mo actually gets you, and where to start.",
    url: "https://www.bambergdigital.com/blog/affordable-digital-marketing-small-business-2026",
    type: "article",
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
    title: "Affordable Digital Marketing for Small Business in 2026",
    description:
      "Real pricing, real ROI. What small businesses should spend on digital marketing in 2026 — and what they should demand in return.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Affordable Digital Marketing for Small Business in 2026",
  description:
    "Real pricing breakdown for small business digital marketing in 2026 — what $500, $1,000, and $2,500/mo actually gets you.",
  url: "https://www.bambergdigital.com/blog/affordable-digital-marketing-small-business-2026",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  author: {
    "@type": "Person",
    name: "Jason Bamberg",
    url: "https://www.bambergdigital.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Bamberg Digital",
    url: "https://www.bambergdigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bambergdigital.com/og-image.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.bambergdigital.com/blog/affordable-digital-marketing-small-business-2026",
  },
};

const tiers = [
  {
    budget: "$300–$600/mo",
    label: "Entry",
    what: "Google Business Profile optimization, basic on-page SEO, 2 social posts/week",
    expect:
      "Local visibility improvement, modest ranking movement in 60–90 days",
    notIncluded: "Paid ads, content strategy, technical SEO, CRM integration",
  },
  {
    budget: "$750–$1,500/mo",
    label: "Growth",
    what: "Local SEO + content (2 posts/mo) + Google Business management + monthly reporting",
    expect:
      "Consistent ranking movement, organic lead growth, measurable call/form volume increase",
    notIncluded:
      "Paid ad management, custom automation, advanced link building",
    highlight: true,
  },
  {
    budget: "$1,500–$3,000/mo",
    label: "Full Service",
    what: "Full SEO + content strategy + paid ads management + AI lead automation + CRM wiring",
    expect:
      "Strong lead volume, revenue-attributable results, compounding content equity",
    notIncluded: "Nothing material — this is a complete growth stack",
  },
];

export default function AffordableDigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Blog · Pricing Guide
            </span>
            <span className="text-gray-400 text-xs">May 9, 2026</span>
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Affordable Digital Marketing for Small Business in 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            &ldquo;Affordable&rdquo; means different things at different revenue
            levels. This is a practical breakdown of what digital marketing
            actually costs, what you get at each tier, and how to make sure
            you&apos;re spending money that moves the needle — not the needle on
            someone else&apos;s agency dashboard.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mt-2 mb-4">
            The honest answer: it depends on your goal
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A dentist trying to rank for &ldquo;emergency dentist
            Sacramento&rdquo; has a different need than a national e-commerce
            brand expanding into a new market. &ldquo;Affordable digital
            marketing&rdquo; doesn&apos;t mean cheap — it means getting
            meaningful ROI relative to what you&apos;re spending. A $500/mo SEO
            engagement that generates 3 new clients/month worth $1,500 each is
            extremely affordable. A $3,000/mo agency retainer that generates
            zero attributable leads is expensive at any price.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before comparing agency prices, get clear on one number: what is one
            new customer worth to your business over 12 months? With that number
            in hand, budget conversations become straightforward math.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mt-10 mb-6">
            What you get at each budget tier in 2026
          </h2>

          <div className="space-y-4 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.budget}
                className={`rounded-2xl p-8 border ${
                  tier.highlight
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`font-[family-name:var(--font-montserrat)] text-2xl font-extrabold ${tier.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {tier.budget}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.highlight ? "bg-blue-500 text-white" : "bg-white text-gray-600 border border-gray-200"}`}
                  >
                    {tier.label}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span
                      className={`font-semibold ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}
                    >
                      What&apos;s included:
                    </span>
                    <p
                      className={
                        tier.highlight
                          ? "text-white mt-1"
                          : "text-gray-700 mt-1"
                      }
                    >
                      {tier.what}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}
                    >
                      Realistic outcome in 90 days:
                    </span>
                    <p
                      className={
                        tier.highlight
                          ? "text-white mt-1"
                          : "text-gray-700 mt-1"
                      }
                    >
                      {tier.expect}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}
                    >
                      Not included:
                    </span>
                    <p
                      className={
                        tier.highlight
                          ? "text-blue-100 mt-1"
                          : "text-gray-500 mt-1"
                      }
                    >
                      {tier.notIncluded}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mt-10 mb-4">
            5 things every small business should demand from their agency in
            2026
          </h2>

          <div className="space-y-6 mb-10">
            {[
              {
                title: "Data ownership",
                body: "You own your Google Analytics, your ad accounts, your CRM data, and your website. If the agency goes away, your data stays with you. Any agency that won't agree to this upfront is building a retention strategy around your dependency — not your results.",
              },
              {
                title: "Attribution clarity",
                body: "Your reports should connect specific marketing activities to specific leads and revenue — not just impressions and clicks. Ask: 'Of the leads we got last month, which ones came from SEO, which from ads, which from social?' If your agency can't answer that, they're not measuring correctly.",
              },
              {
                title: "AI integration at no extra charge",
                body: "In 2026, AI-assisted keyword research, content ideation, and lead automation are table stakes — not premium add-ons. If your agency is charging extra for 'AI services' that amount to running your brief through ChatGPT, that's a red flag.",
              },
              {
                title: "Month-to-month after onboarding",
                body: "Reputable agencies offer 3-month onboarding commitments (reasonable, since SEO takes time) with month-to-month after that. Annual contracts with no performance clauses protect the agency, not your business.",
              },
              {
                title: "A real content strategy",
                body: "Content without strategy is noise. Your agency should know which keywords you're targeting, why, what search intent they serve, and how each piece fits a funnel from awareness to conversion. If they're just 'posting regularly,' that's social media management — not marketing.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <div className="font-[family-name:var(--font-montserrat)] text-2xl font-extrabold text-blue-100 flex-shrink-0 w-10 leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mt-10 mb-4">
            Where most small businesses waste their marketing budget
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most common waste patterns we see when auditing new clients:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Paying for social media management that's disconnected from SEO or lead gen — lots of posts, zero business impact",
              "Running Google Ads without conversion tracking — spending money with no ability to calculate cost-per-lead",
              "Maintaining a website that loads in 5+ seconds — killing organic rankings and paid ad quality scores simultaneously",
              "Paying for 'SEO' that's just monthly citation submissions and zero on-page work",
              "Using a lead form that goes to an unmonitored email inbox — losing leads that the marketing already paid to generate",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-700 text-sm"
              >
                <svg
                  className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 my-10">
            <p className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 text-lg mb-2">
              Bamberg Digital starts at $997/mo — no hidden fees
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We&apos;re a Sacramento-based boutique agency. Our Starter plan
              includes local SEO, Google Business management, monthly content,
              and a lead tracking dashboard. Month-to-month after a 90-day
              onboarding. You own everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm text-center"
              >
                Get a free audit →
              </a>
              <a
                href="/pricing"
                className="inline-block border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm text-center"
              >
                See full pricing
              </a>
            </div>
          </div>

          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gray-900 mt-10 mb-4">
            The bottom line on affordable digital marketing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most affordable marketing is marketing that converts. A $997/mo
            SEO engagement that generates $8,000 in new revenue is more
            affordable than a $500/mo package that generates nothing. Focus on
            attribution, ownership, and compounding channels — SEO, content, and
            email — over short-term paid ads that stop the moment you stop
            spending.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For most small businesses in 2026, the best starting point is a
            one-time audit to identify the highest-leverage opportunities,
            followed by a focused 90-day sprint on the top 2–3 priorities.
            That&apos;s how you build a marketing foundation that pays dividends
            for years — not just the month you&apos;re running ads.
          </p>
        </div>
      </article>

      {/* Related */}
      <section className="py-12 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Related reading
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/pricing", label: "Bamberg Digital Pricing" },
              { href: "/seo", label: "SEO Services" },
              {
                href: "/blog/ai-marketing-agency-sacramento",
                label: "AI Marketing Agency Sacramento",
              },
              { href: "/bundles", label: "Service Bundles" },
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

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Get a free marketing audit
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;ll review your current digital marketing setup and tell
              you exactly where your budget is going — and where it should be
              going instead.
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
            <ContactForm service="blog-affordable-marketing" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
