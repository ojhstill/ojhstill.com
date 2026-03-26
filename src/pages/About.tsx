import { motion } from 'motion/react';
import { Disc3, Footprints, Languages, type LucideIcon } from 'lucide-react';
import { useHeroParallax } from '@/lib/useParallax';

interface Interest {
  icon: LucideIcon;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
}

const interests: Interest[] = [
  {
    icon: Disc3,
    title: 'Music',
    text: `I've been producing and releasing music for over a decade. Self-taught across production, mixing, mastering, and marketing — one LP, two EPs, and six singles, with over a million streams.`,
    link: 'https://owarimusic.com',
    linkLabel: 'Hear for yourself',
    image: '/images/about/music.jpg',
    imageAlt: 'Music production setup',
  },
  {
    icon: Footprints,
    title: 'Running',
    text: `I run half-marathons and raise money when I can — most recently over £500 for the British Red Cross. Grew up as a competitive diver, training nationally for most of my teens. Still the sport I'm most proud of in hindsight, even if it's firmly past tense now.`,
    image: '/images/about/running.jpg',
    imageAlt: 'Post race photo',
  },
  {
    icon: Languages,
    title: 'French',
    text: `I've been teaching myself French for a few years now. Currently at B1 level - enough to hold most conversations when I'm travelling in French-speaking regions.`,
  },
];

export default function About() {
  const { imageY, textY } = useHeroParallax();
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 sm:pb-28">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <motion.div style={{ y: textY }} className="max-w-xl flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <p className="font-display text-lg text-accent font-semibold tracking-tight mb-4">
                  About me
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  The personal behind the thinking.
                </h1>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  I care about building things that work - technically,
                  commercially, and especially for the people using them. But I
                  also believe the best work comes from people who can draw from
                  a life outside of it.
                </p>
              </motion.div>
            </motion.div>

            {/* Personal photo */}
            <motion.div
              style={{ y: imageY }}
              className="shrink-0 hidden md:block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-48 h-56 rounded-3xl overflow-hidden shadow-lg shadow-accent/8 bg-secondary">
                  <img
                    src="/images/about/portrait.jpg"
                    alt="Oli"
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

      {/* Personal intro */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm Oli - a Technical Product Owner at Wattle. I moved to Bristol in
            2024 for a change of pace. Before that I was at Roke, where I cut my
            teeth on everything from graduate engineering to Scrum mastering to
            business development.
          </p>
          <p>
            I'm naturally curious, self-starting, and I gravitate towards
            environments where ownership is real and decisions move fast. I care
            about culture as much as capability - the best teams I've worked in
            have been the ones where people trust each other enough to be direct
            and collaborative enough to stay aligned.
          </p>
          <p>
            Outside of work, I have a few things that keep me grounded and
            remind me that not everything needs a sprint retrospective.
          </p>
        </motion.div>
      </section>

      {/* Interests */}
      <section className="max-w-3xl mx-auto px-6 pb-24 sm:pb-32">
        <div className="space-y-16">
          {interests.map((interest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative pl-6 border-l-2 border-accent/30"
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                <interest.icon className="size-6 text-accent shrink-0" />
                {interest.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {interest.text}
              </p>
              {interest.link && (
                <a
                  href={interest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-accent/70 hover:text-accent transition-colors"
                >
                  {interest.linkLabel ?? interest.link} →
                </a>
              )}
              {interest.image && (
                <div className="mt-4 rounded-xl overflow-hidden bg-secondary max-w-sm">
                  <img
                    src={interest.image}
                    alt={interest.imageAlt || ''}
                    className="w-full h-40 object-cover"
                    onError={e => {
                      (
                        e.target as HTMLImageElement
                      ).parentElement!.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
