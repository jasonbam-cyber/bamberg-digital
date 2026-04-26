"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════
   AWWWARDS-LEVEL HOMEPAGE — Bamberg Digital
   Zero external animation libs. Pure CSS + IntersectionObserver + rAF.
   All hero content visible in initial HTML render.
   ═══════════════════════════════════════════════════════════════════ */

/* ─── Palette ──────────────────────────────────────────────────── */
const C = {
  bg: "#111114",
  bgLight: "#18181c",
  card: "#1c1c22",
  cardHover: "#24242b",
  steel: "#2a2a31",
  steelLight: "#38383f",
  blue: "#4a9ece",
  blueGlow: "#62b4e0",
  blueDim: "rgba(74,158,206,0.12)",
  orange: "#e8872b",
  orangeDim: "rgba(232,135,43,0.15)",
  text: "#e8e6e1",
  textSoft: "#a8a59e",
  textMute: "#6a6760",
  border: "rgba(74,158,206,0.10)",
  borderHover: "rgba(74,158,206,0.30)",
};

const MONO = "var(--font-mono, 'JetBrains Mono'), monospace";
const HEAD = "var(--font-montserrat, 'Montserrat'), sans-serif";
const SERIF = "var(--font-fraunces, 'Fraunces'), serif";
const HAND = "var(--font-caveat, 'Caveat'), cursive";

/* ─── Catalog Types ───────────────────────────────────────────── */
type CatItem = {
  id: string; name: string; cat: string; tag: string;
  layout: "hero" | "sidebar" | "grid" | "services" | "booking" | "gallery" | "local" | "store";
  accent: string; features: string[]; vibe: string;
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "food", label: "Food & Drink" },
  { id: "health", label: "Health" },
  { id: "beauty", label: "Beauty & Fitness" },
  { id: "home", label: "Home Services" },
  { id: "pro", label: "Professional" },
  { id: "auto", label: "Auto & RE" },
  { id: "creative", label: "Creative" },
  { id: "community", label: "Community" },
  { id: "specialty", label: "Specialty" },
];

