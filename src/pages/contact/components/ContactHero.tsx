const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-700 via-primary-800 to-primary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_45%)]" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase">Contacto</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Hablemos De Rugby</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/90">
          Escríbenos para inscripciones, pruebas de jugadores, alianzas comerciales o coordinación institucional.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
