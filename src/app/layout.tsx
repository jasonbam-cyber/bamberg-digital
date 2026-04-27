import type { Metadata } from "next";
import { Inter, Montserrat, Fraunces, Caveat, JetBrains_Mono } from "next/font/google";
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

// Editorial serif for warm, distinctive headlines
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Handwritten script for Jason's signature
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Monospace for Builder Workshop labels and technical accents
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bamberg Digital | AI-Powered SEO Audits & Lead Generation",
  description:
    "Bamberg Digital uses AI to find the customers your competitors miss. SEO audits, verified lead generation, and marketing automation for small businesses nationwide.",
  keywords:
    "digital marketing agency sacramento, web design sacramento, SEO services sacramento, social media marketing sacramento, lead generation, AI marketing automation, small business website design, branding sacramento, content creation, AI consulting",
  metadataBase: new URL("https://bambergdigital.com"),
  openGraph: {
    title: "Bamberg Digital — We find the customers your competitors miss.",
    description:
      "AI-powered SEO audits, verified lead generation, and marketing automation for small businesses. Start with a free SEO audit.",
    url: "https://bambergdigital.com",
    siteName: "Bamberg Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://bambergdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bamberg Digital — AI-Powered Marketing for Small Businesses",
      },
    ],
  },
  alternates: {
    canonical: "https://bambergdigital.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamberg Digital — AI-Powered SEO & Lead Generation",
    description:
      "SEO audits, verified leads, and marketing automation for small businesses. Start free.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Bamberg Digital",
              url: "https://bambergdigital.com",
              email: "hello@bambergdigital.com",
              telephone: "+19169077782",
              description:
                "Sacramento's AI-powered digital marketing agency. Website design, SEO, social media, lead generation, branding, content creation, and AI consulting for small businesses nationwide.",
              founder: {
                "@type": "Person",
                name: "Jason Bamberg",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Sacramento" },
                { "@type": "City", name: "Elk Grove" },
                { "@type": "City", name: "Folsom" },
                { "@type": "City", name: "Roseville" },
                { "@type": "City", name: "Rancho Cordova" },
                { "@type": "Country", name: "United States" },
              ],
              serviceType: [
                "Website Design",
                "SEO Services",
                "Social Media Marketing",
                "Lead Generation",
                "Content Creation",
                "Digital Marketing Strategy",
                "Brand Identity Design",
                "AI & Automation Consulting",
                "Marketing Automation",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${fraunces.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
