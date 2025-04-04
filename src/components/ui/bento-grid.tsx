import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={cn(
          'relative row-span-1 rounded-xl group/bento gap-4 hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card dark:border-white/[0.2] border border-transparent justify-between flex flex-col',
          className
        )}
      >
        <GlowingEffect
          disabled={false}
          blur={0}
          inactiveZone={0.01}
          proximity={0}
          spread={100}
          variant="default"
          glow={true}
          movementDuration={2}
          borderWidth={1.5}
        />
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="text-base font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="text-sm font-sans font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};
