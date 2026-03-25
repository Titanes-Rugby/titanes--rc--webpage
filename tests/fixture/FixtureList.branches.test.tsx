import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import FixtureList from '@/pages/fixture/components/FixtureList';

describe('<FixtureList /> branch cases', () => {
  it('renders derrota and empate pills plus venue fallback without map link', () => {
    render(
      <FixtureList
        items={[
          {
            id: 'r-1',
            team: 'primera-division',
            competition: 'Liga Nacional',
            round: 'J1',
            date: '10 Apr 2026',
            time: '10:00',
            venue: 'Cancha A',
            home: 'Titanes',
            away: 'Rival',
            status: 'result',
            homeScore: 10,
            awayScore: 22,
          },
          {
            id: 'r-2',
            team: 'primera-division',
            competition: 'Liga Regional',
            round: 'J2',
            date: '11 Apr 2026',
            time: '11:00',
            venue: 'Cancha B',
            home: 'Jaguares',
            away: 'Lobos',
            status: 'result',
            homeScore: 18,
            awayScore: 18,
          },
          {
            id: 'r-3',
            team: 'primera-division',
            competition: 'Copa',
            round: 'J3',
            date: '12 Apr 2026',
            time: '12:00',
            venue: 'Cancha C',
            home: 'Titanes',
            away: 'Bulls',
            status: 'result',
            homeScore: 15,
            awayScore: 15,
          },
        ]}
      />,
    );

    expect(screen.getByText(/Derrota/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Empate/i).length).toBeGreaterThan(0);
    expect(screen.getByText('Cancha A')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Cancha A' })).not.toBeInTheDocument();
  });
});
