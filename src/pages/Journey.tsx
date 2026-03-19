import { motion } from 'motion/react';
import { useHeroParallax } from '@/lib/useParallax';
import Timeline, { type TimelineEntry } from '@/components/Timeline';
import { companyLogos } from '@/lib/companyLogos';

const timelineData: TimelineEntry[] = [
  {
    date: 'Nov 2025 - Present',
    title: 'Technical Product Owner',
    subtitle: 'Wattle · Bristol',
    logo: companyLogos.wattle,
    logoAlt: 'Wattle',
    content: (
      <>
        <p>
          Promoted from Software Engineer after nine months. I now shape product
          direction and technical architecture for Wattle's membership platform,
          bridging engineering, delivery, and commercial teams.
        </p>
        <p>
          I designed and built a reusable Umbraco Whitelabel platform that
          reduced web build time from roughly four weeks to under one week -
          turning bespoke project work into scalable, repeatable delivery. That
          work now underpins all future web projects.
        </p>
        <p>
          My day-to-day involves discovery with clients like Dogs for Good,
          CIWM, WSET, and LMA, owning the web backlog, validating architectural
          decisions, and making sure what we commit to is realistic and
          sustainable.
        </p>
      </>
    ),
  },
  {
    date: 'Feb 2025 - Nov 2025',
    title: 'Software Engineer',
    subtitle: 'Wattle · Bristol',
    logo: companyLogos.wattle,
    logoAlt: 'Wattle',
    content: (
      <p>
        Joined as a front-end engineer working on the MemEx membership platform.
        Quickly expanded into architectural decisions, stakeholder
        conversations, and delivery oversight - which led directly to the TPO
        role. Built the early foundation of the Whitelabel platform during this
        period.
      </p>
    ),
  },
  {
    date: 'Mar 2024 - Feb 2025',
    title: 'Consultant Engineer',
    subtitle: 'Freelance · Bristol',
    logo: companyLogos.dos,
    logoAlt: 'DOS',
    content: (
      <>
        <p>
          Moved to Bristol and spent a year freelancing to broaden my technical
          and commercial exposure. Worked across a range of projects and client
          types.
        </p>
        <p>
          Highlights included designing and deploying a full-stack Shopify
          solution for independent businesses, providing software testing and QA
          for a London-based consultancy's CRM portal, and technical consultancy
          for clients pursuing their own projects.
        </p>
      </>
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
          Started on a two-year graduate scheme and quickly moved into
          leadership roles. As Technical Team Lead, I directed the migration of
          a live Angular product to Vue - redesigning the architecture, UI, and
          API layer while mentoring junior developers through the process.
        </p>
        <p>
          Took on the Certified ScrumMaster role for a 15-person cross-site
          Agile team on a multi-million-pound project, increasing delivery
          velocity by 77% in twelve months.
        </p>
        <p>
          Also supported the Business Development team - leading client
          engagement strategies, attending conferences, and consulting on
          technical bid work. This gave me early exposure to the commercial side
          of technical delivery.
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
          Four-year integrated master's degree. Developed a strong foundation in
          systems-level thinking - understanding how components interact, where
          complexity hides, and how to design for reliability.
        </p>
        <p>
          Led a team of eight as Project Manager and Developer for a tech
          start-up project, taking it from idea through to product using Agile
          methodologies. We received one of the highest marks in the department.
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
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-xl"
            >
              <p className="font-display text-lg text-accent mb-4">
                Career journey
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                From engineering to architecture - one role at a time.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I started in software engineering, moved into technical
                leadership, and now sit at the intersection of product,
                architecture, and delivery. Here's how that happened.
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
