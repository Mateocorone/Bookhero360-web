import { cn } from '@/utils/cn';
import BrandGlyph from './BrandGlyph';

const BrandMark = ({ className }: { className?: string }) => (
  <span className={cn('inline-flex size-10 shrink-0 drop-shadow-[0_8px_16px_rgba(47,93,240,.35)]', className)}>
    <BrandGlyph className="size-full" />
  </span>
);

export const BrandLogo = ({ name, suffix, className }: { name: string; suffix: string; className?: string }) => (
  <span className={cn('text-secondary dark:text-accent inline-flex items-center gap-2.5 text-xl font-semibold tracking-tight', className)}>
    <BrandMark />
    <span>
      {name}
      <span className="text-primary-500 font-bold">{suffix}</span>
    </span>
  </span>
);

export default BrandMark;
