import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

type LocSlot = { day: string; spot: string; address: string; hours: string };
type MenuItem = { name: string; price: string; desc: string };

type Content = {
  headline: string;
  sub: string;
  cta: string;
  locTitle: string;
  liveStatus: string;
  locations: LocSlot[];
  menuTitle: string;
  menu: MenuItem[];
  about: string;
  socialCta: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=85&auto=format&fit=crop`;

const industryContent: Record<string, Content> = {
  "food-truck": {
    headline: "Birria Tacos. On Wheels. Where You Are Today.",
    sub: "Slow-braised birria, hand-pressed tortillas, and consommé that'll ruin every other taco for you. Track us, tag us, eat with us.",
    cta: "Where Are We Today?",
    locTitle: "This Week's Stops",
    liveStatus: "Serving now · Fremont Park",
    locations: [
      {
        day: "Monday",
        spot: "Capitol Mall Lunch",
        address: "10th & L St · Sacramento",
        hours: "11:00 AM – 2:00 PM",
      },
      {
        day: "Tuesday",
        spot: "Fremont Park",
        address: "16th & P St · Sacramento",
        hours: "11:30 AM – 2:30 PM",
      },
      {
        day: "Wednesday",
        spot: "WAL Food Truck Mania",
        address: "1131 K St · Sacramento",
        hours: "5:00 PM – 9:00 PM",
      },
      {
        day: "Thursday",
        spot: "Sutter Health Park",
        address: "400 Ballpark Dr · West Sac",
        hours: "5:30 PM – 9:30 PM",
      },
      {
        day: "Friday",
        spot: "SacTown Brewing",
        address: "1827 Iron Point Rd · Folsom",
        hours: "5:00 PM – 10:00 PM",
      },
      {
        day: "Saturday",
        spot: "Midtown Farmers Market",
        address: "20th & J St · Sacramento",
        hours: "8:00 AM – 1:00 PM",
      },
      {
        day: "Sunday",
        spot: "Private events / Catering only",
        address: "Book us for your event →",
        hours: "Inquire",
      },
    ],
    menuTitle: "The Menu",
    menu: [
      {
        name: "Birria Quesatacos (3)",
        price: "$13",
        desc: "Slow-braised beef, melty Oaxaca, crispy pressed tortilla, side of consommé.",
      },
      {
        name: "Birria Ramen",
        price: "$15",
        desc: "Our consommé over noodles, soft egg, cilantro, lime, chile crisp. Comfort food.",
      },
      {
        name: "Quesabirria Burrito",
        price: "$14",
        desc: "Everything in the quesataco, wrapped, crisped, and ready to demolish.",
      },
      {
        name: "Mulitas (2)",
        price: "$12",
        desc: "Two-tortilla cheese-stuffed mulitas with pickled onion and salsa verde.",
      },
      {
        name: "Loaded Fries",
        price: "$11",
        desc: "Hand-cut fries, birria, queso, crema, salsa roja, cilantro, fresh radish.",
      },
      {
        name: "Mexican Coke",
        price: "$4",
        desc: "Glass bottle. Real cane sugar. The way it's supposed to be.",
      },
    ],
    about:
      "We started this truck in 2021 — two cousins, one recipe from our grandma in Tijuana, and a borrowed griddle. Three years later we've served over 80,000 tacos and we still hand-press every tortilla.",
    socialCta:
      "Follow @SacBirriaCo on Instagram for daily location updates, menu drops, and pop-up announcements.",
  },
  solar: {
    headline:
      "Solar That Pays for Itself in 7 Years. Built for Sacramento Sun.",
    sub: "Free design, transparent pricing, and a 25-year production guarantee. Most homes break even before year 8.",
    cta: "Get My Free Estimate",
    locTitle: "Service Areas",
    liveStatus: "Free site visits available this week",
    locations: [
      {
        day: "Sacramento",
        spot: "Downtown · Midtown · East Sac · Land Park",
        address: "All neighborhoods served",
        hours: "Same-week appointments",
      },
      {
        day: "Roseville / Rocklin",
        spot: "All Placer County",
        address: "Granite Bay · Loomis · Lincoln",
        hours: "Mon–Sat install windows",
      },
      {
        day: "Folsom / El Dorado Hills",
        spot: "El Dorado Hills · Cameron Park",
        address: "Custom-pitch roof specialists",
        hours: "Free shade analysis",
      },
      {
        day: "Elk Grove / Galt",
        spot: "South county service",
        address: "Battery storage available",
        hours: "Same-day quote turnaround",
      },
      {
        day: "Davis / Woodland",
        spot: "Yolo County",
        address: "Ag and rural property experience",
        hours: "Drone-survey included",
      },
      {
        day: "West Sac / Natomas",
        spot: "Greater region",
        address: "All single-family + townhomes",
        hours: "PG&E NEM 3.0 expert",
      },
      {
        day: "Out-of-area?",
        spot: "Call us — we may still serve you",
        address: "Custom commercial available statewide",
        hours: "(916) 555-SOLAR",
      },
    ],
    menuTitle: "What's Included",
    menu: [
      {
        name: "Free Site Survey",
        price: "$0",
        desc: "Drone roof scan, shade analysis, system design, and full quote — no obligation.",
      },
      {
        name: "Premium Panels",
        price: "Tier 1",
        desc: "REC Alpha or Q-Cell modules. 25-year product + 25-year production warranty.",
      },
      {
        name: "Battery Storage",
        price: "Add-On",
        desc: "Tesla Powerwall 3 or Enphase IQ Battery 5P — true blackout protection.",
      },
      {
        name: "EV Charger Install",
        price: "Bundle",
        desc: "Level 2 NEMA 14-50 or hardwired EVSE installed during the same project.",
      },
      {
        name: "Permits & Interconnection",
        price: "Included",
        desc: "We handle PG&E, SMUD, city permits, and HOA approvals start to finish.",
      },
      {
        name: "Monitoring App",
        price: "Lifetime",
        desc: "Track production, storage, and savings in real time on your phone.",
      },
    ],
    about:
      "We've been installing solar in the Sacramento region since 2014. Over 4,200 systems live on roofs from Davis to El Dorado Hills, and we handle every step in-house — no subcontracted installs, no surprise fees.",
    socialCta:
      "See real customer systems and live production data on Instagram @SacValleySolar.",
  },
};

const fallback: Content = {
  headline: "Find Us. Follow Us. Tag Us.",
  sub: "We move with our community — track our schedule, see today's location, and never miss a day.",
  cta: "See Today's Spot",
  locTitle: "This Week",
  liveStatus: "Live now",
  locations: [
    {
      day: "Monday",
      spot: "Spot A",
      address: "Address line",
      hours: "11:00 AM – 2:00 PM",
    },
    {
      day: "Tuesday",
      spot: "Spot B",
      address: "Address line",
      hours: "11:00 AM – 2:00 PM",
    },
    {
      day: "Wednesday",
      spot: "Spot C",
      address: "Address line",
      hours: "5:00 PM – 9:00 PM",
    },
    {
      day: "Thursday",
      spot: "Spot D",
      address: "Address line",
      hours: "5:00 PM – 9:00 PM",
    },
    {
      day: "Friday",
      spot: "Spot E",
      address: "Address line",
      hours: "5:00 PM – 10:00 PM",
    },
    {
      day: "Saturday",
      spot: "Spot F",
      address: "Address line",
      hours: "8:00 AM – 1:00 PM",
    },
    {
      day: "Sunday",
      spot: "Private bookings",
      address: "Inquire →",
      hours: "Inquire",
    },
  ],
  menuTitle: "Today's Menu",
  menu: [
    { name: "Item One", price: "$10", desc: "Description." },
    { name: "Item Two", price: "$12", desc: "Description." },
    { name: "Item Three", price: "$14", desc: "Description." },
    { name: "Item Four", price: "$8", desc: "Description." },
    { name: "Item Five", price: "$6", desc: "Description." },
    { name: "Item Six", price: "$4", desc: "Description." },
  ],
  about:
    "An independent local business, on the move, serving the Sacramento community since day one.",
  socialCta: "Follow us on Instagram for daily updates.",
};

export default function LocalLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;
  const isFood = industry.id === "food-truck";

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a1a",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(20,20,22,0.95)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 12px ${accent}`,
              animation: "pulse 1.6s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#fff",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            {industry.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
            alignItems: "center",
          }}
          className="local-nav-links"
        >
          {["Where", "Menu", "Catering", "Follow"].map((l) => (
            <span
              key={l}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {l}
            </span>
          ))}
          <span
            style={{
              background: accent,
              color: "#fff",
              padding: "0.55rem 1.3rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {c.cta}
          </span>
        </div>
      </nav>

      {/* Hero — bold + live status */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "6rem 2rem 3rem",
          overflow: "hidden",
          background: "#0a0a0e",
        }}
      >
        <img
          src={
            isFood
              ? u("photo-1565299585323-38d6b0865b47")
              : u("photo-1509391366360-2e959784a276")
          }
          alt={industry.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55,
          }}
        />
        {/* gradient + grain */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,14,0.85) 0%, rgba(10,10,14,0.5) 50%, rgba(10,10,14,0.95) 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            mixBlendMode: "overlay",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Live status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.5rem 1rem",
              borderRadius: 999,
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: accent,
                boxShadow: `0 0 12px ${accent}`,
                animation: "pulse 1.4s ease-in-out infinite",
              }}
            />
            {c.liveStatus}
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              color: "#fff",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 0 1.5rem",
              textTransform: "uppercase",
            }}
          >
            {c.headline}
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              margin: "0 0 2.25rem",
              maxWidth: 620,
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
                padding: "1.1rem 2.5rem",
                fontSize: "0.9rem",
                fontWeight: 800,
                cursor: "pointer",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: `0 18px 40px ${accent}80`,
              }}
            >
              {c.cta} →
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "1.1rem 2.5rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backdropFilter: "blur(8px)",
              }}
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "drift 2.4s ease-in-out infinite",
          }}
        >
          <span>Schedule</span>
          <span style={{ fontSize: "1rem" }}>↓</span>
        </div>
      </section>

      {/* Where we are — Schedule */}
      <section style={{ padding: "5rem 2rem", background: "#fafaf7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: "0.75rem",
                }}
              >
                {c.locTitle}
              </p>
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(1.85rem, 4vw, 3rem)",
                  letterSpacing: "-0.025em",
                  color: "#111",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                Find us this week
              </h2>
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#666",
                maxWidth: 380,
                lineHeight: 1.5,
              }}
            >
              Updated weekly. Subscribe to text alerts to know the moment we
              move.
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1rem",
            }}
          >
            {c.locations.map((loc, idx) => (
              <div
                key={loc.day}
                style={{
                  background: "#fff",
                  border:
                    idx === 0
                      ? `2px solid ${accent}`
                      : "1px solid rgba(0,0,0,0.08)",
                  padding: "1.5rem",
                  position: "relative",
                  borderRadius: 8,
                  boxShadow: idx === 0 ? `0 16px 32px ${accent}30` : "none",
                }}
              >
                {idx === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: -10,
                      left: 16,
                      background: accent,
                      color: "#fff",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.65rem",
                    }}
                  >
                    Today
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  {loc.day}
                </span>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "#111",
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {loc.spot}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#555",
                    margin: "0 0 1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {loc.address}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    background: idx === 0 ? accent : "rgba(0,0,0,0.06)",
                    color: idx === 0 ? "#fff" : "#333",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    padding: "0.4rem 0.8rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {loc.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section
        style={{
          padding: "2rem",
          background: "#111",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: `repeat(${industry.features.length}, 1fr)`,
            gap: "2rem",
          }}
          className="local-features"
        >
          {industry.features.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.4,
              }}
            >
              <span
                style={{ color: accent, fontSize: "1.4rem", flexShrink: 0 }}
              >
                ★
              </span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            {c.menuTitle}
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              letterSpacing: "-0.025em",
              color: "#111",
              margin: "0 0 3rem",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            What's on offer
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {c.menu.map((m) => (
              <div
                key={m.name}
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  padding: "1.5rem",
                  borderLeft: `4px solid ${accent}`,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#111",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m.name}
                  </h3>
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "1.1rem",
                      color: accent,
                    }}
                  >
                    {m.price}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Social */}
      <section
        style={{
          padding: "5rem 2rem",
          background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.1)",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
          }}
          className="local-about-grid"
        >
          <div>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                opacity: 0.9,
                display: "block",
                marginBottom: "1rem",
              }}
            >
              The Story
            </span>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
                letterSpacing: "-0.025em",
                color: "#fff",
                margin: "0 0 1.25rem",
                lineHeight: 1.15,
                textTransform: "uppercase",
              }}
            >
              How we got here
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.92)",
                margin: 0,
              }}
            >
              {c.about}
            </p>
          </div>
          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(16px)",
              padding: "2rem",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#fff",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Stay close.
            </span>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
                margin: "0 0 1.5rem",
              }}
            >
              {c.socialCta}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {["Instagram", "TikTok", "Text Alerts"].map((s) => (
                <span
                  key={s}
                  style={{
                    background: "#fff",
                    color: accent,
                    padding: "0.7rem 1.2rem",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                  }}
                >
                  {s} →
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#0a0a0e",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            margin: "0 0 1rem",
            textTransform: "uppercase",
          }}
        >
          See you out there.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.05rem",
            margin: "0 0 2rem",
          }}
        >
          {industry.tag}
        </p>
        <button
          style={{
            background: accent,
            color: "#fff",
            border: "none",
            padding: "1.2rem 3rem",
            fontSize: "1rem",
            fontWeight: 900,
            cursor: "pointer",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            boxShadow: `0 16px 36px ${accent}66`,
          }}
        >
          {c.cta}
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#000",
          color: "rgba(255,255,255,0.5)",
          padding: "2.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontWeight: 900,
            color: "#fff",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
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

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.25); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.7; }
          50% { transform: translate(-50%, 8px); opacity: 1; }
        }
        @media (max-width: 880px) {
          .local-about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .local-features { grid-template-columns: 1fr 1fr !important; }
          .local-nav-links span:not(:last-child) { display: none; }
        }
        @media (max-width: 520px) {
          .local-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
