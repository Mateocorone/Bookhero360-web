import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'producto',
    title: 'Producto',
    submenu: [
      { id: 'funciones', label: 'Funciones', href: '/#funciones' },
      { id: 'como-funciona', label: 'Cómo funciona', href: '/#como-funciona' },
      { id: 'correos', label: 'Confirmaciones por correo', href: '/#correos' },
      { id: 'demo', label: 'Probar la demo', href: '/app' },
    ],
  },
  {
    id: 'soluciones',
    title: 'Soluciones',
    submenu: [
      { id: 'para-quien', label: 'Para quién es', href: '/#para-quien' },
      { id: 'esencial', label: 'Lo esencial', href: '/#esencial' },
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos',
    submenu: [
      { id: 'faq', label: 'Preguntas frecuentes', href: '/#faq' },
      { id: 'privacidad', label: 'Política de privacidad', href: '/privacy-policy' },
      { id: 'legal', label: 'Aviso legal', href: '/legal' },
    ],
  },
  {
    id: 'planes',
    title: 'Planes',
    submenu: [{ id: 'planes-lite', label: 'Plan Lite', href: '/#planes' }],
  },
];
