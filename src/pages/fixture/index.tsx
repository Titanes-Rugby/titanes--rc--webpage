import { useMemo, useState } from 'react';

import FixtureFilters from './components/FixtureFilters';
import FixtureHero from './components/FixtureHero';
import FixtureList from './components/FixtureList';
import { fixtureTeamOptions, fixtures } from './fixture.data';
import type { FixtureStatus, FixtureTeam } from './types';

const FixturePage = () => {
  const [team, setTeam] = useState<FixtureTeam>('all');
  const [status, setStatus] = useState<FixtureStatus>('upcoming');

  const filteredFixtures = useMemo(() => {
    return fixtures.filter((fixture) => {
      const teamMatch = team === 'all' || fixture.team === team;
      const statusMatch = fixture.status === status;
      return teamMatch && statusMatch;
    });
  }, [status, team]);

  return (
    <main className="bg-primary-50 min-h-screen">
      <FixtureHero />
      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
        <FixtureFilters
          team={team}
          status={status}
          teamOptions={fixtureTeamOptions}
          onTeamChange={setTeam}
          onStatusChange={setStatus}
        />
        <FixtureList items={filteredFixtures} />
      </section>
    </main>
  );
};

export default FixturePage;
