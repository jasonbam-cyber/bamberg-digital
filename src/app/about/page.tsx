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
            <a href="/about" className="text-sm font-medium text-blue-600">
              About
            </a>
            <a
              href="/#contact"
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
              className="block text-sm font-medium text-blue-600 px-2 py-1"
            >
              About
            </a>
            <a
              href="/#contact"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-blue-700"
            >
              Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function JasonPhoto() {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
        <span className="font-[family-name:var(--font-montserrat)] font-extrabold text-white text-6xl">
          JB
        </span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/jason-bamberg.jpeg"
      alt="Jason Bamberg, Founder of Bamberg Digital"
      className="w-full h-80 lg:h-96 object-cover object-top rounded-2xl shadow-xl"
      onError={() => setErrored(true)}
    />
  );
}

const values = [
  {
    title: "Results, not reports",
    desc: "We measure our success by whether your phone rings more. Not by how many slides we can put in a deck.",
  },
  {
    title: "Transparent by default",
    desc: "You'll always know what we're doing, why we're doing it, and what to expect. No black boxes.",
  },
  {
    title: "AI that works for you",
    desc: "We build systems that run 24/7 without adding to your payroll. Technology should create leverage, not complexity.",
  },
  {
    title: "Small business first",
    desc: "We built this for the owner who can't afford a $5K/mo agency retainer but can't afford to lose to competitors who figured out digital either.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Founded 2023 · Sacramento, CA
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Enterprise AI tools,
            <br />
            <span className="text-gradient-blue">
              built for small business.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bamberg Digital exists because small businesses deserve the same
            AI-powered marketing advantages that big companies pay consultants
            $500/hour to get.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-6">
              The story behind Bamberg Digital
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                After spending years building AI automation systems that helped
                businesses find and close more customers, Jason kept running
                into the same problem: the companies that needed these tools
                most — local service businesses, small law firms, independent
                medical practices — couldn't access them. The tools were too
                expensive. The consultants charged too much. The setup was too
                complex.
              </p>
              <p>
                Bamberg Digital was built to close that gap. We took the same AI
                infrastructure used by enterprise marketing teams and rebuilt it
                for businesses with real budgets and real time constraints.
              </p>
              <p>
                Today, our systems run around the clock — scanning websites,
                verifying leads, building contact lists, and sending follow-up
                sequences — while our clients focus on what they actually do.
                We're not a typical agency. We're a lean, AI-first operation
                that treats every client like a partner.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-72">
            <JasonPhoto />
            <p className="text-center text-gray-400 text-xs mt-3">
              Jason Bamberg · Founder &amp; CEO
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              How we operate
            </h2>
            <p className="text-gray-600">
              Four principles that shape every client relationship.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mb-4">
              The team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A lean, intentionally small operation. Human expertise plus AI
              horsepower — no bloated agency overhead passed on to you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Jason */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="mb-5">
                <JasonPhoto />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 text-lg">
                Jason Bamberg
              </h3>
              <p className="text-blue-600 text-sm font-medium mb-3">
                Founder &amp; CEO
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Serial entrepreneur and AI automation architect. Jason spent
                years building AI-powered systems for companies across multiple
                industries before founding Bamberg Digital to bring those same
                tools to small businesses. He&apos;s a hands-on operator — when
                he&apos;s not building systems, he&apos;s usually on a boat.
              </p>
            </div>

            {/* Winston / AI COO */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="mb-5">
                <div className="w-full h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-md">
                  <svg
                    className="w-14 h-14 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-gray-900 text-lg">
                  Winston Leo
                </h3>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Active 24/7
                </span>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-3">
                AI Operations
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Winston is our AI operations system — the engine that keeps
                client research, lead verification, SEO scanning, and follow-up
                automation running around the clock. We&apos;re transparent
                about how we work: AI handles the repetitive, Jason handles the
                strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white mb-4">
            Ready to see what we&apos;d do for your business?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Book a free 15-minute call. We&apos;ll look at your specific
            situation and give you a straight answer about what&apos;s holding
            back your growth — no pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Book a free consultation
            </a>
            <a
              href="mailto:hello@bambergdigital.com"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              hello@bambergdigital.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 px-4">
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
