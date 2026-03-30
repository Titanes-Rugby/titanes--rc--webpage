import { Hero } from '@components/ui';

const SponsorsHero = () => {
  return (
    <Hero
      eyebrow="Patrocinadores"
      title="Alianzas Que Impulsan Titanes"
      description="Nuestros partners estrategicos respaldan el desarrollo deportivo, formativo y comunitario del club."
      sectionStyle={{
        backgroundImage: "linear-gradient(180deg, rgba(6,34,33,0.82), rgba(6,34,33,0.86)), url('/images/background/1103890.jpg')",
        backgroundPosition: 'center 40%',
      }}
      gradientClassName="bg-cover bg-center bg-fixed"
      eyebrowClassName="text-accent-100"
      descriptionClassName="text-accent-50/90"
    />
  );
};

export default SponsorsHero;
