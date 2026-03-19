import { Hero } from '@components/ui';

const FixtureHero = () => {
  return (
    <Hero
      eyebrow="Fechas fijas"
      title="Calendario Competitivo"
      description="Agenda oficial de partidos para primera división, juveniles y femenino."
      gradientClassName="bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%)]"
    />
  );
};

export default FixtureHero;
