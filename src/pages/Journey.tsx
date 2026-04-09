import { motion } from 'motion/react';
import { useHeroParallax } from '@/lib/useParallax';
import Timeline, { type TimelineEntry } from '@/components/Timeline';
import { companyLogos } from '@/lib/companyLogos';

const timelineData: TimelineEntry[] = [
  {
    date: 'Oct 2025 - Present',
    title: 'Technical Product Owner',
    subtitle: 'Wattle · Bristol',
    logo: companyLogos.wattle,
    logoAlt: 'Wattle',
    content: (
      <>
        <p>
          I own product direction and technical architecture at Wattle, sitting
          as the central link between development, QA, delivery, and commercial
          — translating complexity for client stakeholders and challenging scope
          early before it can become a delivery issue.
        </p>
        <p>
          Built a reusable Umbraco Whitelabel platform that shifted web delivery
          from inconsistent bespoke builds to a scalable product baseline,
          reducing build time from four weeks to under one and strengthening our
          commercial positioning. Also involved in early-stage client discovery
          with clients including Dogs for Good, CIWM, WSET, LMA, and GSL.
        </p>
      </>
    ),
  },
  {
    date: 'Feb 2025 - Oct 2025',
    title: 'Software Engineer',
    subtitle: 'Wattle · Bristol',
    logo: companyLogos.wattle,
    logoAlt: 'Wattle',
    content: (
      <p>
        Joined as a software engineer before quickly getting involved with
        client conversations, scope shaping, and delivery oversight — work that
        led to the creation of the company's first Technical Product Owner role.
        Spotted a structural gap in how we delivered client websites and built
        the company's first reusable Umbraco platform from the ground up,
        creating the foundation that later became a core product.
      </p>
    ),
  },
  {
    date: 'Mar 2024 - Feb 2025',
    title: 'Software Engineer & Consultant',
    subtitle: 'Freelance · Bristol',
    logo: companyLogos.dos,
    logoAlt: 'DOS',
    content: (
      <p>
        Relocated to Bristol and took on a range of independent client projects
        across technical consultancy and full-stack development, including a
        Shopify-based app solution for independent businesses integrating a
        cost-effective architecture with Shopify's GraphQL API.
      </p>
    ),
  },
  {
    date: 'Oct 2021 - Mar 2024',
    title: 'Software Engineer',
    subtitle: 'Roke · Romsey',
    logo: companyLogos.roke,
    logoAlt: 'Roke',
    content: (
      <>
        <p>
          Joined on the graduate scheme and moved into leadership fairly
          quickly. Led the architectural redesign of a live Angular product,
          migrating to Vue to resolve a decade of technical debt — taking full
          ownership of the architecture, UX/UI, and API, and building the team
          through mentoring and code reviews.
        </p>
        <p>
          Scrum Master for a cross-site team of 15 on a multi-million-pound
          project — translating technical complexity into clear business
          language and growing team velocity by 77% over 12 months. Also stepped
          into business development, consulting on technical bids and
          representing technical thinking in commercial conversations.
        </p>
      </>
    ),
  },
  {
    date: '2017 - 2021',
    title: 'MEng Electronic Engineering',
    subtitle: 'University of York · First-Class Honours',
    logo: companyLogos.york,
    logoAlt: 'University of York',
    content: (
      <>
        <p>
          A systems-heavy integrated MEng with First Class Honours — the kind of
          degree that builds the analytical and structured thinking that stays
          with you.
        </p>
        <p>
          Led a team of eight as both Project Manager and Developer on a
          start-up style module from idea through to delivery, owning the
          product direction and keeping the team aligned. Came away with one of
          the highest marks in the department.
        </p>
      </>
    ),
  },
];

export default function Journey() {
  const { textY } = useHeroParallax();
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 sm:pb-28">
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-xl"
            >
              <p className="font-display text-lg text-accent font-semibold tracking-tight mb-4">
                Career journey
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                From writing code to deciding what gets built.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I started as a software engineer and gradually moved closer to
                the people side of delivery — shaping products, working with
                clients, and keeping teams honest about what's actually
                possible. This is the path that got me here.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 pb-24 sm:pb-32">
        <Timeline entries={timelineData} />
      </section>
    </>
  );
}
