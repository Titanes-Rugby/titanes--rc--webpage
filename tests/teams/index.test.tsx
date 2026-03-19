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
    expect(screen.getByText(/18 jugadores encontrados/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contactar al club/i })).toHaveAttribute('href', '/contacto');
  });

  it('renders coaches panel for coaches route', () => {
    renderTeamsRoute('/equipos/juveniles/coaches');

    expect(screen.getByRole('heading', { name: /Titanes Juveniles/i })).toBeInTheDocument();
    expect(screen.getByText(/Head Coach/i)).toBeInTheDocument();
    expect(screen.queryByText(/jugadores encontrados/i)).not.toBeInTheDocument();
  });

  it('falls back to players tab when tab is invalid', () => {
    renderTeamsRoute('/equipos/femenino/not-a-real-tab');

    expect(screen.getByRole('heading', { name: /Titanides/i })).toBeInTheDocument();
    expect(screen.getByText(/18 jugadores encontrados/i)).toBeInTheDocument();
  });

  it('renders stats tab content', () => {
    renderTeamsRoute('/equipos/primera-division/stats');

    expect(screen.getByText(/Éxito en tackles|Exito en tackles/i)).toBeInTheDocument();
    expect(screen.queryByText(/jugadores encontrados/i)).not.toBeInTheDocument();
  });

  it('falls back to players tab when route uses removed fixtures tab', () => {
    renderTeamsRoute('/equipos/juveniles/fixtures');

    expect(screen.getByText(/18 jugadores encontrados/i)).toBeInTheDocument();
  });
});
