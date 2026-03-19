import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'accent' | 'ghost';
export type ButtonSize = 'sm' | 'md';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'rounded-lg bg-primary text-primary-foreground hover:bg-primary/90',
  accent: 'rounded-lg bg-accent text-accent-foreground hover:bg-accent/90',
  ghost: 'text-muted-foreground hover:text-foreground',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5',
  md: 'px-6 py-3',
};

// Default size per variant (ghost carries no padding by default)
const defaultSize: Record<ButtonVariant, ButtonSize | null> = {
  primary: 'sm',
  accent: 'md',
  ghost: null,
};

/**
 * Returns a className string for a given variant/size.
 * Use this on <Link> elements where you need router navigation:
 *   <Link to="/" className={buttonVariants({ variant: 'primary' })}>
 * Pass arrow to automatically add the `group` class needed for <ButtonArrow />.
 */
export function buttonVariants({
  variant = 'primary',
  size,
  arrow,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
} = {}): string {
  const resolvedSize = size ?? defaultSize[variant];
  return cn(
    'inline-flex items-center gap-2 text-base font-semibold transition-colors',
    arrow && 'group',
    resolvedSize && sizeClasses[resolvedSize],
    variantClasses[variant],
    className
  );
}

/**
 * Arrow icon with the hover-nudge effect. Place inside any element that has
 * the `group` class (added automatically by buttonVariants({ arrow: true })
 * or the Button arrow prop).
 */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn(
        'size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1',
        className
      )}
    />
  );
}

/**
 * Native <button> element with variant, size, and arrow props.
 * For link-style buttons, use:
 *   <Link className={buttonVariants({ variant: 'primary', arrow: true })}>
 *     Label <ButtonArrow />
 *   </Link>
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size, arrow, className, children, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, arrow, className })}
      {...props}
    >
      {children}
      {arrow && <ButtonArrow />}
    </button>
  )
);

Button.displayName = 'Button';
