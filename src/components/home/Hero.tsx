import { ProductPreview } from '../bookhero/ProductPreview';
import Icon from '../brand/Icon';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const perks = ['Solo correo', 'Sin chatbot ni WhatsApp', 'Listo en minutos'];

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="relative z-10 pt-[200px] pb-[100px] 2xl:pt-[280px]">
        <div className="main-container z-10">
          <div className="mb-[70px] flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="text-secondary dark:text-accent mb-4 max-w-[1000px] font-medium">
                Reservas ordenadas, <span className="text-primary-500">confirmadas por correo</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60 dark:text-accent/60 mb-7 max-w-[850px] md:mb-14">
                Bookhero360 es la agenda lite para negocios que viven de las citas: calendario, clientes y una
                confirmación automática por correo en cada reserva.
              </p>
            </RevealAnimation>
            <ul className="mb-7 flex w-[90%] flex-col gap-4 md:mb-14 md:w-auto md:flex-row">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/app"
                    className="btn btn-secondary btn-xl dark:btn-accent hover:btn-white dark:hover:btn-white-dark bh-sheen w-[90%] sm:w-auto">
                    Probar la demo
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/#funciones"
                    className="btn hover:btn-secondary dark:btn-dark btn-white btn-xl dark:bg-accent/20 dark:text-accent w-[90%] border-0 sm:w-auto">
                    Ver funciones
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {perks.map((perk, i) => (
                <RevealAnimation key={perk} delay={0.5 + i * 0.1} direction="right" offset={50}>
                  <li className="text-secondary/80 dark:text-accent/80 text-tagline-2 inline-flex items-center gap-2 font-medium">
                    <span className="bg-ns-green text-secondary inline-flex size-5 items-center justify-center rounded-full">
                      <Icon name="check" className="size-3" />
                    </span>
                    {perk}
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <RevealAnimation delay={0.9} instant={true}>
            <ProductPreview />
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;
