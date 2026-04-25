import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jason Bamberg | Bamberg Digital",
  description:
    "Meet Jason Bamberg, founder of Bamberg Digital. Sacramento's AI-powered digital agency helping small businesses win online.",
  alternates: { canonical: "https://www.bambergdigital.com/about" },
  openGraph: {
    title: "About Jason Bamberg | Bamberg Digital",
    description:
      "Meet Jason Bamberg, founder of Bamberg Digital. Sacramento's AI-powered digital agency helping small businesses win online.",
    url: "https://www.bambergdigital.com/about",
    siteName: "Bamberg Digital",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
