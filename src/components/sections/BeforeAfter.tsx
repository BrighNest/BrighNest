"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const BEFORE_BG =
  "repeating-linear-gradient(135deg,#e6e3d9 0 13px,#dcd8cb 13px 26px)";
const AFTER_BG =
  "repeating-linear-gradient(135deg,#f4efe0 0 13px,#efe8d3 13px 26px)";

/** One full-bleed layer: real photo when a path is set, striped fallback if not. */
function Layer({
  src,
  alt,
  position,
  fallbackBg,
  fallbackLabel,
}: {
  src: string;
  alt: string;
  /** CSS object-position — which part of the photo survives the cover crop. */
  position?: string;
  fallbackBg: string;
  fallbackLabel: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:860px) 100vw, (max-width:1080px) 50vw, 33vw"
        style={{ objectFit: "cover", objectPosition: position ?? "50% 50%" }}
        draggable={false}
      />
    );
  }
  return (
    <div
      className="ph"
      data-l={fallbackLabel}
      style={{ position: "absolute", inset: 0, borderRadius: 0, background: fallbackBg }}
    />
  );
}

/**
 * Draggable before/after reveal for a single pair. The top (after) layer is
 * clipped with clip-path inset; the handle sets a percentage clamped 2–98%.
 * Supports mouse, touch, and keyboard (arrow keys on the handle). Presentational
 * and controlled — the parent decides which pair to show.
 */
export function BeforeAfter({
  pair,
  height,
}: {
  pair: Project;
  /** Optional inline CSS height; when omitted the frame is sized by CSS
      (.project-card .ba uses a fixed height on desktop, aspect-ratio on mobile). */
  height?: string;
}) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    p = Math.max(2, Math.min(98, p));
    setPct(p);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      (e.target as Element).setPointerCapture?.(e.pointerId);
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.buttons !== 1) return;
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(2, p - 3));
    if (e.key === "ArrowRight") setPct((p) => Math.min(98, p + 3));
  }, []);

  const beforeAlt = `${pair.label} — before cleaning`;
  const afterAlt = `${pair.label} — after cleaning`;

  return (
    <div
      className="ba"
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      style={{ height }}
    >
      {/* Before (full width, underneath — shows on the LEFT of the handle) */}
      <Layer src={pair.before} alt={beforeAlt} position={pair.beforePos} fallbackBg={BEFORE_BG} fallbackLabel="BEFORE · DUSTY 1600×900" />
      {/* After (clipped reveal on top, right of the handle). Both photos stay
          mounted at all times, so the browser has them decoded before the first
          drag — the wipe never waits on a network request. */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pct}%)` }}>
        <Layer src={pair.after} alt={afterAlt} position={pair.afterPos} fallbackBg={AFTER_BG} fallbackLabel="AFTER · SPOTLESS 1600×900" />
        {/* Clipped with the layer, so it only shows over the revealed photo.
            Fades out gradually as the handle nears the right edge and the
            "after" side shrinks away — opacity tracks the drag itself. */}
        <span className="ba-tag" style={{ right: 12, opacity: clamp01((85 - pct) / 15) }}>After</span>
      </div>
      {/* Fades out gradually as the handle nears the left edge. */}
      <span className="ba-tag" style={{ left: 12, opacity: clamp01((pct - 15) / 15) }}>Before</span>
      <div className="ba-handle" style={{ left: `${pct}%` }}>
        <div
          className="ba-knob"
          role="slider"
          tabIndex={0}
          aria-label="Reveal before and after"
          aria-valuemin={2}
          aria-valuemax={98}
          aria-valuenow={Math.round(pct)}
          onKeyDown={onKeyDown}
        >
          ◄ ►
        </div>
      </div>
    </div>
  );
}
