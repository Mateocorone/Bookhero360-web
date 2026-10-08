import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/Button';

const lite = [
  'Calendario mensual y semanal',
  'Directorio de clientes con historial',
  'Confirmación de reserva por correo',
  'Mensaje con variables y vista previa',
  'Asistente de configuración inicial',
];

const pro = [
  'Chatbot y respuestas por WhatsApp',
  'Captura de leads con CRM',
  'Facturación automática',
  'Alertas y flujos a medida',
];

const Plans = () => {
  return (
    <section id="planes" className="py-18 md:py-20 lg:py-24 xl:py-39" aria-labelledby="plans-heading">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 id="plans-heading" className="font-normal">
                Empieza lite, crece cuando quieras
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[620px] text-lg leading-[150%] font-normal">
                Bookhero360 cubre lo esencial para reservar. Si más adelante necesitas automatización completa, puedes dar
                el salto a Automatix360.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="bg-background-4 mx-auto grid max-w-[980px] gap-1 rounded-3xl p-1 md:grid-cols-2 md:rounded-4xl">
              <div className="rounded-[20px] bg-[linear-gradient(to_bottom,#142e6e,#2a4a9c)] p-8 text-white md:rounded-[28px] md:p-10">
                <span className="bg-bh-amber text-secondary text-tagline-3 inline-flex rounded-full px-3 py-1 font-medium uppercase">
                  Plan Lite
                </span>
                <h3 className="text-heading-4 mt-5 mb-2 font-normal text-white">Bookhero360</h3>
                <p className="mb-8 text-white/75">Todo lo necesario para organizar tus reservas.</p>
                <ul className="mb-10 space-y-3.5">
                  {lite.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-white/90">
                      <span className="bg-bh-amber text-secondary mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <Icon name="check" className="size-3" />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <LinkButton href="/app" className="btn-v3-white btn-v3-lg" ariaLabel="Probar la demo">
                  Probar la demo
                </LinkButton>
              </div>

              <div className="rounded-[20px] bg-white p-8 md:rounded-[28px] md:p-10">
                <span className="bg-background-4 text-secondary/70 text-tagline-3 inline-flex rounded-full px-3 py-1 font-medium uppercase">
                  Más funciones
                </span>
                <h3 className="text-heading-4 mt-5 mb-2 font-normal">Automatix360</h3>
                <p className="mb-8">Para negocios que necesitan automatización completa.</p>
                <ul className="mb-10 space-y-3.5">
                  {pro.map((x) => (
                    <li key={x} className="text-secondary/80 flex items-start gap-3">
                      <span className="bg-background-4 text-secondary/60 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <Icon name="check" className="size-3" />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <LinkButton
                  href="https://automatix360.it/"
                  target="_blank"
                  className="btn-v3-secondary btn-v3-lg"
                  ariaLabel="Conocer Automatix360">
                  Conocer Automatix360
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Plans.displayName = 'Plans';
export default Plans;
