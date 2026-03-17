"use client";

import { useState } from "react";

/* ─── ICON COMPONENTS ─────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/* ─── NAVIGATION ──────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BD</span>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-gray-900">
              Bamberg <span className="text-blue-600">Digital</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#industries" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Industries</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#results" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Results</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25">
              Free Consultation
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#services" className="text-sm font-medium text-gray-600 py-2" onClick={() => setOpen(false)}>Services</a>
            <a href="#industries" className="text-sm font-medium text-gray-600 py-2" onClick={() => setOpen(false)}>Industries</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 py-2" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#results" className="text-sm font-medium text-gray-600 py-2" onClick={() => setOpen(false)}>Results</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center" onClick={() => setOpen(false)}>
              Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─── HERO SECTION ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Serving Loomis, Roseville &amp; Sacramento</span>
            </div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your customers are
              <span className="text-gradient-blue block">searching online.</span>
              <span className="text-white/60 text-3xl sm:text-4xl lg:text-5xl block mt-2">Can they find you?</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              We build professional websites, optimize your Google presence, and set up AI-powered automation so you never miss a customer — even when you&rsquo;re closed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 pulse-cta text-center">
                Get Your Free Website Mockup
              </a>
              <a href="#industries" className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/5 transition-all text-center">
                See Our Work
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><CheckIcon /><span>No contracts</span></div>
              <div className="flex items-center gap-2"><CheckIcon /><span>Results in 7 days</span></div>
              <div className="flex items-center gap-2"><CheckIcon /><span>Cancel anytime</span></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="browser-mockup bg-white">
              <div className="browser-mockup-bar">
                <div className="browser-dot bg-red-400" />
                <div className="browser-dot bg-yellow-400" />
                <div className="browser-dot bg-green-400" />
                <div className="flex-1 bg-gray-200 rounded-md ml-4 h-5 flex items-center px-3">
                  <span className="text-xs text-gray-500">yourbusiness.com</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 min-h-[350px] flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="ml-auto flex gap-4">
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1">
                    <div className="h-6 w-48 bg-gray-800 rounded mb-3" />
                    <div className="h-4 w-72 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-64 bg-gray-300 rounded mb-6" />
                    <div className="h-10 w-36 bg-blue-600 rounded-lg" />
                  </div>
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl" />
                </div>
                <div className="flex gap-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2" />
                      <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
                      <div className="h-2 w-16 bg-gray-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM SECTION ─────────────────────────────────────────── */
