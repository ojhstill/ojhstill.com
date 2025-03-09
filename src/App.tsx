'use client'

import { useState } from 'react'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import { CodeSandboxLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, MixIcon, RocketIcon, TransformIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Footer from '@/components/Footer';

const navigation = [
  { name: 'Timeline', href: '/timeline' },
  // { name: 'Achievements', href: '#' },
  { name: 'GitHub', icon: <GitHubLogoIcon aria-hidden="true" />, href: 'https://github.com/ojhstill' },
  { name: 'LinkedIn', icon: <LinkedInLogoIcon aria-hidden="true" />, href: 'https://www.linkedin.com/in/ojhstill' },
]

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800"></div>
);

const items = [
  {
    title: "Full‑Stack Solutions Architect",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <CodeSandboxLogoIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "Client-Focused Technical Consultant",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <MixIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "Certified Agile Team Leader",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <RocketIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "Dynamic Product Designer",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <TransformIcon aria-hidden="true" className="size-6" />,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full w-full pb-20">
      <div className="
        absolute inset-0 bg-background
        [--s:20px]
        [--dot-size:1px]
        [--dot-colour:theme('colors.zinc.300')]
        dark:[--dot-colour:theme('colors.zinc.700')]
        [--g:radial-gradient(var(--dot-size)_at_25%_50%,var(--dot-colour)_96%,transparent)]
        [background-image:var(--g),var(--g)]
        [background-position:0_0,var(--s)_calc(var(--s)/2)]
        [background-size:calc(2*var(--s))_var(--s)]
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
      "
      />

      <Header navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              I've recently joined Wattle.{' '}
              <a href="#" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-foreground/50 hover:ring-foreground/20">
              I've recently joined Wattle.{' '}
              <a href="#" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="relative inline-block p-6">
              <h1 className="relative z-10 text-5xl font-semibold tracking-tight sm:text-7xl">
                Software Engineer, Product Designer, and Agile Leader.
              </h1>
            </div>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Hi, I'm Oli. 👋 I'm currently a Software Engineer based in Bristol working at Wattle. Here is my complete online portfolio, including all work history and freelance projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/timeline" className="rounded-md bg-primary hover:bg-zinc-300 text-primary-foreground px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                See My Career Timeline
              </a>
              <a href="/contact" className="text-sm/6 font-semibold flex items-center gap-2 hover:text-zinc-300">
                Let’s Collaborate
                <ArrowRightIcon aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <Footer />
      </div>
      </div>
  )
}
