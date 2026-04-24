"use client";

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BD</span>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-gray-900">
              Bamberg <span className="text-blue-600">Digital</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/seo" className="text-sm font-medium text-blue-600">
              SEO Audits
            </a>
            <a
              href="/leads"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Lead Generation
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#audit-form"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              Get free audit
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <a
              href="/seo"
              className="block text-sm font-medium text-blue-600 px-2 py-1"
            >
              SEO Audits
            </a>
            <a
              href="/leads"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1"
            >
              Lead Generation
            </a>
            <a
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1"
            >
              About
            </a>
            <a
              href="#audit-form"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-blue-700"
            >
              Get free audit
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

const included = [
  "Full technical SEO scan — broken links, missing tags, slow pages",
  "Competitor keyword gap analysis (top 3 rivals)",
  "Google Business Profile audit",
  "Local citation consistency check",
  "Mobile usability assessment",
  "Priority fix list ranked by revenue impact",
];

const pricing = [
  {
    name: "Free Audit",
    price: "$0",
    period: "",
    desc: "A real look at your biggest SEO issues. No strings attached.",
    features: [
      "Technical scan of up to 50 pages",
      "Top 5 critical issues identified",
      "Competitor snapshot",
      "Delivered within 48 hours",
    ],
    cta: "Get my free audit",
    href: "#audit-form",
    highlight: false,
  },
  {
    name: "Comprehensive Report",
    price: "$49",
    period: "one-time",
    desc: "Everything in the free audit, plus a full 20-page deep dive.",
    features: [
      "Full site crawl (unlimited pages)",
      "All technical issues documented",
      "Keyword opportunity matrix",
      "Competitor backlink analysis",
      "90-day action plan",
      "30-min strategy call included",
    ],
    cta: "Get the full report",
    href: "#audit-form",
    highlight: true,
  },
  {
    name: "Ongoing Optimization",
    price: "$299",
    period: "/mo",
    desc: "We handle SEO every month so you can focus on running your business.",
    features: [
      "Monthly audit + fixes implemented",
      "Content recommendations",
      "Google Business Profile management",
      "Monthly performance report",
      "Priority email support",
      "Cancel anytime",
    ],
    cta: "Start optimization",
    href: "#audit-form",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long until I see results?",
    a: "Most clients see measurable ranking improvements within 60–90 days. Fixes to critical technical issues (broken links, missing titles, slow pages) often show results faster.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your website URL and email. We handle all the scanning and analysis. If you want the full report, we'll ask a few questions about your target customers.",
  },
  {
    q: "Do you do the fixes or just tell me what to fix?",
    a: "The free audit and $49 report give you the roadmap. Our $299/mo plan includes implementation — we make the changes directly or work with your developer.",
  },
  {
    q: "My site is on Wix / Squarespace / WordPress — does that matter?",
    a: "No. We audit and optimize websites on any platform. The issues and opportunities are the same regardless of where your site is hosted.",
  },
];

function AuditForm() {
  const [form, setForm] = useState({
    business: "",
    url: "",
    email: "",
    phone: "",
    tier: "free",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Audit request received!
        </h3>
        <p className="text-gray-600">
          We'll have your report ready within 48 hours. Check{" "}
          <strong>{form.email}</strong> for updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business name
          </label>
          <input
            type="text"
            required
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Acme Plumbing Co."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website URL
          </label>
          <input
            type="url"
            required
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="you@business.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(916) 555-0100"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Which audit do you want?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "free", label: "Free Audit" },
            { val: "full", label: "$49 Full Report" },
            { val: "ongoing", label: "$299/mo Plan" },
          ].map((opt) => (
            <button
              type="button"
              key={opt.val}
              onClick={() => setForm({ ...form, tier: opt.val })}
              className={`py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${form.tier === opt.val ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-blue-600/25"
      >
        {form.tier === "free"
          ? "Get my free audit →"
          : form.tier === "full"
            ? "Order full report →"
            : "Start monthly plan →"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Your audit is delivered by email within 48 hours. No credit card
        required for the free audit.
      </p>
    </form>
  );
}

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            AI-Powered SEO Audits
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We'll show you exactly
            <br />
            <span className="text-gradient-blue">
              where you're losing customers.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our AI scans your website, benchmarks it against your top
            competitors, and delivers a plain-English report with a prioritized
            fix list — ranked by revenue impact.
          </p>
          <a
            href="#audit-form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
          >
            Get your free audit →
          </a>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              What every audit includes
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Most SEO tools give you a score and leave you guessing. We give
              you a specific list of problems — in order of impact — so you know
              exactly what to do next.
            </p>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-emerald-600"
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
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-4 font-semibold">
                Sample audit finding
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Missing H1 tags",
                    count: "12 pages",
                    color: "text-red-400",
                  },
                  {
                    label: "Page speed score",
                    count: "41/100",
                    color: "text-red-400",
                  },
                  {
                    label: "Broken internal links",
                    count: "8 found",
                    color: "text-yellow-400",
                  },
                  {
                    label: "Missing meta descriptions",
                    count: "23 pages",
                    color: "text-yellow-400",
                  },
                  {
                    label: "Google Business verified",
                    count: "✓ Good",
                    color: "text-emerald-400",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-slate-800 pb-2"
                  >
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">
                Real output format from a recent audit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-gray-600">
              Start free. Go deeper when you're ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${p.highlight ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105" : "bg-white border-gray-100"}`}
              >
                <h3
                  className={`font-[family-name:var(--font-montserrat)] font-bold text-lg mb-1 ${p.highlight ? "text-white" : "text-gray-900"}`}
                >
                  {p.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`font-[family-name:var(--font-montserrat)] text-4xl font-extrabold ${p.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {p.price}
                  </span>
                  {p.period && (
                    <span
                      className={`text-sm mb-1 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}
                    >
                      {p.period}
                    </span>
                  )}
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
                  href={p.href}
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors ${p.highlight ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit form */}
      <section id="audit-form" className="py-20 px-4 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-3">
              Get your free SEO audit
            </h2>
            <p className="text-gray-600">
              Enter your website URL. We'll do the rest.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <AuditForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">BD</span>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-white">
              Bamberg Digital
            </span>
          </a>
          <p className="text-xs">
            © {new Date().getFullYear()} Bamberg Digital ·{" "}
            <a
              href="mailto:hello@bambergdigital.com"
              className="hover:text-white"
            >
              hello@bambergdigital.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
