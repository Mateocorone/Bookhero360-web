import { cn } from '@/utils/cn';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ResultCard {
  id: number;
  category: string;
  value: string;
  description: string;
}

const resultCards: ResultCard[] = [
  {
    id: 1,
    category: 'Clients',
    value: '4K+',
    description: 'Campaigns excuted in 2025',
  },
  {
    id: 2,
    category: 'Brand visibility',
    value: '92.5%',
    description: 'Platform uptime during peak campaign.',
  },
  {
    id: 3,
    category: 'satisfied clients globally.',
    value: '500+',
    description: 'Happy customers globally.',
  },
  {
    id: 4,
    category: 'Support response time.',
    value: '2 minutes',
    description: 'Support responds promptly',
  },
  {
    id: 5,
    category: 'Partnerships',
    value: '150+',
    description: 'Collaborations with institutions.',
  },
];

const Results = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 relative pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container">
          <div className="mx-4 mb-[70px] space-y-14 text-center sm:mx-0 sm:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="text-secondary dark:text-accent">Results that speak for themselves.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-secondary/60 dark:text-accent/60">
                  A dynamic digital marketing agency trusted by clients around the globe.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <div>
                <LinkButton
                  href="/case-study"
                  className="btn btn-secondary dark:btn-transparent btn-md hover:btn-white">
                  Read more success stories.
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="relative">
            <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
            <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
            <Marquee>
              <div className="mb-14 flex items-center justify-center gap-8">
                {resultCards.map((result, index) => (
                  <div
                    key={result.id}
                    className={cn(
                      'hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 group relative z-0 flex min-h-[270px] min-w-[320px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] bg-white p-8 transition-all duration-700 ease-in-out sm:min-w-[360px]',
                      index === 0 && 'ml-8',
                    )}>
                    <div className="pointer-events-none absolute -top-[107%] -right-[90%] -z-10 size-[500px] scale-90 -rotate-[60deg] opacity-0 transition-all duration-300 select-none group-hover:scale-100 group-hover:opacity-100">
                      <Image src="/images/ns-img-514.png" alt="gradient" width={500} height={500} />
                    </div>
                    <div className="transform transition-all duration-700 ease-in-out group-hover:translate-y-[4px]">
                      <p className="text-secondary/60 dark:text-accent/60 mb-2 text-lg transition-colors duration-700 ease-in-out group-hover:text-white">
                        {result.category}
                      </p>
                      <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                        {result.value}
                      </h3>
                    </div>
                    <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transform transition-all duration-700 ease-in-out group-hover:translate-y-[-6px] group-hover:opacity-90">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Results;
