import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Funciones', href: '/#funciones' },
      { label: 'Cómo funciona', href: '/#como-funciona' },
      { label: 'Planes', href: '/#planes' },
      { label: 'Probar la demo', href: '/app' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Preguntas frecuentes', href: '/#faq' },
      { label: 'Contacto', href: '/contact-us' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidad', href: '/privacy-policy' },
      { label: 'Aviso legal', href: '/legal' },
      { label: 'Términos y condiciones', href: '/terms-conditions' },
    ],
  },
];
