'use client';

import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ProcessItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  progressWidth: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Deep audit & discovery.',
    description: 'We assess your current digital footprint and uncover hidden opportunities.',
    progressWidth: '0%',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Campaign planning & execution.',
    description: 'Strategy-first campaigns tailored to your goals, industry, and audience.',
    progressWidth: '0%',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Weekly optimization cycles.',
    description: 'We test, iterate, and adjust for maximum performance every week.',
    progressWidth: '0%',
  },
];

const Steps = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="-mt-[160px] pt-14 pb-14 sm:-mt-0 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
        aria-label="Application Steps">
        <div className="main-container">
          <div className="space-y-14">
            <div ref={ref} className="progress-container flex flex-col items-start gap-8 md:flex-row xl:items-center">
              {processItems.map((process, index) => (
                <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                  <div className="max-w-[388px] space-y-3 md:w-full" aria-label={`Step ${process.stepNumber}`}>
                    <div className="bg-stroke-2 dark:bg-stroke-6 relative h-1 w-full overflow-hidden rounded-full">
                      <div
                        className={`progress-line w-[${process.progressWidth}] bg-ns-green absolute left-0 h-full rounded-full`}
                      />
                    </div>
                    <p className="text-tagline-2 text-primary-500">{process.stepNumber}</p>

                    <div className="space-y-2">
                      <h2 className="text-heading-5">{process.title}</h2>
                      <p className="w-full">{process.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.6}>
              <div className="text-start">
                <LinkButton
                  href="/process"
                  className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white"
                  aria-label="Start your application">
                  Learn about our approach.
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;
