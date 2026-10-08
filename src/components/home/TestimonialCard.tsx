import Icon, { IconName } from '@/components/brand/Icon';

interface TestimonialCardProps {
  title: string;
  description: string;
  name: string;
  designation: string;
  icon: IconName;
}

/** Tarjeta de caso de uso: negocio de ejemplo + correo de confirmación que recibiría su cliente. */
const TestimonialCard = ({ title, description, name, designation, icon }: TestimonialCardProps) => {
  return (
    <div className="flex h-[534px] flex-col items-start justify-between rounded-[20px] bg-white px-8 py-[42px] md:rounded-[28px] lg:max-w-[317px]">
      <div className="space-y-4 xl:space-y-8">
        <span className="bg-primary-500 flex size-12 items-center justify-center rounded-full text-white">
          <Icon name="mail" className="size-5" />
        </span>

        <div className="space-y-3">
          <h3 className="text-heading-5 font-normal">{title}</h3>
          <p className="text-secondary/80 text-lg leading-[150%] font-normal">{description}</p>
        </div>
      </div>

      <div className="flex w-full max-w-[254px] items-center justify-start gap-x-3 rounded-full bg-[#EDF2FF] py-1.5 pr-6 pl-1.5">
        <span className="bg-primary-500 flex size-12 shrink-0 items-center justify-center rounded-full text-white">
          <Icon name={icon} className="size-5" />
        </span>
        <div>
          <h4 className="text-tagline-1 text-secondary font-semibold">{name}</h4>
          <p className="text-tagline-2 text-secondary/60 font-normal">{designation}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.displayName = 'TestimonialCard';
export default TestimonialCard;
