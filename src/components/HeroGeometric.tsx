import { motion, useReducedMotion } from 'motion/react';
import type { Easing } from 'motion';

// Cycle timings (fractions of total duration):
//   0 → 22%   pen draws the shape
//  22 → 72%   hold (fully visible)
//  72 → 88%   pen erases forward (continues past the end)
//  88 → 100%  gap (invisible, resets)
const TIMES: number[] = [0, 0.22, 0.72, 0.88, 1.0];
const EASE: Easing[] = ['easeOut', 'linear', 'easeIn', 'linear'];

export default function HeroGeometric() {
  const prefersReducedMotion = useReducedMotion();
  const staticMode = !!prefersReducedMotion;

  // ─── Stroke trace (hand-drawn) ───
  // pathLength=1 normalises every shape's perimeter to 1.
  // strokeDasharray=1 means one full-length dash.
  // Animating strokeDashoffset 1→0 traces the outline; 0→-1 erases it forward.
  const trace = { pathLength: 1, strokeDasharray: 1, fill: 'none' as const };

  const draw = (duration: number, delay: number) =>
    staticMode
      ? { strokeDashoffset: 0 }
      : {
          initial: { strokeDashoffset: 1 },
          animate: { strokeDashoffset: [1, 0, 0, -1, 1] },
          transition: {
            duration,
            times: TIMES,
            ease: EASE,
            delay,
            repeat: Infinity,
          },
        };

  // ─── Clip-path helpers (dimension groups, labels) ───
  function hClip(
    x: number,
    y: number,
    w: number,
    h: number,
    duration: number,
    delay: number
  ) {
    if (staticMode) return <rect x={x} y={y} width={w} height={h} />;
    return (
      <motion.rect
        y={y}
        height={h}
        animate={{ x: [x, x, x, x + w, x], width: [0, w, w, 0, 0] }}
        transition={{
          duration,
          times: TIMES,
          ease: 'easeInOut',
          delay,
          repeat: Infinity,
        }}
      />
    );
  }

  function vClip(
    x: number,
    y: number,
    w: number,
    h: number,
    duration: number,
    delay: number
  ) {
    if (staticMode) return <rect x={x} y={y} width={w} height={h} />;
    return (
      <motion.rect
        x={x}
        width={w}
        animate={{ y: [y, y, y, y + h, y], height: [0, h, h, 0, 0] }}
        transition={{
          duration,
          times: TIMES,
          ease: 'easeInOut',
          delay,
          repeat: Infinity,
        }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Clip-path definitions ── */}
        <defs>
          {/* Dashed reference lines through rect midpoints */}
          <clipPath id="c-dash-h">{hClip(37, 210, 526, 8, 16, 1.9)}</clipPath>
          <clipPath id="c-dash-v">{vClip(297, 41, 8, 346, 18, 2.5)}</clipPath>

          {/* Dimension H — top-right corner (x: inner-right 512 → outer-right 560) */}
          <clipPath id="c-dim-h">{hClip(509, 22, 54, 14, 14, 2.2)}</clipPath>

          {/* Dimension V — bottom-right corner (y: inner-bottom 336 → outer-bottom 384) */}
          <clipPath id="c-dim-v">{vClip(571, 333, 14, 54, 14, 2.5)}</clipPath>

          {/* Top-right corner label */}
          <clipPath id="c-lbl-a2">{hClip(540, 33, 30, 10, 12, 3.1)}</clipPath>

          {/* Bottom-right corner label */}
          <clipPath id="c-lbl-a4">{hClip(540, 393, 30, 10, 12, 3.7)}</clipPath>

          {/* Radius callout */}
          <clipPath id="c-lbl-r">{hClip(743, 358, 130, 16, 14, 3.0)}</clipPath>
        </defs>

        {/* ═══════════════════════════════════════════
            STRUCTURAL — pen traces the perimeter
            ═══════════════════════════════════════════ */}

        {/* Outer accent rectangle — draws from top-left, clockwise */}
        <motion.rect
          x={40}
          y={44}
          width={520}
          height={340}
          stroke="var(--accent)"
          strokeOpacity={0.20}
          strokeWidth={0.75}
          {...trace}
          {...draw(38, 0)}
        />

        {/* Inner framing rectangle */}
        <motion.rect
          x={88}
          y={92}
          width={424}
          height={244}
          stroke="var(--foreground)"
          strokeOpacity={0.20}
          strokeWidth={0.5}
          {...trace}
          {...draw(34, 0.5)}
        />

        {/* Large circle — traces from 3 o'clock */}
        <motion.circle
          cx={970}
          cy={370}
          r={215}
          stroke="var(--foreground)"
          strokeOpacity={0.20}
          strokeWidth={0.75}
          {...trace}
          {...draw(36, 0.2)}
        />

        {/* Inner concentric circle */}
        <motion.circle
          cx={970}
          cy={370}
          r={140}
          stroke="var(--accent)"
          strokeOpacity={0.28}
          strokeWidth={0.5}
          {...trace}
          {...draw(30, 0.7)}
        />

        {/* Crosshair — horizontal */}
        <motion.line
          x1={740}
          y1={370}
          x2={1200}
          y2={370}
          stroke="var(--foreground)"
          strokeOpacity={0.16}
          strokeWidth={0.5}
          {...trace}
          {...draw(28, 1.0)}
        />

        {/* Crosshair — vertical */}
        <motion.line
          x1={970}
          y1={140}
          x2={970}
          y2={600}
          stroke="var(--foreground)"
          strokeOpacity={0.16}
          strokeWidth={0.5}
          {...trace}
          {...draw(28, 1.1)}
        />

        {/* ═══════════════════════════════════════════
            EXTENDED GEOMETRY — pen traces
            ═══════════════════════════════════════════ */}

        {/* Diagonal connector */}
        <motion.line
          x1={560}
          y1={44}
          x2={820}
          y2={210}
          stroke="var(--foreground)"
          strokeOpacity={0.16}
          strokeWidth={0.5}
          {...trace}
          {...draw(22, 0.6)}
        />

        {/* Outer ring — third concentric circle, bleeds off viewport */}
        <motion.circle
          cx={970}
          cy={370}
          r={280}
          stroke="var(--foreground)"
          strokeOpacity={0.13}
          strokeWidth={0.5}
          {...trace}
          {...draw(32, 0.9)}
        />

        {/* ═══════════════════════════════════════════
            BLUEPRINT DETAILS — clip-path reveals
            ═══════════════════════════════════════════ */}

        {/* Dashed reference lines — horizontal midpoint (y=214) and vertical midpoint (x=300) */}
        <line
          x1="40"
          y1="214"
          x2="560"
          y2="214"
          stroke="var(--foreground)"
          strokeOpacity="0.17"
          strokeWidth="0.8"
          strokeDasharray="3 7"
          clipPath="url(#c-dash-h)"
        />
        <line
          x1="300"
          y1="44"
          x2="300"
          y2="384"
          stroke="var(--foreground)"
          strokeOpacity="0.17"
          strokeWidth="0.8"
          strokeDasharray="3 7"
          clipPath="url(#c-dash-v)"
        />

        {/* Dimension H — top-right corner, measures outer-right (560) minus inner-right (512) */}
        <line
          x1="512"
          y1="30"
          x2="560"
          y2="30"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-h)"
        />
        <line
          x1="512"
          y1="26"
          x2="512"
          y2="34"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-h)"
        />
        <line
          x1="560"
          y1="26"
          x2="560"
          y2="34"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-h)"
        />

        {/* Dimension V — bottom-right corner, measures outer-bottom (384) minus inner-bottom (336) */}
        <line
          x1="578"
          y1="336"
          x2="578"
          y2="384"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-v)"
        />
        <line
          x1="574"
          y1="336"
          x2="582"
          y2="336"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-v)"
        />
        <line
          x1="574"
          y1="384"
          x2="582"
          y2="384"
          stroke="var(--foreground)"
          strokeOpacity="0.20"
          strokeWidth="0.8"
          clipPath="url(#c-dim-v)"
        />

        {/* Top-right corner label */}
        <text
          x="543"
          y="40"
          fontSize="5.5"
          fill="var(--foreground)"
          fillOpacity="0.38"
          fontFamily="'Courier New', monospace"
          letterSpacing="0.5"
          clipPath="url(#c-lbl-a2)"
        >
          A2
        </text>

        {/* Bottom-right corner label */}
        <text
          x="543"
          y="400"
          fontSize="5.5"
          fill="var(--foreground)"
          fillOpacity="0.38"
          fontFamily="'Courier New', monospace"
          letterSpacing="0.5"
          clipPath="url(#c-lbl-a4)"
        >
          A4
        </text>

        {/* Radius callout */}
        <text
          x="836"
          y="366"
          fontSize="5.5"
          fill="var(--foreground)"
          fillOpacity="0.30"
          fontFamily="'Courier New', monospace"
          letterSpacing="0.5"
          clipPath="url(#c-lbl-r)"
        >
          r=215
        </text>
      </svg>
    </div>
  );
}
