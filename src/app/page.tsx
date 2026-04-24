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
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              Free Consultation
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
              href="#contact"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-blue-700 transition-colors"
            >
              Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

const testimonials = [
  {
    quote:
      "Bamberg Digital ran an SEO audit on our plumbing business and found issues we had no idea existed. Within 60 days we went from page 4 to page 1 for our top keywords.",
    name: "Marcus T.",
    title: "Owner, ProFlow Plumbing",
    initials: "MT",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "The lead lists they deliver are actually verified. No bounced emails, no disconnected numbers. We closed 4 new clients from the first batch of 50 leads.",
    name: "Sandra R.",
    title: "Broker, Realty One Group",
    initials: "SR",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "Their AI automation set up a follow-up sequence that runs without me touching it. I got 3 consultation requests last week while I was on vacation.",
    name: "David K.",
    title: "Founder, Summit Legal Group",
    initials: "DK",
    color: "bg-purple-100 text-purple-700",
  },
];

const services = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "AI-Powered SEO Audits",
    desc: "We scan your entire website and compare it against top-ranking competitors. You get a plain-English report showing exactly where you're losing traffic and what to fix first.",
    cta: "Get your free audit →",
    href: "/seo",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Verified Lead Generation",
    desc: "Targeted, pre-verified leads delivered weekly to your inbox. Every contact is confirmed active — phone, email, and business details checked before you receive them.",
    cta: "See pricing →",
    href: "/leads",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Marketing Automation",
    desc: "We build email sequences, follow-up systems, and AI-driven workflows that nurture prospects automatically — so you close more deals without adding headcount.",
    cta: "Learn more →",
    href: "/about",
  },
];

const stats = [
  { value: "2+ years", label: "In business" },
  { value: "200+", label: "Businesses served" },
  { value: "4.9★", label: "Client satisfaction" },
  { value: "$0", label: "Setup fees" },
];

const industries = [
  "Real Estate",
  "Home Services",
  "Medical Practices",
  "Legal Firms",
  "Restaurants",
  "E-Commerce",
  "Insurance",
  "Financial Services",
];

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-emerald-600"
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
          We'll be in touch within 24 hours
        </h3>
        <p className="text-gray-600">
          Check your inbox — we may have already sent you a quick note.
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
            placeholder="jane@company.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business name
        </label>
        <input
          type="text"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Acme Plumbing Co."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What's your biggest challenge right now?
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Not enough leads, low website traffic, slow follow-up..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-blue-600/25"
      >
        Book my free consultation →
      </button>
      <p className="text-xs text-gray-400 text-center">
        No sales pitch. No contract. We'll tell you exactly what we'd do for
        your business.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            AI-powered growth for small businesses
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            We find the customers
            <br />
            <span className="text-gradient-blue">your competitors miss.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bamberg Digital uses AI to surface SEO gaps, deliver verified leads,
            and automate your follow-up — so your pipeline fills itself while
            you run your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30 pulse-cta"
            >
              Book a free consultation
            </a>
            <a
              href="/seo"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              Get a free SEO audit →
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-blue-600">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three services. One goal: more customers finding you, not your
              competitors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <a
                  href={s.href}
                  className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Industries we serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              What our clients say
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from real business owners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="font-[family-name:var(--font-montserrat)] font-extrabold text-white text-4xl">
                JB
              </span>
            </div>
          </div>
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Founded by Jason Bamberg
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white mb-4">
              Enterprise AI tools, built for small business budgets.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              After spending years building AI automation systems used by
              hundreds of companies, Jason founded Bamberg Digital to bring
              those same tools to the small businesses that need them most —
              without the enterprise price tag. Today, our AI-powered systems
              run 24/7 so our clients don't have to.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
            >
              Meet the team →
            </a>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gray-900 mb-4">
              Book your free consultation
            </h2>
            <p className="text-gray-600 text-lg">
              15 minutes. No pitch deck. We'll look at your specific situation
              and tell you exactly what we'd do — whether you hire us or not.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm />
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@bambergdigital.com"
              className="text-blue-600 hover:underline"
            >
              hello@bambergdigital.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BD</span>
                </div>
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base">
                  Bamberg Digital
                </span>
              </div>
              <p className="text-sm max-w-xs leading-relaxed">
                AI-powered marketing for small businesses. SEO audits, verified
                leads, and automation that works while you sleep.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm">
              <div>
                <p className="text-white font-semibold mb-3">Services</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/seo"
                      className="hover:text-white transition-colors"
                    >
                      SEO Audits
                    </a>
                  </li>
                  <li>
                    <a
                      href="/leads"
                      className="hover:text-white transition-colors"
                    >
                      Lead Generation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-white transition-colors"
                    >
                      Marketing Automation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-3">Company</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@bambergdigital.com"
                      className="hover:text-white transition-colors"
                    >
                      hello@bambergdigital.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>
              © {new Date().getFullYear()} Bamberg Digital. All rights reserved.
            </p>
            <p>Sacramento, CA · Serving businesses nationwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
