import { BUSINESS, SITE_URL } from "./constants";
import type { Service } from "./services";

/** Shared LocalBusiness node reused across schemas. */
function localBusinessNode() {
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    image: `${SITE_URL}/assets/logo-wordmark.png`,
    logo: `${SITE_URL}/assets/logo-wordmark.png`,
    url: SITE_URL,
    telephone: BUSINESS.phoneIntl,
    email: BUSINESS.email,
    sameAs: BUSINESS.social,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.1551,
      longitude: -74.8288,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
  };
}

export function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        publisher: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };
}

export function serviceSchema(service: Service, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.eyebrow,
    serviceType: service.eyebrow,
    description: service.metaDescription,
    url: canonical,
    provider: localBusinessNode(),
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}

/** Mirrors the visible Home · Services · <service> breadcrumb on service pages. */
export function breadcrumbSchema(service: Service, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: service.eyebrow, item: canonical },
    ],
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
