import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

type StaffMember = { name: string; role: string; img: string };
type ServiceItem = {
  name: string;
  price: string;
  duration: string;
  desc: string;
};
type Slot = { day: string; times: string[] };

type Content = {
  headline: string;
  sub: string;
  cta: string;
  services: ServiceItem[];
  staff: StaffMember[];
  slots: Slot[];
  about: string;
  heroImg: string;
  giftCardCopy: string;
};

const industryContent: Record<string, Content> = {
  salon: {
    headline: "Book Your Style. Own the Room.",
    sub: "Master stylists, premium products, and a chair that's worth the wait. Same-day appointments available.",
    cta: "Book Appointment",
    heroImg:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80&fit=crop",
    services: [
      {
        name: "Cut & Style",
        price: "$75",
        duration: "60 min",
        desc: "Personalized consultation, precision cut, and finished blowout.",
      },
      {
        name: "Single Process Color",
        price: "$120+",
        duration: "90 min",
        desc: "Full coverage gloss or permanent color with bond-builder treatment.",
      },
      {
        name: "Balayage",
        price: "$240+",
        duration: "3 hr",
        desc: "Hand-painted highlights for natural, sun-kissed dimension.",
      },
      {
        name: "Keratin Smoothing",
        price: "$280+",
        duration: "2.5 hr",
        desc: "Frizz-free, low-maintenance hair for up to four months.",
      },
      {
        name: "Bridal & Event",
        price: "$165",
        duration: "75 min",
        desc: "Up-do or formal styling — on-location available.",
      },
      {
        name: "Deep Conditioning",
        price: "$45",
        duration: "30 min",
        desc: "Restorative mask add-on for damaged or color-treated hair.",
      },
    ],
    staff: [
      {
        name: "Maya Chen",
        role: "Master Colorist · Owner",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Jordan Reyes",
        role: "Senior Stylist",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Priya Sharma",
        role: "Curl Specialist",
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Alex Park",
        role: "Texture & Extensions",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      { day: "Today", times: ["11:30 AM", "1:00 PM", "4:30 PM"] },
      { day: "Tomorrow", times: ["9:00 AM", "12:00 PM", "2:30 PM", "5:00 PM"] },
      { day: "Saturday", times: ["10:00 AM", "11:30 AM", "3:00 PM"] },
    ],
    about:
      "Founded by Maya Chen in 2014, our Sacramento salon is built on the belief that great hair starts with great listening. Our team trains continuously with Wella, Olaplex, and Davines, and every appointment begins with a real conversation — not a shortcut.",
    giftCardCopy:
      "Give the gift of a great hair day. Digital gift cards delivered instantly.",
  },
  barbershop: {
    headline: "Sharp Cuts. Real Conversation. Old-School Craft.",
    sub: "Walk-ins welcome. Appointments preferred. Hot-towel finish always included.",
    cta: "Book a Chair",
    heroImg:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80&fit=crop",
    services: [
      {
        name: "Classic Cut",
        price: "$35",
        duration: "30 min",
        desc: "Scissor or clipper cut with hot-towel finish and neck shave.",
      },
      {
        name: "Beard Trim & Lineup",
        price: "$25",
        duration: "20 min",
        desc: "Precision beard sculpt with razor edge and beard oil finish.",
      },
      {
        name: "Cut + Beard Combo",
        price: "$55",
        duration: "45 min",
        desc: "Full service — your hair and beard, dialed in together.",
      },
      {
        name: "Straight Razor Shave",
        price: "$45",
        duration: "40 min",
        desc: "Traditional hot lather, two-pass straight razor, balm finish.",
      },
      {
        name: "Father & Son Cut",
        price: "$55",
        duration: "45 min",
        desc: "Two cuts, one chair time. Make it a tradition.",
      },
      {
        name: "Buzz / Skin Fade",
        price: "$30",
        duration: "25 min",
        desc: "Clean fade or buzz with detailed lineup.",
      },
    ],
    staff: [
      {
        name: "Marco Diaz",
        role: "Master Barber · Owner",
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Tony 'T' Williams",
        role: "Senior Barber · Fades",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Cole Bennett",
        role: "Straight Razor Specialist",
        img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Ramon Acosta",
        role: "Beards & Lineups",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      { day: "Today", times: ["10:30 AM", "1:30 PM", "5:30 PM", "7:00 PM"] },
      { day: "Tomorrow", times: ["9:30 AM", "11:00 AM", "3:30 PM"] },
      { day: "Saturday", times: ["8:00 AM", "10:00 AM", "12:30 PM"] },
    ],
    about:
      "Open since 2008, we're a six-chair shop built on classic technique and zero rush. Every barber on the floor has at least eight years behind the chair. Cash and card welcome, conversation included.",
    giftCardCopy:
      "Gift cards make great Father's Day, birthday, and 'just because' gifts.",
  },
  spa: {
    headline: "A Quiet Place to Come Back to Yourself",
    sub: "Massage, facials, and full-body rituals designed to slow your nervous system down — and your skin glow up.",
    cta: "Book Treatment",
    heroImg:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80&fit=crop",
    services: [
      {
        name: "Signature Massage",
        price: "$140",
        duration: "60 min",
        desc: "Custom-pressure Swedish blend with warm stones and aromatherapy.",
      },
      {
        name: "Deep Tissue Therapy",
        price: "$160",
        duration: "60 min",
        desc: "Targeted relief for chronic tension, posture, and athletic recovery.",
      },
      {
        name: "Hydrafacial Glow",
        price: "$185",
        duration: "60 min",
        desc: "Cleanse, exfoliate, extract, and infuse — instant red-carpet glow.",
      },
      {
        name: "Couples Retreat",
        price: "$310",
        duration: "75 min",
        desc: "Side-by-side massage in our candlelit couples suite, plus tea service.",
      },
      {
        name: "Half-Day Ritual",
        price: "$385",
        duration: "3 hr",
        desc: "Body scrub, massage, facial, and lunch in our garden lounge.",
      },
      {
        name: "Prenatal Massage",
        price: "$150",
        duration: "60 min",
        desc: "Side-lying support pillows, certified prenatal therapist.",
      },
    ],
    staff: [
      {
        name: "Lena Park",
        role: "LMT · Spa Director",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Sage Mitchell",
        role: "Esthetician · Hydrafacial",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Ash Tanaka",
        role: "Deep Tissue & Sports",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Mira Solis",
        role: "Reiki & Energy Work",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      { day: "Today", times: ["12:00 PM", "3:00 PM", "5:30 PM"] },
      { day: "Tomorrow", times: ["10:00 AM", "1:30 PM", "4:00 PM", "6:30 PM"] },
      { day: "Saturday", times: ["9:00 AM", "11:30 AM", "2:00 PM"] },
    ],
    about:
      "We opened in 2016 with one goal — make space for genuine rest. Our therapists are LMT-certified, our products are clean and locally formulated, and our suites are designed for one thing: to remind you what calm feels like.",
    giftCardCopy:
      "Gift the deepest exhale they've had in months. E-gift cards delivered same day.",
  },
  yoga: {
    headline: "Find Your Practice. Find Your People.",
    sub: "Heated, gentle, restorative, and power flows — 60+ classes weekly. New students get two weeks unlimited for $25.",
    cta: "Book a Class",
    heroImg:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=80&fit=crop",
    services: [
      {
        name: "Vinyasa Flow",
        price: "$22 drop-in",
        duration: "60 min",
        desc: "Linked breath and movement, accessible to all levels.",
      },
      {
        name: "Hot Power Yoga",
        price: "$22 drop-in",
        duration: "75 min",
        desc: "95° heated room, athletic-paced flow, towel and mat rental included.",
      },
      {
        name: "Restorative & Yin",
        price: "$22 drop-in",
        duration: "75 min",
        desc: "Long held floor postures, bolsters and blankets, deep recovery.",
      },
      {
        name: "Sunrise Meditation",
        price: "$15 drop-in",
        duration: "30 min",
        desc: "6:30 AM guided sit, free for members and new students.",
      },
      {
        name: "Prenatal Yoga",
        price: "$22 drop-in",
        duration: "60 min",
        desc: "Modified asanas for every trimester, taught by RPYT instructors.",
      },
      {
        name: "Workshops & Trainings",
        price: "From $45",
        duration: "Varies",
        desc: "Monthly deep-dives, 200hr teacher training, weekend retreats.",
      },
    ],
    staff: [
      {
        name: "Kira Mendez",
        role: "E-RYT 500 · Studio Owner",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Theo James",
        role: "Hot Power · Inversions",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Nora Wells",
        role: "Yin · Restorative",
        img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Asha Patel",
        role: "Prenatal · Meditation",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      {
        day: "Today",
        times: [
          "6:30 AM Meditation",
          "9:00 AM Vinyasa",
          "5:30 PM Hot Power",
          "7:00 PM Restorative",
        ],
      },
      {
        day: "Tomorrow",
        times: ["6:00 AM Hot", "12:15 PM Lunch Flow", "6:00 PM Vinyasa"],
      },
      {
        day: "Saturday",
        times: ["8:30 AM Power", "10:00 AM All-Levels", "4:00 PM Yin"],
      },
    ],
    about:
      "We opened our doors in 2017 to build a Sacramento studio that feels like home — no judgment, no ego, just practice. Our teachers are RYT-certified at 200 or 500 hours, and our community spans first-timers to lifelong yogis.",
    giftCardCopy:
      "Give the gift of stillness — class packs and unlimited memberships available.",
  },
  chiro: {
    headline: "Move Better. Sleep Better. Live Better.",
    sub: "Evidence-based chiropractic care for back pain, headaches, sports injury, and long-term wellness. Most insurance accepted.",
    cta: "Book Adjustment",
    heroImg:
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1600&q=80&fit=crop",
    services: [
      {
        name: "New Patient Exam",
        price: "$75",
        duration: "60 min",
        desc: "Consultation, postural and movement assessment, X-rays if needed, first adjustment.",
      },
      {
        name: "Adjustment Visit",
        price: "$55",
        duration: "20 min",
        desc: "Hands-on or instrument-assisted manipulation tailored to your plan.",
      },
      {
        name: "Sports Recovery",
        price: "$110",
        duration: "45 min",
        desc: "Adjustment plus soft-tissue work, cupping or e-stim as needed.",
      },
      {
        name: "Pediatric Care",
        price: "$45",
        duration: "20 min",
        desc: "Gentle techniques for infants, children, and teens. ICPA-certified.",
      },
      {
        name: "Prenatal Chiro",
        price: "$65",
        duration: "30 min",
        desc: "Webster-certified care for pelvic alignment and pregnancy comfort.",
      },
      {
        name: "Care Packages",
        price: "From $399",
        duration: "Plan",
        desc: "10, 20, and 40-visit packages with up to 25% savings.",
      },
    ],
    staff: [
      {
        name: "Dr. Eric Vance",
        role: "DC, CCSP · Founder",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Dr. Naomi Ito",
        role: "DC, CACCP · Pediatric & Prenatal",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Dr. Marcus Reyes",
        role: "DC · Sports & Soft Tissue",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Sloane Park",
        role: "LMT · Therapeutic Massage",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      { day: "Today", times: ["10:15 AM", "1:45 PM", "4:30 PM"] },
      { day: "Tomorrow", times: ["8:00 AM", "11:30 AM", "3:00 PM", "5:30 PM"] },
      { day: "Saturday", times: ["9:00 AM", "10:30 AM"] },
    ],
    about:
      "Our practice has served Sacramento since 2012 with a simple promise — clear plans, real results, and zero pressure. We accept most major insurance and publish our self-pay rates so you always know what to expect.",
    giftCardCopy:
      "Wellness gift packages — perfect for the always-on-the-go person in your life.",
  },
  cleaning: {
    headline: "A Clean Home Without the Hassle",
    sub: "Background-checked teams, eco-friendly products, and a bookable price you'll see before you commit. Easy to schedule. Easy to love.",
    cta: "Book Cleaning",
    heroImg:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80&fit=crop",
    services: [
      {
        name: "Standard Clean",
        price: "From $129",
        duration: "2 hr",
        desc: "Kitchen, baths, dusting, vacuum and mop. Perfect for upkeep.",
      },
      {
        name: "Deep Clean",
        price: "From $239",
        duration: "4 hr",
        desc: "Baseboards, inside appliances, detail work — first-time visit ideal.",
      },
      {
        name: "Move-In / Move-Out",
        price: "From $329",
        duration: "5 hr",
        desc: "Empty home top-to-bottom, including inside cabinets and drawers.",
      },
      {
        name: "Recurring (Bi-Weekly)",
        price: "From $109",
        duration: "2 hr",
        desc: "Save 15% on every visit. Cancel anytime, no contracts.",
      },
      {
        name: "Airbnb Turnover",
        price: "From $99",
        duration: "90 min",
        desc: "Same-day turn for hosts. Linen change and restock add-ons available.",
      },
      {
        name: "Office Cleaning",
        price: "Custom",
        duration: "Varies",
        desc: "Nightly, weekly, or one-time commercial service.",
      },
    ],
    staff: [
      {
        name: "Rosa Aguilar",
        role: "Operations Lead",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Marcus Bell",
        role: "Team Captain · Deep Clean",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Aisha Brown",
        role: "Recurring Service Lead",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=faces",
      },
      {
        name: "Diego Santos",
        role: "Move-Out Specialist",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80&fit=crop&crop=faces",
      },
    ],
    slots: [
      { day: "Today", times: ["1:00 PM", "3:30 PM"] },
      { day: "Tomorrow", times: ["8:30 AM", "11:00 AM", "2:00 PM"] },
      { day: "Saturday", times: ["9:00 AM", "1:00 PM"] },
    ],
    about:
      "Family-owned since 2015. We screen, train, and pay our teams above market — because the people in your home should be people we'd send to ours. Bonded, insured, and proud of every five-star review.",
    giftCardCopy:
      "Gift a clean home — the gift everyone says they wanted but never asks for.",
  },
};

const fallback: Content = {
  headline: "Book in Seconds. Show Up Confident.",
  sub: "A booking experience that respects your time — with the people, the prices, and the availability all in one place.",
  cta: "Book Now",
  heroImg:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&fit=crop",
  services: [
    {
      name: "Service One",
      price: "$50",
      duration: "30 min",
      desc: "A flagship offering positioned at our most popular price point.",
    },
    {
      name: "Service Two",
      price: "$95",
      duration: "60 min",
      desc: "An expanded experience for clients who want the full treatment.",
    },
    {
      name: "Service Three",
      price: "$140",
      duration: "90 min",
      desc: "Premium tier — every detail handled, nothing rushed.",
    },
    {
      name: "Add-On",
      price: "$25",
      duration: "15 min",
      desc: "Optional enhancement that pairs with any core service.",
    },
  ],
  staff: [
    {
      name: "Team Member",
      role: "Senior Specialist",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop&crop=faces",
    },
    {
      name: "Team Member",
      role: "Lead Practitioner",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=faces",
    },
    {
      name: "Team Member",
      role: "Specialist",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=faces",
    },
    {
      name: "Team Member",
      role: "Specialist",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80&fit=crop&crop=faces",
    },
  ],
  slots: [
    { day: "Today", times: ["11:00 AM", "2:30 PM", "5:00 PM"] },
    { day: "Tomorrow", times: ["9:00 AM", "12:00 PM", "3:30 PM"] },
    { day: "Saturday", times: ["10:00 AM", "1:00 PM"] },
  ],
  about:
    "We're a local, independently owned business serving the Sacramento area. Our team is built around craft, consistency, and the belief that great service shouldn't be hard to book.",
  giftCardCopy: "Gift cards available — give the gift of a great experience.",
};

export default function BookingLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a2e",
        background: "#fafaf7",
        minHeight: "100vh",
        // expose accent as a CSS variable for use deep in the tree
        ["--accent" as string]: accent,
      }}
    >
      {/* Grain overlay — tactile texture */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.06,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "1.35rem",
            letterSpacing: "-0.02em",
            color: "#111",
          }}
        >
          {industry.name}
        </span>
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
            alignItems: "center",
          }}
        >
          {["Services", "Team", "Reviews", "Gift Cards"].map((l) => (
            <span
              key={l}
              style={{
                color: "#444",
                fontSize: "0.85rem",
                fontWeight: 500,
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
              padding: "0.55rem 1.4rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              borderRadius: 999,
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            {c.cta}
          </span>
        </div>
      </nav>

      {/* Hero with split layout — booking widget mock on the right */}
      <section
        style={{
          padding: "9rem 2rem 5rem",
          background: "linear-gradient(135deg, #fafaf7 0%, #f4ede4 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: `radial-gradient(circle at center, ${accent}33 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
          }}
          className="booking-hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                border: `1px solid ${accent}33`,
                color: accent,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.4rem 0.95rem",
                borderRadius: 999,
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: accent,
                  display: "inline-block",
                }}
              />
              {industry.vibe}
            </div>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)",
                color: "#111",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: "0 0 1.5rem",
              }}
            >
              {c.headline}
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "#4a4a55",
                margin: "0 0 2rem",
                maxWidth: 520,
              }}
            >
              {c.sub}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                style={{
                  background: accent,
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2.25rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  borderRadius: 8,
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  boxShadow: `0 12px 30px ${accent}40`,
                }}
              >
                {c.cta} →
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#111",
                  border: "1px solid rgba(0,0,0,0.18)",
                  padding: "1rem 2.25rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                View Services
              </button>
            </div>
          </div>

          {/* Booking widget mock — frosted glass card */}
          <div
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 18,
              padding: "1.75rem",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#111",
                }}
              >
                Available Times
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: accent,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                ● Live
              </span>
            </div>
            {c.slots.map((s) => (
              <div key={s.day} style={{ marginBottom: "1.1rem" }}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#666",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.day}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {s.times.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.45rem 0.8rem",
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 6,
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#111",
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <button
              style={{
                width: "100%",
                marginTop: "0.5rem",
                background: "#111",
                color: "#fff",
                border: "none",
                padding: "0.85rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: 8,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              See Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "6rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
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
              Service Menu
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
              Pick your time. Pick your treatment.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {c.services.map((s) => (
              <div
                key={s.name}
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 14,
                  padding: "1.75rem",
                  background: "#fff",
                  transition:
                    "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
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
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#111",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.name}
                  </h3>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: accent,
                    }}
                  >
                    {s.price}
                  </span>
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "0.85rem",
                  }}
                >
                  {s.duration}
                </span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
                <button
                  style={{
                    marginTop: "1.25rem",
                    background: "transparent",
                    color: accent,
                    border: `1px solid ${accent}`,
                    padding: "0.55rem 1.1rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    borderRadius: 6,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                  }}
                >
                  Book This →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip — uses industry.features */}
      <section style={{ padding: "2.5rem 2rem", background: accent }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: `repeat(${industry.features.length}, 1fr)`,
            gap: "2rem",
            color: "#fff",
          }}
          className="features-strip"
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
                lineHeight: 1.4,
              }}
            >
              <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "6rem 2rem", background: "#fafaf7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1.5rem",
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
                The Team
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
                The people who make it happen
              </h2>
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#666",
                maxWidth: 380,
              }}
            >
              Booking with a specific team member? Pick your favorite when you
              reserve.
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {c.staff.map((m) => (
              <div
                key={m.name}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#111",
                      margin: "0 0 0.3rem",
                    }}
                  >
                    {m.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: accent,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      margin: 0,
                    }}
                  >
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Gift cards split */}
      <section style={{ padding: "6rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="booking-about-grid"
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
              About Us
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.85rem, 3.4vw, 2.6rem)",
                letterSpacing: "-0.02em",
                color: "#111",
                margin: "0 0 1.25rem",
                lineHeight: 1.2,
              }}
            >
              Why people keep coming back
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#444",
                margin: 0,
              }}
            >
              {c.about}
            </p>
          </div>
          <div
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
              borderRadius: 18,
              padding: "2.5rem",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.85,
              }}
            >
              Gift Cards
            </span>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "1.65rem",
                margin: "0.75rem 0 1rem",
                lineHeight: 1.2,
                position: "relative",
              }}
            >
              {c.giftCardCopy}
            </h3>
            <button
              style={{
                background: "#fff",
                color: accent,
                border: "none",
                padding: "0.85rem 1.5rem",
                fontSize: "0.85rem",
                fontWeight: 800,
                borderRadius: 8,
                cursor: "pointer",
                letterSpacing: "0.04em",
                position: "relative",
              }}
            >
              Send a Gift Card →
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "6rem 2rem", background: "#fafaf7" }}>
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
            5-Star Reviews
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
              letterSpacing: "-0.02em",
              color: "#111",
              margin: "0 0 3rem",
              textAlign: "center",
            }}
          >
            Loved by our community
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                name: "Hannah W.",
                text: "Booked at 9pm, in the chair by 11am the next day. The whole experience felt thought-through.",
              },
              {
                name: "Daniel R.",
                text: "Easy booking, fair pricing, and they actually remembered my preferences from last time. Rare.",
              },
              {
                name: "Priya M.",
                text: "I've been a regular for two years. The team is consistent, kind, and excellent at what they do.",
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "1.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    color: accent,
                    fontSize: "1.1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  ★★★★★
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#333",
                    margin: "0 0 1rem",
                    fontStyle: "italic",
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
                  — {r.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.85rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            margin: "0 0 1rem",
          }}
        >
          Open the calendar. Pick a time.
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
            padding: "1.1rem 2.5rem",
            fontSize: "1rem",
            fontWeight: 800,
            borderRadius: 8,
            cursor: "pointer",
            letterSpacing: "0.04em",
            boxShadow: `0 14px 30px ${accent}66`,
          }}
        >
          {c.cta} →
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0a0a0e",
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
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            color: "#fff",
            fontSize: "1.15rem",
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
        @media (max-width: 880px) {
          .booking-hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .booking-about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .features-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .features-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
