'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { BrandLogo } from '@/components/brand/BrandMark';
import { bookhero } from '@/components/brand/brands';
import Icon from '@/components/brand/Icon';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isScrolled } = useNavbarScroll(150);

  if ((pathname === '/app' || pathname.startsWith('/app/'))) return null;
  const brand = bookhero;

  return (
    <header
      className={cn(
        'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
        isScrolled && 'top-2',
      )}>
      <RevealAnimation direction="up" offset={100} delay={0.1} instant>
        <div className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 mx-auto rounded-3xl border px-2.5 py-2.5 xl:rounded-full xl:py-2">
          <div className="flex items-center justify-between">
            <Link href={brand.home} className="pl-1">
              <span className="sr-only">
                {brand.name}
                {brand.suffix}
              </span>
              <BrandLogo name={brand.name} suffix={brand.suffix} />
            </Link>
            <nav className="hidden xl:block">
              <ul className="flex items-center">
                {brand.nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block rounded-full border border-transparent px-4 py-2 transition-all duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden items-center gap-3 xl:flex">
              <Link href={brand.cta.href} className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                <span>{brand.cta.label}</span>
              </Link>
            </div>
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="border-stroke-2 dark:border-stroke-6 text-secondary dark:text-accent flex size-11 items-center justify-center rounded-full border xl:hidden">
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
          {open && (
            <div className="border-stroke-2 dark:border-stroke-6 mt-2 border-t pt-3 xl:hidden">
              <ul className="space-y-1">
                {brand.nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-secondary dark:text-accent hover:bg-background-3 dark:hover:bg-background-7 block rounded-2xl px-4 py-3">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={brand.cta.href}
                onClick={() => setOpen(false)}
                className="btn btn-md btn-primary mt-3 w-full justify-center">
                <span>{brand.cta.label}</span>
              </Link>
            </div>
          )}
        </div>
      </RevealAnimation>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
