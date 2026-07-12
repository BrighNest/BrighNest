"use client";

import { useLayoutEffect, useRef, useState } from "react";

export type FaqItem = { q: string; a: string };

/**
 * Accordion FAQ with a smooth open/close animation.
 *
 * Replaces native <details> (which can't be transitioned) and the fragile
 * grid-rows:0fr trick (which left closed content visible in some engines).
 * Each answer animates its max-height between 0 and the panel's measured
 * scrollHeight — deterministic across browsers. Content stays in the DOM,
 * so it is still server-rendered and crawlable.
 */
export function Faq({
  items,
  defaultOpen = -1,
}: {
  items: FaqItem[];
  /** Index open on first render (0 = first item, -1 = all closed). */
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      {items.map((f, i) => (
        <FaqRow
          key={f.q}
          item={f}
          isOpen={i === open}
          onToggle={() => setOpen((cur) => (cur === i ? -1 : i))}
        />
      ))}
    </>
  );
}

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  // The animated max-height in px. Starts collapsed unless open by default,
  // in which case a large value keeps SSR/first paint expanded before JS runs.
  const [maxH, setMaxH] = useState(isOpen ? 9999 : 0);

  useLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    setMaxH(isOpen ? el.scrollHeight : 0);
  }, [isOpen, item.a]);

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button
        type="button"
        className="faq-summary"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {item.q}
      </button>
      <div
        ref={bodyRef}
        className="fa-body"
        style={{ maxHeight: maxH }}
      >
        <div className="fa-inner">{item.a}</div>
      </div>
    </div>
  );
}
