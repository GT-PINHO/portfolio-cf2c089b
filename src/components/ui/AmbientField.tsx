"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import {
  AMBIENT_PARAMS,
  decayPulse,
  getAmbientSnapshot,
  subscribeAmbient,
  type AmbientMode,
  type AmbientParams,
} from "../../lib/ambient-intensity";

type Block = {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  phase: number;
  speed: number;
  spin: number;
  floatAmp: number;
  baseAlpha: number;
  hub: boolean;
};

type Pos = { x: number; y: number; hub: boolean; near: number };

const LERP = 0.06;
const PARAM_LERP_MS = 600;
const BLOCK_COUNT_DESKTOP = 36;
const BLOCK_COUNT_MOBILE = 18;
const LINK_DIST = 175;
const PULSE_DECAY_PER_S = 1 / 0.4; // ~400ms

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function randSize(depth: number, hub: boolean) {
  if (hub) return (28 + Math.random() * 26) * (0.7 + depth * 0.4);
  const roll = Math.random();
  if (roll > 0.75) return (18 + Math.random() * 16) * depth;
  if (roll > 0.4) return (12 + Math.random() * 10) * depth;
  return (7 + Math.random() * 8) * depth;
}

function makeBlocks(count: number, w: number, h: number): Block[] {
  const blocks: Block[] = [];
  const hubs = Math.max(3, Math.floor(count * 0.12));

  for (let i = 0; i < count; i++) {
    const hub = i < hubs;
    const depth = hub ? 0.55 + Math.random() * 0.45 : 0.3 + Math.random() * 0.7;
    const size = randSize(depth, hub);
    const dir = Math.random() > 0.5 ? 1 : -1;
    blocks.push({
      x: Math.random() * w,
      y: Math.random() * h,
      z: depth,
      w: size,
      h: size * (0.7 + Math.random() * 0.55),
      phase: Math.random() * Math.PI * 2,
      speed: hub ? 0.12 + Math.random() * 0.18 : 0.18 + Math.random() * 0.42,
      spin: dir * (hub ? 0.12 + Math.random() * 0.18 : 0.18 + Math.random() * 0.55),
      floatAmp: hub ? 14 + Math.random() * 18 : 18 + Math.random() * 32,
      baseAlpha: hub ? 0.18 + Math.random() * 0.1 : 0.14 + Math.random() * 0.1,
      hub,
    });
  }
  return blocks;
}

function readAmbientRgb(): [number, number, number] {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--ambient-rgb")
    .trim();
  const parts = raw.split(",").map((n) => Number(n.trim()));
  if (parts.length === 3 && parts.every((n) => Number.isFinite(n))) {
    return [parts[0], parts[1], parts[2]];
  }
  return [6, 182, 212];
}

/** Shift HSL-ish on RGB toward a hue offset (approx). */
function shiftRgb(
  rgb: [number, number, number],
  hueShift: number,
): [number, number, number] {
  if (!hueShift) return rgb;
  const t = (hueShift % 360) / 360;
  const [r, g, b] = rgb;
  return [
    Math.round(lerp(r, Math.min(255, r + 40 * t), 0.55)),
    Math.round(lerp(g, Math.min(255, g + 20 * (1 - t)), 0.4)),
    Math.round(lerp(b, Math.min(255, b + 60 * t), 0.5)),
  ];
}

/**
 * Campo ambient global: cubos + elos, com intensidade por modo (hero/ambient/reactive).
 */
