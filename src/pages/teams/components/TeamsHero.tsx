import { Hero } from '@components/ui';

import type { TeamProfile } from '../types';

type TeamsHeroProps = {
  team: TeamProfile;
};

const TeamsHero = ({ team }: TeamsHeroProps) => {
  return (
    <Hero
      eyebrow="Squad Overview"
      title={team.title}
      description={team.subtitle}
      gradientClassName="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
      radialClassName="bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_40%)]"
      watermarkSrc="/images/logo.svg"
      watermarkClassName="-right-14 -bottom-16 h-72 w-72"
      bodyClassName="max-w-2xl space-y-3"
      titleClassName="mt-0 text-4xl leading-tight font-black sm:text-6xl"
      descriptionClassName="max-w-xl text-base text-primary-100/90 sm:text-lg"
      aside={
        <div className="grid gap-3 text-right sm:grid-cols-3 sm:text-left">
          <StatCard label="Season" value={team.season} />
          <StatCard label="Record" value={team.record} />
          <StatCard label="Ranking" value={team.ranking} />
        </div>
      }
    />
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
