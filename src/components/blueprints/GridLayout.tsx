import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

const industryContent: Record<
  string,
  {
    headline: string;
    sub: string;
    cta: string;
    cards: Array<{ title: string; price: string; detail: string; img: string }>;
    about: string;
  }
> = {
  realtor: {
    headline: "Find Your Perfect Home in Sacramento",
    sub: "MLS-connected listings, neighborhood expertise, and a negotiator who works harder than the market.",
    cta: "Search Listings",
    cards: [
      {
        title: "4BR · Land Park",
        price: "$645,000",
        detail: "2,340 sq ft · Updated kitchen · Corner lot",
        img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&fit=crop",
      },
      {
        title: "3BR · Midtown Condo",
        price: "$389,000",
        detail: "1,180 sq ft · Rooftop access · Walk score 97",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop",
      },
      {
        title: "5BR · Elk Grove",
        price: "$780,000",
        detail: "3,100 sq ft · Pool · 3-car garage",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&fit=crop",
      },
      {
        title: "2BR · East Sac",
        price: "$445,000",
        detail: "1,020 sq ft · Craftsman charm · Large yard",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
      },
      {
        title: "Luxury Estate · Granite Bay",
        price: "$1,250,000",
        detail: "4,800 sq ft · Views · Chef kitchen",
        img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&fit=crop",
      },
      {
        title: "Townhome · Natomas",
        price: "$325,000",
        detail: "1,560 sq ft · End unit · 2-car garage",
        img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80&fit=crop",
      },
    ],
    about:
      "With 18 years in Sacramento real estate, I've closed over 600 transactions and know every neighborhood, school district, and street. Whether you're buying your first home or your fifth investment property, I deliver results.",
  },
  "auto-dealer": {
    headline: "Sacramento's Trusted Auto Source",
    sub: "Pre-owned vehicles inspected to 170-point standards. Financing for every credit profile. Zero-pressure buying.",
    cta: "Browse Inventory",
    cards: [
      {
        title: "2023 Honda Accord Sport",
        price: "$28,495",
        detail: "18,200 mi · One owner · Clean Carfax",
        img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80&fit=crop",
      },
      {
        title: "2022 Toyota RAV4 XLE",
        price: "$31,900",
        detail: "22,400 mi · AWD · Apple CarPlay",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&fit=crop",
      },
      {
        title: "2021 Ford F-150 XLT",
        price: "$42,500",
        detail: "34,100 mi · 4x4 · Tow package",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
      },
      {
        title: "2023 Tesla Model 3",
        price: "$36,800",
        detail: "9,800 mi · Long Range · Autopilot",
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80&fit=crop",
      },
      {
        title: "2022 BMW 3-Series",
        price: "$39,995",
        detail: "26,500 mi · Sport pkg · Heated seats",
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&fit=crop",
      },
      {
        title: "2021 Chevy Silverado 1500",
        price: "$44,200",
        detail: "41,000 mi · Crew cab · Z71 Off-Road",
        img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&fit=crop",
      },
    ],
    about:
      "Capital Auto Group has served Sacramento drivers since 1998. Every vehicle undergoes a comprehensive 170-point inspection, comes with a 3-month/3,000-mile powertrain warranty, and is priced to move.",
  },
  sports: {
    headline: "Sacramento's Premier Sports Community",
    sub: "Youth leagues, adult divisions, tournaments, and training camps — competitive sports for every level.",
    cta: "Register Now",
    cards: [
      {
        title: "Youth Soccer · Spring",
        price: "$129/season",
        detail: "Ages 6–14 · 10-week season · Includes jersey",
        img: "https://images.unsplash.com/photo-1536122985607-4fe00b283652?w=600&q=80&fit=crop",
      },
      {
        title: "Adult Flag Football",
        price: "$95/person",
        detail: "Co-ed leagues · Sunday games · 8-week season",
        img: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&q=80&fit=crop",
      },
      {
        title: "3v3 Basketball Tournament",
        price: "$150/team",
        detail: "May 18–19 · Sacramento Sports Complex",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80&fit=crop",
      },
      {
        title: "Travel Soccer Program",
        price: "$425/season",
        detail: "Competitive play · NorCal Premier League",
        img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80&fit=crop",
      },
      {
        title: "Pickleball Club · Adults",
        price: "$45/month",
        detail: "All levels · Indoor courts · Open play",
        img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80&fit=crop",
      },
      {
        title: "Summer Baseball Camp",
        price: "$299/week",
        detail: "Ages 8–16 · June–August · Daily sessions",
        img: "https://images.unsplash.com/photo-1529768167801-9173d898f533?w=600&q=80&fit=crop",
      },
    ],
    about:
      "Sacramento Sports League has connected athletes across every age and ability level since 2003. We operate 14 leagues, 8 tournament series, and year-round camps for over 4,200 participants annually.",
  },
};

