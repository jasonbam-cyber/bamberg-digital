import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

const industryContent: Record<
  string,
  {
    headline: string;
    sub: string;
    cta: string;
    imgKeyword: string;
    services: Array<{ name: string; desc: string }>;
    about: string;
  }
> = {
  dental: {
    headline: "Modern Family Dentistry in Sacramento",
    sub: "Comprehensive dental care for every stage of life — from first checkups to full smile transformations.",
    cta: "Book Appointment",
    imgKeyword: "dental,smile,dentist",
    services: [
      {
        name: "Preventive Care",
        desc: "Cleanings, exams, X-rays, and fluoride treatments to keep your smile healthy year-round.",
      },
      {
        name: "Cosmetic Dentistry",
        desc: "Veneers, whitening, bonding, and smile makeovers that give you the confidence to show up fully.",
      },
      {
        name: "Orthodontics",
        desc: "Traditional braces and Invisalign clear aligners for teens and adults.",
      },
      {
        name: "Implants & Restorations",
        desc: "Crowns, bridges, and dental implants that look, feel, and function like natural teeth.",
      },
      {
        name: "Emergency Dentistry",
        desc: "Same-day appointments for toothaches, broken teeth, and dental urgencies.",
      },
    ],
    about:
      "Dr. Emily Chen and her team have served Sacramento families for over 15 years. We combine the latest technology with a gentle, patient-centered approach so every visit is comfortable and effective.",
  },
  medical: {
    headline: "Exceptional Primary Care, Close to Home",
    sub: "Board-certified physicians delivering personalized, evidence-based care for your whole family.",
    cta: "Schedule Visit",
    imgKeyword: "medical,doctor,healthcare",
    services: [
      {
        name: "Primary Care",
        desc: "Annual physicals, chronic disease management, and preventive screenings.",
      },
      {
        name: "Telehealth",
        desc: "Video visits for follow-ups, minor concerns, and prescription refills — from anywhere.",
      },
      {
        name: "Pediatrics",
        desc: "Well-child visits, immunizations, and sick care for children of all ages.",
      },
      {
        name: "Women's Health",
        desc: "Comprehensive gynecological care, prenatal guidance, and wellness exams.",
      },
      {
        name: "Lab & Diagnostics",
        desc: "On-site lab testing with same-day results for faster care decisions.",
      },
    ],
    about:
      "Riverside Medical Group has been a trusted healthcare partner in Sacramento since 2001. Our team of 8 physicians and 12 nurses delivers care that combines clinical excellence with genuine human connection.",
  },
  vet: {
    headline: "Compassionate Care for Every Pet in Your Family",
    sub: "Full-service veterinary medicine — wellness, surgery, dentistry, and urgent care — all under one roof.",
    cta: "Book Appointment",
    imgKeyword: "veterinary,pet,dog,cat",
    services: [
      {
        name: "Wellness & Vaccines",
        desc: "Annual exams, core vaccinations, and parasite prevention tailored to your pet's lifestyle.",
      },
      {
        name: "Surgery",
        desc: "Soft tissue and orthopedic procedures with board-certified anesthesia protocols.",
      },
      {
        name: "Dental Care",
        desc: "Professional cleanings, extractions, and oral health assessments for dogs and cats.",
      },
      {
        name: "Diagnostics",
        desc: "In-house lab, digital X-ray, and ultrasound for fast, accurate diagnoses.",
      },
      {
        name: "Urgent Care",
        desc: "Extended evening hours and same-day sick visits — no emergency room wait times.",
      },
    ],
    about:
      "Valley Veterinary Care is a family-owned practice dedicated to treating your pets like our own. Dr. Marcus Webb and his team bring 20 years of compassionate, evidence-based medicine to every appointment.",
  },
  lawyer: {
    headline: "Aggressive Representation. Proven Results.",
    sub: "Sacramento's trusted legal team for personal injury, family law, and business disputes.",
    cta: "Free Case Review",
    imgKeyword: "law,legal,attorney,justice",
    services: [
      {
        name: "Personal Injury",
        desc: "Car accidents, slip & fall, wrongful death — we fight for maximum compensation.",
      },
      {
        name: "Family Law",
        desc: "Divorce, custody, adoption, and domestic relations handled with clarity and care.",
      },
      {
        name: "Business Law",
        desc: "Contracts, LLCs, disputes, and compliance for Sacramento businesses of every size.",
      },
      {
        name: "Real Estate",
        desc: "Transactions, disputes, landlord/tenant law, and commercial leasing.",
      },
      {
        name: "Criminal Defense",
        desc: "DUI, misdemeanors, felonies — your rights defended from day one.",
      },
    ],
    about:
      "The Caldwell Law Group has recovered over $47 million for Sacramento clients since 2008. Our founding partner has been named a Top 40 Under 40 Trial Lawyer three consecutive years.",
  },
  therapist: {
    headline: "A Safe Space to Heal, Grow, and Thrive",
    sub: "Individual, couples, and family therapy delivered with warmth, expertise, and genuine care.",
    cta: "Book Free Consult",
    imgKeyword: "therapy,counseling,wellness,mindfulness",
    services: [
      {
        name: "Individual Therapy",
        desc: "Anxiety, depression, trauma, grief, and life transitions addressed through evidence-based approaches.",
      },
      {
        name: "Couples Counseling",
        desc: "Rebuild communication, resolve conflict, and deepen your connection.",
      },
      {
        name: "Family Therapy",
        desc: "Heal family dynamics and navigate life changes together with professional guidance.",
      },
      {
        name: "EMDR & Trauma",
        desc: "Specialized trauma therapy for PTSD, complex trauma, and adverse childhood experiences.",
      },
      {
        name: "Telehealth Sessions",
        desc: "Secure video therapy from the privacy of your own home — available statewide.",
      },
    ],
    about:
      "Dr. Priya Anand, LMFT, has helped over 800 individuals reclaim their wellbeing over 14 years of practice. She specializes in anxiety, trauma recovery, and relationship repair using a warm, collaborative approach.",
  },
  financial: {
    headline: "Your Financial Future, Planned with Precision",
    sub: "Fee-only wealth management and retirement planning for Sacramento professionals and families.",
    cta: "Schedule Consultation",
    imgKeyword: "financial,wealth,planning,advisor",
    services: [
      {
        name: "Retirement Planning",
        desc: "401(k) optimization, IRA strategy, and income projections so you retire on your terms.",
      },
      {
        name: "Investment Management",
        desc: "Diversified, tax-efficient portfolios built around your risk tolerance and goals.",
      },
      {
        name: "Tax Planning",
        desc: "Proactive strategies to reduce your tax burden every year — not just at filing time.",
      },
      {
        name: "Estate Planning",
        desc: "Wills, trusts, beneficiary designations, and legacy planning for every stage of life.",
      },
      {
        name: "Business Financial Planning",
        desc: "Cash flow, succession, and exit strategies for business owners.",
      },
    ],
    about:
      "Summit Wealth Advisors is a fee-only registered investment advisor managing over $180 million in assets for Sacramento-area clients. We earn no commissions — our only incentive is your success.",
  },
  medical_fallback: {
    headline: "Professional Care You Can Trust",
    sub: "Expert services, experienced practitioners, and outcomes that matter to your life.",
    cta: "Get Started",
    imgKeyword: "professional,office,team",
    services: [
      {
        name: "Core Services",
        desc: "Comprehensive support tailored to your specific needs and circumstances.",
      },
      {
        name: "Consultations",
        desc: "One-on-one expert sessions designed around your goals and timeline.",
      },
      {
        name: "Ongoing Support",
        desc: "We stay with you through the entire process — not just the first appointment.",
      },
      {
        name: "Specialized Care",
        desc: "Advanced expertise when your situation demands more than the basics.",
      },
      {
        name: "Emergency Access",
        desc: "Reach us when it matters most. We prioritize urgent needs.",
      },
    ],
    about:
      "Our team brings decades of combined experience and a genuine commitment to client outcomes. We've served thousands of clients across the Sacramento region with consistent 5-star results.",
  },
  childcare: {
    headline: "Where Little Minds Grow Big",
    sub: "A nurturing, stimulating environment where children ages 6 weeks to 5 years thrive every day.",
    cta: "Schedule a Tour",
    imgKeyword: "childcare,children,daycare,learning",
    services: [
      {
        name: "Infant Care (6wk–12mo)",
        desc: "Low ratios, attentive caregivers, and daily developmental activities for your newborn.",
      },
      {
        name: "Toddler Program (1–2yr)",
        desc: "Language, motor skills, and social development through guided play and exploration.",
      },
      {
        name: "Preschool (3–5yr)",
        desc: "Kindergarten-readiness curriculum with STEM, arts, and literacy foundations.",
      },
      {
        name: "Full-Day & Part-Day Options",
        desc: "Flexible scheduling to fit every family's work schedule and budget.",
      },
      {
        name: "Enrichment Activities",
        desc: "Music, yoga, Spanish, and art classes included in our weekly schedule.",
      },
    ],
    about:
      "Bright Futures Learning Center has been trusted by Sacramento parents since 2007. Our credentialed teachers maintain a 4:1 child-to-teacher ratio and hold current CPR and first aid certifications.",
  },
};

