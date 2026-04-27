import type { Metadata } from "next";
import UnsubscribeClient from "./UnsubscribeClient";

export const metadata: Metadata = {
  title: "Unsubscribe | Bamberg Digital",
  description: "Manage your email preferences for Bamberg Digital newsletter.",
  robots: { index: false, follow: false },
};

export default function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; email?: string }>;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#0a0e16",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-fraunces, serif)",
            fontStyle: "italic",
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Unsubscribe
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          We&apos;ll remove your email from our newsletter. You can resubscribe
          any time.
        </p>
        <UnsubscribeClient searchParamsPromise={searchParams} />
        <p
          style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.4)",
            marginTop: "3rem",
          }}
        >
          Bamberg Digital · Sacramento, CA · hello@bambergdigital.com
        </p>
      </div>
    </main>
  );
}
