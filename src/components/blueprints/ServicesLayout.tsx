import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

const industryContent: Record<
  string,
  {
    headline: string;
    sub: string;
    phone: string;
    emergency: boolean;
    tiers: Array<{
      name: string;
      price: string;
      items: string[];
      highlight?: boolean;
    }>;
    about: string;
  }
> = {
  plumber: {
    headline: "Sacramento's #1 Plumber — Available 24/7",
    sub: "Licensed, insured, and background-checked. Upfront pricing with no surprise charges — ever.",
    phone: "(916) 555-PIPE",
    emergency: true,
    tiers: [
      {
        name: "Service Call",
        price: "$89",
        items: [
          "Drain clearing",
          "Faucet repair",
          "Toilet repair",
          "Same-day availability",
          "1-year parts warranty",
        ],
      },
      {
        name: "Mid-Range Jobs",
        price: "From $295",
        items: [
          "Water heater service",
          "Garbage disposal install",
          "Shut-off valve replacement",
          "Pressure regulator",
          "Free estimate",
        ],
        highlight: true,
      },
      {
        name: "Major Projects",
        price: "Custom Quote",
        items: [
          "Full repiping",
          "Sewer line repair",
          "Water heater replacement",
          "Bathroom remodel plumbing",
          "Free on-site estimate",
        ],
      },
    ],
    about:
      "Cascade Plumbing has served Sacramento homeowners since 2004. Our licensed master plumbers arrive on time, explain every repair in plain language, and guarantee all labor for 12 months.",
  },
  electrician: {
    headline: "Safe, Code-Compliant Electrical Work Done Right",
    sub: "Licensed C-10 electrical contractor serving Sacramento County. Residential, commercial, and industrial.",
    phone: "(916) 555-VOLT",
    emergency: true,
    tiers: [
      {
        name: "Residential",
        price: "From $125/hr",
        items: [
          "Outlet & switch repair",
          "Panel inspection",
          "Ceiling fan install",
          "EV charger install",
          "GFCI upgrades",
        ],
      },
      {
        name: "Panel & Upgrade",
        price: "From $1,800",
        items: [
          "200A panel upgrade",
          "Service entrance replacement",
          "Sub-panel installation",
          "Whole-home surge protection",
          "Permit & inspection",
        ],
        highlight: true,
      },
      {
        name: "Commercial",
        price: "Custom Quote",
        items: [
          "Tenant improvement wiring",
          "LED retrofit lighting",
          "3-phase systems",
          "Code compliance audits",
          "Emergency backup power",
        ],
      },
    ],
    about:
      "Bright Line Electric is a family-owned C-10 licensed electrical contractor. We pull every permit, follow every code, and back all work with a 5-year labor warranty. Safety is not a checkbox for us.",
  },
  hvac: {
    headline: "Keep Your Home Comfortable Year-Round",
    sub: "HVAC installation, repair, and maintenance by certified technicians. Financing available.",
    phone: "(916) 555-COOL",
    emergency: true,
    tiers: [
      {
        name: "Maintenance Plan",
        price: "$14.99/mo",
        items: [
          "2 tune-ups per year",
          "Priority scheduling",
          "15% repair discount",
          "Filter delivery",
          "No overtime charges",
        ],
      },
      {
        name: "Repair Service",
        price: "From $149",
        items: [
          "Same-day diagnostics",
          "All major brands",
          "Upfront pricing",
          "12-month repair warranty",
          "Senior & military discount",
        ],
        highlight: true,
      },
      {
        name: "System Replacement",
        price: "From $4,900",
        items: [
          "Energy Star systems",
          "Free load calculation",
          "Professional installation",
          "10-year equipment warranty",
          "0% financing 18 months",
        ],
      },
    ],
    about:
      "Sierra Climate Solutions has installed and serviced HVAC systems across Sacramento since 1998. Our NATE-certified technicians are trained on every major brand and carry a fully stocked service fleet.",
  },
  roofing: {
    headline: "Sacramento Roofing — Storm Ready, Every Season",
    sub: "Licensed C-39 roofer with 25+ years experience. Insurance claims specialists. Financing available.",
    phone: "(916) 555-ROOF",
    emergency: true,
    tiers: [
      {
        name: "Inspection & Repair",
        price: "From $350",
        items: [
          "Full roof inspection",
          "Leak diagnosis",
          "Flashing repair",
          "Vent & chimney sealing",
          "Photo documentation",
        ],
      },
      {
        name: "Partial Replacement",
        price: "From $3,500",
        items: [
          "Section replacement",
          "Code-compliant materials",
          "Manufacturer warranty",
          "Debris cleanup",
          "Insurance work accepted",
        ],
        highlight: true,
      },
      {
        name: "Full Replacement",
        price: "Free Estimate",
        items: [
          "All materials & labor",
          "30-year shingle options",
          "Solar-ready underlayment",
          "Full permit & inspection",
          "Lifetime labor warranty",
        ],
      },
    ],
    about:
      "Peak Roofing Group has replaced over 3,200 roofs across Sacramento County. We're an Owens Corning Platinum Preferred Contractor and work directly with every major insurance company to streamline your claim.",
  },
  "auto-repair": {
    headline: "Honest Auto Repair. No Surprises.",
    sub: "ASE-certified technicians, digital inspection reports, and a loaner car program for major services.",
    phone: "(916) 555-AUTO",
    emergency: false,
    tiers: [
      {
        name: "Routine Service",
        price: "From $49",
        items: [
          "Oil change & filter",
          "Tire rotation",
          "Multi-point inspection",
          "Fluid top-off",
          "Same-day availability",
        ],
      },
      {
        name: "Mid-Range Service",
        price: "From $199",
        items: [
          "Brake service",
          "Battery replacement",
          "Air conditioning service",
          "Alignment",
          "Free loaner car",
        ],
        highlight: true,
      },
      {
        name: "Major Repair",
        price: "Free Estimate",
        items: [
          "Engine & transmission",
          "Timing belt/chain",
          "Suspension & steering",
          "Exhaust system",
          "3-year/36K warranty",
        ],
      },
    ],
    about:
      "Honest Wrench Auto Repair has been the go-to shop for Sacramento drivers since 2009. All technicians are ASE-certified, every repair comes with a digital inspection report, and we never recommend unnecessary work.",
  },
  accountant: {
    headline: "Strategic Tax & Accounting for Sacramento Businesses",
    sub: "CPA-led firm specializing in small business accounting, tax planning, and financial strategy.",
    phone: "(916) 555-CPA1",
    emergency: false,
    tiers: [
      {
        name: "Starter",
        price: "$199/mo",
        items: [
          "Monthly bookkeeping",
          "Quarterly reports",
          "Annual tax return",
          "Email support",
          "QBO setup",
        ],
      },
      {
        name: "Growth",
        price: "$499/mo",
        items: [
          "Full-service bookkeeping",
          "Payroll processing",
          "Tax planning sessions",
          "Priority response",
          "CFO advisory (2hr/mo)",
        ],
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        items: [
          "Fractional CFO",
          "Multi-entity returns",
          "Audit representation",
          "M&A support",
          "Dedicated CPA team",
        ],
      },
    ],
    about:
      "Pinnacle CPA Group is a boutique accounting firm founded by a Big 4 alumni. We serve over 180 Sacramento-area businesses with strategic tax planning, clean books, and financial insight that drives real decisions.",
  },
  insurance: {
    headline: "Protection Built Around Your Life",
    sub: "Independent agency representing 40+ carriers. Unbiased advice, competitive rates, local service.",
    phone: "(916) 555-SAFE",
    emergency: false,
    tiers: [
      {
        name: "Personal Lines",
        price: "Free Quote",
        items: [
          "Auto insurance",
          "Homeowners / renters",
          "Life & disability",
          "Umbrella coverage",
          "Multi-policy discount",
        ],
      },
      {
        name: "Business Insurance",
        price: "Free Quote",
        items: [
          "General liability",
          "Commercial property",
          "Workers compensation",
          "Professional liability",
          "Business owner policy (BOP)",
        ],
        highlight: true,
      },
      {
        name: "Specialty Coverage",
        price: "Custom Quote",
        items: [
          "High-value homes",
          "Classic & collector cars",
          "Contractor bonds",
          "Cyber liability",
          "Key person life",
        ],
      },
    ],
    about:
      "Guardian Coast Insurance has protected Sacramento families and businesses for 22 years. As an independent agency, we shop 40+ carriers to find you the best coverage at the right price — not just what pays us the most commission.",
  },
  tutoring: {
    headline: "Unlock Every Student's Potential",
    sub: "Certified tutors in every subject for K-12 and college prep. In-person and online sessions available.",
    phone: "(916) 555-TUTR",
    emergency: false,
    tiers: [
      {
        name: "Single Sessions",
        price: "$65/hr",
        items: [
          "1-on-1 tutoring",
          "All subjects K-12",
          "Online or in-person",
          "Flexible scheduling",
          "Progress notes",
        ],
      },
      {
        name: "Monthly Plan",
        price: "$249/mo",
        items: [
          "8 hours monthly",
          "Dedicated tutor",
          "Weekly progress report",
          "Parent check-ins",
          "SAT/ACT prep available",
        ],
        highlight: true,
      },
      {
        name: "Intensive Prep",
        price: "$899/course",
        items: [
          "SAT/ACT prep course",
          "8-week program",
          "Practice tests",
          "College essay coaching",
          "Score guarantee",
        ],
      },
    ],
    about:
      "Elevate Tutoring connects Sacramento students with credentialed teachers and subject experts. Our tutors average 8 years of classroom experience and maintain a 94% satisfaction rate among students and parents.",
  },
  staffing: {
    headline: "The Right People. Right Now.",
    sub: "Temp, temp-to-hire, and direct placement staffing for Sacramento's top employers.",
    phone: "(916) 555-HIRE",
    emergency: false,
    tiers: [
      {
        name: "Temp Staffing",
        price: "No upfront cost",
        items: [
          "24-hour placements",
          "Pre-screened candidates",
          "Payroll handled",
          "Workers comp included",
          "Flexible contracts",
        ],
      },
      {
        name: "Direct Hire",
        price: "15–20% of salary",
        items: [
          "Executive search",
          "Full background checks",
          "Skills assessments",
          "90-day guarantee",
          "Industry specialists",
        ],
        highlight: true,
      },
      {
        name: "Managed Staffing",
        price: "Custom contract",
        items: [
          "Dedicated account team",
          "Volume hiring programs",
          "Onboarding support",
          "Performance tracking",
          "Preferred pricing",
        ],
      },
    ],
    about:
      "Apex Staffing Solutions has placed over 14,000 professionals with Sacramento-area employers since 2001. We specialize in administrative, technical, healthcare, and industrial placements.",
  },
};

