"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════════
   BUILDER WORKSHOP — Bamberg Digital Homepage
   All content visible by default. Animations enhance only.
   ═══════════════════════════════════════════════════════════════════ */

/* ─── Palette ──────────────────────────────────────────────────── */
const C = {
  bg: "#111114",
  bgLight: "#18181c",
  card: "#1c1c22",
  cardHover: "#222229",
  steel: "#2a2a31",
  steelLight: "#38383f",
  blue: "#4a9ece",
  blueGlow: "#62b4e0",
  blueDim: "rgba(74,158,206,0.12)",
  blueFaint: "rgba(74,158,206,0.05)",
  orange: "#e8872b",
  orangeDim: "rgba(232,135,43,0.15)",
  text: "#e8e6e1",
  textSoft: "#a8a59e",
  textMute: "#6a6760",
  textDim: "#3a3830",
  border: "rgba(74,158,206,0.10)",
  borderHover: "rgba(74,158,206,0.30)",
};

const MONO = "var(--font-mono, 'JetBrains Mono'), 'SF Mono', 'Fira Code', monospace";
const HEAD = "var(--font-montserrat, 'Montserrat'), 'Helvetica Neue', sans-serif";
const BODY = "var(--font-inter, 'Inter'), system-ui, sans-serif";

/* ─── Catalog Data (50 website types) ──────────────────────────── */
type CatItem = {
  id: string;
  name: string;
  cat: string;
  tag: string;
  layout: "hero" | "sidebar" | "grid" | "services" | "booking" | "gallery" | "local" | "store";
  accent: string;
  features: string[];
  vibe: string;
};

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "food", label: "Food & Drink" },
  { id: "health", label: "Health & Medical" },
  { id: "beauty", label: "Beauty & Fitness" },
  { id: "home", label: "Home Services" },
  { id: "pro", label: "Professional" },
  { id: "auto", label: "Auto & Real Estate" },
  { id: "creative", label: "Creative" },
  { id: "community", label: "Community" },
  { id: "specialty", label: "Specialty" },
];

