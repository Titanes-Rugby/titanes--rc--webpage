import { Hero } from '@components/ui';

const SponsorsHero = () => {
  return (
    <Hero
      eyebrow="Patrocinadores"
      title="Alianzas Que Impulsan Titanes"
      description="Nuestros partners estrategicos respaldan el desarrollo deportivo, formativo y comunitario del club."
      gradientClassName="bg-gradient-to-br from-accent-700 via-accent-800 to-primary-900"
      eyebrowClassName="text-accent-100"
      descriptionClassName="text-accent-50/90"
    />
  );
};

export default SponsorsHero;
