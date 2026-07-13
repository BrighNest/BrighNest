import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { FEATURED } from "@/lib/projects";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { Faq } from "@/components/sections/Faq";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeSchema, faqSchema } from "@/lib/schema";
import { BUSINESS, OG_IMAGE, SITE_URL, NEIGHBORHOODS } from "@/lib/constants";
import { SERVICE_LIST, servicePath } from "@/lib/services";

// Ordered to match the section order on the page: work → process → services → areas → faq.
const NAV_LINKS: NavLink[] = [
  { label: "Our Work", href: "#work" },
  { label: "How It Works", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Service Area", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

const HOME_FAQ = [
  { q: "How much does a cleaning cost?", a: "Every home is different, so pricing depends on size, condition, and frequency. After a quick 60-second quote request we send transparent, flat-rate pricing — no hidden fees, ever." },
  { q: "Do you use eco-friendly, pet-safe products?", a: "Yes. Our standard kit is non-toxic, biodegradable, and safe for children and pets. Prefer fragrance-free or a specific brand? Just note it on your booking." },
  { q: "Are you licensed, insured, and bonded?", a: "Fully. BrighNest is licensed, insured, and bonded, and every team member is background-checked and trained before their first visit." },
  { q: "Do I need to be home during the cleaning?", a: "Not at all. Many clients provide secure entry instructions or a lockbox code. Our vetted, insured teams follow strict key-handling protocols." },
  { q: "How do I book or reschedule?", a: `Request a quote online or call ${BUSINESS.phoneDisplay}. Reschedule anytime with 24 hours' notice at no charge.` },
];

const STATS = [
  { n: "100%", label: "Vetted & insured teams" },
  { n: "30mi", label: "Service radius" },
  { n: "60s", label: "Online quote" },
  { n: "$0", label: "Hidden fees" },
];

const PROCESS = [
  { n: "1", title: "Request a quote", desc: "Tell us about your space in 60 seconds. Flat-rate pricing within 24 hours." },
  { n: "2", title: "Book your date", desc: "Pick a time that works. We assign a dedicated, vetted team." },
  { n: "3", title: "We make it gleam", desc: "On-time arrival, checklist-driven clean, white-glove detail pass." },
  { n: "4", title: "You relax", desc: "Come home to a fresh, spotless space — ready to simply enjoy it." },
];

export const metadata: Metadata = {
  title: "BrighNest Cleaning | Home & Office Cleaning in Levittown, PA",
  description:
    "Residential, commercial & specialty cleaning across Bucks County, Greater Philadelphia & nearby NJ. Licensed & insured. Request your free quote today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "BrighNest Cleaning | Home & Office Cleaning in Levittown, PA",
    description:
      "Residential, commercial & specialty cleaning across Bucks County, Greater Philadelphia & nearby NJ. Request your free quote today.",
    url: SITE_URL,
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  const secondaryTiles = SERVICE_LIST.filter((s) => s.slug !== "residential");

  return (
    <>
      <JsonLd data={homeSchema()} />
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Header links={NAV_LINKS} homeHref="/#top" />

      <main id="top">
        {/* Hero — extra-wide container gives the photo more room. */}
        <section style={{ padding: "64px 0 0" }}>
          <div className="wide-xl">
            <div
              className="grid g2m"
              style={{ gridTemplateColumns: "1fr 1.1fr", gap: 52, alignItems: "center" }}
            >
              <div>
                <span className="chip" style={{ marginBottom: 22 }}>
                  <span className="gold">✓</span>
                  Locally owned &amp; operated · Levittown, PA
                </span>
                <h1 className="hgline disp">
                  Home cleaning in Levittown. <span className="mark">Request a quote in 60 seconds.</span>
                </h1>
                <p className="slate" style={{ maxWidth: 500, margin: "24px 0 0", fontSize: 18 }}>
                  Book trusted residential, commercial &amp; specialty cleaning across
                  Bucks County, Greater Philadelphia &amp; nearby NJ. Flat-rate pricing,
                  vetted teams, and detail in every corner — no surprises.
                </p>
                <div className="fx ac gap14 fwrap" style={{ marginTop: 30 }}>
                  <Link href="#quote" className="btn btn-gold">
                    Get a Free Quote
                  </Link>
                  <a href={BUSINESS.phoneHref} className="btn btn-line">
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </div>
                <div className="fx ac gap20 fwrap" style={{ marginTop: 32 }}>
                  {["Licensed & Insured", "Eco-friendly products", "Quotes within 24 hours"].map((t) => (
                    <span key={t} className="fx ac gap8" style={{ fontSize: 13.5, fontWeight: 600 }}>
                      <span className="gold">✓</span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="hero-photo" style={{ height: "min(84vw,580px)" }}>
                  <Image
                    src="/assets/hero/landing.jpg"
                    alt="Bright, freshly cleaned modern living room"
                    fill
                    preload
                    sizes="(max-width:860px) 100vw, 760px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="hero-tag">
                  <div className="hero-tag-ic">
                    <Icon name="sparkle" size={22} />
                  </div>
                  <div>
                    <div className="hero-tag-eyebrow">The BrighNest standard</div>
                    <div className="hero-tag-title disp">Detail in every corner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar — full-bleed dark band */}
        <section className="sec" style={{ padding: "48px 0" }}>
          <div className="bleed" style={{ background: "var(--ink)", padding: "40px 0" }}>
            <div className="wide-xl">
              <div className="grid stats-grid">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="stat-n" style={{ color: "var(--gold2)" }}>
                      {s.n}
                    </div>
                    <div style={{ color: "#A6A39B", fontSize: 13.5, marginTop: 6, fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Work */}
        <section id="work" className="sec">
          <div className="wide">
            <div className="fx ac jb ae fwrap gap16" style={{ marginBottom: 32 }}>
              <div>
                <span className="eyebrow">Our work</span>
                <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,50px)", marginTop: 12 }}>
                  See the difference
                </h2>
              </div>
              <p className="slate" style={{ maxWidth: 300, fontSize: 15, fontWeight: 500 }}>
                Drag the handle to reveal the transformation.
              </p>
            </div>
            <div className="project-grid">
              {FEATURED.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="fx ac gap14 fwrap jc" style={{ marginTop: 40 }}>
              <Link href="/gallery" className="btn btn-gold">
                View all projects
              </Link>
              <Link href="#quote" className="btn btn-line">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Process — dark feature stage */}
        <section id="process" className="sec process-stage">
          <div className="wide-xl">
            <div className="tc" style={{ marginBottom: 56, position: "relative", zIndex: 1 }}>
              <span className="eyebrow" style={{ color: "var(--gold2)" }}>
                How it works
              </span>
              <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,52px)", marginTop: 12, color: "#fff" }}>
                Booked in four easy steps
              </h2>
              <p
                style={{
                  color: "#B9B6AD",
                  fontSize: 16.5,
                  lineHeight: 1.6,
                  maxWidth: 820,
                  margin: "18px auto 0",
                }}
              >
                Booking house cleaning in Levittown shouldn&apos;t take longer than the clean
                itself. From your first quote to a spotless home, BrighNest keeps every
                step simple — request flat-rate pricing online in 60 seconds, pick a date,
                and let a vetted, insured team handle the rest across Bucks County,
                Greater Philadelphia &amp; nearby NJ.
              </p>
            </div>
            <div className="steps steps-dark">
              {PROCESS.map((p) => (
                <div key={p.n} className="step step-glass">
                  <div className="step-num">{p.n}</div>
                  <h3 className="step-title">{p.title}</h3>
                  <p className="step-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div
              className="fx ac gap14 fwrap jc cta-on-dark"
              style={{ marginTop: 48, position: "relative", zIndex: 1 }}
            >
              <Link href="#quote" className="btn btn-gold">
                Get a Free Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="btn btn-line">
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Services tiles */}
        <section id="services" className="sec">
          <div className="wide">
            <div className="fx ac jb ae fwrap gap16" style={{ marginBottom: 36 }}>
              <div>
                <span className="eyebrow">Services</span>
                <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,50px)", marginTop: 12 }}>
                  Pick your clean
                </h2>
              </div>
              <Link href="#quote" className="btn btn-line hide-m">
                Build my quote
              </Link>
            </div>
            <div className="grid bento" style={{ gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
              {/* Featured: Residential */}
              <Link
                href={servicePath("residential")}
                className="card card-hover svc-l"
                style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <div style={{ position: "relative", height: 220, borderBottom: "1px solid var(--line)" }}>
                  <Image
                    src="/assets/hero/residential.jpg"
                    alt="Immaculate family home interior after a residential clean"
                    fill
                    sizes="(max-width:860px) 100vw, 720px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div className="fx ac gap12" style={{ marginBottom: 12 }}>
                    <div className="iconbox">
                      <Icon name="home" />
                    </div>
                    <h3 className="disp" style={{ fontSize: 26 }}>
                      Residential
                    </h3>
                  </div>
                  <p className="slate" style={{ fontSize: 15, marginBottom: 16 }}>
                    Homes, condos &amp; apartments kept effortlessly pristine — weekly,
                    bi-weekly, deep, or move-in / move-out cleans.
                  </p>
                  <div className="fx ac gap8 fwrap">
                    <span className="chip">Kitchens &amp; baths</span>
                    <span className="chip">Floors &amp; dusting</span>
                    <span className="chip">Move-out</span>
                  </div>
                  <span className="cardlink" style={{ marginTop: "auto", paddingTop: 18 }}>
                    Explore residential →
                  </span>
                </div>
              </Link>

              {/* 2×2 grid */}
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {secondaryTiles.map((s) => (
                  <Link key={s.slug} href={servicePath(s.slug)} className="card card-hover svc-l svc-sm">
                    <div className="iconbox">
                      <Icon name={s.icon} />
                    </div>
                    <h3 className="disp" style={{ fontSize: 20, marginTop: 14 }}>
                      {s.tileTitle}
                    </h3>
                    <p className="slate" style={{ fontSize: 13.5, marginTop: 6, flex: 1 }}>
                      {s.tileDesc}
                    </p>
                    <span className="cardlink" style={{ fontSize: 13, marginTop: 12 }}>
                      Explore →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="sec" style={{ background: "var(--ink)", color: "#F3F1EC" }}>
          <div className="wide-xl">
            <div className="tc" style={{ marginBottom: 44 }}>
              <span className="eyebrow" style={{ color: "var(--gold2)" }}>
                Reviews
              </span>
              <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,50px)", marginTop: 12, color: "#fff" }}>
                Don&apos;t just take our word
              </h2>
            </div>
            <ReviewsCarousel />
            <div className="fx ac gap24 fwrap jc" style={{ marginTop: 38 }}>
              <span style={{ color: "#A6A39B", fontSize: 14 }}>Licensed &amp; Insured · Bonded</span>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="areas" className="sec">
          <div className="wide">
            <div className="area-grid">
              <div className="area-head">
                <span className="eyebrow">Service Area</span>
                <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", margin: "12px 0 16px" }}>
                  Serving Levittown &amp; the surrounding area
                </h2>
                <p className="slate" style={{ fontSize: 16, maxWidth: 420, margin: 0 }}>
                  We bring BrighNest cleaning across Bucks County, Greater Philadelphia
                  &amp; the Trenton, NJ area — within about 30 miles of Levittown.
                  Don&apos;t see your town? Just ask.
                </p>
              </div>
              <div className="area-chips fx ac gap10 fwrap">
                {NEIGHBORHOODS.map((n) => (
                  <span key={n} className="chip">
                    {n}
                  </span>
                ))}
              </div>
              <div className="area-cta fx ac gap14 fwrap">
                <Link href="#quote" className="btn btn-gold">
                  Get a Free Quote
                </Link>
                <a href={BUSINESS.phoneHref} className="btn btn-line">
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
              <ServiceAreaMap className="area-map" style={{ height: "min(100vw,560px)" }} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 40 }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,50px)", marginTop: 12 }}>
                Questions, answered
              </h2>
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <Faq items={HOME_FAQ} defaultOpen={0} />
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="dark sec">
          <div className="wide-xl">
            <div className="grid g2m" style={{ gridTemplateColumns: "1.05fr .95fr", gap: 72, alignItems: "center" }}>
              <div>
                <span className="eyebrow">Get started</span>
                <h2 className="disp" style={{ fontSize: "clamp(36px,5.5vw,58px)", margin: "12px 0 18px", color: "#fff" }}>
                  Ready in 60 seconds
                </h2>
                <p className="slate" style={{ fontSize: 17, marginBottom: 28, maxWidth: 420 }}>
                  Request your free, no-obligation quote — or call and speak with a real
                  person in Levittown.
                </p>
                <a href={BUSINESS.phoneHref} className="fx ac gap14" style={{ textDecoration: "none" }}>
                  <div className="iconbox" style={{ background: "rgba(224,188,99,.14)" }}>
                    <Icon name="phone" />
                  </div>
                  <span className="big-phone">{BUSINESS.phoneDisplay}</span>
                </a>
                <p className="slate" style={{ fontSize: 13, marginTop: 12, fontWeight: 500 }}>
                  {BUSINESS.hours}
                </p>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx ac gap8"
                  style={{ marginTop: 18, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
                >
                  <Icon name="instagram" size={17} />
                  Follow our work on Instagram
                </a>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
