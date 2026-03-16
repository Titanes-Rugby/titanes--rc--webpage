import type { TeamFixture } from '../types';

type FixturesPanelProps = {
  fixtures: TeamFixture[];
};

const HOME_NAME = 'Titanes RC';
const HOME_LOGO = '/images/logo.svg';

const FixturesPanel = ({ fixtures }: FixturesPanelProps) => {
  return (
    <section className="space-y-3">
      {fixtures.map((fixture) => (
        <article
          key={fixture.id}
          className="flex flex-col items-center gap-3 rounded-2xl border border-primary-100 bg-white px-6 py-5 text-center shadow-sm"
        >
          <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">Upcoming Match</p>
          <p className="text-2xl font-black text-primary-900">{fixture.date}</p>
          <p className="text-sm font-semibold text-primary-700">{fixture.place}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <TeamSlot name={HOME_NAME} logoSrc={HOME_LOGO} />
            <p className="text-base font-bold uppercase tracking-[0.16em] text-primary-500">vs</p>
            <TeamSlot name={fixture.rival} logoSrc={fixture.rivalLogo} reverse />
          </div>
        </article>
      ))}
    </section>
  );
};

type TeamSlotProps = {
  name: string;
  logoSrc?: string;
  reverse?: boolean;
};

const TeamSlot = ({ name, logoSrc, reverse }: TeamSlotProps) => {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');

  return (
    <div className={`flex items-center justify-center gap-4 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-primary-100 bg-primary-50">
        {logoSrc ? (
          <img src={logoSrc} alt={`${name} logo`} className="h-full w-full object-contain" />
        ) : (
          <span className="text-base font-bold text-primary-700">{initials}</span>
        )}
      </div>
      <p className="text-lg font-semibold text-primary-900">{name}</p>
    </div>
  );
};

export default FixturesPanel;