const CATALOG: CatItem[] = [
  // ─── Food & Drink ───
  { id: "restaurant", name: "Restaurant", cat: "food", tag: "Online ordering, reservations, menus that sell", layout: "hero", accent: "#e85d3a", features: ["Online ordering (Square / Toast)", "Reservation system integration", "Photo-rich menu with dietary filters", "Mobile-first — 73% of traffic"], vibe: "Warm & Appetizing" },
  { id: "cafe", name: "Cafe & Coffee Shop", cat: "food", tag: "Cozy vibes, online orders, loyalty programs", layout: "hero", accent: "#8B6914", features: ["Online ordering & pickup", "Loyalty program integration", "Instagram feed widget", "Menu with seasonal rotations"], vibe: "Cozy & Inviting" },
  { id: "bakery", name: "Bakery", cat: "food", tag: "Custom orders, gallery, seasonal menus", layout: "gallery", accent: "#D4956A", features: ["Custom order request forms", "Product gallery with categories", "Seasonal menu updates", "Wholesale inquiry page"], vibe: "Sweet & Artisanal" },
  { id: "brewery", name: "Brewery & Winery", cat: "food", tag: "Taproom menus, events, merchandise sales", layout: "store", accent: "#B8860B", features: ["Taproom / tasting menu", "Event calendar & tickets", "Online merch store", "Age verification gate"], vibe: "Craft & Bold" },
  { id: "food-truck", name: "Food Truck", cat: "food", tag: "Location tracker, daily specials, catering", layout: "local", accent: "#FF6B35", features: ["Real-time location updates", "Daily menu / specials board", "Catering inquiry forms", "Social media integration"], vibe: "Bold & Street" },
  { id: "bar", name: "Bar & Lounge", cat: "food", tag: "Events, specials, atmosphere that converts", layout: "hero", accent: "#9B59B6", features: ["Event listings & bottle service", "Cocktail / drink menu", "VIP reservation system", "Photo gallery & atmosphere"], vibe: "Moody & Upscale" },

  // ─── Health & Medical ───
  { id: "dental", name: "Dental Practice", cat: "health", tag: "Appointments, services, patient trust", layout: "sidebar", accent: "#4ECDC4", features: ["Online appointment booking", "Treatment pages with visuals", "Patient forms & portal links", "Insurance info & payment plans"], vibe: "Clean & Trustworthy" },
  { id: "medical", name: "Medical Practice", cat: "health", tag: "Patient portal, provider bios, telehealth", layout: "sidebar", accent: "#3498DB", features: ["Provider profiles & credentials", "Patient portal integration", "Telehealth scheduling", "HIPAA-aware form handling"], vibe: "Professional & Caring" },
  { id: "chiro", name: "Chiropractic", cat: "health", tag: "Online booking, treatments, wellness content", layout: "booking", accent: "#27AE60", features: ["Online appointment scheduling", "Treatment & condition pages", "Wellness blog for SEO", "New patient intake forms"], vibe: "Active & Healing" },
  { id: "vet", name: "Veterinary Clinic", cat: "health", tag: "Pet portal, services, emergency info", layout: "sidebar", accent: "#E67E22", features: ["Online appointment booking", "Emergency contact & hours", "Service descriptions by animal", "Pet health resource center"], vibe: "Friendly & Caring" },

  // ─── Beauty & Fitness ───
  { id: "salon", name: "Hair Salon", cat: "beauty", tag: "Online booking, stylist profiles, transformations", layout: "booking", accent: "#E91E63", features: ["Online booking (Vagaro / Booksy)", "Stylist profiles & portfolios", "Before / after gallery", "Product recommendations"], vibe: "Stylish & Modern" },
  { id: "barbershop", name: "Barbershop", cat: "beauty", tag: "Appointment booking, services, the crew", layout: "booking", accent: "#795548", features: ["Walk-in & appointment booking", "Service menu with pricing", "Barber team profiles", "Location & hours widget"], vibe: "Classic & Sharp" },
  { id: "spa", name: "Spa & Wellness Center", cat: "beauty", tag: "Treatment menu, booking, gift cards", layout: "booking", accent: "#00897B", features: ["Treatment menu & packages", "Online booking system", "Gift card purchasing", "Wellness blog & tips"], vibe: "Serene & Luxurious" },
  { id: "gym", name: "Gym & Fitness Center", cat: "beauty", tag: "Class schedules, memberships, trainer bios", layout: "hero", accent: "#F44336", features: ["Class schedule & registration", "Membership tiers & sign-up", "Trainer profiles & bios", "Virtual tour & facility photos"], vibe: "Energetic & Bold" },
  { id: "yoga", name: "Yoga Studio", cat: "beauty", tag: "Class booking, workshops, retreat info", layout: "booking", accent: "#9C27B0", features: ["Class schedule & booking", "Workshop & retreat pages", "Instructor profiles", "Online class streaming links"], vibe: "Calm & Centered" },
  { id: "trainer", name: "Personal Trainer", cat: "beauty", tag: "Programs, booking, transformation results", layout: "hero", accent: "#FF5722", features: ["Program packages & pricing", "Online session booking", "Client transformation gallery", "Nutrition & fitness blog"], vibe: "Dynamic & Results-Driven" },
  { id: "dance", name: "Dance Studio", cat: "beauty", tag: "Class registration, recitals, performances", layout: "booking", accent: "#E040FB", features: ["Class schedule by style & level", "Online registration & payment", "Recital & performance calendar", "Instructor bios & videos"], vibe: "Vibrant & Expressive" },

  // ─── Home Services ───
  { id: "contractor", name: "General Contractor", cat: "home", tag: "Portfolio, estimates, licensing & trust", layout: "services", accent: "#FF9800", features: ["Project portfolio with galleries", "Online estimate request form", "License & insurance badges", "Service area map & pages"], vibe: "Rugged & Professional" },
  { id: "plumber", name: "Plumbing", cat: "home", tag: "Emergency service, areas, instant contact", layout: "services", accent: "#2196F3", features: ["24/7 emergency contact banner", "Service descriptions & pricing", "Service area coverage map", "Customer reviews integration"], vibe: "Reliable & Fast" },
  { id: "electrician", name: "Electrical", cat: "home", tag: "Safety-first services, booking, certifications", layout: "services", accent: "#FFC107", features: ["Service menu (residential / commercial)", "Safety certification badges", "Online booking & estimates", "Emergency service callout"], vibe: "Technical & Trustworthy" },
  { id: "hvac", name: "HVAC", cat: "home", tag: "Seasonal service, maintenance plans, financing", layout: "services", accent: "#00BCD4", features: ["Seasonal promotion banners", "Maintenance plan sign-up", "Financing options page", "Energy efficiency calculator"], vibe: "Comfortable & Efficient" },
  { id: "roofing", name: "Roofing", cat: "home", tag: "Free inspections, materials, before/after", layout: "services", accent: "#8D6E63", features: ["Free inspection request form", "Materials & options comparison", "Before / after project gallery", "Storm damage assessment page"], vibe: "Solid & Dependable" },
  { id: "landscaping", name: "Landscaping", cat: "home", tag: "Design gallery, seasonal services, maintenance", layout: "gallery", accent: "#4CAF50", features: ["Project design gallery", "Seasonal service packages", "Maintenance plan sign-up", "Outdoor living inspiration blog"], vibe: "Natural & Creative" },
  { id: "pest", name: "Pest Control", cat: "home", tag: "Treatment plans, prevention, instant booking", layout: "services", accent: "#607D8B", features: ["Pest identification guides", "Treatment plan options", "Prevention tip resources", "Same-day booking capability"], vibe: "Clean & Thorough" },
  { id: "pool", name: "Pool Service", cat: "home", tag: "Maintenance plans, repairs, new installations", layout: "services", accent: "#03A9F4", features: ["Weekly maintenance plans", "Repair request forms", "Pool equipment shop", "Seasonal opening / closing packages"], vibe: "Fresh & Reliable" },
  { id: "pressure-wash", name: "Pressure Washing", cat: "home", tag: "Instant quotes, before/after, service areas", layout: "gallery", accent: "#78909C", features: ["Instant quote calculator", "Before / after galleries", "Service area coverage", "Commercial & residential pages"], vibe: "Powerful & Satisfying" },
  { id: "solar", name: "Solar Installation", cat: "home", tag: "Savings calculator, installs, financing options", layout: "sidebar", accent: "#FFD600", features: ["Solar savings calculator", "Installation process timeline", "Financing & incentives page", "Customer case studies"], vibe: "Green & Innovative" },

  // ─── Professional ───
  { id: "law", name: "Law Firm", cat: "pro", tag: "Practice areas, case results, free consultations", layout: "sidebar", accent: "#1B5E7C", features: ["Practice area landing pages", "Attorney profiles & credentials", "Case results & testimonials", "Free consultation scheduling"], vibe: "Authoritative & Trustworthy" },
  { id: "accounting", name: "Accounting & CPA", cat: "pro", tag: "Tax services, client portal, resource center", layout: "sidebar", accent: "#2E7D32", features: ["Service packages & pricing", "Client portal integration", "Tax deadline calendar", "Financial resource library"], vibe: "Precise & Reliable" },
  { id: "insurance", name: "Insurance Agent", cat: "pro", tag: "Quote tools, coverage info, claims support", layout: "sidebar", accent: "#1565C0", features: ["Online quote request forms", "Coverage type explainers", "Claims process guide", "Agent bio & credentials"], vibe: "Secure & Accessible" },
  { id: "financial", name: "Financial Advisor", cat: "pro", tag: "Planning tools, resources, appointment booking", layout: "sidebar", accent: "#6A1B9A", features: ["Financial planning calculator", "Service & specialty pages", "Resource library & blog", "Consultation booking system"], vibe: "Sophisticated & Clear" },
  { id: "architect", name: "Architecture Firm", cat: "pro", tag: "Project portfolio, design process, awards", layout: "gallery", accent: "#455A64", features: ["Project portfolio with renderings", "Design process walkthrough", "Awards & recognition page", "Careers & team profiles"], vibe: "Refined & Visionary" },
  { id: "interior", name: "Interior Designer", cat: "pro", tag: "Portfolio, style quiz, consultation booking", layout: "gallery", accent: "#AD8B73", features: ["Room-by-room portfolio", "Design style quiz", "Consultation booking", "Product sourcing page"], vibe: "Elegant & Inspiring" },

  // ─── Auto & Real Estate ───
  { id: "realestate", name: "Real Estate Agent", cat: "auto", tag: "Listings, property search, neighborhood guides", layout: "grid", accent: "#1E88E5", features: ["IDX / MLS property search", "Individual listing detail pages", "Neighborhood guide pages", "Lead capture on every page"], vibe: "Polished & Local" },
  { id: "property-mgmt", name: "Property Management", cat: "auto", tag: "Tenant portal, listings, maintenance requests", layout: "sidebar", accent: "#546E7A", features: ["Tenant portal & login", "Available unit listings", "Maintenance request forms", "Owner resources & reporting"], vibe: "Organized & Efficient" },
  { id: "auto-repair", name: "Auto Repair Shop", cat: "auto", tag: "Service menu, online booking, vehicle tips", layout: "services", accent: "#D32F2F", features: ["Service menu & pricing", "Online appointment booking", "Vehicle maintenance tips blog", "Customer review showcase"], vibe: "Honest & Expert" },
  { id: "dealership", name: "Car Dealership", cat: "auto", tag: "Inventory browser, financing, trade-in values", layout: "grid", accent: "#424242", features: ["Searchable vehicle inventory", "Financing calculator", "Trade-in value estimator", "Service department booking"], vibe: "Sleek & Premium" },

  // ─── Creative ───
  { id: "photography", name: "Photography Studio", cat: "creative", tag: "Portfolio, packages, session booking", layout: "gallery", accent: "#37474F", features: ["Portfolio gallery by category", "Session packages & pricing", "Online booking system", "Client gallery / proofing"], vibe: "Artistic & Personal" },
  { id: "videography", name: "Videography", cat: "creative", tag: "Showreel, packages, production info", layout: "gallery", accent: "#263238", features: ["Embedded showreel / demo reel", "Production packages", "Behind-the-scenes content", "Client testimonials & logos"], vibe: "Cinematic & Dynamic" },
  { id: "wedding", name: "Wedding Planner", cat: "creative", tag: "Portfolio, packages, vendor network", layout: "hero", accent: "#F8BBD0", features: ["Wedding portfolio gallery", "Planning packages & tiers", "Vendor network & partners", "Inquiry & consultation form"], vibe: "Romantic & Organized" },
  { id: "florist", name: "Florist", cat: "creative", tag: "Arrangements, online ordering, event services", layout: "store", accent: "#E8A0BF", features: ["Arrangement catalog & ordering", "Same-day delivery info", "Event & wedding floral services", "Subscription / recurring orders"], vibe: "Delicate & Vibrant" },
  { id: "tattoo", name: "Tattoo Shop", cat: "creative", tag: "Artist portfolios, booking, flash gallery", layout: "gallery", accent: "#616161", features: ["Artist portfolios & styles", "Online booking by artist", "Flash art gallery", "Aftercare guides & FAQs"], vibe: "Bold & Authentic" },

  // ─── Community ───
  { id: "tutoring", name: "Tutoring & Education", cat: "community", tag: "Subjects, booking, student success stories", layout: "sidebar", accent: "#FF7043", features: ["Subject & grade level pages", "Tutor profiles & credentials", "Online session booking", "Student testimonial page"], vibe: "Encouraging & Smart" },
  { id: "daycare", name: "Daycare & Childcare", cat: "community", tag: "Programs, enrollment, virtual facility tour", layout: "hero", accent: "#FFB74D", features: ["Program pages by age group", "Online enrollment forms", "Virtual tour & photo gallery", "Parent resource center"], vibe: "Warm & Safe" },
  { id: "church", name: "Church & Worship", cat: "community", tag: "Service times, events, online giving", layout: "hero", accent: "#5C6BC0", features: ["Service schedule & livestream", "Event calendar & registration", "Online giving / donations", "Sermon archive & podcast"], vibe: "Welcoming & Purposeful" },
  { id: "nonprofit", name: "Nonprofit Organization", cat: "community", tag: "Mission, impact metrics, donation system", layout: "hero", accent: "#26A69A", features: ["Mission & impact storytelling", "Online donation system", "Volunteer sign-up portal", "Annual report & transparency"], vibe: "Impactful & Transparent" },

  // ─── Specialty ───
  { id: "cleaning", name: "Cleaning Service", cat: "specialty", tag: "Instant pricing, booking, service checklists", layout: "services", accent: "#26C6DA", features: ["Instant price estimator", "Online booking system", "Service checklists by type", "Recurring service plans"], vibe: "Spotless & Simple" },
  { id: "moving", name: "Moving Company", cat: "specialty", tag: "Quote calculator, services, coverage areas", layout: "services", accent: "#FF8A65", features: ["Moving quote calculator", "Service tiers (local / long-distance)", "Packing supply shop", "Moving tips & checklist blog"], vibe: "Strong & Organized" },
  { id: "pet-grooming", name: "Pet Grooming", cat: "specialty", tag: "Services, online booking, pet gallery", layout: "booking", accent: "#FFAB91", features: ["Service menu by breed / size", "Online appointment booking", "Before / after pet gallery", "Pet care tips & blog"], vibe: "Playful & Professional" },
  { id: "martial-arts", name: "Martial Arts Studio", cat: "specialty", tag: "Programs, class schedule, belt progression", layout: "hero", accent: "#B71C1C", features: ["Program pages by discipline", "Class schedule & registration", "Belt / rank progression tracker", "Instructor bios & credentials"], vibe: "Disciplined & Powerful" },
];

