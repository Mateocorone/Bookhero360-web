'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { IconName } from '@/components/brand/Icon';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';

interface UseCase {
  title: string;
  description: string;
  name: string;
  designation: string;
  icon: IconName;
}

// Ejemplos ilustrativos del correo de confirmación (no son testimonios de clientes).
const useCases: UseCase[] = [
  {
    title: 'Consultorio odontológico',
    description: '"Hola Camila, tu reserva para Limpieza dental quedó confirmada el 14 de octubre a las 10:00. ¡Te esperamos en Dental Sur!"',
    name: 'Dental Sur',
    designation: 'Ejemplo de correo',
    icon: 'shield',
  },
  {
    title: 'Salón de belleza',
    description: '"Hola Laura, tu reserva para Corte y color quedó confirmada el 18 de octubre a las 15:30. ¡Nos vemos en Studio Aura!"',
    name: 'Studio Aura',
    designation: 'Ejemplo de correo',
    icon: 'sparkles',
  },
  {
    title: 'Taller mecánico',
    description: '"Hola Andrés, tu reserva para Revisión general quedó confirmada el 21 de octubre a las 09:00. ¡Te esperamos en Taller Norte!"',
    name: 'Taller Norte',
    designation: 'Ejemplo de correo',
    icon: 'settings',
  },
  {
    title: 'Psicología y bienestar',
    description: '"Hola Sofía, tu sesión de Terapia individual quedó confirmada el 22 de octubre a las 17:00. Te esperamos en Espacio Calma."',
    name: 'Espacio Calma',
    designation: 'Ejemplo de correo',
    icon: 'user',
  },
  {
    title: 'Academia de idiomas',
    description: '"Hola Mateo, tu clase de Inglés conversacional quedó confirmada el 23 de octubre a las 18:30. ¡Nos vemos en Lingua!"',
    name: 'Academia Lingua',
    designation: 'Ejemplo de correo',
    icon: 'globe',
  },
  {
    title: 'Barbería',
    description: '"Hola Julián, tu reserva para Corte y barba quedó confirmada el 24 de octubre a las 11:00. ¡Te esperamos en Barber 22!"',
    name: 'Barber 22',
    designation: 'Ejemplo de correo',
    icon: 'clock',
  },
  {
    title: 'Fisioterapia',
    description: '"Hola Elena, tu sesión de Rehabilitación quedó confirmada el 25 de octubre a las 08:30. ¡Te esperamos en Fisio Plus!"',
    name: 'Fisio Plus',
    designation: 'Ejemplo de correo',
    icon: 'users',
  },
  {
    title: 'Asesoría legal',
    description: '"Hola Ricardo, tu consulta de Asesoría laboral quedó confirmada el 28 de octubre a las 16:00. Te esperamos en Estudio Mora."',
    name: 'Estudio Mora',
    designation: 'Ejemplo de correo',
    icon: 'list',
  },
];

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) {
      return;
    }

    const updateSlideStyles = () => {
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex;
      const slidesPerView = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 4;

      slides.forEach((slide, index) => {
        slide.style.transition = 'opacity 0.6s ease-out, filter 0.6s ease-out';

        let offset = index - activeIndex;
        if (offset < 0) {
          offset += slides.length;
        }

        if (offset >= 0 && offset < slidesPerView) {
          slide.style.opacity = '1';
          slide.style.filter = 'blur(0px)';
        } else {
          slide.style.opacity = '0.3';
          slide.style.filter = 'blur(30px)';
        }
      });
    };

    swiper.on('init', updateSlideStyles);
    swiper.on('slideChangeTransitionStart', updateSlideStyles);

    return () => {
      swiper.off('init', updateSlideStyles);
      swiper.off('slideChangeTransitionStart', updateSlideStyles);
    };
  }, []);

  return (
    <section className="py-18 md:py-20 lg:py-24 xl:py-39">
      <div className="main-container">
        <div className="space-y-9">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.05}>
              <h2 className="font-normal">Así le llega la reserva a tu cliente</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <p className="mx-auto max-w-[620px] text-lg leading-[150%] font-normal">
                Ejemplos del correo de confirmación para distintos tipos de negocio.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.1}>
            <div className="bg-background-4 rounded-3xl p-1 md:rounded-4xl">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  425: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1290: { slidesPerView: 4 },
                }}
                spaceBetween={4}
                initialSlide={4}
                loop={true}
                loopAdditionalSlides={2}
                speed={1100}
                allowTouchMove={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{
                  el: '.financial-management-platform-pagination',
                  clickable: true,
                  type: 'bullets',
                  dynamicBullets: false,
                }}
                className="financial-management-platform-swiper">
                {useCases.map((useCase) => (
                  <SwiperSlide key={useCase.title}>
                    <TestimonialCard {...useCase} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="financial-management-platform-pagination bg-secondary mx-auto flex !h-6 !w-fit items-center justify-center rounded-[56px] p-2 text-center" />
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Testimonial.displayName = 'Testimonial';
export default Testimonial;
