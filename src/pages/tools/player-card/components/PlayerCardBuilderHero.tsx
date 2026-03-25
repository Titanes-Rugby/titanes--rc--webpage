import { Hero } from '@components/ui';

const PlayerCardBuilderHero = () => {
  return (
    <Hero
      eyebrow="Tools"
      title="Creador de tarjetas de jugador"
      description="Completa los datos del jugador, previsualiza la tarjeta y expórtala como imagen para compartir."
      gradientClassName="bg-gradient-to-br from-secondary-700 via-secondary-800 to-primary-900"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%)]"
      sectionClassName="pb-12"
      containerClassName="max-w-7xl"
    />
  );
};

export default PlayerCardBuilderHero;
