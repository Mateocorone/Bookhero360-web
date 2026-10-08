'use client';

import {
  AgendaCard,
  CalendarCard,
  ClientsCard,
  HoursCard,
  MailCard,
  Pair,
  TemplateCard,
  VisualPanel,
} from '@/components/bookhero/visuals';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tab-v2';

interface Tab {
  id: string;
  label: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  visual: ReactNode;
}

const tabs: Tab[] = [
  { id: 'calendario', label: 'Calendario' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'correo', label: 'Confirmación' },
  { id: 'mensaje', label: 'Mensaje' },
  { id: 'horarios', label: 'Horarios' },
];

const servicesData: ServiceData[] = [
  {
    id: 'calendario',
    title: 'Un calendario claro, sin complicaciones',
    description:
      'Mira todas tus citas por mes o por semana y abre la agenda de cualquier día con un clic. Agrega una cita nueva en un horario libre en segundos y mantén cada reserva ordenada, sin cruces ni mensajes sueltos.',
    visual: <Pair a={<CalendarCard />} b={<AgendaCard />} />,
  },
  {
    id: 'clientes',
    title: 'Tus clientes, siempre a la mano',
    description:
      'Guarda el nombre y el correo de cada persona, busca por nombre o correo al instante y consulta su historial de citas. Cada reserva nueva actualiza la ficha del cliente automáticamente.',
    visual: <Pair a={<ClientsCard />} b={<AgendaCard />} />,
  },
  {
    id: 'correo',
    title: 'Confirmación por correo en cada reserva',
    description:
      'Cuando creas una reserva, tu cliente recibe un correo con el servicio, la fecha y la hora. Es el único mensaje automático de la versión Lite: simple, claro y sin canales extra que administrar.',
    visual: <Pair a={<AgendaCard />} b={<MailCard />} />,
  },
  {
    id: 'mensaje',
    title: 'Un mensaje con tu voz y tu negocio',
    description:
      'Edita el asunto y el texto de la confirmación e inserta variables como nombre, servicio, fecha, hora y negocio. Mira la vista previa antes de guardar y ajusta el tono a tu marca.',
    visual: <Pair a={<TemplateCard />} b={<MailCard />} />,
  },
  {
    id: 'horarios',
    title: 'Servicio y horarios, listos en minutos',
    description:
      'Un asistente de cinco pasos te guía: datos del negocio, calendario, servicio principal, jornada semanal y mensaje de confirmación. Al terminar, tu agenda ya puede recibir reservas.',
    visual: <Pair a={<HoursCard />} b={<CalendarCard />} />,
  },
];

const Services = () => {
  return (
    <Tabs defaultValue="calendario">
      <section id="funciones" className="py-18 md:py-20 lg:py-24 xl:py-39">
        <div className="main-container">
          <div className="space-y-8">
            <RevealAnimation delay={0.1}>
              <TabsList
                className="md:bg-background-3 grid w-full items-center justify-center gap-3 p-1 max-sm:!grid-cols-12 md:flex-nowrap md:gap-1 md:rounded-full"
                style={{ gridTemplateColumns: 'repeat(15, 1fr)' }}>
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    ariaLabel={`Pestaña ${tab.label}`}
                    className={cn(
                      'font-inter-tight text-tagline-1 bg-background-4 rounded-2xl px-6 py-[14px] font-medium md:rounded-[80px] md:bg-white',
                      tab.id === 'horarios' ? 'col-span-12 sm:col-span-3' : 'col-span-6 sm:col-span-3',
                    )}>
                    <span className="relative z-20">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </RevealAnimation>

            {servicesData.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                display="flex"
                className="h-auto flex-col items-center justify-center md:flex-row xl:h-[624px]">
                <figure className="h-[380px] w-full max-w-[450px] overflow-hidden rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] lg:h-[480px] lg:max-w-[500px] xl:h-[624px] xl:max-w-[645px]">
                  <VisualPanel>{service.visual}</VisualPanel>
                </figure>

                <div className="bg-background-2 flex h-[380px] max-w-[450px] items-center justify-center rounded-b-[28px] pr-4 pl-4 md:w-auto md:rounded-r-[28px] md:rounded-b-none md:pr-14 md:pl-[42px] lg:h-[480px] lg:rounded-br-[28px] xl:h-[624px] xl:max-w-[645px]">
                  <div className="space-y-12 xl:space-y-39">
                    <div className="max-w-[547px] space-y-2 text-center md:text-left">
                      <h3 id={`heading-${service.id}`} className="text-heading-4 text-secondary font-normal">
                        {service.title}
                      </h3>
                      <p className="line-clamp-4 lg:line-clamp-none">{service.description}</p>
                    </div>

                    <div className="pointer-events-auto">
                      <LinkButton href="/app" className="btn-v3-secondary btn-v3-lg mx-auto sm:mx-0">
                        Verlo en la demo
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </section>
    </Tabs>
  );
};

Services.displayName = 'Services';
export default Services;
