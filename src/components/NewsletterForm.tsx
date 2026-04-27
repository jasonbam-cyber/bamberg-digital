"use client";
import { useState } from "react";

interface Props {
  variant?: "inline" | "stacked";
  source?: string;
  className?: string;
}

export default function NewsletterForm({
  variant = "inline",
  source = "footer",
  className,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      setMessage("Welcome aboard. Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Subscription failed");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={className}
      style={{
        display: "flex",
        flexDirection: variant === "stacked" ? "column" : "row",
        gap: "0.6rem",
        maxWidth: 480,
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === "loading" || status === "success"}
        style={{
          flex: 1,
          minWidth: 220,
          padding: "0.85rem 1rem",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          fontSize: "0.85rem",
          borderRadius: 0,
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        style={{
          padding: "0.85rem 1.5rem",
          background: status === "success" ? "rgba(39,174,96,0.9)" : "#e8872b",
          color: "#fff",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          border: "none",
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {status === "loading"
          ? "..."
          : status === "success"
            ? "✓ Subscribed"
            : "Subscribe →"}
      </button>
      {message && (
        <p
          style={{
            fontSize: "0.7rem",
            color: status === "error" ? "#ff6b6b" : "rgba(255,255,255,0.6)",
            marginTop: "0.5rem",
            width: "100%",
            margin: "0.5rem 0 0",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
