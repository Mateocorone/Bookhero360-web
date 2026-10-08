import { cn } from '@/utils/cn';
import gradient22Img from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import Icon, { IconName } from '../brand/Icon';

interface MailExample {
  id: number;
  business: string;
  subject: string;
  icon: IconName;
  message: string;
}

const mailExamples: MailExample[] = [
  {
    id: 1,
    business: 'Consultorio odontológico',
    subject: 'Tu cita está confirmada',
    icon: 'user',
    message:
      'Hola Camila, tu reserva para Limpieza dental quedó confirmada el 14 de octubre a las 10:00. ¡Te esperamos en Dental Sur!',
  },
  {
    id: 2,
    business: 'Salón de belleza',
    subject: 'Reserva confirmada',
    icon: 'sparkles',
    message:
      'Hola Laura, tu reserva para Corte y color quedó confirmada el 18 de octubre a las 15:30. ¡Nos vemos en Studio Aura!',
  },
  {
    id: 3,
    business: 'Taller mecánico',
    subject: 'Revisión agendada',
    icon: 'settings',
    message:
      'Hola Andrés, tu reserva para Revisión general quedó confirmada el 21 de octubre a las 09:00. ¡Te esperamos en Taller Norte!',
  },
];

const Testimonial = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        id="correos"
        className="bg-background-3 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[150px] xl:pb-[150px]">
        <div className="main-container">
          <div className="mb-[72px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Confirmaciones por correo</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary dark:text-accent">Así le llega la reserva a tu cliente.</h2>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="relative">
            <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
            <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
            <Marquee>
              <div className="scroll-bar flex items-center gap-x-10">
                {mailExamples.map((mail, index) => (
                  <article
                    key={mail.id}
                    className={cn(
                      'dark:bg-background-5 group hover:bg-secondary hover:dark:bg-background-8 relative min-w-[320px] cursor-pointer space-y-6 overflow-hidden rounded-[12px] bg-white p-4 backdrop-blur-[22px] transition-all duration-500 ease-in-out sm:min-w-[400px] lg:min-w-[722px] lg:space-y-10 lg:rounded-[20px] lg:p-14',
                      index === 0 && 'ml-10',
                    )}>
                    <div className="pointer-events-none absolute -top-[147%] -right-[56%] max-w-[500px] rotate-[295deg] opacity-0 blur-[10px] transition-all duration-500 ease-in-out select-none group-hover:opacity-100 lg:-top-[162%] lg:-right-[56%] lg:max-w-[723px]">
                      <Image src={gradient22Img} alt="" className="size-full object-cover" width={723} height={500} />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-100 text-primary-700 dark:bg-primary-500/25 flex size-[60px] transform items-center justify-center rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[102%] md:size-[84px]">
                          <Icon name={mail.icon} className="size-7 md:size-9" />
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-tagline-2 group-hover:text-accent transform font-semibold transition-all duration-500 ease-in-out group-hover:-translate-y-0.5">
                            {mail.business}
                          </h3>
                          <p className="text-tagline-3 group-hover:text-accent/60 transform transition-all duration-500 ease-in-out group-hover:-translate-y-0.5">
                            Asunto: {mail.subject}
                          </p>
                        </div>
                      </div>
                      <span className="bg-background-3 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 text-primary-600 inline-flex h-11 w-[74px] items-center justify-center rounded-[360px] px-2.5 py-1 transition-all duration-500">
                        <Icon name="mail" />
                      </span>
                    </div>
                    <blockquote>
                      <p className="group-hover:text-accent/60 max-w-[530px] transform text-wrap transition-all duration-500 ease-in-out group-hover:translate-x-1">
                        {mail.message}
                      </p>
                    </blockquote>
                  </article>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Testimonial;
