import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import FixturesPanel from '@/pages/teams/components/FixturesPanel';

describe('<FixturesPanel />', () => {
  it('renders upcoming fixtures with rival and venue', () => {
    render(
      <FixturesPanel
        fixtures={[
          { id: 'f1', rival: 'Panama Sharks', date: '17 Apr 2026', place: 'Estadio Nacional' },
          { id: 'f2', rival: 'Canal Bulls', date: '24 Apr 2026', place: 'Titanes Field' },
        ]}
      />,
    );

    expect(screen.getAllByText(/Upcoming Match/i)).toHaveLength(2);
    expect(screen.getByText(/vs Panama Sharks/i)).toBeInTheDocument();
    expect(screen.getByText(/Estadio Nacional/i)).toBeInTheDocument();
    expect(screen.getByText(/vs Canal Bulls/i)).toBeInTheDocument();
    expect(screen.getByText(/Titanes Field/i)).toBeInTheDocument();
  });
});
