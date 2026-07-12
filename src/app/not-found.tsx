import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS: NavLink[] = [];

export default function NotFound() {
  return (
    <>
      <Header links={NAV_LINKS} homeHref="/" />
      <main className="sec">
        <div className="wrap tc" style={{ maxWidth: 640 }}>
          <span className="eyebrow">404</span>
          <h1 className="disp" style={{ fontSize: "clamp(36px,6vw,64px)", margin: "14px 0 16px" }}>
            This page took the day off
          </h1>
          <p className="slate" style={{ fontSize: 17, marginBottom: 28 }}>
            The page you&apos;re looking for isn&apos;t here — but a spotless home is only a
            quote away.
          </p>
          <div className="fx ac gap14 fwrap jc">
            <Link href="/" className="btn btn-gold">
              Back to home
            </Link>
            <a href={BUSINESS.phoneHref} className="btn btn-line">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
