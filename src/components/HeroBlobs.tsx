import { motion, useReducedMotion } from 'motion/react';

const blobs = [
  // Top-left — accent orange, wide wandering arc
  {
    className: 'w-[500px] h-[500px]',
    style: {
      background: 'radial-gradient(circle, rgba(235, 94, 40, 0.55) 0%, transparent 70%)',
      top: '-80px',
      left: '-80px',
      mixBlendMode: 'screen' as const,
    },
    animate: {
      x: [0, 140, 220, 80, 180, 0],
      y: [0, 80, 200, 260, 100, 0],
      scale: [1, 1.05, 0.97, 1.08, 1.02, 1],
    },
    duration: 22,
  },
  // Bottom-right — warm amber, drifts diagonally inward
  {
    className: 'w-[420px] h-[420px]',
    style: {
      background: 'radial-gradient(circle, rgba(235, 94, 40, 0.45) 0%, transparent 70%)',
      bottom: '-60px',
      right: '-60px',
      mixBlendMode: 'screen' as const,
    },
    animate: {
      x: [0, -100, -200, -120, -60, 0],
      y: [0, -140, -80, -220, -100, 0],
      scale: [1, 0.95, 1.06, 0.98, 1.04, 1],
    },
    duration: 18,
  },
  // Mid — cream/off-white, figure-eight orbit
  {
    className: 'w-[360px] h-[360px]',
    style: {
      background: 'radial-gradient(circle, rgba(235, 94, 40, 0.38) 0%, transparent 70%)',
      top: '30%',
      left: '40%',
      mixBlendMode: 'screen' as const,
    },
    animate: {
      x: [0, 80, 0, -80, 0],
      y: [0, -60, 60, -60, 0],
      scale: [1, 1.1, 0.95, 1.07, 1],
    },
    duration: 14,
  },
];

export default function HeroBlobs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 pointer-events-none"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${blob.className}`}
          style={blob.style}
          animate={prefersReducedMotion ? undefined : blob.animate}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}
