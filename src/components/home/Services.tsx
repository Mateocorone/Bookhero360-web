'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-25',
    title: 'Calendario claro',
    description: 'Vista por mes y por semana con la agenda del día siempre a mano.',
  },
  {
    id: 2,
    icon: 'ns-shape-19',
    title: 'Confirmación por correo',
    description: 'Cada reserva envía un aviso al cliente con fecha, hora y servicio.',
  },
  {
    id: 3,
    icon: 'ns-shape-17',
    title: 'Directorio de clientes',
    description: 'Busca por nombre o correo y consulta el historial de citas de cada persona.',
  },
  {
    id: 4,
    icon: 'ns-shape-34',
    title: 'Mensaje personalizable',
    description: 'Edita asunto y texto con variables como nombre, servicio, fecha y hora.',
  },
  {
    id: 5,
    icon: 'ns-shape-9',
    title: 'Servicio y horarios',
    description: 'Define tu servicio principal, su duración y tu jornada semanal.',
  },
  {
    id: 6,
    icon: 'ns-shape-7',
    title: 'Resumen del negocio',
    description: 'Citas de la semana, confirmadas y correos enviados, en un solo vistazo.',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        id="funciones"
        className="pt-14 pb-[220px] sm:pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container">
          <div className="flex flex-col items-start justify-center max-md:gap-y-18 md:flex-row md:justify-between md:gap-x-[120px]">
            {/* Izquierda: introducción */}
            <div className="lg:sticky lg:top-28">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Funciones</span>
              </RevealAnimation>
              <div className="mb-14 space-y-2 md:max-w-[595px]">
                <RevealAnimation delay={0.2}>
                  <h2>Todo lo esencial para tu agenda.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[512px]">
                    Simple, ordenado y sin curva de aprendizaje: Bookhero360 te deja controlar tus reservas sin
                    complicaciones.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton href="/app" className="btn btn-secondary hover:btn-white dark:btn-transparent btn-md">
                    Probar la demo.
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            {/* Derecha: lista de funciones */}
            <StackCardWrapper topOffset="13vh" gap="20px" initDelay={100} className="w-full max-w-xl">
              {servicesData.map((service) => (
                <StackCardItem key={service.id}>
                  <div className="border-stroke-8/20 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] w-full space-y-4 overflow-hidden rounded-[20px] border p-8">
                    <div className="inline-block">
                      <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`}> </span>
                    </div>
                    <div>
                      <h3 className="text-heading-5">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
