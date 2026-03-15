import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <span className="text-xs font-semibold tracking-wide uppercase text-accent">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
