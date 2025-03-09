import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
<>
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
            <a
              href="/timeline"
              className="rounded-md bg-primary hover:bg-zinc-300 text-primary-foreground px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              See My Career Timeline
            </a>
            <a href="/contact" className="text-sm/6 font-semibold flex items-center gap-2 hover:text-zinc-300">
              Let’s Collaborate
              <ArrowRightIcon aria-hidden="true" />
            </a>
          </div>
        </div>
        </>
  );
}
