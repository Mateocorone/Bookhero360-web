import RevealAnimation from '@/components/animation/RevealAnimation';
import { HeroVisual } from '@/components/bookhero/visuals';
import Icon from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/Button';

const perks = ['Solo correo', 'Sin chatbot ni WhatsApp', 'Listo en minutos'];

const Hero = () => {
  return (
    <RevealAnimation delay={0.1} instant>
      <section
        className="mx-[8px] mt-[8px] h-[1130px] overflow-hidden rounded-2xl bg-linear-to-b from-[#142e6e] to-[#edf2ff] sm:h-[920px] md:rounded-3xl lg:h-[1078px] lg:rounded-4xl xl:rounded-[56px]"
        aria-label="Bookhero360: agenda lite con confirmaciones por correo">
        <div className="main-container">
          <div className="relative pt-[160px] lg:pt-[206px]">
            <div className="flex items-center justify-center gap-x-14">
              <div className="space-y-13 lg:space-y-16 xl:space-y-19">
                <div className="space-y-8">
                  {/* chips de producto */}
                  <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Qué incluye">
                    {perks.map((perk, i) => (
                      <RevealAnimation key={perk} delay={0.1 + i * 0.1} direction="left" offset={50} instant>
                        <span className="text-tagline-2 inline-flex items-center gap-2 rounded-full bg-white/15 py-1.5 pr-4 pl-2 font-normal text-white ring-1 ring-white/30 backdrop-blur-sm">
                          <span className="bg-bh-amber text-secondary inline-flex size-5 items-center justify-center rounded-full">
                            <Icon name="check" className="size-3" />
                          </span>
                          {perk}
                        </span>
                      </RevealAnimation>
                    ))}
                  </div>
                  {/* texto */}
                  <div className="space-y-3 text-center">
                    <RevealAnimation delay={0.5} instant>
                      <h1 className="mx-auto max-w-[780px] font-medium text-white">
                        Reservas ordenadas, confirmadas por correo
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6} instant>
                      <p className="text-accent/80 mx-auto max-w-[620px] text-lg leading-[150%] font-normal lg:max-w-[682px]">
                        Bookhero360 es la agenda lite para negocios que viven de las citas: calendario, clientes y una
                        confirmación automática por correo en cada reserva.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
                {/* botones */}
                <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                  <RevealAnimation delay={0.7} direction="left" offset={50} instant>
                    <div className="w-[80%] text-center sm:w-auto md:mx-0 md:w-auto">
                      <LinkButton href="/app" className="btn-v3-lg btn-v3-white w-full sm:w-auto">
                        Probar la demo
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.8} direction="left" offset={50} instant>
                    <div className="w-[80%] text-center sm:w-auto md:mx-0 md:w-auto">
                      <LinkButton
                        href="/#funciones"
                        className="btn-v3-lg btn-v3-white bg-secondary/20 w-full text-white backdrop-blur-[2px] sm:w-auto">
                        Ver funciones
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <RevealAnimation delay={0.9} instant>
              <HeroVisual />
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Hero.displayName = 'Hero';
export default Hero;
