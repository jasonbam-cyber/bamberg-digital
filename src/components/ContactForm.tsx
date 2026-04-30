"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

interface ContactFormProps {
  ctaLabel?: string;
  service?: string;
  source?: string;
  successMessage?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  ctaLabel = "Book my free consultation →",
  service = "",
  source = "contact",
  successMessage = "Got it. Reply within one business day.",
  onSuccess,
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    website: "", // honeypot — hidden from real users
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service, source }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          (data as { error?: string }).error ??
            "Something went wrong. Please try again.",
        );
        return;
      }

      setSent(true);
      onSuccess?.();

      track(`${source}_form_submit`);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <p style={{ fontSize: "1rem", color: "#1a1410", fontWeight: 500 }}>
          {successMessage}
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #d1c9bf",
    borderRadius: 6,
    padding: "10px 14px",
    fontSize: "0.875rem",
    background: "#faf8f5",
    color: "#1a1410",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#4a3f33",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      {/* Honeypot — visually hidden, intentionally left blank by humans */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: 1,
          height: 1,
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
      <input type="hidden" name="source" value={source} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label htmlFor="cf-name" style={labelStyle}>
            Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-company" style={labelStyle}>
          Company
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          style={inputStyle}
          placeholder="Optional"
        />
      </div>

      {source === "atelier" && (
        <>
          <div>
            <label htmlFor="cf-project-type" style={labelStyle}>
              Project type *
            </label>
            <select
              id="cf-project-type"
              name="projectType"
              required
              value={form.projectType}
              onChange={(e) =>
                setForm({ ...form, projectType: e.target.value })
              }
              style={{ ...inputStyle, appearance: "none" }}
            >
              <option value="">Select one</option>
              <option value="New site">New site</option>
              <option value="Redesign">Redesign</option>
              <option value="Custom system">Custom system</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="cf-budget" style={labelStyle}>
              Budget *
            </label>
            <select
              id="cf-budget"
              name="budget"
              required
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              style={{ ...inputStyle, appearance: "none" }}
            >
              <option value="">Select one</option>
              <option value="$10K–$15K">$10K–$15K</option>
              <option value="$15K–$25K">$15K–$25K</option>
              <option value="$25K+">$25K+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
        </>
      )}

      <div>
        <label htmlFor="cf-message" style={labelStyle}>
          {source === "atelier"
            ? "What are you building? *"
            : "What's your biggest challenge? *"}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: "none" }}
          placeholder={
            source === "atelier"
              ? "One paragraph. What it is, who it's for, what done looks like."
              : "Not enough leads, low website traffic, slow follow-up..."
          }
        />
      </div>

      {error && (
        <p style={{ fontSize: "0.85rem", color: "#b91c1c" }} role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          background: loading ? "#9ca3af" : "#1a1410",
          color: "#fff",
          fontWeight: 600,
          padding: "12px 24px",
          borderRadius: 6,
          border: "none",
          fontSize: "0.9rem",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.2s",
          letterSpacing: "0.03em",
        }}
      >
        {loading ? "Sending…" : ctaLabel}
      </button>

      <p
        style={{
          fontSize: "0.75rem",
          color: "#7a6f63",
          textAlign: "center",
          margin: 0,
        }}
      >
        No sales pitch. No contract. Just a direct reply.
      </p>
    </form>
  );
}
