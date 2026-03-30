import { Hero } from '@components/ui';

const PlayerCardBuilderHero = () => {
  return (
    <Hero
      eyebrow="Tools"
      title="Creador de tarjetas de jugador"
      description="Completa los datos del jugador, previsualiza la tarjeta y exportala como imagen para compartir."
      sectionStyle={{
        backgroundImage: "linear-gradient(180deg, rgba(6,34,33,0.82), rgba(6,34,33,0.86)), url('/images/background/fecha1-207.JPG')",
        backgroundPosition: 'center 40%',
      }}
      gradientClassName="bg-cover bg-center bg-fixed"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%)]"
      sectionClassName="pb-12"
      containerClassName="max-w-7xl"
    />
  );
};

export default PlayerCardBuilderHero;
