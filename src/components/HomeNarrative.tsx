"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import Cursor from "./Cursor";

/* ═══════════════════════════════════════════════════════════════════
   AWWWARDS-LEVEL HOMEPAGE — Bamberg Digital
   Zero external animation libs. Pure CSS + IntersectionObserver + rAF.
   ═══════════════════════════════════════════════════════════════════ */

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

/* ─── Catalog Types ──────────────────────────────────────────────── */
type CatItem = {
  id: string;
  name: string;
  cat: string;
  tag: string;
  layout:
    | "hero"
    | "sidebar"
    | "grid"
    | "services"
    | "booking"
    | "gallery"
    | "local"
    | "store";
  accent: string;
  features: string[];
  vibe: string;
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

/* ─── 50 Industry Blueprints ─────────────────────────────────────── */
const CATALOG: CatItem[] = [
  {
    id: "restaurant",
    name: "Restaurant",
    cat: "food",
    tag: "Online ordering, reservations, menus that sell",
    layout: "hero",
    accent: "#e85d3a",
    features: [
      "Online ordering (Square / Toast)",
      "Reservation system integration",
      "Photo-rich menu with dietary filters",
      "Mobile-first — 73% of traffic",
    ],
    vibe: "Warm & Appetizing",
  },
  {
    id: "cafe",
    name: "Cafe & Coffee Shop",
    cat: "food",
    tag: "Cozy vibes, online orders, loyalty programs",
    layout: "hero",
    accent: "#8B6914",
    features: [
      "Online ordering & pickup",
      "Loyalty program integration",
      "Instagram feed widget",
      "Menu with seasonal rotations",
    ],
    vibe: "Cozy & Inviting",
  },
  {
    id: "bakery",
    name: "Bakery",
    cat: "food",
    tag: "Custom orders, gallery, seasonal menus",
    layout: "gallery",
    accent: "#D4956A",
    features: [
      "Custom order request forms",
      "Product gallery with categories",
      "Seasonal menu updates",
      "Wholesale inquiry page",
    ],
    vibe: "Sweet & Artisanal",
  },
  {
    id: "brewery",
    name: "Brewery & Winery",
    cat: "food",
    tag: "Taproom menus, events, merchandise sales",
    layout: "store",
    accent: "#B8860B",
    features: [
      "Taproom / tasting menu",
      "Event calendar & tickets",
      "Online merch store",
      "Age verification gate",
    ],
    vibe: "Craft & Bold",
  },
  {
    id: "food-truck",
    name: "Food Truck",
    cat: "food",
    tag: "Location tracker, daily specials, catering",
    layout: "local",
    accent: "#FF6B35",
    features: [
      "Real-time location updates",
      "Daily menu / specials board",
      "Catering inquiry forms",
      "Social media integration",
    ],
    vibe: "Bold & Street",
  },
  {
    id: "bar",
    name: "Bar & Lounge",
    cat: "food",
    tag: "Events, specials, atmosphere that converts",
    layout: "hero",
    accent: "#9B59B6",
    features: [
      "Event listings & bottle service",
      "Cocktail / drink menu",
      "VIP reservation system",
      "Photo gallery & atmosphere",
    ],
    vibe: "Moody & Upscale",
  },
  {
    id: "dental",
    name: "Dental Practice",
    cat: "health",
    tag: "Appointments, services, patient trust",
    layout: "sidebar",
    accent: "#4ECDC4",
    features: [
      "Online appointment booking",
      "Treatment pages with visuals",
      "Patient forms & portal links",
      "Insurance info & payment plans",
    ],
    vibe: "Clean & Trustworthy",
  },
  {
    id: "medical",
    name: "Medical Practice",
    cat: "health",
    tag: "Patient portal, provider bios, telehealth",
    layout: "sidebar",
    accent: "#3498DB",
    features: [
      "Provider profiles & credentials",
      "Patient portal integration",
      "Telehealth scheduling",
      "HIPAA-aware form handling",
    ],
    vibe: "Professional & Caring",
  },
  {
    id: "chiro",
    name: "Chiropractic",
    cat: "health",
    tag: "Online booking, treatments, wellness content",
    layout: "booking",
    accent: "#27AE60",
    features: [
      "Online appointment scheduling",
      "Treatment & condition pages",
      "Wellness blog for SEO",
      "New patient intake forms",
    ],
    vibe: "Active & Healing",
  },
  {
    id: "vet",
    name: "Veterinary Clinic",
    cat: "health",
    tag: "Pet portal, services, emergency info",
    layout: "sidebar",
    accent: "#E67E22",
    features: [
      "Online appointment booking",
      "Emergency contact & hours",
      "Service descriptions by animal",
      "Pet health resource center",
    ],
    vibe: "Friendly & Caring",
  },
  {
    id: "salon",
    name: "Hair Salon",
    cat: "beauty",
    tag: "Online booking, stylist profiles, transformations",
    layout: "booking",
    accent: "#E91E63",
    features: [
      "Online booking (Vagaro / Booksy)",
      "Stylist profiles & portfolios",
      "Before / after gallery",
      "Product recommendations",
    ],
    vibe: "Stylish & Modern",
  },
  {
    id: "barbershop",
    name: "Barbershop",
    cat: "beauty",
    tag: "Appointment booking, services, the crew",
    layout: "booking",
    accent: "#795548",
    features: [
      "Walk-in & appointment booking",
      "Service menu with pricing",
      "Barber team profiles",
      "Location & hours widget",
    ],
    vibe: "Classic & Sharp",
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    cat: "beauty",
    tag: "Treatment menu, booking, gift cards",
    layout: "booking",
    accent: "#00897B",
    features: [
      "Treatment menu & packages",
      "Online booking system",
      "Gift card purchasing",
      "Wellness blog & tips",
    ],
    vibe: "Serene & Luxurious",
  },
  {
    id: "gym",
    name: "Gym & Fitness",
    cat: "beauty",
    tag: "Class schedules, memberships, trainer bios",
    layout: "hero",
    accent: "#F44336",
    features: [
      "Class schedule & registration",
      "Membership tiers & sign-up",
      "Trainer profiles & bios",
      "Virtual tour & facility photos",
    ],
    vibe: "Energetic & Bold",
  },
  {
    id: "yoga",
    name: "Yoga Studio",
    cat: "beauty",
    tag: "Class booking, workshops, retreat info",
    layout: "booking",
    accent: "#9C27B0",
    features: [
      "Class schedule & booking",
      "Workshop & retreat pages",
      "Instructor profiles",
      "Online class streaming links",
    ],
    vibe: "Calm & Centered",
  },
  {
    id: "trainer",
    name: "Personal Trainer",
    cat: "beauty",
    tag: "Transformation gallery, programs, booking",
    layout: "hero",
    accent: "#FF5722",
    features: [
      "Before/after transformation gallery",
      "Program packages & pricing",
      "Online consultation booking",
      "Client testimonials & results",
    ],
    vibe: "Motivating & Results-Driven",
  },
  {
    id: "nail",
    name: "Nail Salon",
    cat: "beauty",
    tag: "Service menu, gallery, online booking",
    layout: "gallery",
    accent: "#EC407A",
    features: [
      "Service menu with photos",
      "Online booking integration",
      "Nail art gallery",
      "Team profiles & specialties",
    ],
    vibe: "Fun & Creative",
  },
  {
    id: "plumber",
    name: "Plumber",
    cat: "home",
    tag: "Emergency contact, services, trust badges",
    layout: "services",
    accent: "#1976D2",
    features: [
      "Emergency call-now button",
      "Service area map",
      "Before/after project photos",
      "Licensed & insured badges",
    ],
    vibe: "Reliable & Trustworthy",
  },
  {
    id: "electrician",
    name: "Electrician",
    cat: "home",
    tag: "Service pages, safety content, quick quote",
    layout: "services",
    accent: "#FFC107",
    features: [
      "Service category pages",
      "Safety certifications display",
      "Online quote request",
      "Emergency contact prominence",
    ],
    vibe: "Safe & Professional",
  },
  {
    id: "hvac",
    name: "HVAC",
    cat: "home",
    tag: "Seasonal campaigns, maintenance plans, emergency",
    layout: "services",
    accent: "#0097A7",
    features: [
      "Seasonal service promotions",
      "Maintenance plan sign-up",
      "Emergency service request",
      "Energy savings calculator",
    ],
    vibe: "Efficient & Trustworthy",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    cat: "home",
    tag: "Portfolio gallery, seasonal services, quote",
    layout: "gallery",
    accent: "#4CAF50",
    features: [
      "Portfolio gallery by project type",
      "Seasonal service packages",
      "Online quote calculator",
      "Maintenance scheduling",
    ],
    vibe: "Natural & Professional",
  },
  {
    id: "roofing",
    name: "Roofing",
    cat: "home",
    tag: "Storm damage, insurance help, project gallery",
    layout: "services",
    accent: "#795548",
    features: [
      "Storm damage inspection CTA",
      "Insurance claim guidance",
      "Project before/after gallery",
      "Financing options page",
    ],
    vibe: "Strong & Dependable",
  },
  {
    id: "cleaning",
    name: "Cleaning Service",
    cat: "home",
    tag: "Booking system, service packages, reviews",
    layout: "booking",
    accent: "#29B6F6",
    features: [
      "Online booking with date/time",
      "Service tier packages",
      "Recurring schedule setup",
      "Review integration",
    ],
    vibe: "Fresh & Organized",
  },
  {
    id: "interior",
    name: "Interior Designer",
    cat: "home",
    tag: "Portfolio, mood boards, consultation booking",
    layout: "gallery",
    accent: "#AB47BC",
    features: [
      "Project portfolio by style",
      "Mood board showcase",
      "Consultation booking form",
      "Press & feature mentions",
    ],
    vibe: "Sophisticated & Inspiring",
  },
  {
    id: "contractor",
    name: "General Contractor",
    cat: "home",
    tag: "Project showcase, licensing, free estimate",
    layout: "gallery",
    accent: "#607D8B",
    features: [
      "Project showcase by category",
      "Licensing & insurance proof",
      "Free estimate request form",
      "Sub-trade partner listings",
    ],
    vibe: "Solid & Experienced",
  },
  {
    id: "lawyer",
    name: "Law Firm",
    cat: "pro",
    tag: "Practice areas, attorney bios, case evaluation",
    layout: "sidebar",
    accent: "#B71C1C",
    features: [
      "Practice area landing pages",
      "Attorney profiles & credentials",
      "Free case evaluation form",
      "Confidential contact options",
    ],
    vibe: "Authoritative & Trustworthy",
  },
  {
    id: "accountant",
    name: "Accountant / CPA",
    cat: "pro",
    tag: "Services, tax season CTAs, client portal",
    layout: "services",
    accent: "#1B5E20",
    features: [
      "Service packages by need",
      "Seasonal tax prep CTAs",
      "Client portal link",
      "Compliance & licensing badges",
    ],
    vibe: "Precise & Professional",
  },
  {
    id: "consultant",
    name: "Business Consultant",
    cat: "pro",
    tag: "Case studies, framework explainer, discovery call",
    layout: "hero",
    accent: "#1A237E",
    features: [
      "Framework / methodology page",
      "Client case studies",
      "Discovery call booking",
      "ROI calculator or stats",
    ],
    vibe: "Strategic & Results-Driven",
  },
  {
    id: "therapist",
    name: "Therapist / Counselor",
    cat: "pro",
    tag: "Specialties, intake, telehealth, trust",
    layout: "sidebar",
    accent: "#5C6BC0",
    features: [
      "Specialty / modality pages",
      "Secure online intake forms",
      "Telehealth session booking",
      "FAQ & what to expect",
    ],
    vibe: "Warm & Safe",
  },
  {
    id: "financial",
    name: "Financial Advisor",
    cat: "pro",
    tag: "Services, planning tools, appointment booking",
    layout: "sidebar",
    accent: "#2E7D32",
    features: [
      "Service / planning area pages",
      "Retirement or savings calculator",
      "Appointment scheduler",
      "Regulatory disclosures (ADV)",
    ],
    vibe: "Secure & Expert",
  },
  {
    id: "insurance",
    name: "Insurance Agency",
    cat: "pro",
    tag: "Quote forms, carrier logos, product pages",
    layout: "services",
    accent: "#0277BD",
    features: [
      "Product landing pages",
      "Online quote request forms",
      "Carrier & partner logos",
      "Claims process explainer",
    ],
    vibe: "Reliable & Protective",
  },
  {
    id: "realtor",
    name: "Realtor / Agent",
    cat: "auto",
    tag: "MLS listings, neighborhood guides, lead capture",
    layout: "grid",
    accent: "#C62828",
    features: [
      "MLS / IDX listing integration",
      "Neighborhood guide pages",
      "Lead capture landing pages",
      "Market update blog",
    ],
    vibe: "Professional & Local",
  },
  {
    id: "auto-dealer",
    name: "Auto Dealer",
    cat: "auto",
    tag: "Inventory, financing, trade-in, test drives",
    layout: "grid",
    accent: "#212121",
    features: [
      "Vehicle inventory with filters",
      "Finance calculator",
      "Trade-in valuation form",
      "Test drive scheduling",
    ],
    vibe: "Bold & Credible",
  },
  {
    id: "auto-repair",
    name: "Auto Repair Shop",
    cat: "auto",
    tag: "Services, appointment, digital inspection",
    layout: "services",
    accent: "#37474F",
    features: [
      "Service menu & pricing guide",
      "Online appointment booking",
      "Digital inspection reports",
      "Loyalty rewards program",
    ],
    vibe: "Honest & Reliable",
  },
  {
    id: "photographer",
    name: "Photographer",
    cat: "creative",
    tag: "Portfolio, packages, booking, prints",
    layout: "gallery",
    accent: "#4A148C",
    features: [
      "Masonry / fullscreen gallery",
      "Package & pricing pages",
      "Inquiry & booking form",
      "Print sales integration",
    ],
    vibe: "Artistic & Visual",
  },
  {
    id: "videographer",
    name: "Videographer",
    cat: "creative",
    tag: "Showreel, project work, packages",
    layout: "hero",
    accent: "#880E4F",
    features: [
      "Video showreel hero",
      "Project category pages",
      "Package & rate cards",
      "Fast inquiry form",
    ],
    vibe: "Cinematic & Bold",
  },
  {
    id: "musician",
    name: "Musician / Band",
    cat: "creative",
    tag: "Music player, tour dates, merch, booking",
    layout: "hero",
    accent: "#E65100",
    features: [
      "Embedded music player",
      "Tour / show date calendar",
      "Merch store integration",
      "Booking / press inquiry",
    ],
    vibe: "Energetic & Authentic",
  },
  {
    id: "artist",
    name: "Visual Artist",
    cat: "creative",
    tag: "Gallery, commissions, prints, CV",
    layout: "gallery",
    accent: "#6A1B9A",
    features: [
      "Artwork gallery by series",
      "Commission request form",
      "Print / original sales",
      "Artist CV & exhibitions",
    ],
    vibe: "Creative & Expressive",
  },
  {
    id: "tutoring",
    name: "Tutoring / Education",
    cat: "community",
    tag: "Subjects, scheduling, parent resources",
    layout: "services",
    accent: "#F57F17",
    features: [
      "Subject / grade level pages",
      "Tutor profiles & qualifications",
      "Session scheduling form",
      "Parent resource center",
    ],
    vibe: "Encouraging & Clear",
  },
  {
    id: "church",
    name: "Church / Ministry",
    cat: "community",
    tag: "Sermons, events, giving, community",
    layout: "hero",
    accent: "#4527A0",
    features: [
      "Sermon archive & livestream",
      "Events & small groups calendar",
      "Online giving integration",
      "New visitor welcome page",
    ],
    vibe: "Welcoming & Inspiring",
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    cat: "community",
    tag: "Mission, donate, volunteer, impact",
    layout: "hero",
    accent: "#00695C",
    features: [
      "Mission & impact storytelling",
      "Donation form integration",
      "Volunteer sign-up",
      "Grant & sponsor pages",
    ],
    vibe: "Purposeful & Warm",
  },
  {
    id: "sports",
    name: "Sports Team / League",
    cat: "community",
    tag: "Schedule, roster, tickets, stats",
    layout: "grid",
    accent: "#D32F2F",
    features: [
      "Game schedule & results",
      "Roster & player profiles",
      "Ticket / registration sales",
      "Sponsor recognition page",
    ],
    vibe: "Energetic & Team-Focused",
  },
  {
    id: "event",
    name: "Event Venue",
    cat: "community",
    tag: "Gallery, packages, inquiry, date availability",
    layout: "gallery",
    accent: "#6D4C41",
    features: [
      "Venue gallery & virtual tour",
      "Event package pages",
      "Date availability checker",
      "Catering partner listings",
    ],
    vibe: "Elegant & Celebratory",
  },
  {
    id: "pet",
    name: "Pet Services",
    cat: "specialty",
    tag: "Boarding, grooming, daycare, booking",
    layout: "booking",
    accent: "#F9A825",
    features: [
      "Service packages & add-ons",
      "Online boarding reservation",
      "Meet the staff & facility tour",
      "Pet parent resources",
    ],
    vibe: "Fun & Caring",
  },
  {
    id: "childcare",
    name: "Childcare / Daycare",
    cat: "specialty",
    tag: "Programs, enrollment, tour scheduling, safety",
    layout: "sidebar",
    accent: "#43A047",
    features: [
      "Program & age-group pages",
      "Enrollment application form",
      "Tour scheduling",
      "Safety policies & credentials",
    ],
    vibe: "Safe & Nurturing",
  },
  {
    id: "florist",
    name: "Florist",
    cat: "specialty",
    tag: "Arrangements, events, online ordering",
    layout: "gallery",
    accent: "#AD1457",
    features: [
      "Product gallery by occasion",
      "Online flower ordering",
      "Wedding & event inquiry",
      "Seasonal collection pages",
    ],
    vibe: "Beautiful & Seasonal",
  },
  {
    id: "catering",
    name: "Catering",
    cat: "specialty",
    tag: "Menus, events, quote request, gallery",
    layout: "gallery",
    accent: "#BF360C",
    features: [
      "Event type landing pages",
      "Menu showcase with photos",
      "Quote request form",
      "Testimonials & event gallery",
    ],
    vibe: "Delicious & Professional",
  },
  {
    id: "travel",
    name: "Travel Agency",
    cat: "specialty",
    tag: "Destinations, packages, booking, inspiration",
    layout: "hero",
    accent: "#0288D1",
    features: [
      "Destination showcase pages",
      "Package & itinerary builder",
      "Inquiry / quote request",
      "Travel blog for SEO",
    ],
    vibe: "Inspiring & Adventurous",
  },
  {
    id: "boutique",
    name: "Boutique / Retail",
    cat: "specialty",
    tag: "Product catalog, lookbook, e-commerce",
    layout: "store",
    accent: "#880E4F",
    features: [
      "Product catalog with filters",
      "Lookbook / editorial pages",
      "E-commerce checkout",
      "Email list & loyalty perks",
    ],
    vibe: "Curated & Stylish",
  },
  {
    id: "staffing",
    name: "Staffing Agency",
    cat: "pro",
    tag: "Job board, employer services, apply now",
    layout: "services",
    accent: "#1565C0",
    features: [
      "Job listing board",
      "Employer services page",
      "Candidate application flow",
      "Industry specialty pages",
    ],
    vibe: "Professional & Efficient",
  },
];

/* ─── Services ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    title: "Web Design & Development",
    price: "From $497",
    desc: "No templates. Built to convert.",
    full: "Custom-built sites engineered for conversion. Clean, fast, accessible code that ranks and converts.",
  },
  {
    num: "02",
    title: "SEO & Search Systems",
    price: "From $297/mo",
    desc: "Rankings that compound.",
    full: "Technical SEO, content strategy, and local search optimization. We build ranking systems that compound over time.",
  },
  {
    num: "03",
    title: "Lead Generation",
    price: "From $197/mo",
    desc: "Verified contacts, your territory.",
    full: "Verified leads with real contact data. Every lead is someone who needs what you sell, in your service area.",
  },
  {
    num: "04",
    title: "AI & Automation",
    price: "From $997",
    desc: "Your business runs while you sleep.",
    full: "Chatbots, AI voice agents, workflow automation, and custom tools. Your business keeps working around the clock.",
  },
  {
    num: "05",
    title: "Branding & Identity",
    price: "From $697",
    desc: "Logo, colors, typography system.",
    full: "Logo, color systems, typography, and brand guidelines that make your business look as good as your work actually is.",
  },
  {
    num: "06",
    title: "Content & Social",
    price: "From $199/mo",
    desc: "Content that builds authority.",
    full: "Photography, video, copywriting, and social media management. Consistent content that drives traffic.",
  },
];

/* ─── Stats ───────────────────────────────────────────────────────── */
const STATS = [
  { value: 47, suffix: "+", label: "Projects shipped" },
  { value: 1, suffix: "", label: "Founder you talk to" },
  { value: 48, suffix: "hr", label: "Response time" },
  { value: 50, suffix: "+", label: "Industry blueprints" },
];

/* ─── Live Work ───────────────────────────────────────────────────── */
const LIVE_WORK = [
  {
    name: "Layer UI",
    category: "SaaS Platform",
    desc: "Remote work OS. Chat, tasks, files, CRM. Launched zero to live in 90 days.",
    url: "https://layerui.io",
    label: "layerui.io",
    accent: "#4a9ece",
    metric: "$40 MRR",
    external: true,
  },
  {
    name: "Recovery Gear",
    category: "E-Commerce",
    desc: "Shopify store for health & recovery. Zendrop fulfillment from day one.",
    url: "https://recoverygear.us",
    label: "recoverygear.us",
    accent: "#27AE60",
    metric: "Live Store",
    external: true,
  },
  {
    name: "Bamberg Digital",
    category: "Agency Website",
    desc: "This site. Next.js, 12 service pages, JSON-LD schema, Page 1 Sacramento.",
    url: "https://bambergdigital.com",
    label: "This site ↑",
    accent: "#e8872b",
    metric: "Page 1",
    external: false,
  },
  {
    name: "NodPod",
    category: "E-Commerce — Sample",
    desc: "Wellness product store. Hero lifestyle photography, shipping bar, conversion-optimized.",
    url: "/demo/nodpod",
    label: "View Demo →",
    accent: "#8B6914",
    metric: "Sample Build",
    external: false,
  },
  {
    name: "NodPod Luxury",
    category: "Luxury — Sample",
    desc: "Dark editorial hospitality redesign. Cormorant Garamond, gold accents, deep immersion.",
    url: "/demo/nodpod-luxury",
    label: "View Demo →",
    accent: "#AD8B73",
    metric: "Sample Build",
    external: false,
  },
  {
    name: "Bright Smiles",
    category: "Healthcare — Sample",
    desc: "Dental practice site. Trust-focused, appointment booking, family positioning.",
    url: "/demo/dental",
    label: "View Demo →",
    accent: "#4ECDC4",
    metric: "Sample Build",
    external: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

function Wireframe({
  layout,
  accent,
}: {
  layout: CatItem["layout"];
  accent: string;
}) {
  const box: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16/10",
    background: C.bgLight,
    borderRadius: 3,
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    overflow: "hidden",
    border: `1px solid ${C.border}`,
  };
  const nav: React.CSSProperties = {
    height: 3,
    background: C.steel,
    borderRadius: 1,
  };
  const blk = (op: number): React.CSSProperties => ({
    background: C.steel,
    borderRadius: 1,
    opacity: op,
  });

  if (layout === "sidebar")
    return (
      <div style={box}>
        <div style={nav} />
        <div style={{ flex: 1, display: "flex", gap: 2 }}>
          <div style={{ width: "28%", ...blk(0.4) }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <div
              style={{
                height: 6,
                background: accent,
                opacity: 0.18,
                borderRadius: 1,
              }}
            />
            <div style={{ flex: 1, ...blk(0.3) }} />
          </div>
        </div>
      </div>
    );

  if (layout === "grid")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.15,
            borderRadius: 1,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
          }}
        >
          {[0.4, 0.3, 0.35, 0.3, 0.4, 0.3].map((op, i) => (
            <div key={i} style={blk(op)} />
          ))}
        </div>
      </div>
    );

  if (layout === "gallery")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 2,
          }}
        >
          <div
            style={{
              gridRow: "1/3",
              background: accent,
              opacity: 0.12,
              borderRadius: 1,
            }}
          />
          <div style={blk(0.35)} />
          <div style={blk(0.25)} />
        </div>
      </div>
    );

  if (layout === "booking")
    return (
      <div style={box}>
        <div style={nav} />
        <div style={{ flex: 1, display: "flex", gap: 2 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <div
              style={{
                height: 8,
                background: accent,
                opacity: 0.18,
                borderRadius: 1,
              }}
            />
            <div style={{ flex: 1, ...blk(0.3) }} />
          </div>
          <div
            style={{
              width: "35%",
              background: accent,
              opacity: 0.08,
              borderRadius: 1,
              border: `1px solid ${accent}30`,
            }}
          />
        </div>
      </div>
    );

  if (layout === "services")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.15,
            borderRadius: 1,
          }}
        />
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
        >
          {[0.45, 0.35, 0.3, 0.25].map((op, i) => (
            <div
              key={i}
              style={{
                height: 5,
                borderLeft: `2px solid ${accent}`,
                ...blk(op),
              }}
            />
          ))}
        </div>
      </div>
    );

  if (layout === "store")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.12,
            borderRadius: 1,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <div style={{ flex: 1, ...blk(0.35) }} />
              <div
                style={{
                  height: 3,
                  background: accent,
                  opacity: 0.25,
                  borderRadius: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div style={box}>
      <div style={nav} />
      <div
        style={{ flex: 1, background: accent, opacity: 0.15, borderRadius: 2 }}
      />
      <div style={{ display: "flex", gap: 2, height: 8 }}>
        <div style={{ flex: 1, ...blk(0.4) }} />
        <div style={{ flex: 1, ...blk(0.3) }} />
        <div style={{ flex: 1, ...blk(0.2) }} />
      </div>
    </div>
  );
}

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
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function SectionTag({ children, id }: { children: string; id?: string }) {
  return (
    <div
      id={id}
      className="reveal-on-scroll"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1rem",
        scrollMarginTop: 100,
      }}
    >
      <span
        style={{ width: 28, height: 1, background: C.blue, opacity: 0.5 }}
      />
      <span
        style={{
          fontFamily: MONO,
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: C.blue,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: C.blue, opacity: 0.1 }} />
    </div>
  );
}

