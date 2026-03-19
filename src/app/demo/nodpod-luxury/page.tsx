"use client";

import { useState, useEffect } from "react";

/* ─── AIRE-inspired dark luxury palette ────────────────────────────────── */
const DARK = "#222222";
const DEEP = "#1B1B1B";
const GOLD = "#B4A269";
const TAUPE = "#D3D1C3";
const WHITE = "#FFFFFF";
const GOLD_BORDER = `1px solid ${GOLD}`;
const OVERLAY = "rgba(0,0,0,0.5)";

/* ─── CDN assets (same product images) ─────────────────────────────────── */
const CDN = "https://nodpod.com/cdn/shop";
const IMGS = {
  logo: `${CDN}/files/logo-v2.svg?v=1726976705`,
  allure: `${CDN}/files/allure3-new.svg?v=1743884874`,
  nb: `${CDN}/files/nb-logo-en.svg?v=1744512231`,
  nymag: `https://cdn.shopify.com/s/files/1/0253/2982/7939/files/new-york-mag-logo.svg?v=1727230418`,
};

/* ─── Local luxury images ──────────────────────────────────────────────── */
const LUX = {
  hero1: "/nodpod-luxury/hero-1.png",
  hero2: "/nodpod-luxury/hero-2.png",
  flatlay: "/nodpod-luxury/product-flatlay.png",
  body: "/nodpod-luxury/body-lifestyle.png",
  silk: "/nodpod-luxury/silk-texture.png",
  collection: "/nodpod-luxury/collection-display.png",
  science: "/nodpod-luxury/science-beads.png",
  teddy: "/nodpod-luxury/teddy-lifestyle.png",
};

/* ─── Product catalog ──────────────────────────────────────────────────── */
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
    img: `${CDN}/files/Silk_Wash_at_Laundromat_x_Nodpod_1832.jpg?v=1758900260&width=600`,
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

/* ─── Color swatch map ─────────────────────────────────────────────────── */
const COLOR_MAP: Record<string, string> = {
  Slate: "#6B7B8D", Blush: "#E8C4C4", Sage: "#A2B0A5", Midnight: "#2C3E50",
  Clay: "#C5947C", Pearl: "#F5F0EB", Onyx: "#2C2C2C", Rose: "#D4A5A5",
  Oat: "#DCD0C0", Cream: "#F5ECD7", Cocoa: "#6B4226",
  Assorted: "linear-gradient(135deg, #E8C4C4, #A2B0A5, #C5947C)",
};

/* ─── Star rating ──────────────────────────────────────────────────────── */
function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24"
            fill={i <= Math.round(rating) ? GOLD : "none"}
            stroke={GOLD} strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: 11, color: TAUPE, opacity: 0.7 }}>{count}</span>
    </div>
  );
}

/* ─── Shipping progress bar (gold theme) ───────────────────────────────── */
function ShippingBar({ total }: { total: number }) {
  const pct = Math.min((total / FREE_SHIP) * 100, 100);
  const remaining = Math.max(FREE_SHIP - total, 0);
  return (
    <div style={{ background: DEEP, padding: "12px 16px", marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: TAUPE, marginBottom: 8 }}>
        {remaining > 0 ? (
          <span>
            <strong style={{ color: GOLD }}>${remaining.toFixed(0)}</strong> away from{" "}
            <strong style={{ color: GOLD }}>complimentary shipping</strong>
          </span>
        ) : (
          <span style={{ color: GOLD }}>Complimentary shipping unlocked</span>
        )}
        <span style={{ color: TAUPE, opacity: 0.5 }}>${FREE_SHIP}</span>
      </div>
      <div style={{ background: "rgba(180,162,105,0.15)", height: 3, overflow: "hidden" }}>
        <div style={{
          width: `${pct}%`, height: "100%",
          background: GOLD,
          transition: "width 0.55s ease",
        }} />
      </div>
    </div>
  );
}

