"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

const SERVICE_OPTIONS = [
  "Residential cleaning",
  "Commercial cleaning",
  "Post-construction",
  "Window cleaning",
  "Deep cleaning",
];

/**
 * Quote form shared by the landing page and service pages.
 * - Landing: a service <select> (`lockedService` omitted).
 * - Service page: `lockedService` renders a read-only, pre-filled field.
 *
 * Fields use floating labels: the label rests inside the field and lifts
 * to the top-left on focus / when filled (driven by `:placeholder-shown`,
 * so every input carries a single-space placeholder). Submits to Formspree;
 * on success it swaps to an inline confirmation card, on failure it keeps
 * the filled form and shows a call-us fallback line.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdnjrgr";

export function QuoteForm({ lockedService }: { lockedService?: string }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        className="card qf-card qf-success"
        role="status"
        aria-live="polite"
      >
        <div className="qf-success-check">
          <Icon name="check" size={30} strokeWidth={2.4} />
        </div>
        <h3 className="disp qf-success-title">Request received</h3>
        <p className="qf-success-text">
          Thanks — we&rsquo;ll get back to you with your flat-rate quote within 24
          hours. Need it sooner? Just give us a call.
        </p>
      </div>
    );
  }

  return (
    <form className="card qf-card" onSubmit={handleSubmit}>
      <div className="qf-grid">
        <Field
          id="qf-name"
          name="name"
          label="Full name"
          icon="user"
          required
          minLength={2}
          autoComplete="name"
          title="Please enter your name."
        />
        <Field
          id="qf-phone"
          name="phone"
          label="Phone number"
          icon="phone"
          type="tel"
          required
          inputMode="tel"
          pattern="[0-9+().\-\s]{7,}"
          autoComplete="tel"
          title="Enter a valid phone number (at least 7 digits)."
        />
        <Field
          id="qf-email"
          name="email"
          label="Email address"
          icon="mail"
          type="email"
          required
          autoComplete="email"
          title="Enter a valid email address."
        />

        {lockedService ? (
          <div className="qf-field qf-field--filled">
            <span className="qf-ic" aria-hidden="true">
              <Icon name="home" size={19} />
            </span>
            <input
              id="qf-service"
              name="service"
              className="field qf-input"
              value={lockedService}
              readOnly
              aria-label="Service"
            />
            <label htmlFor="qf-service" className="qf-label">
              Service
            </label>
          </div>
        ) : (
          <div className="qf-field qf-field--filled">
            <span className="qf-ic" aria-hidden="true">
              <Icon name="home" size={19} />
            </span>
            <select
              id="qf-service"
              name="service"
              className="field qf-input qf-select"
              defaultValue={SERVICE_OPTIONS[0]}
              aria-label="Service"
              required
            >
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <label htmlFor="qf-service" className="qf-label">
              Service
            </label>
            <span className="qf-chevron" aria-hidden="true">
              <Icon name="chevronDown" size={16} strokeWidth={2.4} />
            </span>
          </div>
        )}

        <div className="qf-field qf-field--area">
          <span className="qf-ic qf-ic--top" aria-hidden="true">
            <Icon name="edit" size={19} />
          </span>
          <textarea
            id="qf-message"
            name="message"
            className="field qf-input"
            rows={3}
            placeholder=" "
          />
          <label htmlFor="qf-message" className="qf-label">
            Tell us about your space
          </label>
        </div>

        <label className="slate qf-consent qf-agree">
          <input
            type="checkbox"
            name="consent"
            value="Agreed to Service Agreement and Privacy Policy"
            required
            className="qf-agree-box"
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "To send your request, please confirm you agree to the Service Agreement and Privacy Policy.",
              )
            }
            onChange={(e) => e.currentTarget.setCustomValidity("")}
          />
          <span>
            I have read and agree to the{" "}
            <Link href="/service-agreement" target="_blank" rel="noopener noreferrer">
              Service Agreement
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="btn btn-gold qf-submit"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Get my free quote"}
        </button>

        {error && (
          <p className="tc qf-error" role="alert">
            Something went wrong and your request wasn&rsquo;t sent. Please try
            again — or just call us.
          </p>
        )}
      </div>
    </form>
  );
}

/** One floating-label text input with a leading icon. */
function Field({
  id,
  name,
  label,
  icon,
  type = "text",
  required,
  autoComplete,
  pattern,
  minLength,
  title,
  inputMode,
}: {
  id: string;
  name: string;
  label: string;
  icon: IconName;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  minLength?: number;
  title?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="qf-field">
      <span className="qf-ic" aria-hidden="true">
        <Icon name={icon} size={19} />
      </span>
      <input
        id={id}
        name={name}
        className="field qf-input"
        type={type}
        placeholder=" "
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        minLength={minLength}
        title={title}
        inputMode={inputMode}
      />
      <label htmlFor={id} className="qf-label">
        {label}
      </label>
    </div>
  );
}
