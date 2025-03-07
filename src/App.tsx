'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { GlowingEffect } from "@/components/ui/glowing-effect";

const navigation = [
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Achievements', href: '#' },
  { name: 'Socials', href: '#' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-full w-full bg-gray-50">
      {/* <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}
      <div className="
          absolute
          inset-0
          h-full
          w-full

          /* Background color */
          [--bg-color:theme('colors.zinc.50')]
          bg-[var(--bg-color)]

          /* Spacing between pattern repeats */
          [--s:20px] 

          /* Dot size and color */
          [--dot-size:1px]
          [--dot-colour:theme('colors.zinc.300')]

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
            <a href="#" className="-m-1.5 p-1.5">
              <span>ojhstill</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Email me
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span>ojhstill</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Email me
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
            <h1 className="relative z-10 text-5xl font-semibold tracking-tight text-stroke sm:text-7xl">
              <GlowingEffect
                blur={3}
                inactiveZone={0.7}
                proximity={50}
                spread={30}
                glow
                variant="default"
                borderWidth={5}
                movementDuration={2}
                disabled={false}
              />
              Software Engineer, UI-UX Designer, and Agile Scrum Master.
            </h1>
          </div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Hi, I'm Oli. 👋 I'm a Software Engineer currently living in Bristol. Here is my complete online portfolio, including all work history and personal projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
