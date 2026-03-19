import type { FixtureItem } from '../types';
import TeamBadge from './TeamBadge';

type FixtureListProps = {
  items: FixtureItem[];
};

const FixtureList = ({ items }: FixtureListProps) => {
  if (!items.length) {
    return (
      <article className="rounded-2xl border border-dashed border-primary-300 bg-white p-8 text-center">
        <p className="text-sm text-primary-700">No hay partidos para este filtro.</p>
      </article>
    );
  }

  return (
    <section className="space-y-3">
      {items.map((item) => (
        <article key={item.id} className="rounded-2xl border border-primary-100 bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">
                {item.competition} · {item.round}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <TeamBadge name={item.home} logoSrc={item.homeLogoSrc} />
                <span className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">vs</span>
                <TeamBadge name={item.away} logoSrc={item.awayLogoSrc} logoAfter />
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-primary-700">
                <span>
                  {item.date} · {item.time}
                </span>
                {item.venueUrl ? (
                  <a
                    href={item.venueUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-primary-200 bg-primary-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:border-primary-400 hover:bg-white"
                  >
                    {item.venue}
                  </a>
                ) : (
                  <span>{item.venue}</span>
                )}
              </div>
            </div>

            {item.status === 'result' ? (
              <div className="flex flex-col items-center gap-2">
                <OutcomePill item={item} />
                <div className="rounded-xl bg-primary-800 px-4 py-2 text-center text-white">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-primary-100 uppercase">Final</p>
                  <p className="text-2xl font-black">
                    {item.homeScore} - {item.awayScore}
                  </p>
                </div>
              </div>
            ) : (
              <span className="rounded-full bg-accent-100 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent-800 uppercase">
                Próximamente
              </span>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

const OutcomePill = ({ item }: { item: FixtureItem }) => {
  const { homeScore = 0, awayScore = 0, home, away } = item;
  const isTitanesHome = home.toLowerCase().includes('titanes');
  const isTitanesAway = away.toLowerCase().includes('titanes');

  let label = 'Empate';
  let tone = 'bg-amber-100 text-amber-800';

  const titanScore = isTitanesHome ? homeScore : isTitanesAway ? awayScore : null;
  const rivalScore = isTitanesHome ? awayScore : isTitanesAway ? homeScore : null;

  if (titanScore !== null && rivalScore !== null) {
    if (titanScore > rivalScore) {
      label = 'Victoria';
      tone = 'bg-emerald-100 text-emerald-800';
    } else if (titanScore < rivalScore) {
      label = 'Derrota';
      tone = 'bg-rose-100 text-rose-800';
    }
  }

  return (
    <span className={`rounded-full px-4 py-2 text-sm font-bold tracking-[0.12em] uppercase ${tone}`}>
      {label}
    </span>
  );
};

export default FixtureList;
