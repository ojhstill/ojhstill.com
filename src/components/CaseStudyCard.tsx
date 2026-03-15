import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedMetric from '@/components/AnimatedMetric';
import { cn } from '@/lib/utils';

export interface CaseStudy {
  tag: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  /** Local fallback shown if the primary image URL fails to load */
  imageFallback?: string;
  detail: {
    heading: string;
    text: string;
  }[];
  technologies: string[];
}

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      className={cn(
        'group rounded-xl border border-border/60 bg-card transition-all duration-300',
        'hover:border-border hover:shadow-sm',
        open && 'border-border shadow-sm'
      )}
    >
      {/* Clickable header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 cursor-pointer"
      >
        <div className="flex items-start gap-5">
          {/* Optional image/logo */}
          {study.image && (
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="size-12 rounded-lg bg-secondary overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt || ''}
                  className="size-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (study.imageFallback && img.src !== study.imageFallback) {
                      img.src = study.imageFallback;
                    } else {
                      img.parentElement!.style.display = 'none';
                    }
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex-1 space-y-3 min-w-0">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-accent">
              {study.tag}
            </span>
            <h3 className="text-lg font-semibold leading-snug text-card-foreground">
              {study.title}
            </h3>
            {study.metric && (
              <div className="flex items-baseline gap-2">
                <AnimatedMetric
                  metric={study.metric}
                  className="text-2xl font-bold text-accent font-display"
                />
                {study.metricLabel && (
                  <span className="text-sm text-muted-foreground">
                    {study.metricLabel}
                  </span>
                )}
              </div>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {study.summary}
            </p>

            {/* Expand prompt — the key visual cue */}
            <div
              className={cn(
                'inline-flex items-center gap-1.5 text-xs font-semibold pt-1 transition-colors',
                open
                  ? 'text-muted-foreground'
                  : 'text-accent group-hover:text-accent/80'
              )}
            >
              <span>{open ? 'Show less' : 'Read the full story'}</span>
              <ChevronDownIcon
                className={cn(
                  'size-3.5 transition-transform duration-300',
                  open && 'rotate-180'
                )}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable detail */}
      <div
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className="border-t border-border/40 pt-5 space-y-4">
            {study.detail.map((section, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold text-card-foreground mb-1">
                  {section.heading}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              <AnimatePresence>
                {open && study.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.92 }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                      delay: i * 0.055,
                    }}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
