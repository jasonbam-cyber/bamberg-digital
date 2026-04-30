"use client";

import { useState } from "react";
import Script from "next/script";

/* ─── ICONS ──────────────────────────────────────────────────── */
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

function CheckCircleIcon() {
  return (
    <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ToothIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13 5.5 15 6 17C6.5 19 7.5 22 9 22C10 22 10.5 20 11 18C11.3 16.5 11.7 16.5 12 16.5C12.3 16.5 12.7 16.5 13 18C13.5 20 14 22 15 22C16.5 22 17.5 19 18 17C18.5 15 19 13 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" />
    </svg>
  );
}

/* ─── DEMO BANNER ────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2.5 px-4 text-sm font-medium z-[60] relative">
      <span className="opacity-90">This is a demo template by</span>{" "}
      <a href="https://bambergdigital.com" className="underline font-bold hover:opacity-90 transition-opacity">
        Bamberg Digital
      </a>{" "}
      <span className="opacity-90">— Want one like this for your practice?</span>{" "}
      <a href="https://bambergdigital.com#contact" className="inline-block ml-2 bg-white text-blue-600 px-3 py-0.5 rounded-full font-bold text-xs hover:bg-blue-50 transition-colors">
        Get Started Free
      </a>
    </div>
  );
}

/* ─── NAVIGATION ──────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <ToothIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-gray-900 leading-tight">
                Loomis Family <span className="text-teal-600">Dental</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase -mt-0.5">General & Cosmetic Dentistry</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
            <a href="#book" className="bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/25 flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              (916) 555-0123
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
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 flex flex-col gap-3">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-teal-600 px-2 py-1">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-teal-600 px-2 py-1">About</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-teal-600 px-2 py-1">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-teal-600 px-2 py-1">Contact</a>
            <a href="#book" className="bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-1">
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Now Accepting New Patients</span>
            </div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Family Deserves a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Healthy Smile
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Trusted by Loomis families for over 20 years. Gentle, modern dental care for the whole family — from first teeth to golden years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-teal-500/30 text-center">
                Book Your Visit
              </a>
              <a href="tel:9165550123" className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                (916) 555-0123
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-teal-400" />
                Mon-Fri 8am-5pm
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-teal-400" />
                Loomis, CA
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl p-8 border border-white/10 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold text-white mb-1">20+</div>
                  <div className="text-teal-300 text-sm">Years Serving Loomis</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold text-white mb-1">5,000+</div>
                  <div className="text-teal-300 text-sm">Happy Patients</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold text-white mb-1">4.9</div>
                  <div className="text-teal-300 text-sm flex items-center justify-center gap-1">
                    <StarIcon /> Google Rating
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold text-white mb-1">Same</div>
                  <div className="text-teal-300 text-sm">Day Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────── */