const fallback = {
  headline: "Browse Our Complete Inventory",
  sub: "Curated selection, transparent pricing, and a team ready to help you find exactly what you need.",
  cta: "View All",
  cards: [
    {
      title: "Featured Option A",
      price: "$299",
      detail: "Premium quality · Available now",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&fit=crop",
    },
    {
      title: "Featured Option B",
      price: "$449",
      detail: "Best seller · Limited availability",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop",
    },
    {
      title: "Featured Option C",
      price: "$199",
      detail: "Great value · Ships fast",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&fit=crop",
    },
    {
      title: "Featured Option D",
      price: "$599",
      detail: "Professional grade · Top rated",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    },
    {
      title: "Featured Option E",
      price: "$349",
      detail: "New arrival · Popular choice",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&fit=crop",
    },
    {
      title: "Featured Option F",
      price: "$149",
      detail: "Entry level · Easy to start",
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80&fit=crop",
    },
  ],
  about:
    "We bring together the best selection in Sacramento with transparent pricing and no hidden fees. Our team of specialists is here to help you make the right decision.",
};

export default function GridLayout({ industry }: { industry: CatItem }) {
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
      {/* Nav */}
      <nav
        style={{
          background: "#111",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span
          style={{
            fontWeight: 900,
            fontSize: "1.15rem",
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          {industry.name}
        </span>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {["Browse", "Search", "Financing", "Contact"].map((l) => (
            <span
              key={l}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              {l}
            </span>
          ))}
          <button
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              padding: "0.5rem 1.25rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: 3,
            }}
          >
            {c.cta}
          </button>
        </div>
      </nav>

      {/* Hero search bar */}
      <div
        style={{
          background: `linear-gradient(135deg, #111 0%, #222 100%)`,
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: accent,
            color: "#fff",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.3rem 0.8rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            borderRadius: 2,
          }}
        >
          {industry.vibe}
        </div>
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          {c.headline}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.05rem",
            marginBottom: "2.5rem",
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            lineHeight: 1.65,
          }}
        >
          {c.sub}
        </p>
        {/* Search bar mock */}
        <div
          style={{
            display: "flex",
            maxWidth: 640,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <input
            type="text"
            placeholder="Search by location, price, or type..."
            style={{
              flex: 1,
              border: "none",
              padding: "1rem 1.25rem",
              fontSize: "0.9rem",
              outline: "none",
              color: "#333",
              background: "transparent",
            }}
            readOnly
          />
          <button
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              padding: "1rem 2rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div
        style={{
          background: "#f4f4f4",
          borderBottom: "1px solid #e0e0e0",
          padding: "0.85rem 2rem",
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#555",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Filter:
        </span>
        {[
          "All",
          "Under $400K",
          "$400K–$700K",
          "$700K+",
          "New Listings",
          "Open House",
        ].map((f) => (
          <button
            key={f}
            style={{
              background: f === "All" ? accent : "transparent",
              color: f === "All" ? "#fff" : "#555",
              border: `1px solid ${f === "All" ? accent : "#ccc"}`,
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              cursor: "pointer",
              borderRadius: 20,
              fontWeight: f === "All" ? 700 : 400,
            }}
          >
            {f}
          </button>
        ))}
        <span
          style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#888" }}
        >
          {c.cards.length} results
        </span>
      </div>

      {/* Card grid */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "2.5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {c.cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.25s, transform 0.25s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 220,
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {i === 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: accent,
                      color: "#fff",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.6rem",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: accent,
                      whiteSpace: "nowrap",
                      marginLeft: "0.5rem",
                    }}
                  >
                    {card.price}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#666",
                    margin: "0 0 1rem",
                  }}
                >
                  {card.detail}
                </p>
                <button
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: accent,
                    border: `1.5px solid ${accent}`,
                    padding: "0.55rem",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    borderRadius: 3,
                  }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About strip */}
      <section
        style={{
          background: "#f8f8f5",
          padding: "5rem 2rem",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
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
              About Us
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "2rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
                color: "#111",
                lineHeight: 1.2,
              }}
            >
              Sacramento&apos;s Trusted {industry.name} Experts
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#555",
                marginBottom: "2rem",
              }}
            >
              {c.about}
            </p>
            <div style={{ display: "flex", gap: "2.5rem" }}>
              {[
                { n: "18+", l: "Years" },
                { n: "600+", l: "Deals Closed" },
                { n: "4.9★", l: "Avg Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      color: accent,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#777",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop"
            alt="About"
            style={{
              width: "100%",
              height: 360,
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: accent,
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Ready to Get Started?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          {industry.tag}
        </p>
        <button
          style={{
            background: "#fff",
            color: accent,
            border: "none",
            padding: "0.9rem 2.5rem",
            fontSize: "0.95rem",
            fontWeight: 800,
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          {c.cta}
        </button>
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
