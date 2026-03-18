"use client";

import { useState, useEffect } from "react";

/* ─── Theme tokens ───────────────────────────────────────────────────────── */
const BLUE      = "#2563eb";
const BLUE_LT   = "#60a5fa";
const BLUE_GRAD = "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)";
const EMERALD   = "#34d399";
const TEXT      = "#e2e8f0";
const MUTED     = "#94a3b8";
const GLASS_BG  = "rgba(255,255,255,0.07)";
const GLASS_BR  = "rgba(255,255,255,0.11)";

const glass = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background:              GLASS_BG,
  backdropFilter:          "blur(24px)",
  WebkitBackdropFilter:    "blur(24px)",
  border:                  `1px solid ${GLASS_BR}`,
  ...extra,
});

/* ─── CDN assets ─────────────────────────────────────────────────────────── */
const CDN = "https://nodpod.com/cdn/shop";
const IMGS = {
  logo:     `${CDN}/files/logo-v2.svg?v=1726976705`,
  heroBg:   `${CDN}/files/Resort_Web_Banners_mobile.png?v=1773245245`,
  heroDark: `${CDN}/files/Midnight_Web_Banners_Mobile.png?v=1769014584`,
  allure:   `${CDN}/files/allure3-new.svg?v=1743884874`,
  nb:       `${CDN}/files/nb-logo-en.svg?v=1744512231`,
  nymag:    `https://cdn.shopify.com/s/files/1/0253/2982/7939/files/new-york-mag-logo.svg?v=1727230418`,
};

