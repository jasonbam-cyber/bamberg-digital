export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">BD</span>
              </div>
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base">
                Bamberg Digital
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-4">
              Sacramento&apos;s AI-powered digital marketing agency. SEO, leads,
              websites, and automation for small businesses nationwide.
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <a
                  href="tel:9169077782"
                  className="hover:text-white transition-colors"
                >
                  (916) 907-7782
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@bambergdigital.com"
                  className="hover:text-white transition-colors"
                >
                  hello@bambergdigital.com
                </a>
              </p>
              <p className="text-slate-500">Sacramento, CA</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm">Services</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/web-design", label: "Website Design" },
                { href: "/social-media", label: "Social Media" },
                { href: "/seo", label: "SEO Services" },
                { href: "/content-creation", label: "Content Creation" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More services */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm">More</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/digital-marketing", label: "Digital Marketing" },
                { href: "/branding", label: "Branding" },
                { href: "/leads", label: "Lead Generation" },
                { href: "/consulting", label: "AI Consulting" },
                { href: "/ai-integration", label: "AI Integration" },
                { href: "/custom-tools", label: "Custom Tools" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm">Company</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © 2024–{new Date().getFullYear()} Bamberg Digital. All rights
            reserved.
          </p>
          <p>
            Sacramento, CA · Elk Grove · Folsom · Roseville · Rancho Cordova
          </p>
        </div>
      </div>
    </footer>
  );
}
