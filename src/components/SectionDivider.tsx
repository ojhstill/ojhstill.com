import { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'motion/react';

interface SectionDividerProps {
  label: string;
  className?: string;
}

export default function SectionDivider({
  label,
  className,
}: SectionDividerProps) {
  const prefersReducedMotion = useReducedMotion();
  const staticMode = !!prefersReducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const revealed = staticMode || isInView;

  return (
    <div ref={ref} aria-hidden className={className}>
      <div className="relative">
        <motion.svg
          className="w-full"
          height="1"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
          initial={{
            clipPath: staticMode ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          }}
          animate={{
            clipPath: revealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          }}
          transition={{ duration: 5, ease: 'linear' }}
        >
          <line
            x1="0"
            y1="0.5"
            x2="100%"
            y2="0.5"
            stroke="var(--foreground)"
            strokeOpacity={0.2}
            strokeWidth={0.8}
            strokeDasharray="3 7"
          />
        </motion.svg>
        <div className="max-w-3xl mx-auto px-6">
          <motion.span
            className="block mt-2 font-mono text-[10px] text-foreground/22 tracking-widest select-none"
            initial={staticMode ? undefined : { opacity: 0, x: -6 }}
            animate={
              staticMode
                ? undefined
                : revealed
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -6 }
            }
            transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
          >
            {label}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
