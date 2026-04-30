"use client";

import { useState } from "react";

export default function ContactForm({
  ctaLabel = "Book my free consultation →",
  service = "",
}: {
  ctaLabel?: string;
  service?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
    website: "", // honeypot — hidden from real users
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          (data as { error?: string }).error ??
            "Something went wrong. Please try again.",
        );
        return;
      }

      setSent(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
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
          We&apos;ll be in touch within 24 hours
        </h3>
        <p className="text-gray-600">
          Check your inbox — we may have already sent you a quick note.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — visually hidden, intentionally left blank by humans */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website-hp">Website</label>
        <input
          id="website-hp"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>

      {service && <input type="hidden" name="service" value={service} />}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
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
        <label
          htmlFor="contact-business"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Business name
        </label>
        <input
          id="contact-business"
          name="businessName"
          type="text"
          value={form.businessName}
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Acme Plumbing Co."
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          What&apos;s your biggest challenge right now?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Not enough leads, low website traffic, slow follow-up..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-blue-600/25"
      >
        {ctaLabel}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No sales pitch. No contract. We&apos;ll tell you exactly what we&apos;d
        do for your business.
      </p>
    </form>
  );
}
