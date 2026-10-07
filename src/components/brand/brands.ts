export interface Brand {
  name: string;
  suffix: string;
  home: string;
  nav: { label: string; href: string }[];
  cta: { label: string; href: string };
  tagline: string;
}

export const bookhero: Brand = {
  name: 'Bookhero',
  suffix: '360',
  home: '/',
  nav: [
    { label: 'Funciones', href: '/#funciones' },
    { label: 'Cómo funciona', href: '/#como-funciona' },
    { label: 'Planes', href: '/#planes' },
    { label: 'Preguntas', href: '/#faq' },
  ],
  cta: { label: 'Probar la demo', href: '/app' },
  tagline: 'La agenda lite para negocios que quieren reservas ordenadas y confirmaciones por correo, sin complicaciones.',
};
