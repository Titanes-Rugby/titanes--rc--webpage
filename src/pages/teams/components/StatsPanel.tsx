import type { TeamStat } from '../types';

type StatsPanelProps = {
  stats: TeamStat[];
};

const StatsPanel = ({ stats }: StatsPanelProps) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.id} className="rounded-2xl border border-titanes-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.12em] text-titanes-500 uppercase">{stat.label}</p>
          <p className="mt-2 text-4xl font-black text-titanes-900">{stat.value}</p>
          {stat.change ? <p className="mt-2 text-sm font-semibold text-emerald-600">{stat.change}</p> : null}
        </article>
      ))}
    </section>
  );
};

export default StatsPanel;
