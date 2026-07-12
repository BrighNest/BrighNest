"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { BUSINESS } from "@/lib/constants";
import { SERVICE_LIST, servicePath } from "@/lib/services";
import logoWordmark from "@/../public/assets/logo-wordmark.png";

export type NavLink = { label: string; href: string };

/**
 * Sticky, blurred header shared by every page.
 * - Services: CSS hover dropdown (+ focus-within for keyboard) linking the 5 routes.
 * - `links`: page-specific anchor/nav links shown in the center on desktop.
 * - Mobile: hamburger toggles a stacked menu with the 5 services, links, and CTA.
 */
export function Header({
  links,
  homeHref = "/",
  quoteHref = "/#quote",
}: {
  links: NavLink[];
  homeHref?: string;
  /** CTA target — pages with their own #quote section pass "#quote" so the
      button scrolls in place instead of navigating to the homepage. */
  quoteHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div
        className="wide fx ac jb"
        style={{ paddingTop: 14, paddingBottom: 14 }}
      >
        <Link href={homeHref} className="fx ac" aria-label={`${BUSINESS.name} home`}>
          <Image
            src={logoWordmark}
            alt={BUSINESS.name}
            style={{ height: 38, width: "auto" }}
            preload
          />
        </Link>

        <nav className="fx ac gap24 hide-m" aria-label="Primary">
          <div className="hasdrop">
            <button
              type="button"
              className="navlink fx ac gap8"
              aria-haspopup="true"
              aria-expanded={false}
            >
              Services
              <Icon name="chevronDown" size={15} strokeWidth={2.4} />
            </button>
            <div className="drop" role="menu">
              {SERVICE_LIST.map((s) => (
                <Link key={s.slug} className="dropitem" href={servicePath(s.slug)} role="menuitem">
                  <span className="di-ic">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span>
                    <span className="di-t">{s.title}</span>
                    <br />
                    <span className="di-s">{s.short}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navlink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="fx ac gap14">
          <a
            href={BUSINESS.phoneHref}
            className="navlink hide-m"
            style={{ fontWeight: 700 }}
          >
            {BUSINESS.phoneDisplay}
          </a>
          <Link href={quoteHref} className="btn btn-ink hide-m">
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mob${open ? " open" : ""}`}
        style={{ borderTop: "1px solid var(--line)", background: "var(--paper)" }}
      >
        <div
          className="wide col"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingTop: 14,
            paddingBottom: 20,
          }}
        >
          <span className="eyebrow" style={{ padding: "10px 0 2px" }}>
            Services
          </span>
          {SERVICE_LIST.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="navlink"
              onClick={close}
              style={{ padding: "10px 0" }}
            >
              {s.title}
            </Link>
          ))}
          {links.length > 0 && (
            <div style={{ height: 1, background: "var(--line)", margin: "8px 0" }} />
          )}
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="navlink"
              onClick={close}
              style={{ padding: "12px 0" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={quoteHref}
            className="btn btn-ink"
            onClick={close}
            style={{ marginTop: 10 }}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
