import { Hero } from '@components/ui';

const ContactHero = () => {
  return (
    <Hero
      eyebrow="Contacto"
      title="Hablemos De Rugby"
      description="Escribenos para inscripciones, pruebas de jugadores, alianzas comerciales o coordinacion institucional."
      gradientClassName="bg-gradient-to-br from-secondary-700 via-primary-800 to-primary-900"
      radialClassName="bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_45%)]"
    />
  );
};

export default ContactHero;
