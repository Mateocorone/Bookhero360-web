'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SHELF_TOP = 150; // px desde arriba

interface Book {
  x: number; // % horizontal
  w: number;
  h: number;
  color: string;
  lean: number; // inclinación al empezar a caer
  rot: number; // rotación final (acostado)
  at: number; // momento en el timeline (0 - 0.6)
  drift: number; // desplazamiento horizontal al caer
  pile: number; // altura del montón donde aterriza
}

const books: Book[] = [
  { x: 3, w: 26, h: 88, color: '#2447d1', lean: 8, rot: 84, at: 0.0, drift: 10, pile: 0 },
  { x: 7, w: 22, h: 74, color: '#f2a93b', lean: 6, rot: -90, at: 0.3, drift: 22, pile: 20 },
  { x: 11, w: 30, h: 96, color: '#ef6f5e', lean: 10, rot: -78, at: 0.12, drift: -6, pile: 0 },
  { x: 16, w: 24, h: 80, color: '#1f3a5f', lean: 5, rot: 92, at: 0.5, drift: 8, pile: 0 },
  { x: 21, w: 28, h: 92, color: '#e9dcc0', lean: 12, rot: 96, at: 0.2, drift: 14, pile: 18 },
  { x: 27, w: 22, h: 70, color: '#5f84ff', lean: 6, rot: -88, at: 0.08, drift: -12, pile: 0 },
  { x: 33, w: 26, h: 86, color: '#9a6b3f', lean: 7, rot: 82, at: 0.42, drift: 16, pile: 0 },
  { x: 40, w: 30, h: 94, color: '#f2a93b', lean: 9, rot: 80, at: 0.3, drift: 8, pile: 0 },
  { x: 47, w: 24, h: 78, color: '#1f3a5f', lean: 5, rot: -94, at: 0.58, drift: -10, pile: 18 },
  { x: 54, w: 28, h: 90, color: '#ef6f5e', lean: 11, rot: -92, at: 0.36, drift: -16, pile: 0 },
  { x: 60, w: 22, h: 72, color: '#e9dcc0', lean: 6, rot: 88, at: 0.46, drift: 12, pile: 0 },
  { x: 66, w: 30, h: 98, color: '#2447d1', lean: 7, rot: 86, at: 0.44, drift: 10, pile: 20 },
  { x: 73, w: 24, h: 82, color: '#9a6b3f', lean: 10, rot: -82, at: 0.5, drift: -8, pile: 0 },
  { x: 79, w: 26, h: 76, color: '#f2a93b', lean: 6, rot: 90, at: 0.6, drift: 6, pile: 0 },
  { x: 85, w: 28, h: 92, color: '#5f84ff', lean: 12, rot: 94, at: 0.56, drift: 12, pile: 18 },
  { x: 91, w: 24, h: 84, color: '#ef6f5e', lean: 8, rot: -86, at: 0.62, drift: -10, pile: 0 },
  { x: 95, w: 26, h: 70, color: '#1f3a5f', lean: 5, rot: -90, at: 0.66, drift: -6, pile: 0 },
];

/**
 * Fondo de biblioteca: la pared y el estante quedan detrás del inicio; los libros viven en una capa
 * por encima del contenido y SOLO empiezan a caer cuando ya saliste del área de inicio.
 */
const BookshelfBackground = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            start: () => window.innerHeight * 0.75, // todavía en el inicio: no cae nada
            end: () => window.innerHeight * 2.0,
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        gsap.utils.toArray<HTMLElement>('[data-book]').forEach((el) => {
          const b = books[Number(el.dataset.book)];
          const dist = () => window.innerHeight - SHELF_TOP - b.w / 2 - 6 - b.pile;
          tl.to(el, { rotation: b.lean, duration: 0.14, ease: 'power1.in' }, b.at)
            .to(el, { y: dist, x: b.drift, rotation: b.rot, duration: 0.42, ease: 'power2.in' }, b.at + 0.14)
            .to(el, { y: () => dist() - 14, duration: 0.05, ease: 'power1.out' }, b.at + 0.56)
            .to(el, { y: dist, duration: 0.05, ease: 'power1.in' }, b.at + 0.61);
        });

        gsap.to(root.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            start: () => window.innerHeight * 2.4,
            end: () => window.innerHeight * 3.2,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <>
      {/* pared + estante (detrás del contenido) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7ef] via-[#f7f1e3] to-[#f1e8d3] dark:from-[#0b0d0e] dark:via-[#0e1112] dark:to-[#121615]" />
        <div className="bg-primary-300/30 dark:bg-primary-500/20 absolute -top-32 -left-24 size-[420px] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-24 size-[380px] rounded-full bg-[#f2a93b]/20 blur-[120px]" />
        <div
          className="absolute inset-x-0 h-3 bg-gradient-to-b from-[#b07a49] to-[#8a5a32] shadow-[0_10px_24px_rgba(60,35,10,.28)]"
          style={{ top: SHELF_TOP }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_46%_at_50%_42%,rgba(251,247,239,.92)_35%,transparent_78%)] dark:bg-[radial-gradient(ellipse_62%_46%_at_50%_42%,rgba(11,13,14,.92)_35%,transparent_78%)]" />
      </div>

      {/* libros (por encima del contenido, debajo de la barra de navegación) */}
      <div ref={root} aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        {books.map((b, i) => (
          <div
            key={i}
            data-book={i}
            className="absolute rounded-[3px] shadow-[inset_-3px_0_0_rgba(0,0,0,.18),0_2px_6px_rgba(0,0,0,.2)]"
            style={{
              left: `${b.x}%`,
              top: SHELF_TOP - b.h,
              width: b.w,
              height: b.h,
              background: b.color,
              transformOrigin: '50% 100%',
            }}>
            <span className="absolute inset-x-1 top-3 h-px bg-white/45" />
            <span className="absolute inset-x-1 top-5 h-px bg-white/30" />
            <span className="absolute inset-x-2 bottom-4 h-3 rounded-sm bg-white/25" />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookshelfBackground;
