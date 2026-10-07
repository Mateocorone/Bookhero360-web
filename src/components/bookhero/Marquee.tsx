'use client';

import Icon, { IconName } from '@/components/brand/Icon';
import Marquee from 'react-fast-marquee';

const items: { icon: IconName; text: string }[] = [
  { icon: 'calendarCheck', text: 'Reservas sin enredos' },
  { icon: 'mail', text: 'Confirmación por correo' },
  { icon: 'users', text: 'Clientes en un solo lugar' },
  { icon: 'clock', text: 'Listo en minutos' },
  { icon: 'shield', text: 'Simple y ordenado' },
  { icon: 'sparkles', text: 'Mensajes personalizables' },
];

const MarqueeStrip = () => (
  <div className="border-stroke-2 dark:border-stroke-6 border-y py-5">
    <Marquee gradient={false} speed={40} pauseOnHover>
      {items.map((it) => (
        <span key={it.text} className="text-secondary/70 dark:text-accent/70 mx-8 inline-flex items-center gap-3 text-lg font-medium">
          <Icon name={it.icon} className="text-primary-500" />
          {it.text}
          <span className="bg-stroke-3 dark:bg-stroke-7 ml-8 size-1.5 rounded-full" />
        </span>
      ))}
    </Marquee>
  </div>
);

export default MarqueeStrip;
