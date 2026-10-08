import { cn } from '@/utils/cn';
import BrandGlyph from './BrandGlyph';

export const BrandMark = ({ className }: { className?: string }) => (
  <span className={cn('inline-flex size-11 shrink-0', className)}>
    <BrandGlyph className="size-full" />
  </span>
);

/** Logotipo: isotipo + wordmark al estilo de la plantilla (nombre en regular, sufijo en ligero). */
export const BrandLogo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <span className={cn('inline-flex items-center gap-2.5', className)}>
    <BrandMark />
    <span className={cn('text-[26px] leading-none tracking-tight', light ? 'text-white' : 'text-secondary')}>
      <span className="font-medium">Bookhero</span>
      <span className={cn('font-light', light ? 'text-white/60' : 'text-secondary/50')}>360</span>
    </span>
  </span>
);

export default BrandMark;
