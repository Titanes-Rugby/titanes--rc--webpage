const SponsorsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-700 via-accent-800 to-primary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_45%)]" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-100 uppercase">Patrocinadores</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Alianzas Que Impulsan Titanes</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-accent-50/90">
          Nuestros partners estrategicos respaldan el desarrollo deportivo, formativo y comunitario del club.
        </p>
      </div>
    </section>
  );
};

export default SponsorsHero;
