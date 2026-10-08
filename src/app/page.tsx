import BookshelfBackground from '@/components/bookhero/BookshelfBackground';
import Audit from '@/components/home/Audit';
import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Results from '@/components/home/Results';
import Services from '@/components/home/Services';
import Steps from '@/components/home/Steps';
import Testimonial from '@/components/home/Testimonial';
import WhyUs from '@/components/home/WhyUs';
import { Faq, Plans } from '@/components/bookhero/Sections';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Bookhero360 — Agenda lite con confirmaciones por correo',
  description:
    'Bookhero360 es la agenda lite para tu negocio: calendario, clientes y confirmación de reserva automática por correo electrónico.',
};

const page = () => {
  return (
    <main>
      <BookshelfBackground />
      <Hero />
      <div className="relative z-10 bg-white dark:bg-black">
        <Services />
        <Steps />
        <WhyUs />
        <Results />
        <Testimonial />
        <Audit />
        <Plans />
        <Faq />
        <CTA />
      </div>
    </main>
  );
};

export default page;
