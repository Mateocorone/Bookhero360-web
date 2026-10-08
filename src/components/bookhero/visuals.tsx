import Icon from '@/components/brand/Icon';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

/* Visuales del producto dibujados en HTML (sustituyen a las imágenes de relleno de la plantilla). */

const NAVY_GRADIENT = 'bg-[linear-gradient(to_bottom,#142e6e,#edf2ff)]';

export const VisualPanel = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('relative flex size-full items-center justify-center overflow-hidden', NAVY_GRADIENT, className)}>
    {children}
  </div>
);

const booked = new Set([6, 8, 13, 15, 20, 22, 27, 29]);

export const CalendarCard = ({ className }: { className?: string }) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <div className="mb-4 flex items-center justify-between">
      <p className="text-secondary text-heading-6 font-normal">Octubre 2026</p>
      <span className="bg-bh-amber-light text-secondary text-tagline-3 rounded-full px-2.5 py-1">Plan Lite</span>
    </div>
    <div className="text-secondary/40 text-tagline-3 mb-2 grid grid-cols-7 text-center">
      {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
        <span key={d}>{d}</span>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={`b${i}`} />
      ))}
      {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
        <span
          key={d}
          className={cn(
            'text-tagline-3 relative flex aspect-square items-center justify-center rounded-lg',
            d === 8 ? 'bg-primary-500 text-white' : 'bg-background-3 text-secondary/70',
          )}>
          {d}
          {booked.has(d) && d !== 8 && <i className="bg-bh-amber absolute bottom-1 size-1 rounded-full" />}
        </span>
      ))}
    </div>
  </div>
);

export const AgendaCard = ({ className }: { className?: string }) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <div className="mb-3 flex items-center justify-between">
      <p className="text-secondary text-heading-6 font-normal">Agenda de hoy</p>
      <span className="bg-background-4 text-secondary/70 text-tagline-3 rounded-full px-2.5 py-1">2 citas</span>
    </div>
    {[
      ['09:30', 'Valentina Rojas', 'Consulta inicial'],
      ['15:00', 'Diego Méndez', 'Seguimiento'],
    ].map(([t, n, s]) => (
      <div key={n} className="bg-background-3 mb-2 flex items-center gap-3 rounded-2xl p-3 last:mb-0">
        <span className="bg-primary-500 text-tagline-3 flex size-10 shrink-0 items-center justify-center rounded-full font-medium text-white">
          {n
            .split(' ')
            .map((p) => p[0])
            .join('')}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-secondary text-tagline-2 font-medium">{n}</p>
          <p className="text-secondary/60 text-tagline-3">
            {t} · {s}
          </p>
        </div>
        <Icon name="check" className="text-primary-500 size-4" />
      </div>
    ))}
  </div>
);

export const MailCard = ({
  subject = 'Tu reserva está confirmada',
  text = 'Hola Valentina, tu cita quedó confirmada el 8 de octubre a las 09:30. ¡Te esperamos!',
  className,
}: {
  subject?: string;
  text?: string;
  className?: string;
}) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <div className="mb-3 flex items-center gap-2">
      <span className="bg-primary-500 flex size-8 items-center justify-center rounded-full text-white">
        <Icon name="mail" className="size-4" />
      </span>
      <p className="text-secondary/60 text-tagline-3 uppercase">Correo enviado</p>
      <span className="bg-bh-amber-light text-secondary text-tagline-3 ml-auto rounded-full px-2 py-0.5">Ahora</span>
    </div>
    <p className="text-secondary text-tagline-1 font-medium">{subject}</p>
    <p className="text-secondary/60 text-tagline-2 mt-1">{text}</p>
  </div>
);

export const ClientsCard = ({ className }: { className?: string }) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <div className="bg-background-3 text-secondary/50 text-tagline-2 mb-3 flex items-center gap-2 rounded-full px-4 py-2.5">
      <Icon name="search" className="size-4" />
      Buscar por nombre o correo
    </div>
    {[
      ['Valentina Rojas', 'valentina@correo.com', '3 citas'],
      ['Diego Méndez', 'diego@correo.com', '2 citas'],
      ['Camila Torres', 'camila@correo.com', '1 cita'],
    ].map(([n, e, c]) => (
      <div key={n} className="flex items-center gap-3 py-2">
        <span className="bg-primary-100 text-primary-600 text-tagline-3 flex size-9 shrink-0 items-center justify-center rounded-full font-medium">
          {n
            .split(' ')
            .map((p) => p[0])
            .join('')}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-secondary text-tagline-2 font-medium">{n}</p>
          <p className="text-secondary/50 text-tagline-3 truncate">{e}</p>
        </div>
        <span className="text-secondary/60 text-tagline-3">{c}</span>
      </div>
    ))}
  </div>
);

export const TemplateCard = ({ className }: { className?: string }) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <p className="text-secondary/50 text-tagline-3 mb-1 uppercase">Asunto</p>
    <p className="bg-background-3 text-secondary text-tagline-2 mb-3 rounded-xl px-3 py-2">Tu reserva está confirmada</p>
    <p className="text-secondary/50 text-tagline-3 mb-1 uppercase">Mensaje</p>
    <p className="bg-background-3 text-secondary/80 text-tagline-3 rounded-xl px-3 py-2 leading-relaxed">
      Hola {'{{nombre}}'}, tu reserva para {'{{servicio}}'} quedó confirmada el {'{{fecha}}'} a las {'{{hora}}'}.
    </p>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {['{{nombre}}', '{{servicio}}', '{{fecha}}', '{{hora}}', '{{negocio}}'].map((v) => (
        <span key={v} className="bg-primary-100 text-primary-600 text-tagline-3 rounded-lg px-2 py-1">
          {v}
        </span>
      ))}
    </div>
  </div>
);

