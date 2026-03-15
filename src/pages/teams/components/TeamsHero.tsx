import type { TeamProfile } from '../types';

type TeamsHeroProps = {
  team: TeamProfile;
};

const TeamsHero = ({ team }: TeamsHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 px-6 pb-14 pt-34 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute -right-14 -bottom-16 opacity-10">
        <img src="/images/logo.svg" alt="" className="h-72 w-72" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase">Squad Overview</p>
          <h1 className="text-4xl leading-tight font-black sm:text-6xl">{team.title}</h1>
          <p className="max-w-xl text-base text-primary-100/90 sm:text-lg">{team.subtitle}</p>
        </div>
        <div className="grid gap-3 text-right sm:grid-cols-3 sm:text-left">
          <StatCard label="Season" value={team.season} />
          <StatCard label="Record" value={team.record} />
          <StatCard label="Ranking" value={team.ranking} />
        </div>
      </div>
    </section>
  );
};

type StatCardProps = {
  label: string;
  value: string;
};

const StatCard = ({ label, value }: StatCardProps) => (
  <article className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
    <p className="text-xs tracking-[0.14em] text-primary-100/80 uppercase">{label}</p>
    <p className="mt-1 text-lg font-bold text-white">{value}</p>
  </article>
);

export default TeamsHero;
