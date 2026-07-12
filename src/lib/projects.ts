/**
 * Client before/after projects shown on the landing "Our work" grid and the
 * full `/gallery` page.
 *
 * Photos live under `public/assets/projects/` as `<id>-before.jpg` /
 * `<id>-after.jpg`. Most pairs are 960×1280 (3:4) phone shots; the reveal
 * frame crops them with `object-fit: cover`, so pairs don't need to match
 * exactly — but keep the subject centered in both shots so the wipe lines up.
 */

export type Project = {
  id: string;
  /** Short human label, e.g. "Kitchen deep clean". */
  label: string;
  /** Optional town, shown as a subtle caption. */
  city?: string;
  /** Grouping tag (room/type). Reserved for future filtering. */
  category: string;
  /** Path to the "before" photo ("" = placeholder). */
  before: string;
  /** Path to the "after" photo ("" = placeholder). */
  after: string;
  /**
   * CSS object-position for the before/after photo (default "50% 50%").
   * Use to keep the meaningful part of a shot visible after the cover crop —
   * e.g. "50% 80%" pulls the view down so the bottom of the frame shows.
   */
  beforePos?: string;
  afterPos?: string;
  /** When true, shown in the 6-up landing grid. Keep exactly 6 featured. */
  featured?: boolean;
};

const project = (
  id: string,
  label: string,
  category: string,
  featured?: boolean,
  extra?: Partial<Project>,
): Project => ({
  id,
  label,
  category,
  before: `/assets/projects/${id}-before.jpg`,
  after: `/assets/projects/${id}-after.jpg`,
  featured,
  ...extra,
});

/** Featured six lead the list — strongest transformations, kitchen/bath mix. */
export const PROJECTS: Project[] = [
  project("stovetop", "Stovetop degrease", "Kitchen", true),
  // Before shot sits lower so the grimy sink bottom stays in frame.
  project("kitchen-sink", "Kitchen sink deep clean", "Kitchen", true, { beforePos: "50% 78%" }),
  project("shower-grout", "Shower tile & grout", "Bathroom", true),
  // Before shot rides higher so the counter clutter reads; drop it a bit.
  project("vanity-sink", "Vanity & sink detail", "Bathroom", true, { beforePos: "50% 0%" }),
  project("tub-faucet", "Tub fixture descale", "Bathroom", true, { afterPos: "50% 30%" }),
  project("dishwasher", "Stainless steel polish", "Kitchen", true, { beforePos: "50% 100%" }),
  project("shower-valve", "Shower fixture shine", "Bathroom"),
  project("porcelain-sink", "Porcelain sink polish", "Bathroom"),
  project("vanity-faucet", "Vanity faucet refresh", "Bathroom", false, { beforePos: "50% 100%" }),
  project("black-faucet", "Matte fixture detail", "Bathroom"),
  project("microwave", "Microwave interior", "Kitchen"),
];

export const FEATURED: Project[] = PROJECTS.filter((p) => p.featured);

/**
 * Ordinary (single) photos from real visits. Lower-quality candid shots, shown
 * only in a carousel on the /gallery page — never mixed into the before/after
 * grid. Empty `src` falls back to a labeled placeholder.
 */
export type GalleryPhoto = {
  src: string;
  alt: string;
};

export const PHOTOS: GalleryPhoto[] = [
  { src: "/assets/photos/visit-01.jpg", alt: "Living room with leather sofa, freshly vacuumed and dusted" },
  { src: "/assets/photos/visit-02.jpg", alt: "White kitchen cabinets and counters wiped down after a deep clean" },
  { src: "/assets/photos/visit-03.jpg", alt: "Living room with fireplace and gleaming hardwood floors" },
  { src: "/assets/photos/visit-04.jpg", alt: "Kitchen countertops and gas stovetop cleaned and polished" },
  { src: "/assets/photos/visit-05.jpg", alt: "Wood kitchen with island, counters cleared and shining" },
  { src: "/assets/photos/visit-06.jpg", alt: "Bedroom with fresh linens and polished hardwood floor" },
  { src: "/assets/photos/visit-07.jpg", alt: "Sage-green kitchen with stainless appliances after cleaning" },
  { src: "/assets/photos/visit-08.jpg", alt: "Bathroom double vanity and shower cleaned to a shine" },
  { src: "/assets/photos/visit-09.jpg", alt: "Open kitchen and dining area after a whole-home clean" },
  { src: "/assets/photos/visit-10.jpg", alt: "Dining room with bay window, dusted and vacuumed" },
  { src: "/assets/photos/visit-11.jpg", alt: "Dining nook with hardwood floors after a routine visit" },
  { src: "/assets/photos/visit-12.jpg", alt: "White bathroom vanity detailed and sanitized" },
  { src: "/assets/photos/visit-13.jpg", alt: "Bright open-plan living space after a move-in clean" },
];
