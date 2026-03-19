import { useScroll, useTransform } from 'motion/react';

/**
 * Provides parallax y-offsets for hero sections:
 * - imageY - profile image, moves at medium speed
 * - textY  - hero text, moves slightly slower than full scroll speed
 */
export function useHeroParallax() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 90]);
  const textY = useTransform(scrollY, [0, 600], [0, 45]);
  return { imageY, textY };
}
