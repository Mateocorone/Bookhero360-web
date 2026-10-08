'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { BrandLogo } from '@/components/brand/BrandMark';
import LinkButton from '@/components/ui/button/Button';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import BookheroMenu, { MenuLink } from './BookheroMenu';
import MobileMenuButton from './MobileMenuButton';

const productoLinks: MenuLink[] = [
  { title: 'Funciones', description: 'Calendario, clientes y avisos', href: '/#funciones', icon: 'calendar' },
  { title: 'Confirmaciones por correo', description: 'Un aviso en cada reserva', href: '/#correos', icon: 'mail' },
  { title: 'Para quién es', description: 'Negocios que viven de citas', href: '/#para-quien', icon: 'users' },
  { title: 'Probar la demo', description: 'Abre el panel de agenda', href: '/app', icon: 'sparkles' },
];
const solucionesLinks: MenuLink[] = [
  { title: 'Salud y bienestar', description: 'Consultorios y clínicas', href: '/#soluciones', icon: 'shield' },
  { title: 'Belleza y cuidado', description: 'Salones y barberías', href: '/#soluciones', icon: 'sparkles' },
  { title: 'Talleres y servicios', description: 'Horarios sin cruces', href: '/#soluciones', icon: 'settings' },
];
const recursosLinks: MenuLink[] = [
  { title: 'Preguntas frecuentes', description: 'Respuestas rápidas', href: '/#faq', icon: 'list' },
  { title: 'Seguridad', description: 'Cómo cuidamos tus datos', href: '/security', icon: 'shield' },
  { title: 'Política de privacidad', description: 'Privacidad y datos', href: '/privacy-policy', icon: 'globe' },
];

const dropdownNavItems = [
  { label: 'Producto', dataMenu: 'producto-menu', links: productoLinks },
  { label: 'Soluciones', dataMenu: 'soluciones-menu', links: solucionesLinks },
  { label: 'Recursos', dataMenu: 'recursos-menu', links: recursosLinks },
];

const navLinkClass =
  'text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:max-w-[1290px]! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-[20px] transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2!',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="flex items-center justify-between rounded-[20px] bg-white px-1.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              <div>
                <Link href="/">
                  <span className="sr-only">Bookhero360, inicio</span>
                  <BrandLogo className="pl-1" />
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  {dropdownNavItems.map(({ label, dataMenu, links }) => (
                    <li
                      key={label}
                      onMouseEnter={() => handleMenuHover(dataMenu)}
                      data-menu={dataMenu}
                      className="group/nav-item relative cursor-pointer py-2.5">
                      <Link href="#" onClick={(event) => event.preventDefault()} className={navLinkClass}>
                        <span>{label}</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
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
                      </Link>
                      <BookheroMenu
                        id={dataMenu}
                        links={links}
                        menuDropdownId={menuDropdownId}
                        setMenuDropdownId={setMenuDropdownId}
                      />
                    </li>
                  ))}
                  <li className="py-2.5">
                    <Link href="/#planes" className={navLinkClass}>
                      Planes
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link href="/contact-us" className={navLinkClass}>
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center xl:flex">
                <LinkButton href="/app" className="btn-v3-lg btn-v3-secondary">
                  Probar la demo
                </LinkButton>
              </div>
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
