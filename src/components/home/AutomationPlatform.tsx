import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '@/components/animation/RevealAnimation';

interface NumberCard {
  number: number;
  suffix: string;
  title: string;
  description: string;
}

const numberCards: NumberCard[] = [
  { number: 5, suffix: ' pasos', title: 'Configuración', description: 'Negocio, calendario, servicio, horarios y notificación: así de simple es empezar.' },
  { number: 1, suffix: ' correo', title: 'Confirmación', description: 'Cada reserva envía un aviso al cliente con el servicio, la fecha y la hora.' },
  { number: 0, suffix: ' apps', title: 'Instalación', description: 'Todo funciona desde el navegador, sin instalar nada ni conectar canales extra.' },
];

const seals = [
  { top: 'Versión', label: 'Lite', tint: '#142e6e' },
  { top: 'Avisos por', label: 'Solo correo', tint: '#ffc94d' },
  { top: 'Configuración', label: 'En minutos', tint: '#142e6e' },
  { top: 'Canales', label: 'Sin WhatsApp', tint: '#ffc94d' },
  { top: 'Soporte', label: 'En español', tint: '#142e6e' },
];

const Seal = ({ top, label, tint, featured }: { top: string; label: string; tint: string; featured: boolean }) => (
  <div
    className={`relative flex aspect-[139/160] w-full max-w-[139px] flex-col items-center justify-center text-center ${featured ? '' : 'scale-90'}`}
    style={{ clipPath: 'polygon(0 0,100% 0,100% 74%,50% 100%,0 74%)', background: tint }}>
    <div
      className="absolute inset-[3px] flex flex-col items-center justify-center bg-white px-2 pb-4"
      style={{ clipPath: 'polygon(0 0,100% 0,100% 74%,50% 100%,0 74%)' }}>
      <span className="text-secondary/50 text-[10px] leading-none font-semibold uppercase">{top}</span>
      <span className="text-secondary mt-1.5 text-lg leading-[110%] font-bold">{label}</span>
      <span className="mt-2 h-1 w-8 rounded-full" style={{ background: tint }} />
    </div>
  </div>
);

const AutomationPlatform = () => {
  return (
    <section className="py-18 md:py-20" aria-labelledby="automation-platform-heading">
      <div className="main-container">
        <div className="space-y-[35px] md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 id="automation-platform-heading" className="mx-auto max-w-[1000px] text-center font-normal">
              Lite por diseño: solo lo que necesitas para reservar, sin ruido.
            </h2>
          </RevealAnimation>

          <div className="flex items-center justify-center gap-x-2" aria-label="Lo esencial de Bookhero360">
            {seals.map((seal, index) => (
              <RevealAnimation key={seal.label} delay={0.2 + index * 0.1}>
                <Seal {...seal} featured={index === 2} />
              </RevealAnimation>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.7}>
          <div
            className="bg-background-4 mt-14 flex flex-col items-center justify-center gap-x-1 gap-y-4 rounded-4xl p-1 lg:flex-row lg:gap-y-0"
            aria-label="Cifras de la versión Lite">
            {numberCards.map((card, index) => (
              <RevealAnimation key={card.title} delay={0.7 + index * 0.1}>
                <div className="w-full max-w-[425px] space-y-2 rounded-[28px] bg-white p-8 md:p-[52px]">
                  <h3 className="flex items-center justify-start font-medium" aria-label={`${card.number}${card.suffix}`}>
                    <NumberAnimation number={card.number} speed={1500} interval={150} rooms={1} heightSpaceRatio={2.1} />
                    <span className="font-inherit ml-3">{card.suffix.trim()}</span>
                  </h3>
                  <p className="text-secondary text-tagline-1 font-medium">{card.title}</p>
                  <p>{card.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

AutomationPlatform.displayName = 'AutomationPlatform';
export default AutomationPlatform;
