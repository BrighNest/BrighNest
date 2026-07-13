const INSTAGRAM_URL = "https://www.instagram.com/brighnestcleaningllc/";

export const BUSINESS = {
  name: "BrighNest Cleaning",
  /** Registered legal entity — used in the privacy policy. */
  legalName: "BrighNest Cleaning LLC",
  tagline: "Where bright meets home.",
  /** US-local display format shown across the site. */
  phoneDisplay: "(215) 436-9355",
  /** International format for tel: links and JSON-LD. */
  phoneIntl: "+1-215-436-9355",
  phoneHref: "tel:+12154369355",
  email: "brighnestcleaning2025@gmail.com",
  emailHref: "mailto:brighnestcleaning2025@gmail.com",
  hours: "Mon–Sat · 8am–7pm ET",
  /**
   * Service-area business — no storefront. We list the base city/region
   * (no street address) so JSON-LD advertises a service area rather than a
   * visitable location, which is the correct pattern for mobile cleaners.
   */
  address: {
    city: "Levittown",
    region: "PA",
    postalCode: "19056",
    country: "US",
  },
  areaServed: [
    "Bucks County, PA",
    "Philadelphia County, PA",
    "Montgomery County, PA",
    "Mercer County, NJ",
    "Burlington County, NJ",
  ],
  instagram: INSTAGRAM_URL,
  instagramHandle: "@brighnestcleaningllc",
  social: [INSTAGRAM_URL] as string[],
} as const;

/** Public site URL — used for canonical / OG / sitemap / JSON-LD. */
export const SITE_URL = "https://www.brighnestcleaning.com";

/**
 * Social share image (Open Graph / Twitter), 1200×630. Referenced from every
 * page's `openGraph.images` — Next.js replaces nested metadata objects rather
 * than merging them, so the root layout's copy alone wouldn't propagate.
 */
export const OG_IMAGE = {
  url: "/assets/og-image.png",
  width: 1200,
  height: 630,
  alt: "BrighNest Cleaning — residential, commercial & specialty cleaning in Levittown, PA",
};

/** Towns within ~30 miles of Levittown, PA that we serve — PA towns bare,
 *  NJ towns (Trenton and its largest neighbors) carry the state suffix. */
export const NEIGHBORHOODS = [
  "Levittown",
  "Bristol",
  "Fairless Hills",
  "Langhorne",
  "Newtown",
  "Yardley",
  "Morrisville",
  "Bensalem",
  "Feasterville",
  "Trevose",
  "Doylestown",
  "Philadelphia",
  "Trenton, NJ",
  "Hamilton, NJ",
  "Ewing, NJ",
  "Princeton, NJ",
  "Bordentown, NJ",
  "Burlington, NJ",
];
