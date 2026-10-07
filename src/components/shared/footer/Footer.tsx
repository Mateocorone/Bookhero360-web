'use client';

import { BrandLogo } from '@/components/brand/BrandMark';
import { bookhero } from '@/components/brand/brands';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle';

const Footer = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  if ((pathname === '/app' || pathname.startsWith('/app/'))) return null;
  const brand = bookhero;
  const year = new Date().getFullYear();

  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-5">
            <div className="max-w-[360px]">
              <BrandLogo name={brand.name} suffix={brand.suffix} className="!text-accent" />
              <p className="text-accent/60 text-tagline-1 mt-4">{brand.tagline}</p>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3 xl:col-start-7">
            <p className="text-accent mb-4 font-medium">Producto</p>
            <ul className="text-accent/60 text-tagline-1 space-y-3">
              {brand.nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 xl:col-span-3">
            <p className="text-accent mb-4 font-medium">Contacto</p>
            <ul className="text-accent/60 text-tagline-1 space-y-3">
              <li>hola@bookhero360.com</li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-accent transition-colors">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-stroke-8 flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-accent/60 text-tagline-2">© {year} Bookhero360. Todos los derechos reservados.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
