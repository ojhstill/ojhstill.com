import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface CaseStudy {
  tag: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
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
    <div className="border-b border-border/20 pb-10 last:border-0 last:pb-0">
      {/* Clickable header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left cursor-pointer"
      >
        <div className="flex items-start gap-5">
          {/* Optional image/logo */}
          {study.image && (
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="size-12 rounded-lg overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt || ''}
                  className="size-full object-cover"
                  onError={e => {
                    const img = e.target as HTMLImageElement;
                    if (
                      study.imageFallback &&
                      img.src !== study.imageFallback
                    ) {
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
            <h3 className="text-lg font-semibold leading-snug text-foreground">
              {study.title}
            </h3>
            {study.metric && (
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display text-accent">
                  {study.metric}
                </span>
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

            {/* Expand prompt */}
            <div
              className={cn(
                'inline-flex items-center gap-1.5 text-xs font-semibold pt-1 transition-colors',
                open
                  ? 'text-muted-foreground'
                  : 'text-accent hover:text-accent/80'
              )}
            >
              <span>{open ? 'Show less \u2191' : 'Read more \u2193'}</span>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable detail */}
      <div
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="pt-6">
          <div className="space-y-4 pl-0 sm:pl-[68px]">
            {study.detail.map((section, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {section.heading}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
            {study.technologies.length > 0 && (
              <p className="text-xs text-muted-foreground/70 pt-2">
                {study.technologies.join(' · ')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
