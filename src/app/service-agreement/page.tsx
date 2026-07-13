import type { Metadata } from "next";
import Link from "next/link";
import { Header, type NavLink } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS: NavLink[] = [];

const EFFECTIVE_DATE = "July 14, 2026";

/** The 19 numbered contract sections — drives the table of contents;
 *  <ol> numbering matches the section numbers in the body. */
const SECTIONS = [
  { id: "scope", title: "Scope of Services" },
  { id: "access", title: "Access to the Property" },
  { id: "pets", title: "Pets" },
  { id: "pricing", title: "Fees, Pricing & Payment Terms" },
  { id: "add-ons", title: "Additional Services & Add-On Charges" },
  { id: "trip-fee", title: "Trip / Assessment Fee" },
  { id: "cancellation", title: "Cancellation, Rescheduling & Lockout" },
  { id: "guarantee", title: "Satisfaction Guarantee & Re-Clean" },
  { id: "liability", title: "Damage, Loss & Liability" },
  { id: "supplies", title: "Client Property, Supplies & Equipment" },
  { id: "conduct", title: "Health, Safety & Conduct" },
  { id: "non-solicitation", title: "Non-Solicitation of Personnel" },
  { id: "termination", title: "Term & Termination" },
  { id: "photos", title: "Photographs & Marketing" },
  { id: "third-parties", title: "Independent Relationship" },
  { id: "force-majeure", title: "Force Majeure" },
  { id: "entire-agreement", title: "Entire Agreement & Amendments" },
  { id: "governing-law", title: "Governing Law & Dispute Resolution" },
  { id: "acceptance", title: "Acknowledgment & Acceptance" },
] as const;

/**
 * Web adaptation of the client's signed Cleaning Service Agreement (DOCX).
 * Published as information — fill-in blanks and signature lines from the
 * paper version are replaced by clickwrap acceptance: the quote form's
 * consent checkbox and the act of accepting services (see section 19).
 * Kept out of search via robots noindex, same as the privacy policy.
 */
export const metadata: Metadata = {
  title: "Service Agreement | BrighNest Cleaning",
  description:
    "The terms that apply when you book cleaning services with BrighNest Cleaning — scope, pricing, cancellation, guarantee, and liability policies.",
  robots: { index: false, follow: false },
};

