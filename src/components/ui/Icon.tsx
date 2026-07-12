import type { CSSProperties } from "react";

/**
 * Inline stroke-icon set lifted verbatim from the design prototypes.
 * stroke-width 1.8, fill none, round caps/joins (via the `.ico` class).
 */
export const ICON_PATHS = {
  home: "M4 11l8-6 8 6 M6 10v9h12v-9 M10 19v-5h4v5",
  office: "M4 20h16 M6 20V5h9v15 M15 20V9h4v11 M9 8h3 M9 11h3 M9 14h3",
  build: "M14 7l3 3-9 9-4 1 1-4z M13 8l3 3 M17 3l4 4-2 2-4-4z",
  window: "M4 4h16v16H4z M12 4v16 M4 12h16",
  deep: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z",
  shield: "M12 3l7 3v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V6z M9 12l2 2 4-4",
  leaf: "M20 4C10 4 4 10 4 20 14 20 20 14 20 4z M8 16c3-4 6-6 10-8",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18z M12 8v4l3 2",
  star: "M12 3l2.6 6.3 6.4.5-4.9 4.1 1.6 6.6L12 17.3 6.3 20.6l1.6-6.6L3 9.8l6.4-.5z",
  tools: "M14 7l3 3-9 9-4 1 1-4z M17 3l4 4",
  calendar: "M4 7h16v13H4z M8 3v4 M16 3v4 M4 11h16",
  sparkle: "M12 4l1.6 4.9 4.9 1.6-4.9 1.6L12 17l-1.6-4.9L5.5 10.5l4.9-1.6z",
  check: "M4 12l5 5 11-11",
  chevronDown: "M6 9l6 6 6-6",
  chevronLeft: "M15 5l-7 7 7 7",
  chevronRight: "M9 5l7 7-7 7",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8z M4 20c0-4 4-6 8-6s8 2 8 6",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  edit: "M4 20h4l10-10-4-4L4 16z M13 5l4 4",
  instagram:
    "M7.5 3.5h9a4 4 0 014 4v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4z M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z M16.9 7.1l.01.01",
} as const;

export type IconName = keyof typeof ICON_PATHS;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 26, strokeWidth, className, style }: IconProps) {
  return (
    <svg
      className={`ico${className ? ` ${className}` : ""}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={strokeWidth ? { strokeWidth, ...style } : style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
