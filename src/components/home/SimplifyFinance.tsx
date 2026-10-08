import RevealAnimation from '@/components/animation/RevealAnimation';
import { AgendaCard, MailCard, VisualPanel } from '@/components/bookhero/visuals';
import Icon, { IconName } from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/Button';

const featureCards: { icon: IconName; title: string }[] = [
  { icon: 'calendar', title: 'Calendario mes y semana' },
  { icon: 'users', title: 'Directorio de clientes' },
  { icon: 'mail', title: 'Confirmación por correo' },
  { icon: 'sparkles', title: 'Mensaje con variables' },
];

const IconCard = ({ icon, title, delay, className }: { icon: IconName; title: string; delay: number; className?: string }) => (
  <RevealAnimation delay={delay}>
    <div
      className={`flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8 ${className ?? ''}`}>
      <span className="bg-primary-500 flex size-14 items-center justify-center rounded-xl text-white" aria-hidden="true">
        <Icon name={icon} className="size-6" />
      </span>
      <h3 className="text-heading-6 text-secondary/60 font-normal">{title}</h3>
    </div>
  </RevealAnimation>
);

const SimplifyFinance = () => {
  return (
    <section className="py-18 md:py-20 lg:py-24 xl:py-39" aria-labelledby="simplify-heading">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <h2 id="simplify-heading" className="font-normal">
                Agendar es fácil, simplifica tu negocio
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[650px] text-lg leading-[150%] font-normal lg:max-w-[900px]">
                Desde la primera cita hasta el aviso por correo, Bookhero360 reúne lo esencial en un panel claro para que
                dediques tu tiempo a atender, no a coordinar.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <ul
              className="bg-background-4 grid grid-cols-12 items-center justify-center gap-3 overflow-hidden rounded-3xl p-3 lg:gap-2 lg:p-2 xl:gap-1 xl:p-1"
              aria-label="Funciones de Bookhero360">
              <li className="col-span-12 md:col-span-4 lg:col-span-3">
                <IconCard {...featureCards[0]} delay={0.3} />
              </li>
              <li className="col-span-12 md:col-span-4 lg:col-span-3">
                <IconCard {...featureCards[1]} delay={0.4} />
              </li>
              <li className="col-span-12 md:col-span-4 lg:col-span-3">
                <IconCard {...featureCards[2]} delay={0.5} />
              </li>

              {/* tarjeta alta con visual */}
              <li className="col-span-12 row-span-2 md:col-span-4 lg:col-span-3">
                <RevealAnimation delay={0.6}>
                  <figure className="group h-[408px] w-full overflow-hidden rounded-[21px]">
                    <VisualPanel>
                      <div className="scale-[.85] transition-transform duration-500 ease-in-out group-hover:scale-90">
                        <AgendaCard />
                      </div>
                    </VisualPanel>
                  </figure>
                </RevealAnimation>
              </li>

              <li className="col-span-12 md:hidden lg:col-span-3 lg:block">
                <IconCard {...featureCards[3]} delay={0.3} />
              </li>

              {/* tarjeta ancha con visual */}
              <li className="col-span-12 md:col-span-8 lg:col-span-3">
                <RevealAnimation delay={0.4}>
                  <figure className="group h-[202px] w-full overflow-hidden rounded-[21px]">
                    <VisualPanel className="items-start pt-5">
                      <div className="scale-[.8] transition-transform duration-500 ease-in-out group-hover:scale-85">
                        <MailCard />
                      </div>
                    </VisualPanel>
                  </figure>
                </RevealAnimation>
              </li>

              <li className="col-span-12 md:col-span-4 lg:col-span-3">
                <RevealAnimation delay={0.5}>
                  <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8">
                    <h3 className="text-heading-6 font-normal">Toda tu agenda en un solo lugar</h3>
                    <div>
                      <LinkButton href="/app" className="btn-v3-secondary btn-v3-lg" ariaLabel="Abrir la agenda">
                        Abrir la agenda
                      </LinkButton>
                    </div>
                  </div>
                </RevealAnimation>
              </li>

              <li className="col-span-4 hidden md:block lg:hidden">
                <IconCard {...featureCards[3]} delay={0.3} />
              </li>
            </ul>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

SimplifyFinance.displayName = 'SimplifyFinance';
export default SimplifyFinance;
