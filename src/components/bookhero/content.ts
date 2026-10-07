import { IconName } from '@/components/brand/Icon';

export const features: { icon: IconName; title: string; text: string }[] = [
  { icon: 'calendar', title: 'Calendario claro', text: 'Vista mensual y semanal con todas tus citas y la agenda del día a un clic.' },
  { icon: 'mail', title: 'Confirmación por correo', text: 'Cada reserva envía un correo al cliente con fecha, hora y servicio, de forma automática.' },
  { icon: 'users', title: 'Directorio de clientes', text: 'Busca por nombre o correo y consulta el historial de citas de cada persona.' },
  { icon: 'sparkles', title: 'Mensaje personalizable', text: 'Edita asunto y texto con variables como {{nombre}}, {{fecha}} y {{hora}}.' },
  { icon: 'clock', title: 'Horarios y servicios', text: 'Define tu jornada, la duración y el precio referencial de tu servicio principal.' },
  { icon: 'shield', title: 'Simple y ordenado', text: 'Sin curva de aprendizaje: solo lo esencial para no perder ninguna reserva.' },
];

export const solutions: { icon: IconName; title: string; items: string[] }[] = [
  {
    icon: 'calendarCheck',
    title: 'Gestión de reservas',
    items: ['Crea citas en segundos', 'Agenda del día siempre visible', 'Navegación por meses y semanas', 'Agrega en horarios libres'],
  },
  {
    icon: 'users',
    title: 'Relación con clientes',
    items: ['Ficha con nombre y correo', 'Historial de citas', 'Búsqueda instantánea', 'Alta rápida de nuevos clientes'],
  },
  {
    icon: 'bell',
    title: 'Notificaciones por correo',
    items: ['Una confirmación por reserva', 'Plantilla editable', 'Variables dinámicas', 'Vista previa antes de guardar'],
  },
];

export const steps = [
  { n: '01', title: 'Cuéntanos de tu negocio', text: 'Nombre, correo remitente y país. Es lo único que necesitas para empezar.' },
  { n: '02', title: 'Configura servicio y horarios', text: 'Elige tu servicio principal, su duración y tu jornada semanal.' },
  { n: '03', title: 'Personaliza tu confirmación', text: 'Ajusta el correo que recibirá cada cliente y mira la vista previa.' },
  { n: '04', title: 'Recibe reservas', text: 'Agenda, confirma y organiza. Tu cliente recibe el aviso al instante.' },
];

export const integrations: { icon: IconName; title: string; text: string }[] = [
  { icon: 'mail', title: 'Correo electrónico', text: 'Las confirmaciones se envían desde el correo de tu negocio.' },
  { icon: 'calendar', title: 'Calendarios', text: 'Los clientes pueden guardar la cita en su calendario personal.' },
  { icon: 'user', title: 'Gmail y Outlook', text: 'Compatible con los principales proveedores de correo.' },
  { icon: 'globe', title: 'Zonas horarias', text: 'Pensado para Latinoamérica: Ecuador, Colombia, Perú, México, Argentina y Chile.' },
];

export const faqs = [
  {
    q: '¿Qué incluye la versión Lite?',
    a: 'Calendario de citas, directorio de clientes, ajustes del negocio y una confirmación de reserva por correo electrónico.',
  },
  {
    q: '¿Tiene chatbot o WhatsApp?',
    a: 'No. Bookhero360 es la versión lite y funciona solo con notificaciones por correo. Si necesitas chatbot, WhatsApp y automatizaciones avanzadas, puedes pasar a Automatix360.',
  },
  {
    q: '¿Cuánto tarda la configuración?',
    a: 'Cinco pasos guiados: negocio, calendario, servicio, horarios y notificación. Se completa en pocos minutos.',
  },
  {
    q: '¿Mis clientes reciben un aviso?',
    a: 'Sí. Cuando creas una reserva, el cliente recibe un correo con el nombre del servicio, la fecha y la hora.',
  },
  {
    q: '¿Puedo editar el mensaje de confirmación?',
    a: 'Sí. Cambias el asunto y el texto, e insertas variables como nombre, servicio, fecha, hora y negocio.',
  },
];
