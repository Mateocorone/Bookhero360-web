import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="border-stroke-4 dark:border-stroke-6 dark:bg-background-5 border-t pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[112px]">
        <div className="main-container">
          <div className="mx-auto max-w-[649px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Empieza hoy</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">¿Listo para ordenar tus reservas?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6">
                Deja de perder citas por mensajes sueltos. Configura tu agenda en minutos y que cada cliente reciba su
                confirmación por correo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center">
                <LinkButton
                  href="/app"
                  className="btn btn-secondary hover:btn-white btn-md dark:btn-accent dark:hover:btn-white-dark">
                  Abrir la agenda.
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
