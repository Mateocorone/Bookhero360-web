import Icon from '@/components/brand/Icon';

const days = Array.from({ length: 28 }, (_, i) => i + 1);
const booked: Record<number, string> = {
  3: 'bg-primary-500',
  9: 'bg-ns-green',
  12: 'bg-primary-500',
  18: 'bg-ns-yellow',
  24: 'bg-primary-500',
  27: 'bg-ns-green',
};

export const AgendaCard = ({ className = '', tone = 'auto' }: { className?: string; tone?: 'auto' | 'dark' }) => {
  const dark = tone === 'dark';
  return (
    <div
      className={`rounded-2xl p-5 text-left ${
        dark ? 'bg-background-9' : 'bg-background-3 dark:bg-background-7'
      } ${className}`}>
      <p className={`text-tagline-3 mb-3 uppercase ${dark ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60'}`}>
        Agenda de hoy
      </p>
      {[
        ['09:30', 'Valentina Rojas', 'Consulta inicial'],
        ['15:00', 'Diego Méndez', 'Seguimiento'],
      ].map(([t, n, s]) => (
        <div
          key={n}
          className={`mb-2 rounded-xl border p-3 last:mb-0 ${
            dark
              ? 'border-stroke-7 bg-white/5'
              : 'border-stroke-2 dark:border-stroke-6 bg-white dark:bg-black/20'
          }`}>
          <p className={`text-tagline-2 font-medium ${dark ? 'text-accent' : 'text-secondary dark:text-accent'}`}>{n}</p>
          <p className={`text-tagline-3 ${dark ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60'}`}>
            {t} · {s}
          </p>
        </div>
      ))}
    </div>
  );
};

export const MailCard = ({
  subject = 'Tu reserva está confirmada',
  text = 'Hola Valentina, tu cita quedó confirmada el 30 de octubre a las 09:30. ¡Te esperamos!',
  from = 'Bookhero360',
  className = '',
}: {
  subject?: string;
  text?: string;
  from?: string;
  className?: string;
}) => (
  <div className={`bg-secondary rounded-2xl p-5 text-left text-white ${className}`}>
    <p className="text-ns-green text-tagline-3 mb-2 flex items-center gap-1.5 uppercase">
      <Icon name="mail" className="size-4" /> Correo enviado
    </p>
    <p className="text-tagline-2 font-medium">{subject}</p>
    <p className="text-tagline-3 mt-1 text-white/60">
      {text} · {from}
    </p>
  </div>
);

export const ProductPreview = ({ className = '' }: { className?: string }) => (
  <div className={`relative mx-auto w-full max-w-[980px] ${className}`}>
    <div className="bh-glass bh-float border-stroke-2 dark:border-stroke-6 shadow-3 grid gap-5 rounded-[28px] border p-4 md:grid-cols-[1.4fr_1fr] md:p-6">
      <div className="bg-background-3 dark:bg-background-7 rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-secondary dark:text-accent font-medium">Octubre 2026</p>
          <span className="badge badge-primary-light">Plan Lite</span>
        </div>
        <div className="text-secondary/50 dark:text-accent/50 text-tagline-3 mb-2 grid grid-cols-7 text-center">
          {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d) => (
            <div
              key={d}
              className="bg-accent dark:bg-background-9 text-secondary/70 dark:text-accent/70 text-tagline-3 relative flex aspect-square items-center justify-center rounded-lg">
              {d}
              {booked[d] && <span className={`absolute bottom-1 size-1.5 rounded-full ${booked[d]}`} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AgendaCard />
        <MailCard />
      </div>
    </div>
  </div>
);
