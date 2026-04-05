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
          Promoted from engineer after nine months. I now own product direction
          and technical architecture across Wattle's web projects — sitting
          between engineering, delivery, and the client.
        </p>
        <p>
          I designed and built a Whitelabel platform that cut our web build time
          from four weeks to under one. I work directly with clients like Dogs
          for Good, CIWM, and WSET — shaping scope early and making sure what
          we promise is something we can actually ship.
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
        Joined as a front-end engineer on the MemEx membership platform. Within
        a few months I was in architecture discussions and client calls — not
        because anyone asked, but because I kept spotting gaps. That laid the
        groundwork for a role that didn't exist yet.
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
        Moved to Bristol and spent a year freelancing. Different clients,
        different stacks, no safety net. Built a Shopify integration for small
        businesses, did QA for a London consultancy, and gave technical advice
        to people with ideas and no engineering background.
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
          Started on the graduate scheme and moved quickly into leadership. Led
          the migration of a live Angular product to Vue — owning the
          architecture, UX, and API while mentoring junior engineers.
        </p>
        <p>
          Also Scrum Master for a 15-person team on a multi-million-pound
          project, and got involved in business development — consulting on bids
          and leading client engagement. That's where I first realised I liked
          the commercial side as much as the technical one.
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
          Four-year integrated master's in Electronic Engineering. First-Class.
          The degree was systems-heavy and built the structured thinking I still
          rely on.
        </p>
        <p>
          Led a team of eight on a start-up-style project as both Project
          Manager and Developer. One of the highest marks in the department —
          and the first time I realised I liked leading as much as building.
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
