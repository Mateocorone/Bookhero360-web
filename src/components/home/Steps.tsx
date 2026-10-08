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
    title: 'Cuéntanos de tu negocio.',
    description: 'Nombre, correo remitente y país: lo único que necesitas para empezar.',
    progressWidth: '0%',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Define servicio y horarios.',
    description: 'Tu servicio principal, su duración y tu jornada semanal, en pocos clics.',
    progressWidth: '0%',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Recibe reservas y confirma.',
    description: 'Agenda las citas y tu cliente recibe el correo de confirmación al instante.',
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
        id="como-funciona"
        className="-mt-[160px] pt-14 pb-14 sm:-mt-0 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
        aria-label="Pasos para empezar">
        <div className="main-container">
          <div className="space-y-14">
            <div ref={ref} className="progress-container flex flex-col items-start gap-8 md:flex-row xl:items-center">
              {processItems.map((process, index) => (
                <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                  <div className="max-w-[388px] space-y-3 md:w-full" aria-label={`Paso ${process.stepNumber}`}>
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
                  href="/app"
                  className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white"
                  aria-label="Abrir el panel de demostración">
                  Abrir el panel de demostración.
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
