import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Portal | Bamberg Digital",
  description:
    "Access your Bamberg Digital billing, invoices, and account management.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.bambergdigital.com/portal" },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
