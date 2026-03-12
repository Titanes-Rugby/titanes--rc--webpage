import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import FixtureList from '@/pages/fixture/components/FixtureList';

describe('<FixtureList />', () => {
  it('shows empty state when there are no fixtures', () => {
    render(<FixtureList items={[]} />);

    expect(screen.getByText(/No hay partidos para este filtro/i)).toBeInTheDocument();
  });

  it('renders result card with final score', () => {
    render(
      <FixtureList
        items={[
          {
            id: 'test-1',
            team: 'primera-division',
            competition: 'Liga Nacional',
            round: 'Jornada 8',
            date: '24 Apr 2026',
            time: '16:00',
            venue: 'Cancha Titanes',
            home: 'Titanes',
            away: 'Sharks RFC',
            status: 'result',
            homeScore: 28,
            awayScore: 21,
          },
        ]}
      />,
    );

    expect(screen.getByText(/Liga Nacional/i)).toBeInTheDocument();
    expect(screen.getByText(/Final/i)).toBeInTheDocument();
    expect(screen.getByText(/28 - 21/)).toBeInTheDocument();
  });
});
