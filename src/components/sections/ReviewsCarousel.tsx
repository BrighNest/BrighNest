"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { REVIEWS } from "@/lib/reviews";

const AUTO_MS = 5500;

export function ReviewsCarousel() {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const hovering = useRef(false);

  const pageCount = Math.ceil(REVIEWS.length / perPage);
  const safePage = Math.min(page, pageCount - 1);

  // Responsive per-page via matchMedia (3 desktop / 1 mobile).
  useEffect(() => {
    const mq = window.matchMedia("(max-width:860px)");
    const update = () => {
      setPerPage(mq.matches ? 1 : 3);
      setPage(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Auto-advance, paused while hovered.
  useEffect(() => {
    const id = setInterval(() => {
      if (hovering.current) return;
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  // Touch swipe (mobile). Horizontal drag past the threshold flips the page;
  // vertical scrolls are ignored so the swipe never hijacks page scrolling.
  const SWIPE_PX = 45;
  const touch = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    hovering.current = true; // pause auto-advance while interacting
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    hovering.current = false;
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <div
      className="rev-carousel"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div
        className="rev-view"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="rev-track"
          style={{ transform: `translateX(-${safePage * 100}%)` }}
        >
          {REVIEWS.map((r) => (
            <div className="rev-item" key={r.name}>
              <div
                className="card rev-card"
                style={{ background: "var(--ink2)", borderColor: "var(--lineD)", padding: 30 }}
              >
                <span className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <p
                  style={{
                    fontSize: 16.5,
                    lineHeight: 1.5,
                    margin: "14px 0 20px",
                    color: "#F3F1EC",
                    fontWeight: 500,
                  }}
                >
                  {r.quote}
                </p>
                <div className="fx ac gap12 rev-auth">
                  <div className="rev-mono" aria-hidden="true">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{r.name}</div>
                    <div style={{ color: "#A6A39B", fontSize: 12.5 }}>
                      {r.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rev-nav">
        <button className="rev-arrow" onClick={prev} aria-label="Previous reviews">
          <Icon name="chevronLeft" size={20} />
        </button>
        <div className="rev-dots">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              className={i === safePage ? "rev-dot on" : "rev-dot"}
              onClick={() => setPage(i)}
              aria-label={`Go to reviews page ${i + 1}`}
              aria-current={i === safePage}
            />
          ))}
        </div>
        <button className="rev-arrow" onClick={next} aria-label="Next reviews">
          <Icon name="chevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}
