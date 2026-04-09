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
    text: `I've been teaching myself French properly for a few years now — partly to aid my travels abroad rather than relying on hand gestures and confidence. Currently at B1 and comfortable in most native conversations.`,
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
                  I care about building things that work — for the people using
                  them, the teams delivering them, and the clients relying on
                  them.
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
            I'm Oli — a Technical Product Owner at Wattle, living in Bristol
            since 2024. I came from a software engineering background and
            gradually moved closer to the people and strategy side of building
            things.
          </p>
          <p>
            The work I enjoy most sits between technical complexity and human
            communication — figuring out what to build, making sure the team's
            aligned, and being the person in the room who stays calm when things
            get noisy.
          </p>
          <p>
            I care about culture as much as capability. The best teams I've
            worked in have been honest with each other, and I try to contribute
            to that rather than just benefit from it.
          </p>
          <p>Here's what I do when I log off.</p>
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
