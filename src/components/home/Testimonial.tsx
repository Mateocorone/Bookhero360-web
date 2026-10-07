import { cn } from '@/utils/cn';
import gradient22Img from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface TestimonialCard {
  id: number;
  name: string;
  company: string;
  avatar: string;
  testimonial: string;
  twitterUrl: string;
}

const testimonialCards: TestimonialCard[] = [
  {
    id: 1,
    name: 'Michael Lee',
    company: 'Urban Brew',
    avatar: '/images/ns-avatar-4.png',
    testimonial:
      'They captured every moment beautifully with creativity and professionalism. Their attention to detail and seamless editing exceeded our expectations. Highly recommend!',
    twitterUrl: 'https://x.com/heystaticmania',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    avatar: '/images/ns-avatar-5.png',
    testimonial:
      'Working with this team was a game-changer for our business. They understood our vision perfectly and executed it flawlessly, exceeding our expectations in every way.',
    twitterUrl: 'https://x.com/heystaticmania',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Studios',
    avatar: '/images/ns-avatar-6.png',
    testimonial:
      "The level of creativity and technical expertise they brought to our project was outstanding. They delivered a solution that perfectly captured our brand's essence and vision.",
    twitterUrl: 'https://x.com/heystaticmania',
  },
];

const Testimonial = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[150px] xl:pb-[150px]">
        <div className="main-container">
          <div className="mb-[72px] text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-secondary dark:text-accent">Client words</h2>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="relative">
            <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
            <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
            <Marquee>
              <div className="scroll-bar flex items-center gap-x-10">
                {testimonialCards.map((testimonial, index) => (
                  <article
                    key={testimonial.id}
                    className={cn(
                      'dark:bg-background-5 group hover:bg-secondary hover:dark:bg-background-8 relative min-w-[320px] cursor-pointer space-y-6 overflow-hidden rounded-[12px] bg-white p-4 backdrop-blur-[22px] transition-all duration-500 ease-in-out sm:min-w-[400px] lg:min-w-[722px] lg:space-y-10 lg:rounded-[20px] lg:p-14',
                      index === 0 && 'ml-10',
                    )}>
                    <div className="pointer-events-none absolute -top-[147%] -right-[56%] max-w-[500px] rotate-[295deg] opacity-0 blur-[10px] transition-all duration-500 ease-in-out select-none group-hover:opacity-100 lg:-top-[162%] lg:-right-[56%] lg:max-w-[723px]">
                      <Image
                        src={gradient22Img}
                        alt="gradient"
                        className="size-full object-cover"
                        width={723}
                        height={500}
                      />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <figure className="size-[60px] transform overflow-hidden rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[102%] md:size-[84px]">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="size-full bg-linear-[156deg,#a585ff_32.92%,#A585FF_91%] object-cover"
                            width={84}
                            height={84}
                          />
                        </figure>
                        <div className="space-y-1">
                          <h3 className="text-tagline-2 group-hover:text-accent transform font-semibold transition-all duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:transition-transform">
                            {testimonial.name}
                          </h3>
                          <p className="text-tagline-3 group-hover:text-accent/60 transform transition-all duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:transition-transform">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${testimonial.name}'s Twitter`}
                        href={testimonial.twitterUrl}
                        className="bg-background-3 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 hover:shadow-4 inline-flex h-11 w-[74px] items-center justify-center rounded-[360px] px-2.5 py-1 backdrop-blur-[15px] transition-all duration-500 ease-in-out hover:scale-110">
                        <Image src="/images/icons/x.svg" alt="twitter" className="dark:invert" width={20} height={20} />
                      </Link>
                    </div>
                    <blockquote>
                      <p className="group-hover:text-accent/60 max-w-[530px] transform text-wrap transition-all duration-500 ease-in-out group-hover:translate-x-1">
                        {testimonial.testimonial}
                      </p>
                    </blockquote>
                  </article>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Testimonial;
