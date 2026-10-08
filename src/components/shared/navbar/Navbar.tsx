'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import { BrandLogo } from '@/components/brand/BrandMark';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import BookheroMenu, { MenuLink } from './BookheroMenu';

const productoLinks: MenuLink[] = [
  { title: 'Funciones', description: 'Calendario, clientes y avisos', href: '/#funciones', icon: 'calendar' },
  { title: 'Cómo funciona', description: 'De cero a tu primera reserva', href: '/#como-funciona', icon: 'clock' },
  { title: 'Confirmaciones por correo', description: 'Un aviso en cada reserva', href: '/#correos', icon: 'mail' },
  { title: 'Probar la demo', description: 'Abre el panel de agenda', href: '/app', icon: 'sparkles' },
];
const solucionesLinks: MenuLink[] = [
  { title: 'Para quién es', description: 'Negocios que viven de citas', href: '/#para-quien', icon: 'users' },
  { title: 'Lo esencial', description: 'Lite: simple y sin extras', href: '/#esencial', icon: 'shield' },
];
const recursosLinks: MenuLink[] = [
  { title: 'Preguntas frecuentes', description: 'Respuestas rápidas', href: '/#faq', icon: 'list' },
  { title: 'Política de privacidad', description: 'Cómo cuidamos tus datos', href: '/privacy-policy', icon: 'shield' },
  { title: 'Aviso legal', description: 'Términos del servicio', href: '/legal', icon: 'globe' },
];

const dropdownNavItems = [
  { label: 'Producto', dataMenu: 'producto-menu', links: productoLinks },
  { label: 'Soluciones', dataMenu: 'soluciones-menu', links: solucionesLinks },
  { label: 'Recursos', dataMenu: 'recursos-menu', links: recursosLinks },
];

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div
            className={cn(
              'border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 mx-auto flex items-center justify-between rounded-full border px-2.5 py-2.5 xl:py-0',
            )}>
            <div className="flex items-center justify-center">
              <Link href="/" className="inline-flex items-center pl-1">
                <span className="sr-only">Bookhero360</span>
                <BrandLogo name="Bookhero" suffix="360" />
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {dropdownNavItems.map(({ label, dataMenu, links }) => (
                  <li
                    key={label}
                    className="group/item relative cursor-pointer py-2.5"
                    data-menu={dataMenu}
                    onMouseEnter={() => handleMenuHover(dataMenu)}>
                    <button
                      type="button"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{label}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <BookheroMenu
                      id={dataMenu}
                      links={links}
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>
                ))}
                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/#planes"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Planes</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden items-center justify-center xl:flex">
              <Link href="/app" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                <span>Probar la demo</span>
              </Link>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
