import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Funciones', href: '/#funciones' },
      { label: 'Confirmaciones por correo', href: '/#correos' },
      { label: 'Planes', href: '/#planes' },
      { label: 'Probar la demo', href: '/app' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Preguntas frecuentes', href: '/#faq' },
      { label: 'Contacto', href: '/contact-us' },
      { label: 'Seguridad', href: '/security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos y condiciones', href: '/terms-conditions' },
      { label: 'Política de privacidad', href: '/privacy-policy' },
      { label: 'Política de reembolso', href: '/refund-policy' },
      { label: 'Aviso legal', href: '/legal' },
    ],
  },
];
