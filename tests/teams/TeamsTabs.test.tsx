import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import TeamsTabs from '@/pages/teams/components/TeamsTabs';

describe('<TeamsTabs />', () => {
  it('renders all tab links with the expected paths', () => {
    render(
      <MemoryRouter>
        <TeamsTabs activeTab="stats" basePath="/equipos/primera-division" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Jugadores/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/players',
    );
    expect(screen.getByRole('link', { name: /Personal Técnico/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/coaches',
    );
    expect(screen.getByRole('link', { name: /Estadísticas/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/stats',
    );
    expect(screen.queryByRole('link', { name: /Fixtures/i })).not.toBeInTheDocument();
  });
});
