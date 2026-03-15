/**
 * Company logo configuration using local image assets.
 * Each entry includes an SVG fallback rendered if the primary image fails to load.
 */

export interface CompanyLogo {
  /** Primary URL — local image asset */
  url: string;
  /** Local fallback shown if the primary image fails to load */
  fallback?: string;
}

export const companyLogos = {
  wattle: {
    url: '/images/logos/wattle.jpg',
  },
  dos: {
    url: '/images/logos/dos.jpg',
  },
  roke: {
    url: '/images/logos/roke.jpg',
  },
  york: {
    url: '/images/logos/york.jpg',
  },
} satisfies Record<string, CompanyLogo>;
