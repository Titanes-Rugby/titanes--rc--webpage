import type { TeamFixture } from '../types';

type FixturesPanelProps = {
  fixtures: TeamFixture[];
};

const FixturesPanel = ({ fixtures }: FixturesPanelProps) => {
  return (
    <section className="space-y-3">
      {fixtures.map((fixture) => (
        <article key={fixture.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary-100 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">Upcoming Match</p>
            <h3 className="mt-1 text-xl font-bold text-primary-900">vs {fixture.rival}</h3>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-primary-800">{fixture.date}</p>
            <p className="text-sm text-primary-600">{fixture.place}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FixturesPanel;