/* ─── Product catalog ────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, name: "Nodpod Sleep Mask", price: 38,
    img: `${CDN}/products/Wisteria.jpg?v=1739677254&width=600`,
    colors: ["Slate", "Blush", "Sage", "Midnight", "Clay"], tag: "Best Seller",
  },
  {
    id: 2, name: "Mineralized Silk™ Sleep Mask", price: 68,
    img: `${CDN}/files/CopyofMask_Sage2.png?v=1706778858&width=600`,
    colors: ["Pearl", "Onyx", "Rose", "Sage"], tag: "Premium",
  },
  {
    id: 3, name: "Nodpod BODY", price: 92,
    img: `${CDN}/files/DSC00837_7a10fb04-d25f-4f32-9f28-e7ba454971aa.jpg?v=1707854911&width=600`,
    colors: ["Oat", "Slate", "Sage", "Midnight"], tag: "",
  },
  {
    id: 4, name: "Teddy Sleep Mask", price: 42,
    img: `${CDN}/files/image71.png?v=1760465998&width=600`,
    colors: ["Cream", "Cocoa"], tag: "Cozy",
  },
  {
    id: 5, name: "Teddy Body", price: 102,
    img: `${CDN}/files/Nodpod_TeddyBody_TeddyBear_01_6999a985-c5e6-4fc6-a402-3ea2c342356f.png?v=1761748039&width=600`,
    colors: ["Cream"], tag: "",
  },
  {
    id: 6, name: "Mineralized Silk™ Pillowcase", price: 102,
    img: `${CDN}/files/PEARL_PC_PDP_02.png?v=1757624739&width=600`,
    colors: ["Pearl", "Sage"], tag: "",
  },
  {
    id: 7, name: "Silk Scrunchies", price: 35,
    img: `${CDN}/files/Silk_Wash_at_Laundromat_x_Nodpod_1832.jpg?v=1758900260&width=600`,
    colors: ["Assorted"], tag: "Gift Idea",
  },
  {
    id: 8, name: "Silk Laundry Wash", price: 27,
    img: `${CDN}/files/Silk_Wash_at_Laundromat_x_Nodpod_1832.jpg?v=1758900260&width=600`,
    colors: [], tag: "Add-on",
  },
];

const BUNDLES = [
  { name: "Sleep Ritual Bundle",  items: [1, 6], discount: 15, save: 21, desc: "Sleep Mask + Silk Pillowcase" },
  { name: "Ultimate Rest Bundle", items: [1, 3], discount: 12, save: 16, desc: "Sleep Mask + BODY Weighted Pod" },
  { name: "Silk Luxury Bundle",   items: [2, 6, 7], discount: 10, save: 21, desc: "Silk Mask + Pillowcase + Scrunchies" },
];

const UPSELLS = [
  { id: 8, reason: "Protect your silk — gentle wash formula", price: 27 },
  { id: 7, reason: "Complete the set — silk scrunchies", price: 35 },
  { id: 4, reason: "Try our coziest mask", price: 42 },
];

const FREE_SHIP = 50;

/* ─── Shipping progress bar ──────────────────────────────────────────────── */
function ShippingBar({ total }: { total: number }) {
  const pct       = Math.min((total / FREE_SHIP) * 100, 100);
  const remaining = Math.max(FREE_SHIP - total, 0);
  return (
    <div style={{ ...glass({ borderRadius: 10, padding: "10px 14px", marginBottom: 14 }) }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: MUTED, marginBottom: 7 }}>
        {remaining > 0 ? (
          <span style={{ color: TEXT }}>
            <strong style={{ color: BLUE_LT }}>${remaining.toFixed(0)}</strong> away from{" "}
            <strong style={{ color: BLUE_LT }}>FREE shipping</strong>
          </span>
        ) : (
          <span style={{ color: EMERALD, fontWeight: 600 }}>✓ Free shipping unlocked!</span>
        )}
        <span>${FREE_SHIP}</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 5, overflow: "hidden" }}>
        <div style={{
          width: `${pct}%`, height: "100%",
          background: pct >= 100 ? `linear-gradient(90deg,${EMERALD},#10b981)` : BLUE_GRAD,
          borderRadius: 99, transition: "width 0.55s ease",
          boxShadow: `0 0 10px ${pct >= 100 ? EMERALD : BLUE}88`,
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
  const subtotal       = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const inCartIds      = cart.map((c) => c.product.id);
  const availUpsells   = UPSELLS.filter((u) => !inCartIds.includes(u.id));

  return (
    <>
      {isOpen && (
        <div onClick={onClose} style={{
          position: "fixed", inset: 0, zIndex: 998,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        }} />
      )}

      <div style={{
        position: "fixed", top: 0, right: isOpen ? 0 : -440,
        width: 420, maxWidth: "93vw", height: "100vh", zIndex: 999,
        background: "linear-gradient(180deg,#061428 0%,#030d18 100%)",
        boxShadow: "-2px 0 60px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)",
        transition: "right 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
        fontFamily: "'Inter',sans-serif",
      }}>

        {/* Header */}
        <div style={{
          padding: "18px 22px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h3 style={{ margin: 0, fontSize: 16, color: TEXT, fontWeight: 600 }}>
            Your Cart{" "}
            <span style={{ color: BLUE_LT }}>({cart.reduce((s, c) => s + c.qty, 0)})</span>
          </h3>
          <button onClick={onClose} style={{
            ...glass({ borderRadius: 8 }),
            color: MUTED, border: `1px solid ${GLASS_BR}`,
            fontSize: 18, cursor: "pointer",
            width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>

        {/* Shipping bar */}
        <div style={{ padding: "12px 22px 0" }}>
          <ShippingBar total={subtotal} />
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 22px" }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: MUTED, marginTop: 60, fontSize: 14 }}>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} style={{
                display: "flex", gap: 13, padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <div style={{
                  width: 70, height: 70, borderRadius: 10, overflow: "hidden",
                  flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <img src={item.product.img} alt={item.product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{item.product.name}</div>
                  {item.color && (
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{item.color}</div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                    <div style={{
                      display: "flex", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 6, overflow: "hidden",
                    }}>
                      <button onClick={() => onQty(item.product.id, item.qty - 1)}
                        style={{ width: 28, height: 28, border: "none", background: "rgba(255,255,255,0.06)", color: TEXT, cursor: "pointer", fontSize: 14 }}>
                        −
                      </button>
                      <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: TEXT }}>
                        {item.qty}
                      </span>
                      <button onClick={() => onQty(item.product.id, item.qty + 1)}
                        style={{ width: 28, height: 28, border: "none", background: "rgba(255,255,255,0.06)", color: TEXT, cursor: "pointer", fontSize: 14 }}>
                        +
                      </button>
                    </div>
                    <button onClick={() => onRemove(item.product.id)}
                      style={{ fontSize: 11, color: MUTED, background: "none", border: "none", cursor: "pointer" }}>
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: BLUE_LT, whiteSpace: "nowrap" }}>
                  ${(item.product.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}

          {/* Upsells */}
          {cart.length > 0 && availUpsells.length > 0 && (
            <div style={{ marginTop: 16, paddingBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: BLUE_LT, marginBottom: 10, textTransform: "uppercase", letterSpacing: 2 }}>
                Complete Your Sleep Ritual
              </div>
              {availUpsells.slice(0, 2).map((u) => {
                const prod = PRODUCTS.find((p) => p.id === u.id)!;
                return (
                  <div key={u.id} style={{
                    ...glass({ borderRadius: 10, padding: "9px 12px", marginBottom: 8 }),
                    display: "flex", alignItems: "center", gap: 11,
                  }}>
                    <div style={{ width: 42, height: 42, borderRadius: 7, overflow: "hidden", flexShrink: 0 }}>
                      <img src={prod.img} alt={prod.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: TEXT }}>{prod.name}</div>
                      <div style={{ fontSize: 10, color: MUTED }}>{u.reason}</div>
                    </div>
                    <button onClick={() => onAddUpsell(u.id)} style={{
                      background: BLUE_GRAD, color: "#fff", border: "none",
                      padding: "5px 11px", borderRadius: 6, fontSize: 11,
                      fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                    }}>
                      +${prod.price}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Checkout footer */}
        {cart.length > 0 && (
          <div style={{ padding: "14px 22px 22px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ fontSize: 13, color: MUTED }}>Subtotal</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, color: MUTED, marginBottom: 14 }}>
              {subtotal >= FREE_SHIP ? "✓ Free shipping included" : "Shipping calculated at checkout"}
            </div>
            <button style={{
              width: "100%", padding: "13px 0", background: BLUE_GRAD,
              color: "#fff", border: "none", borderRadius: 10, fontSize: 14,
              fontWeight: 600, cursor: "pointer",
              boxShadow: `0 4px 20px ${BLUE}55`,
            }}>
              Checkout →
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 11 }}>
              {["Apple Pay", "Shop Pay", "Google Pay"].map((p) => (
                <span key={p} style={{
                  fontSize: 10, ...glass({ borderRadius: 4 }),
                  padding: "3px 9px", color: MUTED, fontWeight: 500,
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
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        ...glass({
          borderRadius: 22,
          boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px ${GLASS_BR}`,
        }),
        background: "linear-gradient(135deg,rgba(6,20,40,0.97),rgba(3,13,24,0.99))",
        maxWidth: 420, width: "90%", padding: "32px 28px",
        textAlign: "center", fontFamily: "'Inter',sans-serif",
      }}>
        <div style={{
          display: "inline-block", background: `${BLUE}33`,
          border: `1px solid ${BLUE_LT}44`, padding: "5px 14px",
          borderRadius: 99, fontSize: 10, color: BLUE_LT,
          fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14,
        }}>
          One-Time Offer
        </div>
        <h3 style={{ fontSize: 22, color: TEXT, margin: "0 0 10px", fontWeight: 700 }}>
          Protect Your Silk
        </h3>
        <p style={{ fontSize: 13, color: MUTED, marginBottom: 22, lineHeight: 1.7 }}>
          Add the <strong style={{ color: TEXT }}>Silk Laundry Wash</strong> to protect your investment.
          This offer is only available right now.
        </p>
        <div style={{
          ...glass({ borderRadius: 14, padding: "14px 18px", marginBottom: 20 }),
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{ width: 60, height: 60, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
            <img src={wash.img} alt={wash.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 600, color: TEXT, fontSize: 13 }}>Silk Laundry Wash</div>
            <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>Gentle formula for silk & delicates</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 7 }}>
              <span style={{ fontWeight: 700, color: EMERALD, fontSize: 18 }}>$19</span>
              <span style={{ textDecoration: "line-through", color: "#475569", fontSize: 13 }}>$27</span>
              <span style={{
                background: `${EMERALD}22`, color: EMERALD,
                fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 600,
              }}>SAVE 30%</span>
            </div>
          </div>
        </div>
        <button style={{
          width: "100%", padding: 13, background: BLUE_GRAD, color: "#fff",
          border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600,
          cursor: "pointer", marginBottom: 10, boxShadow: `0 4px 20px ${BLUE}55`,
        }}>
          Yes, Add to My Order — $19
        </button>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: MUTED, fontSize: 12, cursor: "pointer",
        }}>
          No thanks, I&apos;ll skip this
        </button>
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function NodpodDemo() {
  const [cart, setCart]                   = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen]           = useState(false);
  const [showUpsell, setShowUpsell]       = useState(false);
  const [addedFlash, setAddedFlash]       = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});

  /* Inject global styles */
  useEffect(() => {
    const s = document.createElement("style");
    s.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.14); border-radius: 99px; }
      .prod-card { transition: transform 0.25s, border-color 0.25s !important; }
      .prod-card:hover { transform: translateY(-5px) !important; border-color: rgba(96,165,250,0.35) !important; }
      .prod-card:hover .prod-img { transform: scale(1.06) !important; }
      .bundle-card:hover { transform: translateY(-4px) !important; border-color: rgba(96,165,250,0.35) !important; }
      .nav-link:hover { color: #e2e8f0 !important; }
      @keyframes orb-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      .orb { animation: orb-float 9s ease-in-out infinite; }
      .orb2 { animation: orb-float 12s ease-in-out 4s infinite; }
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
  const addUpsell    = (id: number) => addToCart(PRODUCTS.find((p) => p.id === id)!);
  const cartCount    = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div style={{
      background: "linear-gradient(160deg,#020c1a 0%,#050f22 45%,#071830 80%,#020c1a 100%)",
      minHeight: "100vh", fontFamily: "'Inter',sans-serif", color: TEXT,
      position: "relative", overflowX: "hidden",
    }}>

      {/* Ambient glow orbs */}
      <div className="orb" style={{
        position: "fixed", top: "-5%", left: "-8%", width: 700, height: 700,
        background: "radial-gradient(circle,rgba(37,99,235,0.13) 0%,transparent 68%)",
        pointerEvents: "none", zIndex: 0, borderRadius: "50%",
      }} />
      <div className="orb2" style={{
        position: "fixed", bottom: "-8%", right: "-8%", width: 900, height: 900,
        background: "radial-gradient(circle,rgba(14,165,233,0.09) 0%,transparent 65%)",
        pointerEvents: "none", zIndex: 0, borderRadius: "50%",
      }} />
      <div style={{
        position: "fixed", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
        width: 1200, height: 600,
        background: "radial-gradient(ellipse,rgba(37,99,235,0.05) 0%,transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── Announcement bar ─── */}
        <div style={{
          background: `linear-gradient(90deg,rgba(37,99,235,0.18),rgba(14,165,233,0.18))`,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          textAlign: "center", padding: "9px 16px",
          fontSize: 12, fontWeight: 500, letterSpacing: 0.8,
        }}>
          <span style={{ color: BLUE_LT }}>✦</span>
          {"  "}FREE SHIPPING ON ORDERS OVER $50{"  ·  "}DEEP TOUCH PRESSURE TECHNOLOGY{"  "}
          <span style={{ color: BLUE_LT }}>✦</span>
        </div>

        {/* ─── Header ─── */}
        <header style={{
          background: "rgba(2,12,26,0.82)",
          backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "14px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          position: "sticky", top: 0, zIndex: 100,
        }}>
          <img src={IMGS.logo} alt="nodpod" style={{ height: 30, filter: "brightness(20) saturate(0)" }} />
          <nav style={{ display: "flex", gap: 30, alignItems: "center" }}>
            {["Shop", "Our Story", "Science", "Reviews"].map((lnk) => (
              <span key={lnk} className="nav-link" style={{ fontSize: 13, color: MUTED, cursor: "pointer" }}>{lnk}</span>
            ))}
            <button onClick={() => setCartOpen(true)} style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.3)",
              color: TEXT, fontSize: 13, fontWeight: 500,
              padding: "7px 16px", borderRadius: 8, cursor: "pointer",
            }}>
              <span>🛍</span> Cart
              {cartCount > 0 && (
                <span style={{
                  background: BLUE_GRAD, color: "#fff", fontSize: 10,
                  minWidth: 18, height: 18, borderRadius: 99,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, padding: "0 4px",
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </header>

        {/* ─── Hero ─── */}
        <section style={{ position: "relative", minHeight: 540, display: "flex", alignItems: "center", overflow: "hidden" }}>
          {/* Background layer */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(105deg,rgba(2,12,26,0.92) 0%,rgba(5,15,32,0.75) 50%,rgba(2,12,26,0.5) 100%), url('${IMGS.heroBg}')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          {/* Blue glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 65% 50%,rgba(37,99,235,0.18) 0%,transparent 60%)",
          }} />

          <div style={{ position: "relative", padding: "90px 64px", maxWidth: 680 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.35)",
              padding: "5px 14px", borderRadius: 99, marginBottom: 22,
            }}>
              <span style={{ fontSize: 9, width: 6, height: 6, borderRadius: "50%", background: BLUE_LT, display: "inline-block" }} />
              <span style={{ fontSize: 11, color: BLUE_LT, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                Deep Touch Pressure Technology
              </span>
            </div>
            <h1 style={{
              fontSize: 58, fontWeight: 800, color: "#fff",
              lineHeight: 1.07, margin: "0 0 20px",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}>
              Chill More.<br />
              <span style={{
                background: BLUE_GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Sleep Better.
              </span>
            </h1>
            <p style={{ fontSize: 16, color: "#c8d8e8", lineHeight: 1.75, maxWidth: 460, margin: "0 0 34px" }}>
              The weighted blanket for your eyes. Our patented 4-pod design uses Deep Touch Pressure
              to calm your nervous system and prepare you for deep, restorative sleep.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "14px 38px", background: BLUE_GRAD, color: "#fff",
                  border: "none", borderRadius: 10, fontSize: 15,
                  fontWeight: 600, cursor: "pointer",
                  boxShadow: `0 6px 28px ${BLUE}66`,
                }}>
                Shop Now →
              </button>
              <button style={{
                padding: "14px 28px",
                ...glass({ borderRadius: 10 }),
                color: TEXT, fontSize: 15, fontWeight: 500, cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                Our Science
              </button>
            </div>

            {/* Social proof chips */}
            <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
              {[
                { icon: "⭐", label: "4.9 / 5", sub: "2,400+ reviews" },
                { icon: "🏆", label: "Allure", sub: "Best of Beauty" },
                { icon: "💡", label: "Patented", sub: "4-Pod Design" },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{
                  display: "flex", gap: 9, alignItems: "center",
                  ...glass({ borderRadius: 10, padding: "9px 14px" }),
                }}>
                  <span style={{ fontSize: 22 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{label}</div>
                    <div style={{ fontSize: 10, color: MUTED }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Press strip ─── */}
        <div style={{
          background: "rgba(255,255,255,0.025)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "16px 40px",
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 44, flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 10, color: "#475569", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
            As seen in
          </span>
          {[IMGS.allure, IMGS.nb, IMGS.nymag].map((src, i) => (
            <img key={i} src={src} alt="press" style={{ height: 20, opacity: 0.4, filter: "brightness(20) saturate(0)", objectFit: "contain" }} />
          ))}
        </div>

        {/* ─── Trust features ─── */}
        <section style={{ padding: "52px 40px", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            {[
              { icon: "🧠", title: "Clinically Backed",    desc: "Deep Touch Pressure reduces cortisol and promotes melatonin for deeper sleep" },
              { icon: "✨", title: "Premium Materials",    desc: "Mineralized Silk and weighted microbeads for the ultimate sleep experience" },
              { icon: "🔄", title: "30-Night Sleep Trial", desc: "Love it or return it — no questions asked, free returns on all orders" },
              { icon: "📦", title: "Ships in 24 Hours",    desc: "All orders ship next business day. Free shipping over $50, always" },
            ].map((f) => (
              <div key={f.title} style={{ ...glass({ borderRadius: 14, padding: "20px 18px" }), transition: "transform 0.2s,border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = GLASS_BR; }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 5 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.55 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Bundles ─── */}
        <section style={{ padding: "0 40px 52px", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, margin: "0 0 6px" }}>Save with Bundles</h2>
            <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>Curated sleep sets — save up to 15% when you bundle.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(265px,1fr))", gap: 18 }}>
            {BUNDLES.map((bundle) => {
              const items         = bundle.items.map((id) => PRODUCTS.find((p) => p.id === id)!);
              const origTotal     = items.reduce((s, p) => s + p.price, 0);
              const saleTotal     = Math.round(origTotal * (1 - bundle.discount / 100));
              return (
                <div key={bundle.name} className="bundle-card" style={{
                  ...glass({ borderRadius: 16, overflow: "hidden" }),
                  transition: "transform 0.25s,border-color 0.25s",
                }}>
                  {/* Image mosaic */}
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length},1fr)`, height: 130 }}>
                    {items.map((p) => (
                      <img key={p.id} src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ))}
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: 15, marginBottom: 3 }}>{bundle.name}</div>
                    <div style={{ fontSize: 12, color: MUTED, marginBottom: 12 }}>{bundle.desc}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: BLUE_LT }}>${saleTotal}</span>
                      <span style={{ fontSize: 13, textDecoration: "line-through", color: "#475569" }}>${origTotal}</span>
                      <span style={{ background: `${EMERALD}22`, color: EMERALD, fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 600 }}>
                        SAVE ${bundle.save}
                      </span>
                    </div>
                    <button onClick={() => items.forEach((p) => addToCart(p))} style={{
                      width: "100%", padding: 10, background: BLUE_GRAD,
                      color: "#fff", border: "none", borderRadius: 8,
                      fontSize: 13, fontWeight: 600, cursor: "pointer",
                      boxShadow: `0 2px 14px ${BLUE}44`,
                    }}>
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Product grid ─── */}
        <section id="shop" style={{ padding: "0 40px 90px", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 26 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, margin: 0 }}>Shop All</h2>
            <span style={{ fontSize: 12, color: MUTED }}>{PRODUCTS.length} products</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(215px,1fr))", gap: 20 }}>
            {PRODUCTS.map((product) => (
              <div key={product.id} className="prod-card" style={{
                ...glass({ borderRadius: 16, overflow: "hidden" }),
                cursor: "default",
              }}>
                {/* Product image */}
                <div style={{ height: 210, overflow: "hidden", position: "relative", background: "rgba(255,255,255,0.04)" }}>
                  <img className="prod-img" src={product.img} alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.45s" }} />
                  {product.tag && (
                    <span style={{
                      position: "absolute", top: 10, left: 10,
                      background:
                        product.tag === "Best Seller" ? BLUE_GRAD :
                        product.tag === "Premium" ? "linear-gradient(135deg,#c9a200,#f5d56a)" :
                        "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                      color: "#fff", fontSize: 10, padding: "4px 10px",
                      borderRadius: 6, fontWeight: 700, letterSpacing: 0.5,
                    }}>
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 4 }}>{product.name}</div>
                  <div style={{ fontSize: 19, fontWeight: 700, color: BLUE_LT, marginBottom: 10 }}>${product.price}</div>

                  {product.colors.length > 0 && (
                    <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
                      {product.colors.slice(0, 5).map((color) => {
                        const selected = (selectedColors[product.id] ?? product.colors[0]) === color;
                        return (
                          <button key={color}
                            onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: color }))}
                            style={{
                              fontSize: 10, padding: "3px 8px", borderRadius: 4,
                              border: `1px solid ${selected ? BLUE_LT : "rgba(255,255,255,0.14)"}`,
                              background: selected ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.04)",
                              cursor: "pointer", color: selected ? BLUE_LT : MUTED,
                              fontWeight: selected ? 600 : 400, transition: "all 0.15s",
                            }}>
                            {color}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <button onClick={() => addToCart(product)} style={{
                    width: "100%", padding: "9px 0",
                    background: addedFlash === product.id
                      ? `linear-gradient(135deg,${EMERALD},#10b981)`
                      : BLUE_GRAD,
                    color: "#fff", border: "none", borderRadius: 8,
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: addedFlash === product.id
                      ? `0 2px 14px ${EMERALD}55`
                      : `0 2px 14px ${BLUE}44`,
                  }}>
                    {addedFlash === product.id ? "✓ Added!" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer style={{
          background: "rgba(2,8,20,0.8)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 40px",
        }}>
          <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div>
              <img src={IMGS.logo} alt="nodpod" style={{ height: 26, filter: "brightness(20) saturate(0)", marginBottom: 6, display: "block" }} />
              <div style={{ fontSize: 11, color: "#334155" }}>Deep Touch Pressure for Better Sleep</div>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Shop", "Science", "Reviews", "FAQ", "Contact"].map((lnk) => (
                <span key={lnk} style={{ fontSize: 12, color: "#475569", cursor: "pointer" }}>{lnk}</span>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "#1e293b" }}>© 2025 Nodpod · nodpod.com</div>
          </div>
        </footer>
      </div>

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
          ...glass({ borderRadius: 8 }),
          border: "1px solid rgba(255,255,255,0.12)",
          color: MUTED, padding: "8px 16px", fontSize: 11, cursor: "pointer",
        }}>
          Demo: Post-Purchase Upsell
        </button>
      )}
    </div>
  );
}