const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    desc: "Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy year-round.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, and smile makeovers to give you the confidence you deserve.",
  },
  {
    icon: "👑",
    title: "Crowns & Bridges",
    desc: "Custom-fitted restorations that look natural and last for years. Same-day options available.",
  },
  {
    icon: "🔧",
    title: "Dental Implants",
    desc: "Permanent tooth replacement that looks, feels, and functions just like your natural teeth.",
  },
  {
    icon: "😁",
    title: "Invisalign",
    desc: "Straighten your teeth discreetly with clear aligners. Free consultation for new patients.",
  },
  {
    icon: "🚨",
    title: "Emergency Care",
    desc: "Toothache? Broken tooth? We offer same-day emergency appointments. Call us anytime.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Complete Dental Care for Your Family
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From routine checkups to advanced procedures, we provide everything your family needs under one roof.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ───────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Our Practice</span>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              A Dental Home Your Family Can Trust
            </h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              For over two decades, we&apos;ve been the dental home for Loomis families. Our approach is simple: treat every patient like family, use the latest technology, and make every visit as comfortable as possible.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "State-of-the-art digital X-rays & imaging",
                "Comfortable, anxiety-free environment",
                "Most insurance plans accepted",
                "Flexible payment plans available",
                "Saturday appointments for busy families",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircleIcon />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <a href="#book" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md shadow-teal-600/25">
              Meet Our Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 border border-teal-100">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    DR
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-gray-900">Dr. Robert Chen, DDS</h3>
                    <p className="text-gray-400 text-sm">General & Cosmetic Dentistry</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Education</span>
                    <span className="text-gray-700 font-medium">UOP School of Dentistry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-gray-700 font-medium">22 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Specialty</span>
                    <span className="text-gray-700 font-medium">Family & Cosmetic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Certifications</span>
                    <span className="text-gray-700 font-medium">ADA, CDA, Invisalign</span>
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

/* ─── TESTIMONIALS ────────────────────────────────────────────── */
const reviews = [
  {
    name: "Sarah M.",
    text: "Dr. Chen and his team are incredible. My kids actually look forward to going to the dentist now. The office is modern, clean, and everyone is so friendly.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "I was terrified of dentists for 15 years. This practice changed everything. They were patient, gentle, and explained every step. I finally have a smile I'm proud of.",
    rating: 5,
  },
  {
    name: "Linda K.",
    text: "Best dental experience in Loomis, hands down. Got my Invisalign consultation and was impressed by the technology they use. Highly recommend to anyone.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Patient Reviews</span>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
            <span className="text-gray-300 text-sm font-medium ml-2">4.9 out of 5 based on 200+ reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all">
              <div className="flex mb-4">{[...Array(r.rating)].map((_, j) => <StarIcon key={j} />)}</div>
              <p className="text-gray-200 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-300 font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">Verified Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INSURANCE ───────────────────────────────────────────────── */
function Insurance() {
  const insurances = ["Delta Dental", "Cigna", "Aetna", "MetLife", "Guardian", "United Healthcare", "Blue Cross", "Humana"];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-2">Insurance We Accept</h3>
        <p className="text-gray-500 mb-8 text-sm">We work with most major insurance providers. Don&apos;t see yours? Call us — we can help.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {insurances.map((ins, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-medium text-gray-600 shadow-sm">
              {ins}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BOOKING CTA ─────────────────────────────────────────────── */
function BookingCTA() {
  return (
    <section id="book" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-teal-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
              New patients receive a comprehensive exam, full X-rays, and personalized treatment plan. Book online or call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg">
                Book Online Now
              </a>
              <a href="tel:9165550123" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white/60 transition-all flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                (916) 555-0123
              </a>
            </div>
            <p className="text-teal-200/60 text-sm mt-6">No insurance? No problem. Ask about our membership plan starting at $29/month.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT/MAP ─────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-gray-900 mt-3 mb-8">
              Find Our Office
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-500">1234 Taylor Road, Suite A<br />Loomis, CA 95650</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-500">(916) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hours</h4>
                  <div className="text-gray-500 text-sm space-y-1 mt-1">
                    <p>Monday - Thursday: 8:00 AM - 5:00 PM</p>
                    <p>Friday: 8:00 AM - 3:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM (by appointment)</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="(916) 555-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition">
                  <option>Select a service...</option>
                  <option>General Checkup & Cleaning</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Crowns & Bridges</option>
                  <option>Dental Implants</option>
                  <option>Invisalign Consultation</option>
                  <option>Emergency / Toothache</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" />
              </div>
              <button type="button" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-md shadow-teal-600/25 text-sm">
                Request Appointment
              </button>
              <p className="text-xs text-gray-400 text-center">We&apos;ll confirm your appointment within 2 hours during business hours.</p>
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
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <ToothIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-white">Loomis Family Dental</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing gentle, comprehensive dental care to the Loomis community since 2004.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block hover:text-teal-400 transition-colors">Our Services</a>
              <a href="#about" className="block hover:text-teal-400 transition-colors">About Us</a>
              <a href="#testimonials" className="block hover:text-teal-400 transition-colors">Patient Reviews</a>
              <a href="#book" className="block hover:text-teal-400 transition-colors">Book Appointment</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Emergency?</h4>
            <p className="text-sm mb-3">Dental emergencies don&apos;t wait. Neither do we.</p>
            <a href="tel:9165550123" className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              (916) 555-0123
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; 2026 Loomis Family Dental. All rights reserved.</p>
          <p className="text-xs">
            Website by{" "}
            <a href="https://bambergdigital.com" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
              Bamberg Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────── */
export default function DentalDemoPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Insurance />
      <BookingCTA />
      <Contact />
      <Footer />
      {/* AI Receptionist Chat Widget */}
      <Script
        src="https://agent.bambergdigital.com/widget.js"
        data-business="demo_dental"
        data-agent-url="https://agent.bambergdigital.com"
        data-color="#0d9488"
        data-greeting="Hi! 👋 I'm the AI assistant for Loomis Family Dental. How can I help you today?"
        strategy="lazyOnload"
      />
    </>
  );
}
