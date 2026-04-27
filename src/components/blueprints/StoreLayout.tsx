import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

type Product = {
  name: string;
  price: string;
  category: string;
  img: string;
  badge?: string;
};
type Collection = { title: string; copy: string; img: string; cta: string };

type Content = {
  headline: string;
  sub: string;
  cta: string;
  heroImg: string;
  collections: Collection[];
  products: Product[];
  storyTitle: string;
  story: string;
  shippingNote: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1000&q=85&auto=format&fit=crop`;

const industryContent: Record<string, Content> = {
  brewery: {
    headline: "Small Batch. Big Flavor. Open Daily.",
    sub: "12 rotating taps, full-pour flights, and a year-round taproom in the heart of Midtown Sacramento.",
    cta: "Shop Online",
    heroImg: u("photo-1567620832903-9fc6debc209f"),
    collections: [
      {
        title: "Year-Round",
        copy: "Six core beers, brewed continuously. Available in 4-packs.",
        img: u("photo-1535958636474-b021ee887b13"),
        cta: "Shop Core",
      },
      {
        title: "Limited Release",
        copy: "Small-batch barrel-aged and seasonal — when they're gone, they're gone.",
        img: u("photo-1571767454098-246b94fbcf70"),
        cta: "Shop Limited",
      },
      {
        title: "Merch & Gear",
        copy: "Tees, hoodies, glassware, hats — wear the brewery you love.",
        img: u("photo-1521577352947-9bb58764b69a"),
        cta: "Shop Merch",
      },
    ],
    products: [
      {
        name: "Sun Catcher Hazy IPA",
        price: "$18 · 4-pack",
        category: "Year-Round",
        img: u("photo-1568213816046-0ee1c42bd559"),
        badge: "Best Seller",
      },
      {
        name: "Capitol Lager",
        price: "$14 · 6-pack",
        category: "Year-Round",
        img: u("photo-1535958636474-b021ee887b13"),
      },
      {
        name: "Folsom Boulevard Brown",
        price: "$16 · 4-pack",
        category: "Year-Round",
        img: u("photo-1571767454098-246b94fbcf70"),
      },
      {
        name: "Bourbon Barrel Imperial Stout",
        price: "$28 · 750ml",
        category: "Limited",
        img: u("photo-1546638083-bd6f8c0a4be6"),
        badge: "Limited",
      },
      {
        name: "Peach Sour 'Sacramentum'",
        price: "$24 · 4-pack",
        category: "Limited",
        img: u("photo-1530992519585-cb147e92dd62"),
        badge: "New",
      },
      {
        name: "West Coast Pilsner",
        price: "$15 · 6-pack",
        category: "Year-Round",
        img: u("photo-1525035714053-fbe6ff7d1869"),
      },
      {
        name: "Logo Hoodie · Charcoal",
        price: "$58",
        category: "Merch",
        img: u("photo-1556821840-3a63f95609a7"),
      },
      {
        name: "Imperial Pint Glass · 2-pack",
        price: "$22",
        category: "Merch",
        img: u("photo-1521577352947-9bb58764b69a"),
      },
    ],
    storyTitle: "Brewing in Midtown since 2014",
    story:
      "We started with one 7-barrel system and a stubborn belief that Sacramento deserved a brewery worth walking to. Eleven years, four GABF medals, and 68 unique releases later — we're still that brewery.",
    shippingNote:
      "Ship anywhere in California. Free local pickup at our Midtown taproom. Must be 21+ to purchase. ID verified on delivery.",
  },
  boutique: {
    headline: "Curated. Considered. Wearable.",
    sub: "Independent designers, small-run pieces, and the kind of wardrobe staples that earn their place in your closet.",
    cta: "Shop New Arrivals",
    heroImg: u("photo-1490481651871-ab68de25d43d"),
    collections: [
      {
        title: "New Arrivals",
        copy: "This week's drop — limited inventory across 14 new pieces.",
        img: u("photo-1525507119028-ed4c629a60a3"),
        cta: "Shop New",
      },
      {
        title: "The Edit",
        copy: "Our most-loved pieces this season, refined and reordered for the new year.",
        img: u("photo-1483985988355-763728e1935b"),
        cta: "Shop The Edit",
      },
      {
        title: "Final Cuts",
        copy: "End-of-season — final pieces in remaining sizes, up to 40% off.",
        img: u("photo-1485518882345-15568b007407"),
        cta: "Shop Sale",
      },
    ],
    products: [
      {
        name: "The Olivia Linen Dress",
        price: "$248",
        category: "New",
        img: u("photo-1539109136881-3be0616acf4b"),
        badge: "New",
      },
      {
        name: "Handwoven Tote · Caramel",
        price: "$185",
        category: "Accessories",
        img: u("photo-1591561954557-26941169b49e"),
      },
      {
        name: "Wide-Leg Crepe Trouser",
        price: "$195",
        category: "Bottoms",
        img: u("photo-1473496169904-658ba7c44d8a"),
      },
      {
        name: "Cashmere Crew · Bone",
        price: "$235",
        category: "Knits",
        img: u("photo-1576566588028-4147f3842f27"),
        badge: "Best Seller",
      },
      {
        name: "Silk Slip Skirt",
        price: "$165",
        category: "New",
        img: u("photo-1496747611176-843222e1e57c"),
        badge: "New",
      },
      {
        name: "Gold Drop Earrings",
        price: "$78",
        category: "Jewelry",
        img: u("photo-1535632787350-4e68ef0ac584"),
      },
      {
        name: "Italian Leather Loafer",
        price: "$285",
        category: "Shoes",
        img: u("photo-1543163521-1bf539c55dd2"),
      },
      {
        name: "Oversized Wool Coat",
        price: "$395",
        category: "Outerwear",
        img: u("photo-1539533018447-63fcce2678e3"),
        badge: "Limited",
      },
    ],
    storyTitle: "Founded in Midtown, Loved Everywhere",
    story:
      "We opened our doors in 2018 with one mission — make great clothing easier to find for women who want to feel themselves, not the trend cycle. Every brand we carry is independent. Every piece is touched and considered.",
    shippingNote:
      "Free U.S. shipping on orders over $150. Free returns within 30 days. Same-day local pickup in Sacramento.",
  },
};

const fallback: Content = {
  headline: "Shop the Latest. Discover Something New.",
  sub: "A curated selection of seasonal arrivals and best-selling staples — built for the way you actually live.",
  cta: "Shop Now",
  heroImg: u("photo-1490481651871-ab68de25d43d"),
  collections: [
    {
      title: "New This Week",
      copy: "The latest drops — limited quantities, refreshed weekly.",
      img: u("photo-1525507119028-ed4c629a60a3"),
      cta: "Shop New",
    },
    {
      title: "Best Sellers",
      copy: "What our community keeps coming back for — all in stock.",
      img: u("photo-1483985988355-763728e1935b"),
      cta: "Shop Best Sellers",
    },
    {
      title: "Sale",
      copy: "Final pieces from the season at up to 40% off.",
      img: u("photo-1485518882345-15568b007407"),
      cta: "Shop Sale",
    },
  ],
  products: Array.from({ length: 8 }, (_, i) => ({
    name: `Product Name ${i + 1}`,
    price: `$${48 + i * 12}`,
    category: "Featured",
    img: u("photo-1490481651871-ab68de25d43d"),
  })),
  storyTitle: "Independent. Local. Quality-Obsessed.",
  story:
    "We started this shop with one goal — bring well-made products to people who care about what they buy. Every item is selected, photographed, and shipped from our Sacramento studio.",
  shippingNote: "Free U.S. shipping on orders over $100. 30-day easy returns.",
};

export default function StoreLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a1a",
        background: "#fafaf7",
        minHeight: "100vh",
      }}
    >
      {/* Announcement bar */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "0.6rem 1rem",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
        }}
      >
        {c.shippingNote}
      </div>

      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: 76,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
          className="store-nav-links"
        >
          {["Shop", "Collections", "About", "Find Us"].map((l) => (
            <span
              key={l}
              style={{
                color: "#333",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "1.45rem",
            letterSpacing: "0.02em",
            color: "#111",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {industry.name}
        </span>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{ fontSize: "0.85rem", color: "#333", cursor: "pointer" }}
          >
            Search
          </span>
          <span
            style={{ fontSize: "0.85rem", color: "#333", cursor: "pointer" }}
          >
            Account
          </span>
          <span
            style={{
              background: accent,
              color: "#fff",
              padding: "0.55rem 1.2rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.06em",
              borderRadius: 4,
            }}
          >
            Cart (0)
          </span>
        </div>
      </nav>

      {/* Hero — full bleed image */}
      <section
        style={{
          position: "relative",
          height: "85vh",
          minHeight: 540,
          overflow: "hidden",
        }}
      >
        <img
          src={c.heroImg}
          alt={industry.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 4rem",
          }}
          className="store-hero-text"
        >
          <div style={{ maxWidth: 620 }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fff",
                opacity: 0.85,
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              {industry.vibe}
            </span>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: "0 0 1.5rem",
              }}
            >
              {c.headline}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                margin: "0 0 2.25rem",
                maxWidth: 520,
              }}
            >
              {c.sub}
            </p>
            <button
              style={{
                background: "#fff",
                color: "#111",
                border: "none",
                padding: "1.1rem 2.5rem",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {c.cta} →
            </button>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section
        style={{
          background: "#fff",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: `repeat(${industry.features.length}, 1fr)`,
            gap: "2rem",
          }}
          className="store-features"
        >
          {industry.features.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  color: accent,
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
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
                Shop By Collection
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
                  letterSpacing: "-0.02em",
                  color: "#111",
                  margin: 0,
                }}
              >
                Find your favorite
              </h2>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#888" }}>
              View all collections →
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {c.collections.map((col) => (
              <div
                key={col.title}
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                className="store-collection"
              >
                <img
                  src={col.img}
                  alt={col.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  className="store-collection-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.75rem",
                    color: "#fff",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.65rem",
                      letterSpacing: "-0.01em",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {col.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.85)",
                      margin: "0 0 1rem",
                    }}
                  >
                    {col.copy}
                  </p>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #fff",
                      paddingBottom: 2,
                    }}
                  >
                    {col.cta} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
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
                Shop The Best
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
                  letterSpacing: "-0.02em",
                  color: "#111",
                  margin: 0,
                }}
              >
                Featured products
              </h2>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["All", "New", "Best Sellers", "Sale"].map((f, i) => (
                <span
                  key={f}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border:
                      i === 0
                        ? `1.5px solid ${accent}`
                        : "1px solid rgba(0,0,0,0.15)",
                    color: i === 0 ? accent : "#444",
                    cursor: "pointer",
                    borderRadius: 4,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {c.products.map((p) => (
              <div
                key={p.name}
                style={{
                  cursor: "pointer",
                  position: "relative",
                }}
                className="store-product"
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    background: "#f2f2ee",
                    marginBottom: "0.85rem",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    className="store-product-img"
                  />
                  {p.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background:
                          p.badge === "Limited" || p.badge === "New"
                            ? "#111"
                            : accent,
                        color: "#fff",
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.65rem",
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <button
                    className="store-quick-add"
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(8px)",
                      color: "#111",
                      border: "none",
                      padding: "0.7rem",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      opacity: 0,
                      transform: "translateY(8px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Quick Add
                  </button>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "0.3rem",
                    display: "block",
                  }}
                >
                  {p.category}
                </span>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#111",
                    margin: "0 0 0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#333",
                  }}
                >
                  {p.price}
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                padding: "1rem 2.5rem",
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Shop All Products →
            </button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0a0a0e",
          color: "#fff",
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
          className="store-story-grid"
        >
          <img
            src={u("photo-1556909114-f6e7ad7d3136")}
            alt="Our story"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              objectFit: "cover",
            }}
          />
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "1rem",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.85rem, 3.4vw, 2.65rem)",
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 1.5rem",
                lineHeight: 1.2,
              }}
            >
              {c.storyTitle}
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.82)",
                margin: "0 0 1.75rem",
              }}
            >
              {c.story}
            </p>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                cursor: "pointer",
                borderBottom: `1px solid ${accent}`,
                paddingBottom: 2,
              }}
            >
              Read the full story →
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#fff",
          textAlign: "center",
        }}
      >
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
          Stay In The Loop
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.65rem, 3.4vw, 2.5rem)",
            letterSpacing: "-0.02em",
            color: "#111",
            margin: "0 0 1rem",
          }}
        >
          New drops, restocks, and 10% off your first order.
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#666",
            margin: "0 auto 2rem",
            maxWidth: 460,
          }}
        >
          One email a week. No spam. Easy unsubscribe.
        </p>
        <div
          style={{
            display: "flex",
            maxWidth: 460,
            margin: "0 auto",
            gap: "0.5rem",
          }}
          className="store-newsletter"
        >
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              padding: "1rem 1.25rem",
              fontSize: "0.9rem",
              border: "1px solid rgba(0,0,0,0.15)",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <button
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              padding: "1rem 1.75rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0a0a0e",
          color: "rgba(255,255,255,0.55)",
          padding: "3rem 2rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "2.5rem",
          }}
          className="store-footer-grid"
        >
          <div>
            <span
              style={{
                fontFamily: "Georgia, serif",
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: 700,
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {industry.name}
            </span>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              {industry.tag}
            </p>
          </div>
          {[
            {
              title: "Shop",
              links: ["New", "Best Sellers", "Sale", "Gift Cards"],
            },
            { title: "Help", links: ["Shipping", "Returns", "FAQ", "Contact"] },
            {
              title: "Company",
              links: ["About", "Stockists", "Press", "Sustainability"],
            },
          ].map((g) => (
            <div key={g.title}>
              <h4
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  margin: "0 0 1rem",
                }}
              >
                {g.title}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {g.links.map((l) => (
                  <span
                    key={l}
                    style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
          }}
        >
          <span>&copy; 2026 {industry.name}. All rights reserved.</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            Built by Bamberg Digital · Sacramento Web Design
          </span>
        </div>
      </footer>

      <BackPill />

      <style>{`
        .store-collection:hover .store-collection-img { transform: scale(1.04); }
        .store-product:hover .store-product-img { transform: scale(1.05); }
        .store-product:hover .store-quick-add { opacity: 1; transform: translateY(0); }
        @media (max-width: 880px) {
          .store-hero-text { padding: 0 2rem !important; }
          .store-story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .store-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .store-features { grid-template-columns: 1fr 1fr !important; }
          .store-nav-links span:not(:first-child) { display: none; }
        }
        @media (max-width: 520px) {
          .store-features { grid-template-columns: 1fr !important; }
          .store-footer-grid { grid-template-columns: 1fr !important; }
          .store-newsletter { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
