"use client";
import { useEffect, useState } from "react";

export default function UnsubscribeClient({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ token?: string; email?: string }>;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      const params = await searchParamsPromise;
      if (params.email) setEmail(params.email);
      if (params.token) {
        setStatus("loading");
        try {
          const res = await fetch(
            `/api/unsubscribe?token=${encodeURIComponent(params.token)}`,
            { method: "POST" },
          );
          const data = await res.json();
          if (!res.ok) throw new Error(data.error);
          setStatus("done");
          setMessage(data.message || "You've been unsubscribed.");
        } catch (e) {
          setStatus("error");
          setMessage(e instanceof Error ? e.message : "Unsubscribe failed");
        }
      }
    })();
  }, [searchParamsPromise]);

  async function manual(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus("done");
      setMessage("You've been unsubscribed.");
    } catch (e) {
      setStatus("error");
      setMessage(e instanceof Error ? e.message : "Failed");
    }
  }

  if (status === "done") return <p style={{ color: "#27ae60" }}>{message}</p>;
  if (status === "loading") return <p>Processing...</p>;

  return (
    <form
      onSubmit={manual}
      style={{
        display: "flex",
        gap: "0.6rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          padding: "0.85rem 1rem",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          width: 320,
          maxWidth: "100%",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.85rem 1.5rem",
          background: "#e8872b",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Unsubscribe
      </button>
      {message && (
        <p style={{ color: "#ff6b6b", fontSize: "0.75rem" }}>{message}</p>
      )}
    </form>
  );
}