/* ─── Services Data ────────────────────────────────────────────── */
const SERVICES = [
  { num: "01", title: "Web Design & Development", desc: "Custom-built sites engineered for conversion. No templates. No page builders. Clean, fast, accessible code that ranks and converts." },
  { num: "02", title: "SEO & Search Systems", desc: "Technical SEO, content strategy, and local search optimization. We build ranking systems that compound over time — not quick fixes that fade." },
  { num: "03", title: "Lead Generation", desc: "Verified leads with real contact data, not vanity metrics. Every lead we deliver is someone who needs what you sell, in your service area." },
  { num: "04", title: "AI & Automation", desc: "Chatbots, AI voice agents, workflow automation, and custom tools. Your business keeps working while you sleep." },
  { num: "05", title: "Branding & Identity", desc: "Logo, color systems, typography, and brand guidelines that make your business look as good as your work actually is." },
  { num: "06", title: "Content & Social", desc: "Photography, video, copywriting, and social media management. Consistent content that builds authority and drives traffic." },
];

/* ─── Stats ────────────────────────────────────────────────────── */
const STATS = [
  { value: 47, suffix: "+", label: "Projects shipped" },
  { value: 1, suffix: "", label: "Founder you talk to" },
  { value: 48, suffix: "hr", label: "Response time" },
  { value: 50, suffix: "+", label: "Industry blueprints" },
];