/* ─── 50 Industry Blueprints ──────────────────────────────────── */
const CATALOG: CatItem[] = [
  { id: "restaurant", name: "Restaurant", cat: "food", tag: "Online ordering, reservations, menus that sell", layout: "hero", accent: "#e85d3a", features: ["Online ordering (Square / Toast)", "Reservation system integration", "Photo-rich menu with dietary filters", "Mobile-first — 73% of traffic"], vibe: "Warm & Appetizing" },
  { id: "cafe", name: "Cafe & Coffee Shop", cat: "food", tag: "Cozy vibes, online orders, loyalty programs", layout: "hero", accent: "#8B6914", features: ["Online ordering & pickup", "Loyalty program integration", "Instagram feed widget", "Menu with seasonal rotations"], vibe: "Cozy & Inviting" },
  { id: "bakery", name: "Bakery", cat: "food", tag: "Custom orders, gallery, seasonal menus", layout: "gallery", accent: "#D4956A", features: ["Custom order request forms", "Product gallery with categories", "Seasonal menu updates", "Wholesale inquiry page"], vibe: "Sweet & Artisanal" },
  { id: "brewery", name: "Brewery & Winery", cat: "food", tag: "Taproom menus, events, merchandise sales", layout: "store", accent: "#B8860B", features: ["Taproom / tasting menu", "Event calendar & tickets", "Online merch store", "Age verification gate"], vibe: "Craft & Bold" },
  { id: "food-truck", name: "Food Truck", cat: "food", tag: "Location tracker, daily specials, catering", layout: "local", accent: "#FF6B35", features: ["Real-time location updates", "Daily menu / specials board", "Catering inquiry forms", "Social media integration"], vibe: "Bold & Street" },
  { id: "bar", name: "Bar & Lounge", cat: "food", tag: "Events, specials, atmosphere that converts", layout: "hero", accent: "#9B59B6", features: ["Event listings & bottle service", "Cocktail / drink menu", "VIP reservation system", "Photo gallery & atmosphere"], vibe: "Moody & Upscale" },
  { id: "dental", name: "Dental Practice", cat: "health", tag: "Appointments, services, patient trust", layout: "sidebar", accent: "#4ECDC4", features: ["Online appointment booking", "Treatment pages with visuals", "Patient forms & portal links", "Insurance info & payment plans"], vibe: "Clean & Trustworthy" },
  { id: "medical", name: "Medical Practice", cat: "health", tag: "Patient portal, provider bios, telehealth", layout: "sidebar", accent: "#3498DB", features: ["Provider profiles & credentials", "Patient portal integration", "Telehealth scheduling", "HIPAA-aware form handling"], vibe: "Professional & Caring" },
  { id: "chiro", name: "Chiropractic", cat: "health", tag: "Online booking, treatments, wellness content", layout: "booking", accent: "#27AE60", features: ["Online appointment scheduling", "Treatment & condition pages", "Wellness blog for SEO", "New patient intake forms"], vibe: "Active & Healing" },
  { id: "vet", name: "Veterinary Clinic", cat: "health", tag: "Pet portal, services, emergency info", layout: "sidebar", accent: "#E67E22", features: ["Online appointment booking", "Emergency contact & hours", "Service descriptions by animal", "Pet health resource center"], vibe: "Friendly & Caring" },
  { id: "salon", name: "Hair Salon", cat: "beauty", tag: "Online booking, stylist profiles, transformations", layout: "booking", accent: "#E91E63", features: ["Online booking (Vagaro / Booksy)", "Stylist profiles & portfolios", "Before / after gallery", "Product recommendations"], vibe: "Stylish & Modern" },
  { id: "barbershop", name: "Barbershop", cat: "beauty", tag: "Appointment booking, services, the crew", layout: "booking", accent: "#795548", features: ["Walk-in & appointment booking", "Service menu with pricing", "Barber team profiles", "Location & hours widget"], vibe: "Classic & Sharp" },
  { id: "spa", name: "Spa & Wellness", cat: "beauty", tag: "Treatment menu, booking, gift cards", layout: "booking", accent: "#00897B", features: ["Treatment menu & packages", "Online booking system", "Gift card purchasing", "Wellness blog & tips"], vibe: "Serene & Luxurious" },
  { id: "gym", name: "Gym & Fitness", cat: "beauty", tag: "Class schedules, memberships, trainer bios", layout: "hero", accent: "#F44336", features: ["Class schedule & registration", "Membership tiers & sign-up", "Trainer profiles & bios", "Virtual tour & facility photos"], vibe: "Energetic & Bold" },
  { id: "yoga", name: "Yoga Studio", cat: "beauty", tag: "Class booking, workshops, retreat info", layout: "booking", accent: "#9C27B0", features: ["Class schedule & booking", "Workshop & retreat pages", "Instructor profiles", "Online class streaming links"], vibe: "Calm & Centered" },
  { id: "trainer", name: "Personal Trainer", cat: "beauty", tag: "Programs, booking, transformation results", layout: "hero", accent: "#FF5722", features: ["Program packages & pricing", "Online session booking", "Client transformation gallery", "Nutrition & fitness blog"], vibe: "Dynamic & Results-Driven" },
  { id: "dance", name: "Dance Studio", cat: "beauty", tag: "Class registration, recitals, performances", layout: "booking", accent: "#E040FB", features: ["Class schedule by style & level", "Online registration & payment", "Recital & performance calendar", "Instructor bios & videos"], vibe: "Vibrant & Expressive" },
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
  { id: "law", name: "Law Firm", cat: "pro", tag: "Practice areas, case results, free consultations", layout: "sidebar", accent: "#1B5E7C", features: ["Practice area landing pages", "Attorney profiles & credentials", "Case results & testimonials", "Free consultation scheduling"], vibe: "Authoritative & Trustworthy" },
  { id: "accounting", name: "Accounting & CPA", cat: "pro", tag: "Tax services, client portal, resource center", layout: "sidebar", accent: "#2E7D32", features: ["Service packages & pricing", "Client portal integration", "Tax deadline calendar", "Financial resource library"], vibe: "Precise & Reliable" },
  { id: "insurance", name: "Insurance Agent", cat: "pro", tag: "Quote tools, coverage info, claims support", layout: "sidebar", accent: "#1565C0", features: ["Online quote request forms", "Coverage type explainers", "Claims process guide", "Agent bio & credentials"], vibe: "Secure & Accessible" },
  { id: "financial", name: "Financial Advisor", cat: "pro", tag: "Planning tools, resources, appointment booking", layout: "sidebar", accent: "#6A1B9A", features: ["Financial planning calculator", "Service & specialty pages", "Resource library & blog", "Consultation booking system"], vibe: "Sophisticated & Clear" },
  { id: "architect", name: "Architecture Firm", cat: "pro", tag: "Project portfolio, design process, awards", layout: "gallery", accent: "#455A64", features: ["Project portfolio with renderings", "Design process walkthrough", "Awards & recognition page", "Careers & team profiles"], vibe: "Refined & Visionary" },
  { id: "interior", name: "Interior Designer", cat: "pro", tag: "Portfolio, style quiz, consultation booking", layout: "gallery", accent: "#AD8B73", features: ["Room-by-room portfolio", "Design style quiz", "Consultation booking", "Product sourcing page"], vibe: "Elegant & Inspiring" },
  { id: "realestate", name: "Real Estate Agent", cat: "auto", tag: "Listings, property search, neighborhood guides", layout: "grid", accent: "#1E88E5", features: ["IDX / MLS property search", "Individual listing detail pages", "Neighborhood guide pages", "Lead capture on every page"], vibe: "Polished & Local" },
  { id: "property-mgmt", name: "Property Management", cat: "auto", tag: "Tenant portal, listings, maintenance requests", layout: "sidebar", accent: "#546E7A", features: ["Tenant portal & login", "Available unit listings", "Maintenance request forms", "Owner resources & reporting"], vibe: "Organized & Efficient" },
  { id: "auto-repair", name: "Auto Repair Shop", cat: "auto", tag: "Service menu, online booking, vehicle tips", layout: "services", accent: "#D32F2F", features: ["Service menu & pricing", "Online appointment booking", "Vehicle maintenance tips blog", "Customer review showcase"], vibe: "Honest & Expert" },
  { id: "dealership", name: "Car Dealership", cat: "auto", tag: "Inventory browser, financing, trade-in values", layout: "grid", accent: "#424242", features: ["Searchable vehicle inventory", "Financing calculator", "Trade-in value estimator", "Service department booking"], vibe: "Sleek & Premium" },
  { id: "photography", name: "Photography Studio", cat: "creative", tag: "Portfolio, packages, session booking", layout: "gallery", accent: "#37474F", features: ["Portfolio gallery by category", "Session packages & pricing", "Online booking system", "Client gallery / proofing"], vibe: "Artistic & Personal" },
  { id: "videography", name: "Videography", cat: "creative", tag: "Showreel, packages, production info", layout: "gallery", accent: "#263238", features: ["Embedded showreel / demo reel", "Production packages", "Behind-the-scenes content", "Client testimonials & logos"], vibe: "Cinematic & Dynamic" },
  { id: "wedding", name: "Wedding Planner", cat: "creative", tag: "Portfolio, packages, vendor network", layout: "hero", accent: "#F8BBD0", features: ["Wedding portfolio gallery", "Planning packages & tiers", "Vendor network & partners", "Inquiry & consultation form"], vibe: "Romantic & Organized" },
  { id: "florist", name: "Florist", cat: "creative", tag: "Arrangements, online ordering, event services", layout: "store", accent: "#E8A0BF", features: ["Arrangement catalog & ordering", "Same-day delivery info", "Event & wedding floral services", "Subscription / recurring orders"], vibe: "Delicate & Vibrant" },
  { id: "tattoo", name: "Tattoo Shop", cat: "creative", tag: "Artist portfolios, booking, flash gallery", layout: "gallery", accent: "#616161", features: ["Artist portfolios & styles", "Online booking by artist", "Flash art gallery", "Aftercare guides & FAQs"], vibe: "Bold & Authentic" },
  { id: "tutoring", name: "Tutoring & Education", cat: "community", tag: "Subjects, booking, student success stories", layout: "sidebar", accent: "#FF7043", features: ["Subject & grade level pages", "Tutor profiles & credentials", "Online session booking", "Student testimonial page"], vibe: "Encouraging & Smart" },
  { id: "daycare", name: "Daycare & Childcare", cat: "community", tag: "Programs, enrollment, virtual facility tour", layout: "hero", accent: "#FFB74D", features: ["Program pages by age group", "Online enrollment forms", "Virtual tour & photo gallery", "Parent resource center"], vibe: "Warm & Safe" },
  { id: "church", name: "Church & Worship", cat: "community", tag: "Service times, events, online giving", layout: "hero", accent: "#5C6BC0", features: ["Service schedule & livestream", "Event calendar & registration", "Online giving / donations", "Sermon archive & podcast"], vibe: "Welcoming & Purposeful" },
  { id: "nonprofit", name: "Nonprofit Organization", cat: "community", tag: "Mission, impact metrics, donation system", layout: "hero", accent: "#26A69A", features: ["Mission & impact storytelling", "Online donation system", "Volunteer sign-up portal", "Annual report & transparency"], vibe: "Impactful & Transparent" },
  { id: "cleaning", name: "Cleaning Service", cat: "specialty", tag: "Instant pricing, booking, service checklists", layout: "services", accent: "#26C6DA", features: ["Instant price estimator", "Online booking system", "Service checklists by type", "Recurring service plans"], vibe: "Spotless & Simple" },
  { id: "moving", name: "Moving Company", cat: "specialty", tag: "Quote calculator, services, coverage areas", layout: "services", accent: "#FF8A65", features: ["Moving quote calculator", "Service tiers (local / long-distance)", "Packing supply shop", "Moving tips & checklist blog"], vibe: "Strong & Organized" },
  { id: "pet-grooming", name: "Pet Grooming", cat: "specialty", tag: "Services, online booking, pet gallery", layout: "booking", accent: "#FFAB91", features: ["Service menu by breed / size", "Online appointment booking", "Before / after pet gallery", "Pet care tips & blog"], vibe: "Playful & Professional" },
  { id: "martial-arts", name: "Martial Arts Studio", cat: "specialty", tag: "Programs, class schedule, belt progression", layout: "hero", accent: "#B71C1C", features: ["Program pages by discipline", "Class schedule & registration", "Belt / rank progression tracker", "Instructor bios & credentials"], vibe: "Disciplined & Powerful" },
];

