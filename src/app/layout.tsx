import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bamberg Digital | Websites & AI Automation for Local Businesses",
  description:
    "We build professional websites, optimize your Google presence, and set up AI-powered automation so you never miss a customer — even when you're closed. Serving Loomis, Roseville & Sacramento.",
  keywords:
    "web design Loomis, website Roseville, local business marketing Sacramento, AI receptionist, AI automation, Google Business Profile, digital agency Placer County",
  metadataBase: new URL("https://bambergdigital.com"),
  openGraph: {
    title: "Bamberg Digital — Websites & AI for Local Businesses",
    description:
      "We build websites, optimize Google, and set up AI automation so you never miss a customer. Serving Loomis, Roseville & Sacramento. No contracts. Results in 7 days.",
    url: "https://bambergdigital.com",
    siteName: "Bamberg Digital",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamberg Digital — Websites & AI for Local Businesses",
    description:
      "Professional websites & AI automation for local businesses. No contracts. Results in 7 days.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
