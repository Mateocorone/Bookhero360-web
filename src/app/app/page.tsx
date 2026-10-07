import BookheroApp from '@/components/panel/BookheroApp';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Bookhero360 — Tu agenda',
  description: 'Panel de agenda lite: calendario, clientes y confirmaciones por correo.',
};

const page = () => <BookheroApp />;

export default page;
