import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface AvatarData {
  id: number;
  src: StaticImageData;
  alt: string;
}

const avatarData: AvatarData[] = [
  {
    id: 1,
    src: avatar1,
    alt: 'Avatar 1',
  },
  {
    id: 2,
    src: avatar2,
    alt: 'Avatar 2',
  },
  {
    id: 3,
    src: avatar3,
    alt: 'Avatar 3',
  },
];

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="relative z-10 bg-[url('/images/ns-img-291.png')] bg-cover bg-center bg-no-repeat pt-[200px] pb-[100px] 2xl:pt-[280px]">
        {/* dot bg  */}
        <figure className="absolute bottom-0 left-1/2 -z-10 h-full w-full max-w-[1362px] -translate-x-1/2">
          <Image src="/images/ns-img-292.svg" alt="Hero shape" className="h-full w-full" width={1362} height={800} />
        </figure>
        <div className="main-container z-10">
          <div className="mb-[70p] flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="text-secondary mb-4 max-w-[1000px] font-medium">
                Fuel your growth with data-driven digital marketing
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60 mb-7 max-w-[850px] md:mb-14">
                Over 15 years of transforming traffic into profit through SEO, SEM, and conversion-focused campaigns.
              </p>
            </RevealAnimation>
            <ul className="mb-7 flex w-[90%] flex-col gap-4 md:mb-14 md:w-auto md:flex-row">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/pricing"
                    className="btn btn-secondary btn-xl dark:btn-accent hover:btn-white dark:hover:btn-white-dark w-[90%] sm:w-auto">
                    Get free marketing audit
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/services"
                    className="btn hover:btn-secondary dark:btn-dark btn-white btn-xl dark:bg-accent/20 dark:text-secondary w-[90%] border-0 sm:w-auto">
                    Explore our work
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* Avatars and Trust Indicator */}
          <div className="mb-[100px] flex items-center justify-center gap-x-4">
            <div className="flex -space-x-3.5">
              {avatarData.map((avatar, index) => (
                <RevealAnimation key={avatar.id} delay={0.5 + index * 0.1} direction="right" offset={50}>
                  <Image
                    className="inline-block size-12 rounded-full bg-[#98AAC3] ring-2 ring-white dark:ring-black"
                    src={avatar.src}
                    alt={avatar.alt}
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
              ))}
              <RevealAnimation delay={0.8} direction="right" offset={50}>
                <div className="text-secondary/80 text-tagline-3 inline-flex size-12 items-center justify-center rounded-full bg-[#98AAC3] font-medium ring-2 ring-white dark:ring-black">
                  99+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.9} direction="right" offset={50}>
              <div>
                <p className="text-secondary text-tagline-2 block text-left font-medium">
                  Trusted by over 300 clients.
                </p>
                <p className="text-secondary/60 text-tagline-3 max-w-[172px]">
                  Your brand&apos;s success will be our next case study.
                </p>
              </div>
            </RevealAnimation>
          </div>
          {/* client logos  */}
          <RevealAnimation delay={1} instant={true}>
            <div className="flex flex-wrap items-center justify-center gap-8 md:flex-nowrap md:gap-x-8 md:gap-y-0">
              <figure className="md:ml-8 lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-1-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-1-dark.svg"
                  alt="Client logo"
                  className="hidden lg:w-auto dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-2-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-2-dark.svg"
                  alt="Client logo"
                  className="hidden lg:w-auto dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-3-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-3-dark.svg"
                  alt="Client logo"
                  className="hidden lg:w-auto dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-4-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-4-dark.svg"
                  alt="Client logo"
                  className="hidden lg:w-auto dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-5-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-5-dark.svg"
                  alt="Client logo"
                  className="hidden lg:w-auto dark:block"
                  width={144}
                  height={40}
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;
