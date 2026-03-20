import { motion, useReducedMotion } from 'motion/react';

// Cycle timings (fractions of total duration):
//   0 → 22%   pen draws the shape
//  22 → 72%   hold (fully visible)
//  72 → 88%   pen erases forward (continues past the end)
//  88 → 100%  gap (invisible, resets)
const TIMES = [0, 0.22, 0.72, 0.88, 1.0];
const EASE: string[] = ['easeOut', 'linear', 'easeIn', 'linear'];

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
          transition: { duration, times: TIMES, ease: EASE, delay, repeat: Infinity },
        };

  // ─── Clip-path helpers (for dashed lines, text, dimension groups) ───
  function hClip(
    x: number, y: number, w: number, h: number,
    duration: number, delay: number,
  ) {
    if (staticMode) return <rect x={x} y={y} width={w} height={h} />;
    return (
      <motion.rect
        y={y} height={h}
        animate={{ x: [x, x, x, x + w, x], width: [0, w, w, 0, 0] }}
        transition={{ duration, times: TIMES, ease: 'easeInOut', delay, repeat: Infinity }}
      />
    );
  }

  function vClip(
    x: number, y: number, w: number, h: number,
    duration: number, delay: number,
  ) {
    if (staticMode) return <rect x={x} y={y} width={w} height={h} />;
    return (
      <motion.rect
        x={x} width={w}
        animate={{ y: [y, y, y, y + h, y], height: [0, h, h, 0, 0] }}
        transition={{ duration, times: TIMES, ease: 'easeInOut', delay, repeat: Infinity }}
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
        {/* ── Clip-path definitions (dashed lines, dimensions, text) ── */}
        <defs>
          <clipPath id="c-dash-h">    {hClip( 37, 210,  526,   8, 16, 1.9 )}</clipPath>
          <clipPath id="c-dash-v">    {vClip(297,  41,    8, 346, 18, 2.5 )}</clipPath>
          <clipPath id="c-dim-h">     {hClip( 37,  24,   54,  12, 14, 2.2 )}</clipPath>
          <clipPath id="c-dim-v">     {vClip( 19,  41,   14,  54, 14, 2.5 )}</clipPath>
          <clipPath id="c-tick-tl-h"> {hClip( 20,  61,   22,   6, 20, 1.90)}</clipPath>
          <clipPath id="c-tick-tl-v"> {vClip( 57,  20,    6,  26, 20, 1.95)}</clipPath>
          <clipPath id="c-tick-tr-h"> {hClip(557,  61,   24,   6, 18, 2.00)}</clipPath>
          <clipPath id="c-tick-tr-v"> {vClip(537,  20,    6,  26, 18, 2.05)}</clipPath>
          <clipPath id="c-tick-bl-h"> {hClip( 20, 361,   22,   6, 22, 2.10)}</clipPath>
          <clipPath id="c-tick-bl-v"> {vClip( 57, 381,    6,  24, 22, 2.15)}</clipPath>
          <clipPath id="c-tick-br-h"> {hClip(557, 361,   24,   6, 20, 2.20)}</clipPath>
          <clipPath id="c-tick-br-v"> {vClip(537, 381,    6,  24, 20, 2.25)}</clipPath>
          <clipPath id="c-lbl-a1">    {hClip( 41,  32,   24,  10, 12, 2.8 )}</clipPath>
          <clipPath id="c-lbl-a2">    {hClip(540,  32,   24,  10, 12, 3.1 )}</clipPath>
          <clipPath id="c-lbl-a3">    {hClip( 41, 393,   24,  10, 12, 3.4 )}</clipPath>
          <clipPath id="c-lbl-a4">    {hClip(540, 393,   24,  10, 12, 3.7 )}</clipPath>
          <clipPath id="c-lbl-r">     {hClip(743, 358,  130,  16, 14, 3.0 )}</clipPath>
        </defs>

        {/* ═══════════════════════════════════════════
            STRUCTURAL — pen traces the perimeter
            ═══════════════════════════════════════════ */}

        {/* Outer accent rectangle — draws from top-left, clockwise */}
        <motion.rect x={40} y={44} width={520} height={340}
          stroke="var(--accent)" strokeOpacity={0.24} strokeWidth={0.75}
          {...trace} {...draw(38, 0)}
        />

        {/* Inner framing rectangle */}
        <motion.rect x={88} y={92} width={424} height={244}
          stroke="var(--foreground)" strokeOpacity={0.14} strokeWidth={0.5}
          {...trace} {...draw(34, 0.5)}
        />

        {/* Large circle — traces from 3 o'clock */}
        <motion.circle cx={970} cy={370} r={215}
          stroke="var(--foreground)" strokeOpacity={0.14} strokeWidth={0.75}
          {...trace} {...draw(36, 0.2)}
        />

        {/* Inner concentric circle */}
        <motion.circle cx={970} cy={370} r={140}
          stroke="var(--accent)" strokeOpacity={0.20} strokeWidth={0.5}
          {...trace} {...draw(30, 0.7)}
        />

        {/* Crosshair — horizontal */}
        <motion.line x1={740} y1={370} x2={1200} y2={370}
          stroke="var(--foreground)" strokeOpacity={0.11} strokeWidth={0.5}
          {...trace} {...draw(28, 1.0)}
        />

        {/* Crosshair — vertical */}
        <motion.line x1={970} y1={140} x2={970} y2={600}
          stroke="var(--foreground)" strokeOpacity={0.11} strokeWidth={0.5}
          {...trace} {...draw(28, 1.1)}
        />

        {/* ═══════════════════════════════════════════
            EXTENDED GEOMETRY — pen traces
            ═══════════════════════════════════════════ */}

        {/* Diagonal connector */}
        <motion.line x1={560} y1={44} x2={820} y2={210}
          stroke="var(--foreground)" strokeOpacity={0.11} strokeWidth={0.5}
          {...trace} {...draw(22, 0.6)}
        />

        {/* Quarter arc — top-right corner */}
        <motion.path d="M 850 0 A 350 350 0 0 1 1200 350"
          stroke="var(--foreground)" strokeOpacity={0.11} strokeWidth={0.5}
          {...trace} {...draw(24, 1.3)}
        />

        {/* Inner echo arc */}
        <motion.path d="M 950 0 A 220 220 0 0 1 1200 220"
          stroke="var(--accent)" strokeOpacity={0.11} strokeWidth={0.4}
          {...trace} {...draw(26, 2.0)}
        />

        {/* Small circle — bottom-left */}
        <motion.circle cx={105} cy={560} r={95}
          stroke="var(--foreground)" strokeOpacity={0.11} strokeWidth={0.5}
          {...trace} {...draw(20, 1.1)}
        />

        {/* Second diagonal */}
        <motion.line x1={40} y1={384} x2={180} y2={480}
          stroke="var(--foreground)" strokeOpacity={0.10} strokeWidth={0.5}
          {...trace} {...draw(18, 1.5)}
        />

        {/* ═══════════════════════════════════════════
            BLUEPRINT DETAILS — clip-path reveals
            ═══════════════════════════════════════════ */}

        {/* Dashed reference lines */}
        <line x1="40" y1="214" x2="560" y2="214" stroke="var(--foreground)" strokeOpacity="0.10" strokeWidth="0.4" strokeDasharray="3 7" clipPath="url(#c-dash-h)" />
        <line x1="300" y1="44" x2="300" y2="384" stroke="var(--foreground)" strokeOpacity="0.10" strokeWidth="0.4" strokeDasharray="3 7" clipPath="url(#c-dash-v)" />

        {/* Dimension H */}
        <line x1="40" y1="30" x2="88" y2="30" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-h)" />
        <line x1="40" y1="26" x2="40" y2="34" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-h)" />
        <line x1="88" y1="26" x2="88" y2="34" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-h)" />

        {/* Dimension V */}
        <line x1="26" y1="44" x2="26" y2="92" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-v)" />
        <line x1="22" y1="44" x2="30" y2="44" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-v)" />
        <line x1="22" y1="92" x2="30" y2="92" stroke="var(--foreground)" strokeOpacity="0.14" strokeWidth="0.4" clipPath="url(#c-dim-v)" />

        {/* Corner tick marks */}
        <line x1="40"  y1="64"  x2="22"  y2="64"  stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-tl-h)" />
        <line x1="60"  y1="44"  x2="60"  y2="26"  stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-tl-v)" />
        <line x1="560" y1="64"  x2="578" y2="64"  stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-tr-h)" />
        <line x1="540" y1="44"  x2="540" y2="26"  stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-tr-v)" />
        <line x1="40"  y1="364" x2="22"  y2="364" stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-bl-h)" />
        <line x1="60"  y1="384" x2="60"  y2="402" stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-bl-v)" />
        <line x1="560" y1="364" x2="578" y2="364" stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-br-h)" />
        <line x1="540" y1="384" x2="540" y2="402" stroke="var(--foreground)" strokeOpacity="0.17" strokeWidth="0.5" clipPath="url(#c-tick-br-v)" />

        {/* Corner labels */}
        <text x="44"  y="40"  fontSize="5.5" fill="var(--foreground)" fillOpacity="0.28" fontFamily="'Courier New', monospace" letterSpacing="0.5" clipPath="url(#c-lbl-a1)">A1</text>
        <text x="543" y="40"  fontSize="5.5" fill="var(--foreground)" fillOpacity="0.28" fontFamily="'Courier New', monospace" letterSpacing="0.5" clipPath="url(#c-lbl-a2)">A2</text>
        <text x="44"  y="400" fontSize="5.5" fill="var(--foreground)" fillOpacity="0.28" fontFamily="'Courier New', monospace" letterSpacing="0.5" clipPath="url(#c-lbl-a3)">A3</text>
        <text x="543" y="400" fontSize="5.5" fill="var(--foreground)" fillOpacity="0.28" fontFamily="'Courier New', monospace" letterSpacing="0.5" clipPath="url(#c-lbl-a4)">A4</text>

        {/* Radius callout */}
        <line x1="755" y1="370" x2="828" y2="370" stroke="var(--foreground)" strokeOpacity="0.11" strokeWidth="0.4" clipPath="url(#c-lbl-r)" />
        <text x="836" y="366" fontSize="5.5" fill="var(--foreground)" fillOpacity="0.22" fontFamily="'Courier New', monospace" letterSpacing="0.5" clipPath="url(#c-lbl-r)">r=215</text>
      </svg>
    </div>
  );
}
