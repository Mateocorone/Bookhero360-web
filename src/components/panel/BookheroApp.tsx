'use client';

import BrandMark from '@/components/brand/BrandMark';
import Icon, { IconName } from '@/components/brand/Icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { AppSkeleton } from './AppSkeleton';
import { FormEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

type View = 'summary' | 'calendar' | 'clients' | 'emails' | 'settings';
type Tone = 'primary' | 'green' | 'yellow';
interface Appointment {
  id: number;
  time: string;
  name: string;
  service: string;
  tone: Tone;
}
interface Client {
  name: string;
  email: string;
  visits: number;
}

const NAV: { view: View; label: string; short: string; icon: IconName }[] = [
  { view: 'summary', label: 'Resumen', short: 'Resumen', icon: 'grid' },
  { view: 'calendar', label: 'Calendario', short: 'Agenda', icon: 'calendar' },
  { view: 'clients', label: 'Clientes', short: 'Clientes', icon: 'users' },
  { view: 'emails', label: 'Notificaciones', short: 'Avisos', icon: 'bell' },
  { view: 'settings', label: 'Ajustes', short: 'Ajustes', icon: 'settings' },
];

const VARIABLES = ['{{nombre}}', '{{servicio}}', '{{fecha}}', '{{hora}}', '{{negocio}}'];
const DEFAULT_SUBJECT = 'Tu reserva está confirmada';
const DEFAULT_MESSAGE =
  'Hola {{nombre}}, tu reserva para {{servicio}} quedó confirmada el {{fecha}} a las {{hora}}. ¡Te esperamos!';
const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const WIZARD_STEPS = ['Negocio', 'Calendario', 'Servicios', 'Horarios', 'Notificaciones'];

const toneDot: Record<Tone, string> = { primary: 'bg-primary-500', green: 'bg-ns-green', yellow: 'bg-ns-yellow' };
const toneChip: Record<Tone, string> = {
  primary: 'bg-primary-100 text-primary-800 dark:bg-primary-500/25 dark:text-primary-200',
  green: 'bg-ns-green-light text-secondary dark:bg-ns-green/20 dark:text-ns-green',
  yellow: 'bg-ns-yellow-light text-secondary dark:bg-ns-yellow/20 dark:text-ns-yellow',
};

const keyFor = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fromKey = (k: string) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d, 12);
};
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const initials = (n: string) =>
  n
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
const addDays = (d: Date, n: number) => {
  const c = new Date(d);
  c.setDate(c.getDate() + n);
  return c;
};

const buildSample = (today: Date): Record<string, Appointment[]> => {
  const mk = (offset: number, list: [string, string, string, Tone][]) => [
    keyFor(addDays(today, offset)),
    list.map(([time, name, service, tone], i) => ({ id: offset * 10 + i + 1, time, name, service, tone })),
  ];
  return Object.fromEntries([
    mk(-12, [['10:00', 'Camila Torres', 'Consulta inicial', 'green']]),
    mk(-8, [['14:30', 'Laura Gómez', 'Sesión de seguimiento', 'primary']]),
    mk(-4, [['09:00', 'Andrés Silva', 'Revisión', 'yellow']]),
    mk(0, [
      ['09:30', 'Valentina Rojas', 'Consulta inicial', 'green'],
      ['15:00', 'Diego Méndez', 'Seguimiento', 'primary'],
    ]),
    mk(2, [['11:00', 'Ana Ferreira', 'Revisión', 'yellow']]),
    mk(5, [
      ['11:30', 'María López', 'Consulta inicial', 'green'],
      ['16:00', 'Carlos Paredes', 'Seguimiento', 'primary'],
    ]),
    mk(9, [['10:00', 'Sofía Herrera', 'Consulta inicial', 'primary']]),
  ]) as Record<string, Appointment[]>;
};

/* ----------------------------- UI primitives ----------------------------- */

const inputCls =
  'border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-8 text-secondary dark:text-accent placeholder:text-secondary/40 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-xl border px-4 py-3 text-tagline-1 outline-none transition focus:ring-4';

const Field = ({ label, id, children, className }: { label: string; id: string; children: ReactNode; className?: string }) => (
  <div className={className}>
    <label htmlFor={id} className="text-secondary/70 dark:text-accent/70 text-tagline-2 mb-1.5 block font-medium">
      {label}
    </label>
    {children}
  </div>
);

const Btn = ({
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'mini' }) => (
  <button
    {...props}
    className={cn(
      'inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50',
      variant === 'primary' &&
        'bg-primary-500 hover:bg-primary-600 text-tagline-1 shadow-[0_8px_24px_rgba(13,143,132,.3)] rounded-full px-6 py-3 text-white',
      variant === 'ghost' &&
        'border-stroke-3 dark:border-stroke-7 text-secondary dark:text-accent hover:bg-background-3 dark:hover:bg-background-7 text-tagline-1 rounded-full border px-6 py-3',
      variant === 'mini' &&
        'border-stroke-3 dark:border-stroke-7 text-secondary dark:text-accent hover:bg-background-3 dark:hover:bg-background-7 text-tagline-2 rounded-full border px-3.5 py-1.5',
      className,
    )}
  />
);

const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <article
    className={cn(
      'border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-9 rounded-3xl border p-5 md:p-6',
      className,
    )}>
    {children}
  </article>
);

const CardHead = ({ title, sub, action }: { title: string; sub?: string; action?: ReactNode }) => (
  <div className="mb-4 flex items-start justify-between gap-3">
    <div>
      <h2 className="text-heading-6 text-secondary dark:text-accent font-medium">{title}</h2>
      {sub && <p className="text-tagline-2 mt-0.5">{sub}</p>}
    </div>
    {action}
  </div>
);

