import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'producto',
    title: 'Producto',
    submenu: [
      { id: 'funciones', label: 'Funciones', href: '/#funciones' },
      { id: 'correos', label: 'Confirmaciones por correo', href: '/#correos' },
      { id: 'para-quien', label: 'Para quién es', href: '/#para-quien' },
      { id: 'demo', label: 'Probar la demo', href: '/app' },
    ],
  },
  {
    id: 'soluciones',
    title: 'Soluciones',
    submenu: [
      { id: 'salud', label: 'Salud y bienestar', href: '/#soluciones' },
      { id: 'belleza', label: 'Belleza y cuidado personal', href: '/#soluciones' },
      { id: 'talleres', label: 'Talleres y servicios', href: '/#soluciones' },
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos',
    submenu: [
      { id: 'faq', label: 'Preguntas frecuentes', href: '/#faq' },
      { id: 'privacidad', label: 'Política de privacidad', href: '/privacy-policy' },
      { id: 'terminos', label: 'Términos y condiciones', href: '/terms-conditions' },
      { id: 'legal', label: 'Aviso legal', href: '/legal' },
    ],
  },
  {
    id: 'planes',
    title: 'Planes',
    submenu: [{ id: 'plan-lite', label: 'Plan Lite', href: '/#planes' }],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    submenu: [{ id: 'contact-us', label: 'Escríbenos', href: '/contact-us' }],
  },
];
