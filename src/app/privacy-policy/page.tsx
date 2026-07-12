import type { Metadata } from "next";
import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS: NavLink[] = [];

const EFFECTIVE_DATE = "July 11, 2026";

/**
 * Privacy policy for the quote form disclosure and footer link. Kept out of
 * search via robots noindex — it exists for compliance, not for ranking.
 */
export const metadata: Metadata = {
  title: "Privacy Policy | BrighNest Cleaning",
  description: "How BrighNest Cleaning collects, uses, and protects the information you share with us.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header links={NAV_LINKS} homeHref="/" />

      <main className="sec">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Legal</span>
          <h1 className="disp" style={{ fontSize: "clamp(34px,5vw,54px)", margin: "12px 0 6px" }}>
            Privacy Policy
          </h1>
          <p className="slate" style={{ fontSize: 14.5, marginBottom: 36 }}>
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="legal">
            <p>
              This Privacy Policy explains how {BUSINESS.legalName} (&ldquo;
              {BUSINESS.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              collects, uses, and protects information when you use our website or request our
              cleaning services in {BUSINESS.address.city}, {BUSINESS.address.region} and the
              surrounding areas. By using this website or submitting a request, you agree to the
              practices described below.
            </p>

            <h2>Information we collect</h2>
            <p>
              We collect information you choose to give us when you request a quote or contact us —
              typically your name, phone number, email address, the service you&rsquo;re interested
              in, and any details you include about your space. We may also automatically collect
              limited technical information, such as your browser type, device, and general usage
              data, through standard web technologies.
            </p>

            <h2>How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your quote request or inquiry;</li>
              <li>Schedule, provide, and follow up on our cleaning services;</li>
              <li>Communicate with you about appointments, pricing, and support;</li>
              <li>Improve our website, services, and customer experience; and</li>
              <li>Comply with legal obligations and protect our business.</li>
            </ul>

            <h2>How we share information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted service
              providers who help us operate our business — for example, form and email providers or
              scheduling tools — solely so they can perform services on our behalf. We may also
              disclose information where required by law, to enforce our agreements, or to protect
              the rights, safety, and property of {BUSINESS.name}, our customers, or others.
            </p>

            <h2>Third-party services</h2>
            <p>
              Our website may use third-party tools to process form submissions and communications.
              These providers handle your information under their own terms and privacy policies. We
              are not responsible for the content or privacy practices of any third-party websites
              or services linked from our site.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep the information you provide only as long as reasonably necessary to respond to
              your request, provide our services, and meet our legal and business needs, after which
              it is deleted or anonymized.
            </p>

            <h2>Your choices</h2>
            <p>
              You may opt out of promotional messages at any time by contacting us using the details
              below. You may also request that we update or delete the personal information you have
              shared with us, subject to any records we are required to keep by law. Because we
              collect only what you voluntarily submit, you can limit what we hold simply by
              choosing what you send.
            </p>

            <h2>Children&rsquo;s privacy</h2>
            <p>
              Our website and services are intended for adults. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us information,
              please contact us and we will delete it.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable measures to protect the information you share with us. However, no
              method of transmission over the internet or electronic storage is completely secure,
              and we cannot guarantee absolute security.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              effective date above. Your continued use of the website after any change means you
              accept the updated policy.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy or your information? Reach us at{" "}
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a> or{" "}
              <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.
            </p>

          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/" className="btn btn-line">
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
