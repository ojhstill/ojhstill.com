import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  CodeSandboxLogoIcon,
  MixIcon,
  RocketIcon,
  TransformIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons';

const Skeleton = () => (
  <div className="flex flex-1 min-h-[6rem] h-20 md:h-44 lg:h-60 w-full">
    <img
      src="https://media.licdn.com/dms/image/v2/D4E16AQFW7N4dFENiIQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1703259010042?e=1747267200&v=beta&t=LI30JYly02u-00Umi0Xq6LdvIGb9fEl1JDRCN-XUbUU"
      alt="Wattle Logo"
      width={500}
      height={500}
      className="rounded-xl object-cover"
    />
  </div>
);

const items = [
  {
    title: 'Full‑Stack Software Architect',
    description:
      'Transforming complex project requirements into scalable, end‑to‑end digital solutions – from designing cost‑efficient architectures for e‑commerce platforms to integrating modern frameworks with robust back‑end systems.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <CodeSandboxLogoIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Client-Focused Technical Consultant',
    description:
      'Empowering businesses with tailored technical insights and hands‑on support – spearheading client engagement strategies to drive innovation.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <MixIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Certified Agile Team Leader',
    description:
      'Leading high‑performing teams with agile methodologies – demonstrated by boosting Scrum velocity, mentoring junior talent, and driving technical change.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <RocketIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Dynamic Product Designer',
    description:
      'Merging full‑stack expertise with creative design principles – from revamping digital portals to championing accessibility standards, crafting intuitive products that resonate with users.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <TransformIcon aria-hidden="true" className="size-6" />,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-foreground/50 hover:ring-foreground/20">
              I've recently joined Wattle.{' '}
              <a
                href="https://www.wearewattle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary"
              >
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
              Hi, I'm Oli. 👋 I'm currently a Software Engineer based in Bristol
              building new things at Wattle. Here is my complete online
              portfolio, including all work history and personal projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/timeline"
                className="rounded-md bg-primary hover:bg-zinc-300 text-primary-foreground px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See My Career Timeline
              </a>
              <a
                href="/contact"
                className="text-sm/6 font-semibold flex items-center gap-2 hover:text-zinc-300"
              >
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
    </>
  );
}
