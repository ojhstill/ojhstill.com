import { Timeline } from '@/components/ui/timeline';

const data = [
  {
    date: '2025',
    title: 'Joining Wattle',
    content: (
      <div>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-4 mb-8">
          <p>
            After eight months of freelancing, I joined Wattle as a Software
            Engineer. Here, I'm responsible for leading the architecture and
            development of the company's new MemEx portal, a platform that helps
            membership organisations manage their members thoguht a suite of
            digital tools.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E0BAQHKZKFz-Zus0w/company-logo_200_200/company-logo_200_200/0/1663664358840/wattle_solutions_ltd_logo?e=1749686400&v=beta&t=jyrmjYzytbUhT3NFAwGuTAWZEoEZ1CyFU-MTKXqWc-E"
            alt="Wattle Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQESSeUoejLngQ/feedshare-shrink_1280/B4EZT054EyHcAk-/0/1739275601156?e=1744243200&v=beta&t=6O8rkQgC14ebt65jMiszbgpQgwGN-qsNPEvOQUIIFA8"
            alt="Wattle Office Space"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          {/* <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      </div>
    ),
  },
  {
    date: '2024',
    title: 'Going Freelance in Bristol',
    content: (
      <div>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-4 mb-8">
          <p>
            After an incredible two and a half years at Roke, I took the
            opportunity to move to Bristol and explore the world of freelancing
            and consulting. I worked with a number of clients on a variety of
            projects, including full-stack Shopify solutions, software testing,
            and creating React websites Python for data scraping.
          </p>
          <p>
            Outside of engineering, I focused on my long-standing passion for
            music, producing my debut album set for release 2025, and regularly
            participate in charity running events, recently raising over £500
            for the British Red Cross at the 2024 Great North Run.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://abcounties.com/wp-content/uploads/2023/02/bristol-997x375.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQHORXPFp-4M_Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1725978809588?e=1744243200&v=beta&t=cLhQ6FPKh3HiQehWlDDt_UXSVF_HmHZ85EQAb68G30Q"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          {/* <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      </div>
    ),
  },
  {
    date: '2021',
    title: 'Begining at Roke',
    content: (
      <div>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-4 mb-8">
          <p>
            I began my career through Roke’s two-year graduate scheme in Future
            Compute & Agile Software, initially as a full-stack engineer on a
            large Agile Scrum project specialising in accessibility, earning an
            internal award for quality project delivery.
          </p>
          <p>
            I also was a technical lead for a project migrating an Angular
            application to Vue, improving its architecture and mentoring junior
            developers. Alongside technical roles, I contributed to business
            development campaigns, supporting client strategies, conducting
            interviews, hosting UI/UX workshops, and organising corporate social
            events.
          </p>
        </div>
        {/* <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Card grid component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Startup template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Random file upload lol
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQEe5TwWpKAqxA/company-logo_200_200/company-logo_200_200/0/1738857449783/roke_manor_research_logo?e=2147483647&v=beta&t=UrP4elG616Zuz7oxm-cJ_FcKk-vnilf8MLca3opYMl4"
            alt="Roke Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://www.roke.co.uk/media/arenugbt/2015-roke-2.png"
            alt="Roke Romsey Site"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          {/* <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      </div>
    ),
  },
];

export default function Journey() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          My Career Journey
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          Here's a quick overview of my career journey so far, showcasing some
          highlights from my work history and freelance projects.
        </p>
        <Timeline data={data} />
      </div>
    </div>
  );
}
