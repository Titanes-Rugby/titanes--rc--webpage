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

    expect(screen.getByRole('link', { name: /Players/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/players',
    );
    expect(screen.getByRole('link', { name: /Coaching Staff/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/coaches',
    );
    expect(screen.getByRole('link', { name: /Stats/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/stats',
    );
    expect(screen.getByRole('link', { name: /Fixtures/i })).toHaveAttribute(
      'href',
      '/equipos/primera-division/fixtures',
    );
  });
});