/* Scroll-progress indicator */
function ScrollProgress() {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      dot.style.top = `${pct * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div id="scroll-progress-track" aria-hidden="true">
      <div id="scroll-progress-dot" ref={dotRef} />
    </div>
  );
}

/* Horizontal work track with drag support */
function WorkTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onLeave = () => {
      isDown = false;
    };
    const onUp = () => {
      isDown = false;
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    track.addEventListener("mousedown", onDown);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("mouseup", onUp);
    track.addEventListener("mousemove", onMove);
    return () => {
      track.removeEventListener("mousedown", onDown);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("mouseup", onUp);
      track.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div id="work-track" ref={trackRef}>
      {LIVE_WORK.map((w) => (
        <div
          key={w.name}
          data-cursor-card
          style={{
            minWidth: 380,
            height: 280,
            background: C.card,
            borderTop: `3px solid ${w.accent}`,
            borderLeft: `1px solid ${C.border}`,
            borderRight: `1px solid ${C.border}`,
            borderBottom: `1px solid ${C.border}`,
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            scrollSnapAlign: "start",
            flexShrink: 0,
            transition:
              "border-color 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.5rem",
                  letterSpacing: "0.18em",
                  color: w.accent,
                  textTransform: "uppercase",
                  padding: "0.25rem 0.6rem",
                  border: `1px solid ${w.accent}40`,
                  background: `${w.accent}10`,
                }}
              >
                {w.category}
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: w.accent,
                  letterSpacing: "0.05em",
                }}
              >
                {w.metric}
              </span>
            </div>
            <h3
              style={{
                fontFamily: HEAD,
                fontWeight: 800,
                fontSize: "1.6rem",
                color: C.text,
                letterSpacing: "-0.025em",
                margin: "0.75rem 0 0.5rem",
              }}
            >
              {w.name}
            </h3>
            <p
              style={{
                fontFamily: "inherit",
                fontSize: "0.85rem",
                color: C.textSoft,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {w.desc}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {w.external ? (
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.14em",
                  color: w.accent,
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {w.label} ↗
              </a>
            ) : (
              <Link
                href={w.url}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.14em",
                  color: w.accent,
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {w.label}
              </Link>
            )}
            <span
              style={{
                width: 24,
                height: 1,
                background: w.accent,
                opacity: 0.35,
                display: "block",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function HomeNarrative() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("all");
  const [heroReady, setHeroReady] = useState(false);
  const ctaBuildRef = useRef<HTMLSpanElement>(null);

  const filtered = useMemo(
    () =>
      activeCat === "all"
        ? CATALOG
        : CATALOG.filter((c) => c.cat === activeCat),
    [activeCat],
  );

  /* Hero animate-in after mount */
  useEffect(() => {
    const id = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(id);
  }, []);

  /* Scroll reveals */
  useEffect(() => {
    document.documentElement.classList.add("js-loaded");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* CTA underline trigger */
  useEffect(() => {
    const el = ctaBuildRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("triggered");
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Nav scroll state */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* 3D tilt */
  const handleTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    e.currentTarget.style.borderColor = C.borderHover;
  }, []);
  const handleTiltReset = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    e.currentTarget.style.borderColor = C.border;
  }, []);

  /* Magnetic button */
  const handleMag = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
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
    <div
      style={{
        background: C.bg,
        color: C.text,
        fontFamily: "var(--font-inter, Inter), system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <Cursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* ══════════ NAV ══════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: scrolled ? "0.6rem 1.5rem" : "1.15rem 1.5rem",
          background: scrolled ? "rgba(17,17,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? `1px solid ${C.border}`
            : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: HEAD,
                fontWeight: 800,
                fontSize: "1.15rem",
                color: C.text,
                letterSpacing: "-0.02em",
              }}
            >
              Bamberg<span style={{ color: C.blue }}>Digital</span>
            </span>
          </Link>

          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2rem" }}
          >
            {[
              { label: "Services", target: "services" },
              { label: "Work", target: "live-work" },
              { label: "Blueprints", target: "blueprints" },
              { label: "About", target: "about" },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.target)}
                className="nav-link"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: C.textSoft,
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.25s",
                  padding: "0.25rem 0",
                }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+19169077782"
              style={{
                fontFamily: MONO,
                fontSize: "0.58rem",
                letterSpacing: "0.06em",
                color: C.textMute,
                textDecoration: "none",
              }}
            >
              (916) 907-7782
            </a>
            <a
              href="tel:+19169077782"
              className="nav-cta"
              style={{
                fontFamily: MONO,
                fontSize: "0.58rem",
                letterSpacing: "0.08em",
                padding: "0.5rem 1.1rem",
                border: `1px solid ${C.orange}`,
                color: C.orange,
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
            >
              FREE AUDIT →
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              color: C.text,
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              padding: "1.5rem 0 0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {["services", "live-work", "blueprints", "about"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: C.textSoft,
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {id.replace("-", " ")}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
          background: C.bg,
          backgroundImage: `
            linear-gradient(rgba(74,158,206,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,158,206,0.03) 1px, transparent 1px),
            radial-gradient(ellipse at 30% 50%, rgba(74,158,206,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 80%, rgba(232,135,43,0.04) 0%, transparent 50%)
          `,
          backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            <span
              style={{ width: 32, height: 1, background: C.blue, opacity: 0.5 }}
            />
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.5rem",
                letterSpacing: "0.22em",
                color: C.blue,
                textTransform: "uppercase",
              }}
            >
              SACRAMENTO&nbsp;&nbsp;›&nbsp;&nbsp;DIGITAL
              AGENCY&nbsp;&nbsp;›&nbsp;&nbsp;EST. 2024
            </span>
          </div>

          {/* H1 — kinetic staggered lines */}
          <h1
            style={{
              fontFamily: HEAD,
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.88,
              margin: "0 0 0.1em",
            }}
          >
            {/* Line 1 */}
            <div
              style={{
                overflow: "hidden",
                display: "block",
                fontSize: "clamp(3.5rem, 12vw, 10rem)",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: C.text,
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(105%)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s",
                }}
              >
                ENGINEERED
              </span>
            </div>
            {/* Line 2 */}
            <div
              style={{
                overflow: "hidden",
                display: "block",
                fontSize: "clamp(3.5rem, 12vw, 10rem)",
              }}
            >
              <span
                style={{
                  display: "block",
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(105%)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s",
                }}
              >
                <span style={{ color: C.orange }}>TO&nbsp;</span>
                <span style={{ color: C.text }}>PERFORM</span>
              </span>
            </div>
            {/* Giant period */}
            <div
              style={{ overflow: "hidden", display: "block", lineHeight: 1 }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(6rem, 18vw, 16rem)",
                  color: C.orange,
                  lineHeight: 0.75,
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady
                    ? "translateY(0) scale(1)"
                    : "translateY(60%) scale(0.8)",
                  transition:
                    "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.75s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.75s",
                  animation: heroReady
                    ? "float-subtle 6s ease-in-out 1.5s infinite"
                    : "none",
                }}
              >
                .
              </span>
            </div>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              color: C.textSoft,
              maxWidth: 560,
              margin: "2rem 0 2.5rem",
              lineHeight: 1.75,
              fontWeight: 300,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.95s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.95s",
            }}
          >
            One founder. No templates. Custom websites, SEO systems, and AI
            automation — built from blueprint to launch.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s",
            }}
          >
            <button
              onClick={() => scrollTo("blueprints")}
              className="ws-cta-pulse"
              onMouseMove={handleMag}
              onMouseLeave={handleMagReset}
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 1.8rem",
                background: C.orange,
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              BROWSE 50+ BLUEPRINTS ↓
            </button>
            <a
              href="tel:+19169077782"
              className="nav-cta"
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 1.8rem",
                border: `1px solid ${C.blue}`,
                color: C.blue,
                textDecoration: "none",
                transition: "all 0.3s",
                background: "transparent",
              }}
            >
              FREE CONSULTATION →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: heroReady ? 1 : 0,
            transition: "opacity 1s 1.4s",
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.48rem",
              letterSpacing: "0.3em",
              color: C.textMute,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            className="scroll-pulse"
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(to bottom, ${C.blue}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div
        style={{
          overflow: "hidden",
          padding: "0.85rem 0",
          background: C.bgLight,
          borderTop: `1px solid rgba(74,158,206,0.08)`,
          borderBottom: `1px solid rgba(74,158,206,0.08)`,
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: C.blue,
                textTransform: "uppercase",
              }}
            >
              {
                "WEB DESIGN ✦ SEO ✦ AI AUTOMATION ✦ LEAD GENERATION ✦ BRANDING ✦ CONTENT ✦ "
              }
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ SERVICES ══════════ */}
      <section
        style={{ padding: "7rem 1.5rem 8rem", background: C.bgLight }}
        id="services"
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTag>What We Build</SectionTag>
          <h2
            className="reveal-on-scroll"
            style={{
              fontFamily: HEAD,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: C.text,
              margin: "0 0 3.5rem",
              lineHeight: 1.1,
            }}
          >
            Six disciplines.
            <br />
            <span style={{ color: C.textMute }}>One obsession.</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className="reveal-on-scroll service-card"
                data-cursor-card
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transitionDelay: `${i * 60}ms`,
                  cursor: "default",
                }}
              >
                <span
                  className="service-num"
                  style={{
                    fontFamily: HEAD,
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: C.blueDim,
                    lineHeight: 1,
                    transition: "color 0.3s, text-shadow 0.3s",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: HEAD,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: C.text,
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: C.orange,
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {s.price} — {s.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: C.textSoft,
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {s.full}
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <button
                    onClick={() => scrollTo("contact")}
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.55rem",
                      letterSpacing: "0.14em",
                      color: C.blue,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    EXPLORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LIVE WORK — HORIZONTAL SCROLL ══════════ */}
      <section style={{ padding: "7rem 0 5rem" }} id="live-work">
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 1.5rem" }}>
          <SectionTag>Portfolio</SectionTag>
          <div className="reveal-on-scroll" style={{ marginBottom: "0.75rem" }}>
            <h2
              style={{
                fontFamily: HEAD,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: C.text,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              REAL WORK. LIVE RIGHT NOW.
            </h2>
          </div>
          <p
            className="reveal-on-scroll"
            style={{
              fontSize: "0.85rem",
              color: C.textMute,
              marginBottom: "2.5rem",
              fontFamily: MONO,
              letterSpacing: "0.05em",
            }}
          >
            Click to visit — every site built by Bamberg Digital.
          </p>
        </div>
        <div style={{ paddingLeft: "1.5rem" }}>
          <WorkTrack />
        </div>
      </section>

      {/* ══════════ INDUSTRY CATALOG ══════════ */}
      <section
        style={{ padding: "7rem 1.5rem 8rem", background: C.bgLight }}
        id="blueprints"
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <SectionTag>Industry Blueprints</SectionTag>
          <h2
            className="reveal-on-scroll"
            style={{
              fontFamily: HEAD,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: C.text,
              margin: "0 0 0.75rem",
            }}
          >
            50+ industries.
            <br />
            <span style={{ color: C.textMute }}>One builder.</span>
          </h2>
          <p
            className="reveal-on-scroll"
            style={{
              color: C.textSoft,
              marginBottom: "2.5rem",
              maxWidth: 500,
              lineHeight: 1.7,
              fontSize: "0.9rem",
            }}
          >
            Browse our full catalog of industry-specific website blueprints.
            Each one is a battle-tested design system ready to build from.
          </p>

          {/* Category pills */}
          <div
            className="reveal-on-scroll"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.45rem 0.9rem",
                  background: activeCat === cat.id ? C.blue : "transparent",
                  color: activeCat === cat.id ? "#fff" : C.textSoft,
                  border: `1px solid ${activeCat === cat.id ? C.blue : C.border}`,
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blueprint cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="catalog-card"
                data-cursor-card
                onMouseMove={handleTilt}
                onMouseLeave={handleTiltReset}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  padding: "1.25rem",
                  animationDelay: `${(i % 12) * 40}ms`,
                  cursor: "default",
                  transition:
                    "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
                }}
              >
                <Wireframe layout={item.layout} accent={item.accent} />
                <div style={{ paddingTop: "0.85rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: HEAD,
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: C.text,
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: item.accent,
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.5rem",
                      letterSpacing: "0.1em",
                      color: C.textMute,
                      textTransform: "uppercase",
                      margin: "0 0 0.6rem",
                    }}
                  >
                    {item.vibe}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: C.textSoft,
                      margin: "0 0 0.75rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.tag}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    {item.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.5rem",
                          color: C.textMute,
                          letterSpacing: "0.05em",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <span
                          style={{ color: item.accent, fontSize: "0.55rem" }}
                        >
                          ›
                        </span>{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("contact")}
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.5rem",
                      letterSpacing: "0.12em",
                      color: item.accent,
                      background: "none",
                      border: `1px solid ${item.accent}40`,
                      padding: "0.35rem 0.7rem",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      transition: "all 0.25s",
                    }}
                  >
                    Get This Blueprint →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="reveal-on-scroll"
            style={{
              textAlign: "center",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <p
              style={{
                color: C.textMute,
                fontSize: "0.8rem",
                marginBottom: "1.5rem",
                fontFamily: MONO,
                letterSpacing: "0.05em",
              }}
            >
              Don&apos;t see your industry? We build custom.
            </p>
            <a
              href="tel:+19169077782"
              className="ws-cta-pulse"
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2rem",
                background: C.orange,
                color: "#fff",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              DISCUSS YOUR PROJECT →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "3rem",
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="reveal-on-scroll">
                <div
                  style={{
                    fontFamily: HEAD,
                    fontWeight: 900,
                    fontSize: "clamp(3.5rem, 8vw, 6rem)",
                    color: C.text,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: C.textMute,
                    textTransform: "uppercase",
                    marginTop: "0.75rem",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section
        style={{ padding: "7rem 1.5rem", background: C.bgLight }}
        id="about"
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTag>The Builder</SectionTag>
          <blockquote
            className="reveal-on-scroll"
            style={{
              fontFamily: HEAD,
              fontSize: "clamp(1.6rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: C.text,
              lineHeight: 1.2,
              margin: "0 0 1.5rem",
              borderLeft: `4px solid ${C.orange}`,
              paddingLeft: "1.5rem",
            }}
          >
            &ldquo;I build every site like my name is on the door — because it
            is.&rdquo;
          </blockquote>
          <p
            className="reveal-on-scroll"
            style={{
              fontFamily: MONO,
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: C.orange,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            — Jason Bamberg, Founder
          </p>
          <p
            className="reveal-on-scroll"
            style={{
              fontSize: "1rem",
              color: C.textSoft,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: "2.5rem",
            }}
          >
            Based in Sacramento. Serving businesses nationwide. Direct access.
            No account managers. No runaround. When you work with Bamberg
            Digital, you work with me.
          </p>
          <div
            className="reveal-on-scroll"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <a
              href="mailto:hello@bambergdigital.com"
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: C.blue,
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: `1px solid ${C.blue}40`,
                paddingBottom: "0.1rem",
              }}
            >
              hello@bambergdigital.com
            </a>
            <a
              href="tel:+19169077782"
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: C.textSoft,
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              (916) 907-7782
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section
        style={{
          padding: "8rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
        id="contact"
      >
        {/* Orange bg block behind BUILD */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% 60%, rgba(232,135,43,0.08) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <SectionTag>Start Today</SectionTag>
          <h2
            className="reveal-on-scroll"
            style={{
              fontFamily: HEAD,
              fontSize: "clamp(3rem, 12vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: C.text,
              margin: "0 0 2rem",
            }}
          >
            LET&apos;S{" "}
            <span
              ref={ctaBuildRef}
              className="underline-draw"
              style={{ color: C.orange, display: "inline-block" }}
            >
              BUILD
            </span>
            .
          </h2>
          <p
            className="reveal-on-scroll"
            style={{
              color: C.textSoft,
              maxWidth: 480,
              margin: "0 auto 3rem",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            Tell me what you need. I&apos;ll tell you what it takes to build it
            right. First call is free. No pitch. No BS.
          </p>
          <div
            className="reveal-on-scroll"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a
              href="tel:+19169077782"
              className="ws-cta-pulse"
              onMouseMove={handleMag}
              onMouseLeave={handleMagReset}
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                padding: "1rem 2.5rem",
                background: C.orange,
                color: "#fff",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              CALL (916) 907-7782 →
            </a>
            <a
              href="mailto:hello@bambergdigital.com"
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                padding: "1rem 2.5rem",
                border: `1px solid ${C.border}`,
                color: C.textSoft,
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-block",
                transition: "all 0.3s",
              }}
            >
              EMAIL JASON →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        style={{
          padding: "2.5rem 1.5rem",
          borderTop: `1px solid rgba(74,158,206,0.08)`,
          background: C.bg,
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: HEAD,
                fontWeight: 800,
                fontSize: "1rem",
                color: C.text,
                letterSpacing: "-0.02em",
              }}
            >
              Bamberg<span style={{ color: C.blue }}>Digital</span>
            </span>
          </Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {[
              { label: "Services", target: "services" },
              { label: "Work", target: "live-work" },
              { label: "Blueprints", target: "blueprints" },
              { label: "About", target: "about" },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.target)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.14em",
                  color: C.textMute,
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.25s",
                }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+19169077782"
              style={{
                fontFamily: MONO,
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                color: C.textMute,
                textDecoration: "none",
              }}
            >
              (916) 907-7782
            </a>
            <a
              href="mailto:hello@bambergdigital.com"
              style={{
                fontFamily: MONO,
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                color: C.textMute,
                textDecoration: "none",
              }}
            >
              hello@bambergdigital.com
            </a>
          </div>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.5rem",
              letterSpacing: "0.1em",
              color: C.textMute,
            }}
          >
            © {new Date().getFullYear()} Bamberg Digital
          </span>
        </div>
      </footer>
    </div>
  );
}