function ProblemSection() {
  const stats = [
    { stat: "76%", label: "of consumers look up a business online before visiting" },
    { stat: "27%", label: "of small businesses still have NO website" },
    { stat: "50%", label: "of leads are lost to slow follow-up" },
    { stat: "88%", label: "of local mobile searches lead to a call or visit within 24 hours" },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Every day without a website,<br />you&rsquo;re losing customers to competitors.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your next customer just Googled your service. If they can&rsquo;t find you, they found someone else.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover text-center">
              <div className="text-4xl font-bold text-blue-600 font-[family-name:var(--font-montserrat)] mb-2">{item.stat}</div>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES SECTION ────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
      title: "Professional Websites",
      description: "Beautiful, mobile-friendly websites that load fast and convert visitors into customers. Built in days, not months.",
      features: ["Mobile responsive", "SEO optimized", "Fast loading", "Custom design"],
    },
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      title: "Google Optimization",
      description: "Get found when people search for your service. We optimize your Google Business Profile and local SEO so you rank in the top 3.",
      features: ["Google Maps ranking", "Review management", "Local SEO", "Weekly Google posts"],
    },
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>),
      title: "AI-Powered Automation",
      description: "Never miss a lead. Our AI chatbot answers questions 24/7, auto-texts missed calls, and sends review requests automatically.",
      features: ["24/7 AI chatbot", "Missed-call text-back", "Auto review requests", "Appointment booking"],
    },
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m10-4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-5 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4" /></svg>),
      title: "Social Media Management",
      description: "Consistent, professional social media content that builds your brand. We create and post so you don&rsquo;t have to.",
      features: ["12+ posts/month", "Custom graphics", "Content calendar", "Engagement tracking"],
    },
  ];
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything your business needs to thrive online</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">One partner. One monthly fee. Your complete digital presence — handled.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5">{service.icon}</div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckIcon />{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INDUSTRY DEMOS ──────────────────────────────────────────── */
function IndustrySection() {
  const [active, setActive] = useState(0);
  const industries = [
    {
      name: "Dental Offices", icon: "\u{1F9B7}", color: "from-sky-500 to-blue-600",
      headline: "Fill Your Appointment Book \u2014 Automatically",
      description: "Patients search online before choosing a dentist. We make sure they choose you with a professional site, easy online booking, and automated recall reminders.",
      features: ["Online appointment scheduling", "New patient intake forms", "Insurance accepted page", "Automated appointment reminders via SMS", "Post-visit review request automation", "Patient recall system (6-month cleanings)"],
      mockup: { nav: ["Home", "Services", "Our Team", "Insurance", "Book Now"], heroText: "Your Smile Deserves the Best Care", heroSub: "Accepting new patients. Book your appointment today.", cards: ["General Dentistry", "Cosmetic", "Orthodontics"] },
    },
    {
      name: "Contractors", icon: "\u{1F527}", color: "from-amber-500 to-orange-600",
      headline: "Never Miss a Service Call Again",
      description: "When a pipe bursts at 2 AM, the first contractor who answers gets the job. Our AI texts back instantly when you can\u2019t pick up, so you never lose a lead.",
      features: ["Emergency service button (click-to-call)", "Service area map with coverage zones", "Before/after project gallery", "Instant quote request forms", "Missed-call auto text-back", "Job scheduling & follow-up automation"],
      mockup: { nav: ["Home", "Services", "Gallery", "Service Area", "Get Quote"], heroText: "24/7 Emergency Plumbing in Roseville", heroSub: "Licensed. Insured. Here when you need us.", cards: ["Emergency Repair", "Installation", "Maintenance"] },
    },
    {
      name: "Restaurants", icon: "\u{1F37D}\uFE0F", color: "from-red-500 to-rose-600",
      headline: "Turn Online Searches Into Reservations",
      description: "Your next customer is Googling \u2018best restaurant near me\u2019 right now. We make sure your menu, hours, and reviews are front and center.",
      features: ["Interactive menu with photos & prices", "Online reservation system", "Google Maps integration", "Automated review collection", "Social media content (food photos & specials)", "Integration with DoorDash, Uber Eats, Yelp"],
      mockup: { nav: ["Home", "Menu", "Reservations", "Events", "Order Online"], heroText: "Farm-Fresh Italian in the Heart of Loomis", heroSub: "Open Tuesday-Sunday. Reservations recommended.", cards: ["Dinner Menu", "Wine List", "Private Events"] },
    },
    {
      name: "Salons & Spas", icon: "\u{1F487}", color: "from-purple-500 to-pink-500",
      headline: "Bookings While You Sleep",
      description: "Clients want to book online, not play phone tag. Our AI booking system fills your chair from the moment your site goes live.",
      features: ["Online booking with stylist selection", "Service menu with pricing", "Stylist profiles & portfolio galleries", "Automated appointment reminders", "Birthday & rebooking promotions", "Before/after transformation gallery"],
      mockup: { nav: ["Home", "Services", "Our Team", "Gallery", "Book Now"], heroText: "Where Beauty Meets Artistry", heroSub: "Book your transformation online. New clients welcome.", cards: ["Hair Services", "Color & Highlights", "Spa Treatments"] },
    },
  ];
  const current = industries[active];
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Built For Your Industry</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See what we build for businesses like yours</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every industry has unique needs. We build custom solutions — not cookie-cutter templates.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <button key={i} onClick={() => setActive(i)} className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${active === i ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`}>
              <span className="mr-2">{ind.icon}</span>{ind.name}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{current.headline}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">{current.description}</p>
            <div className="space-y-3 mb-8">
              {current.features.map((f, i) => (<div key={i} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700">{f}</span></div>))}
            </div>
            <a href="#contact" className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25">
              Get a Free {current.name} Website Mockup
            </a>
          </div>
          <div className="browser-mockup bg-white">
            <div className="browser-mockup-bar">
              <div className="browser-dot bg-red-400" /><div className="browser-dot bg-yellow-400" /><div className="browser-dot bg-green-400" />
              <div className="flex-1 bg-gray-200 rounded-md ml-4 h-5 flex items-center px-3"><span className="text-xs text-gray-500">yourbusiness.com</span></div>
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${current.color} rounded-lg`} />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
                <div className="hidden sm:flex gap-3">
                  {current.mockup.nav.map((item, i) => (<span key={i} className="text-[10px] text-gray-500 font-medium">{item}</span>))}
                </div>
              </div>
              <div className={`bg-gradient-to-br ${current.color} px-6 py-10 text-white`}>
                <h4 className="text-xl font-bold mb-2">{current.mockup.heroText}</h4>
                <p className="text-white/80 text-sm mb-4">{current.mockup.heroSub}</p>
                <div className="flex gap-3">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold">{current.name === "Contractors" ? "Call Now" : "Book Now"}</div>
                  <div className="border border-white/40 px-4 py-2 rounded-lg text-xs font-medium">Learn More</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 p-6">
                {current.mockup.cards.map((card, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className={`w-10 h-10 bg-gradient-to-br ${current.color} rounded-lg mx-auto mb-2 opacity-20`} />
                    <span className="text-xs font-medium text-gray-700">{card}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-900 mb-1">AI Assistant</p>
                    <p className="text-xs text-blue-800">
                      Hi! I can help you {current.name === "Dental Offices" ? "schedule an appointment" : current.name === "Contractors" ? "get a free estimate" : current.name === "Restaurants" ? "make a reservation" : "book your next appointment"}. What works best for you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { num: "1", title: "Free Consultation", description: "We audit your current online presence and show you exactly where you\u2019re losing customers. Takes 15 minutes." },
    { num: "2", title: "Custom Mockup", description: "Within 48 hours, you\u2019ll see a live preview of your new website \u2014 no charge, no obligation. Love it or leave it." },
    { num: "3", title: "Launch & Automate", description: "We launch your site, set up your Google profile, and activate AI automation. You start getting leads within a week." },
    { num: "4", title: "Grow on Autopilot", description: "We manage everything month-to-month. You focus on running your business while your online presence works 24/7." },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From invisible to unstoppable in 4 steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">{step.num}</div>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-6 left-14 w-[calc(100%-2rem)] h-0.5 bg-blue-100" />}
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AUTOMATION SHOWCASE ─────────────────────────────────────── */
function AutomationShowcase() {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">AI-Powered Automation</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-4">Your business runs — even when you don&rsquo;t</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">These aren&rsquo;t gimmicks. These are real automations running for real businesses right now.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Missed call */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gray-900 rounded-2xl p-5 max-w-xs border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="text-white text-sm">Missed Call from (916) 555-0123</span>
                </div>
                <div className="bg-blue-600 rounded-2xl rounded-bl-sm px-4 py-3 ml-8">
                  <p className="text-white text-sm">Hi! Sorry we missed your call. How can we help? Reply here or we&rsquo;ll call you back shortly.</p>
                </div>
                <p className="text-gray-500 text-xs mt-2 ml-8">Sent automatically &bull; 28 seconds after missed call</p>
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold mb-2">Missed Call? Auto Text-Back.</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Someone calls and you can&rsquo;t answer? Within 30 seconds, they get a text. Keeps the lead warm.</p>
          </div>
          {/* Reviews */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gray-900 rounded-2xl p-5 max-w-xs border border-gray-700">
                <div className="bg-blue-600 rounded-2xl rounded-bl-sm px-4 py-3 ml-8 mb-3">
                  <p className="text-white text-sm">Thanks for visiting! If you had a great experience, we&rsquo;d love a quick Google review:</p>
                  <div className="bg-white/20 rounded-lg px-3 py-2 mt-2"><p className="text-white text-xs">g.page/yourbusiness/review</p></div>
                </div>
                <div className="bg-gray-700 rounded-2xl rounded-br-sm px-4 py-3 mr-8">
                  <p className="text-white text-sm">You guys were amazing! Just left you 5 stars</p>
                </div>
                <p className="text-gray-500 text-xs mt-2 ml-8">Sent 2 hours after appointment</p>
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold mb-2">Review Requests on Autopilot</h3>
            <p className="text-gray-300 text-sm leading-relaxed">After every visit, your customer gets a friendly text asking for a Google review. 5-star reviews stack up automatically.</p>
          </div>
          {/* Chatbot */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 max-w-xs shadow-lg">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">AI</span></div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Virtual Assistant</p>
                    <p className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online 24/7</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 mr-8"><p className="text-sm text-gray-800">Hi! How can I help you today?</p></div>
                  <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm px-3 py-2 ml-8"><p className="text-sm">Do you have availability Thursday?</p></div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 mr-8"><p className="text-sm text-gray-800">Yes! We have openings at 10am, 2pm, and 4pm. Which works best?</p></div>
                </div>
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold mb-2">24/7 AI Chatbot That Books</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Customers visit your site at 11 PM. The AI answers their questions and books an appointment — while you sleep.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING SECTION ─────────────────────────────────────────── */
function PricingSection() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      key: "starter", name: "Starter", price: "497", description: "Perfect for businesses just getting online", popular: false,
      features: ["Professional 5-page website", "Mobile responsive design", "Google Business Profile setup", "Basic SEO optimization", "Monthly maintenance & updates", "SSL security certificate"],
    },
    {
      key: "growth", name: "Growth", price: "797", description: "For businesses ready to dominate locally", popular: true,
      features: ["Everything in Starter, plus:", "AI chatbot (answers 24/7)", "Missed-call text-back system", "Automated review requests", "12 social media posts/month", "Google Maps optimization", "Monthly performance report", "Online booking / contact forms"],
    },
    {
      key: "premium", name: "Premium", price: "1,297", description: "Full-service digital domination", popular: false,
      features: ["Everything in Growth, plus:", "Email marketing campaigns", "Advanced automation workflows", "Reputation management", "Competitor monitoring", "Priority support (same-day)", "Quarterly strategy sessions", "Custom integrations"],
    },
  ];

  async function handleSubscribe(planKey: string) {
    setLoadingPlan(planKey);
    try {
      const email = prompt("Enter your email to get started:");
      if (!email) { setLoadingPlan(null); return; }
      const businessName = prompt("Business name (optional):") || "";

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey, email, businessName }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Unable to connect. Please call us at (916) 834-7774.");
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Simple Pricing</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">One new customer pays for months of service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">No setup fees. No contracts. No hidden costs. Auto-pay required.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 ${plan.popular ? "bg-blue-600 text-white ring-4 ring-blue-600/20 scale-105 shadow-2xl shadow-blue-600/20" : "bg-white text-gray-900 border border-gray-200 shadow-sm"} card-hover`}>
              {plan.popular && <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>}
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold font-[family-name:var(--font-montserrat)]">${plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-emerald-300" : "text-emerald-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className={plan.popular ? "text-blue-50" : "text-gray-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscribe(plan.key)}
                disabled={loadingPlan === plan.key}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors cursor-pointer disabled:opacity-50 ${plan.popular ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                {loadingPlan === plan.key ? "Loading..." : plan.popular ? "Get Started — Most Popular" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">All plans include hosting, SSL, maintenance, and support. Auto-pay is required for all subscriptions. <a href="/portal" className="text-blue-600 underline">Manage billing</a> &bull; <a href="#contact" className="text-blue-600 underline">Need something custom?</a></p>
      </div>
    </section>
  );
}

/* ─── RESULTS / SOCIAL PROOF ──────────────────────────────────── */
function ResultsSection() {
  const testimonials = [
    { quote: "We went from zero online presence to ranking #1 on Google Maps in just 6 weeks. The phone hasn\u2019t stopped ringing.", name: "Local Contractor", role: "Roseville, CA", result: "3x more calls" },
    { quote: "The AI chatbot books appointments even at midnight. We used to lose patients who called after hours. Not anymore.", name: "Dental Practice", role: "Sacramento, CA", result: "40% more patients" },
    { quote: "I was spending $2,000/month on an agency that did less than what Bamberg Digital does for a fraction of the cost.", name: "Restaurant Owner", role: "Loomis, CA", result: "65% more reservations" },
  ];
  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Results That Speak</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Local businesses trust us to grow their revenue</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover">
              <div className="flex gap-1 mb-4">{[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
                <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg">{t.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT / CTA ───────────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Let&rsquo;s Talk</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get your free website mockup — no strings attached</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Tell us about your business and we&rsquo;ll build you a custom mockup within 48 hours. Love it? We&rsquo;ll launch it. Not for you? No hard feelings.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Call or Text</p><p className="text-gray-600">(916) 834-7774</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-600">jason@bambergdigital.com</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Serving</p><p className="text-gray-600">Loomis, Roseville, Rocklin, Sacramento &amp; Placer County</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-6">Request Your Free Mockup</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch within 24 hours."); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Smith's Plumbing" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone or Email</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(916) 555-0123 or john@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What does your business do?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>Select your industry...</option>
                  <option>Dental / Medical</option>
                  <option>Contractor / Home Services</option>
                  <option>Restaurant / Food Service</option>
                  <option>Salon / Spa / Beauty</option>
                  <option>Auto Repair / Dealership</option>
                  <option>Real Estate</option>
                  <option>Fitness / Gym</option>
                  <option>Retail / Shop</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Do you have a current website?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>No website</option>
                  <option>Yes, but it needs updating</option>
                  <option>Yes, but it doesn&rsquo;t bring in customers</option>
                  <option>Just a Facebook page</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 pulse-cta">
                Get My Free Mockup
              </button>
              <p className="text-xs text-gray-500 text-center">No payment required. No obligation. We&rsquo;ll reach out within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">BD</span></div>
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-white">Bamberg Digital</span>
            </div>
            <p className="text-sm leading-relaxed">Professional websites &amp; AI automation for local businesses in Loomis, Roseville &amp; Sacramento.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#industries" className="hover:text-white transition-colors">Dental Offices</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Contractors</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Salons &amp; Spas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>(916) 834-7774</li>
              <li>jason@bambergdigital.com</li>
              <li>Loomis, CA 95650</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 Bamberg Digital. All rights reserved.</p>
          <p className="text-sm">Serving Loomis, Roseville, Rocklin, Granite Bay, Folsom &amp; Sacramento</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <IndustrySection />
      <HowItWorks />
      <AutomationShowcase />
      <PricingSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
