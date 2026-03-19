import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

/**
 * Parses a metric string into segments of numeric values and static text.
 * Examples:
 *   "77%"        - [{ value: 77, suffix: "%" }]
 *   "10 yrs"     - [{ value: 10, suffix: " yrs" }]
 *   "4 wks → 1 wk" - [{ value: 4, suffix: " wks → " }, { value: 1, suffix: " wk" }]
 */
interface Segment {
  value: number;
  suffix: string;
}

function parseMetric(metric: string): Segment[] {
  const segments: Segment[] = [];
  const regex = /(\d+(?:\.\d+)?)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(metric)) !== null) {
    // Any text before this number is prefix for the first segment or suffix for the prior one
    const textBefore = metric.slice(lastIndex, match.index);
    if (segments.length > 0) {
      segments[segments.length - 1].suffix += textBefore;
    }
    // We ignore leading text for simplicity - metrics start with a number
    segments.push({ value: parseFloat(match[1]), suffix: '' });
    lastIndex = regex.lastIndex;
  }

  // Remaining text is the suffix of the last segment
  if (segments.length > 0) {
    segments[segments.length - 1].suffix += metric.slice(lastIndex);
  }

  return segments;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const DURATION = 1200; // ms

interface AnimatedMetricProps {
  metric: string;
  className?: string;
}

export default function AnimatedMetric({
  metric,
  className,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayed, setDisplayed] = useState(metric);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const segments = parseMetric(metric);
    if (segments.length === 0) return;

    let start: number | null = null;
    let rafId: number;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(progress);

      const text = segments
        .map(seg => {
          const current = eased * seg.value;
          // Use integers unless the original value has decimals
          const display = Number.isInteger(seg.value)
            ? Math.round(current)
            : current.toFixed(1);
          return `${display}${seg.suffix}`;
        })
        .join('');

      setDisplayed(text);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, metric]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