/* ═══════════════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════════════ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("ws-entered");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

/* ═══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

function Corners({ color = C.blue, size = 20, w = 1.5 }: { color?: string; size?: number; w?: number }) {
  const base: React.CSSProperties = { position: "absolute", width: size, height: size, pointerEvents: "none", opacity: 0.6 };
  const b = `${w}px solid ${color}`;
  return (
    <>
      <span style={{ ...base, top: 0, left: 0, borderTop: b, borderLeft: b }} />
      <span style={{ ...base, top: 0, right: 0, borderTop: b, borderRight: b }} />
      <span style={{ ...base, bottom: 0, left: 0, borderBottom: b, borderLeft: b }} />
      <span style={{ ...base, bottom: 0, right: 0, borderBottom: b, borderRight: b }} />
    </>
  );
}

function SectionLabel({ children, id }: { children: string; id?: string }) {
  return (
    <div id={id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", scrollMarginTop: 80 }}>
      <span style={{ width: 28, height: 1, background: C.blue, opacity: 0.5 }} />
      <span style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.18em", color: C.blue, textTransform: "uppercase", whiteSpace: "nowrap" }}>
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: C.blue, opacity: 0.12 }} />
    </div>
  );
}

/* Mini wireframe preview */
function Wireframe({ layout, accent }: { layout: CatItem["layout"]; accent: string }) {
  const box: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16/11",
    background: C.bgLight,
    borderRadius: 3,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    overflow: "hidden",
    border: `1px solid ${C.border}`,
  };
  const nav: React.CSSProperties = { height: 4, background: C.steel, borderRadius: 1 };

  switch (layout) {
    case "hero":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ flex: 1, background: accent, opacity: 0.18, borderRadius: 2 }} />
          <div style={{ display: "flex", gap: 2, height: 10 }}>
            <div style={{ flex: 1, height: 10, background: C.steel, borderRadius: 1, opacity: 0.5 }} />
            <div style={{ flex: 1, height: 10, background: C.steel, borderRadius: 1, opacity: 0.4 }} />
            <div style={{ flex: 1, height: 10, background: C.steel, borderRadius: 1, opacity: 0.3 }} />
          </div>
          <div style={{ height: 5, background: C.steel, borderRadius: 1, opacity: 0.2 }} />
        </div>
      );
    case "sidebar":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ flex: 1, display: "flex", gap: 2 }}>
            <div style={{ width: "28%", background: C.steel, borderRadius: 1, opacity: 0.5 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ height: 8, background: accent, opacity: 0.2, borderRadius: 1 }} />
              <div style={{ flex: 1, background: C.steel, borderRadius: 1, opacity: 0.3 }} />
              <div style={{ flex: 1, background: C.steel, borderRadius: 1, opacity: 0.2 }} />
            </div>
          </div>
        </div>
      );
    case "grid":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ height: 8, background: accent, opacity: 0.18, borderRadius: 1 }} />
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
            {[0.45, 0.35, 0.4, 0.3, 0.45, 0.35].map((op, i) => (
              <div key={i} style={{ background: C.steel, borderRadius: 1, opacity: op }} />
            ))}
          </div>
        </div>
      );
    case "services":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ height: 8, background: accent, opacity: 0.18, borderRadius: 1 }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
            {[0.5, 0.4, 0.35, 0.3].map((op, i) => (
              <div key={i} style={{ height: 7, background: C.steel, borderRadius: 1, opacity: op, borderLeft: `2px solid ${accent}` }} />
            ))}
          </div>
        </div>
      );
    case "booking":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ flex: 1, display: "flex", gap: 2 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ height: 10, background: accent, opacity: 0.2, borderRadius: 1 }} />
              <div style={{ flex: 1, background: C.steel, borderRadius: 1, opacity: 0.3 }} />
            </div>
            <div style={{ width: "38%", background: accent, opacity: 0.10, borderRadius: 1, border: `1px solid ${accent}40` }} />
          </div>
        </div>
      );
    case "gallery":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 2 }}>
            <div style={{ gridRow: "1 / 3", background: accent, opacity: 0.15, borderRadius: 1 }} />
            <div style={{ background: C.steel, borderRadius: 1, opacity: 0.4 }} />
            <div style={{ background: C.steel, borderRadius: 1, opacity: 0.3 }} />
          </div>
        </div>
      );
    case "local":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ flex: 1, background: accent, opacity: 0.08, borderRadius: 1, position: "relative" }}>
            <div style={{ position: "absolute", top: "30%", left: "40%", width: 8, height: 8, background: accent, borderRadius: "50%", opacity: 0.5 }} />
          </div>
          <div style={{ display: "flex", gap: 2, height: 8 }}>
            <div style={{ flex: 1, height: 8, background: C.steel, borderRadius: 1, opacity: 0.4 }} />
            <div style={{ flex: 1, height: 8, background: accent, borderRadius: 1, opacity: 0.3 }} />
          </div>
        </div>
      );
    case "store":
      return (
        <div style={box}>
          <div style={nav} />
          <div style={{ height: 8, background: accent, opacity: 0.15, borderRadius: 1 }} />
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <div style={{ flex: 1, background: C.steel, borderRadius: 1, opacity: 0.4 }} />
                <div style={{ height: 3, background: accent, borderRadius: 1, opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>
      );
  }
}

