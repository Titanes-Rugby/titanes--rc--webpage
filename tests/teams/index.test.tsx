import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import TeamsPage from '@/pages/teams';

const renderTeamsRoute = (path: string) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/equipos/:slug/:tab" element={<TeamsPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('<TeamsPage />', () => {
  it('renders players tab content for explicit players route', () => {
    renderTeamsRoute('/equipos/primera-division/players');

    expect(screen.getByRole('heading', { name: /^Titanes$/i })).toBeInTheDocument();
    expect(screen.getByText(/9 players found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contactar al club/i })).toHaveAttribute('href', '/contacto');
  });

  it('renders coaches panel for coaches route', () => {
    renderTeamsRoute('/equipos/juveniles/coaches');

    expect(screen.getByRole('heading', { name: /Titanes Juveniles/i })).toBeInTheDocument();
    expect(screen.getByText(/Head Coach/i)).toBeInTheDocument();
    expect(screen.queryByText(/players found/i)).not.toBeInTheDocument();
  });

  it('falls back to players tab when tab is invalid', () => {
    renderTeamsRoute('/equipos/femenino/not-a-real-tab');

    expect(screen.getByRole('heading', { name: /Titanides/i })).toBeInTheDocument();
    expect(screen.getByText(/9 players found/i)).toBeInTheDocument();
  });

  it('renders stats tab content', () => {
    renderTeamsRoute('/equipos/primera-division/stats');

    expect(screen.getByText(/Tackle Success/i)).toBeInTheDocument();
    expect(screen.queryByText(/players found/i)).not.toBeInTheDocument();
  });

  it('renders fixtures tab content', () => {
    renderTeamsRoute('/equipos/juveniles/fixtures');

    expect(screen.getAllByText(/Upcoming Match/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/players found/i)).not.toBeInTheDocument();
  });
});
