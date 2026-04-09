import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

export interface TimelineEntry {
  date: string;
  title: string;
  subtitle?: string;
  logo?: string;
  /** Local fallback shown if the primary logo URL fails to load */
  logoFallback?: string;
  logoAlt?: string;
  content: React.ReactNode;
}

function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot - spring-pops into view */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 32,
          delay: index * 0.12 + 0.18,
        }}
        className="absolute left-0 top-2.5 size-3.75 rounded-full border-2 border-accent bg-background"
      />

      {/* Content */}
      <div className="space-y-1.5">
        <div className="flex items-start gap-3">
          {entry.logo && (
            <div className="shrink-0 mt-0.5 size-9 rounded-lg bg-secondary overflow-hidden border border-border/40">
              <img
                src={entry.logo}
                alt={entry.logoAlt || ''}
                className="size-full object-cover"
                onError={e => {
                  const img = e.target as HTMLImageElement;
                  if (entry.logoFallback && img.src !== entry.logoFallback) {
                    img.src = entry.logoFallback;
                  } else {
                    img.parentElement!.style.display = 'none';
                  }
                }}
              />
            </div>
          )}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="text-sm font-semibold text-accent tabular-nums">
                {entry.date}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {entry.title}
              </h3>
            </div>
            {entry.subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                {entry.subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="pt-2 text-base text-muted-foreground leading-relaxed space-y-3">
          {entry.content}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static rail - shows the full path faintly */}
      <div className="absolute left-[6.5px] top-3 bottom-0 w-0.5 bg-border" />
      {/* Scroll-drawn accent line - grows from top as you scroll */}
      <motion.div
        className="absolute left-[6.5px] top-3 bottom-0 w-0.5 bg-accent/70 origin-top"
        style={{ scaleY: lineScaleY }}
      />
      {entries.map((entry, i) => (
        <TimelineItem key={i} entry={entry} index={i} />
      ))}
    </div>
  );
}