const Status = ({ children = 'Confirmada' }: { children?: ReactNode }) => (
  <span className="bg-ns-green-light text-secondary dark:bg-ns-green/20 dark:text-ns-green text-tagline-3 inline-flex rounded-full px-2.5 py-1 font-medium">
    {children}
  </span>
);

const Avatar = ({ name }: { name: string }) => (
  <span className="bg-primary-100 text-primary-700 dark:bg-primary-500/25 dark:text-primary-200 text-tagline-3 inline-flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
    {initials(name)}
  </span>
);

const Modal = ({ open, onClose, title, sub, children }: { open: boolean; onClose: () => void; title: string; sub: string; children: ReactNode }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="bh-fade fixed inset-0 z-[90] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-label={title} className="bh-pop bg-white dark:bg-background-9 border-stroke-2 dark:border-stroke-6 shadow-6 max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-t-3xl border p-6 sm:rounded-3xl">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-heading-5 text-secondary dark:text-accent font-medium">{title}</h2>
            <p className="text-tagline-2">{sub}</p>
          </div>
          <button type="button" aria-label="Cerrar" onClick={onClose} className="border-stroke-3 dark:border-stroke-7 text-secondary dark:text-accent flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border">
            <Icon name="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

/* ------------------------------- Main app -------------------------------- */

const BookheroApp = () => {
  const [today, setToday] = useState<Date | null>(null);
  const [events, setEvents] = useState<Record<string, Appointment[]>>({});
  const [clients, setClients] = useState<Client[]>([
    { name: 'Valentina Rojas', email: 'valentina@correo.com', visits: 3 },
    { name: 'Diego Méndez', email: 'diego@correo.com', visits: 2 },
    { name: 'Camila Torres', email: 'camila@correo.com', visits: 1 },
  ]);
  const [view, setView] = useState<View>('summary');
  const [wizard, setWizard] = useState(true);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState<Date | null>(null);
  const [selected, setSelected] = useState('');
  const [calMode, setCalMode] = useState<'month' | 'week'>('month');
  const [apptOpen, setApptOpen] = useState(false);
  const [clientOpen, setClientOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);
  const viewTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [biz, setBiz] = useState({ name: 'Mi negocio', email: 'citas@minegocio.com', country: 'Ecuador', tz: 'Quito / Bogotá / Lima' });
  const [service, setService] = useState({ name: 'Consulta inicial', duration: '60 minutos', price: '25' });
  const [hours, setHours] = useState({ open: '09:00', close: '18:00', weekdays: true });
  const [mail, setMail] = useState({ subject: DEFAULT_SUBJECT, message: DEFAULT_MESSAGE });
  const [sendMail, setSendMail] = useState(true);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = new Date();
    t.setHours(12, 0, 0, 0);
    setToday(t);
    setVisible(new Date(t.getFullYear(), t.getMonth(), 1));
    setSelected(keyFor(t));
    setEvents(buildSample(t));
  }, []);

  useEffect(() => {
    document.body.style.overflow = wizard ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [wizard]);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3000);
  }, []);

  const preview = useMemo(() => {
    const fecha = selected ? cap(fromKey(selected).toLocaleDateString('es-EC', { day: 'numeric', month: 'long' })) : '';
    const map: Record<string, string> = {
      '{{nombre}}': 'Valentina',
      '{{servicio}}': service.name || 'Consulta inicial',
      '{{fecha}}': fecha.toLowerCase(),
      '{{hora}}': '09:30',
      '{{negocio}}': biz.name || 'Mi negocio',
    };
    let text = mail.message;
    Object.entries(map).forEach(([k, v]) => (text = text.split(k).join(v)));
    return { subject: mail.subject || 'Confirmación de reserva', text };
  }, [mail, service.name, biz.name, selected]);

  const insertVariable = (v: string) => {
    const el = messageRef.current;
    const start = el?.selectionStart ?? mail.message.length;
    const end = el?.selectionEnd ?? start;
    setMail((m) => ({ ...m, message: m.message.slice(0, start) + v + m.message.slice(end) }));
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(start + v.length, start + v.length);
    });
  };

  if (!today || !visible) {
    return <div className="bg-background-3 dark:bg-background-8 min-h-screen" aria-busy="true" />;
  }

  const todayKey = keyFor(today);
  const dayEvents = (events[selected] || []).slice().sort((a, b) => a.time.localeCompare(b.time));
  const allEvents = Object.values(events).flat();
  const weekStart = (() => {
    const d = fromKey(selected);
    return addDays(d, -((d.getDay() + 6) % 7));
  })();
  const weekCount = Array.from({ length: 7 }).reduce<number>((n, _, i) => n + (events[keyFor(addDays(weekStart, i))]?.length || 0), 0);

  const stats = [
    { icon: 'calendar' as const, value: weekCount, label: 'Citas esta semana' },
    { icon: 'check' as const, value: allEvents.length, label: 'Confirmadas' },
    { icon: 'mail' as const, value: sendMail ? allEvents.length : 0, label: 'Correos enviados' },
  ];

  const go = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearTimeout(viewTimer.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setLoading(false);
    setLoading(true);
    viewTimer.current = setTimeout(() => setLoading(false), 420);
  };

  const openAppointment = () => setApptOpen(true);

  const saveAppointment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const key = String(f.get('date'));
    const name = String(f.get('client')).trim();
    const email = String(f.get('email')).trim();
    const appt: Appointment = {
      id: Date.now(),
      time: String(f.get('time')),
      name,
      service: String(f.get('service')).trim() || 'Cita programada',
      tone: 'primary',
    };
    setEvents((ev) => ({ ...ev, [key]: [...(ev[key] || []), appt] }));
    setClients((cs) => {
      const i = cs.findIndex((c) => c.email.toLowerCase() === email.toLowerCase());
      if (i >= 0) return cs.map((c, j) => (j === i ? { ...c, visits: c.visits + 1 } : c));
      return [{ name, email, visits: 1 }, ...cs];
    });
    setSelected(key);
    const d = fromKey(key);
    setVisible(new Date(d.getFullYear(), d.getMonth(), 1));
    setApptOpen(false);
    go('calendar');
    notify(sendMail ? 'Cita guardada y confirmación por correo preparada.' : 'Cita guardada.');
  };

  const saveClient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setClients((cs) => [{ name: String(f.get('name')).trim(), email: String(f.get('email')).trim(), visits: 0 }, ...cs]);
    setClientOpen(false);
    notify('Cliente guardado correctamente.');
  };

  const finishWizard = () => {
    try {
      const AudioEngine = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioEngine) {
        const audio = new AudioEngine();
        [523.25, 659.25, 783.99].forEach((hz, i) => {
          const osc = audio.createOscillator();
          const gain = audio.createGain();
          const t0 = audio.currentTime + i * 0.12;
          osc.frequency.value = hz;
          gain.gain.setValueAtTime(0, t0);
          gain.gain.linearRampToValueAtTime(0.13, t0 + 0.025);
          gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.32);
          osc.connect(gain).connect(audio.destination);
          osc.start(t0);
          osc.stop(t0 + 0.34);
        });
        setTimeout(() => audio.close(), 900);
      }
    } catch {
      /* el audio es opcional */
    }
    setWizard(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setView('summary');
      notify('Configuración terminada. Tu agenda está lista.');
    }, 1900);
  };

  const dateLabel = cap(today.toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' }));
  const selectedLabel = cap(fromKey(selected).toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' }));

  /* ------------------------------ Calendar ------------------------------ */
  const first = new Date(visible.getFullYear(), visible.getMonth(), 1);
  const gridStart = addDays(first, -((first.getDay() + 6) % 7));
  const monthCells = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));

  const EventChip = ({ a }: { a: Appointment }) => (
    <div className={cn('text-tagline-3 truncate rounded-md px-1.5 py-0.5 text-left leading-tight', toneChip[a.tone])}>
      <span className="font-semibold">{a.name.split(' ')[0]}</span> <span className="hidden opacity-70 sm:inline">{a.time}</span>
    </div>
  );

  const calendar = (
    <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
      <Card className="!p-4 md:!p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Btn variant="mini" aria-label="Anterior" onClick={() => (calMode === 'month' ? setVisible(new Date(visible.getFullYear(), visible.getMonth() - 1, 1)) : (setSelected(keyFor(addDays(fromKey(selected), -7))), setVisible(new Date(addDays(fromKey(selected), -7).getFullYear(), addDays(fromKey(selected), -7).getMonth(), 1))))} className="!size-9 !p-0">
              <Icon name="chevron" className="size-4 rotate-180" />
            </Btn>
            <h2 className="text-heading-6 text-secondary dark:text-accent min-w-[150px] text-center font-medium">
              {cap(visible.toLocaleDateString('es-EC', { month: 'long', year: 'numeric' }))}
            </h2>
            <Btn variant="mini" aria-label="Siguiente" onClick={() => (calMode === 'month' ? setVisible(new Date(visible.getFullYear(), visible.getMonth() + 1, 1)) : (setSelected(keyFor(addDays(fromKey(selected), 7))), setVisible(new Date(addDays(fromKey(selected), 7).getFullYear(), addDays(fromKey(selected), 7).getMonth(), 1))))} className="!size-9 !p-0">
              <Icon name="chevron" className="size-4" />
            </Btn>
            <Btn variant="mini" onClick={() => { setVisible(new Date(today.getFullYear(), today.getMonth(), 1)); setSelected(todayKey); }}>
              Hoy
            </Btn>
          </div>
          <div className="bg-background-3 dark:bg-background-7 flex rounded-full p-1">
            {(['month', 'week'] as const).map((m) => (
              <button key={m} type="button" onClick={() => setCalMode(m)} className={cn('text-tagline-2 cursor-pointer rounded-full px-4 py-1.5 font-medium transition', calMode === m ? 'bg-secondary text-white dark:bg-accent dark:text-secondary' : 'text-secondary/60 dark:text-accent/60')}>
                {m === 'month' ? 'Mes' : 'Semana'}
              </button>
            ))}
          </div>
        </div>
        <div className="text-secondary/50 dark:text-accent/50 text-tagline-3 mb-2 grid grid-cols-7 text-center font-medium">
          {WEEKDAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        {calMode === 'month' ? (
          <div className="grid grid-cols-7 gap-1.5">
            {monthCells.map((d) => {
              const k = keyFor(d);
              const list = events[k] || [];
              return (
                <button
                  key={k}
                  type="button"
                  aria-label={`Ver citas del ${d.toLocaleDateString('es-EC')}`}
                  onClick={() => setSelected(k)}
                  className={cn(
                    'border-stroke-2 dark:border-stroke-6 flex min-h-[64px] cursor-pointer flex-col gap-1 rounded-xl border p-1.5 text-left transition sm:min-h-[92px]',
                    d.getMonth() !== visible.getMonth() && 'opacity-40',
                    k === selected ? 'border-primary-500 bg-primary-50 dark:bg-primary-500/15 ring-primary-500 ring-1' : 'hover:bg-background-3 dark:hover:bg-background-7',
                  )}>
                  <span className={cn('text-tagline-3 flex size-6 items-center justify-center rounded-full font-medium', k === todayKey ? 'bg-primary-500 text-white' : 'text-secondary dark:text-accent')}>
                    {d.getDate()}
                  </span>
                  {list.slice(0, 2).map((a) => (
                    <EventChip key={a.id} a={a} />
                  ))}
                  {list.length > 2 && <span className="text-tagline-3 text-secondary/50 dark:text-accent/50">+{list.length - 2}</span>}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)).map((d) => {
              const k = keyFor(d);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSelected(k)}
                  className={cn('border-stroke-2 dark:border-stroke-6 flex min-h-[220px] cursor-pointer flex-col gap-1.5 rounded-xl border p-2 text-left', k === selected && 'border-primary-500 bg-primary-50 dark:bg-primary-500/15')}>
                  <span className={cn('text-tagline-2 flex size-7 items-center justify-center rounded-full font-semibold', k === todayKey ? 'bg-primary-500 text-white' : 'text-secondary dark:text-accent')}>
                    {d.getDate()}
                  </span>
                  {(events[k] || []).map((a) => (
                    <EventChip key={a.id} a={a} />
                  ))}
                </button>
              );
            })}
          </div>
        )}
      </Card>

      <Card className="h-fit" >
        <CardHead title={selected === todayKey ? 'Agenda de hoy' : 'Agenda del día'} sub={selectedLabel} action={<span className="badge badge-primary-light">{dayEvents.length} {dayEvents.length === 1 ? 'cita' : 'citas'}</span>} />
        <div className="space-y-3">
          {dayEvents.length ? (
            dayEvents.map((a) => (
              <div key={a.id} className="border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-7 rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-2">
                  <strong className="text-secondary dark:text-accent">{a.name}</strong>
                  <Status />
                </div>
                <p className="text-tagline-2 mt-1">
                  {a.time} · {a.service}
                </p>
                <p className="text-primary-600 dark:text-primary-300 text-tagline-3 mt-2 flex items-center gap-1.5">
                  <Icon name="mail" className="size-4" /> Confirmación preparada por correo
                </p>
              </div>
            ))
          ) : (
            <p className="border-stroke-3 dark:border-stroke-7 text-tagline-2 rounded-2xl border border-dashed p-6 text-center">No hay citas para este día.</p>
          )}
        </div>
        <Btn variant="ghost" className="mt-4 w-full" onClick={openAppointment}>
          <Icon name="plus" className="size-4" /> Agregar en horario libre
        </Btn>
      </Card>
    </div>
  );

  const StatRow = () => (
    <div className="mb-6 grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label} className="flex items-center gap-4 !p-5">
          <span className="bg-primary-100 text-primary-600 dark:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl">
            <Icon name={s.icon} className="size-6" />
          </span>
          <div>
            <strong className="text-heading-4 text-secondary dark:text-accent block leading-none font-medium">{s.value}</strong>
            <span className="text-tagline-2">{s.label}</span>
          </div>
        </Card>
      ))}
    </div>
  );

  const PageHead = ({ eyebrow, title, text, action }: { eyebrow: string; title: string; text: string; action?: ReactNode }) => (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <span className="badge badge-cyan mb-3">{eyebrow}</span>
        <h1 className="text-heading-4 text-secondary dark:text-accent font-medium">{title}</h1>
        <p className="mt-1">{text}</p>
      </div>
      {action}
    </div>
  );

  const NewApptBtn = () => (
    <Btn onClick={openAppointment}>
      <Icon name="plus" className="size-4" /> Nueva cita
    </Btn>
  );

  const filteredClients = clients.filter((c) => `${c.name} ${c.email}`.toLowerCase().includes(query.toLowerCase().trim()));

  const emailEditor = (idPrefix: string) => (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <Field label="Asunto del correo" id={`${idPrefix}-subject`}>
          <input id={`${idPrefix}-subject`} className={inputCls} value={mail.subject} onChange={(e) => setMail({ ...mail, subject: e.target.value })} />
        </Field>
        <Field label="Mensaje" id={`${idPrefix}-message`} className="mt-3">
          <textarea id={`${idPrefix}-message`} ref={messageRef} rows={6} className={cn(inputCls, 'resize-y leading-relaxed')} value={mail.message} onChange={(e) => setMail({ ...mail, message: e.target.value })} />
        </Field>
        <div className="mt-3 flex flex-wrap gap-2" aria-label="Variables disponibles">
          {VARIABLES.map((v) => (
            <button key={v} type="button" onClick={() => insertVariable(v)} className="bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200 text-tagline-3 cursor-pointer rounded-lg px-2.5 py-1.5 font-medium">
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-background-3 dark:bg-background-7 border-stroke-2 dark:border-stroke-6 rounded-2xl border p-5">
        <small className="text-primary-600 dark:text-primary-300 text-tagline-3 font-semibold tracking-wider uppercase">Vista previa del correo</small>
        <h3 className="text-heading-6 text-secondary dark:text-accent mt-3 mb-2 font-medium">{preview.subject}</h3>
        <p className="text-tagline-1 whitespace-pre-line">{preview.text}</p>
        <div className="border-stroke-3 dark:border-stroke-7 text-tagline-3 mt-4 border-t pt-3">Enviado por correo desde {biz.name}</div>
      </div>
    </div>
  );

  /* ------------------------------- Wizard ------------------------------- */
  const nextStep = (e?: FormEvent) => {
    e?.preventDefault();
    if (step < WIZARD_STEPS.length - 1) {
      setStep(step + 1);
      document.getElementById('wizard-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
    } else finishWizard();
  };

  const wizardEl = wizard && (
    <div id="wizard-scroll" className="bg-background-3 dark:bg-background-8 fixed inset-0 z-[100] overflow-y-auto">
      <div className="mx-auto w-[min(980px,calc(100%-32px))] py-7">
        <div className="mb-8 flex items-center gap-3">
          <BrandMark />
          <span className="text-secondary dark:text-accent text-xl font-semibold">
            Bookhero<span className="text-primary-500">360</span>
          </span>
          <span className="text-tagline-2">Configuración inicial</span>
        </div>
        <ol className="mb-10 grid grid-cols-5" aria-label="Progreso">
          {WIZARD_STEPS.map((s, i) => (
            <li key={s} className={cn('relative flex flex-col items-center gap-2', i <= step ? 'text-secondary dark:text-accent' : 'text-secondary/40 dark:text-accent/40')}>
              {i > 0 && (
                <span className="bg-stroke-3 dark:bg-stroke-7 absolute top-[17px] right-1/2 left-[-50%] -z-0 h-0.5 overflow-hidden">
                  <span className="bg-primary-500 block h-full origin-left transition-transform duration-500 ease-out" style={{ transform: `scaleX(${i <= step ? 1 : 0})` }} />
                </span>
              )}
              <span className={cn('text-tagline-2 relative z-10 flex size-9 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300', i === step && 'scale-110 shadow-[0_0_0_6px_rgba(13,143,132,.15)]', i <= step ? 'border-primary-500 bg-primary-500 text-white' : 'border-stroke-3 dark:border-stroke-7 bg-background-3 dark:bg-background-8')}>
                {i < step ? <Icon name="check" className="size-4" /> : i + 1}
              </span>
              <span className="text-tagline-3 hidden font-medium sm:block">{s}</span>
            </li>
          ))}
        </ol>
        <form onSubmit={nextStep}>
          <Card key={step} className="bh-view-in !p-6 md:!p-8">
            {step === 0 && (
              <>
                <CardHead title="Cuéntanos sobre tu negocio" sub="Usaremos esta información en tu agenda y en los correos de confirmación." />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre del negocio" id="w-name"><input id="w-name" required className={inputCls} value={biz.name} onChange={(e) => setBiz({ ...biz, name: e.target.value })} /></Field>
                  <Field label="Correo del negocio" id="w-email"><input id="w-email" type="email" required className={inputCls} value={biz.email} onChange={(e) => setBiz({ ...biz, email: e.target.value })} /></Field>
                  <Field label="País" id="w-country" className="sm:col-span-2">
                    <select id="w-country" className={inputCls} value={biz.country} onChange={(e) => setBiz({ ...biz, country: e.target.value })}>
                      {['Ecuador', 'Colombia', 'Perú', 'México', 'Argentina', 'Chile', 'Otro país de Latinoamérica'].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </Field>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <CardHead title="Configura tu calendario" sub="Define cómo quieres visualizar y organizar tus reservas." />
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Semana inicia el lunes', 'Semana inicia el domingo', 'Formato de 24 horas'].map((o, i) => (
                    <label key={o} className="has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 dark:has-[:checked]:bg-primary-500/15 border-stroke-3 dark:border-stroke-7 flex cursor-pointer flex-col items-center gap-2 rounded-2xl border p-5 text-center">
                      <input type={i === 2 ? 'checkbox' : 'radio'} name="weekStart" defaultChecked={i !== 1} className="accent-primary-500" />
                      <Icon name={i === 2 ? 'clock' : 'calendar'} className="text-primary-500 size-6" />
                      <span className="text-tagline-2 text-secondary dark:text-accent">{o}</span>
                    </label>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <CardHead title="Agrega tu primer servicio" sub="Esto es lo que podrán reservar tus clientes." />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre del servicio" id="w-service" className="sm:col-span-2"><input id="w-service" required className={inputCls} value={service.name} onChange={(e) => setService({ ...service, name: e.target.value })} /></Field>
                  <Field label="Duración" id="w-duration">
                    <select id="w-duration" className={inputCls} value={service.duration} onChange={(e) => setService({ ...service, duration: e.target.value })}>
                      {['30 minutos', '60 minutos', '90 minutos'].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Precio referencial" id="w-price"><input id="w-price" type="number" min={0} className={inputCls} value={service.price} onChange={(e) => setService({ ...service, price: e.target.value })} /></Field>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <CardHead title="Define tus horarios" sub="Disponibilidad semanal · Lunes a viernes" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Hora de apertura" id="w-open"><input id="w-open" type="time" className={inputCls} value={hours.open} onChange={(e) => setHours({ ...hours, open: e.target.value })} /></Field>
                  <Field label="Hora de cierre" id="w-close"><input id="w-close" type="time" className={inputCls} value={hours.close} onChange={(e) => setHours({ ...hours, close: e.target.value })} /></Field>
                  <label className="border-stroke-3 dark:border-stroke-7 flex cursor-pointer items-start gap-3 rounded-2xl border p-4 sm:col-span-2">
                    <input type="checkbox" checked={hours.weekdays} onChange={(e) => setHours({ ...hours, weekdays: e.target.checked })} className="accent-primary-500 mt-1" />
                    <span>
                      <strong className="text-secondary dark:text-accent block">Permitir reservas de lunes a viernes</strong>
                      <span className="text-tagline-2">Los fines de semana permanecerán cerrados.</span>
                    </span>
                  </label>
                </div>
              </>
            )}
            {step === 4 && (
              <>
                <CardHead title="Personaliza la confirmación de reserva" sub="Este es el único mensaje automático de la versión Lite y se enviará por correo." />
                {emailEditor('w')}
              </>
            )}
          </Card>
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-tagline-2">Paso {step + 1} de {WIZARD_STEPS.length}</span>
            <div className="flex gap-2">
              {step > 0 && <Btn type="button" variant="ghost" onClick={() => setStep(step - 1)}>Anterior</Btn>}
              <Btn type="submit">{step === WIZARD_STEPS.length - 1 ? 'Entrar al panel' : 'Continuar'}</Btn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  const successEl = success && (
    <div role="status" aria-live="assertive" className="bh-fade bg-background-3/90 dark:bg-background-8/90 fixed inset-0 z-[110] grid place-items-center p-6 text-center backdrop-blur-xl">
      <div className="bh-success-in max-w-[440px]">
        <div aria-hidden="true" className="bh-success-pulse bg-ns-green/25 border-ns-green/60 relative mx-auto mb-6 flex size-[116px] items-center justify-center rounded-full border-2">
          <span className="bg-primary-500 size-[72px] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,.28)]" />
          <span className="bh-check" />
        </div>
        <h2 className="text-heading-3 text-secondary dark:text-accent font-medium">¡Listo!</h2>
        <p className="mt-2">Gracias por configurar tu agenda.<br />Estamos preparando tu resumen.</p>
        <div className="mt-6 flex justify-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <i key={i} className="bh-dot bg-primary-500 size-2 rounded-full" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  );

  /* -------------------------------- Layout ------------------------------- */
  return (
    <div className="bg-background-3 dark:bg-background-8 text-secondary/70 dark:text-accent/70 min-h-screen xl:grid xl:grid-cols-[264px_minmax(0,1fr)]">
      {wizardEl}
      {successEl}

      <aside className="border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-9 sticky top-0 hidden h-screen flex-col border-r p-5 xl:flex" aria-label="Navegación principal">
        <Link href="/" className="mb-8 flex items-center gap-3 px-2">
          <BrandMark />
          <span className="text-secondary dark:text-accent text-lg font-semibold leading-tight">
            Bookhero<span className="text-primary-500">360</span>
            <small className="text-tagline-3 block font-normal opacity-60">bookhero360.com · Lite</small>
          </span>
        </Link>
        <p className="text-tagline-3 mb-2 px-3 font-semibold tracking-wider uppercase opacity-50">Espacio de trabajo</p>
        <nav className="grid gap-1">
          {NAV.map((n) => (
            <button key={n.view} type="button" onClick={() => go(n.view)} className={cn('text-tagline-1 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left transition', view === n.view ? 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-100 font-medium' : 'hover:bg-background-3 dark:hover:bg-background-7')}>
              <Icon name={n.icon} />
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="bg-primary-50 dark:bg-primary-500/10 border-primary-100 dark:border-primary-500/20 rounded-2xl border p-4">
          <strong className="text-secondary dark:text-accent text-tagline-1 flex items-center gap-2"><Icon name="list" className="size-4" /> Plan Lite</strong>
          <p className="text-tagline-2 mt-1.5">Agenda, clientes y confirmaciones por correo. Simple y sin extras.</p>
        </div>
        <div className="border-stroke-2 dark:border-stroke-6 mt-4 flex items-center gap-3 border-t px-1 pt-4">
          <Avatar name={biz.name} />
          <div className="min-w-0">
            <strong className="text-secondary dark:text-accent text-tagline-2 block truncate">{biz.name}</strong>
            <span className="text-tagline-3">administrador</span>
          </div>
        </div>
      </aside>

      <main className="min-w-0 pb-28 xl:pb-10">
        <header className="border-stroke-2 dark:border-stroke-6 bg-white/80 dark:bg-background-9/80 sticky top-0 z-30 flex h-[68px] items-center justify-between gap-3 border-b px-4 backdrop-blur-lg md:px-8">
          <Link href="/" className="flex items-center gap-2 xl:hidden"><BrandMark className="size-9" /><span className="text-secondary dark:text-accent font-semibold">Bookhero360</span></Link>
          <div className="hidden xl:block" />
          <div className="flex items-center gap-2">
            <span className="border-stroke-3 dark:border-stroke-7 text-tagline-2 hidden items-center gap-2 rounded-full border px-4 py-2 sm:flex"><Icon name="calendar" className="size-4" />{dateLabel}</span>
            <button type="button" aria-label="Notificaciones" onClick={() => go('emails')} className="border-stroke-3 dark:border-stroke-7 text-secondary dark:text-accent flex size-10 cursor-pointer items-center justify-center rounded-full border"><Icon name="bell" /></button>
          </div>
        </header>

        <div key={view} className="bh-page-in mx-auto max-w-[1180px] px-4 py-6 md:px-8 md:py-8">
          {loading && <AppSkeleton view={view} />}
          {!loading && view === 'summary' && (
            <>
              <PageHead eyebrow="Vista general" title="Resumen de tu negocio" text="Lo importante de hoy, listo para actuar." action={<NewApptBtn />} />
              <StatRow />
              <div className="grid gap-5 lg:grid-cols-2">
                <Card>
                  <CardHead title="Próximas citas" sub={selectedLabel} action={<Btn variant="mini" onClick={() => go('calendar')}>Ver calendario</Btn>} />
                  <div className="space-y-3">
                    {(events[todayKey] || []).length ? (events[todayKey] || []).map((a) => (
                      <div key={a.id} className="bg-background-2 dark:bg-background-7 flex items-center justify-between gap-3 rounded-2xl p-3">
                        <div className="flex items-center gap-3"><Avatar name={a.name} /><div><strong className="text-secondary dark:text-accent block">{a.name}</strong><span className="text-tagline-2">{a.service}</span></div></div>
                        <div className="text-right"><span className="text-secondary dark:text-accent text-tagline-2 block font-medium">{a.time}</span><Status /></div>
                      </div>
                    )) : <p className="text-tagline-2">No tienes citas hoy.</p>}
                  </div>
                </Card>
                <Card>
                  <CardHead title="Acciones rápidas" sub="Prueba las funciones principales" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: 'plus' as const, t: 'Crear cita', d: 'Agenda y envía confirmación.', fn: openAppointment },
                      { icon: 'users' as const, t: 'Ver clientes', d: 'Consulta datos e historial.', fn: () => go('clients') },
                      { icon: 'bell' as const, t: 'Notificación', d: 'Personaliza la confirmación.', fn: () => go('emails') },
                      { icon: 'settings' as const, t: 'Configurar', d: 'Personaliza tu negocio.', fn: () => go('settings') },
                    ].map((q) => (
                      <button key={q.t} type="button" onClick={q.fn} className="border-stroke-2 dark:border-stroke-6 hover:border-primary-500 hover:shadow-2 cursor-pointer rounded-2xl border p-4 text-left transition">
                        <Icon name={q.icon} className="text-primary-500 mb-2" />
                        <strong className="text-secondary dark:text-accent block">{q.t}</strong>
                        <span className="text-tagline-2">{q.d}</span>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </>
          )}

          {!loading && view === 'calendar' && (
            <>
              <PageHead eyebrow="Agenda Lite" title="Tu calendario, sin complicaciones" text="Organiza citas y confirma cada visita automáticamente por correo." action={<NewApptBtn />} />
              <StatRow />
              {calendar}
            </>
          )}

          {!loading && view === 'clients' && (
            <>
              <PageHead eyebrow="Contactos" title="Clientes" text="Consulta quién reservó y su historial de citas." action={<Btn onClick={() => setClientOpen(true)}><Icon name="plus" className="size-4" /> Nuevo cliente</Btn>} />
              <Card>
                <div className="mb-4 flex gap-2">
                  <div className="relative flex-1">
                    <Icon name="search" className="absolute top-1/2 left-4 size-4 -translate-y-1/2 opacity-50" />
                    <input type="search" aria-label="Buscar clientes" placeholder="Buscar por nombre o correo" value={query} onChange={(e) => setQuery(e.target.value)} className={cn(inputCls, '!pl-11')} />
                  </div>
                  <Btn variant="ghost" onClick={() => setQuery('')}>Limpiar</Btn>
                </div>
                <div className="space-y-3">
                  {filteredClients.map((c) => (
                    <div key={c.email} className="bg-background-2 dark:bg-background-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-3">
                      <div className="flex min-w-0 items-center gap-3"><Avatar name={c.name} /><div className="min-w-0"><strong className="text-secondary dark:text-accent block">{c.name}</strong><span className="text-tagline-2 block truncate">{c.email} · {c.visits} {c.visits === 1 ? 'cita' : 'citas'}</span></div></div>
                      <div className="flex gap-2">
                        <Btn variant="mini" onClick={() => notify('Historial abierto: demo con próximas citas y correos.')}>Ver historial</Btn>
                        <Btn variant="mini" onClick={() => { go('emails'); notify('Cliente seleccionado para el correo de prueba.'); }}>Enviar correo</Btn>
                      </div>
                    </div>
                  ))}
                  {!filteredClients.length && <p className="text-tagline-2 p-6 text-center">No se encontraron clientes.</p>}
                </div>
              </Card>
            </>
          )}

          {!loading && view === 'emails' && (
            <>
              <PageHead eyebrow="Notificaciones" title="Confirmación de reserva" text="Personaliza el único mensaje automático que recibe el cliente." action={<Btn onClick={() => notify('Confirmación de reserva guardada.')}><Icon name="check" className="size-4" /> Guardar mensaje</Btn>} />
              <Card>
                <CardHead title="Mensaje por correo" sub="Se envía inmediatamente cuando se confirma la reserva." action={<Status>{sendMail ? 'Activa' : 'Pausada'}</Status>} />
                {emailEditor('n')}
              </Card>
            </>
          )}

          {!loading && view === 'settings' && (
            <>
              <PageHead eyebrow="Preferencias" title="Ajustes" text="Configuración esencial para una versión Lite." action={<Btn onClick={() => notify('Ajustes guardados para esta demostración.')}>Guardar cambios</Btn>} />
              <div className="grid gap-5 lg:grid-cols-2">
                <Card>
                  <CardHead title="Datos del negocio" sub="Aparecen en las confirmaciones" />
                  <div className="space-y-3">
                    <Field label="Nombre" id="s-name"><input id="s-name" className={inputCls} value={biz.name} onChange={(e) => setBiz({ ...biz, name: e.target.value })} /></Field>
                    <Field label="Correo remitente" id="s-email"><input id="s-email" type="email" className={inputCls} value={biz.email} onChange={(e) => setBiz({ ...biz, email: e.target.value })} /></Field>
                    <Field label="Zona horaria" id="s-tz">
                      <select id="s-tz" className={inputCls} value={biz.tz} onChange={(e) => setBiz({ ...biz, tz: e.target.value })}>
                        {['Quito / Bogotá / Lima', 'Ciudad de México', 'Buenos Aires / Santiago'].map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>
                </Card>
                <Card>
                  <CardHead title="Confirmación de reserva" sub="Única notificación automática de la versión Lite" />
                  <div className="border-stroke-2 dark:border-stroke-6 flex items-center justify-between gap-4 rounded-2xl border p-4">
                    <div><strong className="text-secondary dark:text-accent block">Enviar confirmación por correo</strong><span className="text-tagline-2">Se envía apenas se crea una reserva.</span></div>
                    <button type="button" role="switch" aria-checked={sendMail} aria-label="Enviar confirmación por correo" onClick={() => setSendMail(!sendMail)} className={cn('relative h-7 w-12 shrink-0 cursor-pointer rounded-full transition', sendMail ? 'bg-primary-500' : 'bg-stroke-3 dark:bg-stroke-7')}>
                      <span className={cn('absolute top-1 size-5 rounded-full bg-white transition-all', sendMail ? 'left-6' : 'left-1')} />
                    </button>
                  </div>
                  <Btn variant="ghost" className="mt-4" onClick={() => { setStep(0); setWizard(true); }}>Volver a abrir el asistente inicial</Btn>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>

      {(view === 'calendar' || view === 'summary') && (
        <button type="button" aria-label="Nueva cita" onClick={openAppointment} className="bg-primary-500 fixed right-5 bottom-24 z-40 flex size-14 cursor-pointer items-center justify-center rounded-full text-white shadow-[0_12px_30px_rgba(13,143,132,.45)] xl:hidden">
          <Icon name="plus" className="size-6" />
        </button>
      )}
      <nav className="border-stroke-2 dark:border-stroke-6 bg-white/95 dark:bg-background-9/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t px-2 pt-2 pb-3 backdrop-blur-lg xl:hidden" aria-label="Navegación móvil">
        {NAV.map((n) => (
          <button key={n.view} type="button" onClick={() => go(n.view)} className={cn('text-tagline-3 flex cursor-pointer flex-col items-center gap-1 rounded-xl py-1.5', view === n.view ? 'text-primary-600 dark:text-primary-300 font-semibold' : '')}>
            <Icon name={n.icon} />
            {n.short}
          </button>
        ))}
      </nav>

      <Modal open={apptOpen} onClose={() => setApptOpen(false)} title="Nueva cita" sub={sendMail ? 'La confirmación se enviará por correo.' : 'Las confirmaciones están pausadas en Ajustes.'}>
        <form onSubmit={saveAppointment} className="space-y-3">
          <Field label="Nombre del cliente" id="a-client"><input id="a-client" name="client" required placeholder="Ej. Camila Torres" className={inputCls} /></Field>
          <Field label="Correo electrónico" id="a-email"><input id="a-email" name="email" type="email" required placeholder="cliente@correo.com" className={inputCls} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Fecha" id="a-date"><input id="a-date" name="date" type="date" required defaultValue={selected} className={inputCls} /></Field>
            <Field label="Hora" id="a-time"><input id="a-time" name="time" type="time" required defaultValue="10:00" className={inputCls} /></Field>
          </div>
          <Field label="Motivo de la cita" id="a-service"><input id="a-service" name="service" placeholder="Ej. Consulta inicial" defaultValue={service.name} className={inputCls} /></Field>
          <label className="border-stroke-3 dark:border-stroke-7 flex cursor-pointer items-start gap-3 rounded-2xl border p-4">
            <input type="checkbox" checked={sendMail} onChange={(e) => setSendMail(e.target.checked)} className="accent-primary-500 mt-1" />
            <span><strong className="text-secondary dark:text-accent block">Enviar confirmación automática</strong><span className="text-tagline-2">El cliente recibirá los detalles de la cita en su correo.</span></span>
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <Btn type="button" variant="ghost" onClick={() => setApptOpen(false)}>Cancelar</Btn>
            <Btn type="submit">Guardar cita</Btn>
          </div>
        </form>
      </Modal>

      <Modal open={clientOpen} onClose={() => setClientOpen(false)} title="Nuevo cliente" sub="Guarda sus datos para próximas reservas.">
        <form onSubmit={saveClient} className="space-y-3">
          <Field label="Nombre completo" id="c-name"><input id="c-name" name="name" required placeholder="Ej. Ana Martínez" className={inputCls} /></Field>
          <Field label="Correo electrónico" id="c-email"><input id="c-email" name="email" type="email" required placeholder="ana@correo.com" className={inputCls} /></Field>
          <div className="flex justify-end gap-2 pt-2">
            <Btn type="button" variant="ghost" onClick={() => setClientOpen(false)}>Cancelar</Btn>
            <Btn type="submit">Guardar cliente</Btn>
          </div>
        </form>
      </Modal>

      <div role="status" aria-live="polite" className={cn('bg-secondary fixed bottom-24 left-1/2 z-[120] flex max-w-[92vw] -translate-x-1/2 items-center gap-2.5 rounded-full px-5 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,.3)] transition-all duration-300 xl:bottom-8', toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0')}>
        <Icon name="check" className="text-ns-green size-4" />
        <span className="text-tagline-2">{toast}</span>
      </div>
    </div>
  );
};

export default BookheroApp;
