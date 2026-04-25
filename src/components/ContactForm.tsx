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
      {service && <input type="hidden" name="service" value={service} />}
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
          What&apos;s your biggest challenge right now?
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
        {ctaLabel}
      </button>
      <p className="text-xs text-gray-400 text-center">
        No sales pitch. No contract. We&apos;ll tell you exactly what we&apos;d
        do for your business.
      </p>
    </form>
  );
}
