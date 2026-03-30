import { Hero } from '@components/ui';

const FixtureHero = () => {
  return (
    <Hero
      eyebrow="Fechas fijas"
      title="Calendario Competitivo"
      description="Agenda oficial de partidos para Titanes, Titanides y Titanes Juveniles."
      sectionStyle={{
        backgroundImage: "linear-gradient(180deg, rgba(6,34,33,0.82), rgba(6,34,33,0.86)), url('/images/background/segundafecha-369.JPG')",
        backgroundPosition: 'center 40%',
      }}
      gradientClassName="bg-cover bg-center bg-fixed"
      radialClassName="bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%)]"
    />
  );
};

export default FixtureHero;