/* ─── Services ────────────────────────────────────────────────── */
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
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

/* Wireframe preview for each layout type */
function Wireframe({ layout, accent }: { layout: CatItem["layout"]; accent: string }) {
  const box: React.CSSProperties = { width: "100%", aspectRatio: "16/10", background: C.bgLight, borderRadius: 3, padding: 4, display: "flex", flexDirection: "column", gap: 2, overflow: "hidden", border: `1px solid ${C.border}` };
  const nav: React.CSSProperties = { height: 3, background: C.steel, borderRadius: 1 };
  const blk = (op: number): React.CSSProperties => ({ background: C.steel, borderRadius: 1, opacity: op });

  if (layout === "sidebar") return (
    <div style={box}><div style={nav} />
      <div style={{ flex: 1, display: "flex", gap: 2 }}>
        <div style={{ width: "28%", ...blk(0.4) }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ height: 6, background: accent, opacity: 0.18, borderRadius: 1 }} />
          <div style={{ flex: 1, ...blk(0.3) }} />
        </div>
      </div>
    </div>
  );
  if (layout === "grid") return (
    <div style={box}><div style={nav} />
      <div style={{ height: 5, background: accent, opacity: 0.15, borderRadius: 1 }} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
        {[0.4, 0.3, 0.35, 0.3, 0.4, 0.3].map((op, i) => <div key={i} style={blk(op)} />)}
      </div>
    </div>
  );
  if (layout === "gallery") return (
    <div style={box}><div style={nav} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 2 }}>
        <div style={{ gridRow: "1/3", background: accent, opacity: 0.12, borderRadius: 1 }} />
        <div style={blk(0.35)} /><div style={blk(0.25)} />
      </div>
    </div>
  );
  if (layout === "booking") return (
    <div style={box}><div style={nav} />
      <div style={{ flex: 1, display: "flex", gap: 2 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ height: 8, background: accent, opacity: 0.18, borderRadius: 1 }} />
          <div style={{ flex: 1, ...blk(0.3) }} />
        </div>
        <div style={{ width: "35%", background: accent, opacity: 0.08, borderRadius: 1, border: `1px solid ${accent}30` }} />
      </div>
    </div>
  );
  if (layout === "services") return (
    <div style={box}><div style={nav} />
      <div style={{ height: 5, background: accent, opacity: 0.15, borderRadius: 1 }} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        {[0.45, 0.35, 0.3, 0.25].map((op, i) => <div key={i} style={{ height: 5, borderLeft: `2px solid ${accent}`, ...blk(op) }} />)}
      </div>
    </div>
  );
  if (layout === "store") return (
    <div style={box}><div style={nav} />
      <div style={{ height: 5, background: accent, opacity: 0.12, borderRadius: 1 }} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ display: "flex", flexDirection: "column", gap: 1 }}><div style={{ flex: 1, ...blk(0.35) }} /><div style={{ height: 3, background: accent, opacity: 0.25, borderRadius: 1 }} /></div>)}
      </div>
    </div>
  );
  /* hero, local, default */
  return (
    <div style={box}><div style={nav} />
      <div style={{ flex: 1, background: accent, opacity: 0.15, borderRadius: 2 }} />
      <div style={{ display: "flex", gap: 2, height: 8 }}>
        <div style={{ flex: 1, ...blk(0.4) }} /><div style={{ flex: 1, ...blk(0.3) }} /><div style={{ flex: 1, ...blk(0.2) }} />
      </div>
    </div>
  );
}