export default function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spot = spotRef.current;
    const glow = glowRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !spot || !glow || !wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let baseRgb = readAmbientRgb();
    let blocks = makeBlocks(coarse ? BLOCK_COUNT_MOBILE : BLOCK_COUNT_DESKTOP, 1, 1);
    let raf = 0;
    let running = true;
    let inViewport = true;
    let lastFrame = 0;

    const mouse = { x: window.innerWidth * 0.62, y: window.innerHeight * 0.28 };
    const soft = { x: mouse.x, y: mouse.y };
    const scrollBoost = { current: 0 };
    let t0 = performance.now();

    let currentMode: AmbientMode = "ambient";
    let params: AmbientParams = { ...AMBIENT_PARAMS.ambient };
    let targetParams: AmbientParams = { ...AMBIENT_PARAMS.ambient };
    let paramT = 1;
    let hueShift = 0;
    let pulse = 0;
    let isMobile = window.innerWidth < 768;

    const applyMode = (mode: AmbientMode) => {
      const forced = isMobile ? "ambient" : mode;
      if (forced === currentMode && paramT >= 1) {
        currentMode = forced;
        targetParams = { ...AMBIENT_PARAMS[forced] };
        if (isMobile) targetParams.density *= 0.6; // −40%
        return;
      }
      currentMode = forced;
      targetParams = { ...AMBIENT_PARAMS[forced] };
      if (isMobile) targetParams.density *= 0.6;
      paramT = 0;
    };

    applyMode(getAmbientSnapshot().mode);

    const unsub = subscribeAmbient(() => {
      const snap = getAmbientSnapshot();
      applyMode(snap.mode);
      hueShift = snap.hueShift;
      pulse = snap.pulse;
    });

    const resize = () => {
      isMobile = window.innerWidth < 768;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const baseCount = coarse || isMobile ? BLOCK_COUNT_MOBILE : BLOCK_COUNT_DESKTOP;
      blocks = makeBlocks(baseCount, w, h);
      applyMode(getAmbientSnapshot().mode);
    };

    const onMove = (e: MouseEvent) => {
      if (coarse) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = window.scrollY / max;
      scrollBoost.current = p;
      if (coarse || reduced) {
        mouse.x = w * (0.35 + p * 0.3);
        mouse.y = h * (0.22 + Math.sin(p * Math.PI) * 0.18);
      }
    };

    const drawBlockLocal = (
      b: Block,
      alpha: number,
      near: number,
      t: number,
      rgb: [number, number, number],
      allowLarge: boolean,
    ) => {
      if (b.hub && !allowLarge) return;
      const [r, g, bl] = rgb;
      const lw = b.hub ? 1.25 : 1;
      const hw = b.w / 2;
      const hh = b.h / 2;
      const left = -hw;
      const top = -hh;
      const a = Math.min(0.42, alpha);

      const ex = b.w * 0.32 * b.z;
      const ey = b.h * 0.26 * b.z;

      ctx.beginPath();
      ctx.moveTo(left + b.w, top);
      ctx.lineTo(left + b.w + ex, top - ey);
      ctx.lineTo(left + b.w + ex, top + b.h - ey);
      ctx.lineTo(left + b.w, top + b.h);
      ctx.closePath();
      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${a * 0.18})`;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${a * 0.7})`;
      ctx.lineWidth = lw;
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(left + ex * 0.55, top - ey);
      ctx.lineTo(left + b.w + ex, top - ey);
      ctx.lineTo(left + b.w, top);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${a * 0.1 + near * 0.06})`;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${a * 0.55})`;
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${a * (b.hub ? 0.28 : 0.2)})`;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${a * (b.hub ? 1.35 : 1.15)})`;
      ctx.beginPath();
      ctx.rect(left, top, b.w, b.h);
      ctx.fill();
      ctx.stroke();

      const pulseDot = b.hub ? 0.5 + Math.sin(t * 1.6 + b.phase) * 0.5 : near;
      if (pulseDot > 0.2 || b.hub) {
        const rad = (b.hub ? 2 : 1) + pulseDot * (b.hub ? 2.2 : 1.3);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${0.25 + pulseDot * 0.45})`;
        ctx.arc(0, 0, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawParticle = (
      x: number,
      y: number,
      alpha: number,
      rgb: [number, number, number],
    ) => {
      const [r, g, bl] = rgb;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha * 0.55})`;
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawLinks = (
      positions: Pos[],
      t: number,
      rgb: [number, number, number],
      opacityMul: number,
    ) => {
      const [r, g, bl] = rgb;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const a = positions[i];
          const b = positions[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const maxD = a.hub || b.hub ? LINK_DIST * 1.35 : LINK_DIST;
          if (dist > maxD) continue;

          const prox = 1 - dist / maxD;
          const energy = Math.max(a.near, b.near);
          const alpha =
            (0.05 + prox * 0.12 + energy * 0.1) *
            (a.hub || b.hub ? 1.3 : 1) *
            opacityMul;
          if (alpha < 0.03) continue;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
          ctx.lineWidth = a.hub || b.hub ? 1.1 : 0.7;
          ctx.setLineDash(a.hub && b.hub ? [3, 5] : [2, 6]);
          ctx.lineDashOffset = -t * 14;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
    };

    const blockPose = (b: Block, t: number, speedMul: number) => {
      const amp = b.floatAmp;
      const ox =
        Math.sin(t * b.speed * speedMul + b.phase) * amp +
        Math.sin(t * b.speed * 0.37 * speedMul + b.phase * 1.7) * amp * 0.35;
      const oy =
        Math.cos(t * b.speed * 0.9 * speedMul + b.phase) * amp * 0.85 +
        Math.sin(t * b.speed * 0.55 * speedMul + b.phase) * amp * 0.4;
      const cx = b.x + ox;
      const cy = b.y + oy;
      const angle =
        t * b.spin * speedMul +
        b.phase +
        Math.sin(t * b.speed * 0.6 * speedMul + b.phase) * 0.18;
      const scale =
        0.92 +
        b.z * 0.08 +
        Math.sin(t * b.speed * 1.1 * speedMul + b.phase) * 0.06 +
        (b.hub ? 0.04 : 0);

      return { cx, cy, angle, scale };
    };

    const paintFrame = (t: number) => {
      const rgb = shiftRgb(baseRgb, hueShift * pulse);
      const speedMul = 1 + pulse * 2.2;
      const density = params.density;
      const opacityMul = params.opacity;
      const allowLarge = params.largeBlocks;
      const visibleCount = Math.max(4, Math.floor(blocks.length * density));

      const positions: Pos[] = [];
      const poses: ReturnType<typeof blockPose>[] = [];

      for (let i = 0; i < visibleCount; i++) {
        const b = blocks[i];
        const pose = blockPose(b, t, speedMul);
        poses.push(pose);
        const dist = Math.hypot(soft.x - pose.cx, soft.y - pose.cy);
        const near = Math.max(0, 1 - dist / (280 + b.z * 150));
        positions.push({ x: pose.cx, y: pose.cy, hub: b.hub && allowLarge, near });
      }

      drawLinks(positions, t, rgb, opacityMul);

      for (let i = 0; i < visibleCount; i++) {
        const b = blocks[i];
        const pose = poses[i];
        const near = positions[i].near;
        const alpha = Math.min(0.4, (b.baseAlpha + near * 0.16) * opacityMul);
        const boost = near * 0.45;

        if (!allowLarge && !b.hub) {
          drawParticle(pose.cx, pose.cy, alpha * 1.4, rgb);
          if (b.w < 14) continue;
        }

        if (b.hub && !allowLarge) {
          drawParticle(pose.cx, pose.cy, alpha, rgb);
          continue;
        }

        ctx.save();
        ctx.translate(pose.cx, pose.cy);
        ctx.rotate(pose.angle + boost);
        ctx.scale(pose.scale * (1 + near * 0.08), pose.scale * (1 + near * 0.08));
        drawBlockLocal(b, alpha, near, t, rgb, allowLarge);
        ctx.restore();
      }

      // Máscara visual via CSS; opacidade do canvas wrapper
      canvas.style.opacity = String(0.55 + opacityMul * 0.4);
      wrap.dataset.mode = currentMode;
    };

    const tick = (now: number) => {
      if (!running || !inViewport) return;

      const fps = params.fps;
      const minDelta = 1000 / fps;
      if (now - lastFrame < minDelta - 0.5) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min(0.05, (now - lastFrame) / 1000 || 0.016);
      lastFrame = now;

      if (paramT < 1) {
        paramT = Math.min(1, paramT + (dt * 1000) / PARAM_LERP_MS);
        const ease = 1 - Math.pow(1 - paramT, 3);
        params = {
          density: lerp(params.density, targetParams.density, ease),
          opacity: lerp(params.opacity, targetParams.opacity, ease),
          fps: lerp(params.fps, targetParams.fps, ease),
          largeBlocks: paramT > 0.5 ? targetParams.largeBlocks : params.largeBlocks,
        };
        // Snap toward target each frame more smoothly
        params.density = lerp(params.density, targetParams.density, 0.12);
        params.opacity = lerp(params.opacity, targetParams.opacity, 0.12);
        params.fps = lerp(params.fps, targetParams.fps, 0.12);
      }

      if (pulse > 0) {
        decayPulse(PULSE_DECAY_PER_S * dt);
        pulse = getAmbientSnapshot().pulse;
        hueShift = getAmbientSnapshot().hueShift;
      }

      const t = (now - t0) / 1000;

      soft.x = lerp(soft.x, mouse.x, LERP);
      soft.y = lerp(soft.y, mouse.y, LERP);

      if (coarse) {
        const idleX = w * 0.5 + Math.sin(t * 0.12) * w * 0.18;
        const idleY = h * 0.35 + Math.cos(t * 0.09) * h * 0.12;
        soft.x = lerp(soft.x, idleX, 0.02);
        soft.y = lerp(soft.y, idleY, 0.02);
      }

      const intensity = (0.5 + scrollBoost.current * 0.28) * params.opacity;
      spot.style.setProperty("--lx", `${soft.x}px`);
      spot.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--lx", `${soft.x}px`);
      glow.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--gi", String(intensity));

      ctx.clearRect(0, 0, w, h);
      paintFrame(t);

      raf = requestAnimationFrame(tick);
    };

    const drawStatic = () => {
      soft.x = mouse.x;
      soft.y = mouse.y;
      params = { ...targetParams };
      spot.style.setProperty("--lx", `${soft.x}px`);
      spot.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--lx", `${soft.x}px`);
      glow.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--gi", String(0.55 * params.opacity));
      ctx.clearRect(0, 0, w, h);
      paintFrame(0);
    };

    const startLoop = () => {
      if (reduced || !running || !inViewport) return;
      cancelAnimationFrame(raf);
      lastFrame = 0;
      t0 = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      cancelAnimationFrame(raf);
    };

    resize();
    onScroll();

    if (reduced) {
      drawStatic();
    } else {
      startLoop();
    }

    const onVisibility = () => {
      running = !document.hidden;
      if (running && inViewport && !reduced) startLoop();
      else stopLoop();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        if (inViewport && running && !reduced) startLoop();
        else stopLoop();
      },
      { threshold: 0.01 },
    );
    io.observe(wrap);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      stopLoop();
      unsub();
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="ambient-field pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      data-mode="ambient"
    >
      <div
        ref={glowRef}
        className="absolute inset-0 ambient-glow"
        style={
          {
            "--lx": "62%",
            "--ly": "28%",
            "--gi": "0.5",
          } as CSSProperties
        }
      />
      <div
        ref={spotRef}
        className="absolute inset-0 ambient-spot"
        style={
          {
            "--lx": "62%",
            "--ly": "28%",
          } as CSSProperties
        }
      />
      <canvas ref={canvasRef} className="ambient-canvas absolute inset-0" />
      <div className="absolute inset-0 ambient-vignette" />
    </div>
  );
}
