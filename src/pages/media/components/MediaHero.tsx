type MediaHeroProps = {
  title: string;
  description: string;
};

const MediaHero = ({ title, description }: MediaHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-700 via-secondary-800 to-primary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase">Media</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/90">{description}</p>
      </div>
    </section>
  );
};

export default MediaHero;
