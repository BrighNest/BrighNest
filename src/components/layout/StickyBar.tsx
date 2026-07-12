"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

/**
 * Sticky bottom Call / Quote bar shown on mobile only (landing page).
 * Adds padding to <body> so it never overlaps the footer.
 */
export function StickyBar({ quoteHref = "/#quote" }: { quoteHref?: string }) {
  useEffect(() => {
    document.body.classList.add("has-stickybar");
    return () => document.body.classList.remove("has-stickybar");
  }, []);

  return (
    <div className="stickybar">
      <a
        href={BUSINESS.phoneHref}
        className="btn btn-line"
        style={{ flex: 1, color: "#F3F1EC", borderColor: "rgba(243,241,236,.35)" }}
      >
        Call
      </a>
      <Link href={quoteHref} className="btn btn-gold" style={{ flex: 2 }}>
        Get a Free Quote
      </Link>
    </div>
  );
}
