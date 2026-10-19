"use client";

import React, { useRef, useEffect } from "react";
import "./SpotlightCard.css";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  spotlightSize?: number;
  borderGlow?: number;
  intensity?: number;
  softness?: number;
  shape?: "circle" | "beam";
  proximity?: number;
  smoothing?: number;
  ambient?: boolean;
  flare?: boolean;
  grain?: number;
  style?: React.CSSProperties;
}

const NOISE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.08'/></svg>"
)}")`;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  color = "rgba(254, 220, 90, 0.12)",
  spotlightSize = 350,
  borderGlow = 0.8,
  intensity = 0.7,
  softness = 0.6,
  shape = "circle",
  proximity = 120,
  smoothing = 0.3,
  ambient = false,
  flare = true,
  grain = 0.05,
  style = {},
  ...rest
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLSpanElement>(null);
  const edgeRef = useRef<HTMLSpanElement>(null);
  const grainRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const light = lightRef.current;
    const edge = edgeRef.current;
    const noise = grainRef.current;
    if (!root || !light || !edge || !noise) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetOpacity = 0;
    let currentOpacity = 0;
    let isHovered = false;

    const onPointerMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      // Check proximity
      const dx = Math.max(0, -targetX, targetX - rect.width);
      const dy = Math.max(0, -targetY, targetY - rect.height);
      const distance = Math.hypot(dx, dy);

      if (distance <= proximity) {
        targetOpacity = 1 - (distance / proximity) * 0.8;
      } else {
        targetOpacity = 0;
      }
    };

    const onPointerEnter = () => {
      isHovered = true;
      targetOpacity = 1;
    };

    const onPointerLeave = () => {
      isHovered = false;
      targetOpacity = 0;
    };

    const update = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      currentOpacity += (targetOpacity - currentOpacity) * 0.12;

      const fillGradient = `radial-gradient(circle ${spotlightSize}px at ${currentX.toFixed(
        1
      )}px ${currentY.toFixed(1)}px, ${color} 0%, rgba(200, 160, 255, 0.04) 45%, transparent 70%)`;

      const edgeGradient = `radial-gradient(circle ${(spotlightSize * 0.6).toFixed(
        1
      )}px at ${currentX.toFixed(1)}px ${currentY.toFixed(
        1
      )}px, rgba(254, 220, 90, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 75%)`;

      light.style.background = fillGradient;
      light.style.opacity = (currentOpacity * intensity).toFixed(3);

      edge.style.background = edgeGradient;
      edge.style.opacity = (currentOpacity * borderGlow).toFixed(3);

      if (grain > 0) {
        noise.style.opacity = (currentOpacity * grain).toFixed(3);
      }

      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerenter", onPointerEnter);
    root.addEventListener("pointerleave", onPointerLeave);
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [color, spotlightSize, borderGlow, intensity, proximity, grain]);

  return (
    <div
      ref={rootRef}
      className={`spotlight-card ${className}`.trim()}
      style={style}
      {...rest}
    >
      <span ref={lightRef} className="spotlight-card__light" aria-hidden="true" />
      <span
        ref={grainRef}
        className="spotlight-card__grain"
        style={{ backgroundImage: NOISE }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
      <span className="spotlight-card__border" aria-hidden="true" />
      <span ref={edgeRef} className="spotlight-card__edge" aria-hidden="true" />
    </div>
  );
};

export default SpotlightCard;

