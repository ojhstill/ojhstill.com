import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
// import { Spotlight } from '@/components/ui/spotlight-new';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Link } from 'react-router-dom';
import {
  CodeSandboxLogoIcon,
  MixIcon,
  RocketIcon,
  TransformIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons';

const items = [
  {
    title: 'Full‑Stack Software Architect',
    description:
      'Transforming project requirements into scalable, end‑to‑end digital solutions – from designing cost‑efficient architectures to integrating with modern frameworks.',
    header: (
      <div className="flex flex-1 min-h-[6rem] h-20 md:h-44 lg:h-60 w-full">
        <img
          src="https://images.unsplash.com/photo-1669023414171-56f0740e34cd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={500}
          height={500}
          className="rounded-xl object-cover w-full"
        />
      </div>
    ),
    className: 'md:col-span-2',
    icon: <CodeSandboxLogoIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Client-Focused Technical Consultant',
    description:
      'Engaging with clients using tailored technical insights to drive innovation and support project delivery.',
    header: (
      <div className="flex flex-1 min-h-[6rem] h-20 md:h-44 lg:h-60 w-full">
        <img
          src="https://images.unsplash.com/photo-1675023071154-407c202d06c7?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={500}
          height={500}
          className="rounded-xl object-cover w-full"
        />
      </div>
    ),
    className: 'md:col-span-1',
    icon: <MixIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Development Team Leader',
    description:
      'Leading high‑performing teams with technical direction and driving continuous improvement.',
    header: (
      <div className="flex flex-1 min-h-[6rem] h-20 md:h-44 lg:h-60 w-full">
        <img
          src="https://images.unsplash.com/photo-1666336473880-aebebece24b4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={500}
          height={500}
          className="rounded-xl object-cover w-full"
        />
      </div>
    ),
    className: 'md:col-span-1',
    icon: <RocketIcon aria-hidden="true" className="size-6" />,
  },
  {
    title: 'Dynamic Product Designer',
    description:
      'Merging front-end expertise with UI-UX design principles to craft intuitive and accessibile products that resonate with users.',
    header: (
      <div className="flex flex-1 min-h-[6rem] h-20 md:h-44 lg:h-60 w-full">
        <img
          src="https://images.unsplash.com/photo-1675023112820-84a7ee71a119?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={500}
          height={500}
          className="rounded-xl object-cover w-full"
        />
      </div>
    ),
    className: 'md:col-span-2',
    icon: <TransformIcon aria-hidden="true" className="size-6" />,
  },
];

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-foreground/60 hover:ring-foreground/30">
            I've recently joined Wattle.{' '}
            <Link
              to="https://www.wearewattle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Learn more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        {/* <Spotlight duration={20} translateY={-250} /> */}
        <div className="text-center">
          <div className="relative inline-block">
            <h1 className="relative z-10 text-4xl sm:text-7xl font-semibold tracking-tight">
              Software Engineer, Product Designer, and Agile Leader.
            </h1>
          </div>
          <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
            Hi, I'm Oli. 👋 I'm currently a Software Engineer based in Bristol
            building new things at Wattle. Here is my complete online portfolio,
            including all work history and personal projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 text-xs/6 lg:text-sm">
            <Link
              to="/journey"
              className="rounded-md bg-primary hover:bg-primary/70 text-primary-foreground px-3.5 py-2.5 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              See My Career Journey
            </Link>
            <Link
              to="mailto:oliver@ojhstill.com"
              className="font-semibold flex items-center gap-2 hover:text-primary/70"
            >
              Let’s Collaborate
              <ArrowRightIcon aria-hidden="true" />
            </Link>
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
      <BackgroundBeams />
    </>
  );
}