export const HoursCard = ({ className }: { className?: string }) => (
  <div className={cn('w-full max-w-[330px] rounded-3xl bg-white p-5 text-left shadow-[0_24px_60px_rgba(10,26,69,.25)]', className)}>
    <p className="text-secondary text-heading-6 mb-3 font-normal">Servicio principal</p>
    <div className="bg-background-3 mb-2 rounded-xl px-3 py-2.5">
      <p className="text-secondary/50 text-tagline-3">Nombre</p>
      <p className="text-secondary text-tagline-2">Consulta inicial</p>
    </div>
    <div className="mb-3 grid grid-cols-2 gap-2">
      <div className="bg-background-3 rounded-xl px-3 py-2.5">
        <p className="text-secondary/50 text-tagline-3">Duración</p>
        <p className="text-secondary text-tagline-2">60 minutos</p>
      </div>
      <div className="bg-background-3 rounded-xl px-3 py-2.5">
        <p className="text-secondary/50 text-tagline-3">Precio</p>
        <p className="text-secondary text-tagline-2">$25</p>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-xl border border-dashed border-stroke-3 px-3 py-2.5">
      <p className="text-secondary text-tagline-2">Lunes a viernes</p>
      <p className="text-primary-500 text-tagline-2 font-medium">09:00 – 18:00</p>
    </div>
  </div>
);

/** Collage de dos tarjetas para los paneles de pestañas. */
export const Pair = ({ a, b }: { a: ReactNode; b: ReactNode }) => (
  <div className="relative flex size-full items-center justify-center max-lg:scale-[.72]">
    <div className="absolute -translate-x-[14%] -translate-y-[30%] -rotate-3">{a}</div>
    <div className="absolute translate-x-[14%] translate-y-[32%] rotate-2">{b}</div>
  </div>
);

/** Panel grande de producto para la sección oscura. */
export const DashboardVisual = () => (
  <div className="grid size-full grid-cols-[150px_1fr] gap-3 rounded-[28px] bg-white/95 p-3 text-left max-sm:grid-cols-1">
    <aside className="bg-background-3 hidden flex-col gap-1 rounded-2xl p-3 sm:flex">
      <p className="text-secondary/40 text-tagline-3 mb-2 px-2 uppercase">Espacio</p>
      {[
        ['Resumen', 'grid'],
        ['Calendario', 'calendar'],
        ['Clientes', 'users'],
        ['Notificaciones', 'bell'],
        ['Ajustes', 'settings'],
      ].map(([l, ic], i) => (
        <span
          key={l}
          className={cn(
            'text-tagline-2 flex items-center gap-2 rounded-xl px-2.5 py-2',
            i === 1 ? 'bg-primary-500 text-white' : 'text-secondary/70',
          )}>
          <Icon name={ic as 'grid'} className="size-4" />
          {l}
        </span>
      ))}
      <span className="bg-bh-amber-light text-secondary text-tagline-3 mt-auto rounded-xl px-3 py-2">Plan Lite</span>
    </aside>
    <div className="grid min-w-0 gap-3 lg:grid-cols-[1.3fr_1fr]">
      <CalendarCard className="!max-w-none !shadow-none ring-1 ring-stroke-4" />
      <div className="flex flex-col gap-3">
        <AgendaCard className="!max-w-none !shadow-none ring-1 ring-stroke-4" />
        <MailCard className="!max-w-none !shadow-none ring-1 ring-stroke-4" />
      </div>
    </div>
  </div>
);

/** Tarjetas de cristal que sobresalen del hero (como las tarjetas de la plantilla). */
export const HeroVisual = () => (
  <div
    className="pointer-events-none absolute top-[780px] left-1/2 w-full max-w-[980px] -translate-x-1/2 sm:top-[650px] lg:top-[680px]"
    aria-hidden="true">
    <div className="relative mx-auto flex h-[420px] items-start justify-center">
      <div className="bh-float absolute left-[2%] top-16 w-[300px] -rotate-[9deg] rounded-[28px] bg-white/25 p-2 shadow-[0_30px_80px_rgba(10,26,69,.35)] ring-1 ring-white/50 backdrop-blur-md max-md:hidden">
        <AgendaCard className="!max-w-none !shadow-none" />
      </div>
      <div className="absolute left-1/2 top-0 w-[340px] -translate-x-1/2 rounded-[28px] bg-white/30 p-2 shadow-[0_30px_80px_rgba(10,26,69,.4)] ring-1 ring-white/60 backdrop-blur-md max-sm:w-[290px]">
        <CalendarCard className="!max-w-none !shadow-none" />
      </div>
      <div className="bh-float absolute right-[2%] top-24 w-[300px] rotate-[8deg] rounded-[28px] bg-white/25 p-2 shadow-[0_30px_80px_rgba(10,26,69,.35)] ring-1 ring-white/50 backdrop-blur-md [animation-delay:-3s] max-md:hidden">
        <MailCard className="!max-w-none !shadow-none" />
      </div>
    </div>
  </div>
);
