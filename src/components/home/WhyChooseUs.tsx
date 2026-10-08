import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { DashboardVisual } from '@/components/bookhero/visuals';
import LinkButton from '@/components/ui/button/Button';

interface StatCard {
  label: string;
  value: number;
  suffix: string;
  rooms: number;
  heightSpaceRatio: number;
  ariaLabel: string;
}

const statCards: StatCard[] = [
  { label: 'Pasos para configurar', value: 5, suffix: '', rooms: 1, heightSpaceRatio: 2.1, ariaLabel: '5 pasos para configurar' },
  { label: 'Correo por reserva', value: 1, suffix: '', rooms: 1, heightSpaceRatio: 2.1, ariaLabel: '1 correo de confirmación por reserva' },
  { label: 'Vistas de calendario', value: 2, suffix: '', rooms: 1, heightSpaceRatio: 2.1, ariaLabel: '2 vistas de calendario' },
  { label: 'Variables en tu mensaje', value: 5, suffix: '', rooms: 1, heightSpaceRatio: 2.1, ariaLabel: '5 variables en tu mensaje' },
];

const WhyChooseUs = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        id="para-quien"
        className="mx-5 rounded-4xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:py-20 lg:py-24 xl:rounded-[56px] xl:py-39"
        aria-labelledby="why-choose-us-heading">
        <div className="main-container">
          <div className="space-y-14 md:space-y-[70px]">
            <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
              <div className="max-w-[700px] space-y-4 text-center lg:text-left xl:max-w-[905px]">
                <RevealAnimation delay={0.1}>
                  <h2 id="why-choose-us-heading" className="text-accent font-normal">
                    Hecha para negocios que viven de las citas.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-accent/80 font-normal">
                    Bookhero360 simplifica lo que antes eran mensajes, notas y hojas de cálculo. Tú agendas, tu cliente
                    recibe su confirmación y todo queda ordenado en un solo panel.
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.4}>
                <div className="mt-auto mb-0 flex w-full items-center justify-center md:w-auto">
                  <div className="mx-auto w-[80%] text-center sm:w-auto md:mx-0 md:text-right">
                    <LinkButton href="/app" className="btn-v3-white btn-v3-lg w-full sm:w-auto" ariaLabel="Probar la demo">
                      Probar la demo
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            <div className="space-y-3 md:space-y-2 xl:space-y-1">
              <RevealAnimation delay={0.3}>
                <figure className="w-full max-w-[1290px] overflow-hidden rounded-4xl bg-white/20 p-3 ring-2 ring-white backdrop-blur-sm sm:p-5">
                  <DashboardVisual />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <div className="rounded-4xl bg-white p-2" aria-label="Lo esencial de la versión Lite">
                  <ul className="grid grid-cols-12 items-center justify-center gap-x-2">
                    {statCards.map((stat) => (
                      <li
                        key={stat.label}
                        className="col-span-12 w-full max-w-[313px] space-y-2 rounded-2xl bg-white px-8 py-4 text-center md:col-span-6 lg:col-span-3 lg:text-left"
                        aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}>
                        <p className="text-secondary/40 text-heading-6 leading-[150%] font-normal text-nowrap">
                          {stat.label}
                        </p>
                        <h3
                          className="text-secondary flex items-center justify-center font-medium lg:justify-start"
                          aria-label={stat.ariaLabel}>
                          <NumberAnimation
                            number={stat.value}
                            speed={1000}
                            interval={180}
                            rooms={stat.rooms}
                            heightSpaceRatio={stat.heightSpaceRatio}
                          />
                          {stat.suffix}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
