import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import HomeClient, { Counter } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Bamberg Digital | Sacramento's AI-Powered Digital Agency",
  description:
    "Sacramento's AI-powered digital agency. Web design, SEO, social media & lead generation for small businesses. We find the customers your competitors miss.",
  alternates: { canonical: "https://www.bambergdigital.com" },
  openGraph: {
    title: "Bamberg Digital — Sacramento's AI-Powered Digital Agency",
    description:
      "Web design, SEO, social media, lead generation, branding, and AI automation for small businesses. Start with a free consultation.",
    url: "https://www.bambergdigital.com",
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
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
        className="w-6 h-6"
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
    desc: "Mobile-first, SEO-ready sites that convert. Built and delivered in 2–3 weeks.",
    price: "From $497",
    href: "/web-design",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Social Media",
    desc: "Custom content, community management, and paid ads that actually grow your audience.",
    price: "From $199/mo",
    href: "/social-media",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "SEO",
    desc: "AI-powered audits that surface exactly where you're losing traffic — and how to fix it.",
    price: "Free audit",
    href: "/seo",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    title: "Content",
    desc: "Blog posts, case studies, and landing page copy that rank and convert.",
    price: "From $97/piece",
    href: "/content-creation",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Digital Marketing",
    desc: "Google Ads, Meta Ads, and retargeting campaigns built to maximize your ROI.",
    price: "From $497/mo",
    href: "/digital-marketing",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Branding",
    desc: "Logo, color palette, typography, and brand guidelines that make you unforgettable.",
    price: "From $697",
    href: "/branding",
  },
];

const testimonials = [
  {
    quote:
      "Bamberg Digital ran an SEO audit on our plumbing business and found issues we had no idea existed. Within 60 days we went from page 4 to page 1 for our top keywords.",
    name: "Marcus T.",
    title: "Owner, ProFlow Plumbing",
    initials: "MT",
  },
  {
    quote:
      "The lead lists they deliver are actually verified. No bounced emails, no disconnected numbers. We closed 4 new clients from the first batch of 50 leads.",
    name: "Sandra R.",
    title: "Broker, Realty One Group",
    initials: "SR",
  },
  {
    quote:
      "Their AI automation set up a follow-up sequence that runs without me touching it. I got 3 consultation requests last week while I was on vacation.",
    name: "David K.",
    title: "Founder, Summit Legal Group",
    initials: "DK",
  },
];

const cities = [
  "Sacramento",
  "Elk Grove",
  "Folsom",
  "Roseville",
  "Rancho Cordova",
];

