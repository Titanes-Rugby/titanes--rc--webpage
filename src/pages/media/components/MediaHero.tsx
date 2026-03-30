import { Hero } from '@components/ui';
import type { MediaSectionId } from '../types';

type MediaHeroProps = {
  section: MediaSectionId;
  title: string;
  description: string;
};

const MEDIA_BACKGROUNDS: Record<MediaSectionId, string> = {
  noticias: '/images/background/J2_RUGBY-433.jpg',
  galeria: '/images/background/galeria1.jpeg',
  videos: '/images/background/tercertiempos.jpeg',
};

const MediaHero = ({ section, title, description }: MediaHeroProps) => {
  return (
    <Hero
      eyebrow="Media"
      title={title}
      description={description}
      sectionStyle={{
        backgroundImage: `linear-gradient(180deg, rgba(6,34,33,0.82), rgba(6,34,33,0.86)), url('${MEDIA_BACKGROUNDS[section]}')`,
        backgroundPosition: 'center 40%',
      }}
      gradientClassName="bg-cover bg-center bg-fixed"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.15),transparent_45%)]"
    />
  );
};

export default MediaHero;
