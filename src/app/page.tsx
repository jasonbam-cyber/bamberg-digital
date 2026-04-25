import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Bamberg Digital | Sacramento's AI-Powered Digital Agency",
  description:
    "Sacramento's AI-powered digital agency. Web design, SEO, social media & lead generation for small businesses. We find the customers your competitors miss.",
  alternates: { canonical: "https://bambergdigital.com" },
  openGraph: {
    title: "Bamberg Digital — Sacramento's AI-Powered Digital Agency",
    description:
      "Web design, SEO, social media, lead generation, branding, and AI automation for small businesses. Start with a free consultation.",
    url: "https://bambergdigital.com",
    images: [
      {
        url: "https://bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Website Design",
    desc: "Mobile-first, SEO-ready websites that load fast and convert visitors into customers. Starter sites from $497 — built and delivered in 2–3 weeks.",
    cta: "See our work →",
    href: "/web-design",
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
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    title: "Social Media Marketing",
    desc: "Custom content, community management, and paid ads across Instagram, Facebook, LinkedIn, TikTok, and X. Plans from $199/mo.",
    cta: "See plans →",
    href: "/social-media",
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
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Brand Identity Design",
    desc: "Logo, color palette, typography, and brand guidelines that make your Sacramento business look as good as it operates. Packages from $697.",
    cta: "View packages →",
    href: "/branding",
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
    title: "AI & Automation Consulting",
    desc: "We build email sequences, follow-up systems, and AI-driven workflows that run 24/7 — so you close more deals without adding headcount. From $197/hr.",
    cta: "Learn more →",
    href: "/consulting",
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            AI-powered growth for small businesses
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sacramento&apos;s AI-Powered
            <br />
            <span className="text-blue-600">Digital Agency</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bamberg Digital uses AI to surface SEO gaps, deliver verified leads,
            build websites that convert, and automate your follow-up — so your
            pipeline fills itself while you run your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
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
              Six services. One goal: more customers finding you, not your
              competitors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-colors"
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
          <div className="text-center mt-10">
            <a
              href="/pricing"
              className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              View all pricing →
            </a>
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
          <p className="text-gray-500 text-sm mt-6">
            Serving Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova,
            and businesses nationwide.
          </p>
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
                  &ldquo;{t.quote}&rdquo;
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
              Founded by Jason Bamberg · Sacramento, CA
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white mb-4">
              Enterprise AI tools, built for small business budgets.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              After spending years building AI automation systems used by
              hundreds of companies, Jason founded Bamberg Digital to bring
              those same tools to the small businesses that need them most —
              without the enterprise price tag. Today, our AI-powered systems
              run 24/7 so our clients don&apos;t have to.
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
              15 minutes. No pitch deck. We&apos;ll look at your specific
              situation and tell you exactly what we&apos;d do — whether you
              hire us or not.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Call us directly:{" "}
              <a
                href="tel:9169077782"
                className="text-blue-600 hover:underline font-medium"
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
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
