"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Theme tokens (nodpod clean/spa aesthetic) ─────────────────────────── */
const WHITE = "#FFFFFF";
const OFF_WHITE = "#FAFAF9";
const WARM_GRAY = "#F5F5F4";
const TEXT_PRIMARY = "#5D5E5D";
const TEXT_SECONDARY = "#75787B";
const TEXT_LIGHT = "#A3A5A8";
const SAGE = "#A2B0A5";
const BEIGE = "#EBEaE6";
const BEIGE_DARK = "#C5B9AB";
const MAUVE = "#EADCDE";
const BORDER = "rgba(0,0,0,0.06)";
const ACCENT_GREEN = "#7B9E87";

/* ─── CDN assets ─────────────────────────────────────────────────────────── */
const CDN = "https://nodpod.com/cdn/shop";
const IMGS = {
  logo: `${CDN}/files/logo-v2.svg?v=1726976705`,
  heroBg: `${CDN}/files/Resort_Web_Banners_mobile.png?v=1773245245`,
  heroDark: `${CDN}/files/Midnight_Web_Banners_Mobile.png?v=1769014584`,
  allure: `${CDN}/files/allure3-new.svg?v=1743884874`,
  nb: `${CDN}/files/nb-logo-en.svg?v=1744512231`,
  nymag: `https://cdn.shopify.com/s/files/1/0253/2982/7939/files/new-york-mag-logo.svg?v=1727230418`,
};

/* ─── Product catalog ────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, name: "Nodpod Sleep Mask", price: 38,
    desc: "The original weighted sleep mask",
    img: `${CDN}/products/Wisteria.jpg?v=1739677254&width=600`,
    colors: ["Slate", "Blush", "Sage", "Midnight", "Clay"], tag: "Best Seller",
    rating: 4.9, reviews: 2847,
  },
  {
    id: 2, name: "Mineralized Silk\u2122 Sleep Mask", price: 68,
    desc: "Silk-infused weighted eye mask",
    img: `${CDN}/files/CopyofMask_Sage2.png?v=1706778858&width=600`,
    colors: ["Pearl", "Onyx", "Rose", "Sage"], tag: "Premium",
    rating: 4.8, reviews: 1203,
  },
  {
    id: 3, name: "Nodpod BODY", price: 92,
    desc: "Full-body weighted comfort pod",
    img: `${CDN}/files/DSC00837_7a10fb04-d25f-4f32-9f28-e7ba454971aa.jpg?v=1707854911&width=600`,
    colors: ["Oat", "Slate", "Sage", "Midnight"], tag: "",
    rating: 4.7, reviews: 856,
  },
  {
    id: 4, name: "Teddy Sleep Mask", price: 42,
    desc: "Ultra-soft teddy fleece mask",
    img: `${CDN}/files/image71.png?v=1760465998&width=600`,
    colors: ["Cream", "Cocoa"], tag: "Cozy",
    rating: 4.9, reviews: 1542,
  },
  {
    id: 5, name: "Teddy Body", price: 102,
    desc: "Plush weighted body pod",
    img: `${CDN}/files/Nodpod_TeddyBody_TeddyBear_01_6999a985-c5e6-4fc6-a402-3ea2c342356f.png?v=1761748039&width=600`,
    colors: ["Cream"], tag: "",
    rating: 4.8, reviews: 432,
  },
  {
    id: 6, name: "Mineralized Silk\u2122 Pillowcase", price: 102,
    desc: "Silk pillowcase for better skin & hair",
    img: `${CDN}/files/PEARL_PC_PDP_02.png?v=1757624739&width=600`,
    colors: ["Pearl", "Sage"], tag: "",
    rating: 4.9, reviews: 674,
  },
  {
    id: 7, name: "Silk Scrunchies", price: 35,
    desc: "Set of silk hair scrunchies",
    img: `${CDN}/files/Scrunchie_all_colors_BIRD_02.png?v=1759438810&width=600`,
    colors: ["Assorted"], tag: "Gift Idea",
    rating: 4.7, reviews: 389,
  },
  {
    id: 8, name: "Silk Laundry Wash", price: 27,
    desc: "Gentle formula for silk & delicates",
    img: `${CDN}/files/Silk_Wash_at_Laundromat_x_Nodpod_1832.jpg?v=1758900260&width=600`,
    colors: [], tag: "Add-on",
    rating: 4.6, reviews: 218,
  },
];

const BUNDLES = [
  { name: "Sleep Ritual Bundle", items: [1, 6], discount: 15, save: 21, desc: "Sleep Mask + Silk Pillowcase" },
  { name: "Ultimate Rest Bundle", items: [1, 3], discount: 12, save: 16, desc: "Sleep Mask + BODY Weighted Pod" },
  { name: "Silk Luxury Bundle", items: [2, 6, 7], discount: 10, save: 20, desc: "Silk Mask + Pillowcase + Scrunchies" },
];

const UPSELLS = [
  { id: 8, reason: "Protect your silk -- gentle wash formula", price: 27 },
  { id: 7, reason: "Complete the set -- silk scrunchies", price: 35 },
  { id: 4, reason: "Try our coziest mask", price: 42 },
];

const FREE_SHIP = 50;

/* ─── Star rating display ────────────────────────────────────────────────── */
function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= Math.round(rating) ? TEXT_PRIMARY : "none"} stroke={TEXT_PRIMARY} strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: 11, color: TEXT_SECONDARY }}>{count}</span>
    </div>
  );
}