export default function Home() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      <SiteNav />
      <HomeClient />

      {/* ── Section 1: Hero ── */}
      <section className="hero-gradient-bg min-h-screen flex flex-col items-center justify-center relative px-4 pt-16 overflow-hidden">
        {/* floating orbs */}
        <div
          className="orb w-[500px] h-[500px] bg-blue-600/15 -top-20 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="orb w-[350px] h-[350px] bg-purple-600/15 bottom-10 -right-20"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="orb w-[200px] h-[200px] bg-cyan-500/10 top-1/2 left-2/3"
          style={{ animationDelay: "-14s" }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-10 hero-reveal">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Sacramento&apos;s AI-powered digital agency
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.04] tracking-tight mb-8 hero-reveal hero-reveal-delay-1">
            We find the customers
            <br />
            <span className="text-gradient">your competitors miss.</span>
          </h1>

          <p className="text-gray-400 text-xl sm:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed hero-reveal hero-reveal-delay-2">
            AI-powered growth systems for Sacramento small businesses. More
            leads. More visibility. Zero guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-reveal hero-reveal-delay-3">
            <a
              href="/story"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See how →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Book free consultation
            </a>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5">
          <span className="text-gray-600 text-xs tracking-widest uppercase">
            scroll
          </span>
          <svg
            className="w-4 h-4 text-gray-600"
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
        </div>
      </section>

      {/* ── Section 2: Problem statement ── */}
      <section className="bg-gray-950 min-h-screen flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-[0.2em] mb-8 reveal">
            The hard truth
          </p>

          <div className="font-[family-name:var(--font-montserrat)] text-[min(22vw,180px)] font-black leading-none text-gradient mb-6 reveal">
            <Counter target={93} suffix="%" />
          </div>

          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight reveal reveal-delay-1">
            of local searches never make it
            <br className="hidden sm:block" /> past page&nbsp;1.
          </h2>

          <p className="text-gray-400 text-xl sm:text-2xl reveal reveal-delay-2">
            If you&apos;re not there,{" "}
            <span className="text-white font-semibold">
              you don&apos;t exist.
            </span>
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 reveal reveal-delay-3">
            {[
              { stat: "3×", label: "more calls from page 1" },
              { stat: "78%", label: "of mobile searches convert same day" },
              { stat: "92%", label: "never scroll past the first result" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-900 border border-gray-800 rounded-2xl px-8 py-5 text-center"
              >
                <div className="font-[family-name:var(--font-montserrat)] text-3xl font-black text-gradient mb-1">
                  {item.stat}
                </div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Services ── */}
      <section className="py-28 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4 reveal">
              What we do
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
              Six services. One obsession.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto reveal reveal-delay-2">
              More customers finding you, not your competitors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <a
                key={s.title}
                href={s.href}
                className={`card-dark rounded-2xl p-8 group reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold text-sm">
                    {s.price}
                  </span>
                  <span className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-lg">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why us ── */}
      <section className="py-28 px-4 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6 reveal">
                The differentiator
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-black text-white mb-6 leading-tight reveal reveal-delay-1">
                Powered by AI.
                <br />
                <span className="text-gradient">Run by humans.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 reveal reveal-delay-2">
                Other agencies run on templates and gut instinct. We run on
                data. Our AI systems scan thousands of signals — competitor
                gaps, keyword opportunities, audience behavior — then our team
                builds the strategy that wins.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 reveal reveal-delay-3">
                Enterprise-grade intelligence. Freelancer prices. And a founder
                who picks up the phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Meet the team →
                </a>
                <a
                  href="/story"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 font-semibold transition-colors"
                >
                  Our story →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
              {[
                { stat: "Agency quality.", sub: "Freelancer prices." },
                { stat: "$0", sub: "Setup fees. Ever." },
                { stat: "2–3 wks", sub: "Website delivery" },
                { stat: "24/7", sub: "AI systems running" },
              ].map((item) => (
                <div
                  key={item.sub}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="font-[family-name:var(--font-montserrat)] text-xl font-black text-white mb-1 leading-tight">
                    {item.stat}
                  </div>
                  <div className="text-gray-500 text-sm">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Social proof ── */}
      <section className="py-28 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4 reveal">
              Social proof
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
              Sacramento businesses
              <br />
              <span className="text-gradient">trust Bamberg Digital.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card rounded-2xl p-8 reveal reveal-delay-${i + 1}`}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <p className="text-gray-600 text-sm font-medium uppercase tracking-widest mb-5">
              Serving
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="border border-gray-800 text-gray-400 text-sm px-4 py-1.5 rounded-full"
                >
                  {city}
                </span>
              ))}
              <span className="border border-gray-800 text-gray-600 text-sm px-4 py-1.5 rounded-full">
                + nationwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section id="contact" className="py-28 px-4 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <div className="gradient-border-wrap reveal">
            <div className="gradient-border-inner px-8 sm:px-14 py-14">
              <div className="text-center mb-10">
                <h2 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                  Ready to stop
                  <br />
                  <span className="text-gradient">being invisible?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  15 minutes. No pitch deck. We&apos;ll tell you exactly what
                  we&apos;d do — whether you hire us or not.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mb-8">
                  <a
                    href="tel:9169077782"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (916) 907-7782
                  </a>
                  <span className="text-gray-700 hidden sm:inline">·</span>
                  <a
                    href="mailto:hello@bambergdigital.com"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@bambergdigital.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/story"
                    className="inline-flex items-center justify-center border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                  >
                    See our work →
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-10">
                <ContactForm ctaLabel="Book my free consultation →" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
