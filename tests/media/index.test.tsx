import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import MediaPage from '@/pages/media';

const renderMediaRoute = (path: string) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/media/:section" element={<MediaPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('<MediaPage />', () => {
  it('renders noticias section by default when section is invalid', () => {
    renderMediaRoute('/media/no-existe');

    expect(screen.getByRole('heading', { name: /Noticias Del Club/i })).toBeInTheDocument();
    expect(screen.getByText(/Titanes gana en casa y asegura liderato/i)).toBeInTheDocument();
  });

  it('renders gallery section from route param', () => {
    renderMediaRoute('/media/galeria');

    expect(screen.getByRole('heading', { name: /Galeria Oficial/i })).toBeInTheDocument();
    expect(screen.getByText(/Sesion de contacto y defensa/i)).toBeInTheDocument();
  });

  it('renders videos section from route param', () => {
    renderMediaRoute('/media/videos');

    expect(screen.getByRole('heading', { name: /Videos Del Club/i })).toBeInTheDocument();
    expect(screen.getByText(/Resumen de la jornada/i)).toBeInTheDocument();
    expect(screen.getByText(/03:42/i)).toBeInTheDocument();
  });
});