/* Animated counter */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1800;
        const t0 = performance.now();
        setN(0);
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* Section label */
function SectionTag({ children, id }: { children: string; id?: string }) {
  return (
    <div id={id} className="reveal-on-scroll" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", scrollMarginTop: 100 }}>
      <span style={{ width: 28, height: 1, background: C.blue, opacity: 0.5 }} />
      <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.2em", color: C.blue, textTransform: "uppercase", whiteSpace: "nowrap" }}>{children}</span>
      <span style={{ flex: 1, height: 1, background: C.blue, opacity: 0.1 }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function HomeNarrative() {
  const mainRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("all");

  const filtered = useMemo(
    () => activeCat === "all" ? CATALOG : CATALOG.filter(c => c.cat === activeCat),
    [activeCat]
  );

  /* ─── Scroll-triggered reveals ─── */
  useEffect(() => {
    document.documentElement.classList.add("js-loaded");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    const els = document.querySelectorAll(".reveal-on-scroll");
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ─── Parallax via scroll ─── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
        els.forEach(el => {
          const speed = parseFloat(el.dataset.parallax || "0.1");
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const offset = (center - window.innerHeight / 2) * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Scroll detection for nav ─── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ─── Custom cursor (desktop only) ─── */
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    if (typeof matchMedia !== "undefined" && matchMedia("(hover: none)").matches) return;
    document.body.style.cursor = "none";
    let mx = 0, my = 0, cx = -100, cy = -100;
    let running = true;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      if (!running) return;
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      el.style.transform = `translate(${cx - 16}px, ${cy - 16}px)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(tick);
    return () => { running = false; document.body.style.cursor = ""; window.removeEventListener("mousemove", onMove); };
  }, []);

  /* ─── 3D card tilt ─── */
  const handleTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    e.currentTarget.style.borderColor = C.borderHover;
  }, []);
  const handleTiltReset = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    e.currentTarget.style.borderColor = C.border;
  }, []);

  /* ─── Magnetic button ─── */
  const handleMag = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
  }, []);
  const handleMagReset = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ═════════════════════ RENDER ═════════════════════ */
  return (
    <div ref={mainRef} style={{ background: C.bg, color: C.text, fontFamily: "var(--font-inter, Inter), system-ui, sans-serif", overflowX: "hidden" }}>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="bd-cursor" aria-hidden="true" />

      {/* ══════════ NAV ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{
        padding: scrolled ? "0.6rem 1.5rem" : "1.15rem 1.5rem",
        background: scrolled ? "rgba(17,17,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.35rem", fontWeight: 600, color: C.text, letterSpacing: "-0.01em" }}>
              Bamberg<span style={{ color: C.blue }}>Digital</span>
            </span>
          </Link>
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
            {[
              { label: "Services", target: "services" },
              { label: "Blueprints", target: "blueprints" },
              { label: "About", target: "about" },
              { label: "Contact", target: "contact" },
            ].map(l => (
              <button key={l.label} onClick={() => scrollTo(l.target)} className="nav-link" style={{
                fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.15em", color: C.textSoft,
                textTransform: "uppercase", background: "none", border: "none", cursor: "pointer",
                transition: "color 0.25s", padding: "0.25rem 0",
              }}>{l.label}</button>
            ))}
            <a href="tel:+19169077782" className="nav-cta" style={{
              fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.08em",
              padding: "0.5rem 1.1rem", border: `1px solid ${C.orange}`, color: C.orange,
              textDecoration: "none", textTransform: "uppercase", transition: "all 0.3s",
            }}>(916) 907-7782</a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: "none", border: "none", color: C.text, cursor: "pointer", padding: "0.5rem" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden" style={{ padding: "1.5rem 0 0.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {["services", "blueprints", "about", "contact"].map(id => (
              <button key={id} onClick={() => scrollTo(id)} style={{ fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.12em", color: C.textSoft, textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>{id}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="ws-blueprint-grid" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        {/* Glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 45%, rgba(74,158,206,0.07) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "-10%", bottom: "-15%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(232,135,43,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Label */}
          <div className="hero-anim hero-d1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 40, height: 1, background: C.blue }} />
            <span style={{ fontFamily: MONO, fontSize: "0.55rem", letterSpacing: "0.2em", color: C.blue, textTransform: "uppercase" }}>Sacramento Digital Agency — Est. 2024</span>
          </div>
          {/* Headline */}
          <h1 className="hero-anim hero-d2" style={{ fontFamily: HEAD, fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.88, fontSize: "clamp(3.2rem, 11vw, 10rem)", margin: 0, color: C.text }}>
            ENGINEERED<br />
            <span style={{ color: C.blue }}>TO PERFORM</span>
            <span style={{ color: C.orange }}>.</span>
          </h1>
          {/* Subhead */}
          <p className="hero-anim hero-d3" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)", color: C.textSoft, maxWidth: 560, margin: "2rem 0 2.5rem", lineHeight: 1.75, fontWeight: 300 }}>
            One founder. No templates. Custom websites, SEO systems, and AI automation — built from blueprint to launch for small businesses nationwide.
          </p>
          {/* CTAs */}
          <div className="hero-anim hero-d4" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <button onClick={() => scrollTo("blueprints")} className="ws-cta-pulse" style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.85rem 1.8rem", background: C.orange, color: "#fff", border: "none", cursor: "pointer" }}
              onMouseMove={handleMag} onMouseLeave={handleMagReset}
            >Browse 50+ Blueprints ↓</button>
            <a href="tel:+19169077782" className="nav-cta" style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.85rem 1.8rem", border: `1px solid ${C.blue}`, color: C.blue, textDecoration: "none", transition: "all 0.3s", background: "transparent" }}>Free Consultation →</a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="hero-anim hero-d4" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: MONO, fontSize: "0.5rem", letterSpacing: "0.3em", color: C.textMute, textTransform: "uppercase" }}>Scroll</span>
          <div className="scroll-pulse" style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.blue}, transparent)` }} />
        </div>
      </section>

      {/* ══════════ MARQUEE 1 ══════════ */}
      <div style={{ overflow: "hidden", padding: "0.85rem 0", background: C.bgLight, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[0, 1].map(i => (
            <span key={i} style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.3em", color: C.blue, textTransform: "uppercase" }}>
              {"WEB DESIGN \u2726 SEO SYSTEMS \u2726 LEAD GENERATION \u2726 AI AUTOMATION \u2726 BRANDING \u2726 CONTENT STRATEGY \u2726 SOCIAL MEDIA \u2726 CUSTOM TOOLS \u2726 "}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ SERVICES ══════════ */}
      <section style={{ padding: "6rem 1.5rem 7rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTag id="services">What We Build</SectionTag>
          <h2 className="reveal-on-scroll" style={{ fontFamily: HEAD, fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.03em", color: C.text, margin: "0 0 3.5rem" }}>
            Six Services.<br /><span style={{ color: C.textMute }}>One Builder.</span>
          </h2>
          {SERVICES.map((s, i) => (
            <div key={s.num} className="reveal-on-scroll" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", padding: "2rem 0", borderBottom: `1px solid ${C.border}`, alignItems: "start", transitionDelay: `${i * 60}ms` }}>
              <span data-parallax={(i % 2 === 0 ? 0.04 : -0.04).toString()} style={{ fontFamily: HEAD, fontSize: "clamp(1.75rem, 4.5vw, 3rem)", fontWeight: 800, color: C.blueDim, lineHeight: 1 }}>{s.num}</span>
              <div>
                <h3 style={{ fontFamily: HEAD, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, color: C.text, margin: "0 0 0.4rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.88rem", color: C.textSoft, lineHeight: 1.7, maxWidth: 550, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ MARQUEE 2 (reverse, orange) ══════════ */}
      <div style={{ overflow: "hidden", padding: "0.85rem 0", background: C.bgLight, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="marquee-track-rev" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[0, 1].map(i => (
            <span key={i} style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.3em", color: C.orange, textTransform: "uppercase", opacity: 0.55 }}>
              {"RESTAURANT \u2726 DENTAL \u2726 SALON \u2726 LAW FIRM \u2726 CONTRACTOR \u2726 REAL ESTATE \u2726 GYM \u2726 PHOTOGRAPHER \u2726 PLUMBER \u2726 BREWERY \u2726 "}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ INDUSTRY CATALOG ══════════ */}
      <section style={{ padding: "6rem 1.5rem 7rem", background: C.bgLight, scrollMarginTop: 80 }} id="blueprints">
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionTag>Industry Catalog</SectionTag>
          <h2 className="reveal-on-scroll" style={{ fontFamily: HEAD, fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.03em", color: C.text, margin: "0 0 0.75rem" }}>
            50+ Industry Blueprints
          </h2>
          <p className="reveal-on-scroll" style={{ fontSize: "0.92rem", color: C.textSoft, lineHeight: 1.7, maxWidth: 550, margin: "0 0 2.5rem" }}>
            Pre-engineered website specifications for your industry. Each blueprint includes layout, features, integrations, and a unique visual identity.
          </p>

          {/* Category pills */}
          <div className="reveal-on-scroll" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2.5rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{
                fontFamily: MONO, fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.4rem 0.9rem", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.25s",
                border: `1px solid ${activeCat === cat.id ? C.blue : C.border}`,
                background: activeCat === cat.id ? C.blueDim : "transparent",
                color: activeCat === cat.id ? C.blue : C.textMute,
              }}>{cat.label}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {filtered.map((item, i) => (
              <div key={item.id} className="catalog-card" style={{
                animationDelay: `${Math.min(i * 35, 500)}ms`,
                background: C.card, border: `1px solid ${C.border}`, overflow: "hidden",
                willChange: "transform", transition: "border-color 0.3s, box-shadow 0.3s",
              }}
                onMouseMove={handleTilt} onMouseLeave={handleTiltReset}
              >
                <div style={{ height: 2, background: item.accent }} />
                <div style={{ padding: "0.9rem" }}>
                  <Wireframe layout={item.layout} accent={item.accent} />
                  <h4 style={{ fontFamily: HEAD, fontSize: "0.85rem", fontWeight: 700, color: C.text, margin: "0.7rem 0 0.25rem" }}>{item.name}</h4>
                  <p style={{ fontSize: "0.7rem", color: C.textMute, lineHeight: 1.5, margin: "0 0 0.5rem" }}>{item.tag}</p>
                  <span style={{ fontFamily: MONO, fontSize: "0.5rem", letterSpacing: "0.1em", color: item.accent, textTransform: "uppercase", opacity: 0.85 }}>{item.vibe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="ws-blueprint-grid" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.5rem" }} className="md:!grid-cols-4">
          {STATS.map(s => (
            <div key={s.label} className="reveal-on-scroll" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: HEAD, fontSize: "clamp(2.5rem, 6vw, 3.75rem)", fontWeight: 800, color: C.text, lineHeight: 1 }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p style={{ fontFamily: MONO, fontSize: "0.55rem", letterSpacing: "0.15em", color: C.textMute, textTransform: "uppercase", marginTop: "0.5rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" style={{ padding: "6rem 1.5rem 7rem", background: C.bgLight, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="md:!grid-cols-2 md:!gap-16">
          <div className="reveal-on-scroll">
            <SectionTag>The Builder</SectionTag>
            <blockquote style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)", color: C.text, lineHeight: 1.4, margin: "1.5rem 0 0", borderLeft: `3px solid ${C.blue}`, paddingLeft: "1.5rem" }}>
              &ldquo;I build every site like my name is on the door — because it is.&rdquo;
            </blockquote>
            <p style={{ fontFamily: HAND, fontSize: "1.6rem", color: C.blue, marginTop: "1.5rem" }}>— Jason Bamberg</p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: "0.15s" }}>
            <p style={{ fontSize: "0.92rem", color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
              {`Bamberg Digital isn\u2019t an agency with layers of account managers. It\u2019s one person \u2014 Jason \u2014 who handles every call, every design decision, every line of code.`}
            </p>
            <p style={{ fontSize: "0.92rem", color: C.textSoft, lineHeight: 1.8, marginTop: "1.25rem" }}>
              Based in Sacramento, serving businesses nationwide. No templates. No page builders. No runaround. Just direct access to the person building your site — from blueprint to launch.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              <a href="mailto:hello@bambergdigital.com" style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: C.blue, textDecoration: "none", textTransform: "uppercase", borderBottom: `1px solid ${C.blueDim}`, paddingBottom: 2 }}>hello@bambergdigital.com</a>
              <a href="tel:+19169077782" style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: C.blue, textDecoration: "none", textTransform: "uppercase", borderBottom: `1px solid ${C.blueDim}`, paddingBottom: 2 }}>(916) 907-7782</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section id="contact" style={{ padding: "7rem 1.5rem 8rem", textAlign: "center", position: "relative", overflow: "hidden", scrollMarginTop: 80 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(74,158,206,0.06) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="reveal-on-scroll">
            <h2 style={{ fontFamily: HEAD, fontSize: "clamp(3rem, 12vw, 8rem)", fontWeight: 800, letterSpacing: "-0.045em", color: C.text, lineHeight: 0.88, margin: 0 }}>
              {"LET\u2019S"}<br /><span style={{ color: C.blue }}>BUILD</span><span style={{ color: C.orange }}>.</span>
            </h2>
          </div>
          <p className="reveal-on-scroll" style={{ fontSize: "1rem", color: C.textSoft, lineHeight: 1.7, maxWidth: 420, margin: "1.5rem auto 2.5rem", transitionDelay: "0.1s" }}>
            Ready to see what your industry blueprint looks like? {"Let\u2019s"} talk.
          </p>
          <div className="reveal-on-scroll" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", transitionDelay: "0.2s" }}>
            <a href="tel:+19169077782" className="ws-cta-pulse" style={{ fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem", background: C.orange, color: "#fff", textDecoration: "none", display: "inline-block", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
              onMouseMove={handleMag} onMouseLeave={handleMagReset}
            >(916) 907-7782</a>
            <a href="mailto:hello@bambergdigital.com" style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.12em", color: C.blue, textDecoration: "none", textTransform: "uppercase" }}>hello@bambergdigital.com</a>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ padding: "2.5rem 1.5rem", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1rem", fontWeight: 600, color: C.textMute }}>
              Bamberg<span style={{ color: C.blue }}>Digital</span>
            </span>
            <p style={{ fontFamily: MONO, fontSize: "0.5rem", letterSpacing: "0.12em", color: C.textMute, textTransform: "uppercase", marginTop: "0.25rem" }}>Sacramento, CA — Nationwide</p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["services", "blueprints", "about", "contact"].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link" style={{ fontFamily: MONO, fontSize: "0.55rem", letterSpacing: "0.1em", color: C.textMute, textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}>{id}</button>
            ))}
          </div>
          <p style={{ fontFamily: MONO, fontSize: "0.5rem", color: C.textMute, letterSpacing: "0.08em" }}>&copy; {new Date().getFullYear()} Bamberg Digital</p>
        </div>
      </footer>

    </div>
  );
}
