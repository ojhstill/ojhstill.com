'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { HamburgerMenuIcon, Cross1Icon, CodeSandboxLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, MixIcon, RocketIcon, RulerSquareIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
    title: "Full‑Stack Software Architect",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <CodeSandboxLogoIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "Certified Agile Leader & Consultant",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <RocketIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "Dynamic Product Designer",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <RulerSquareIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <MixIcon aria-hidden="true" className="size-6" />,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full w-full pb-20">
      <div className="
        absolute inset-0

        /* Background color */
        bg-[theme('colors.zinc.50')]
        dark:bg-[theme('colors.zinc.900')]

        /* Spacing between pattern repeats */
        [--s:20px]

        /* Dot size and color */
        [--dot-size:1px]
        [--dot-colour:theme('colors.zinc.300')]
        dark:[--dot-colour:theme('colors.zinc.700')]

        /* Construct the radial gradient from the custom properties */
        [--g:radial-gradient(var(--dot-size)_at_25%_50%,var(--dot-colour)_96%,transparent)]

        /* Two layers of the same gradient, positioned differently for the isometric effect */
        [background-image:var(--g),var(--g)]
        [background-position:0_0,var(--s)_calc(var(--s)/2)]
        [background-size:calc(2*var(--s))_var(--s)]
        
        /* Mask to add vignette/fade effect to edges (optional) */
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
      "
      />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span>ojhstill</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 p-2.5 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold">
              Get in Touch
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel transition className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-sidebar px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 duration-300 ease-out data-[closed]:opacity-0 md:data-[closed]:translate-x-1">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span>ojhstill</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 cursor-pointer"
              >
          <span className="sr-only">Close menu</span>
          <Cross1Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 flex rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent"
            >
              Get in Touch
            </a>
          </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
              <a
                href="/timeline"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                My Career So Far
              </a>
              <a href="#" className="text-sm/6 font-semibold flex items-center gap-2">
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
      </div>
    </div>
  )
}
