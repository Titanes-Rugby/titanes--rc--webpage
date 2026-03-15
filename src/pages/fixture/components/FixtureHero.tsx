const FixtureHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%)]" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase">Fixture</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Calendario Competitivo</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/90">
          Agenda oficial de partidos para primera division, juveniles y femenino.
        </p>
      </div>
    </section>
  );
};

export default FixtureHero;
