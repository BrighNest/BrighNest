import type { CSSProperties } from "react";

/**
 * Striped placeholder standing in for real photography. Each block is
 * labeled with the intended shot (e.g. "BRIGHT MIAMI HOME 820×620").
 * Swap these for <Image> once real photos are available — keep the
 * aspect ratios noted in each label.
 */
export function Placeholder({
  label,
  className,
  style,
  dark = false,
}: {
  label: string;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
}) {
  return (
    <div
      className={`${dark ? "ph-d" : "ph"}${className ? ` ${className}` : ""}`}
      data-l={label}
      role="img"
      aria-label={label.replace(/\s+\d+×\d+$/, "").toLowerCase()}
      style={style}
    />
  );
}
