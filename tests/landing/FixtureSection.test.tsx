import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import FixtureSection from '@/pages/landing/components/FixtureSection';

describe('<FixtureSection />', () => {
  it('renders venue as plain text when map url is missing', () => {
    render(
      <MemoryRouter>
        <FixtureSection
          matches={[
            {
              rival: 'Rivals RC',
              rivalLogo: '/images/logo.svg',
              date: 'Sabado 14 - 16:00',
              place: 'Cancha sin enlace',
              mapUrl: '',
            },
          ]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('Cancha sin enlace')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Cancha sin enlace' })).not.toBeInTheDocument();
  });
});
