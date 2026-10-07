import { cn } from '@/utils/cn';

/**
 * Marca Bookhero360: libro abierto (biblioteca) con página-lista a la izquierda y check de reserva
 * confirmada a la derecha; del lomo cae una cinta marcapáginas con forma de capa de héroe.
 */
const BrandGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={cn('size-10', className)}>
    <defs>
      <linearGradient id="bh-bg" x1="8" y1="0" x2="56" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#19b8a8" />
        <stop offset="1" stopColor="#075f58" />
      </linearGradient>
      <linearGradient id="bh-cape" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffd25e" />
        <stop offset="1" stopColor="#f08a2c" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="18" fill="url(#bh-bg)" />
    <path d="M10 41c8 7 16 9 22 9s14-2 22-9" fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M31 23.5C25 19.2 17.5 18.4 11.5 20v26c6-1.5 13.5-.8 19.5 3.3Z" fill="#fff" />
    <path d="M33 23.5c6-4.3 13.5-5.1 19.5-3.5v26c-6-1.5-13.5-.8-19.5 3.3Z" fill="#fff" fillOpacity=".9" />
    <path d="M16.5 28.5h9M16.5 33.5h9M16.5 38.5h5.5" stroke="#0d8f84" strokeOpacity=".38" strokeWidth="2.4" strokeLinecap="round" />
    <path d="m38 35.5 4 4 8-9.5" fill="none" stroke="#0d8f84" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.8 8.5h6.4c-.5 6.5 1.8 12.5.5 19.5L32 24.6 28.3 28c-1.3-7 1-13 .5-19.5Z" fill="url(#bh-cape)" />
    <path d="M28.8 8.5h6.4" stroke="#fff" strokeOpacity=".6" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export default BrandGlyph;
