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
            <a
              href="/seo"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              SEO Audits
            </a>
            <a href="/leads" className="text-sm font-medium text-blue-600">
              Lead Generation
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#trial-form"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              Get 10 free leads
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
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1"
            >
              SEO Audits
            </a>
            <a
              href="/leads"
              className="block text-sm font-medium text-blue-600 px-2 py-1"
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
              href="#trial-form"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-blue-700"
            >
              Get 10 free leads
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    leads: "50 leads/month",
    desc: "Perfect for solopreneurs and single-person sales teams.",
    features: [
      "50 verified leads per month",
      "1 target industry",
      "1 geographic area",
      "Email + phone verified",
      "CSV delivery every Monday",
      "Cancel anytime",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$249",
    period: "/mo",
    leads: "200 leads/month",
    desc: "For small teams ready to scale their outreach.",
    features: [
      "200 verified leads per month",
      "Up to 3 target industries",
      "Nationwide or regional targeting",
      "Email + phone + LinkedIn verified",
      "CSV + CRM-ready format",
      "Priority delivery (Friday refresh)",
      "Dedicated account manager",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$499",
    period: "/mo",
    leads: "500 leads/month",
    desc: "High-volume pipelines for established sales teams.",
    features: [
      "500 verified leads per month",
      "Unlimited industries",
      "Custom ICP targeting",
      "Full contact enrichment",
      "Suppression list management",
      "Slack delivery + CRM integration",
      "Weekly strategy call",
    ],
    cta: "Start free trial",
    highlight: false,
  },
];

const industries = [
  {
    name: "Real Estate",
    icon: "🏠",
    example: "Agents, brokers, mortgage lenders",
  },
  {
    name: "Home Services",
    icon: "🔧",
    example: "HVAC, plumbing, roofing, landscaping",
  },
  {
    name: "Restaurants",
    icon: "🍽️",
    example: "Food service, catering, hospitality",
  },
  {
    name: "Medical Practices",
    icon: "🏥",
    example: "Dentists, chiropractors, specialists",
  },
  {
    name: "Legal Firms",
    icon: "⚖️",
    example: "Personal injury, family law, estate planning",
  },
  { name: "Insurance", icon: "🛡️", example: "Life, health, commercial, auto" },
];

const howItWorks = [
  {
    step: "01",
    title: "Tell us your ICP",
    desc: "Share your ideal customer profile — industry, geography, company size, or any other filter. The more specific, the better.",
  },
  {
    step: "02",
    title: "We build your list",
    desc: "Our AI scrapes, verifies, and enriches contact data from dozens of sources. Every phone number and email is live-checked before delivery.",
  },
  {
    step: "03",
    title: "Leads arrive weekly",
    desc: "Fresh contacts delivered to your inbox every Monday (or Friday on Growth+ plans). Ready to drop into your CRM or cold email tool.",
  },
];

function TrialForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "",
    territory: "",
    plan: "starter",
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
          You're in — 10 leads on us.
        </h3>
        <p className="text-gray-600">
          We'll send your trial leads to <strong>{form.email}</strong> within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>
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
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target industry
          </label>
          <select
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">Select industry</option>
            <option>Real Estate</option>
            <option>Home Services</option>
            <option>Restaurants</option>
            <option>Medical Practices</option>
            <option>Legal Firms</option>
            <option>Insurance</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target territory
          </label>
          <input
            type="text"
            value={form.territory}
            onChange={(e) => setForm({ ...form, territory: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Sacramento, CA or Nationwide"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interested plan (after trial)
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "starter", label: "Starter $99" },
            { val: "growth", label: "Growth $249" },
            { val: "scale", label: "Scale $499" },
          ].map((opt) => (
            <button
              type="button"
              key={opt.val}
              onClick={() => setForm({ ...form, plan: opt.val })}
              className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${form.plan === opt.val ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"}`}
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
        Send me 10 free leads →
      </button>
      <p className="text-xs text-gray-400 text-center">
        No credit card. No commitment. Just 10 real, verified leads for your
        business.
      </p>
    </form>
  );
}

export default function LeadsPage() {
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Verified Lead Generation
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Verified leads delivered
            <br />
            <span className="text-gradient-blue">
              to your inbox every week.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            No scraping, no guessing, no dead contacts. Every lead is checked
            and confirmed before it reaches you — phone numbers that ring,
            emails that don't bounce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trial-form"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Get 10 free leads →
            </a>
            <a
              href="#pricing"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-gray-600">
              Three steps from signup to a full pipeline.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-[family-name:var(--font-montserrat)] font-extrabold text-blue-600 text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              Industries we specialize in
            </h2>
            <p className="text-gray-600">
              Deep data in the industries where referrals alone aren't enough.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4"
              >
                <span className="text-2xl">{ind.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">
                    {ind.name}
                  </div>
                  <div className="text-gray-500 text-xs">{ind.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              Choose your plan
            </h2>
            <p className="text-gray-600">
              All plans include a free 10-lead trial. No credit card required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${p.highlight ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105" : "bg-white border-gray-100"}`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-2 ${p.highlight ? "text-blue-200" : "text-blue-600"}`}
                >
                  {p.leads}
                </div>
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
                  href="#trial-form"
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors ${p.highlight ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial form */}
      <section id="trial-form" className="py-20 px-4 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-3">
              Start your free trial
            </h2>
            <p className="text-gray-600">
              10 verified leads in your inbox within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <TrialForm />
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
