import { useEffect, useRef, type CSSProperties } from "react";

type Block = {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  phase: number;
  speed: number;
  /** rad/s (giro contínuo) */
  spin: number;
  floatAmp: number;
  baseAlpha: number;
  hub: boolean;
};

type Pos = { x: number; y: number; hub: boolean; near: number };

const LERP = 0.06;
const BLOCK_COUNT_DESKTOP = 36;
const BLOCK_COUNT_MOBILE = 18;
const LINK_DIST = 175;

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

/**
 * Campo ambient: blocos flutuando + girando, com elos quânticos.
 */
export default function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spot = spotRef.current;
    const glow = glowRef.current;
    if (!canvas || !spot || !glow) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let rgb = readAmbientRgb();
    let blocks = makeBlocks(coarse ? BLOCK_COUNT_MOBILE : BLOCK_COUNT_DESKTOP, 1, 1);
    let raf = 0;
    let running = true;

    const mouse = { x: window.innerWidth * 0.62, y: window.innerHeight * 0.28 };
    const soft = { x: mouse.x, y: mouse.y };
    const scrollBoost = { current: 0 };
    let t0 = performance.now();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      blocks = makeBlocks(coarse ? BLOCK_COUNT_MOBILE : BLOCK_COUNT_DESKTOP, w, h);
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

    /** Bloco 3D leve (tamanho compacto) (frente + topo + lateral) */
    const drawBlockLocal = (b: Block, alpha: number, near: number, t: number) => {
      const [r, g, bl] = rgb;
      const lw = b.hub ? 1.25 : 1;
      const hw = b.w / 2;
      const hh = b.h / 2;
      const left = -hw;
      const top = -hh;
      const a = Math.min(0.42, alpha);

      const ex = b.w * 0.32 * b.z;
      const ey = b.h * 0.26 * b.z;

      // lateral
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

      // topo
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

      // frente
      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${a * (b.hub ? 0.28 : 0.2)})`;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${a * (b.hub ? 1.35 : 1.15)})`;
      ctx.beginPath();
      ctx.rect(left, top, b.w, b.h);
      ctx.fill();
      ctx.stroke();

      const pulse = b.hub ? 0.5 + Math.sin(t * 1.6 + b.phase) * 0.5 : near;
      if (pulse > 0.2 || b.hub) {
        const rad = (b.hub ? 2 : 1) + pulse * (b.hub ? 2.2 : 1.3);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${0.25 + pulse * 0.45})`;
        ctx.arc(0, 0, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawLinks = (positions: Pos[], t: number) => {
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
          const alpha = (0.05 + prox * 0.12 + energy * 0.1) * (a.hub || b.hub ? 1.3 : 1);
          if (alpha < 0.05) continue;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
          ctx.lineWidth = a.hub || b.hub ? 1.1 : 0.7;
          ctx.setLineDash(a.hub && b.hub ? [3, 5] : [2, 6]);
          ctx.lineDashOffset = -t * 14;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.setLineDash([]);

          if (energy > 0.45 && prox > 0.35) {
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${energy * 0.35})`;
            ctx.arc(mx, my, 1.4 + energy, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const blockPose = (b: Block, t: number) => {
      const amp = b.floatAmp;
      // órbita / flutuação em 2 eixos (parecem suspensos)
      const ox =
        Math.sin(t * b.speed + b.phase) * amp +
        Math.sin(t * b.speed * 0.37 + b.phase * 1.7) * amp * 0.35;
      const oy =
        Math.cos(t * b.speed * 0.9 + b.phase) * amp * 0.85 +
        Math.sin(t * b.speed * 0.55 + b.phase) * amp * 0.4;
      const cx = b.x + ox;
      const cy = b.y + oy;
      // giro contínuo + leve balanço
      const angle =
        t * b.spin +
        b.phase +
        Math.sin(t * b.speed * 0.6 + b.phase) * 0.18;
      // escala “respirando” no espaço
      const scale =
        0.92 +
        b.z * 0.08 +
        Math.sin(t * b.speed * 1.1 + b.phase) * 0.06 +
        (b.hub ? 0.04 : 0);

      return { cx, cy, angle, scale };
    };

    const paintFrame = (t: number) => {
      const positions: Pos[] = [];
      const poses: ReturnType<typeof blockPose>[] = [];

      for (const b of blocks) {
        const pose = blockPose(b, t);
        poses.push(pose);
        const dist = Math.hypot(soft.x - pose.cx, soft.y - pose.cy);
        const near = Math.max(0, 1 - dist / (280 + b.z * 150));
        positions.push({ x: pose.cx, y: pose.cy, hub: b.hub, near });
      }

      drawLinks(positions, t);

      blocks.forEach((b, i) => {
        const pose = poses[i];
        const near = positions[i].near;
        const alpha = Math.min(0.4, b.baseAlpha + near * 0.16);
        // perto do cursor: gira um pouco mais rápido visualmente (ângulo extra)
        const boost = near * 0.45;

        ctx.save();
        ctx.translate(pose.cx, pose.cy);
        ctx.rotate(pose.angle + boost);
        ctx.scale(pose.scale * (1 + near * 0.08), pose.scale * (1 + near * 0.08));
        drawBlockLocal(b, alpha, near, t);
        ctx.restore();
      });
    };

    const tick = (now: number) => {
      if (!running) return;
      const t = (now - t0) / 1000;

      soft.x = lerp(soft.x, mouse.x, LERP);
      soft.y = lerp(soft.y, mouse.y, LERP);

      if (coarse) {
        const idleX = w * 0.5 + Math.sin(t * 0.12) * w * 0.18;
        const idleY = h * 0.35 + Math.cos(t * 0.09) * h * 0.12;
        soft.x = lerp(soft.x, idleX, 0.02);
        soft.y = lerp(soft.y, idleY, 0.02);
      }

      const intensity = 0.5 + scrollBoost.current * 0.28;
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
      spot.style.setProperty("--lx", `${soft.x}px`);
      spot.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--lx", `${soft.x}px`);
      glow.style.setProperty("--ly", `${soft.y}px`);
      glow.style.setProperty("--gi", "0.55");
      ctx.clearRect(0, 0, w, h);
      paintFrame(0);
    };

    resize();
    onScroll();

    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(tick);
    }

    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduced) {
        t0 = performance.now();
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
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
      <canvas ref={canvasRef} className="absolute inset-0 opacity-95" />
      <div className="absolute inset-0 ambient-vignette" />
    </div>
  );
}
