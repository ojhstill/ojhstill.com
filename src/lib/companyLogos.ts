/**
 * Company logo configuration using local image assets.
 * Each entry includes an SVG fallback rendered if the primary image fails to load.
 */

export interface CompanyLogo {
  /** Primary URL — local image asset */
  url: string;
  /** Local fallback shown if the primary image fails to load */
  fallback: string;
}

export const companyLogos = {
  wattle: {
    url: '/images/logos/wattle.png',
    fallback: '/images/logos/wattle.svg',
  },
  roke: {
    url: '/images/logos/roke.png',
    fallback: '/images/logos/roke.svg',
  },
  york: {
    url: '/images/logos/york.jpg',
    fallback: '/images/logos/york.svg',
  },
} satisfies Record<string, CompanyLogo>;
