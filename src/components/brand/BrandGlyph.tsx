import { cn } from '@/utils/cn';

/**
 * Marca Bookhero360 v2: "Book" = booking.
 * Escudo de héroe con forma de hoja de calendario (anillas ámbar + encabezado) y un check de reserva,
 * dentro de un círculo navy, como el isotipo de la plantilla.
 */
const BrandGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={cn('size-11', className)}>
    <defs>
      <linearGradient id="bh2-bg" x1="10" y1="0" x2="54" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2a4a9c" />
        <stop offset="1" stopColor="#0a1a45" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="32" fill="url(#bh2-bg)" />
    <path d="M17 20h30a3 3 0 0 1 3 3v14c0 7.500-7.500 13-18 18-10.500-5-18-10.500-18-18V23a3 3 0 0 1 3-3Z" fill="#fff" />
    <path d="M17 20h30a3 3 0 0 1 3 3v6H14v-6a3 3 0 0 1 3-3Z" fill="#dfe7f8" />
    <path d="M23 13.500v7M32 13.500v7M41 13.500v7" stroke="#ffc94d" strokeWidth="3.400" strokeLinecap="round" />
    <path d="m23.500 38.500 6 6 11-12" fill="none" stroke="#142e6e" strokeWidth="4.600" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BrandGlyph;
