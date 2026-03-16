import { Hero } from '@components/ui';

type ClubHeroProps = {
  title: string;
  description: string;
};

const ClubHero = ({ title, description }: ClubHeroProps) => {
  return (
    <Hero
      eyebrow="Club Titanes"
      title={title}
      description={description}
      gradientClassName="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
      radialClassName="bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_42%)]"
      watermarkSrc="/images/logo.svg"
      watermarkClassName="-right-14 -bottom-16 h-72 w-72"
      titleClassName="mt-0 text-4xl leading-tight font-black sm:text-6xl"
      descriptionClassName="max-w-2xl text-base text-primary-100/90 sm:text-lg"
    />
  );
};

export default ClubHero;
