import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

const industryContent: Record<
  string,
  {
    headline: string;
    sub: string;
    cta: string;
    imgKeyword: string;
    about: string;
  }
> = {
  restaurant: {
    headline: "Where Every Bite Tells a Story",
    sub: "Family-owned since 1994. Fresh ingredients, handcrafted flavors, and a table always waiting for you.",
    cta: "Reserve a Table",
    imgKeyword: "restaurant,dining,food",
    about:
      "We've been serving Sacramento families for over three decades. Every dish is prepared from scratch using locally sourced ingredients. Come hungry, leave happy.",
  },
  cafe: {
    headline: "Your Morning, Perfected",
    sub: "Specialty coffee, house-made pastries, and a cozy corner that feels like yours.",
    cta: "Order for Pickup",
    imgKeyword: "coffee,cafe,espresso",
    about:
      "Single-origin beans, crafted by baristas who care. Whether you want a quick espresso or a slow morning with your laptop, we've got your spot.",
  },
  bar: {
    headline: "Where the Night Gets Interesting",
    sub: "Craft cocktails, curated spirits, and an atmosphere built for the best evenings of your life.",
    cta: "Reserve VIP Table",
    imgKeyword: "bar,cocktail,lounge",
    about:
      "Our mixologists have trained across three continents. Every cocktail on our menu tells a story — and we pour generously.",
  },
  gym: {
    headline: "Built Different. Train Different.",
    sub: "State-of-the-art equipment, expert trainers, and a community that pushes you to your best.",
    cta: "Start Free Trial",
    imgKeyword: "gym,fitness,workout",
    about:
      "50,000 sq ft of premium training space. Group classes, one-on-one coaching, and recovery amenities under one roof.",
  },
  trainer: {
    headline: "Your Transformation Starts Here",
    sub: "Personalized programs, real accountability, and results that stick — not just for 90 days.",
    cta: "Book Free Consultation",
    imgKeyword: "fitness,training,transformation",
    about:
      "Over 500 clients transformed. Every program is built around your body, your goals, and your schedule — zero generic plans.",
  },
  church: {
    headline: "A Community Built on Grace",
    sub: "You belong here. Come as you are, grow together, and find your purpose.",
    cta: "Plan Your Visit",
    imgKeyword: "church,community,faith",
    about:
      "We gather every Sunday at 9am and 11am. Our doors are open to everyone regardless of where you are on your spiritual journey.",
  },
  nonprofit: {
    headline: "Change Starts with One Decision",
    sub: "Join thousands of supporters helping us build a more equitable Sacramento — one family at a time.",
    cta: "Donate Today",
    imgKeyword: "community,volunteer,nonprofit",
    about:
      "Founded in 2008, we've served over 12,000 families in the Sacramento region. Your support goes directly to programs that create lasting change.",
  },
  consultant: {
    headline: "Strategy That Actually Works",
    sub: "We've helped 200+ businesses double revenue, cut costs, and build systems that run without you.",
    cta: "Book Discovery Call",
    imgKeyword: "business,strategy,consulting",
    about:
      "We don't sell advice — we partner in outcomes. Our engagements average a 3.2x ROI within 12 months. Let's find yours.",
  },
  videographer: {
    headline: "Your Story, Cinematic",
    sub: "Commercial, wedding, brand films — we frame every shot to move people and drive action.",
    cta: "View Reel",
    imgKeyword: "videography,film,cinema",
    about:
      "Award-winning production team with credits across brand campaigns, documentaries, and feature films. Based in Sacramento, shooting everywhere.",
  },
  musician: {
    headline: "Hear Something Real",
    sub: "Original music, live performances, and a sound that you won't find anywhere else.",
    cta: "Stream Now",
    imgKeyword: "music,band,concert,performance",
    about:
      "Touring since 2016. Three studio albums, 400+ live shows, and a fanbase that keeps growing. Come see us live — it's different in person.",
  },
  travel: {
    headline: "The World Is Waiting",
    sub: "Custom itineraries, insider access, and journeys crafted around what you actually want to experience.",
    cta: "Start Planning",
    imgKeyword: "travel,destination,landscape",
    about:
      "We don't book trips — we design experiences. Every itinerary is hand-crafted by travel specialists who've been there personally.",
  },
};

