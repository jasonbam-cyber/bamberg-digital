import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bamberg Digital — Start a Project",
  description:
    "Ready to build something? Tell us about your business and we'll put together a proposal — no obligation, no pitch deck. Free 30-min consultation.",
  alternates: { canonical: "https://www.bambergdigital.com/contact" },
  openGraph: {
    title: "Contact Bamberg Digital — Start a Project",
    description:
      "Ready to build something? Tell us about your business and we'll put together a proposal.",
    url: "https://www.bambergdigital.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="/contact" />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Free 30-min consultation
            </div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Start a project
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell us about your business and we&apos;ll put together a proposal
              — no obligation, no pitch deck.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Prefer to call?{" "}
              <a
                href="tel:+19169077782"
                className="text-blue-600 hover:underline font-medium"
              >
                (916) 907-7782
              </a>
              {" · "}
              <a
                href="mailto:hello@bambergdigital.com"
                className="text-blue-600 hover:underline"
              >
                hello@bambergdigital.com
              </a>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm service="general" ctaLabel="Send my project brief →" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
