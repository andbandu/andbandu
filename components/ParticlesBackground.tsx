"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle colors matched to the ProfileCard holographic foil & gold palette
    const colors = [
      "#fedc5a", // gold
      "#a855f7", // violet
      "#38bdf8", // cyan
      "#c084fc", // lavender
      "#818cf8", // indigo
    ];

    // Mouse tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    // Responsive particle count (subtle and elegant, never overcrowded)
    const getParticleCount = () => {
      const area = width * height;
      if (width < 768) return Math.min(30, Math.floor(area / 28000));
      return Math.min(65, Math.floor(area / 22000));
    };

    let particles: Particle[] = [];

    const createParticle = (): Particle => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
        color,
        baseAlpha: Math.random() * 0.35 + 0.25,
        alpha: Math.random() * 0.35 + 0.25,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      };
    };

    const init = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    // Pixel ratio scaling for high-DPI / Retina displays
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      init();
    };

    handleResize();

    const onPointerMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onPointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    const maxLinkDistance = 120;
    const mouseLinkDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Subtle alpha pulsation
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.12;

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.fill();

        // 2. Connect to mouse if in proximity
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (distMouse < mouseLinkDistance) {
          const mouseOpacity = (1 - distMouse / mouseLinkDistance) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = mouseOpacity;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // 3. Connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxLinkDistance) {
            const lineOpacity = (1 - dist / maxLinkDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = lineOpacity;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

export default ParticlesBackground;

