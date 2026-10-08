import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon, { IconName } from '@/components/brand/Icon';
import Marquee from 'react-fast-marquee';

const audiences: { icon: IconName; label: string }[] = [
  { icon: 'user', label: 'Consultorios' },
  { icon: 'sparkles', label: 'Salones de belleza' },
  { icon: 'clock', label: 'Barberías' },
  { icon: 'settings', label: 'Talleres' },
  { icon: 'globe', label: 'Academias' },
  { icon: 'shield', label: 'Clínicas dentales' },
  { icon: 'users', label: 'Psicólogos' },
  { icon: 'list', label: 'Fisioterapia' },
  { icon: 'calendar', label: 'Estudios fotográficos' },
  { icon: 'link', label: 'Asesores y consultores' },
];

const Clients = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-28" aria-label="Para qué negocios es Bookhero360">
      <div className="main-container relative overflow-hidden">
        <div className="space-y-10">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-5 text-secondary text-center">Pensado para negocios que viven de las citas</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="relative">
              <Marquee autoFill speed={40}>
                <ul className="flex items-center justify-center gap-x-4 pr-4">
                  {audiences.map((a) => (
                    <li
                      key={a.label}
                      className="bg-background-4 text-secondary/70 text-tagline-1 flex shrink-0 items-center gap-2.5 rounded-full py-2.5 pr-5 pl-2.5">
                      <span className="bg-primary-500 flex size-8 items-center justify-center rounded-full text-white">
                        <Icon name={a.icon} className="size-4" />
                      </span>
                      {a.label}
                    </li>
                  ))}
                </ul>
              </Marquee>
            </div>
          </RevealAnimation>
        </div>
        <div
          className="absolute bottom-[0%] left-0 h-[80px] w-[80px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#fff_39.14%)] sm:h-[130px] md:w-[150px] xl:left-[-20%] 2xl:w-[455px]"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 bottom-[0%] h-[80px] w-[80px] rotate-180 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#fff_39.14%)] sm:h-[130px] md:w-[150px] xl:right-[-20%] 2xl:w-[455px]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

Clients.displayName = 'Clients';
export default Clients;
