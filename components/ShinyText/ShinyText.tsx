"use client";

import React, { useRef, useEffect } from "react";
import "./ShinyText.css";

export interface ShinyTextProps {
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  shineWidth?: number;
  glow?: number;
  angle?: number;
  delay?: number;
  style?: React.CSSProperties;
}

const FALLOFF = [0, 0.25, 0.5, 0.75, 1];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const parseColor = (input: string): [number, number, number, number] | null => {
  const c = input.trim();
  if (c.startsWith("#")) {
    const hex = c.slice(1);
    const expand =
      hex.length === 3 || hex.length === 4
        ? hex
            .split("")
            .map((ch) => ch + ch)
            .join("")
        : hex;
    const num = parseInt(expand, 16);
    if (expand.length === 6) {
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255, 1];
    }
    if (expand.length === 8) {
      return [
        (num >> 24) & 255,
        (num >> 16) & 255,
        (num >> 8) & 255,
        (num & 255) / 255,
      ];
    }
  }
  const m = c.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i
  );
  if (m) {
    return [
      parseInt(m[1], 10),
      parseInt(m[2], 10),
      parseInt(m[3], 10),
      m[4] !== undefined ? parseFloat(m[4]) : 1,
    ];
  }
  return [255, 255, 255, 1];
};

const blend = (
  base: [number, number, number, number],
  shine: [number, number, number, number],
  amount: number
) => {
  const a = clamp(amount, 0, 1);
  const r = Math.round(base[0] * (1 - a) + shine[0] * a);
  const g = Math.round(base[1] * (1 - a) + shine[1] * a);
  const b = Math.round(base[2] * (1 - a) + shine[2] * a);
  const alpha = Number((base[3] * (1 - a) + shine[3] * a).toFixed(3));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  text,
  disabled = false,
  speed = 4,
  className = "",
  color = "#f4f4f5",
  shineColor = "#fedc5a",
  shineWidth = 25,
  glow = 0,
  angle = 120,
  delay = 1.5,
  style = {},
}) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const content = text || children;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let rafId = 0;
    let start: number | null = null;
    let timerId: NodeJS.Timeout | null = null;
    const base = parseColor(color) || [244, 244, 245, 1];
    const shine = parseColor(shineColor) || [254, 220, 90, 1];

    if (disabled) {
      root.style.backgroundImage = `linear-gradient(${color}, ${color})`;
      return;
    }

    const animate = (now: number) => {
      if (!start) start = now;
      const progress = ((now - start) / (speed * 1000)) % 1;
      const pos = -shineWidth + progress * (100 + shineWidth * 2);

      const half = shineWidth / 2;
      const stops: string[] = [];
      for (const side of [-1, 1]) {
        for (const f of FALLOFF) {
          const at = pos + side * half * (1 - f);
          const amt = f * f * (3 - 2 * f);
          stops.push(`${blend(base, shine, amt)} ${clamp(at, 0, 100).toFixed(1)}%`);
        }
      }

      root.style.backgroundImage = `linear-gradient(${angle}deg, ${color} 0%, ${blend(
        base,
        shine,
        0.8
      )} ${pos.toFixed(1)}%, ${color} 100%)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (timerId) clearTimeout(timerId);
    };
  }, [color, shineColor, speed, shineWidth, disabled, angle, delay]);

  return (
    <span
      ref={rootRef}
      className={`shiny-text ${className}`.trim()}
      style={{
        backgroundImage: `linear-gradient(${color}, ${color})`,
        ...style,
      }}
    >
      {content}
      {glow > 0 && (
        <span ref={glowRef} className="shiny-text__glow" aria-hidden="true">
          {content}
        </span>
      )}
    </span>
  );
};

export default ShinyText;

