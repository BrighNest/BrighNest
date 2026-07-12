import Image from "next/image";
import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Faq } from "@/components/sections/Faq";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Icon } from "@/components/ui/Icon";
import { BUSINESS, NEIGHBORHOODS } from "@/lib/constants";
import { SERVICES, servicePath, type Benefit, type Service } from "@/lib/services";

const NAV_LINKS: NavLink[] = [
  { label: "What's Included", href: "#included" },
  { label: "Process", href: "#process" },
  { label: "Service Area", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Fourth "Why BrighNest" card shown on every service page in addition to the
 * three service-specific benefits. Kept here (not in per-service data) since
 * the flat-rate promise is identical across services.
 */
const FLAT_RATE_BENEFIT: Benefit = {
  icon: "sparkle",
  title: "Flat-rate pricing",
  desc: "Transparent, up-front quotes with no hidden fees or hourly surprises — you know the price before we start.",
};

/** Same trust stats used on the homepage dark band, kept in sync here. */
const STATS = [
  { n: "100%", label: "Vetted & insured teams" },
  { n: "30mi", label: "Service radius" },
  { n: "60s", label: "Online quote" },
  { n: "$0", label: "Hidden fees" },
];

/**
 * Shared layout for all five service pages. Content is driven entirely by
 * the `service` data entry; only the page-level <Metadata>/JSON-LD differ,
 * which live in the route file. The section design mirrors the homepage —
 * dark stats band, dark glass process stage, service-area block, and the
 * mobile sticky call/quote bar — so services feel like the same site.
 */
export function ServicePage({ service }: { service: Service }) {
  const related = service.related.map((slug) => SERVICES[slug]);
  const benefits = [...service.benefits, FLAT_RATE_BENEFIT];

  return (
    <>
      <Header links={NAV_LINKS} homeHref="/" quoteHref="#quote" />

      <main>
        {/* Breadcrumb — shares the hero's extra-wide container so their left edges align. */}
        <nav aria-label="Breadcrumb" style={{ padding: "26px 0 8px" }}>
          <div className="wide-xl crumb">
            <Link href="/">Home</Link> · <Link href="/#services">Services</Link> ·{" "}
            <span style={{ color: "var(--goldd)" }}>{service.eyebrow}</span>
          </div>
        </nav>

        {/* Hero — extra-wide container gives the photo more room. */}
        <section style={{ padding: "30px 0 10px" }}>
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
                <h1 className="hgline-svc disp" style={{ margin: "0 0 0" }}>
                  {service.h1}
                </h1>
                <p className="slate" style={{ maxWidth: 520, margin: "22px 0 0", fontSize: 18 }}>
                  {service.heroSub}
                </p>
                <div className="fx ac gap14 fwrap" style={{ marginTop: 28 }}>
                  <Link href="#quote" className="btn btn-gold">
                    Get a Free Quote
                  </Link>
                  <a href={BUSINESS.phoneHref} className="btn btn-line">
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </div>
                <div className="fx ac gap20 fwrap" style={{ marginTop: 28 }}>
                  {["Licensed & Insured", "Vetted teams", "Flat-rate pricing"].map((t) => (
                    <span key={t} className="fx ac gap8" style={{ fontSize: 13.5, fontWeight: 600 }}>
                      <span className="gold">✓</span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="hero-photo" style={{ height: "min(84vw,560px)" }}>
                  <Image
                    src={`/assets/hero/${service.slug}.jpg`}
                    alt={service.heroAlt}
                    fill
                    preload
                    sizes="(max-width:860px) 100vw, 760px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="hero-tag">
                  <div className="hero-tag-ic">
                    <Icon name="shield" size={22} />
                  </div>
                  <div>
                    <div className="hero-tag-eyebrow">Fully covered</div>
                    <div className="hero-tag-title disp">Licensed &amp; Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar — full-bleed dark band (matches homepage) */}
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

        {/* Intro */}
        <section className="sec" style={{ padding: "8px 0 0" }}>
          <div className="wrap" style={{ maxWidth: 900 }}>
            <p className="slate" style={{ fontSize: 18, lineHeight: 1.7 }}>
              {service.intro}
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section id="included" className="sec">
          <div className="wide">
            <div
              className="grid g2m"
              style={{ gridTemplateColumns: ".85fr 1.15fr", gap: 52, alignItems: "start" }}
            >
              <div>
                <span className="eyebrow">What&apos;s Included</span>
                <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", margin: "12px 0 16px" }}>
                  Every visit, done right
                </h2>
                <p className="slate" style={{ fontSize: 16, maxWidth: 360 }}>
                  A detailed, checklist-driven service so nothing gets missed. Need something
                  specific? Just add it to your booking notes.
                </p>
                <Link href="#quote" className="btn btn-ink" style={{ marginTop: 22 }}>
                  Build my quote
                </Link>
              </div>
              <ul className="chk" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {service.included.map((c) => (
                  <li className="chk-i" key={c}>
                    <span className="tick">
                      <Icon name="check" size={15} strokeWidth={2.4} />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process — dark feature stage (matches homepage) */}
        <section id="process" className="sec process-stage">
          <div className="wide-xl">
            <div className="tc" style={{ marginBottom: 56, position: "relative", zIndex: 1 }}>
              <span className="eyebrow" style={{ color: "var(--gold2)" }}>
                How it works
              </span>
              <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,52px)", marginTop: 12, color: "#fff" }}>
                Simple from quote to shine
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
                Booking {service.eyebrow.toLowerCase()} in Levittown shouldn&apos;t take longer than
                the clean itself. From your first quote to a spotless result, BrighNest keeps every
                step simple — request flat-rate pricing online in 60 seconds, pick a date, and let a
                vetted, insured team handle the rest across Bucks County &amp; Greater Philadelphia.
              </p>
            </div>
            <div className="steps steps-dark">
              {service.process.map((p) => (
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

        {/* Why BrighNest */}
        <section id="why" className="sec">
          <div className="wide-xl">
            <div className="fx ac jb ae fwrap gap16" style={{ marginBottom: 36 }}>
              <div>
                <span className="eyebrow">Why BrighNest</span>
                <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", marginTop: 12 }}>
                  Why Bucks County chooses us
                </h2>
              </div>
            </div>
            <div className="grid why-grid">
              {benefits.map((b) => (
                <div key={b.title} className="card" style={{ padding: 28 }}>
                  <div className="iconbox" style={{ marginBottom: 16 }}>
                    <Icon name={b.icon} />
                  </div>
                  <h3 className="disp" style={{ fontSize: 21, marginBottom: 8 }}>
                    {b.title}
                  </h3>
                  <p className="slate" style={{ fontSize: 15 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area — locations (dark feature stage, matches "How it works") */}
        <section id="areas" className="dark sec process-stage">
          <div className="wide" style={{ position: "relative", zIndex: 1 }}>
            <div className="area-grid">
              <div className="area-head">
                <span className="eyebrow">Service Area</span>
                <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", margin: "12px 0 16px", color: "#fff" }}>
                  Serving Levittown &amp; the surrounding area
                </h2>
                <p className="slate" style={{ fontSize: 16, maxWidth: 420, margin: 0 }}>
                  We bring BrighNest {service.eyebrow.toLowerCase()} across Bucks County &amp; Greater
                  Philadelphia, within about 30 miles of Levittown. Don&apos;t see your town? Just ask.
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
              <ServiceAreaMap dark className="area-map" style={{ height: "min(100vw,560px)" }} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 40 }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", marginTop: 12 }}>
                Questions, answered
              </h2>
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <Faq items={service.faq} defaultOpen={0} />
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="sec">
          <div className="wide">
            <div className="fx ac jb ae fwrap gap16" style={{ marginBottom: 32 }}>
              <div>
                <span className="eyebrow">Related services</span>
                <h2 className="disp" style={{ fontSize: "clamp(30px,4.5vw,46px)", marginTop: 12 }}>
                  Explore more cleaning
                </h2>
              </div>
            </div>
            <div className="grid g2m" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {related.map((r) => (
                <Link key={r.slug} className="card relcard" href={servicePath(r.slug)}>
                  <div className="iconbox" style={{ marginBottom: 16 }}>
                    <Icon name={r.icon} />
                  </div>
                  <h3 className="disp" style={{ fontSize: 23, marginBottom: 8 }}>
                    {r.title}
                  </h3>
                  <p className="slate" style={{ fontSize: 14.5 }}>
                    {r.heroSub.split(" — ")[0]}
                  </p>
                  <span className="rel-go">Explore →</span>
                </Link>
              ))}
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
                  Request your free, no-obligation quote for {service.eyebrow.toLowerCase()} —
                  or call and speak with a real person in Levittown.
                </p>
                <a href={BUSINESS.phoneHref} className="fx ac gap14" style={{ textDecoration: "none" }}>
                  <div className="iconbox" style={{ background: "rgba(224,188,99,.14)" }}>
                    <Icon name="phone" />
                  </div>
                  <span className="big-phone big-phone-svc">{BUSINESS.phoneDisplay}</span>
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
              <QuoteForm lockedService={service.eyebrow} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar quoteHref="#quote" />
    </>
  );
}