/* ─── Cart drawer (dark luxury) ────────────────────────────────────────── */
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
          background: "rgba(0,0,0,0.6)",
        }} />
      )}
      <div style={{
        position: "fixed", top: 0, right: isOpen ? 0 : -460,
        width: 440, maxWidth: "93vw", height: "100vh", zIndex: 999,
        background: DARK,
        boxShadow: isOpen ? "-8px 0 60px rgba(0,0,0,0.4)" : "none",
        transition: "right 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
      }}>
        {/* Header */}
        <div style={{
          padding: "24px 28px",
          borderBottom: `1px solid rgba(180,162,105,0.2)`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h3 style={{
            margin: 0, fontSize: 12, color: GOLD, fontWeight: 300,
            letterSpacing: "3px", textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}>
            Your Cart ({cart.reduce((s, c) => s + c.qty, 0)})
          </h3>
          <button onClick={onClose} style={{
            color: TAUPE, border: "none", background: "none",
            fontSize: 24, cursor: "pointer", padding: 4, lineHeight: 1,
          }}>&times;</button>
        </div>

        {/* Shipping bar */}
        <div style={{ padding: "14px 28px 0" }}>
          <ShippingBar total={subtotal} />
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 28px" }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: TAUPE, marginTop: 60, fontSize: 13, fontWeight: 300, opacity: 0.5 }}>
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} style={{
                display: "flex", gap: 16, padding: "18px 0",
                borderBottom: `1px solid rgba(180,162,105,0.1)`,
              }}>
                <div style={{
                  width: 72, height: 72, overflow: "hidden",
                  flexShrink: 0, background: DEEP,
                }}>
                  <img src={item.product.img} alt={item.product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 300, color: WHITE }}>{item.product.name}</div>
                  {item.color && (
                    <div style={{ fontSize: 11, color: TAUPE, marginTop: 2, opacity: 0.6 }}>{item.color}</div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
                    <div style={{ display: "flex", border: `1px solid rgba(180,162,105,0.3)`, overflow: "hidden" }}>
                      <button onClick={() => onQty(item.product.id, item.qty - 1)}
                        style={{ width: 28, height: 28, border: "none", background: DEEP, color: GOLD, cursor: "pointer", fontSize: 14 }}>
                        &minus;
                      </button>
                      <span style={{
                        width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, color: WHITE, background: DARK,
                      }}>
                        {item.qty}
                      </span>
                      <button onClick={() => onQty(item.product.id, item.qty + 1)}
                        style={{ width: 28, height: 28, border: "none", background: DEEP, color: GOLD, cursor: "pointer", fontSize: 14 }}>
                        +
                      </button>
                    </div>
                    <button onClick={() => onRemove(item.product.id)}
                      style={{ fontSize: 10, color: TAUPE, background: "none", border: "none", cursor: "pointer", opacity: 0.5, letterSpacing: "1px", textTransform: "uppercase" }}>
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 300, color: GOLD, whiteSpace: "nowrap" }}>
                  ${(item.product.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}

          {/* Upsells */}
          {cart.length > 0 && availUpsells.length > 0 && (
            <div style={{ marginTop: 24, paddingBottom: 16 }}>
              <div style={{
                fontSize: 10, fontWeight: 300, color: GOLD, marginBottom: 14,
                textTransform: "uppercase", letterSpacing: "2.5px",
              }}>
                Complete Your Ritual
              </div>
              {availUpsells.slice(0, 2).map((u) => {
                const prod = PRODUCTS.find((p) => p.id === u.id)!;
                return (
                  <div key={u.id} style={{
                    background: DEEP, padding: "12px 14px", marginBottom: 8,
                    display: "flex", alignItems: "center", gap: 12,
                    border: `1px solid rgba(180,162,105,0.1)`,
                  }}>
                    <div style={{ width: 44, height: 44, overflow: "hidden", flexShrink: 0 }}>
                      <img src={prod.img} alt={prod.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 300, color: WHITE }}>{prod.name}</div>
                      <div style={{ fontSize: 10, color: TAUPE, opacity: 0.5 }}>{u.reason}</div>
                    </div>
                    <button onClick={() => onAddUpsell(u.id)} style={{
                      background: "transparent", color: GOLD, border: GOLD_BORDER,
                      padding: "6px 14px", fontSize: 10, fontWeight: 300,
                      cursor: "pointer", whiteSpace: "nowrap",
                      letterSpacing: "1px", textTransform: "uppercase",
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
          <div style={{ padding: "20px 28px 28px", borderTop: `1px solid rgba(180,162,105,0.2)` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: TAUPE, fontWeight: 300, letterSpacing: "1.5px", textTransform: "uppercase" }}>Subtotal</span>
              <span style={{ fontSize: 16, fontWeight: 300, color: GOLD }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, color: TAUPE, marginBottom: 20, opacity: 0.5 }}>
              {subtotal >= FREE_SHIP ? "Complimentary shipping included" : "Shipping calculated at checkout"}
            </div>
            <button style={{
              width: "100%", padding: "16px 0", background: GOLD,
              color: DEEP, border: GOLD_BORDER, fontSize: 11,
              fontWeight: 400, cursor: "pointer", letterSpacing: "3px",
              textTransform: "uppercase",
            }}>
              Checkout
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 14 }}>
              {["Apple Pay", "Shop Pay", "Google Pay"].map((p) => (
                <span key={p} style={{
                  fontSize: 9, background: DEEP,
                  padding: "5px 12px", color: TAUPE, fontWeight: 300,
                  letterSpacing: "0.5px", border: `1px solid rgba(180,162,105,0.15)`,
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

/* ─── Post-purchase upsell modal (dark luxury) ─────────────────────────── */
function PostPurchaseUpsell({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;
  const wash = PRODUCTS.find((p) => p.id === 8)!;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        background: DARK,
        border: GOLD_BORDER,
        boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        maxWidth: 440, width: "90%", padding: "44px 36px",
        textAlign: "center", fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{
          display: "inline-block", border: GOLD_BORDER,
          padding: "6px 20px",
          fontSize: 9, color: GOLD,
          fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 20,
        }}>
          Exclusive Offer
        </div>
        <h3 style={{
          fontSize: 24, color: GOLD, margin: "0 0 12px", fontWeight: 300,
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          letterSpacing: "-0.5px",
        }}>
          PROTECT YOUR <em>silk</em>
        </h3>
        <p style={{ fontSize: 13, color: TAUPE, marginBottom: 28, lineHeight: 1.8, fontWeight: 300 }}>
          Add the <strong style={{ color: WHITE, fontWeight: 400 }}>Silk Laundry Wash</strong> to preserve
          the mineralized silk fibres of your new investment.
        </p>
        <div style={{
          background: DEEP, padding: "18px 20px", marginBottom: 28,
          display: "flex", alignItems: "center", gap: 16,
          border: `1px solid rgba(180,162,105,0.15)`,
        }}>
          <div style={{ width: 64, height: 64, overflow: "hidden", flexShrink: 0 }}>
            <img src={wash.img} alt={wash.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 300, color: WHITE, fontSize: 14 }}>Silk Laundry Wash</div>
            <div style={{ color: TAUPE, fontSize: 11, marginTop: 3, opacity: 0.6 }}>Gentle formula for silk & delicates</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10 }}>
              <span style={{ fontWeight: 400, color: GOLD, fontSize: 18 }}>$19</span>
              <span style={{ textDecoration: "line-through", color: TAUPE, fontSize: 13, opacity: 0.5 }}>$27</span>
              <span style={{
                border: GOLD_BORDER, color: GOLD,
                fontSize: 9, padding: "3px 10px", fontWeight: 300,
                letterSpacing: "1.5px",
              }}>SAVE 30%</span>
            </div>
          </div>
        </div>
        <button style={{
          width: "100%", padding: 16, background: GOLD, color: DEEP,
          border: GOLD_BORDER, fontSize: 11, fontWeight: 400,
          cursor: "pointer", marginBottom: 14, letterSpacing: "2.5px",
          textTransform: "uppercase",
        }}>
          Yes, Add to My Order &mdash; $19
        </button>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: TAUPE, fontSize: 11, cursor: "pointer",
          opacity: 0.5, letterSpacing: "1px",
        }}>
          No thanks, I&apos;ll skip this
        </button>
      </div>
    </div>
  );
}

/* ─── Section heading helper ───────────────────────────────────────────── */
function LuxHeading({ before, italic, after, sub }: { before: string; italic: string; after: string; sub?: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        fontSize: 42, fontWeight: 300, color: GOLD,
        margin: "0 0 16px", lineHeight: 1.2,
        letterSpacing: "-0.5px",
      }}>
        {before}<em style={{ fontStyle: "italic" }}>{italic}</em>{after}
      </h2>
      {sub && (
        <p style={{
          fontSize: 14, color: TAUPE, margin: 0, fontWeight: 300,
          lineHeight: 1.8, maxWidth: 520, marginLeft: "auto", marginRight: "auto",
          textAlign: "justify",
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function NodpodLuxury() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [addedFlash, setAddedFlash] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  /* Inject global styles + Cormorant Garamond */
  useEffect(() => {
    const s = document.createElement("style");
    s.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: ${DARK}; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: ${DEEP}; }
      ::-webkit-scrollbar-thumb { background: rgba(180,162,105,0.3); }

      @media (max-width: 900px) {
        .lux-desktop-nav { display: none !important; }
        .lux-mobile-toggle { display: flex !important; }
        .lux-hero-title { font-size: 36px !important; }
        .lux-section { padding-left: 24px !important; padding-right: 24px !important; }
        .lux-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        .lux-grid-3 { grid-template-columns: 1fr !important; }
        .lux-split { grid-template-columns: 1fr !important; }
        .lux-footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .lux-facts-row { grid-template-columns: 1fr !important; }
        .lux-two-cards { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 540px) {
        .lux-grid-4 { grid-template-columns: 1fr !important; }
        .lux-hero-title { font-size: 28px !important; }
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
      background: DARK,
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: TAUPE,
      overflowX: "hidden",
    }}>

      {/* ═══ 1. GOLD ANNOUNCEMENT BAR ═══ */}
      <div style={{
        background: DEEP,
        textAlign: "center",
        padding: "12px 16px",
        fontSize: 10,
        fontWeight: 300,
        letterSpacing: "3px",
        color: GOLD,
        textTransform: "uppercase",
        borderBottom: `1px solid rgba(180,162,105,0.15)`,
      }}>
        Complimentary Shipping on Orders Over $50 &nbsp;&middot;&nbsp; Deep Touch Pressure Technology
      </div>

      {/* ═══ 2. NAVIGATION (not sticky) ═══ */}
      <header style={{
        background: DARK,
        padding: "22px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid rgba(180,162,105,0.1)`,
      }}>
        {/* Logo (gold-tinted) */}
        <div>
          <img src={IMGS.logo} alt="nodpod" style={{
            height: 26,
            filter: "brightness(0) saturate(100%) invert(68%) sepia(25%) saturate(500%) hue-rotate(15deg) brightness(92%)",
          }} />
        </div>

        {/* Desktop nav links */}
        <nav className="lux-desktop-nav" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["Shop", "The Science", "Our Story", "The Ritual"].map((lnk) => (
            <span key={lnk} style={{
              fontSize: 11, color: GOLD, cursor: "pointer", fontWeight: 300,
              letterSpacing: "2px", textTransform: "uppercase",
            }}
            onClick={() => {
              if (lnk === "Shop") document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
              if (lnk === "The Science") document.getElementById("science")?.scrollIntoView({ behavior: "smooth" });
            }}
            >{lnk}</span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lux-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none", alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "pointer", padding: 4,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Cart button with gold border */}
        <button onClick={() => setCartOpen(true)} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "none", border: GOLD_BORDER,
          color: GOLD, fontSize: 10, fontWeight: 300,
          cursor: "pointer", position: "relative",
          padding: "8px 20px", letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Cart{cartCount > 0 && ` (${cartCount})`}
        </button>
      </header>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: DEEP, borderBottom: `1px solid rgba(180,162,105,0.15)`,
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18,
        }}>
          {["Shop", "The Science", "Our Story", "The Ritual"].map((lnk) => (
            <span key={lnk} style={{
              fontSize: 12, color: GOLD, cursor: "pointer", fontWeight: 300,
              letterSpacing: "2px", textTransform: "uppercase",
            }}>{lnk}</span>
          ))}
        </div>
      )}

      {/* ═══ 3. HERO SECTION ═══ */}
      <section style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${LUX.hero1}')`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: OVERLAY }} />
        <div style={{
          position: "relative", textAlign: "center",
          padding: "60px 40px", maxWidth: 700,
        }}>
          <h1 className="lux-hero-title" style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: 56, fontWeight: 300, color: GOLD,
            lineHeight: 1.15, margin: "0 0 20px",
            letterSpacing: "-0.5px",
          }}>
            DISCOVER <em style={{ fontStyle: "italic" }}>the ritual</em>
            <br />OF DEEP SLEEP
          </h1>
          <p style={{
            fontSize: 14, color: TAUPE, fontWeight: 300,
            lineHeight: 1.8, margin: "0 0 40px",
            maxWidth: 460, marginLeft: "auto", marginRight: "auto",
          }}>
            Weighted comfort rooted in the ancient science of deep touch pressure.
            A sanctuary for your senses.
          </p>
          <button
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "16px 52px", background: "transparent",
              color: GOLD, border: GOLD_BORDER,
              fontSize: 11, fontWeight: 300, cursor: "pointer",
              letterSpacing: "3px", textTransform: "uppercase",
            }}>
            Explore the Collection
          </button>
        </div>
      </section>

      {/* ═══ 4. EDITORIAL SECTION (50/50) ═══ */}
      <section className="lux-split" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        maxWidth: 1200, margin: "0 auto",
        padding: "100px 48px",
        gap: 80,
        alignItems: "center",
      }}>
        <div>
          <p style={{
            fontSize: 10, color: GOLD, letterSpacing: "3px",
            textTransform: "uppercase", marginBottom: 24, marginTop: 0,
            fontWeight: 300,
          }}>
            The Science of Rest
          </p>
          <p style={{
            fontSize: 15, color: TAUPE, lineHeight: 2,
            fontWeight: 300, margin: 0, textAlign: "justify",
          }}>
            Deep Touch Pressure is a therapeutic technique that applies gentle, distributed weight
            across the body. This even pressure stimulates the parasympathetic nervous system, reducing
            cortisol while increasing serotonin and melatonin production. The result is a profound sense
            of calm that prepares your body for restorative sleep. Each Nodpod product is engineered
            with precision-calibrated glass microbeads to deliver the optimal pressure for deep relaxation.
          </p>
        </div>
        <div style={{ borderLeft: `1px solid rgba(180,162,105,0.2)`, paddingLeft: 60 }}>
          <p style={{
            fontSize: 10, color: TAUPE, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 20, marginTop: 0,
            fontWeight: 300, opacity: 0.5,
          }}>
            New York Magazine
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: 26, fontWeight: 300, color: GOLD,
            lineHeight: 1.6, fontStyle: "italic",
            margin: 0,
          }}>
            &ldquo;A gentle nudge toward sleep that actually works &mdash; like being held by the night itself.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══ 5. TWO IMAGE CARDS (50/50) ═══ */}
      <section className="lux-two-cards" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        minHeight: 500,
      }}>
        {/* Left: Sleep Mask */}
        <div style={{
          position: "relative", overflow: "hidden",
          backgroundImage: `url('${LUX.hero2}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          display: "flex", alignItems: "flex-end",
          padding: 48,
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          <div style={{ position: "relative" }}>
            <p style={{
              fontSize: 10, color: TAUPE, letterSpacing: "3px",
              textTransform: "uppercase", marginBottom: 12, marginTop: 0,
              fontWeight: 300, opacity: 0.7,
            }}>
              The Collection
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: 34, fontWeight: 300, color: GOLD,
              margin: "0 0 24px", letterSpacing: "-0.5px",
            }}>
              THE SLEEP <em>mask</em>
            </h3>
            <button
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "12px 36px", background: "transparent",
                color: GOLD, border: GOLD_BORDER,
                fontSize: 10, fontWeight: 300, cursor: "pointer",
                letterSpacing: "2.5px", textTransform: "uppercase",
              }}>
              Discover
            </button>
          </div>
        </div>

        {/* Right: Body Pod */}
        <div style={{
          position: "relative", overflow: "hidden",
          backgroundImage: `url('${LUX.body}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          display: "flex", alignItems: "flex-end",
          padding: 48,
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          <div style={{ position: "relative" }}>
            <p style={{
              fontSize: 10, color: TAUPE, letterSpacing: "3px",
              textTransform: "uppercase", marginBottom: 12, marginTop: 0,
              fontWeight: 300, opacity: 0.7,
            }}>
              The Collection
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: 34, fontWeight: 300, color: GOLD,
              margin: "0 0 24px", letterSpacing: "-0.5px",
            }}>
              THE BODY <em>pod</em>
            </h3>
            <button
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "12px 36px", background: "transparent",
                color: GOLD, border: GOLD_BORDER,
                fontSize: 10, fontWeight: 300, cursor: "pointer",
                letterSpacing: "2.5px", textTransform: "uppercase",
              }}>
              Discover
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 6. THE SCIENCE SECTION ═══ */}
      <section id="science" style={{
        position: "relative",
        padding: "120px 48px",
        backgroundImage: `url('${LUX.science}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <LuxHeading
            before="WHERE "
            italic="science"
            after=" MEETS SLEEP"
            sub="Nodpod harnesses the proven benefits of Deep Touch Pressure therapy, the same principle used in weighted blankets, but refined into a targeted, portable form. Precision-calibrated glass microbeads distribute gentle, even weight to calm your nervous system on contact."
          />
          <div className="lux-facts-row" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: 48, marginTop: 60, textAlign: "center",
          }}>
            {[
              { num: "4", unit: "pods", detail: "Patented weight distribution system" },
              { num: "98%", unit: "", detail: "Report improved sleep quality" },
              { num: "6oz", unit: "", detail: "Precision-calibrated glass microbeads" },
            ].map((f) => (
              <div key={f.detail}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: 48, fontWeight: 300, color: GOLD, lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {f.num}<span style={{ fontSize: 20, fontWeight: 300 }}>{f.unit}</span>
                </div>
                <div style={{ fontSize: 12, color: TAUPE, fontWeight: 300, lineHeight: 1.6, opacity: 0.7 }}>
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. PRODUCT GRID ═══ */}
      <section id="shop" className="lux-section" style={{
        padding: "100px 48px",
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <LuxHeading
          before="THE "
          italic="collection"
          after=""
          sub="Each piece is designed with intention, crafted with premium materials, and weighted to perfection."
        />

        <div className="lux-grid-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginTop: 60,
        }}>
          {PRODUCTS.map((product) => (
            <div key={product.id} style={{
              background: DEEP,
              overflow: "hidden",
              cursor: "default",
              border: `1px solid rgba(180,162,105,0.1)`,
            }}>
              {/* Product image */}
              <div style={{
                aspectRatio: "4/5",
                overflow: "hidden",
                position: "relative",
                background: "#191919",
              }}>
                <img src={product.img} alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                {product.tag && (
                  <span style={{
                    position: "absolute", top: 14, left: 14,
                    background: "transparent",
                    color: GOLD,
                    fontSize: 9,
                    padding: "5px 14px",
                    border: GOLD_BORDER,
                    fontWeight: 300,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}>
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{
                  fontSize: 13, fontWeight: 300, color: GOLD,
                  marginBottom: 4, letterSpacing: "0.5px",
                }}>
                  {product.name}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 300, color: TAUPE,
                  marginBottom: 10, opacity: 0.5,
                }}>
                  {product.desc}
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 300, color: WHITE,
                  marginBottom: 12,
                }}>
                  ${product.price}.00
                </div>

                {/* Stars */}
                <div style={{ marginBottom: 14 }}>
                  <Stars rating={product.rating} count={product.reviews} />
                </div>

                {/* Color swatches */}
                {product.colors.length > 0 && (
                  <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                    {product.colors.slice(0, 5).map((color) => {
                      const selected = (selectedColors[product.id] ?? product.colors[0]) === color;
                      const bg = COLOR_MAP[color] || "#ccc";
                      return (
                        <button key={color}
                          title={color}
                          onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: color }))}
                          style={{
                            width: 18, height: 18,
                            border: selected ? `1.5px solid ${GOLD}` : `1px solid rgba(180,162,105,0.2)`,
                            background: bg,
                            cursor: "pointer", padding: 0,
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    background: addedFlash === product.id ? GOLD : "transparent",
                    color: addedFlash === product.id ? DEEP : GOLD,
                    border: addedFlash === product.id ? `1px solid ${GOLD}` : GOLD_BORDER,
                    fontSize: 10,
                    fontWeight: 300,
                    cursor: "pointer",
                    letterSpacing: "2px",
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

      {/* ═══ 8. SILK COLLECTION FEATURE (50/50) ═══ */}
      <section className="lux-split" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        minHeight: 500,
      }}>
        <div style={{
          backgroundImage: `url('${LUX.silk}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          minHeight: 500,
        }} />
        <div style={{
          background: DEEP,
          display: "flex", alignItems: "center",
          padding: "80px 64px",
        }}>
          <div>
            <p style={{
              fontSize: 10, color: TAUPE, letterSpacing: "3px",
              textTransform: "uppercase", marginBottom: 24, marginTop: 0,
              fontWeight: 300, opacity: 0.5,
            }}>
              Mineralized Silk
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: 38, fontWeight: 300, color: GOLD,
              margin: "0 0 20px", lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}>
              THE MINERALIZED<br />SILK <em>collection</em>
            </h2>
            <p style={{
              fontSize: 14, color: TAUPE, lineHeight: 2,
              fontWeight: 300, margin: "0 0 36px",
              textAlign: "justify",
            }}>
              Infused with tourmaline, amethyst, and silver minerals, our Mineralized Silk
              collection goes beyond surface luxury. These minerals emit far-infrared energy
              to help regulate temperature, reduce friction on delicate skin, and promote
              cellular renewal while you sleep.
            </p>
            <button
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "14px 44px", background: "transparent",
                color: GOLD, border: GOLD_BORDER,
                fontSize: 10, fontWeight: 300, cursor: "pointer",
                letterSpacing: "2.5px", textTransform: "uppercase",
              }}>
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 9. BUNDLES SECTION ═══ */}
      <section className="lux-section" style={{
        padding: "100px 48px",
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <LuxHeading
          before="CURATED "
          italic="rituals"
          after=""
          sub="Thoughtfully paired sets for a complete sleep experience, offered at a considered price."
        />

        <div className="lux-grid-3" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 60,
        }}>
          {BUNDLES.map((bundle) => {
            const items = bundle.items.map((id) => PRODUCTS.find((p) => p.id === id)!);
            const origTotal = items.reduce((s, p) => s + p.price, 0);
            const saleTotal = Math.round(origTotal * (1 - bundle.discount / 100));
            return (
              <div key={bundle.name} style={{
                overflow: "hidden",
                background: DEEP,
                border: `1px solid rgba(180,162,105,0.1)`,
              }}>
                {/* Image mosaic */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${items.length}, 1fr)`,
                  height: 200,
                }}>
                  {items.map((p) => (
                    <img key={p.id} src={p.img} alt={p.name} style={{
                      width: "100%", height: "100%", objectFit: "cover",
                    }} />
                  ))}
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{
                    fontWeight: 300, color: GOLD, fontSize: 15,
                    marginBottom: 6, letterSpacing: "0.5px",
                  }}>
                    {bundle.name}
                  </div>
                  <div style={{ fontSize: 11, color: TAUPE, marginBottom: 20, fontWeight: 300, opacity: 0.5 }}>
                    {bundle.desc}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 22 }}>
                    <span style={{ fontSize: 22, fontWeight: 300, color: WHITE }}>
                      ${saleTotal}
                    </span>
                    <span style={{ fontSize: 14, textDecoration: "line-through", color: TAUPE, opacity: 0.4 }}>
                      ${origTotal}
                    </span>
                    <span style={{
                      border: GOLD_BORDER,
                      color: GOLD,
                      fontSize: 9,
                      padding: "4px 12px",
                      fontWeight: 300,
                      letterSpacing: "1.5px",
                    }}>
                      SAVE ${bundle.save}
                    </span>
                  </div>
                  <button
                    onClick={() => items.forEach((p) => addToCart(p))}
                    style={{
                      width: "100%",
                      padding: "14px 0",
                      background: GOLD,
                      color: DEEP,
                      border: GOLD_BORDER,
                      fontSize: 10,
                      fontWeight: 400,
                      cursor: "pointer",
                      letterSpacing: "2.5px",
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

      {/* ═══ 10. THE RITUAL SECTION ═══ */}
      <section style={{
        position: "relative",
        padding: "120px 48px",
        backgroundImage: `url('${LUX.teddy}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: 42, fontWeight: 300, color: GOLD,
            margin: "0 0 24px", lineHeight: 1.2,
            letterSpacing: "-0.5px",
          }}>
            THE EVENING <em>ritual</em>
          </h2>
          <p style={{
            fontSize: 14, color: TAUPE, lineHeight: 2,
            fontWeight: 300, margin: "0 0 20px",
            textAlign: "justify",
          }}>
            Dim the lights. Steep your tea. Place your weighted mask across your eyes and feel
            the gentle pressure quiet your mind. Let the Nodpod BODY drape across your chest or lap,
            grounding you in stillness. This is not merely sleep preparation. This is a ritual of
            intentional rest.
          </p>
          <p style={{
            fontSize: 14, color: TAUPE, lineHeight: 2,
            fontWeight: 300, margin: "0 0 44px",
            textAlign: "justify",
          }}>
            Each piece in the collection is designed to work in concert, creating layers of
            therapeutic weight that signal your nervous system to release, surrender, and restore.
          </p>
          <button
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "16px 52px", background: "transparent",
              color: GOLD, border: GOLD_BORDER,
              fontSize: 11, fontWeight: 300, cursor: "pointer",
              letterSpacing: "3px", textTransform: "uppercase",
            }}>
            Begin Your Ritual
          </button>
        </div>
      </section>

      {/* ═══ 11. PRESS SECTION ═══ */}
      <section style={{
        padding: "60px 48px",
        background: DEEP,
        borderTop: `1px solid rgba(180,162,105,0.1)`,
        borderBottom: `1px solid rgba(180,162,105,0.1)`,
      }}>
        <p style={{
          fontSize: 10, textTransform: "uppercase", letterSpacing: "3px",
          color: TAUPE, textAlign: "center", marginBottom: 32, marginTop: 0,
          fontWeight: 300, opacity: 0.4,
        }}>
          As Featured In
        </p>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 60, flexWrap: "wrap",
        }}>
          {[IMGS.allure, IMGS.nb, IMGS.nymag, IMGS.allure, IMGS.nb].map((src, i) => (
            <img key={i} src={src} alt="press" style={{
              height: 22, objectFit: "contain",
              filter: "brightness(0) saturate(100%) invert(68%) sepia(25%) saturate(500%) hue-rotate(15deg) brightness(92%)",
              opacity: 0.5,
            }} />
          ))}
        </div>
      </section>

      {/* ═══ 12. NEWSLETTER SECTION ═══ */}
      <section style={{
        padding: "100px 48px",
        background: DARK,
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          fontSize: 42, fontWeight: 300, color: GOLD,
          margin: "0 0 16px", lineHeight: 1.2,
          letterSpacing: "-0.5px",
        }}>
          WHERE <em>rest</em> BEGINS
        </h2>
        <p style={{
          fontSize: 13, color: TAUPE, fontWeight: 300,
          margin: "0 0 36px", opacity: 0.6,
          lineHeight: 1.8,
        }}>
          Join our community and receive exclusive access to new collections,<br />
          sleep rituals, and considered offers.
        </p>
        <div style={{
          display: "flex", justifyContent: "center", gap: 0,
          maxWidth: 480, margin: "0 auto",
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1, padding: "14px 20px",
              background: "transparent",
              border: GOLD_BORDER,
              borderRight: "none",
              color: WHITE, fontSize: 12, fontWeight: 300,
              letterSpacing: "0.5px",
              outline: "none",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <button style={{
            padding: "14px 32px",
            background: GOLD, color: DEEP,
            border: GOLD_BORDER,
            fontSize: 10, fontWeight: 400,
            cursor: "pointer",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}>
            Sign Up
          </button>
        </div>
      </section>

      {/* ═══ 13. FOOTER ═══ */}
      <footer style={{
        background: DEEP,
        borderTop: `1px solid rgba(180,162,105,0.15)`,
        padding: "64px 48px 40px",
      }}>
        <div className="lux-footer-grid" style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand column */}
          <div>
            <img src={IMGS.logo} alt="nodpod" style={{
              height: 22, marginBottom: 18, display: "block",
              filter: "brightness(0) saturate(100%) invert(68%) sepia(25%) saturate(500%) hue-rotate(15deg) brightness(92%)",
            }} />
            <p style={{
              fontSize: 12, color: TAUPE, lineHeight: 1.8, fontWeight: 300, margin: 0,
              opacity: 0.5,
            }}>
              The original weighted sleep mask. Designed to help you discover the ritual of deep,
              restorative sleep through the science of Deep Touch Pressure.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 300, color: GOLD,
              textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: 20,
            }}>
              Shop
            </div>
            {["Sleep Masks", "Body", "Silk Pillowcase", "Bundles", "Gift Cards"].map((lnk) => (
              <div key={lnk} style={{
                fontSize: 12, color: TAUPE, cursor: "pointer",
                marginBottom: 12, fontWeight: 300, opacity: 0.5,
              }}>
                {lnk}
              </div>
            ))}
          </div>

          {/* About links */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 300, color: GOLD,
              textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: 20,
            }}>
              About
            </div>
            {["Our Story", "The Science", "Reviews", "Press"].map((lnk) => (
              <div key={lnk} style={{
                fontSize: 12, color: TAUPE, cursor: "pointer",
                marginBottom: 12, fontWeight: 300, opacity: 0.5,
              }}>
                {lnk}
              </div>
            ))}
          </div>

          {/* Support links */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 300, color: GOLD,
              textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: 20,
            }}>
              Support
            </div>
            {["FAQ", "Shipping & Returns", "Contact Us", "Privacy Policy"].map((lnk) => (
              <div key={lnk} style={{
                fontSize: 12, color: TAUPE, cursor: "pointer",
                marginBottom: 12, fontWeight: 300, opacity: 0.5,
              }}>
                {lnk}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid rgba(180,162,105,0.1)`,
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          <div style={{ fontSize: 10, color: TAUPE, fontWeight: 300, opacity: 0.3 }}>
            &copy; {new Date().getFullYear()} Nodpod. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Instagram", "TikTok", "Pinterest"].map((soc) => (
              <span key={soc} style={{
                fontSize: 10, color: GOLD, cursor: "pointer",
                fontWeight: 300, letterSpacing: "1.5px",
                textTransform: "uppercase", opacity: 0.6,
              }}>
                {soc}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* ═══ 14. CART DRAWER ═══ */}
      <CartDrawer
        cart={cart} isOpen={cartOpen} onClose={() => setCartOpen(false)}
        onRemove={removeFromCart} onQty={updateQty} onAddUpsell={addUpsell}
      />

      {/* ═══ POST-PURCHASE MODAL ═══ */}
      <PostPurchaseUpsell show={showUpsell} onClose={() => setShowUpsell(false)} />

      {/* Demo trigger */}
      {cart.length > 0 && (
        <button onClick={() => setShowUpsell(true)} style={{
          position: "fixed", bottom: 20, left: 20, zIndex: 50,
          background: DEEP,
          border: `1px solid rgba(180,162,105,0.2)`,
          color: GOLD, padding: "8px 18px", fontSize: 10, cursor: "pointer",
          fontWeight: 300, letterSpacing: "1px",
        }}>
          Demo: Post-Purchase Upsell
        </button>
      )}
    </div>
  );
}
