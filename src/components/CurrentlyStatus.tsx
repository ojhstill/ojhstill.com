import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, Code2, Headphones } from 'lucide-react';
import { currentlyItems, type CurrentlyItem } from '@/lib/currentlyData';

const categoryIcon: Record<CurrentlyItem['category'], React.ReactNode> = {
  working: <Code2 className="size-3.5" />,
  reading: <BookOpen className="size-3.5" />,
  listening: <Headphones className="size-3.5" />,
};

const CYCLE_MS = 5_000;

export default function CurrentlyStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (currentlyItems.length <= 1) return;
    const id = setInterval(
      () => setIndex(i => (i + 1) % currentlyItems.length),
      CYCLE_MS
    );
    return () => clearInterval(id);
  }, []);

  if (currentlyItems.length === 0) return null;

  const item = currentlyItems[index];

  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      {/* Pulsing live dot */}
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-1.5"
        >
          {categoryIcon[item.category]}
          <span>
            <span className="font-medium text-foreground/70">
              {item.label}:
            </span>{' '}
            {item.value}
          </span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
