import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import ClubPage from '@/pages/club';

const renderClubRoute = (path: string) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/club" element={<ClubPage />} />
        <Route path="/club/:slug" element={<ClubPage />} />
        <Route path="/club/:slug/:section" element={<ClubPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('<ClubPage />', () => {
  it('uses quienes-somos as default section on /club route', () => {
    renderClubRoute('/club');
    expect(screen.getByRole('heading', { name: /Nuestra Esencia y Visión/i, level: 2 })).toBeInTheDocument();
  });

  it('falls back to quienes-somos for invalid section', () => {
    renderClubRoute('/club/academia/nope');
    expect(screen.getByRole('heading', { name: /Nuestra Esencia y Visión/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Más que un equipo, somos una hermandad/i)).toBeInTheDocument();
  });

  it('renders staff section from route param', () => {
    renderClubRoute('/club/staff-tecnico');
    expect(screen.getByRole('heading', { name: /Staff Tecnico/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Diego Alvarado/i)).toBeInTheDocument();
    expect(screen.getByText(/Team Manager/i)).toBeInTheDocument();
  });

  it('renders instalaciones section with contact CTA', () => {
    renderClubRoute('/club/instalaciones');
    expect(screen.getByRole('heading', { name: /Instalaciones/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Cancha Principal/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Solicitar visita/i })).toHaveAttribute('href', '/contacto');
  });

  it('builds section links from custom slug when section param is present', () => {
    renderClubRoute('/club/academia/historia');

    expect(screen.getByRole('heading', { name: /Linea de tiempo/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /¿Quiénes somos\?/i })).toHaveAttribute('href', '/club/academia/quienes-somos');
  });
});
