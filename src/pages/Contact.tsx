import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useHeroParallax } from '@/lib/useParallax';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowTopRightIcon,
  CheckIcon,
} from '@radix-ui/react-icons';

const links = [
  {
    label: 'Email',
    value: 'oliver@ojhstill.com',
    href: 'mailto:oliver@ojhstill.com',
    icon: EnvelopeClosedIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ojhstill',
    href: 'https://linkedin.com/in/ojhstill',
    icon: LinkedInLogoIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/ojhstill',
    href: 'https://github.com/ojhstill',
    icon: GitHubLogoIcon,
    external: true,
  },
];

export default function Contact() {
  const { textY } = useHeroParallax();
  const [copied, setCopied] = useState(false);

  function handleEmailClick(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText('oliver@ojhstill.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
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
                Get in touch
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Let's have a conversation.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you've got a project in mind, want to talk about
                architecture, or just fancy a chat — I'm always happy to
                connect. Drop me a line and I'll get back to you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact links */}
      <section className="max-w-xl mx-auto px-6 pb-24 sm:pb-32">
        <div className="space-y-3">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={link.label === 'Email' ? handleEmailClick : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="group flex items-center gap-4 px-5 py-4 border-b border-border/20 last:border-0 hover:bg-accent/5 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center size-10 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                <link.icon className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                  {link.label}
                </p>
                {link.label === 'Email' ? (
                  <div className="relative h-5 overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={copied ? 'copied' : 'address'}
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="text-sm font-medium text-foreground truncate absolute inset-0"
                      >
                        {copied ? 'Copied!' : link.value}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-foreground truncate">
                    {link.value}
                  </p>
                )}
              </div>
              {link.label === 'Email' ? (
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="shrink-0"
                    >
                      <CheckIcon className="size-4 text-accent" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-xs text-muted-foreground group-hover:text-accent transition-colors shrink-0 select-none"
                    >
                      Copy
                    </motion.span>
                  )}
                </AnimatePresence>
              ) : link.external ? (
                <ArrowTopRightIcon className="size-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0" />
              ) : null}
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
