import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/brand/Icon';
import LinkButton from '@/components/ui/button/LinkButton';
import BookshelfBackground from './BookshelfBackground';

const days = Array.from({ length: 28 }, (_, i) => i + 1);
const booked: Record<number, string> = {
  3: 'bg-primary-500',
  9: 'bg-ns-green',
  12: 'bg-primary-500',
  18: 'bg-ns-yellow',
  24: 'bg-primary-500',
  27: 'bg-ns-green',
};

export const ProductPreview = ({ name = 'Bookhero360' }: { name?: string }) => (
  <div className="relative mx-auto mt-14 w-full max-w-[980px]">
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
      <div className="flex flex-col gap-4 text-left">
        <div className="bg-background-3 dark:bg-background-7 rounded-2xl p-5">
          <p className="text-secondary/60 dark:text-accent/60 text-tagline-3 mb-3 uppercase">Agenda de hoy</p>
          {[
            ['09:30', 'Valentina Rojas', 'Consulta inicial'],
            ['15:00', 'Diego Méndez', 'Seguimiento'],
          ].map(([t, n, s]) => (
            <div
              key={n}
              className="border-stroke-2 dark:border-stroke-6 mb-2 rounded-xl border bg-white p-3 last:mb-0 dark:bg-black/20">
              <p className="text-secondary dark:text-accent text-tagline-2 font-medium">{n}</p>
              <p className="text-secondary/60 dark:text-accent/60 text-tagline-3">
                {t} · {s}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-secondary rounded-2xl p-5 text-white">
          <p className="text-ns-green text-tagline-3 mb-2 flex items-center gap-1.5 uppercase">
            <Icon name="mail" className="size-4" /> Correo enviado
          </p>
          <p className="text-tagline-2 font-medium">Tu reserva está confirmada</p>
          <p className="text-tagline-3 mt-1 text-white/60">
            Hola Valentina, tu cita quedó confirmada el 30 de octubre a las 09:30. ¡Te esperamos! · {name}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative z-10 pt-[200px] pb-[88px] 2xl:pt-[260px]">
    <BookshelfBackground />
    <div className="main-container">
      <div className="flex flex-col items-center text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-primary-light bh-sheen mb-5">Versión lite · Solo correo</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="text-secondary dark:text-accent mb-4 max-w-[900px] font-medium">
            Reservas ordenadas, <span className="text-primary-500">confirmadas por correo</span>
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="text-secondary/60 dark:text-accent/60 mb-8 max-w-[720px]">
            Bookhero360 es la agenda lite para tu negocio: calendario, clientes y una confirmación automática por
            correo en cada reserva. Sin chatbot, sin WhatsApp, sin complicaciones.
          </p>
        </RevealAnimation>
        <ul className="flex w-[90%] flex-col gap-4 sm:w-auto sm:flex-row">
          <li>
            <LinkButton
              href="/app"
              className="btn btn-primary btn-xl hover:btn-white-dark bh-sheen w-full sm:w-auto">
              Probar la demo
            </LinkButton>
          </li>
          <li>
            <LinkButton
              href="/#funciones"
              className="btn hover:btn-secondary btn-white btn-xl dark:bg-accent/20 dark:text-secondary w-full border-0 sm:w-auto">
              Ver funciones
            </LinkButton>
          </li>
        </ul>
      </div>
      <RevealAnimation delay={0.4}>
        <ProductPreview />
      </RevealAnimation>
    </div>
  </section>
);

export default Hero;
