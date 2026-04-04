import { Hero } from '@components/ui';

const ContactHero = () => {
  return (
    <Hero
      eyebrow="Contacto"
      title="Hablemos De Rugby"
      description="Escribenos para inscripciones, pruebas de jugadores, alianzas comerciales o coordinacion institucional."
      sectionStyle={{
        backgroundImage: "linear-gradient(180deg, rgba(6,34,33,0.82), rgba(6,34,33,0.86)), url('/images/background/Practicasutp.jpeg')",
        backgroundPosition: 'center 40%',
      }}
      gradientClassName="bg-cover bg-center bg-fixed"
      radialClassName="bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_45%)]"
    />
  );
};

export default ContactHero;
