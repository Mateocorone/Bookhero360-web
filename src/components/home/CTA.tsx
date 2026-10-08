import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const CTA = () => {
  return (
    <section className="py-18 md:py-20 lg:py-24 xl:py-39" aria-labelledby="cta-heading">
      <div className="main-container">
        <div className="text-center">
          <div className="space-y-14">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 id="cta-heading" className="mx-auto max-w-[620px] font-normal">
                  ¿Listo para ordenar tus reservas?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="mx-auto max-w-[420px]">
                  Configura tu agenda en minutos y que cada cliente reciba su confirmación por correo.
                </p>
              </RevealAnimation>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <div className="w-[80%] sm:w-full md:mx-0 md:w-auto">
                  <LinkButton href="/app" className="btn-v3-secondary btn-v3-lg w-full sm:w-fit" ariaLabel="Abrir la agenda">
                    Abrir la agenda
                  </LinkButton>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <div className="w-[80%] sm:w-full md:mx-0 md:w-auto">
                  <LinkButton
                    href="/#planes"
                    className="btn-v3-lg btn-v3-stone w-full sm:w-fit"
                    ariaLabel="Ver los planes">
                    Ver los planes
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
