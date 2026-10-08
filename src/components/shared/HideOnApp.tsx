'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/** El panel (/app) usa su propio layout: oculta la barra y el footer del sitio. */
const HideOnApp = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  if (pathname === '/app' || pathname.startsWith('/app/')) return null;
  return <>{children}</>;
};

export default HideOnApp;
