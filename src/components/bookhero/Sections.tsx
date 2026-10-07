import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/LinkButton';
import { faqs, features, integrations, solutions, steps } from './content';

const pad = 'pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]';

export const SectionHead = ({ badge, title, text }: { badge: string; title: string; text?: string }) => (
  <div className="mx-auto mb-12 max-w-[700px] text-center md:mb-16">
    <RevealAnimation delay={0.1}>
      <span className="badge badge-cyan mb-5">{badge}</span>
    </RevealAnimation>
    <RevealAnimation delay={0.2}>
      <h2 className="mb-3">{title}</h2>
    </RevealAnimation>
    {text && (
      <RevealAnimation delay={0.3}>
        <p>{text}</p>
      </RevealAnimation>
    )}
  </div>
);

export const Features = ({ id = 'funciones' }: { id?: string }) => (
  <section id={id} className={pad}>
    <div className="main-container">
      <SectionHead
        badge="Funciones"
        title="Todo lo esencial para tu agenda"
        text="Seis funciones pensadas para negocios que quieren orden desde el primer día."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((f, i) => (
          <RevealAnimation key={f.title} delay={0.1 + i * 0.07}>
            <article className="border-stroke-2 dark:border-stroke-6 bg-background-1 dark:bg-background-9 hover:shadow-3 hover:border-primary-300 group h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5">
              <span className="bg-primary-100 text-primary-600 dark:bg-primary-500/20 group-hover:bg-primary-500 mb-5 flex size-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white items-center justify-center rounded-2xl">
                <Icon name={f.icon} className="size-6" />
              </span>
              <h3 className="text-heading-6 mb-2">{f.title}</h3>
              <p>{f.text}</p>
            </article>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export const HowItWorks = ({ id = 'como-funciona' }: { id?: string }) => (
  <section id={id} className={`${pad} bg-background-3/70 dark:bg-background-5/70 relative overflow-hidden`}>
    <div aria-hidden="true" className="bg-primary-300/25 pointer-events-none absolute -right-20 -bottom-24 size-[360px] rounded-full blur-[110px]" />
    <div className="main-container">
      <SectionHead badge="Cómo funciona" title="De cero a tu primera reserva en 4 pasos" />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, i) => (
          <RevealAnimation key={s.n} delay={0.1 + i * 0.1}>
            <div className="space-y-3">
              <div className="bg-stroke-2 dark:bg-stroke-6 relative h-1 w-full overflow-hidden rounded-full">
                <div className="bg-ns-green absolute left-0 h-full w-full rounded-full" />
              </div>
              <p className="text-tagline-2 text-primary-500">{s.n}</p>
              <h3 className="text-heading-5">{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export const Solutions = () => (
  <section className={pad}>
    <div className="main-container">
      <SectionHead
        badge="Soluciones"
        title="Tres áreas, un solo panel"
        text="Reservas, clientes y avisos en un espacio de trabajo simple."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <RevealAnimation key={s.title} delay={0.1 + i * 0.1}>
            <article className="border-stroke-2 dark:border-stroke-6 dark:bg-background-9 hover:shadow-3 h-full rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5">
              <span className="bg-secondary dark:bg-accent dark:text-secondary mb-6 flex size-14 items-center justify-center rounded-2xl text-white">
                <Icon name={s.icon} className="size-7" />
              </span>
              <h3 className="text-heading-5 mb-4">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <Icon name="check" className="text-primary-500 mt-0.5 size-5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export const Integrations = () => (
  <section className={`${pad} bg-background-3/70 dark:bg-background-5/70`}>
    <div className="main-container">
      <SectionHead
        badge="Compatibilidad"
        title="Funciona con lo que ya usas"
        text="Sin instalar apps extra: todo llega a la bandeja de entrada de tu cliente."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {integrations.map((it, i) => (
          <RevealAnimation key={it.title} delay={0.1 + i * 0.08}>
            <div className="border-stroke-2 dark:border-stroke-6 dark:bg-background-9 hover:shadow-3 h-full rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5">
              <Icon name={it.icon} className="text-primary-500 mb-4 size-8" />
              <h3 className="text-heading-6 mb-1">{it.title}</h3>
              <p className="text-tagline-1">{it.text}</p>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export const Plans = ({ id = 'planes', product = 'Bookhero360' }: { id?: string; product?: string }) => (
  <section id={id} className={pad}>
    <div className="main-container">
      <SectionHead badge="Planes" title="Empieza lite, crece cuando quieras" />
      <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2">
        <RevealAnimation delay={0.1}>
          <article className="border-primary-500 dark:bg-background-9 h-full rounded-3xl border-2 bg-white p-8">
            <span className="badge badge-primary-light mb-4">Plan Lite</span>
            <h3 className="text-heading-4 mb-2">{product}</h3>
            <p className="mb-6">Todo lo necesario para organizar tus reservas.</p>
            <ul className="mb-8 space-y-3">
              {[
                'Calendario mensual y semanal',
                'Directorio de clientes',
                'Confirmación de reserva por correo',
                'Mensaje con variables',
                'Asistente de configuración inicial',
              ].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <Icon name="check" className="text-primary-500" />
                  {x}
                </li>
              ))}
            </ul>
            <LinkButton href="/app" className="btn btn-primary btn-md w-full justify-center">
              Probar la demo
            </LinkButton>
          </article>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <article className="border-stroke-2 dark:border-stroke-6 dark:bg-background-9 hover:shadow-3 h-full rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5">
            <span className="badge badge-gray mb-4">Más funciones</span>
            <h3 className="text-heading-4 mb-2">Automatix360</h3>
            <p className="mb-6">Para negocios que necesitan automatización completa.</p>
            <ul className="mb-8 space-y-3">
              {[
                'Chatbot y respuestas por WhatsApp',
                'Captura de leads con CRM',
                'Facturación automática',
                'Alertas y flujos a medida',
              ].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <Icon name="check" className="text-secondary/50 dark:text-accent/50" />
                  {x}
                </li>
              ))}
            </ul>
            <LinkButton
              href="https://automatix360.it/"
              target="_blank"
              className="btn btn-secondary btn-md dark:btn-accent w-full justify-center">
              Conocer Automatix360
            </LinkButton>
          </article>
        </RevealAnimation>
      </div>
    </div>
  </section>
);

export const Faq = ({ id = 'faq' }: { id?: string }) => (
  <section id={id} className={`${pad} bg-background-3/70 dark:bg-background-5/70`}>
    <div className="main-container">
      <SectionHead badge="Preguntas frecuentes" title="Lo que suelen preguntar" />
      <div className="mx-auto max-w-[800px] space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group border-stroke-2 dark:border-stroke-6 dark:bg-background-9 rounded-2xl border bg-white p-5">
            <summary className="text-secondary dark:text-accent flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {f.q}
              <Icon name="plus" className="text-primary-500 transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const Cta = ({
  title = '¿Listo para ordenar tus reservas?',
  text = 'Prueba la agenda lite ahora mismo. Sin registro, directo en tu navegador.',
  href = '/app',
  label = 'Abrir la agenda',
}) => (
  <section className="border-stroke-4 dark:border-stroke-6 dark:bg-background-5 border-t pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[112px]">
    <div className="main-container">
      <div className="mx-auto max-w-[649px] text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan mb-5">Empieza hoy</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2 className="mb-3">{title}</h2>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mb-6">{text}</p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <div className="flex justify-center">
            <LinkButton
              href={href}
              className="btn btn-secondary hover:btn-white btn-md dark:btn-accent dark:hover:btn-white-dark">
              {label}
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </div>
  </section>
);
