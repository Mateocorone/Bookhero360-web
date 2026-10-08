import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckmarkIcon } from '@/icons';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  features: string[];
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Qué incluye la versión Lite?',
    answer:
      'Bookhero360 Lite reúne lo esencial para organizar tus reservas: un calendario claro, tu directorio de clientes y una confirmación automática por correo.',
    features: ['Calendario por mes y por semana', 'Clientes con historial de citas', 'Confirmación de reserva por correo', 'Ajustes del negocio'],
  },
  {
    id: '2',
    question: '¿Tiene chatbot o WhatsApp?',
    answer:
      'No. La versión Lite funciona solo con notificaciones por correo electrónico. Si necesitas chatbot, WhatsApp y automatizaciones avanzadas, puedes pasar a Automatix360.',
    features: ['Avisos únicamente por correo', 'Sin canales extra que administrar', 'Camino de crecimiento hacia Automatix360'],
  },
  {
    id: '3',
    question: '¿Cuánto tarda la configuración?',
    answer:
      'Un asistente de cinco pasos te guía desde el nombre de tu negocio hasta el mensaje de confirmación. Se completa en pocos minutos.',
    features: ['Negocio y correo remitente', 'Preferencias de calendario', 'Servicio principal y duración', 'Horarios y mensaje de confirmación'],
  },
  {
    id: '4',
    question: '¿Mis clientes reciben un aviso?',
    answer:
      'Sí. Cuando creas una reserva, el cliente recibe un correo con el nombre del servicio, la fecha y la hora de su cita.',
    features: ['Se envía al guardar la reserva', 'Puedes activarlo o pausarlo en Ajustes', 'Vista previa antes de guardar el mensaje'],
  },
  {
    id: '5',
    question: '¿Puedo editar el mensaje de confirmación?',
    answer:
      'Sí. Cambias el asunto y el texto, e insertas variables que se reemplazan con los datos de cada reserva.',
    features: ['Variable de nombre del cliente', 'Variables de servicio, fecha y hora', 'Variable con el nombre de tu negocio'],
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-18 md:py-20 lg:py-24 xl:py-39">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center gap-y-10 xl:flex-row xl:items-start xl:justify-between xl:gap-y-0">
          <div className="space-y-3 text-center sm:text-left">
            <RevealAnimation delay={0.1}>
              <h2 className="w-full xl:max-w-[391px]">Preguntas frecuentes</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="w-full text-lg leading-[150%] font-normal xl:max-w-[391px]">
                Respuestas rápidas a lo que más nos preguntan sobre Bookhero360.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="w-full max-w-[653px]">
              <Accordion
                className="bg-background-4 w-full space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-4xl"
                defaultValue="1">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out data-[state=closed]:pb-0 data-[state=open]:pb-8 md:rounded-[28px] md:px-8">
                    <AccordionTrigger
                      value={item.id}
                      className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out data-[state=closed]:pb-8 data-[state=open]:pb-4"
                      titleClassName="lg:text-heading-6 text-tagline-1 text-secondary my-auto flex-1 text-left font-normal"
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent
                      value={item.id}
                      className="border-t-0 pt-0 transition-all duration-500 ease-in-out">
                      <div className="space-y-6">
                        <p className="text-secondary/80 text-tagline-2 max-w-[500px] leading-[150%] font-normal md:text-lg">
                          {item.answer}
                        </p>
                        <ul className="space-y-2 md:space-y-1">
                          {item.features.map((feature) => (
                            <li key={`${item.id}-${feature}`} className="flex items-center justify-start gap-x-3">
                              <span className="bg-background-4 flex size-5 shrink-0 items-center justify-center rounded-full">
                                <CheckmarkIcon />
                              </span>
                              <p className="text-secondary/60 text-tagline-2 leading-[150%] font-normal md:text-lg">
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
