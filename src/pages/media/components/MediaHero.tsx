import { Hero } from '@components/ui';

type MediaHeroProps = {
  title: string;
  description: string;
};

const MediaHero = ({ title, description }: MediaHeroProps) => {
  return (
    <Hero
      eyebrow="Media"
      title={title}
      description={description}
      gradientClassName="bg-gradient-to-br from-secondary-700 via-secondary-800 to-primary-900"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.15),transparent_45%)]"
    />
  );
};

export default MediaHero;