const fallback = {
  headline: "Built for Your Industry. Ready for Your Customers.",
  sub: "A modern, conversion-focused website that captures leads and builds trust from the first visit.",
  cta: "Get Started",
  imgKeyword: "business,professional,modern",
  about:
    "We bring deep industry expertise and modern design together to build websites that don't just look good — they generate real business results.",
};

export default function HeroLayout({ industry }: { industry: CatItem }) {
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(12px)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          {industry.name}
        </span>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {["Services", "About", "Gallery", "Contact"].map((l) => (
            <span
              key={l}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              {l}
            </span>
          ))}
          <span
            style={{
              background: accent,
              color: "#fff",
              padding: "0.45rem 1.25rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {c.cta}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop`}
          alt={industry.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div style={{ position: "relative", padding: "0 3rem", maxWidth: 700 }}>
          <div
            style={{
              display: "inline-block",
              background: accent,
              color: "#fff",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.3rem 0.8rem",
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            {industry.vibe}
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 1.25rem",
            }}
          >
            {c.headline}
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              margin: "0 0 2rem",
              maxWidth: 540,
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
                padding: "0.9rem 2.25rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              {c.cta}
            </button>
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "0.9rem 2.25rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section style={{ background: accent, padding: "1.5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {industry.features.map((f) => (
            <div
              key={f}
              style={{
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1rem" }}>✓</span> {f}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery row */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "0.75rem",
            }}
          >
            Gallery
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              color: "#111",
            }}
          >
            See It For Yourself
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "0.75rem",
              height: 420,
            }}
          >
            <img
              src={`https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&fit=crop`}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <img
                src={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop`}
                alt=""
                style={{ flex: 1, width: "100%", objectFit: "cover" }}
              />
              <img
                src={`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&fit=crop`}
                alt=""
                style={{ flex: 1, width: "100%", objectFit: "cover" }}
              />
            </div>
            <img
              src={`https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80&fit=crop`}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: "#f8f8f5", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "0.75rem",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "2.25rem",
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
                color: "#111",
              }}
            >
              Why We Do What We Do
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#444",
                marginBottom: "2rem",
              }}
            >
              {c.about}
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <div
                  style={{ fontWeight: 900, fontSize: "2rem", color: accent }}
                >
                  12+
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Years
                </div>
              </div>
              <div>
                <div
                  style={{ fontWeight: 900, fontSize: "2rem", color: accent }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Clients
                </div>
              </div>
              <div>
                <div
                  style={{ fontWeight: 900, fontSize: "2rem", color: accent }}
                >
                  4.9★
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Rating
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80&fit=crop"
            alt="About"
            style={{ width: "100%", height: 400, objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Reviews
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "2.25rem",
              letterSpacing: "-0.025em",
              marginBottom: "3rem",
              textAlign: "center",
              color: "#111",
            }}
          >
            What Our Clients Say
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {[
              {
                name: "Sarah M.",
                text: "Absolutely the best experience. Highly recommend to anyone looking for quality and professionalism.",
                stars: 5,
              },
              {
                name: "James T.",
                text: "We've been coming here for years. The team is incredible and the results speak for themselves.",
                stars: 5,
              },
              {
                name: "Rachel K.",
                text: "Couldn't be happier. From start to finish, everything was handled with care and expertise.",
                stars: 5,
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  background: "#f8f8f5",
                  padding: "2rem",
                  borderLeft: `4px solid ${accent}`,
                }}
              >
                <div
                  style={{
                    color: accent,
                    fontSize: "1.2rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {"★".repeat(r.stars)}
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#444",
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#111",
                  }}
                >
                  {r.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: accent,
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            marginBottom: "1rem",
          }}
        >
          Ready to Experience the Difference?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.1rem",
            marginBottom: "2.5rem",
          }}
        >
          {industry.tag}
        </p>
        <button
          style={{
            background: "#fff",
            color: accent,
            border: "none",
            padding: "1rem 2.75rem",
            fontSize: "1rem",
            fontWeight: 800,
            cursor: "pointer",
            letterSpacing: "0.03em",
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
          padding: "2.5rem 2rem",
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
