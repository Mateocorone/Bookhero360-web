import RevealAnimation from '@/components/animation/RevealAnimation';
import { BrandLogo } from '@/components/brand/BrandMark';
import { footerLinks } from '@/data/footer-data';
import Link from 'next/link';
import FooterDivider from './FooterDivider';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <Link href="/" aria-label="Bookhero360, inicio">
                  <BrandLogo light />
                </Link>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  La agenda lite para negocios que viven de las citas: calendario, clientes y confirmaciones por correo.
                </p>
                <FooterSocial />
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-4" key={title}>
                <RevealAnimation delay={0.4 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{title}</p>
                    <ul className="space-y-3 sm:space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider className="bg-accent/10" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              &copy; 2026 Bookhero360 – agenda lite con confirmaciones por correo
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