const fallback = industryContent.medical_fallback;

export default function SidebarLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;

  const navItems = ["Services", "About", "Team", "Contact"];

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a2e",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Top nav */}
      <nav
        style={{
          background: "#fff",
          borderBottom: `3px solid ${accent}`,
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#111",
              letterSpacing: "-0.02em",
            }}
          >
            {industry.name}
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              color: accent,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {industry.vibe}
          </div>
        </div>
        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          {navItems.map((l) => (
            <span
              key={l}
              style={{ color: "#555", fontSize: "0.875rem", cursor: "pointer" }}
            >
              {l}
            </span>
          ))}
          <button
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              padding: "0.55rem 1.4rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            {c.cta}
          </button>
        </div>
      </nav>

      {/* Hero banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accent}18 0%, ${accent}08 100%)`,
          borderBottom: `1px solid ${accent}25`,
          padding: "4rem 2rem 3rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: accent,
              color: "#fff",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.3rem 0.75rem",
              fontWeight: 700,
              marginBottom: "1rem",
              borderRadius: 2,
            }}
          >
            {industry.cat.toUpperCase()} PROFESSIONALS
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#111",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              margin: "0 0 1rem",
              maxWidth: 700,
            }}
          >
            {c.headline}
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#555",
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: "2rem",
            }}
          >
            {c.sub}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              style={{
                background: accent,
                color: "#fff",
                border: "none",
                padding: "0.85rem 2rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                cursor: "pointer",
                borderRadius: 4,
              }}
            >
              {c.cta}
            </button>
            <button
              style={{
                background: "transparent",
                color: accent,
                border: `1.5px solid ${accent}`,
                padding: "0.85rem 2rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                borderRadius: 4,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main layout: sidebar + content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "2rem",
          padding: "3rem 2rem",
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <aside>
          {/* Quick info card */}
          <div
            style={{
              background: "#f8f9fa",
              border: `1px solid #e5e7eb`,
              borderTop: `4px solid ${accent}`,
              padding: "1.5rem",
              marginBottom: "1.5rem",
              borderRadius: 4,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                color: "#111",
              }}
            >
              Office Hours
            </h3>
            {[
              ["Mon – Fri", "8:00am – 6:00pm"],
              ["Saturday", "9:00am – 2:00pm"],
              ["Sunday", "Closed"],
            ].map(([day, hours]) => (
              <div
                key={day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  padding: "0.35rem 0",
                  borderBottom: "1px solid #eee",
                  color: "#444",
                }}
              >
                <span style={{ fontWeight: 600 }}>{day}</span>
                <span>{hours}</span>
              </div>
            ))}
            <button
              style={{
                width: "100%",
                marginTop: "1.25rem",
                background: accent,
                color: "#fff",
                border: "none",
                padding: "0.75rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                borderRadius: 4,
              }}
            >
              {c.cta}
            </button>
          </div>

          {/* Insurance / trust badges */}
          <div
            style={{
              background: "#f8f9fa",
              border: "1px solid #e5e7eb",
              padding: "1.5rem",
              borderRadius: 4,
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                color: "#111",
              }}
            >
              Accepted Plans
            </h3>
            {[
              "Blue Cross / Blue Shield",
              "Aetna",
              "Cigna",
              "United Healthcare",
              "Delta Dental",
              "Medi-Cal",
            ].map((ins) => (
              <div
                key={ins}
                style={{
                  fontSize: "0.78rem",
                  color: "#555",
                  padding: "0.3rem 0",
                  borderBottom: "1px solid #eee",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span style={{ color: accent }}>✓</span> {ins}
              </div>
            ))}
          </div>

          {/* Contact sidebar */}
          <div
            style={{
              background: accent,
              color: "#fff",
              padding: "1.5rem",
              borderRadius: 4,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </h3>
            <div style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>
              <div>📍 1234 Oak Avenue, Suite 200</div>
              <div>Sacramento, CA 95814</div>
              <div style={{ marginTop: "0.5rem" }}>📞 (916) 555-0100</div>
              <div style={{ marginTop: "0.25rem" }}>
                ✉️ hello@{industry.id}.com
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main>
          {/* Services */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.75rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                color: "#111",
                borderBottom: `2px solid ${accent}`,
                paddingBottom: "0.75rem",
              }}
            >
              Our Services
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {c.services.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: "#f8f9fa",
                    border: "1px solid #e5e7eb",
                    borderLeft: `4px solid ${accent}`,
                    padding: "1.25rem 1.5rem",
                    borderRadius: "0 4px 4px 0",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#555",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* About section */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.75rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                color: "#111",
                borderBottom: `2px solid ${accent}`,
                paddingBottom: "0.75rem",
              }}
            >
              About Our Practice
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#444",
                  margin: 0,
                }}
              >
                {c.about}
              </p>
              <img
                src={`https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80&fit=crop`}
                alt="Our team"
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
            </div>
          </section>

          {/* Features */}
          <section>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.75rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                color: "#111",
                borderBottom: `2px solid ${accent}`,
                paddingBottom: "0.75rem",
              }}
            >
              Why Patients Choose Us
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {industry.features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    background: `${accent}10`,
                    padding: "1rem 1.25rem",
                    borderRadius: 4,
                    border: `1px solid ${accent}25`,
                  }}
                >
                  <span
                    style={{
                      color: accent,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      lineHeight: 1,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#333",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#111",
          color: "rgba(255,255,255,0.5)",
          padding: "2rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontWeight: 800, color: "#fff", fontSize: "1rem" }}>
          {industry.name}
        </span>
        <span style={{ fontSize: "0.8rem" }}>
          &copy; 2026 {industry.name}. All rights reserved.
        </span>
        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
          Built by Bamberg Digital · Sacramento Web Design
        </span>
      </footer>

      <BackPill />
    </div>
  );
}
