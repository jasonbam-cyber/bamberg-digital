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
    images: [
      {
        url: "https://www.bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bamberg Digital — Sacramento's AI-Powered Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jason Bamberg | Bamberg Digital",
    description:
      "Meet Jason Bamberg, founder of Bamberg Digital. Sacramento's AI-powered digital agency helping small businesses win online.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
