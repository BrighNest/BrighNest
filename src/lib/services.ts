import type { IconName } from "@/components/ui/Icon";

/**
 * All five service pages are one <ServicePage> component parameterized by
 * this data. Slugs map to clean SEO URLs under /services/<url>.
 * Content lifted verbatim from the design prototype's DATA object.
 */

export type ServiceSlug =
  | "residential"
  | "commercial"
  | "postconstruction"
  | "windows"
  | "deep";

export type ProcessStep = { n: string; title: string; desc: string };
export type Benefit = { icon: IconName; title: string; desc: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: ServiceSlug;
  /** clean URL segment under /services/ */
  url: string;
  /** icon key for the shared line-icon set */
  icon: IconName;
  /** header/footer dropdown title */
  title: string;
  /** short title for homepage service tiles */
  tileTitle: string;
  /** one-line dropdown description */
  short: string;
  /** one-line description for homepage tiles */
  tileDesc: string;
  /** page eyebrow / service name */
  eyebrow: string;
  /** page H1 (keyword-targeted) */
  h1: string;
  /** hero subhead */
  heroSub: string;
  /** descriptive alt text for the hero photo (what the photo shows, not keywords) */
  heroAlt: string;
  /** ~60-word SEO intro paragraph */
  intro: string;
  /** ~10-item "What's included" checklist */
  included: string[];
  process: ProcessStep[];
  benefits: Benefit[];
  faq: Faq[];
  /** slugs of related services (for the cross-link block) */
  related: ServiceSlug[];
  /** <title> / meta description for SEO */
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Record<ServiceSlug, Service> = {
  residential: {
    slug: "residential",
    url: "residential-cleaning",
    icon: "home",
    title: "Residential Cleaning",
    tileTitle: "Residential",
    short: "Homes, condos & apartments kept pristine.",
    tileDesc: "Homes, condos & apartments, effortlessly pristine.",
    eyebrow: "Residential Cleaning",
    h1: "House & Apartment Cleaning in Levittown, PA",
    heroSub:
      "Trusted home cleaning across Bucks County, Greater Philadelphia & nearby NJ — recurring, deep, or move-out. Vetted teams, eco-friendly products, and flat-rate pricing.",
    heroAlt: "Sunlit open kitchen and dining room with gleaming hardwood floors after a home clean",
    intro:
      "From Levittown split-levels to Newtown family homes, BrighNest keeps Bucks County & nearby New Jersey households effortlessly clean. Our residential cleaning service is fully customizable — book weekly, bi-weekly, or monthly upkeep, a one-time deep clean, or a move-in / move-out reset. Every visit follows a detailed, room-by-room checklist, so you come home to a space that simply feels lighter.",
    included: [
      "All rooms dusted & cleaned",
      "Kitchen — countertops, sink & stovetop",
      "Appliance exteriors & microwave interior",
      "Bathrooms — toilet, sink, shower & tub",
      "Floors vacuumed & mopped",
      "Making beds & wiping windowsills",
      "Light switches, door handles & high-touch spots",
      "Light baseboard dusting (standard reach)",
      "Mirrors & glass surfaces",
      "Trash removal & liner replacement",
    ],
    process: [
      { n: "1", title: "Request a quote", desc: "Tell us about your home in 60 seconds. Flat-rate pricing within 24 hours." },
      { n: "2", title: "Choose your plan", desc: "Weekly, bi-weekly, monthly, or one-time — you pick the rhythm." },
      { n: "3", title: "We clean, room by room", desc: "A dedicated, vetted team follows a detailed checklist every visit." },
      { n: "4", title: "Relax at home", desc: "Come home to a fresh, spotless space after every visit." },
    ],
    benefits: [
      { icon: "shield", title: "Vetted & insured teams", desc: "Every cleaner is background-checked, trained, and fully insured before their first visit." },
      { icon: "leaf", title: "Eco-friendly & pet-safe", desc: "Non-toxic, biodegradable products that are safe for children and pets." },
      { icon: "clock", title: "Flexible scheduling", desc: "Weekly, bi-weekly, monthly, or one-time — reschedule easily with 24 hours’ notice." },
    ],
    faq: [
      { q: "How much does a home cleaning cost?", a: "Pricing depends on your home’s size, condition, and cleaning frequency. You’ll get transparent, flat-rate pricing after a quick quote — no hidden fees." },
      { q: "How often should I book?", a: "Most clients choose weekly or bi-weekly upkeep. For a first visit or after a busy stretch, we recommend starting with a deep clean, then switching to recurring service." },
      { q: "Are your products safe for kids and pets?", a: "Yes. Our standard kit is non-toxic and biodegradable. Prefer fragrance-free or a specific brand? Just note it on your booking." },
      { q: "Do I need to be home?", a: "Not at all. Many clients provide a lockbox code or entry instructions. Our vetted, insured teams follow strict key-handling protocols." },
      { q: "What's included in a move-in / move-out clean?", a: "The base visit covers all rooms dusted and cleaned, kitchen surfaces and countertops, bathroom cleaning, floors vacuumed and mopped, light baseboard dusting, mirrors and glass, and trash removal. Inside cabinets, oven, and fridge are available as add-ons — worth adding before a move-in so you can unpack dishes and food into a truly clean space." },
      { q: "Can I add extras to my visit?", a: "Yes — inside cabinets, inside oven, inside fridge, full baseboard washing, and interior windows are available as add-ons on any visit. Add-on pricing is confirmed with your quote before work begins — just ask when you book." },
      { q: "Can I reschedule or cancel?", a: "Yes — reschedule anytime with 24 hours’ notice at no charge." },
    ],
    related: ["deep", "windows", "commercial"],
    metaTitle: "House Cleaning in Levittown, PA | Residential | BrighNest",
    metaDescription:
      "Trusted residential cleaning in Levittown, Bucks County & nearby NJ. Recurring, deep & move-out cleans, eco-friendly & insured. Get a free quote today.",
  },

  commercial: {
    slug: "commercial",
    url: "commercial-cleaning",
    icon: "office",
    title: "Commercial Cleaning",
    tileTitle: "Commercial",
    short: "Offices & businesses, executive standard.",
    tileDesc: "Offices & suites, executive standard.",
    eyebrow: "Commercial Cleaning",
    h1: "Office & Commercial Cleaning in Levittown, PA",
    heroSub:
      "Reliable, discreet janitorial and office cleaning for Bucks County & Trenton-area businesses — after-hours or on schedule, cleaned to an executive standard.",
    heroAlt: "Bright modern office with glass partitions and tidy workstations after a commercial clean",
    intro:
      "Keep your workplace polished and professional with BrighNest commercial cleaning. We service offices, boutiques, medical suites, and retail spaces across Bucks County, Greater Philadelphia & nearby NJ, working around your hours so business never stops. Expect consistent teams, checklist-driven quality, and flexible contracts scaled precisely to your space.",
    included: [
      "Reception & common areas",
      "Workstations & desk surfaces",
      "Conference & break rooms",
      "Restroom sanitizing & restocking",
      "Kitchen & appliance exteriors",
      "Floors — vacuum, mop & buff",
      "Glass doors & partitions",
      "Trash & recycling removal",
      "High-touch point disinfection",
      "Entryways & lobbies",
    ],
    process: [
      { n: "1", title: "Free walk-through", desc: "We assess your space and provide a clear, itemized quote." },
      { n: "2", title: "Custom plan", desc: "A cleaning scope and schedule built around your business hours." },
      { n: "3", title: "Scheduled service", desc: "Consistent, dedicated crews — after-hours or during the day." },
      { n: "4", title: "Ongoing quality checks", desc: "Regular inspections keep standards high, visit after visit." },
    ],
    benefits: [
      { icon: "clock", title: "After-hours & flexible", desc: "We work nights, weekends, or your schedule — never disrupting your team." },
      { icon: "shield", title: "Bonded & insured", desc: "Fully bonded, insured, and background-checked staff you can trust on-site." },
      { icon: "star", title: "Consistent teams", desc: "The same dedicated crew learns your space for reliable, repeatable quality." },
    ],
    faq: [
      { q: "Do I need a long-term contract?", a: "No. We offer flexible recurring plans and one-time cleans. Scale up or down as your needs change." },
      { q: "Can you clean after business hours?", a: "Absolutely. Most of our commercial clients are serviced evenings or early mornings so operations are never interrupted." },
      { q: "Do you bring your own supplies?", a: "Yes — we supply all professional-grade equipment and products. We can also match your preferred brands on request." },
      { q: "Are you insured and bonded?", a: "Fully. BrighNest is licensed, insured, and bonded, and every team member is background-checked." },
      { q: "What types of businesses do you serve?", a: "Offices, retail, boutiques, medical and dental suites, salons, and professional spaces across Bucks County, Greater Philadelphia & nearby NJ." },
    ],
    related: ["postconstruction", "windows", "deep"],
    metaTitle: "Office & Commercial Cleaning in Levittown, PA | BrighNest",
    metaDescription:
      "Discreet commercial & office cleaning across Bucks County, Greater Philadelphia & nearby NJ. After-hours, bonded & insured. Get a free walk-through quote.",
  },

  postconstruction: {
    slug: "postconstruction",
    url: "post-construction-cleaning",
    icon: "build",
    title: "Post-Construction Cleaning",
    tileTitle: "Post-Construction",
    short: "Fine-dust removal after builds & remodels.",
    tileDesc: "Fine-dust cleanup after remodels.",
    eyebrow: "Post-Construction Cleaning",
    h1: "Post-Construction & Renovation Cleaning in Levittown, PA",
    heroSub:
      "Fine-dust removal and detail cleaning after builds and remodels — so your new space is move-in ready and truly spotless.",
    heroAlt: "Newly renovated home interior with fresh white walls and dust-free hardwood floors",
    intro:
      "Construction and remodeling leave behind fine drywall dust that ordinary cleaning simply can’t handle. BrighNest specializes in post-construction cleanup across Bucks County, Greater Philadelphia & nearby NJ — from a single renovated kitchen to an entire property. We clear debris, dust every surface top to bottom, and hand-detail the finish so your space is polished and move-in ready.",
    included: [
      "Removal of construction debris & dust",
      "Wiping walls, ceilings & fixtures",
      "Detailed cabinet & drawer interiors",
      "Sticker, paint & residue removal",
      "Floor scrubbing & polishing",
      "Vents, baseboards & trim detailing",
      "Light fixtures & switch plates",
      "Restroom & kitchen deep clean",
      "Interior windows, glass & mirrors",
      "Final white-glove inspection",
    ],
    process: [
      { n: "1", title: "Site assessment", desc: "We walk the space, gauge dust load, and scope the job precisely." },
      { n: "2", title: "Debris & rough clean", desc: "Leftover materials and heavy debris are cleared out first." },
      { n: "3", title: "Fine-dust detail pass", desc: "Every surface, top to bottom, wiped and detailed for a dust-free finish." },
      { n: "4", title: "Final inspection", desc: "A white-glove check ensures the space is truly move-in ready." },
    ],
    benefits: [
      { icon: "tools", title: "Specialized equipment", desc: "HEPA vacuums and fine-dust tools that ordinary cleaning can’t match." },
      { icon: "calendar", title: "Contractor-friendly", desc: "We coordinate with your builder’s timeline and phase the work as needed." },
      { icon: "sparkle", title: "Move-in-ready result", desc: "A polished, dust-free finish that shows off the work you just paid for." },
    ],
    faq: [
      { q: "When should post-construction cleaning happen?", a: "Ideally after the final trades finish and debris is removed. We can also do a rough clean mid-project and a final detail pass at the end." },
      { q: "Is one visit enough?", a: "Fine dust settles for days, so many projects benefit from an initial pass plus a follow-up. We’ll recommend the right approach after assessing the site." },
      { q: "Do you remove construction debris?", a: "We clear leftover dust, packaging, and light debris. Large material haul-off can be arranged in advance." },
      { q: "Can you work around our contractor’s schedule?", a: "Yes — we regularly coordinate with builders and GCs to fit cleaning into the construction timeline." },
      { q: "How is pricing determined?", a: "Post-construction pricing is based on square footage, dust load, and finish level. You’ll get a clear quote after a quick assessment." },
    ],
    related: ["deep", "windows", "residential"],
    metaTitle: "Post-Construction Cleaning in Levittown, PA | BrighNest",
    metaDescription:
      "Fine-dust post-construction & renovation cleanup in Bucks County, Greater Philadelphia & nearby NJ. HEPA tools, white-glove finish. Get a free quote.",
  },

  windows: {
    slug: "windows",
    url: "window-cleaning",
    icon: "window",
    title: "Window Cleaning",
    tileTitle: "Window Cleaning",
    short: "Streak-free glass, inside & out.",
    tileDesc: "Streak-free glass, inside & out.",
    eyebrow: "Window Cleaning",
    h1: "Streak-Free Window Cleaning in Levittown, PA",
    heroSub:
      "Crystal-clear interior and exterior windows for homes and businesses — no streaks, no spots, just more light.",
    heroAlt: "Wall of streak-free windows letting sunlight into a clean living room",
    intro:
      "Pollen in spring, dust in summer, and road grime through winter are hard on glass. BrighNest brings professional window cleaning to homes and businesses across Bucks County, Greater Philadelphia & nearby NJ, restoring clarity inside and out. We hand-detail frames, sills, and tracks — not just the glass — so every window looks genuinely finished.",
    included: [
      "Interior glass, streak-free",
      "Exterior glass, ground level",
      "Window frames & sills",
      "Tracks & channels detailed",
      "Screens dusted & wiped",
      "Glass doors & partitions",
      "Sliding-door glass",
      "Mirrors & interior glass surfaces",
      "Hard-water & mineral spot removal",
      "Final clarity check",
    ],
    process: [
      { n: "1", title: "Quick quote", desc: "Tell us your window count and access — we send flat-rate pricing." },
      { n: "2", title: "Schedule your visit", desc: "Pick a time that works; we bring all the gear." },
      { n: "3", title: "Detailed glass service", desc: "Glass, frames, sills, and tracks — hand-cleaned to a spotless finish." },
      { n: "4", title: "Sparkle inspection", desc: "We check every pane for streaks and spots before we leave." },
    ],
    benefits: [
      { icon: "sparkle", title: "Streak & spot-free", desc: "Professional tools and technique for glass that disappears — no film, no streaks." },
      { icon: "window", title: "Frames & tracks too", desc: "We detail sills, frames, and tracks, not just the glass, for a finished look." },
      { icon: "office", title: "Homes & storefronts", desc: "From condos to retail storefronts, we handle residential and commercial glass." },
    ],
    faq: [
      { q: "Do you clean second-story or high windows?", a: "We handle most ground-accessible and second-story windows with professional equipment. For high-rise or hard-access glass, we’ll assess and advise during the quote." },
      { q: "How often should windows be cleaned?", a: "In our area, most homes benefit from cleaning every 3–6 months — a spring clean after pollen season and a fall clean before the holidays keep glass clear year-round." },
      { q: "What about hard-water or mineral spots?", a: "We include spot treatment for common hard-water and mineral buildup. Severe mineral staining may need an added restoration pass." },
      { q: "Are screens included?", a: "Yes — screens are dusted and wiped as part of the service." },
      { q: "Do you serve businesses too?", a: "Absolutely. We clean storefronts, offices, and commercial glass on one-time or recurring schedules." },
    ],
    related: ["postconstruction", "commercial", "residential"],
    metaTitle: "Streak-Free Window Cleaning in Levittown, PA | BrighNest",
    metaDescription:
      "Interior & exterior window cleaning across Bucks County, Greater Philadelphia & nearby NJ. Streak-free glass, frames & tracks detailed. Get a free quote.",
  },

  deep: {
    slug: "deep",
    url: "deep-cleaning",
    icon: "deep",
    title: "Deep Cleaning",
    tileTitle: "Deep Cleaning",
    short: "Top-to-bottom reset, every corner.",
    tileDesc: "Top-to-bottom reset, every corner.",
    eyebrow: "Deep Cleaning",
    h1: "Deep Cleaning Services in Levittown, PA",
    heroSub:
      "A top-to-bottom reset for your home — every room cleaned with extra time and attention to detail.",
    heroAlt: "Marble bathroom and bedroom polished to a shine after a top-to-bottom deep clean",
    intro:
      "A deep clean goes far beyond routine tidying. BrighNest’s deep cleaning service in Bucks County & nearby NJ takes extra time in every room — thorough dusting throughout, detailed kitchen surfaces, bathroom deep cleaning, plus doors, light switches, and reachable vents. It’s the perfect reset before guests arrive, after a busy season, or to kick off recurring service on the right foot.",
    included: [
      "All rooms thoroughly dusted & cleaned",
      "Kitchen surfaces & countertops, detailed",
      "Bathroom deep cleaning — toilet, sink, shower & tub",
      "Exterior of kitchen appliances & cabinets",
      "Doors, light switches & reachable vents",
      "Light baseboard dusting",
      "Floors vacuumed & mopped",
      "Mirrors & glass surfaces",
      "Trash removal",
    ],
    process: [
      { n: "1", title: "Request a quote", desc: "Share your home’s size and condition for flat-rate pricing." },
      { n: "2", title: "We build your checklist", desc: "A tailored deep-clean scope covering the spots routine cleaning skips." },
      { n: "3", title: "Top-to-bottom clean", desc: "A dedicated team works high to low, corner to corner." },
      { n: "4", title: "Final walkthrough", desc: "We review the result with you, corner to corner." },
    ],
    benefits: [
      { icon: "sparkle", title: "Tackles built-up grime", desc: "Targets grease, soap scum, and dust that everyday cleaning leaves behind." },
      { icon: "calendar", title: "Perfect reset", desc: "Ideal before guests, after a move, or to launch recurring service." },
      { icon: "shield", title: "Vetted & insured teams", desc: "Background-checked, trained professionals treat your home with care." },
    ],
    faq: [
      { q: "How long does a deep clean take?", a: "Most homes take 3–6 hours depending on size and condition. We’ll give you an estimate with your quote." },
      { q: "How often do I need one?", a: "A deep clean once or twice a year keeps a home in top shape — more often for high-traffic households or before big occasions." },
      { q: "How is it different from a standard clean?", a: "A deep clean covers the same areas as a standard visit with significantly more time and detail — thorough dusting throughout, detailed kitchen surfaces, bathroom deep cleaning, plus doors, light switches, reachable vents, and light baseboard dusting." },
      { q: "Are inside appliances and cabinets included?", a: "Inside oven, fridge, and cabinet cleaning are add-on services, along with full baseboard washing and interior windows. Deep cleaning focuses on detail throughout the home, and these time-intensive areas are quoted separately — pricing is confirmed with your quote before work begins." },
      { q: "Should I book a deep clean before recurring service?", a: "We recommend it — starting with a deep clean brings the home to a baseline that recurring visits then maintain easily." },
      { q: "How much does it cost?", a: "Deep cleans are priced by home size and condition. You’ll receive transparent, flat-rate pricing after a quick quote." },
    ],
    related: ["residential", "postconstruction", "windows"],
    metaTitle: "Deep Cleaning Services in Levittown, PA | BrighNest",
    metaDescription:
      "Top-to-bottom deep cleaning in Bucks County, Greater Philadelphia & nearby NJ. Detailed kitchens, bathrooms, baseboards & vents. Get a free quote.",
  },
};

/** Ordered list used for nav dropdown, footer, and homepage tiles. */
export const SERVICE_ORDER: ServiceSlug[] = [
  "residential",
  "commercial",
  "postconstruction",
  "windows",
  "deep",
];

export const SERVICE_LIST: Service[] = SERVICE_ORDER.map((s) => SERVICES[s]);

export function servicePath(slug: ServiceSlug): string {
  return `/services/${SERVICES[slug].url}`;
}

export function getServiceByUrl(url: string): Service | undefined {
  return SERVICE_LIST.find((s) => s.url === url);
}
