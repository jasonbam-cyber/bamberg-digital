"use client";

import { useState } from "react";

const services = [
  { href: "/web-design", label: "Website Design" },
  { href: "/social-media", label: "Social Media" },
  { href: "/seo", label: "SEO Services" },
  { href: "/content-creation", label: "Content Creation" },
  { href: "/digital-marketing", label: "Digital Marketing" },
  { href: "/branding", label: "Branding" },
  { href: "/leads", label: "Lead Generation" },
  { href: "/consulting", label: "AI Consulting" },
];

export default function SiteNav({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                >
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        active === s.href
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/pricing"
              className={`text-sm font-medium transition-colors ${active === "/pricing" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Pricing
            </a>
            <a
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${active === "/portfolio" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Portfolio
            </a>
            <a
              href="/about"
              className={`text-sm font-medium transition-colors ${active === "/about" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              About
            </a>
            <a
              href="/#contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <p className="px-2 py-1 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Services
            </p>
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1.5"
              >
                {s.label}
              </a>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <a
              href="/pricing"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1.5"
            >
              Pricing
            </a>
            <a
              href="/portfolio"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1.5"
            >
              Portfolio
            </a>
            <a
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1.5"
            >
              About
            </a>
            <a
              href="/#contact"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-blue-700 transition-colors mt-2"
            >
              Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
