import type { CatItem } from "@/data/catalog";
import BackPill from "./BackPill";

type GalleryItem = { src: string; caption: string; tag: string };
type Process = { step: string; title: string; desc: string };

type Content = {
  headline: string;
  sub: string;
  cta: string;
  heroImg: string;
  gallery: GalleryItem[];
  process: Process[];
  about: string;
  pricingNote: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=85&auto=format&fit=crop`;

const industryContent: Record<string, Content> = {
  bakery: {
    headline: "Cakes, Croissants, and the Smell of Sunday Mornings",
    sub: "Hand-laminated pastries, custom celebration cakes, and bread baked at 4 AM — every single day.",
    cta: "Order a Custom Cake",
    heroImg: u("photo-1486427944299-d1955d23e34d"),
    gallery: [
      {
        src: u("photo-1486427944299-d1955d23e34d"),
        caption: "Mocha Tier Cake",
        tag: "Custom",
      },
      {
        src: u("photo-1509440159596-0249088772ff"),
        caption: "Sourdough Boule",
        tag: "Daily",
      },
      {
        src: u("photo-1555507036-ab1f4038808a"),
        caption: "Croissant Tray",
        tag: "Morning",
      },
      {
        src: u("photo-1464195244916-405fa0a82545"),
        caption: "Wedding Cake — Linen",
        tag: "Wedding",
      },
      {
        src: u("photo-1495147466023-ac5c588e2e94"),
        caption: "Macaron Box",
        tag: "Gift",
      },
      {
        src: u("photo-1565958011703-44f9829ba187"),
        caption: "Birthday Smash",
        tag: "Custom",
      },
      {
        src: u("photo-1517433367423-c7e5b0f35086"),
        caption: "Tartines",
        tag: "Lunch",
      },
      {
        src: u("photo-1568051243851-f9b136146e97"),
        caption: "Pain au Chocolat",
        tag: "Morning",
      },
    ],
    process: [
      {
        step: "01",
        title: "Inquiry",
        desc: "Tell us your event, date, headcount, and any flavor preferences.",
      },
      {
        step: "02",
        title: "Tasting",
        desc: "Stop by for a tasting box — six flavors, you pick the winners.",
      },
      {
        step: "03",
        title: "Sketch",
        desc: "We send a hand-drawn concept and final quote within 48 hours.",
      },
      {
        step: "04",
        title: "Pickup or Delivery",
        desc: "Same-day delivery within 25 miles, white-glove setup available.",
      },
    ],
    about:
      "We've been baking from this little corner of Sacramento since 2011. Everything is made from scratch with French butter, organic flour from a Northern California mill, and the kind of patience that only sourdough demands.",
    pricingNote:
      "Custom cakes start at $185. Wedding cakes from $7/serving. Daily breads $6–$14.",
  },
  photographer: {
    headline: "Photography That Feels Like the Day Felt",
    sub: "Weddings, portraits, brand work — frame-by-frame storytelling shot on film and digital.",
    cta: "Inquire About Your Date",
    heroImg: u("photo-1502920917128-1aa500764cbd"),
    gallery: [
      {
        src: u("photo-1519741497674-611481863552"),
        caption: "Anya & Soren",
        tag: "Wedding",
      },
      {
        src: u("photo-1583939003579-730e3918a45a"),
        caption: "Editorial — Anabelle",
        tag: "Portrait",
      },
      {
        src: u("photo-1542038784456-1ea8e935640e"),
        caption: "Bear Republic Brewing",
        tag: "Brand",
      },
      {
        src: u("photo-1594736797933-d0501ba2fe65"),
        caption: "Highland Estate",
        tag: "Wedding",
      },
      {
        src: u("photo-1606216794074-735e91aa2c92"),
        caption: "Family — Hwang",
        tag: "Portrait",
      },
      {
        src: u("photo-1505373877841-8d25f7d46678"),
        caption: "Sutter & 18th",
        tag: "Editorial",
      },
      {
        src: u("photo-1532712938310-34cb3982ef74"),
        caption: "Sage & Linen",
        tag: "Branding",
      },
      {
        src: u("photo-1519225421980-715cb0215aed"),
        caption: "First Look",
        tag: "Wedding",
      },
    ],
    process: [
      {
        step: "01",
        title: "Connect",
        desc: "Quick call to talk through your vision, date, and timeline.",
      },
      {
        step: "02",
        title: "Plan",
        desc: "We design the shot list, locations, and run-of-show together.",
      },
      {
        step: "03",
        title: "Shoot",
        desc: "Day-of, we show up early, shoot generously, stay until the moment ends.",
      },
      {
        step: "04",
        title: "Deliver",
        desc: "Color-graded gallery in 4–6 weeks. Print shop opens automatically.",
      },
    ],
    about:
      "I've been shooting professionally for 11 years — 220 weddings, three Vogue features, and counting. I bring a quiet, observational style and just enough direction to make sure the moments that matter actually get captured.",
    pricingNote:
      "Weddings start at $4,800. Portraits from $650. Brand sessions from $1,800.",
  },
  landscaping: {
    headline: "Landscapes Built to Live In, Not Just Look At",
    sub: "Design, install, and maintain. From courtyard refresh to full property masterplan.",
    cta: "Request a Site Visit",
    heroImg: u("photo-1558435186-db336dd0b2bd"),
    gallery: [
      {
        src: u("photo-1558435186-db336dd0b2bd"),
        caption: "Modern Courtyard — Land Park",
        tag: "Design + Install",
      },
      {
        src: u("photo-1416879595882-3373a0480b5b"),
        caption: "Mature Tree Pruning",
        tag: "Maintenance",
      },
      {
        src: u("photo-1523348837708-15d4a09cfac2"),
        caption: "Drought-Tolerant Front",
        tag: "Design",
      },
      {
        src: u("photo-1589923188900-85dae523342b"),
        caption: "Outdoor Kitchen Build",
        tag: "Hardscape",
      },
      {
        src: u("photo-1495231916356-a86217efff12"),
        caption: "Pool Surround",
        tag: "Hardscape",
      },
      {
        src: u("photo-1500076656116-558758c991c1"),
        caption: "Mediterranean Terrace",
        tag: "Design",
      },
      {
        src: u("photo-1416822737271-6f5f99432db5"),
        caption: "Native Garden — Curtis Park",
        tag: "Design",
      },
      {
        src: u("photo-1604762524889-3e2fcc145683"),
        caption: "Lawn Restoration",
        tag: "Maintenance",
      },
    ],
    process: [
      {
        step: "01",
        title: "Walk-Through",
        desc: "Free 45-minute on-site consult — we listen, measure, photograph.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Concept boards and 3D plan within 10 business days.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Licensed crew, proper grading, real warranties on plants and hardscape.",
      },
      {
        step: "04",
        title: "Maintain",
        desc: "Optional monthly service to keep the work looking like day one.",
      },
    ],
    about:
      "Family-owned since 2002. We've designed and installed over 600 Sacramento-area landscapes — from cottage gardens to four-acre estates. Licensed, bonded, and obsessed with grading the soil right the first time.",
    pricingNote:
      "Design fees from $1,500. Install averages $35–$120/sqft. Maintenance from $185/month.",
  },
  interior: {
    headline: "Interiors That Feel Like You — Just Better",
    sub: "Full-service residential and boutique commercial design. From single rooms to ground-up new builds.",
    cta: "Schedule a Discovery Call",
    heroImg: u("photo-1618221195710-dd6b41faaea6"),
    gallery: [
      {
        src: u("photo-1618221195710-dd6b41faaea6"),
        caption: "Sunlit Living — East Sac",
        tag: "Residential",
      },
      {
        src: u("photo-1556909114-f6e7ad7d3136"),
        caption: "Editorial Bedroom",
        tag: "Master",
      },
      {
        src: u("photo-1600585154340-be6161a56a0c"),
        caption: "Quiet Kitchen",
        tag: "Kitchen",
      },
      {
        src: u("photo-1616486338812-3dadae4b4ace"),
        caption: "Studio Office Build",
        tag: "Commercial",
      },
      {
        src: u("photo-1600210492486-724fe5c67fb0"),
        caption: "Powder Room",
        tag: "Detail",
      },
      {
        src: u("photo-1631679706909-1844bbd07221"),
        caption: "Reading Nook",
        tag: "Detail",
      },
      {
        src: u("photo-1615874959474-d609969a20ed"),
        caption: "Modern Mediterranean",
        tag: "Residential",
      },
      {
        src: u("photo-1616137422495-1e9e46e2aa77"),
        caption: "Coastal Refresh",
        tag: "Residential",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Lifestyle questionnaire, walkthrough, and budget alignment.",
      },
      {
        step: "02",
        title: "Concept",
        desc: "Mood boards, materials, and a preliminary floor plan.",
      },
      {
        step: "03",
        title: "Design",
        desc: "Full specs — every fixture, fabric, and finish ready to procure.",
      },
      {
        step: "04",
        title: "Install",
        desc: "We manage trades, source product, and install to the final pillow.",
      },
    ],
    about:
      "Founded by Lila Nakashima, NCIDQ, in 2013. Our Sacramento studio specializes in livable luxury — interiors that photograph beautifully but, more importantly, work for the people who actually live in them.",
    pricingNote:
      "E-design from $950/room. Full service from $18,500. Hourly consults available.",
  },
  contractor: {
    headline: "Built Right. On Time. On Budget.",
    sub: "Custom homes, additions, full remodels — over $40M in completed projects across the Sacramento region.",
    cta: "Request a Bid",
    heroImg: u("photo-1503387762-592deb58ef4e"),
    gallery: [
      {
        src: u("photo-1503387762-592deb58ef4e"),
        caption: "Whole Home — Fair Oaks",
        tag: "Remodel",
      },
      {
        src: u("photo-1556909114-44e3e9399a2d"),
        caption: "Kitchen Reno",
        tag: "Kitchen",
      },
      {
        src: u("photo-1600596542815-ffad4c1539a9"),
        caption: "ADU Build",
        tag: "New Build",
      },
      {
        src: u("photo-1556228720-195a672e8a03"),
        caption: "Master Suite Add",
        tag: "Addition",
      },
      {
        src: u("photo-1582268611958-ebfd161ef9cf"),
        caption: "Outdoor Living",
        tag: "Patio",
      },
      {
        src: u("photo-1600210492493-0946911123ea"),
        caption: "Spa Bath",
        tag: "Bathroom",
      },
      {
        src: u("photo-1564013799919-ab600027ffc6"),
        caption: "Custom Build — Granite Bay",
        tag: "New Build",
      },
      {
        src: u("photo-1565538810643-b5bdb714032a"),
        caption: "Garage Conversion",
        tag: "ADU",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consult",
        desc: "On-site walk-through and rough cost band — free and no pressure.",
      },
      {
        step: "02",
        title: "Design-Build",
        desc: "Plans, permits, and material selections, all under one roof.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Licensed crew, weekly client updates, transparent change orders.",
      },
      {
        step: "04",
        title: "Walk-Through",
        desc: "Punch list, warranty, and a year-end check-in. We stand behind it.",
      },
    ],
    about:
      "Three generations, one family. We've been building in the Sacramento region since 1982 — fully licensed (CSLB #872140), bonded, and insured. Most of our work comes from word-of-mouth, and we'd like to keep it that way.",
    pricingNote:
      "Kitchens from $65k. Bath remodels from $32k. Whole-home from $185/sqft. Free estimates.",
  },
  nail: {
    headline: "Nails You'll Actually Want to Show Off",
    sub: "Hand-painted art, gel and dip, structured manis — by techs who care about your nail health, not just the photo.",
    cta: "Book Your Set",
    heroImg: u("photo-1604654894610-df63bc536371"),
    gallery: [
      {
        src: u("photo-1604654894610-df63bc536371"),
        caption: "Chrome French",
        tag: "Trending",
      },
      {
        src: u("photo-1610992015732-2449b76344bc"),
        caption: "Glazed Donut",
        tag: "Trending",
      },
      {
        src: u("photo-1636057076919-1eaa10d59a77"),
        caption: "Hand-Painted Florals",
        tag: "Custom Art",
      },
      {
        src: u("photo-1632345031435-8727f6897d53"),
        caption: "Almond Set — Berry",
        tag: "Color",
      },
      {
        src: u("photo-1604902396830-aca29e19b067"),
        caption: "Minimal Line Art",
        tag: "Custom Art",
      },
      {
        src: u("photo-1601612628452-9e99ced43524"),
        caption: "Glass Skin",
        tag: "Trending",
      },
      {
        src: u("photo-1631214540242-cd2dee72ac65"),
        caption: "Holiday Glitter",
        tag: "Seasonal",
      },
      {
        src: u("photo-1604654894611-6973b376cbde"),
        caption: "Soft Squoval Pink",
        tag: "Color",
      },
    ],
    process: [
      {
        step: "01",
        title: "Book",
        desc: "Pick your service, your tech, and your time — all online.",
      },
      {
        step: "02",
        title: "Consult",
        desc: "Five-minute design chat — bring inspo or let us suggest.",
      },
      {
        step: "03",
        title: "Get Set",
        desc: "Sit back. Relax. Watch your hands transform.",
      },
      {
        step: "04",
        title: "Glow",
        desc: "Aftercare cuticle oil, photo for the gallery, you walk out a 10/10.",
      },
    ],
    about:
      "We opened in 2019 with one rule: nail health first, art second. Our techs are licensed, products are 10-free, ventilation is medical grade, and we use single-use files. The art happens to be incredible too.",
    pricingNote:
      "Gel mani from $48. Full set from $65. Custom art add-on from $5/nail.",
  },
  artist: {
    headline: "Original Work. Limited Editions. Commissions Open.",
    sub: "Mixed-media paintings and limited-run prints from the studio of Mira Solano — Sacramento, California.",
    cta: "View Available Work",
    heroImg: u("photo-1579783902614-a3fb3927b6a5"),
    gallery: [
      {
        src: u("photo-1579783902614-a3fb3927b6a5"),
        caption: "Threshold Series — No. 4",
        tag: "Original",
      },
      {
        src: u("photo-1547891654-e66ed7ebb968"),
        caption: "Quiet Field",
        tag: "Original",
      },
      {
        src: u("photo-1578321272125-4e4c4c3643c5"),
        caption: "Marigold Study",
        tag: "Print",
      },
      {
        src: u("photo-1549887534-1541e9326642"),
        caption: "Untitled (Blue)",
        tag: "Original",
      },
      {
        src: u("photo-1561214115-f2f134cc4912"),
        caption: "Soft Anchor",
        tag: "Print",
      },
      {
        src: u("photo-1577083552431-6e5fd01988ec"),
        caption: "Folded Light",
        tag: "Original",
      },
      {
        src: u("photo-1579541814924-49fef17c5be5"),
        caption: "Garden Notes",
        tag: "Print",
      },
      {
        src: u("photo-1578321272215-04ee4afb6064"),
        caption: "Hush",
        tag: "Original",
      },
    ],
    process: [
      {
        step: "01",
        title: "Inquire",
        desc: "Tell me about the space, the colors, the feeling you're after.",
      },
      {
        step: "02",
        title: "Sketch",
        desc: "I send 2–3 directions with mock-ups for your space.",
      },
      {
        step: "03",
        title: "Paint",
        desc: "4–6 weeks in studio. Progress photos shared weekly.",
      },
      {
        step: "04",
        title: "Ship",
        desc: "Crated, insured, white-glove delivery in CA. Worldwide shipping available.",
      },
    ],
    about:
      "I work in mixed media — oil, plaster, charcoal, and the occasional act of restraint. My studio sits in Midtown Sacramento. My work hangs in private collections across the US and three museums.",
    pricingNote:
      "Originals from $1,800. Limited prints from $185. Commissions start at $3,400.",
  },
  event: {
    headline: "A Venue That Lets the Day Speak for Itself",
    sub: "12,000 sq ft of restored brick, oak-floored ceremony hall, and a courtyard built for golden hour.",
    cta: "Check Available Dates",
    heroImg: u("photo-1519671482749-fd09be7ccebf"),
    gallery: [
      {
        src: u("photo-1519671482749-fd09be7ccebf"),
        caption: "Reception — String Lights",
        tag: "Reception",
      },
      {
        src: u("photo-1464366400600-7168b8af9bc3"),
        caption: "Ceremony Aisle",
        tag: "Ceremony",
      },
      {
        src: u("photo-1530023367847-a683933f4172"),
        caption: "Cocktail Hour Garden",
        tag: "Cocktail",
      },
      {
        src: u("photo-1530278726156-0a2bdb04d35d"),
        caption: "Tablescape — Linen",
        tag: "Detail",
      },
      {
        src: u("photo-1519225421980-715cb0215aed"),
        caption: "First Look Courtyard",
        tag: "Portrait",
      },
      {
        src: u("photo-1465495976277-4387d4b0e4a6"),
        caption: "Bridal Suite",
        tag: "Suite",
      },
      {
        src: u("photo-1494797262163-102fae527c62"),
        caption: "Reception Open",
        tag: "Reception",
      },
      {
        src: u("photo-1481627834876-b7833e8f5570"),
        caption: "Brick & Beams",
        tag: "Architecture",
      },
    ],
    process: [
      {
        step: "01",
        title: "Tour",
        desc: "Walk the venue with our coordinator, dates and pricing in hand.",
      },
      {
        step: "02",
        title: "Hold",
        desc: "Soft hold for 7 days while you confirm vendors and budget.",
      },
      {
        step: "03",
        title: "Plan",
        desc: "Recommended vendor list, layout templates, day-of timeline.",
      },
      {
        step: "04",
        title: "Celebrate",
        desc: "On-site coordinator, full bar setup, parking attendant — handled.",
      },
    ],
    about:
      "Built in 1908 as a wholesale grocers' warehouse, restored in 2018 as one of Sacramento's most-booked event venues. We host roughly 80 weddings, 40 corporate events, and 60 private parties each year.",
    pricingNote:
      "Saturdays from $9,800. Friday/Sunday from $6,500. Full vendor list available.",
  },
  florist: {
    headline: "Flowers for the Days That Matter Most",
    sub: "Weddings, events, weekly subscriptions, and the kind of just-because bouquet that makes someone's whole week.",
    cta: "Order Arrangements",
    heroImg: u("photo-1487530811176-3780de880c2d"),
    gallery: [
      {
        src: u("photo-1487530811176-3780de880c2d"),
        caption: "Spring Garden Bouquet",
        tag: "Bouquet",
      },
      {
        src: u("photo-1561181286-d3fee7d55364"),
        caption: "Wedding Arch — Pampas",
        tag: "Wedding",
      },
      {
        src: u("photo-1525310072745-f49212b5ac6d"),
        caption: "Tablescape Centerpiece",
        tag: "Event",
      },
      {
        src: u("photo-1469259943454-aa100abba749"),
        caption: "Garden Party Mix",
        tag: "Bouquet",
      },
      {
        src: u("photo-1502977249166-824b3a8a4d6d"),
        caption: "Boutonniere Set",
        tag: "Wedding",
      },
      {
        src: u("photo-1561181286-9c0f5e3fbcaa"),
        caption: "Holiday Wreath",
        tag: "Seasonal",
      },
      {
        src: u("photo-1591886960571-74d43a9d4166"),
        caption: "Sympathy Standing Spray",
        tag: "Sympathy",
      },
      {
        src: u("photo-1606041008023-472dfb5e530f"),
        caption: "Subscription — May",
        tag: "Weekly",
      },
    ],
    process: [
      {
        step: "01",
        title: "Choose",
        desc: "Pick from gallery, subscription, or send us your inspiration.",
      },
      {
        step: "02",
        title: "Confirm",
        desc: "We confirm size, palette, delivery details and pricing.",
      },
      {
        step: "03",
        title: "Design",
        desc: "Each arrangement is hand-built the morning of delivery.",
      },
      {
        step: "04",
        title: "Deliver",
        desc: "Same-day local delivery or in-store pickup. Hand-tied with care.",
      },
    ],
    about:
      "Founded in 2014 by florist Iman Solis. We source 80% locally — within 100 miles when seasonally possible — and we've designed flowers for over 400 Sacramento weddings.",
    pricingNote:
      "Bouquets from $65. Wedding packages from $1,800. Weekly subscriptions from $45/week.",
  },
  catering: {
    headline: "Beautiful Food. Effortless Events.",
    sub: "Drop-off catering, full-service events, weekly meal programs — locally sourced, beautifully plated.",
    cta: "Get a Custom Menu",
    heroImg: u("photo-1414235077428-338989a2e8c0"),
    gallery: [
      {
        src: u("photo-1414235077428-338989a2e8c0"),
        caption: "Plated Dinner — Wedding",
        tag: "Wedding",
      },
      {
        src: u("photo-1555244162-803834f70033"),
        caption: "Grazing Table",
        tag: "Cocktail",
      },
      {
        src: u("photo-1565299624946-b28f40a0ae38"),
        caption: "Brunch Spread",
        tag: "Brunch",
      },
      {
        src: u("photo-1551782450-a2132b4ba21d"),
        caption: "Charcuterie Board",
        tag: "Appetizer",
      },
      {
        src: u("photo-1559847844-5315695dadae"),
        caption: "Plated Course",
        tag: "Plated",
      },
      {
        src: u("photo-1606923829579-0cb981a83e2e"),
        caption: "Buffet Display",
        tag: "Buffet",
      },
      {
        src: u("photo-1432139509613-5c4255815697"),
        caption: "Hors d'oeuvres",
        tag: "Cocktail",
      },
      {
        src: u("photo-1567620905732-2d1ec7ab7445"),
        caption: "Dessert Station",
        tag: "Dessert",
      },
    ],
    process: [
      {
        step: "01",
        title: "Inquire",
        desc: "Share your event date, headcount, and any dietary needs.",
      },
      {
        step: "02",
        title: "Menu",
        desc: "Custom proposal with full pricing within 3 business days.",
      },
      {
        step: "03",
        title: "Tasting",
        desc: "Free tasting for events of 50+ guests. Refine to taste.",
      },
      {
        step: "04",
        title: "Execute",
        desc: "Our chefs handle setup, service, and cleanup. You enjoy your event.",
      },
    ],
    about:
      "Founded by Chef Marcus Vega in 2015. James Beard semifinalist twice, with a kitchen that serves over 320 events per year — from intimate dinners to 800-person galas.",
    pricingNote:
      "Drop-off from $18/person. Full-service from $48/person. Bar packages from $14/person.",
  },
};

const fallback: Content = {
  headline: "Work Worth Showing. Stories Worth Telling.",
  sub: "A curated portfolio of recent work — every project a different challenge, every result a happy client.",
  cta: "Inquire About Your Project",
  heroImg: u("photo-1497366216548-37526070297c"),
  gallery: [
    {
      src: u("photo-1497366216548-37526070297c"),
      caption: "Project One",
      tag: "Recent",
    },
    {
      src: u("photo-1497366811353-6870744d04b2"),
      caption: "Project Two",
      tag: "Recent",
    },
    {
      src: u("photo-1505873242700-f289a29e1e0f"),
      caption: "Project Three",
      tag: "Featured",
    },
    {
      src: u("photo-1486406146926-c627a92ad1ab"),
      caption: "Project Four",
      tag: "Recent",
    },
    {
      src: u("photo-1493663284031-b7e3aefcae8e"),
      caption: "Project Five",
      tag: "Recent",
    },
    {
      src: u("photo-1497366754035-f200968a6e72"),
      caption: "Project Six",
      tag: "Featured",
    },
    {
      src: u("photo-1505691938895-1758d7feb511"),
      caption: "Project Seven",
      tag: "Recent",
    },
    {
      src: u("photo-1497366858526-0766cadbe8fa"),
      caption: "Project Eight",
      tag: "Recent",
    },
  ],
  process: [
    {
      step: "01",
      title: "Connect",
      desc: "Brief intake call to understand goals, scope, and timeline.",
    },
    {
      step: "02",
      title: "Design",
      desc: "We build a creative direction and detailed proposal.",
    },
    {
      step: "03",
      title: "Execute",
      desc: "Hands-on production with milestone check-ins along the way.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Final handoff with all assets, plus post-launch support.",
    },
  ],
  about:
    "An independent Sacramento-based studio with a portfolio that spans 200+ completed projects over the last decade. We work with clients who value craft and care.",
  pricingNote:
    "Project packages from $2,500. Custom engagements quoted on inquiry.",
};

export default function GalleryLayout({ industry }: { industry: CatItem }) {
  const c = industryContent[industry.id] ?? fallback;
  const accent = industry.accent;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#111",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Custom cursor — simple dot follow (CSS-only via :hover scaling on links) */}
      {/* Grain overlay */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.05,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
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
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "1.5rem",
            letterSpacing: "-0.01em",
            color: "#111",
          }}
        >
          {industry.name}
        </span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Portfolio", "Process", "About", "Inquire"].map((l) => (
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
          <span
            style={{
              border: `1.5px solid ${accent}`,
              color: accent,
              padding: "0.55rem 1.3rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {c.cta}
          </span>
        </div>
      </nav>

      {/* Hero — editorial */}
      <section
        style={{
          padding: "9rem 2rem 4rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="gallery-hero-grid"
          >
            <div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: "1.5rem",
                  display: "block",
                }}
              >
                {industry.vibe} · Sacramento
              </span>
              <h1
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
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
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "#444",
                  margin: "0 0 2.25rem",
                  maxWidth: 520,
                }}
              >
                {c.sub}
              </p>
              <button
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  padding: "1.05rem 2.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {c.cta} →
              </button>
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
              <img
                src={c.heroImg}
                alt={industry.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Featured Work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features pill row */}
      <section
        style={{
          padding: "1.5rem 2rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {industry.features.map((f) => (
            <span
              key={f}
              style={{
                fontSize: "0.78rem",
                color: "#333",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: accent, fontSize: "1rem" }}>◆</span>
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Masonry-style portfolio */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
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
                Portfolio
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
                  letterSpacing: "-0.02em",
                  color: "#111",
                  margin: 0,
                }}
              >
                Selected Work
              </h2>
            </div>
            <span
              style={{
                fontSize: "0.78rem",
                color: "#888",
                letterSpacing: "0.08em",
              }}
            >
              {c.gallery.length} pieces shown · view full archive
            </span>
          </div>

          <div
            style={{
              columnCount: 3,
              columnGap: "1rem",
            }}
            className="masonry"
          >
            {c.gallery.map((g, idx) => (
              <figure
                key={g.src}
                style={{
                  margin: "0 0 1rem",
                  breakInside: "avoid",
                  position: "relative",
                  cursor: "pointer",
                  // staggered aspect ratios for masonry feel
                  aspectRatio:
                    idx % 4 === 0
                      ? "3/4"
                      : idx % 3 === 0
                        ? "4/5"
                        : idx % 2 === 0
                          ? "1/1"
                          : "4/3",
                  overflow: "hidden",
                }}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1rem",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>
                    {g.caption}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: accent,
                      padding: "0.25rem 0.55rem",
                      fontWeight: 700,
                    }}
                  >
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0a0a0e",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 4rem",
              textAlign: "center",
            }}
          >
            From inquiry to delivery
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {c.process.map((p) => (
              <div
                key={p.step}
                style={{
                  borderTop: `1px solid ${accent}`,
                  paddingTop: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "2.5rem",
                    color: accent,
                    fontWeight: 400,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.step}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#fff",
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "6rem 2rem" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
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
            About
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
              letterSpacing: "-0.02em",
              color: "#111",
              margin: "0 0 1.5rem",
              lineHeight: 1.2,
            }}
          >
            The studio behind the work
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.85,
              color: "#444",
              margin: "0 0 2rem",
            }}
          >
            {c.about}
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.78rem",
              color: "#666",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            {c.pricingNote}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          background: accent,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(1.85rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            margin: "0 0 1rem",
          }}
        >
          Let's make something good together.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.05rem",
            margin: "0 0 2rem",
          }}
        >
          {industry.tag}
        </p>
        <button
          style={{
            background: "#fff",
            color: accent,
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
            fontStyle: "italic",
            color: "#fff",
            fontSize: "1.25rem",
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
        .masonry figure:hover img { transform: scale(1.04); }
        @media (max-width: 1024px) { .masonry { column-count: 2; } }
        @media (max-width: 600px) {
          .masonry { column-count: 1; }
          .gallery-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