/* Animated counter */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const dur = 1200;
          const t0 = performance.now();
          setN(0);
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  const pad = String(target).length;
  return <span ref={ref}>{String(n).padStart(pad, "0")}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function HomeNarrative() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("all");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filtered = useMemo(
    () => activeCat === "all" ? CATALOG : CATALOG.filter((i) => i.cat === activeCat),
    [activeCat]
  );

  const handleCatChange = useCallback((cat: string) => {
    setActiveCat(cat);
    setSelectedItem(null);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const heroRef = useReveal<HTMLDivElement>();
  const catalogRef = useReveal<HTMLDivElement>();
  const servicesRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  const wrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem" };

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: BODY, minHeight: "100vh" }} className="ws-blueprint-grid">

      {/* ═══ NAVIGATION ═══════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 1.25rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "rgba(17,17,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? `0 1px 0 ${C.border}` : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              fontFamily: MONO, fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.2em", color: C.text, textTransform: "uppercase",
            }}>
              Bamberg Digital
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ display: "none", alignItems: "center", gap: "2rem" }}>
            {[
              { label: "Catalog", id: "catalog" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none", border: "none",
                  fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.12em",
                  color: C.textSoft, cursor: "pointer", textTransform: "uppercase", padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.blue)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textSoft)}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em",
                color: C.bg, background: C.orange, border: "none",
                padding: "0.5rem 1rem", borderRadius: 3, cursor: "pointer",
                fontWeight: 600, textTransform: "uppercase", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Start Build
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
            className="md:hidden"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path d="M5 5L17 17M17 5L5 17" stroke={C.text} strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke={C.text} strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke={C.text} strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke={C.text} strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(17,17,20,0.97)", backdropFilter: "blur(16px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
        }}>
          {["catalog", "services", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", fontFamily: MONO,
              fontSize: "1rem", letterSpacing: "0.2em", color: C.text,
              cursor: "pointer", textTransform: "uppercase",
            }}>
              {id}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            fontFamily: MONO, fontSize: "0.8rem", color: C.bg, background: C.orange,
            border: "none", padding: "0.75rem 2rem", borderRadius: 3,
            cursor: "pointer", fontWeight: 600, textTransform: "uppercase", marginTop: "1rem",
          }}>
            Start Your Build
          </button>
        </div>
      )}

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        data-reveal
        style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center",
          padding: "6rem 1.25rem 3rem", position: "relative",
        }}
      >
        <Corners size={32} w={1} />

        <span style={{
          fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.25em",
          color: C.blue, textTransform: "uppercase", marginBottom: "1.5rem", opacity: 0.8,
        }}>
          Sacramento Digital Agency &mdash; Since 2024
        </span>

        <h1 style={{
          fontFamily: HEAD, fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
          fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em",
          color: C.text, margin: "0 0 1.5rem", maxWidth: 900,
        }}>
          ENGINEERED{" "}
          <br className="hidden sm:block" />
          <span style={{ color: C.orange }}>TO PERFORM.</span>
        </h1>

        <p style={{
          fontFamily: BODY, fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
          color: C.textSoft, maxWidth: 600, lineHeight: 1.6, margin: "0 0 2.5rem",
        }}>
          Custom websites, SEO systems, and lead engines &mdash; built from blueprint to launch. No templates. No shortcuts. Just results.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => scrollTo("catalog")}
            className="ws-cta-pulse"
            style={{
              fontFamily: MONO, fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.12em", color: "#111114", background: C.orange,
              border: "none", padding: "0.85rem 2rem", borderRadius: 3,
              cursor: "pointer", textTransform: "uppercase", transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Browse 50+ Blueprints &rarr;
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: MONO, fontSize: "0.7rem", fontWeight: 500,
              letterSpacing: "0.12em", color: C.text, background: "transparent",
              border: `1px solid ${C.border}`, padding: "0.85rem 2rem", borderRadius: 3,
              cursor: "pointer", textTransform: "uppercase", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blue; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}
          >
            Start Your Build
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}>
          <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: C.textDim, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="5.5" y="0" width="5" height="12" rx="2.5" stroke={C.textDim} strokeWidth="1" fill="none" />
            <line x1="8" y1="16" x2="8" y2="23" stroke={C.textDim} strokeWidth="1" />
            <polyline points="5,20 8,23 11,20" stroke={C.textDim} strokeWidth="1" fill="none" />
          </svg>
        </div>
      </section>

      {/* ═══ PROJECT CATALOG ══════════════════════════════════ */}
      <section ref={catalogRef} data-reveal style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap}>
          <SectionLabel id="catalog">Project Catalog &mdash; 50 Industry Blueprints</SectionLabel>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontFamily: HEAD, fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800, lineHeight: 1.15, color: C.text, margin: "0 0 0.75rem",
            }}>
              Find your industry.<br />
              <span style={{ color: C.orange }}>See your site.</span>
            </h2>
            <p style={{
              fontFamily: BODY, fontSize: "1rem", color: C.textSoft,
              maxWidth: 520, lineHeight: 1.6,
            }}>
              Browse project specifications by industry. Every blueprint shows exactly what we build, what&apos;s included, and the results you can expect.
            </p>
          </div>

          {/* Category filter */}
          <div style={{
            display: "flex", gap: "0.4rem", overflowX: "auto",
            paddingBottom: "0.75rem", marginBottom: "2rem",
            scrollbarWidth: "none", msOverflowStyle: "none",
          }}>
            <style>{`.cat-scroll::-webkit-scrollbar { display: none; }`}</style>
            <div className="cat-scroll" style={{ display: "flex", gap: "0.4rem" }}>
              {CATEGORIES.map((cat) => {
                const isActive = activeCat === cat.id;
                const count = cat.id === "all" ? CATALOG.length : CATALOG.filter((i) => i.cat === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCatChange(cat.id)}
                    style={{
                      fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.08em",
                      color: isActive ? C.bg : C.textMute,
                      background: isActive ? C.blue : C.card,
                      border: `1px solid ${isActive ? C.blue : C.border}`,
                      padding: "0.5rem 0.85rem", borderRadius: 3, cursor: "pointer",
                      whiteSpace: "nowrap", fontWeight: isActive ? 600 : 400,
                      transition: "all 0.2s ease", textTransform: "uppercase", flexShrink: 0,
                    }}
                  >
                    {cat.label}
                    <span style={{ marginLeft: "0.4rem", opacity: 0.7, fontSize: "0.55rem" }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {filtered.map((item) => {
              const isSelected = selectedItem === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(isSelected ? null : item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedItem(isSelected ? null : item.id); }}
                  style={{
                    background: isSelected ? C.cardHover : C.card,
                    border: `1px solid ${isSelected ? C.borderHover : C.border}`,
                    borderRadius: 6, padding: "0.85rem", cursor: "pointer",
                    transition: "all 0.25s ease", position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = C.borderHover;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <Wireframe layout={item.layout} accent={item.accent} />
                  <span style={{
                    fontFamily: MONO, fontSize: "0.55rem", color: C.textDim,
                    letterSpacing: "0.1em", display: "block", marginTop: "0.65rem",
                  }}>
                    SPEC://
                  </span>
                  <h3 style={{
                    fontFamily: HEAD, fontSize: "0.95rem", fontWeight: 700,
                    color: C.text, margin: "0.15rem 0 0.3rem",
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontFamily: BODY, fontSize: "0.78rem", color: C.textMute,
                    lineHeight: 1.4, margin: 0,
                  }}>
                    {item.tag}
                  </p>
                  <span style={{
                    display: "inline-block", marginTop: "0.5rem",
                    fontFamily: MONO, fontSize: "0.5rem", letterSpacing: "0.08em",
                    color: item.accent, background: `${item.accent}15`,
                    padding: "0.2rem 0.5rem", borderRadius: 2, textTransform: "uppercase",
                  }}>
                    {item.vibe}
                  </span>

                  {/* Expanded details */}
                  {isSelected && (
                    <div style={{
                      marginTop: "1rem", paddingTop: "1rem",
                      borderTop: `1px solid ${C.border}`,
                    }}>
                      <span style={{
                        fontFamily: MONO, fontSize: "0.55rem", color: C.blue,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        display: "block", marginBottom: "0.5rem",
                      }}>
                        Included Features
                      </span>
                      {item.features.map((f, i) => (
                        <div key={i} style={{
                          fontFamily: BODY, fontSize: "0.8rem", color: C.textSoft,
                          padding: "0.35rem 0 0.35rem 0.75rem",
                          borderLeft: `2px solid ${item.accent}40`,
                          marginBottom: "0.25rem", lineHeight: 1.4,
                        }}>
                          {f}
                        </div>
                      ))}
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                        <a
                          href="#contact"
                          onClick={(e) => { e.stopPropagation(); scrollTo("contact"); }}
                          style={{
                            fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em",
                            color: C.orange, textDecoration: "none",
                            border: `1px solid ${C.orange}`, padding: "0.4rem 0.85rem",
                            borderRadius: 3, textTransform: "uppercase", fontWeight: 600,
                            transition: "background 0.2s, color 0.2s",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = C.bg; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.orange; }}
                        >
                          Request This Build &rarr;
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p style={{
            fontFamily: MONO, fontSize: "0.6rem", color: C.textDim,
            textAlign: "center", marginTop: "2.5rem", letterSpacing: "0.08em",
          }}>
            Don&apos;t see your industry? We build custom. &mdash;{" "}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "none", border: "none", color: C.blue,
                fontFamily: MONO, fontSize: "0.6rem", cursor: "pointer",
                textDecoration: "underline", padding: 0,
              }}
            >
              Tell us about your project
            </button>
          </p>
        </div>
      </section>

      {/* ═══ SERVICES ═════════════════════════════════════════ */}
      <section
        ref={servicesRef}
        data-reveal
        style={{ padding: "5rem 0 6rem", borderTop: `1px solid ${C.border}` }}
      >
        <div style={wrap}>
          <SectionLabel id="services">Capabilities</SectionLabel>

          <h2 style={{
            fontFamily: HEAD, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
            fontWeight: 800, color: C.text, margin: "0 0 3rem", lineHeight: 1.15,
          }}>
            Full-stack digital services.<br />
            <span style={{ color: C.textMute, fontWeight: 500 }}>Every build, one team.</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {SERVICES.map((svc, i) => (
              <div key={svc.num} style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: "1.5rem", padding: "2rem 0",
                borderTop: i === 0 ? "none" : `1px solid ${C.border}`,
                alignItems: "start",
              }}>
                <span style={{
                  fontFamily: MONO, fontSize: "0.75rem", color: C.blue,
                  opacity: 0.6, minWidth: 32, paddingTop: 2,
                }}>
                  {svc.num}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: HEAD, fontSize: "1.15rem", fontWeight: 700,
                    color: C.text, margin: "0 0 0.5rem",
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontFamily: BODY, fontSize: "0.9rem", color: C.textSoft,
                    lineHeight: 1.65, margin: 0, maxWidth: 640,
                  }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        data-reveal
        style={{
          padding: "4rem 0",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={wrap}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem",
          }} className="md:!grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 6, padding: "1.5rem 1.25rem",
                textAlign: "center", position: "relative",
              }}>
                <Corners size={12} w={1} color={C.blue} />
                <div style={{
                  fontFamily: MONO, fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700, color: C.text, lineHeight: 1, marginBottom: "0.5rem",
                }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <span style={{
                  fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em",
                  color: C.textMute, textTransform: "uppercase",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ════════════════════════════════════════════ */}
      <section style={{ padding: "5rem 0", borderBottom: `1px solid ${C.border}` }}>
        <div style={wrap}>
          <SectionLabel>The Builder</SectionLabel>
          <div style={{ maxWidth: 720 }}>
            <h2 style={{
              fontFamily: HEAD, fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700, color: C.text, margin: "0 0 1rem",
            }}>
              One founder. One point of contact.<br />
              <span style={{ color: C.textMute }}>No account managers. No runaround.</span>
            </h2>
            <p style={{
              fontFamily: BODY, fontSize: "0.95rem", color: C.textSoft,
              lineHeight: 1.7, margin: "0 0 1rem",
            }}>
              I&apos;m Jason. I started Bamberg Digital because small businesses deserve the same caliber of digital work that agencies charge enterprise clients six figures for. I build every site, run every SEO campaign, and answer every call myself. When you work with us, you work with me.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.5rem" }}>
              <a href="tel:9169077782" style={{
                fontFamily: MONO, fontSize: "0.75rem", color: C.orange,
                textDecoration: "none", fontWeight: 600,
              }}>
                (916) 907-7782
              </a>
              <span style={{ width: 1, height: 16, background: C.border }} />
              <a href="mailto:hello@bambergdigital.com" style={{
                fontFamily: MONO, fontSize: "0.7rem", color: C.blue, textDecoration: "none",
              }}>
                hello@bambergdigital.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ══════════════════════════════════════════════ */}
      <section ref={ctaRef} data-reveal id="contact" style={{ padding: "6rem 0", position: "relative" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <div style={{
            position: "relative", background: C.card,
            border: `1px solid ${C.borderHover}`, borderRadius: 8,
            padding: "3.5rem 2rem", maxWidth: 700, margin: "0 auto",
          }}>
            <Corners size={24} w={1.5} color={C.orange} />
            <span style={{
              fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.2em",
              color: C.orange, textTransform: "uppercase", display: "block", marginBottom: "1rem",
            }}>
              Commission Your Build
            </span>
            <h2 style={{
              fontFamily: HEAD, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 800, color: C.text, margin: "0 0 1rem", lineHeight: 1.2,
            }}>
              Ready to break ground?
            </h2>
            <p style={{
              fontFamily: BODY, fontSize: "1rem", color: C.textSoft,
              lineHeight: 1.6, margin: "0 auto 2rem", maxWidth: 480,
            }}>
              Tell me about your project. I&apos;ll respond within 48 hours with a blueprint, a timeline, and a fixed price. No surprises.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
              <a
                href="tel:9169077782"
                className="ws-cta-pulse"
                style={{
                  fontFamily: MONO, fontSize: "0.8rem", fontWeight: 700,
                  color: C.bg, background: C.orange, textDecoration: "none",
                  padding: "1rem 2.5rem", borderRadius: 4,
                  letterSpacing: "0.08em", display: "inline-block",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                (916) 907-7782
              </a>
              <a href="mailto:hello@bambergdigital.com" style={{
                fontFamily: MONO, fontSize: "0.7rem", color: C.blue,
                textDecoration: "none", letterSpacing: "0.05em",
              }}>
                hello@bambergdigital.com
              </a>
              <p style={{
                fontFamily: MONO, fontSize: "0.55rem", color: C.textDim,
                letterSpacing: "0.1em", marginTop: "0.5rem",
              }}>
                SACRAMENTO, CA &bull; SERVING NATIONWIDE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════ */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: "3rem 1.25rem 2rem", fontFamily: BODY,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem", marginBottom: "2.5rem",
          }}>
            <div style={{ minWidth: 200 }}>
              <span style={{
                fontFamily: MONO, fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.2em", color: C.text, display: "block", marginBottom: "0.75rem",
              }}>
                BAMBERG DIGITAL
              </span>
              <p style={{ fontSize: "0.8rem", color: C.textMute, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                Sacramento&apos;s founder-led digital agency. Custom websites, SEO, and lead generation — engineered to perform.
              </p>
              <div style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>
                <a href="tel:9169077782" style={{ color: C.text, textDecoration: "none", fontWeight: 600, display: "block" }}>
                  (916) 907-7782
                </a>
                <a href="mailto:hello@bambergdigital.com" style={{ color: C.textSoft, textDecoration: "none", display: "block" }}>
                  hello@bambergdigital.com
                </a>
              </div>
            </div>

            {[
              {
                title: "Services",
                links: [
                  { href: "/web-design", label: "Website Design" },
                  { href: "/seo", label: "SEO Services" },
                  { href: "/social-media", label: "Social Media" },
                  { href: "/leads", label: "Lead Generation" },
                ],
              },
              {
                title: "More",
                links: [
                  { href: "/branding", label: "Branding" },
                  { href: "/consulting", label: "AI Consulting" },
                  { href: "/ai-integration", label: "AI Integration" },
                  { href: "/content-creation", label: "Content Creation" },
                  { href: "/custom-tools", label: "Custom Tools" },
                ],
              },
              {
                title: "Company",
                links: [
                  { href: "/pricing", label: "Pricing" },
                  { href: "/bundles", label: "Bundles" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/about", label: "About" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <span style={{
                  fontFamily: MONO, fontSize: "0.6rem", color: C.blue,
                  letterSpacing: "0.15em", display: "block", marginBottom: "0.75rem",
                  textTransform: "uppercase",
                }}>
                  {col.title}
                </span>
                {col.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{
                      display: "block", color: C.textMute, textDecoration: "none",
                      fontSize: "0.8rem", padding: "0.2rem 0", transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.textMute)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div style={{
            borderTop: `1px solid ${C.border}`, paddingTop: "1.25rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: C.textDim, letterSpacing: "0.08em" }}>
              &copy; 2024&ndash;{new Date().getFullYear()} BAMBERG DIGITAL. ALL RIGHTS RESERVED.
            </span>
            <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: C.textDim, letterSpacing: "0.08em" }}>
              SACRAMENTO &bull; ELK GROVE &bull; FOLSOM &bull; ROSEVILLE &bull; RANCHO CORDOVA
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
