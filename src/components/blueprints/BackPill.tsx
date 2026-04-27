import Link from "next/link";

export default function BackPill() {
  return (
    <Link
      href="/#blueprints"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 999,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#fff",
        textDecoration: "none",
        padding: "0.6rem 1.25rem",
        borderRadius: 999,
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        transition: "background 0.2s",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
      }}
    >
      ← Back to Bamberg Digital
    </Link>
  );
}
