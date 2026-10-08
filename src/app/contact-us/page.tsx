import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/brand/Icon';
import CTA from '@/components/home/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contacto — Bookhero360',
  description: 'Escríbenos: te respondemos por correo.',
};

const inputCls =
  'bg-background-3 text-secondary placeholder:text-secondary/40 focus:ring-primary-500/20 w-full rounded-2xl border border-transparent px-5 py-4 text-tagline-1 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4';

const ContactUs = () => {
  return (
    <main className="bg-white">
      <section className="mx-[8px] mt-[8px] overflow-hidden rounded-2xl bg-linear-to-b from-[#142e6e] to-[#edf2ff] pt-[150px] pb-24 md:rounded-3xl lg:rounded-4xl lg:pt-[190px] xl:rounded-[56px]">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1} instant>
                <h1 className="mx-auto max-w-[780px] font-medium text-white">Hablemos de tu agenda</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.2} instant>
                <p className="text-accent/80 mx-auto max-w-[620px] text-lg leading-[150%] font-normal">
                  Cuéntanos sobre tu negocio y te respondemos por correo con los siguientes pasos.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3} instant>
              <div className="mx-auto grid max-w-[1000px] gap-1 rounded-3xl bg-white/25 p-1 ring-1 ring-white/50 backdrop-blur-sm md:grid-cols-[1fr_1.4fr] md:rounded-4xl">
                <div className="space-y-6 rounded-[20px] bg-white p-8 md:rounded-[28px]">
                  <h2 className="text-heading-5 font-normal">Escríbenos</h2>
                  {[
                    { icon: 'mail' as const, t: 'Correo', d: 'hola@bookhero360.com' },
                    { icon: 'clock' as const, t: 'Respuesta', d: 'En un día hábil' },
                    { icon: 'globe' as const, t: 'Atención', d: 'En español, para Latinoamérica' },
                  ].map((i) => (
                    <div key={i.t} className="flex items-start gap-3">
                      <span className="bg-primary-500 flex size-11 shrink-0 items-center justify-center rounded-full text-white">
                        <Icon name={i.icon} />
                      </span>
                      <div>
                        <p className="text-secondary/50 text-tagline-2">{i.t}</p>
                        <p className="text-secondary text-tagline-1">{i.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <form
                  action="mailto:hola@bookhero360.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-4 rounded-[20px] bg-white p-8 md:rounded-[28px]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={inputCls} name="nombre" placeholder="Tu nombre" required aria-label="Tu nombre" />
                    <input
                      className={inputCls}
                      name="correo"
                      type="email"
                      placeholder="Tu correo"
                      required
                      aria-label="Tu correo"
                    />
                  </div>
                  <input className={inputCls} name="negocio" placeholder="Tu negocio" aria-label="Tu negocio" />
                  <textarea
                    className={`${inputCls} min-h-[140px] resize-y`}
                    name="mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    aria-label="Mensaje"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-tagline-1 cursor-pointer rounded-2xl px-8 py-4 font-normal text-white transition-opacity hover:opacity-85">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default ContactUs;
