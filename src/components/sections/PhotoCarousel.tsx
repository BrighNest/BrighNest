"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { PHOTOS } from "@/lib/projects";

/**
 * Manual photo carousel for the client's ordinary (mid-quality) shots on the
 * /gallery page. Reuses the ReviewsCarousel mechanics — a translateX track paged
 * by arrows, dots, and mobile swipe — but with NO autoplay. 3 per page on
 * desktop, 1 on mobile.
 */
export function PhotoCarousel() {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(PHOTOS.length / perPage));
  const safePage = Math.min(page, pageCount - 1);

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

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  // Touch swipe — horizontal past threshold flips the page; vertical is ignored.
  const SWIPE_PX = 45;
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
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
    <div className="rev-carousel photo-carousel">
      <div className="rev-view" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="rev-track" style={{ transform: `translateX(-${safePage * 100}%)` }}>
          {PHOTOS.map((photo, i) => (
            <div className="rev-item" key={i}>
              <div className="photo-card">
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width:860px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span className="ph photo-ph" data-l={photo.alt} role="img" aria-label={photo.alt} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rev-nav">
        <button className="rev-arrow" onClick={prev} aria-label="Previous photos">
          <Icon name="chevronLeft" size={20} />
        </button>
        <div className="rev-dots">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              className={i === safePage ? "rev-dot on" : "rev-dot"}
              onClick={() => setPage(i)}
              aria-label={`Go to photos page ${i + 1}`}
              aria-current={i === safePage}
            />
          ))}
        </div>
        <button className="rev-arrow" onClick={next} aria-label="Next photos">
          <Icon name="chevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}
