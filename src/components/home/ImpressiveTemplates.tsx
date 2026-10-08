import RevealAnimation from '@/components/animation/RevealAnimation';
import { AgendaCard, ClientsCard, TemplateCard } from '@/components/bookhero/visuals';
import Icon from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/Button';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

const ShellCard = ({
  delay,
  panelClassName,
  title,
  text,
  children,
}: {
  delay: number;
  panelClassName?: string;
  title: string;
  text: string;
  children: ReactNode;
}) => (
  <div className="col-span-12 lg:col-span-6">
    <RevealAnimation delay={delay}>
      <div className="bg-background-4 space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-[28px]">
        <div
          className={cn(
            'relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white p-4 sm:h-[375px]',
            panelClassName,
          )}>
          {children}
        </div>
        <div className="h-[120px] w-full space-y-2.5 rounded-3xl bg-white p-4">
          <h4 className="text-heading-6 text-secondary/90 font-normal">{title}</h4>
          <p className="text-secondary/60 text-tagline-1 max-w-[320px] font-normal">{text}</p>
        </div>
      </div>
    </RevealAnimation>
  </div>
);

const ImpressiveTemplates = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        id="correos"
        className="mx-5 rounded-3xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:rounded-4xl md:py-20 lg:py-24 xl:rounded-[56px] xl:py-39"
        aria-labelledby="impressive-heading">
        <div className="main-container">
          <div className="space-y-14 lg:space-y-[70px]">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge bg-accent/20 text-tagline-3 text-white uppercase">Así funciona por dentro</span>
              </RevealAnimation>
              <div className="space-y-4">
                <RevealAnimation delay={0.2}>
                  <h2 id="impressive-heading" className="text-accent mx-auto max-w-[800px] font-normal">
                    Cada reserva queda ordenada y confirmada
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/80 mx-auto max-w-[690px] text-lg leading-[150%] font-normal">
                    Cuatro piezas simples que trabajan juntas: agenda, aviso por correo, clientes y un mensaje a tu manera.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-2">
              <ShellCard
                delay={0.1}
                title="Agenda siempre clara"
                text="Las citas de hoy, ordenadas por hora, a un vistazo.">
                <div className="scale-95">
                  <AgendaCard className="!shadow-[0_10px_40px_rgba(10,26,69,.12)] ring-1 ring-stroke-4" />
                </div>
              </ShellCard>

              <ShellCard
                delay={0.2}
                panelClassName="bg-[linear-gradient(to_bottom,#142e6e,#edf2ff)]"
                title="Aviso automático por correo"
                text="Cuando guardas la cita, tu cliente recibe su confirmación.">
                <div className="relative flex flex-col items-center">
                  <span className="bh-success-pulse bg-white/25 relative flex size-36 items-center justify-center rounded-full ring-1 ring-white/60 backdrop-blur-sm">
                    <span className="bg-white flex size-24 items-center justify-center rounded-full text-primary-500">
                      <Icon name="mail" className="size-10" />
                    </span>
                    <span className="bg-bh-amber text-secondary absolute -right-1 -bottom-1 flex size-11 items-center justify-center rounded-full ring-4 ring-white/70">
                      <Icon name="check" className="size-6" />
                    </span>
                  </span>
                  <span className="bg-white text-secondary text-tagline-2 mt-6 rounded-full px-5 py-2 shadow-lg">
                    Confirmación enviada
                  </span>
                </div>
              </ShellCard>

              <ShellCard
                delay={0.1}
                title="Clientes ordenados"
                text="Busca por nombre o correo y consulta su historial de citas.">
                <div className="scale-95">
                  <ClientsCard className="!shadow-[0_10px_40px_rgba(10,26,69,.12)] ring-1 ring-stroke-4" />
                </div>
              </ShellCard>

              <ShellCard
                delay={0.2}
                title="Un mensaje a tu manera"
                text="Edita asunto y texto con variables y mira la vista previa.">
                <div className="scale-95">
                  <TemplateCard className="!shadow-[0_10px_40px_rgba(10,26,69,.12)] ring-1 ring-stroke-4" />
                </div>
              </ShellCard>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="mx-auto mt-14 w-[80%] text-center sm:w-auto md:mx-0">
              <LinkButton href="/app" className="btn-v3-secondary btn-v3-lg mx-auto w-full sm:w-fit" ariaLabel="Probar la demo">
                Probar la demo
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

ImpressiveTemplates.displayName = 'ImpressiveTemplates';
export default ImpressiveTemplates;
