import RevealAnimation from '@/components/animation/RevealAnimation';
import { AgendaCard, CalendarCard, MailCard, VisualPanel } from '@/components/bookhero/visuals';
import Icon, { IconName } from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/Button';
import { ReactNode } from 'react';

interface Vertical {
  title: string;
  text: string;
  tag: string;
  icon: IconName;
  visual: ReactNode;
}

const verticals: Vertical[] = [
  {
    title: 'Salud y bienestar',
    text: 'Consultorios, clínicas, psicólogos y fisioterapia: ordena consultas y seguimientos, y avisa a cada paciente por correo antes de su cita.',
    tag: 'Consultas y seguimientos',
    icon: 'shield',
    visual: <AgendaCard />,
  },
  {
    title: 'Belleza y cuidado personal',
    text: 'Salones, barberías y spas con la agenda del día siempre clara.',
    tag: 'Citas por servicio',
    icon: 'sparkles',
    visual: <CalendarCard className="max-w-[200px] !p-3" />,
  },
  {
    title: 'Talleres y servicios',
    text: 'Mecánicos, técnicos y asesores con horarios sin cruces y clientes avisados.',
    tag: 'Horarios sin cruces',
    icon: 'settings',
    visual: <MailCard className="max-w-[220px] !p-3" />,
  },
];

const Blog = () => {
  const [main, ...rest] = verticals;
  return (
    <RevealAnimation delay={0.1}>
      <section
        id="soluciones"
        className="mx-5 rounded-2xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:rounded-3xl md:py-20 lg:rounded-4xl lg:py-24 xl:rounded-[56px] xl:py-39"
        aria-labelledby="verticals-heading">
        <div className="main-container">
          <div className="space-y-14">
            <div className="space-y-4 text-center sm:space-y-3">
              <RevealAnimation delay={0.1} start="top 95%">
                <span className="badge bg-accent/20 text-tagline-3 font-normal text-white uppercase">Soluciones</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2} start="top 95%">
                <h2 id="verticals-heading" className="mx-auto max-w-[814px] text-white">
                  Una agenda sencilla para cada tipo de negocio
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3} start="top 95%">
                <p className="mx-auto max-w-[550px] text-lg leading-[150%] font-normal text-white/80">
                  Sin importar si atiendes pacientes, clientes o alumnos, el flujo es el mismo: agendas y se confirma.
                </p>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-12 items-start gap-y-2 lg:gap-x-1 lg:gap-y-0">
              <RevealAnimation delay={0.1} start="top 95%">
                <div className="group col-span-12 lg:col-span-5 xl:col-span-6">
                  <article className="mx-auto max-w-[627px] overflow-hidden rounded-3xl bg-white p-1 md:rounded-4xl lg:mx-0 lg:max-w-full">
                    <figure className="h-[260px] w-full overflow-hidden rounded-[20px] md:rounded-[28px]">
                      <VisualPanel>
                        <div className="scale-90 transition-transform duration-500 ease-in-out group-hover:scale-95">
                          {main.visual}
                        </div>
                      </VisualPanel>
                    </figure>
                    <div className="flex flex-col justify-between gap-6 p-4 md:p-8">
                      <div className="space-y-4">
                        <span className="bg-background-4 text-secondary/70 text-tagline-2 inline-flex items-center gap-2 rounded-full py-1 pr-3 pl-1">
                          <span className="bg-primary-500 flex size-6 items-center justify-center rounded-full text-white">
                            <Icon name={main.icon} className="size-3.5" />
                          </span>
                          {main.tag}
                        </span>
                        <h3 className="text-heading-5 text-secondary font-normal">{main.title}</h3>
                        <p>{main.text}</p>
                      </div>
                      <LinkButton href="/app" className="btn-v3-secondary btn-v3-lg" ariaLabel="Ver la demo">
                        Ver la demo
                      </LinkButton>
                    </div>
                  </article>
                </div>
              </RevealAnimation>

              <div className="col-span-12 space-y-2 lg:col-span-7 lg:pl-1 xl:col-span-6">
                {rest.map((item, i) => (
                  <RevealAnimation key={item.title} delay={0.2 + i * 0.1} start="top 95%">
                    <article className="group grid items-center gap-1 overflow-hidden rounded-3xl bg-white p-1 sm:grid-cols-[1fr_1.1fr] md:rounded-4xl">
                      <figure className="h-[240px] w-full overflow-hidden rounded-[20px] md:rounded-[28px]">
                        <VisualPanel>
                          <div className="transition-transform duration-500 ease-in-out group-hover:scale-105">
                            {item.visual}
                          </div>
                        </VisualPanel>
                      </figure>
                      <div className="space-y-4 p-4 md:p-6">
                        <span className="bg-background-4 text-secondary/70 text-tagline-2 inline-flex items-center gap-2 rounded-full py-1 pr-3 pl-1">
                          <span className="bg-primary-500 flex size-6 items-center justify-center rounded-full text-white">
                            <Icon name={item.icon} className="size-3.5" />
                          </span>
                          {item.tag}
                        </span>
                        <h3 className="text-heading-6 text-secondary font-normal">{item.title}</h3>
                        <p className="text-tagline-1">{item.text}</p>
                        <LinkButton href="/app" className="btn-v3-stone btn-v3-lg" ariaLabel="Ver la demo">
                          Ver la demo
                        </LinkButton>
                      </div>
                    </article>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Blog.displayName = 'Blog';
export default Blog;
