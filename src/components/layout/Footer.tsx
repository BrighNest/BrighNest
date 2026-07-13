import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { BUSINESS } from "@/lib/constants";
import { SERVICE_LIST, servicePath } from "@/lib/services";
import logoWordmark from "@/../public/assets/logo-wordmark.png";
import logoSparkle from "@/../public/assets/logo-sparkle.png";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--paper)",
        borderTop: "1px solid var(--line)",
        padding: "58px 0 30px",
      }}
    >
      <div className="wide">
        <div
          className="grid g2m"
          style={{ gridTemplateColumns: "1.5fr 1fr 1fr", gap: 40 }}
        >
          <div>
            <Image
              src={logoWordmark}
              alt={BUSINESS.name}
              style={{ height: 42, width: "auto", marginBottom: 16 }}
            />
            <p className="slate" style={{ fontSize: 14.5, maxWidth: 300 }}>
              Residential, commercial &amp; specialty cleaning across Bucks County,
              Greater Philadelphia &amp; nearby NJ. Where bright meets home.
            </p>
          </div>

          <div>
            <h3
              className="disp"
              style={{
                fontSize: 13,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--goldd)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Contact
            </h3>
            <p className="slate" style={{ fontSize: 14.5, lineHeight: 1.9 }}>
              {BUSINESS.name}
              <br />
              Based in {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
              {BUSINESS.address.postalCode}
              <br />
              <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
              <br />
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </p>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="navlink fx ac gap8"
              aria-label={`${BUSINESS.name} on Instagram`}
              style={{ marginTop: 12, fontSize: 14.5 }}
            >
              <Icon name="instagram" size={18} />
              {BUSINESS.instagramHandle}
            </a>
          </div>

          <div>
            <h3
              className="disp"
              style={{
                fontSize: 13,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--goldd)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Services
            </h3>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                fontSize: 14.5,
              }}
            >
              {SERVICE_LIST.map((s) => (
                <Link key={s.slug} href={servicePath(s.slug)} className="navlink">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="fx ac jb fwrap gap16"
          style={{
            marginTop: 38,
            paddingTop: 22,
            borderTop: "1px solid var(--line)",
          }}
        >
          <span className="slate fx ac gap8 fwrap" style={{ fontSize: 12.5 }}>
            © {new Date().getFullYear()} {BUSINESS.name} · Licensed &amp; Insured · Bucks County, Greater Philadelphia &amp; NJ
            <span aria-hidden="true">·</span>
            <Link href="/gallery" className="navlink">
              Gallery
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy-policy" className="navlink">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/service-agreement" className="navlink">
              Service Agreement
            </Link>
          </span>
          <div className="fx ac gap12">
            <Image
              src={logoSparkle}
              alt=""
              style={{ height: 20, width: "auto", opacity: 0.75 }}
            />
            <span className="slate" style={{ fontSize: 12.5 }}>
              Where bright meets home
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
