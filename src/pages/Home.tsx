import { Link } from 'react-router-dom';
import { buttonVariants, ButtonArrow } from '@/components/Button';
import { motion } from 'motion/react';
import CaseStudyCard, { type CaseStudy } from '@/components/CaseStudyCard';
import SectionHeading from '@/components/SectionHeading';
import CurrentlyStatus from '@/components/CurrentlyStatus';
import { companyLogos } from '@/lib/companyLogos';
import { useHeroParallax } from '@/lib/useParallax';
import HeroGeometric from '@/components/HeroGeometric';
import SectionDivider from '@/components/SectionDivider';
import { Layers, Share2, Route } from 'lucide-react';

const caseStudies: CaseStudy[] = [
  {
    tag: 'Platform Engineering',
    title: 'Designed a reusable platform that cut web build time by 75%',
    metric: '4 wks → 1 wk',
    metricLabel: 'build time reduction',
    summary:
      'Spotted a structural problem in how we were delivering client websites. Every project was starting from scratch. I built the platform to fix that.',
    image: companyLogos.wattle,
    imageAlt: 'Wattle logo',
    detail: [
      {
        heading: 'The problem',
        text: 'Web builds were averaging four weeks, with inconsistent architecture across projects and no reusable foundation. Every new client meant starting from scratch, which cost time and let inconsistency creep in.',
      },
      {
        heading: 'What I built',
        text: 'I designed and built a reusable Umbraco Whitelabel instance that standardised our front-end architecture. This required alignment across delivery and commercial teams to formalise it as our default approach - not just an engineering initiative.',
      },
      {
        heading: 'The impact',
        text: 'Build time dropped from roughly four weeks to under one week for standard scope. That saves around 10 developer days per project across 3-5 projects a year, and now underpins all future web work. It also strengthened our commercial positioning by enabling faster client onboarding.',
      },
    ],
    technologies: [
      'Umbraco',
      'C# .NET',
      'Front-end Architecture',
      'Azure DevOps',
      'Commercial Alignment',
    ],
  },
  {
    tag: 'Technical Leadership',
    title: 'Led a migration that erased a decade of technical debt',
    metric: '10 yrs',
    metricLabel: 'of tech debt cleared',
    summary:
      'Took full ownership of migrating a live product off legacy Angular - redesigning the architecture, UX, and API from the ground up while bringing the team along with me.',
    image: companyLogos.roke,
    imageAlt: 'Roke logo',
    detail: [
      {
        heading: 'The challenge',
        text: 'A live, multi-million-pound client product running on legacy Angular with significant accumulated technical debt. It needed modernising without disrupting the service or the client relationship.',
      },
      {
        heading: 'My approach',
        text: 'As Technical Team Lead, I directed the development team through a structured migration. I made deliberate calls on what to rebuild versus refactor, rather than just modernising the surface.',
      },
      {
        heading: 'What changed',
        text: 'Delivered a clean Vue application with modern architecture. Mentored junior developers through the process using clean code principles and code reviews - building their confidence alongside the technical deliverable.',
      },
    ],
    technologies: [
      'Vue',
      'Angular',
      'REST APIs',
      'UX/UI',
      'Team Mentoring',
      'Agile / SAFe',
    ],
  },
  {
    tag: 'Delivery & Process',
    title: 'Scrum Master on a cross-site team that increased velocity by 77%',
    metric: '77%',
    metricLabel: 'velocity increase in 12 months',
    summary:
      'Took on the Scrum Master role for a 15-person Agile team delivering a multi-million-pound project, improving both delivery speed and client satisfaction.',
    image: companyLogos.roke,
    imageAlt: 'Roke logo',
    detail: [
      {
        heading: 'The context',
        text: 'A cross-site Agile Scrum team of 15 within a SAFe delivery framework. The project needed consistent sprint deliveries and clear communication between distributed team members, clients, and stakeholders.',
      },
      {
        heading: 'What I did',
        text: 'Facilitated all Agile ceremonies, translated technical concepts between clients and engineering teams, and onboarded five new developers - adapting the team to a cross-site format through better communication channels while managing sprint capacity.',
      },
      {
        heading: 'The result',
        text: 'Scrum velocity increased by 77% within 12 months. Sprint deliveries became more predictable, client satisfaction improved, and the team scaled successfully without losing delivery quality.',
      },
    ],
    technologies: [
      'Scrum',
      'SAFe',
      'Jira',
      'Confluence',
      'Stakeholder Management',
      'CSM',
    ],
  },
];

const capabilities = [
  {
    icon: Layers,
    title: 'Architecture & platforms',
    text: 'I care about the technical integrity of what we build and how we build it - foundations built right tend to pay for themselves.',
  },
  {
    icon: Share2,
    title: 'Translation layer',
    text: "I sit between engineering, delivery, and commercial - and that's deliberately where I want to be. I translate complexity into clear decisions to make sure neither side is flying blind.",
  },
  {
    icon: Route,
    title: 'Discovery & delivery',
    text: 'I get involved before scope hardens. Technical direction shaped early means fewer expensive surprises later, and better outcomes for everyone involved.',
  },
];

export default function Home() {
  const { imageY, textY } = useHeroParallax();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative">
        <HeroGeometric />
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-28 sm:pb-36">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
            <motion.div style={{ y: textY }} className="max-w-2xl flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <p className="text-2xl font-semibold tracking-tight text-accent font-display mb-4 flex gap-[0.3em]">
                  {['Hey,', "I'm", 'Oli.'].map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.18,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15]">
                  I turn complexity into clarity:
                  <br />
                  in code, in product, in conversation.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Technical Product Owner with an engineering backbone. I shape
                  platforms, translate complexity into clear decisions, and help
                  teams deliver work that actually lasts.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/journey"
                    className={buttonVariants({
                      variant: 'primary',
                      arrow: true,
                    })}
                  >
                    See my journey
                  </Link>
                  <Link
                    to="/contact"
                    className={buttonVariants({
                      variant: 'ghost',
                      arrow: true,
                    })}
                  >
                    Get in touch
                    <ButtonArrow />
                  </Link>
                </div>
                <div className="mt-6">
                  <CurrentlyStatus />
                </div>
              </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div style={{ y: imageY }} className="shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-3xl overflow-hidden shadow-lg shadow-accent/8 bg-secondary">
                  <img
                    src="/images/profile.jpg"
                    alt="Oliver Still"
                    className="size-full object-cover"
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider label="01" />

      {/* ─── How I work ─── */}
      <section className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <SectionHeading
          label="How I work"
          title="Engineering meets architecture"
        />
        <div className="mt-10 space-y-10">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="pl-6 border-l-2 border-accent/30"
            >
              <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-2">
                <cap.icon className="size-6 text-accent shrink-0" />
                {cap.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {cap.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider label="02" />

      {/* ─── Case Studies ─── */}
      <section className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <SectionHeading
          label="Selected work"
          title="Things I've built and shaped"
        />
        <div className="mt-10 space-y-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.05,
              }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider label="03" />

      {/* ─── CTA ─── */}
      <section className="max-w-3xl mx-auto px-6 py-24 sm:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-display text-lg text-accent font-semibold tracking-tight mb-3">
            Interested?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Always happy to have a conversation.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            If something here resonates, feel free to reach out - whether that's
            to swap ideas, explore a potential fit, or just connect.
          </p>
          <Link
            to="/contact"
            className={buttonVariants({
              variant: 'accent',
              arrow: true,
              className: 'mt-8',
            })}
          >
            Get in touch
            <ButtonArrow />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
