import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buttonVariants, ButtonArrow } from '@/components/Button';
import { motion } from 'motion/react';
import CaseStudyCard, { type CaseStudy } from '@/components/CaseStudyCard';
import SectionHeading from '@/components/SectionHeading';
import CurrentlyStatus from '@/components/CurrentlyStatus';
import { companyLogos } from '@/lib/companyLogos';
import { useHeroParallax } from '@/lib/useParallax';
import { Layers, ArrowLeftRight, Search } from 'lucide-react';

const caseStudies: CaseStudy[] = [
  {
    tag: 'Platform Engineering',
    title: 'Designed a reusable platform that cut web build time by 75%',
    metric: '4 wks → 1 wk',
    metricLabel: 'build time reduction',
    summary:
      'Spotted a structural problem in how we delivered client websites and built the architectural foundation to fix it — turning bespoke builds into a scalable product.',
    image: companyLogos.wattle,
    imageAlt: 'Wattle logo',
    detail: [
      {
        heading: 'The problem',
        text: 'Web builds were averaging four weeks, with inconsistent architecture across projects and no reusable foundation. Every new client meant starting from scratch, which was expensive and created quality drift.',
      },
      {
        heading: 'What I built',
        text: 'I designed and built a reusable Umbraco Whitelabel instance that standardised our front-end architecture. This required alignment across delivery and commercial teams to formalise it as our default approach — not just an engineering initiative.',
      },
      {
        heading: 'The impact',
        text: 'Build time dropped from roughly four weeks to under one week for standard scope. That saves around 10 developer days per project across 3–5 projects a year, and now underpins all future web work. It also strengthened our commercial positioning by enabling faster client onboarding.',
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
      'Directed the technical redesign of a live client product from Angular to Vue, modernising the architecture, UI, and API layer while building team capability.',
    image: companyLogos.roke,
    imageAlt: 'Roke logo',
    detail: [
      {
        heading: 'The challenge',
        text: 'A live, multi-million-pound client product running on legacy Angular with significant accumulated technical debt. It needed modernising without disrupting the service or the client relationship.',
      },
      {
        heading: 'My approach',
        text: 'As Technical Team Lead, I directed the development team through a structured migration. I redesigned the architecture, UX/UI, and API to modern standards, making deliberate decisions about what to rebuild versus refactor.',
      },
      {
        heading: 'What changed',
        text: 'Delivered a clean Vue application with modern architecture. Mentored junior developers through the process using clean code principles and code reviews — building their confidence alongside the technical deliverable.',
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
        text: 'Facilitated all Agile ceremonies, translated technical concepts between clients and engineering teams, and onboarded five new developers — adapting the team to a cross-site format through better communication channels while managing sprint capacity.',
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
    text: 'I design reusable, scalable platforms — not one-off solutions. I think in systems and build foundations that compound value over time.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Stakeholder bridge',
    text: 'I sit between engineering, delivery, and commercial. I translate complexity into clear decisions and make sure technical direction aligns with business goals.',
  },
  {
    icon: Search,
    title: 'Discovery & delivery',
    text: 'I get involved early — shaping scope in discovery before it hardens. That upstream clarity means fewer surprises downstream and better outcomes for clients.',
  },
];

export default function Home() {
  const { dotGridY, imageY, textY } = useHeroParallax();

  const fullText = "Hey, I'm Oli.";
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let id: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      let i = 0;
      id = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(id);
      }, 110);
    }, 700);
    return () => {
      clearTimeout(delay);
      clearInterval(id);
    };
  }, []);
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 dot-grid -z-10"
          style={{ y: dotGridY }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
            <motion.div style={{ y: textY }} className="max-w-2xl flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <p className="font-display italic text-2xl text-accent mb-4">
                  {displayed}
                  <span
                    aria-hidden="true"
                    className="inline-block w-0.5 h-[0.85em] bg-accent align-middle ml-px translate-y-[-0.05em] cursor-blink"
                  />
                </p>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  I turn complexity into clarity — in code, in product, in
                  conversation.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Technical Product Owner with an engineering backbone. I shape
                  platforms, bridge technical and commercial decisions, and help
                  teams deliver work that holds up.
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
                <div className="relative">
                  <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-border/40 bg-secondary">
                    {/* Replace src with your actual headshot */}
                    <img
                      src="/images/profile.jpg"
                      alt="Oliver Still"
                      className="size-full object-cover"
                      onError={e => {
                        // Graceful fallback if image hasn't been added yet
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Decorative terracotta accent corner */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-xl bg-accent/15 -z-10" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What I do ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <SectionHeading
          label="What I do"
          title="Engineering meets architecture"
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <cap.icon
                className="w-5 h-5 text-accent mb-3"
                strokeWidth={1.75}
              />
              <h3 className="text-base font-semibold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <SectionHeading
          label="Selected work"
          title="Things I've built and shaped"
        />
        <div className="mt-10 space-y-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display italic text-lg text-accent mb-3">
            Interested?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Always happy to have a conversation.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            If something here resonates, feel free to reach out — whether that's
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
