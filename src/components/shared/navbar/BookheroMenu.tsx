'use client';
import Icon, { IconName } from '@/components/brand/Icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

export interface MenuLink {
  title: string;
  description: string;
  href: string;
  icon: IconName;
}

const BookheroMenu = ({
  id,
  links,
  menuDropdownId,
  setMenuDropdownId,
}: {
  id: string;
  links: MenuLink[];
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const open = menuDropdownId === id;
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0 transition-all duration-300',
          open ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id={id}
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-2 opacity-0 transition-all duration-300',
          open ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              onClick={() => setMenuDropdownId(null)}
              className="group relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
              <HoverBgTransform className="group-hover:opacity-100" />
              <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 text-primary-500 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white">
                <Icon name={link.icon} />
              </div>
              <div className="relative z-10">
                <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{link.title}</p>
                <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">{link.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookheroMenu;
