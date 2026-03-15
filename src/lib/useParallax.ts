import { useScroll, useTransform } from 'motion/react';

/**
 * Provides three parallax y-offsets for hero sections:
 * - dotGridY  — background grid, moves slowest (most lag)
 * - imageY    — profile image, moves at medium speed
 * - textY     — hero text, moves slightly slower than full scroll speed
 */
export function useHeroParallax() {
  const { scrollY } = useScroll();
  const dotGridY = useTransform(scrollY, [0, 600], [0, 130]);
  const imageY   = useTransform(scrollY, [0, 600], [0, 85]);
  const textY    = useTransform(scrollY, [0, 600], [0, 50]);
  return { dotGridY, imageY, textY };
}