const fallback: (typeof industryContent)[string] = {
  headline: "Professional Services You Can Count On",
  sub: "Experienced, licensed, and backed by years of proven results in Sacramento.",
  phone: "(916) 555-0100",
  emergency: false,
  tiers: [
    {
      name: "Basic",
      price: "From $99",
      items: [
        "Core service included",
        "Licensed professionals",
        "Quality guarantee",
        "Fast turnaround",
        "Free estimate",
      ],
    },
    {
      name: "Standard",
      price: "From $249",
      items: [
        "Everything in Basic",
        "Priority scheduling",
        "Extended warranty",
        "Dedicated contact",
        "Monthly reporting",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "Custom Quote",
      items: [
        "Everything in Standard",
        "24/7 availability",
        "On-site management",
        "Custom solutions",
        "Annual contract discount",
      ],
    },
  ],
  about:
    "We've built our reputation on honest pricing, expert workmanship, and showing up when we say we will. Thousands of Sacramento customers trust us — and we earn that trust every single job.",
};

export default function ServicesLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a2e",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Emergency bar */}
      {c.emergency && (
        <div
          style={{
            background: accent,
            color: "#fff",
            textAlign: "center",
            padding: "0.6rem 1rem",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          🚨 24/7 Emergency Service Available — Call {c.phone}
        </div>
      )}

      {/* Nav */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 900,
              fontSize: "1.15rem",
              color: "#111",
              letterSpacing: "-0.02em",
            }}
          >
            {industry.name}
          </div>
          <div
            style={{
              fontSize: "0.6rem",
              color: accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Sacramento, CA · Licensed & Insured
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Services", "Gallery", "Reviews", "About"].map((l) => (
            <span
              key={l}
              style={{ color: "#555", fontSize: "0.875rem", cursor: "pointer" }}
            >
              {l}
            </span>
          ))}
          <a
            href={`tel:${c.phone}`}
            style={{
              background: accent,
              color: "#fff",
              textDecoration: "none",
              padding: "0.55rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 800,
              borderRadius: 3,
            }}
          >
            {c.phone}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, #111 0%, #1a1a2e 100%)`,
          padding: "5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 70% 50%, ${accent}20 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {["Licensed", "Insured", "Bonded", "5-Star Rated"].map((b) => (
                <span
                  key={b}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: "0.65rem",
                    padding: "0.3rem 0.65rem",
                    borderRadius: 2,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  ✓ {b}
                </span>
              ))}
            </div>
            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              {c.headline}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              {c.sub}
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={`tel:${c.phone}`}
                style={{
                  background: accent,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "0.9rem 2rem",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  borderRadius: 3,
                }}
              >
                Call {c.phone}
              </a>
              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "0.9rem 2rem",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  borderRadius: 3,
                }}
              >
                Get Free Estimate
              </button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fit=crop"
            alt={industry.name}
            style={{
              width: "100%",
              height: 360,
              objectFit: "cover",
              borderRadius: 4,
              border: `2px solid ${accent}40`,
            }}
          />
        </div>
      </div>

      {/* Pricing tiers */}
      <section style={{ padding: "5rem 2rem", background: "#f9f9f7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: accent,
              textAlign: "center",
              marginBottom: "0.75rem",
            }}
          >
            Transparent Pricing
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "2.25rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#111",
            }}
          >
            Service Packages
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {c.tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlight ? accent : "#fff",
                  border: tier.highlight
                    ? `2px solid ${accent}`
                    : "1px solid #e5e7eb",
                  borderRadius: 6,
                  padding: "2rem",
                  position: "relative",
                  boxShadow: tier.highlight
                    ? `0 8px 32px ${accent}30`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                      color: accent,
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      padding: "0.25rem 0.75rem",
                      borderRadius: 20,
                      border: `1.5px solid ${accent}`,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: tier.highlight ? "#fff" : "#111",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.name}
                </h3>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    color: tier.highlight ? "#fff" : accent,
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.price}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.875rem",
                        color: tier.highlight
                          ? "rgba(255,255,255,0.9)"
                          : "#444",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          color: tier.highlight ? "#fff" : accent,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    background: tier.highlight ? "#fff" : accent,
                    color: tier.highlight ? accent : "#fff",
                    border: "none",
                    padding: "0.8rem",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    borderRadius: 4,
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / trust */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
              color: "#111",
              textAlign: "center",
            }}
          >
            What Sets Us Apart
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {industry.features.map((f) => (
              <div
                key={f}
                style={{
                  background: `${accent}0d`,
                  border: `1px solid ${accent}25`,
                  borderRadius: 6,
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: accent,
                    color: "#fff",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#333",
                    lineHeight: 1.55,
                  }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: "#f9f9f7", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "0.75rem",
            }}
          >
            Our Story
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#555",
              fontStyle: "italic",
              borderLeft: `4px solid ${accent}`,
              paddingLeft: "1.5rem",
              textAlign: "left",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            &ldquo;{c.about}&rdquo;
          </p>
        </div>
      </section>

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
        <span style={{ fontWeight: 800, color: "#fff" }}>{industry.name}</span>
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