/* ─── Shipping progress bar ──────────────────────────────────────────────── */
function ShippingBar({ total }: { total: number }) {
  const pct = Math.min((total / FREE_SHIP) * 100, 100);
  const remaining = Math.max(FREE_SHIP - total, 0);
  return (
    <div style={{ background: OFF_WHITE, borderRadius: 8, padding: "10px 14px", marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: TEXT_SECONDARY, marginBottom: 7 }}>
        {remaining > 0 ? (
          <span style={{ color: TEXT_PRIMARY }}>
            <strong>${remaining.toFixed(0)}</strong> away from <strong>free shipping</strong>
          </span>
        ) : (
          <span style={{ color: ACCENT_GREEN, fontWeight: 500 }}>Free shipping unlocked</span>
        )}
        <span>${FREE_SHIP}</span>
      </div>
      <div style={{ background: "#E8E8E6", borderRadius: 99, height: 4, overflow: "hidden" }}>
        <div style={{
          width: `${pct}%`, height: "100%",
          background: pct >= 100 ? ACCENT_GREEN : SAGE,
          borderRadius: 99, transition: "width 0.55s ease",
        }} />
      </div>
    </div>
  );
}

/* ─── Cart drawer ────────────────────────────────────────────────────────── */
type CartItem = { product: typeof PRODUCTS[number]; qty: number; color: string };

