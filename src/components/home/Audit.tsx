import { AgendaCard, MailCard } from '../bookhero/ProductPreview';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[200px] xl:pb-[200px]">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 xl:gap-x-[165px]">
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-secondary dark:text-accent">Prueba tu agenda ahora, sin registro.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60">
                    Abre el panel de demostración, recorre el asistente de configuración y agenda tu primera cita de
                    ejemplo. Directo en tu navegador.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/app"
                    className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md">
                    Abrir la demo
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-3 dark:bg-background-7 flex flex-col gap-4 overflow-hidden rounded-2xl p-6">
                <AgendaCard className="!bg-white dark:!bg-background-9" />
                <MailCard />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