export default function ServiceAgreementPage() {
  return (
    <>
      <Header links={NAV_LINKS} homeHref="/" />

      <main className="sec">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Legal</span>
          <h1 className="disp" style={{ fontSize: "clamp(34px,5vw,54px)", margin: "12px 0 6px" }}>
            Cleaning Service Agreement
          </h1>
          <p className="slate" style={{ fontSize: 14.5, marginBottom: 36 }}>
            Effective date: {EFFECTIVE_DATE}
          </p>

          <nav className="toc" aria-label="Agreement contents">
            <span className="toc-label">Contents</span>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal">
            <p>
              This Cleaning Service Agreement (&ldquo;Agreement&rdquo;) applies between{" "}
              {BUSINESS.legalName}, a Pennsylvania limited liability company serving Bucks County,
              PA and surrounding PA/NJ areas (the &ldquo;Company&rdquo;), and the client requesting
              or receiving cleaning services (the &ldquo;Client&rdquo;). Together, the Company and
              the Client are referred to as the &ldquo;Parties.&rdquo;
            </p>
            <p>
              By checking the acceptance box on our quote or booking form, confirming a booking, or
              accepting cleaning services from the Company, the Client agrees to all terms below.
              The specific services, frequency, and pricing for each Client are set out in the
              quote, invoice, or booking confirmation the Company provides, which incorporates this
              Agreement by reference.
            </p>

            <h2 id="scope">1. Scope of Services</h2>
            <p>
              The Company agrees to provide cleaning services (the &ldquo;Services&rdquo;) at the
              service type and frequency selected in your quote or booking confirmation —
              e.g.&nbsp;standard recurring (weekly, bi-weekly, or monthly), deep cleaning,
              move-in/move-out, one-time, commercial, post-construction, or carpet/upholstery
              cleaning. Only the services listed on the quote, invoice, or online booking
              confirmation are included. Any service not listed is considered an add-on and will be
              billed separately per Section 5.
            </p>
            <p>
              Standard scope of a general cleaning visit (standard cleaning) includes, unless
              otherwise noted on the quote:
            </p>
            <ul>
              <li>
                <strong>Kitchen:</strong> countertops, exterior of appliances, stovetop, sink,
                microwave interior, floors.
              </li>
              <li>
                <strong>Bathrooms:</strong> toilets, showers/tubs, sinks, mirrors, countertops,
                floors.
              </li>
              <li>
                <strong>Bedrooms &amp; living areas:</strong> dusting of reachable surfaces,
                vacuuming, mopping, trash removal, bed-making, wiping windowsills.
              </li>
              <li>
                <strong>General:</strong> light switches, door handles/high-touch surfaces,
                baseboards (light dusting only, standard reach), interior glass/mirrors.
              </li>
            </ul>
            <p>
              The following are <strong>not</strong> included unless specifically added and priced
              as an extra service: inside of oven, inside of refrigerator, inside cabinets/drawers,
              interior windows above reachable height, walls, ceilings, light fixtures/chandeliers
              requiring a ladder above 2 steps, blinds (detailed), garage, exterior areas,
              biohazard/bodily fluid/pest infestation cleanup, heavy grease build-up, hoarding-level
              clutter, laundry, dishwashing, organizing, and carpet/upholstery deep extraction
              (offered as a separate service).
            </p>
            <p>
              The Company reserves the right to decline or reschedule any task that poses a safety
              risk to staff (e.g., mold exposure, structural hazards, severe pest infestation, or
              biohazard material) and to charge a trip/assessment fee under Section 6 if the
              condition was not disclosed in advance.
            </p>

            <h2 id="access">2. Access to the Property</h2>
            <p>
              The Client shall provide the Company reasonable access to the property at the
              scheduled time by one of the following methods, as agreed at booking:
            </p>
            <ul>
              <li>Client is present to provide access;</li>
              <li>Lockbox or key code, provided securely to the Company;</li>
              <li>
                Key provided to the Company, held securely and returned upon termination of this
                Agreement or upon request; or
              </li>
              <li>Garage code, alarm code, or other access instructions.</li>
            </ul>
            <p>
              If the Company arrives at the scheduled time and cannot access the property through no
              fault of the Company, this will be treated as a &ldquo;Lockout&rdquo; under Section 7
              (Cancellation &amp; Lockout Policy), and the applicable lockout fee will apply.
            </p>
            <p>
              The Client is responsible for disclosing, prior to the appointment, any active
              security systems, cameras in areas to be cleaned, aggressive pets, hazardous
              materials, firearms left unsecured, or known structural/electrical/plumbing issues
              that could affect the safety of cleaning staff.
            </p>

            <h2 id="pets">3. Pets</h2>
            <p>
              Pets must be secured, crated, or otherwise contained in a separate area during the
              cleaning visit unless the Client has notified the Company in advance and the Company
              has agreed in writing to work around a specific pet. The Company is not liable for a
              pet escaping an unsecured area, and reserves the right to leave the property if a pet
              poses a safety threat to staff, in which case the visit will be billed as completed
              and the Lockout/Refusal of Access fee in Section 7 may apply.
            </p>

            <h2 id="pricing">4. Fees, Pricing &amp; Payment Terms</h2>
            <p>
              The price per visit and accepted payment methods (cash, check, Zelle, or credit/debit
              card) are confirmed in your quote or booking confirmation. Payment is due in full
              immediately upon completion of each visit, before the Company&rsquo;s staff depart the
              property, using one of the accepted payment methods. No invoicing, net-terms, or
              deferred payment arrangement applies to any Client — residential or commercial —
              unless a separate written commercial billing agreement is signed by both Parties in
              advance.
            </p>
            <p>
              If payment is not made immediately upon completion of the visit as required above, the
              balance is considered past due starting that same day, and the Company may apply a
              late fee of $25.00, or 5% of the unpaid amount (whichever is greater), after seven (7)
              calendar days of delinquency, and again for each additional seven (7) calendar day
              period the balance remains unpaid.
            </p>
            <p>
              Any check or electronic payment returned for insufficient funds will incur a $40.00
              returned-payment fee in addition to the original balance due.
            </p>
            <p>
              The Company reserves the right to suspend future scheduled services, without further
              notice, for any account with a balance more than fourteen (14) days past due, until
              the account is brought current.
            </p>
            <p>
              Prices quoted are based on the condition of the property and scope described by the
              Client at the time of booking. If the property&rsquo;s condition materially differs
              from what was described (e.g., significantly more clutter, pet hair, or buildup than
              disclosed), the Company may adjust the price for that visit and will notify the Client
              before proceeding, or complete the visit at the standard scope only.
            </p>
            <p>
              For recurring service plans, the Company will provide at least thirty (30) days&rsquo;
              written notice (text, email, or written letter) before any increase to the recurring
              rate. Continued use of Services after the effective date of a price change constitutes
              acceptance of the new rate.
            </p>
            <p>
              For Deep Cleaning, Move-In/Move-Out, Post-Construction, and other visits with a quoted
              price of $300.00 or more, the Company may place an authorization hold on the
              Client&rsquo;s card approximately twenty-four (24) hours before the scheduled visit,
              in an amount up to the quoted price. A hold is not a charge — funds are reserved but
              not withdrawn. Upon completion of the visit, the Company will capture the amount
              actually due, which may be lower or, within reasonable limits (e.g., due to add-on
              services actually performed), higher than the original hold; any uncaptured portion is
              released back to the Client according to the Client&rsquo;s card issuer&rsquo;s
              standard timelines (typically 3–5 business days). For new and one-time Clients, the
              Company may instead or additionally require the $75.00 prepayment described in
              Section 7.
            </p>

            <h2 id="add-ons">5. Additional Services &amp; Add-On Charges</h2>
            <p>
              Any service outside the standard scope in Section 1 will be quoted and agreed upon
              (verbally, by text, or in writing) before being performed, and billed as an add-on to
              the visit invoice. Common add-on rates (subject to update, current rates confirmed at
              time of booking):
            </p>
            <ul>
              <li>Inside oven cleaning: additional flat fee, quoted per job.</li>
              <li>Inside refrigerator cleaning: additional flat fee, quoted per job.</li>
              <li>
                Inside cabinets/drawers cleaning (kitchen, bathroom): additional flat fee, quoted
                per job.
              </li>
              <li>Interior window cleaning: quoted per pane/per job.</li>
              <li>Laundry (wash/dry, no folding): $15.00 per load.</li>
              <li>Fresh linen change (linens provided by Client): additional flat fee.</li>
              <li>Detailed baseboard washing (standard reach): additional flat fee.</li>
              <li>Wall washing/wiping: additional flat fee, quoted per job.</li>
              <li>Basement cleaning: additional flat fee, quoted per job.</li>
              <li>Home office cleaning: additional flat fee, quoted per job.</li>
              <li>
                Couch/sofa &amp; upholstered furniture cleaning: additional flat fee, per
                room/piece, per the Company&rsquo;s separate specialty cleaning price sheet.
              </li>
              <li>Organizing services: billed hourly, quoted at booking.</li>
              <li>
                Carpet, upholstery, and mattress cleaning: quoted per room/piece, per the
                Company&rsquo;s separate specialty cleaning price sheet.
              </li>
              <li>
                Excessive trash removal (more than 2 standard bags) and hauling: quoted per job.
              </li>
              <li>
                Excessive clutter requiring extra time beyond the scheduled window: billed at the
                hourly overage rate below.
              </li>
            </ul>
            <p>
              Hourly overage rate (time beyond scheduled visit length due to added scope, excess
              mess, or clutter): $75.00 per hour, per cleaner.
            </p>

            <h2 id="trip-fee">6. Trip / Assessment Fee for Refused or Unsafe Conditions</h2>
            <p>
              If the Company&rsquo;s staff arrive and reasonably determine that conditions at the
              property are unsafe, hazardous, or substantially beyond the disclosed scope (including
              but not limited to active pest infestation, mold, bodily fluids/biohazards, or
              hoarding-level conditions not disclosed at booking), the Company may decline to
              perform the Services. In that event, a trip/assessment fee of $75.00, or 50% of the
              quoted visit price (whichever is greater), will be charged to cover dispatch, labor,
              and scheduling costs.
            </p>

            <h2 id="cancellation">7. Cancellation, Rescheduling &amp; Lockout Policy</h2>
            <p>
              The Client may cancel or reschedule a visit at no charge with at least twenty-four
              (24) hours&rsquo; notice before the scheduled appointment time.
            </p>
            <p>
              Cancellations made with less than twenty-four (24) hours&rsquo; notice will be charged
              a cancellation fee equal to 50% of the scheduled visit price.
            </p>
            <p>
              Same-day cancellations, or a &ldquo;lockout&rdquo; (Company staff arrive and cannot
              access the property for any reason not caused by the Company, including no-shows,
              unremoved pets, or incorrect access codes), will be charged the full price of the
              scheduled visit.
            </p>
            <p>
              Repeated cancellations or lockouts (three or more within a rolling twelve-month
              period) may result in the Company requiring prepayment for future visits or
              terminating this Agreement under Section 13.
            </p>
            <p>
              The Company will make commercially reasonable efforts to notify the Client of any
              delay or need to reschedule on the Company&rsquo;s part (e.g., illness, weather,
              vehicle issues) as early as possible, and no cancellation fee applies to
              Company-initiated changes.
            </p>
            <p>
              For new and one-time Clients, the Company may require a $75.00 prepayment at the time
              of booking. This prepayment is non-refundable if the Client cancels with less than
              twenty-four (24) hours&rsquo; notice (applied as the cancellation fee under this
              Section) or is otherwise credited toward the final invoice if the visit proceeds as
              scheduled.
            </p>

            <h2 id="guarantee">8. Satisfaction Guarantee &amp; Re-Clean Policy</h2>
            <p>
              The Company stands behind the quality of its work. If the Client is not satisfied with
              any specific, identifiable item within the scope of the completed cleaning, the Client
              must notify the Company in writing (text, email, or phone call followed by written
              confirmation) within twenty-four (24) hours of the completed service.
            </p>
            <p>
              Upon timely notice, the Company will re-clean the specific item(s) in question at no
              additional charge, scheduled within a reasonable time at mutual convenience. This
              re-clean remedy is the Client&rsquo;s sole and exclusive remedy for dissatisfaction
              with the quality of a cleaning visit; no cash refunds will be issued for completed
              work except at the Company&rsquo;s sole discretion.
            </p>
            <p>
              Claims submitted after twenty-four (24) hours, or for items outside the agreed scope
              of Section 1, are not eligible for a free re-clean but may be scheduled as a new,
              separately billed visit.
            </p>

            <h2 id="liability">9. Damage, Loss &amp; Liability</h2>
            <p>
              The Company carries General Liability Insurance and will act with reasonable care
              during every visit. The Client must report any suspected damage or loss in writing
              within twenty-four (24) hours of the visit during which it is believed to have
              occurred; claims reported after this window may be denied due to the inability to
              verify the cause.
            </p>
            <p>
              The Client agrees to secure, remove from the cleaning area, or specifically identify
              to the Company in advance, any item that is fragile, irreplaceable, of high
              sentimental or monetary value (including but not limited to jewelry, cash,
              collectibles, antiques, artwork, or electronics), or that requires special handling
              instructions. The Company&rsquo;s liability for any single item of unusually high
              value not disclosed in advance is limited to $100 per item.
            </p>
            <p>
              The Company is not responsible for: pre-existing damage or wear; damage resulting from
              a manufacturing defect, prior improper installation, or the normal deterioration of a
              surface or item; damage to items that were not properly secured, mounted, or in
              poor/deteriorating condition prior to the visit; or loss/damage to cash, jewelry, or
              high-value items left accessible without prior disclosure.
            </p>
            <p>
              The Company&rsquo;s total liability for any single claim of proven, disclosed damage
              directly caused by the Company&rsquo;s negligence is limited to the lesser of the
              actual repair/replacement cost or five hundred dollars ($500), unless a higher amount
              is separately agreed in writing prior to the visit for a specific high-value item.
            </p>
            <p>
              In no event shall the Company be liable for indirect, incidental, or consequential
              damages, including loss of use, loss of time, or emotional distress.
            </p>

            <h2 id="supplies">10. Client Property, Supplies &amp; Equipment</h2>
            <p>
              Whether cleaning supplies and equipment are provided by the Company or the Client is
              agreed at booking.
            </p>
            <p>
              If the Company provides supplies and equipment, standard, generally safe-for-surface
              products will be used. The Client is responsible for notifying the Company in advance
              of any surface requiring special products (e.g., natural stone, unsealed wood,
              specific allergies/sensitivities) or providing the appropriate product themselves. The
              Company is not liable for damage to a surface caused by the reasonable use of standard
              cleaning products where the Client failed to disclose a special surface requirement.
            </p>
            <p>
              If the Client provides supplies or equipment, the Company is not responsible for any
              deficiency in cleaning results caused by inadequate, expired, or unsuitable products
              or equipment supplied by the Client.
            </p>

            <h2 id="conduct">11. Health, Safety &amp; Conduct</h2>
            <p>
              The Client agrees to maintain a safe working environment for Company staff, free of
              unsecured weapons, illegal substances, and known safety hazards. The Company reserves
              the right to end a visit immediately, with full payment still due, if staff safety is
              threatened, if staff are subjected to harassment, discrimination, or inappropriate
              conduct by any occupant of the property, or if hazardous conditions are discovered
              upon arrival.
            </p>
            <p>
              The Client agrees not to request that Company staff perform any task outside the scope
              of this Agreement, including but not limited to childcare, pet care beyond incidental
              contact, heavy lifting/furniture moving beyond light repositioning, exterior/roof
              work, or handling of hazardous materials.
            </p>

            <h2 id="non-solicitation">12. Non-Solicitation of Personnel</h2>
            <p>
              The Client agrees not to directly hire, engage, or contract with any current employee
              or contractor of the Company for cleaning or related services, outside of this
              Agreement with the Company, during the term of this Agreement and for twelve (12)
              months after its termination. Violation of this provision will obligate the Client to
              pay the Company a placement/referral fee of $2,500, reflecting the Company&rsquo;s
              investment in recruiting, training, and insuring its staff.
            </p>

            <h2 id="termination">13. Term &amp; Termination</h2>
            <p>
              This Agreement begins when the Client accepts it and continues on the frequency
              selected at booking until terminated by either Party. Either Party may terminate a
              recurring service arrangement with at least fourteen (14) days&rsquo; written notice
              (text or email is sufficient). The Company may terminate this Agreement immediately,
              without notice, for non-payment, safety concerns, abusive conduct toward staff, or
              violation of Section 12.
            </p>
            <p>
              Termination of this Agreement does not relieve the Client of responsibility for any
              outstanding balance owed for Services already performed.
            </p>

            <h2 id="photos">14. Photographs &amp; Marketing</h2>
            <p>
              The Company may take before/after photographs of cleaned areas for quality control,
              training, and marketing purposes (e.g., website, social media, advertising). No images
              will be used in a way that identifies the Client&rsquo;s specific address or includes
              recognizable personal items, unless the Client provides separate written consent. The
              Client may opt out of marketing use of photographs at any time by written request.
            </p>

            <h2 id="third-parties">15. Independent Relationship / No Third-Party Beneficiaries</h2>
            <p>
              This Agreement is between the Company and the Client only. Nothing in this Agreement
              creates any obligation to, or rights for, any third party, tenant, guest, or other
              occupant of the property who is not a party to this Agreement.
            </p>

            <h2 id="force-majeure">16. Force Majeure</h2>
            <p>
              The Company shall not be liable for delay, rescheduling, or failure to perform
              Services due to causes beyond its reasonable control, including severe weather,
              natural disaster, public health emergency, government order, or other events of force
              majeure. In such cases, the Company will reschedule the affected visit as soon as
              reasonably possible with no penalty to either Party.
            </p>

            <h2 id="entire-agreement">17. Entire Agreement, Severability &amp; Amendments</h2>
            <p>
              This Agreement, together with any signed quote, invoice, or online booking
              confirmation referencing it, constitutes the entire agreement between the Parties
              regarding the Services and supersedes all prior oral or written understandings. If any
              provision of this Agreement is found unenforceable, the remaining provisions remain in
              full force and effect. This Agreement may only be amended in writing signed by both
              Parties, except for pricing updates governed by Section 4 and scope updates reflected
              in a new signed quote.
            </p>

            <h2 id="governing-law">18. Governing Law &amp; Dispute Resolution</h2>
            <p>
              This Agreement shall be governed by the laws of the Commonwealth of Pennsylvania,
              without regard to conflict-of-law principles, regardless of the Client&rsquo;s
              location within PA or NJ. Any dispute arising from this Agreement shall first be
              addressed through good-faith direct communication between the Parties; if unresolved
              within thirty (30) days, either Party may pursue remedies in the applicable court of
              Bucks County, Pennsylvania, or through small claims court for qualifying disputes.
            </p>

            <h2 id="acceptance">19. Acknowledgment &amp; Acceptance</h2>
            <p>
              By checking the acceptance box on our quote or booking form, confirming a booking, or
              accepting cleaning services from the Company, the Client acknowledges having read,
              understood, and agreed to all terms of this Agreement, including the payment,
              cancellation, liability, and re-clean policies described above. This electronic
              acceptance has the same force and effect as a handwritten signature.
            </p>

            <h2 id="contact">Contact us</h2>
            <p>
              Questions about this Agreement? Reach us at{" "}
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