function CartDrawer({
  cart, isOpen, onClose, onRemove, onQty, onAddUpsell,
}: {
  cart: CartItem[]; isOpen: boolean; onClose: () => void;
  onRemove: (id: number) => void; onQty: (id: number, qty: number) => void;
  onAddUpsell: (id: number) => void;
}) {
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const inCartIds = cart.map((c) => c.product.id);
  const availUpsells = UPSELLS.filter((u) => !inCartIds.includes(u.id));

  return (
    <>
      {isOpen && (
        <div onClick={onClose} style={{
          position: "fixed", inset: 0, zIndex: 998,
          background: "rgba(0,0,0,0.25)",
          transition: "opacity 0.3s",
        }} />
      )}

      <div style={{
        position: "fixed", top: 0, right: isOpen ? 0 : -440,
        width: 420, maxWidth: "93vw", height: "100vh", zIndex: 999,
        background: WHITE,
        boxShadow: isOpen ? "-4px 0 40px rgba(0,0,0,0.08)" : "none",
        transition: "right 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
        fontFamily: "'Inter',sans-serif",
      }}>

        {/* Header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: `1px solid ${BORDER}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h3 style={{ margin: 0, fontSize: 15, color: TEXT_PRIMARY, fontWeight: 400, letterSpacing: "0.06rem" }}>
            Your Cart ({cart.reduce((s, c) => s + c.qty, 0)})
          </h3>
          <button onClick={onClose} style={{
            color: TEXT_SECONDARY, border: "none", background: "none",
            fontSize: 22, cursor: "pointer", padding: 4,
            lineHeight: 1,
          }}>&times;</button>
        </div>

        {/* Shipping bar */}
        <div style={{ padding: "14px 24px 0" }}>
          <ShippingBar total={subtotal} />
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 24px" }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: TEXT_LIGHT, marginTop: 60, fontSize: 14, fontWeight: 300 }}>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} style={{
                display: "flex", gap: 14, padding: "16px 0",
                borderBottom: `1px solid ${BORDER}`,
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 8, overflow: "hidden",
                  flexShrink: 0, background: OFF_WHITE,
                }}>
                  <img src={item.product.img} alt={item.product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 400, color: TEXT_PRIMARY }}>{item.product.name}</div>
                  {item.color && (
                    <div style={{ fontSize: 11, color: TEXT_LIGHT, marginTop: 2 }}>{item.color}</div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                    <div style={{
                      display: "flex", border: `1px solid ${BORDER}`, borderRadius: 4, overflow: "hidden",
                    }}>
                      <button onClick={() => onQty(item.product.id, item.qty - 1)}
                        style={{ width: 28, height: 28, border: "none", background: OFF_WHITE, color: TEXT_PRIMARY, cursor: "pointer", fontSize: 14 }}>
                        &minus;
                      </button>
                      <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: TEXT_PRIMARY, background: WHITE }}>
                        {item.qty}
                      </span>
                      <button onClick={() => onQty(item.product.id, item.qty + 1)}
                        style={{ width: 28, height: 28, border: "none", background: OFF_WHITE, color: TEXT_PRIMARY, cursor: "pointer", fontSize: 14 }}>
                        +
                      </button>
                    </div>
                    <button onClick={() => onRemove(item.product.id)}
                      style={{ fontSize: 11, color: TEXT_LIGHT, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 400, color: TEXT_PRIMARY, whiteSpace: "nowrap" }}>
                  ${(item.product.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}

          {/* Upsells */}
          {cart.length > 0 && availUpsells.length > 0 && (
            <div style={{ marginTop: 20, paddingBottom: 16 }}>
              <div style={{
                fontSize: 10, fontWeight: 500, color: TEXT_SECONDARY, marginBottom: 12,
                textTransform: "uppercase", letterSpacing: "1.5px",
              }}>
                Complete Your Sleep Ritual
              </div>
              {availUpsells.slice(0, 2).map((u) => {
                const prod = PRODUCTS.find((p) => p.id === u.id)!;
                return (
                  <div key={u.id} style={{
                    background: OFF_WHITE, borderRadius: 8, padding: "10px 14px", marginBottom: 8,
                    display: "flex", alignItems: "center", gap: 12,
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
                      <img src={prod.img} alt={prod.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 400, color: TEXT_PRIMARY }}>{prod.name}</div>
                      <div style={{ fontSize: 10, color: TEXT_LIGHT }}>{u.reason}</div>
                    </div>
                    <button onClick={() => onAddUpsell(u.id)} style={{
                      background: TEXT_PRIMARY, color: WHITE, border: "none",
                      padding: "6px 12px", borderRadius: 4, fontSize: 11,
                      fontWeight: 400, cursor: "pointer", whiteSpace: "nowrap",
                      letterSpacing: "0.03rem",
                    }}>
                      + ${prod.price}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Checkout footer */}
        {cart.length > 0 && (
          <div style={{ padding: "16px 24px 24px", borderTop: `1px solid ${BORDER}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 13, color: TEXT_SECONDARY, fontWeight: 300 }}>Subtotal</span>
              <span style={{ fontSize: 15, fontWeight: 400, color: TEXT_PRIMARY }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, color: TEXT_LIGHT, marginBottom: 16 }}>
              {subtotal >= FREE_SHIP ? "Free shipping included" : "Shipping calculated at checkout"}
            </div>
            <button style={{
              width: "100%", padding: "14px 0", background: TEXT_PRIMARY,
              color: WHITE, border: "none", borderRadius: 4, fontSize: 13,
              fontWeight: 400, cursor: "pointer", letterSpacing: "0.08rem",
              textTransform: "uppercase",
            }}>
              Checkout
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
              {["Apple Pay", "Shop Pay", "Google Pay"].map((p) => (
                <span key={p} style={{
                  fontSize: 10, background: OFF_WHITE,
                  padding: "4px 10px", color: TEXT_LIGHT, fontWeight: 400,
                  borderRadius: 3,
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ─── Post-purchase upsell modal ─────────────────────────────────────────── */
function PostPurchaseUpsell({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;
  const wash = PRODUCTS.find((p) => p.id === 8)!;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.2)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        background: WHITE,
        borderRadius: 12,
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        maxWidth: 420, width: "90%", padding: "36px 32px",
        textAlign: "center", fontFamily: "'Inter',sans-serif",
      }}>
        <div style={{
          display: "inline-block", background: BEIGE,
          padding: "5px 16px",
          borderRadius: 99, fontSize: 10, color: TEXT_SECONDARY,
          fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 16,
        }}>
          One-Time Offer
        </div>
        <h3 style={{ fontSize: 22, color: TEXT_PRIMARY, margin: "0 0 10px", fontWeight: 400 }}>
          Protect Your Silk
        </h3>
        <p style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 24, lineHeight: 1.7, fontWeight: 300 }}>
          Add the <strong style={{ color: TEXT_PRIMARY, fontWeight: 500 }}>Silk Laundry Wash</strong> to protect your investment.
          This offer is only available right now.
        </p>
        <div style={{
          background: OFF_WHITE, borderRadius: 10, padding: "16px 18px", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{ width: 64, height: 64, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
            <img src={wash.img} alt={wash.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 400, color: TEXT_PRIMARY, fontSize: 14 }}>Silk Laundry Wash</div>
            <div style={{ color: TEXT_LIGHT, fontSize: 12, marginTop: 2 }}>Gentle formula for silk & delicates</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
              <span style={{ fontWeight: 500, color: ACCENT_GREEN, fontSize: 18 }}>$19</span>
              <span style={{ textDecoration: "line-through", color: TEXT_LIGHT, fontSize: 13 }}>$27</span>
              <span style={{
                background: "#EDF5EF", color: ACCENT_GREEN,
                fontSize: 10, padding: "2px 8px", borderRadius: 3, fontWeight: 500,
              }}>SAVE 30%</span>
            </div>
          </div>
        </div>
        <button style={{
          width: "100%", padding: 14, background: TEXT_PRIMARY, color: WHITE,
          border: "none", borderRadius: 4, fontSize: 13, fontWeight: 400,
          cursor: "pointer", marginBottom: 12, letterSpacing: "0.06rem",
          textTransform: "uppercase",
        }}>
          Yes, Add to My Order — $19
        </button>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: TEXT_LIGHT, fontSize: 12, cursor: "pointer",
          textDecoration: "underline",
        }}>
          No thanks, I&apos;ll skip this
        </button>
      </div>
    </div>
  );
}

/* ─── Press logo marquee ─────────────────────────────────────────────────── */
function PressMarquee() {
  const logos = [IMGS.allure, IMGS.nb, IMGS.nymag, IMGS.allure, IMGS.nb, IMGS.nymag, IMGS.allure, IMGS.nb, IMGS.nymag, IMGS.allure, IMGS.nb, IMGS.nymag];
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div className="marquee-track" style={{
        display: "flex", alignItems: "center", gap: 60,
        width: "max-content",
      }}>
        {logos.map((src, i) => (
          <img key={i} src={src} alt="press" style={{ height: 24, opacity: 0.6, objectFit: "contain" }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Color swatch helper ────────────────────────────────────────────────── */
const COLOR_MAP: Record<string, string> = {
  Slate: "#6B7B8D",
  Blush: "#E8C4C4",
  Sage: "#A2B0A5",
  Midnight: "#2C3E50",
  Clay: "#C5947C",
  Pearl: "#F5F0EB",
  Onyx: "#2C2C2C",
  Rose: "#D4A5A5",
  Oat: "#DCD0C0",
  Cream: "#F5ECD7",
  Cocoa: "#6B4226",
  Assorted: "linear-gradient(135deg, #E8C4C4, #A2B0A5, #C5947C)",
};

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function NodpodDemo() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [addedFlash, setAddedFlash] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});
  const [heroSlide, setHeroSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSlides = [
    { img: IMGS.heroBg, headline: "Chill More.\nStress Less.\nSleep Better.", sub: "" },
    { img: IMGS.heroDark, headline: "Deep Touch\nPressure\nTechnology", sub: "" },
  ];

  /* Auto-rotate hero */
  useEffect(() => {
    const t = setInterval(() => setHeroSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  /* Inject global styles */
  useEffect(() => {
    const s = document.createElement("style");
    s.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #d4d4d4; border-radius: 99px; }

      .nodpod-prod-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
      }
      .nodpod-prod-card:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 8px 30px rgba(0,0,0,0.06) !important;
      }
      .nodpod-prod-card:hover .nodpod-prod-img {
        transform: scale(1.03) !important;
      }
      .nodpod-bundle-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
      }
      .nodpod-bundle-card:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 24px rgba(0,0,0,0.05) !important;
      }
      .nodpod-nav-link {
        transition: color 0.2s ease !important;
      }
      .nodpod-nav-link:hover {
        color: ${TEXT_PRIMARY} !important;
      }
      .nodpod-btn-primary {
        transition: opacity 0.2s ease !important;
      }
      .nodpod-btn-primary:hover {
        opacity: 0.85 !important;
      }
      .nodpod-add-btn {
        transition: all 0.25s ease !important;
      }
      .nodpod-add-btn:hover {
        background: ${TEXT_PRIMARY} !important;
        color: #fff !important;
      }

      @keyframes nodpod-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        animation: nodpod-marquee 30s linear infinite;
      }

      @media (max-width: 768px) {
        .nodpod-desktop-nav { display: none !important; }
        .nodpod-mobile-toggle { display: flex !important; }
        .nodpod-hero-headline { font-size: 36px !important; }
        .nodpod-hero-inner { padding: 60px 24px !important; }
        .nodpod-section { padding-left: 20px !important; padding-right: 20px !important; }
        .nodpod-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        .nodpod-grid-3 { grid-template-columns: 1fr !important; }
        .nodpod-footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .nodpod-features-grid { grid-template-columns: 1fr 1fr !important; }
        .nodpod-story-grid { grid-template-columns: 1fr !important; }
      }

      @media (max-width: 480px) {
        .nodpod-grid-4 { grid-template-columns: 1fr !important; }
        .nodpod-features-grid { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  const addToCart = (product: typeof PRODUCTS[number]) => {
    const color = selectedColors[product.id] ?? product.colors[0] ?? "";
    setCart((prev) => {
      const ex = prev.find((c) => c.product.id === product.id);
      return ex
        ? prev.map((c) => c.product.id === product.id ? { ...c, qty: c.qty + 1 } : c)
        : [...prev, { product, qty: 1, color }];
    });
    setAddedFlash(product.id);
    setTimeout(() => setAddedFlash(null), 1300);
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.product.id !== id));
  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCart((prev) => prev.map((c) => c.product.id === id ? { ...c, qty } : c));
  };
  const addUpsell = (id: number) => addToCart(PRODUCTS.find((p) => p.id === id)!);
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div style={{
      background: WHITE,
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: TEXT_PRIMARY,
      overflowX: "hidden",
    }}>

      {/* ─── Announcement Bar ─── */}
      <div style={{
        background: SAGE,
        textAlign: "center",
        padding: "10px 16px",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "1px",
        color: WHITE,
        textTransform: "uppercase",
      }}>
        Free Shipping on Orders Over $50
        <span style={{
          marginLeft: 16,
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: 500,
        }}
          onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
        >
          Shop Now
        </span>
      </div>

      {/* ─── Sticky Header ─── */}
      <header style={{
        background: WHITE,
        borderBottom: `1px solid ${BORDER}`,
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Left nav */}
        <nav className="nodpod-desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Shop", "Sleep Masks", "About"].map((lnk) => (
            <span key={lnk} className="nodpod-nav-link" style={{
              fontSize: 13,
              color: TEXT_SECONDARY,
              cursor: "pointer",
              fontWeight: 400,
              letterSpacing: "0.04rem",
            }}>{lnk}</span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nodpod-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none", alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "pointer", padding: 4,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={TEXT_PRIMARY} strokeWidth="1.5">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Center logo */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <img src={IMGS.logo} alt="nodpod" style={{ height: 28 }} />
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* Search icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEXT_SECONDARY} strokeWidth="1.5" style={{ cursor: "pointer" }}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          {/* Cart */}
          <button onClick={() => setCartOpen(true)} style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "none", border: "none",
            color: TEXT_SECONDARY, fontSize: 13, fontWeight: 400,
            cursor: "pointer", position: "relative", padding: 0,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEXT_SECONDARY} strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: -6, right: -8,
                background: TEXT_PRIMARY, color: WHITE, fontSize: 9,
                minWidth: 16, height: 16, borderRadius: 99,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 500,
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: WHITE, borderBottom: `1px solid ${BORDER}`,
          padding: "16px 20px", display: "flex", flexDirection: "column", gap: 14,
          position: "sticky", top: 58, zIndex: 99,
        }}>
          {["Shop", "Sleep Masks", "About", "Reviews"].map((lnk) => (
            <span key={lnk} style={{ fontSize: 14, color: TEXT_SECONDARY, cursor: "pointer", fontWeight: 400 }}>{lnk}</span>
          ))}
        </div>
      )}

      {/* ─── Hero Carousel ─── */}
      <section style={{
        position: "relative",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Background image */}
        {heroSlides.map((slide, i) => (
          <div key={i} style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${slide.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: heroSlide === i ? 1 : 0,
            transition: "opacity 1s ease",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0.22)",
            }} />
          </div>
        ))}

        {/* Text overlay */}
        <div className="nodpod-hero-inner" style={{
          position: "relative",
          textAlign: "center",
          padding: "80px 40px",
          maxWidth: 700,
        }}>
          <h1 className="nodpod-hero-headline" style={{
            fontSize: 52,
            fontWeight: 400,
            color: WHITE,
            lineHeight: 1.15,
            margin: "0 0 28px",
            letterSpacing: "0.02em",
            whiteSpace: "pre-line",
          }}>
            {heroSlides[heroSlide].headline}
          </h1>
          <button
            className="nodpod-btn-primary"
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "14px 44px",
              background: WHITE,
              color: TEXT_PRIMARY,
              border: "none",
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 400,
              cursor: "pointer",
              letterSpacing: "0.12rem",
              textTransform: "uppercase",
            }}>
            Shop Now
          </button>

          {/* Pagination dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} style={{
                width: heroSlide === i ? 24 : 8,
                height: 8,
                borderRadius: 99,
                background: heroSlide === i ? WHITE : "rgba(255,255,255,0.5)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Press Quote ─── */}
      <section style={{
        padding: "64px 40px",
        textAlign: "center",
        background: WHITE,
        maxWidth: 780,
        margin: "0 auto",
      }}>
        <p style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: TEXT_LIGHT,
          marginBottom: 20,
          fontWeight: 400,
        }}>
          New York Magazine
        </p>
        <p style={{
          fontSize: 22,
          fontWeight: 300,
          color: TEXT_PRIMARY,
          lineHeight: 1.7,
          fontStyle: "italic",
          margin: "0 0 28px",
        }}>
          &ldquo;A gentle nudge toward sleep that actually works.&rdquo;
        </p>
        <button
          className="nodpod-btn-primary"
          onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            padding: "12px 36px",
            background: TEXT_PRIMARY,
            color: WHITE,
            border: "none",
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 400,
            cursor: "pointer",
            letterSpacing: "0.12rem",
            textTransform: "uppercase",
          }}>
          Get My Nodpod
        </button>
      </section>

      {/* ─── Press Logo Marquee ─── */}
      <section style={{
        padding: "28px 0",
        background: OFF_WHITE,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <p style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: TEXT_LIGHT,
          textAlign: "center",
          marginBottom: 16,
          marginTop: 0,
          fontWeight: 400,
        }}>
          As seen in
        </p>
        <PressMarquee />
      </section>

      {/* ─── Product Grid ─── */}
      <section id="shop" className="nodpod-section" style={{
        padding: "72px 40px",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 400,
            color: TEXT_PRIMARY,
            margin: "0 0 8px",
            letterSpacing: "0.04rem",
          }}>
            Shop All
          </h2>
          <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0, fontWeight: 300 }}>
            Weighted comfort for better rest
          </p>
        </div>

        <div className="nodpod-grid-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}>
          {PRODUCTS.map((product) => (
            <div key={product.id} className="nodpod-prod-card" style={{
              borderRadius: 8,
              overflow: "hidden",
              cursor: "default",
              background: WHITE,
              border: `1px solid ${BORDER}`,
            }}>
              {/* Product image */}
              <div style={{
                aspectRatio: "4/5",
                overflow: "hidden",
                position: "relative",
                background: OFF_WHITE,
              }}>
                <img className="nodpod-prod-img" src={product.img} alt={product.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }} />
                {product.tag && (
                  <span style={{
                    position: "absolute", top: 12, left: 12,
                    background: product.tag === "Best Seller" ? SAGE
                      : product.tag === "Premium" ? BEIGE_DARK
                      : product.tag === "Cozy" ? MAUVE
                      : BEIGE,
                    color: product.tag === "Best Seller" ? WHITE : TEXT_PRIMARY,
                    fontSize: 10,
                    padding: "4px 12px",
                    borderRadius: 2,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}>
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "16px 16px 20px" }}>
                <div style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: TEXT_PRIMARY,
                  marginBottom: 4,
                  letterSpacing: "0.02rem",
                }}>
                  {product.name}
                </div>
                <div style={{
                  fontSize: 12,
                  fontWeight: 300,
                  color: TEXT_LIGHT,
                  marginBottom: 8,
                }}>
                  {product.desc}
                </div>
                <div style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: TEXT_PRIMARY,
                  marginBottom: 10,
                }}>
                  ${product.price}.00
                </div>

                {/* Star rating */}
                <div style={{ marginBottom: 12 }}>
                  <Stars rating={product.rating} count={product.reviews} />
                </div>

                {/* Color swatches */}
                {product.colors.length > 0 && (
                  <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                    {product.colors.slice(0, 5).map((color) => {
                      const selected = (selectedColors[product.id] ?? product.colors[0]) === color;
                      const bg = COLOR_MAP[color] || "#ccc";
                      return (
                        <button key={color}
                          title={color}
                          onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: color }))}
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            border: selected ? `2px solid ${TEXT_PRIMARY}` : `1px solid ${BORDER}`,
                            background: bg,
                            cursor: "pointer",
                            padding: 0,
                            transition: "border 0.2s",
                            outline: selected ? `2px solid ${WHITE}` : "none",
                            outlineOffset: -3,
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                <button
                  className="nodpod-add-btn"
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    background: addedFlash === product.id ? ACCENT_GREEN : "transparent",
                    color: addedFlash === product.id ? WHITE : TEXT_PRIMARY,
                    border: addedFlash === product.id ? "none" : `1px solid ${TEXT_PRIMARY}`,
                    borderRadius: 2,
                    fontSize: 12,
                    fontWeight: 400,
                    cursor: "pointer",
                    letterSpacing: "0.08rem",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                  }}>
                  {addedFlash === product.id ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bundles ─── */}
      <section className="nodpod-section" style={{
        padding: "0 40px 72px",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 400,
            color: TEXT_PRIMARY,
            margin: "0 0 8px",
            letterSpacing: "0.04rem",
          }}>
            Save with Bundles
          </h2>
          <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0, fontWeight: 300 }}>
            Curated sleep sets at a special price
          </p>
        </div>

        <div className="nodpod-grid-3" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {BUNDLES.map((bundle) => {
            const items = bundle.items.map((id) => PRODUCTS.find((p) => p.id === id)!);
            const origTotal = items.reduce((s, p) => s + p.price, 0);
            const saleTotal = Math.round(origTotal * (1 - bundle.discount / 100));
            return (
              <div key={bundle.name} className="nodpod-bundle-card" style={{
                borderRadius: 8,
                overflow: "hidden",
                background: WHITE,
                border: `1px solid ${BORDER}`,
              }}>
                {/* Image mosaic */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${items.length}, 1fr)`,
                  height: 180,
                }}>
                  {items.map((p) => (
                    <img key={p.id} src={p.img} alt={p.name} style={{
                      width: "100%", height: "100%", objectFit: "cover",
                    }} />
                  ))}
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <div style={{
                    fontWeight: 400, color: TEXT_PRIMARY, fontSize: 16,
                    marginBottom: 4, letterSpacing: "0.02rem",
                  }}>
                    {bundle.name}
                  </div>
                  <div style={{ fontSize: 12, color: TEXT_LIGHT, marginBottom: 16, fontWeight: 300 }}>
                    {bundle.desc}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
                    <span style={{ fontSize: 20, fontWeight: 400, color: TEXT_PRIMARY }}>
                      ${saleTotal}
                    </span>
                    <span style={{ fontSize: 14, textDecoration: "line-through", color: TEXT_LIGHT }}>
                      ${origTotal}
                    </span>
                    <span style={{
                      background: "#EDF5EF",
                      color: ACCENT_GREEN,
                      fontSize: 10,
                      padding: "3px 10px",
                      borderRadius: 2,
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                    }}>
                      SAVE ${bundle.save}
                    </span>
                  </div>
                  <button
                    className="nodpod-btn-primary"
                    onClick={() => items.forEach((p) => addToCart(p))}
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      background: TEXT_PRIMARY,
                      color: WHITE,
                      border: "none",
                      borderRadius: 2,
                      fontSize: 12,
                      fontWeight: 400,
                      cursor: "pointer",
                      letterSpacing: "0.08rem",
                      textTransform: "uppercase",
                    }}>
                    Add Bundle to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section style={{
        background: OFF_WHITE,
        padding: "80px 40px",
      }}>
        <div className="nodpod-story-grid" style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: SAGE,
              marginBottom: 16,
              marginTop: 0,
              fontWeight: 500,
            }}>
              Our Story
            </p>
            <h2 style={{
              fontSize: 28,
              fontWeight: 400,
              color: TEXT_PRIMARY,
              margin: "0 0 20px",
              lineHeight: 1.4,
            }}>
              Born from a simple idea
            </h2>
            <p style={{
              fontSize: 14,
              color: TEXT_SECONDARY,
              lineHeight: 1.8,
              fontWeight: 300,
              margin: "0 0 16px",
            }}>
              In 2009, Melissa began sewing the first nodpod prototype in her kitchen. Inspired by the
              calming science of Deep Touch Pressure, she set out to create the perfect sleep companion
              -- one that would feel like a gentle, reassuring weight across your eyes.
            </p>
            <p style={{
              fontSize: 14,
              color: TEXT_SECONDARY,
              lineHeight: 1.8,
              fontWeight: 300,
              margin: 0,
            }}>
              Today, nodpod is trusted by over 100,000 sleepers. Every mask is thoughtfully designed
              with premium materials and our patented 4-pod system to deliver the deep rest you deserve.
            </p>
          </div>
          <div style={{
            borderRadius: 8,
            overflow: "hidden",
            height: 380,
          }}>
            <img
              src={IMGS.heroBg}
              alt="Our story"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── Features / Trust ─── */}
      <section className="nodpod-section" style={{ padding: "72px 40px", maxWidth: 1000, margin: "0 auto" }}>
        <div className="nodpod-features-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}>
          {[
            { title: "Clinically Backed", icon: "\u{1F9E0}", desc: "Deep Touch Pressure calms the nervous system for deeper rest" },
            { title: "Premium Materials", icon: "\u2728", desc: "Mineralized silk and weighted microbeads for ultimate comfort" },
            { title: "30-Night Trial", icon: "\u{1F504}", desc: "Love it or return it, no questions asked" },
            { title: "Ships in 24 Hours", icon: "\u{1F4E6}", desc: "Complimentary shipping on all orders over $50" },
          ].map((f) => (
            <div key={f.title} style={{ padding: "8px 0" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
              <div style={{
                fontSize: 14,
                fontWeight: 400,
                color: TEXT_PRIMARY,
                marginBottom: 8,
                letterSpacing: "0.03rem",
              }}>
                {f.title}
              </div>
              <div style={{
                fontSize: 13,
                color: TEXT_LIGHT,
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Sustainability ─── */}
      <section style={{
        background: BEIGE,
        padding: "64px 40px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: SAGE,
            marginBottom: 16,
            marginTop: 0,
            fontWeight: 500,
          }}>
            Our Commitment
          </p>
          <h2 style={{
            fontSize: 26,
            fontWeight: 400,
            color: TEXT_PRIMARY,
            margin: "0 0 16px",
            lineHeight: 1.4,
          }}>
            Better sleep, better planet
          </h2>
          <p style={{
            fontSize: 14,
            color: TEXT_SECONDARY,
            lineHeight: 1.8,
            fontWeight: 300,
            margin: "0 0 24px",
          }}>
            All nodpod products are OEKO-TEX certified, ensuring they are free from harmful
            substances. We use recyclable packaging and are committed to reducing our environmental
            footprint with every product we make.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {["OEKO-TEX Certified", "Recyclable Packaging", "Vegan & Cruelty-Free"].map((label) => (
              <span key={label} style={{
                fontSize: 11,
                color: TEXT_SECONDARY,
                fontWeight: 400,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                padding: "8px 0",
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        background: WARM_GRAY,
        borderTop: `1px solid ${BORDER}`,
        padding: "56px 40px 40px",
      }}>
        <div className="nodpod-footer-grid" style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand column */}
          <div>
            <img src={IMGS.logo} alt="nodpod" style={{ height: 24, marginBottom: 14, display: "block" }} />
            <p style={{ fontSize: 13, color: TEXT_LIGHT, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
              The original weighted sleep mask, designed to help you chill more, stress less, and sleep better.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 500, color: TEXT_PRIMARY,
              textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 16,
            }}>
              Shop
            </div>
            {["Sleep Masks", "Body", "Silk Pillowcase", "Bundles", "Gift Cards"].map((lnk) => (
              <div key={lnk} style={{
                fontSize: 13, color: TEXT_SECONDARY, cursor: "pointer",
                marginBottom: 10, fontWeight: 300,
              }}>
                {lnk}
              </div>
            ))}
          </div>

          {/* About links */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 500, color: TEXT_PRIMARY,
              textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 16,
            }}>
              About
            </div>
            {["Our Story", "The Science", "Reviews", "Press"].map((lnk) => (
              <a key={lnk} href="#" style={{
                display: "block",
                fontSize: 13, color: TEXT_SECONDARY, cursor: "pointer",
                marginBottom: 10, fontWeight: 300,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                 onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                {lnk}
              </a>
            ))}
          </div>

          {/* Support links */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 500, color: TEXT_PRIMARY,
              textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 16,
            }}>
              Support
            </div>
            {["FAQ", "Shipping & Returns", "Contact Us", "Privacy Policy"].map((lnk) => (
              <a key={lnk} href="#" style={{
                display: "block",
                fontSize: 13, color: TEXT_SECONDARY, cursor: "pointer",
                marginBottom: 10, fontWeight: 300,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                 onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                {lnk}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${BORDER}`,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          maxWidth: 1000,
          margin: "0 auto",
        }}>
          <div style={{ fontSize: 11, color: TEXT_LIGHT, fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} Nodpod. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Country selector */}
            <span style={{
              fontSize: 11, color: TEXT_SECONDARY, cursor: "pointer",
              padding: "4px 10px", border: `1px solid ${BORDER}`, borderRadius: 3,
              fontWeight: 300,
            }}>
              United States (USD $)
            </span>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { name: "Instagram", icon: "\u{1F4F7}" },
                { name: "TikTok", icon: "\u{1F3B5}" },
                { name: "Facebook", icon: "\u{1F310}" },
              ].map((soc) => (
                <a key={soc.name} href="#" style={{
                  fontSize: 10, color: TEXT_LIGHT, cursor: "pointer",
                  fontWeight: 300, letterSpacing: "0.5px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                   onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  {soc.icon} {soc.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Cart Drawer ─── */}
      <CartDrawer
        cart={cart} isOpen={cartOpen} onClose={() => setCartOpen(false)}
        onRemove={removeFromCart} onQty={updateQty} onAddUpsell={addUpsell}
      />

      {/* ─── Post-Purchase Modal ─── */}
      <PostPurchaseUpsell show={showUpsell} onClose={() => setShowUpsell(false)} />

      {/* Demo trigger */}
      {cart.length > 0 && (
        <button onClick={() => setShowUpsell(true)} style={{
          position: "fixed", bottom: 20, left: 20, zIndex: 50,
          background: OFF_WHITE,
          border: `1px solid ${BORDER}`,
          borderRadius: 4,
          color: TEXT_SECONDARY, padding: "8px 16px", fontSize: 11, cursor: "pointer",
          fontWeight: 300,
        }}>
          Demo: Post-Purchase Upsell
        </button>
      )}
    </div>
  );
}
