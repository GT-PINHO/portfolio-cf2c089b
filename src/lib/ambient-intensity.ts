"use client";

import { useEffect, useRef, useSyncExternalStore, type RefObject } from "react";

export type AmbientMode = "hero" | "ambient" | "reactive";

type AmbientState = {
  mode: AmbientMode;
  hueShift: number;
  pulse: number;
};

type Listener = () => void;

const MODE_PRIORITY: Record<AmbientMode, number> = {
  reactive: 3,
  hero: 2,
  ambient: 1,
};

let state: AmbientState = { mode: "ambient", hueShift: 0, pulse: 0 };
const listeners = new Set<Listener>();
const sectionModes = new Map<string, AmbientMode>();

function emit() {
  for (const l of listeners) l();
}

function resolveMode(): AmbientMode {
  let best: AmbientMode = "ambient";
  let bestPri = 0;
  for (const mode of sectionModes.values()) {
    const p = MODE_PRIORITY[mode];
    if (p >= bestPri) {
      bestPri = p;
      best = mode;
    }
  }
  return best;
}

function setResolvedMode() {
  const next = resolveMode();
  if (next !== state.mode) {
    state = { ...state, mode: next };
    emit();
  }
}

export function subscribeAmbient(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getAmbientSnapshot(): AmbientState {
  return state;
}

export function getAmbientServerSnapshot(): AmbientState {
  return { mode: "ambient", hueShift: 0, pulse: 0 };
}

export function setAmbientMode(id: string, mode: AmbientMode | null) {
  if (mode === null) sectionModes.delete(id);
  else sectionModes.set(id, mode);
  setResolvedMode();
}

/** Burst de velocidade (~400ms) + shift de matiz — usado pelo OperationSlider. */
export function setPulse(hueShift = 0) {
  state = { ...state, hueShift, pulse: 1 };
  emit();
}

export function decayPulse(amount: number) {
  if (state.pulse <= 0) return;
  const next = Math.max(0, state.pulse - amount);
  if (next === state.pulse) return;
  state = { ...state, pulse: next };
  emit();
}

export function useAmbientStore(): AmbientState {
  return useSyncExternalStore(
    subscribeAmbient,
    getAmbientSnapshot,
    getAmbientServerSnapshot,
  );
}

/**
 * Observa o elemento e registra o modo enquanto ≥50% na viewport.
 * Em mobile o AmbientField força `ambient` independentemente.
 */
export function useAmbientMode(
  mode: AmbientMode,
  key: string,
  ref?: RefObject<HTMLElement | null>,
) {
  const fallbackRef = useRef<HTMLElement | null>(null);
  const targetRef = ref ?? fallbackRef;

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAmbientMode(key, entry.isIntersecting ? mode : null);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      setAmbientMode(key, null);
    };
  }, [mode, key, targetRef]);

  return targetRef;
}

export type AmbientParams = {
  density: number;
  opacity: number;
  fps: number;
  largeBlocks: boolean;
};

export const AMBIENT_PARAMS: Record<AmbientMode, AmbientParams> = {
  hero: { density: 1, opacity: 1, fps: 60, largeBlocks: true },
  ambient: { density: 0.45, opacity: 0.3, fps: 30, largeBlocks: false },
  reactive: { density: 0.8, opacity: 0.55, fps: 60, largeBlocks: true },
};
