import type { Metadata } from "next";
import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { Icon } from "@/components/ui/Icon";
import { PROJECTS } from "@/lib/projects";
import { BUSINESS, OG_IMAGE, SITE_URL } from "@/lib/constants";

const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "/#process" },
  { label: "Service Area", href: "/#areas" },
  { label: "FAQ", href: "/#faq" },
];

export const metadata: Metadata = {
  title: "Project Gallery | BrighNest Cleaning",
  description:
    "Before-and-after transformations from BrighNest Cleaning across Bucks County & Greater Philadelphia. Drag each slider to reveal the result.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Project Gallery | BrighNest Cleaning",
    description:
      "Before-and-after cleaning transformations across Bucks County & Greater Philadelphia.",
    url: `${SITE_URL}/gallery`,
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header links={NAV_LINKS} homeHref="/" />

      <main>
        {/* Hero */}
        <section className="sec" style={{ paddingBottom: 0 }}>
          <div className="wide">
            <div className="tc" style={{ maxWidth: 720, margin: "0 auto" }}>
              <span className="eyebrow">Our work</span>
              <h1 className="disp" style={{ fontSize: "clamp(34px,6vw,58px)", margin: "12px 0 16px" }}>
                Before &amp; after, room by room
              </h1>
              <p className="slate" style={{ fontSize: 17, maxWidth: 540, margin: "0 auto" }}>
                Real BrighNest work across Bucks County &amp; Greater Philadelphia —
                candid shots from the job and before/after transformations.
              </p>
            </div>
          </div>
        </section>

        {/* Candid photos from real visits — shown first */}
        <section className="sec" style={{ paddingBottom: 0 }}>
          <div className="wide">
            <div className="tc" style={{ marginBottom: 32 }}>
              <span className="eyebrow">On the job</span>
              <h2 className="disp" style={{ fontSize: "clamp(28px,4.5vw,44px)", marginTop: 12 }}>
                More from our visits
              </h2>
            </div>
            <PhotoCarousel />
          </div>
        </section>

        {/* CTA divider between the photo carousel and the before/after grid */}
        <section className="sec">
          <div className="wide tc">
            <p className="slate" style={{ fontSize: 17, maxWidth: 480, margin: "0 auto 24px", fontWeight: 500 }}>
              Like what you see? See the real transformations below — or get your
              free quote now.
            </p>
            <div className="fx ac gap14 fwrap jc">
              <Link href="/#quote" className="btn btn-gold">
                Get a Free Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="btn btn-line fx ac gap8">
                <Icon name="phone" size={17} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Full before/after grid */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wide">
            <div className="tc" style={{ marginBottom: 32 }}>
              <span className="eyebrow">Before &amp; after</span>
              <h2 className="disp" style={{ fontSize: "clamp(28px,4.5vw,44px)", marginTop: 12 }}>
                Drag to reveal the transformation
              </h2>
            </div>
            <div className="project-grid">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="dark sec">
          <div className="wide tc">
            <span className="eyebrow">Get started</span>
            <h2 className="disp" style={{ fontSize: "clamp(32px,5vw,52px)", margin: "12px 0 16px", color: "#fff" }}>
              Want your space on this page?
            </h2>
            <p className="slate" style={{ fontSize: 17, maxWidth: 480, margin: "0 auto 28px" }}>
              Request your free, flat-rate quote — or call and speak with a real person in
              Levittown.
            </p>
            <div className="fx ac gap14 fwrap jc cta-on-dark">
              <Link href="/#quote" className="btn btn-gold">
                Get a Free Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="btn btn-line fx ac gap8">
                <Icon name="phone" size={17} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
