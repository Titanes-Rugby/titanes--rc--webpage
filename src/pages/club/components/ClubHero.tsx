type ClubHeroProps = {
  title: string;
  description: string;
};

const ClubHero = ({ title, description }: ClubHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_42%)]" />
      <div className="pointer-events-none absolute -right-14 -bottom-16 opacity-10">
        <img src="/images/logo.svg" alt="" className="h-72 w-72" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase">Club Titanes</p>
        <h1 className="text-4xl leading-tight font-black sm:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base text-primary-100/90 sm:text-lg">{description}</p>
      </div>
    </section>
  );
};

export default ClubHero;
