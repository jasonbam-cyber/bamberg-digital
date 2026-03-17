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
    "We help Loomis, Roseville & Sacramento businesses get found online with professional websites, Google optimization, and AI-powered automation. More customers. Less hassle.",
  keywords:
    "web design Loomis, website Roseville, local business marketing Sacramento, AI automation, Google Business Profile, digital presence",
  openGraph: {
    title: "Bamberg Digital | Get Found Online",
    description:
      "Professional websites & AI automation for local businesses in Loomis, Roseville & Sacramento.",
    type: "website",
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
