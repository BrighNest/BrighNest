import type { CSSProperties } from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1nJ_ByqY2dT2yRyjnB9We-DISNuieZkM&ehbc=2E312F&z=10";

/**
 * Scale the embed up so Google's own chrome (logo, controls, bottom legend)
 * pushes past the framed edges and is clipped by the container's overflow.
 */
const EMBED_SCALE = 1.32;

/**
 * Google My Maps embed of the service area, framed to match the `.ph`
 * placeholder blocks it replaces (24px radius, hairline border).
 */
export function ServiceAreaMap({
  dark = false,
  style,
  className,
}: {
  dark?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
        border: `1px solid var(${dark ? "--lineD" : "--line"})`,
        ...style,
      }}
    >
      <iframe
        src={MAP_EMBED_URL}
        title="BrighNest Cleaning service area map — Bucks County & Greater Philadelphia"
        loading="lazy"
        allowFullScreen
        style={{
          display: "block",
          border: 0,
          width: "100%",
          height: "100%",
          transform: `scale(${EMBED_SCALE})`,
          transformOrigin: "center",
          // Static map — block all interaction (scroll, zoom, drag).
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
