import Hero from '@/components/bookhero/Hero';
import MarqueeStrip from '@/components/bookhero/Marquee';
import { Cta, Faq, Features, HowItWorks, Integrations, Plans, Solutions } from '@/components/bookhero/Sections';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Bookhero360 — Agenda lite con confirmaciones por correo',
  description:
    'Bookhero360 es la agenda lite para tu negocio: calendario, clientes y confirmación de reserva automática por correo electrónico.',
};

const page = () => (
  <main>
    <Hero />
    <div className="relative z-10 bg-white/80 backdrop-blur-md dark:bg-black/80">
      <MarqueeStrip />
      <Features />
      <HowItWorks />
      <Solutions />
      <Integrations />
      <Plans />
      <Faq />
      <Cta />
    </div>
  </main>
);

export default page;
