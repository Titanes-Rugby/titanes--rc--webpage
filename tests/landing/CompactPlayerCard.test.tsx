import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CompactPlayerCard from '@/pages/landing/components/PlayerCards/CompactPlayerCard';

describe('<CompactPlayerCard />', () => {
  it('renders hover data and player identity', () => {
    render(
      <CompactPlayerCard
        player={{
          id: 'p-1',
          fullName: 'Christhoval Barba',
          firstName: 'Christhoval',
          lastName: 'Barba',
          position: ['Pilar izquierdo'],
          number: '04',
          imageSrc: '/images/players/player_1.png',
          birthDate: '1994-08-12',
          statuses: ['Capitan', 'Jugador'],
        }}
      />,
    );

    expect(screen.getByRole('img', { name: 'Christhoval Barba' })).toBeInTheDocument();
    expect(screen.getByText('Christhoval Barba')).toBeInTheDocument();
    expect(screen.getByText(/Pilar izquierdo/i)).toBeInTheDocument();
    expect(screen.getByText(/Edad:/i)).toBeInTheDocument();
    expect(screen.getByText(/Capitan \/ Jugador/i)).toBeInTheDocument();
  });

  it('falls back to default status and age when missing fields', () => {
    render(
      <CompactPlayerCard
        player={{
          id: 'p-2',
          fullName: 'Jugador Nuevo',
          firstName: 'Jugador',
          lastName: 'Nuevo',
          position: [],
          number: '11',
          imageSrc: '/images/players/player_1.png',
        }}
      />,
    );

    expect(screen.getByText(/^--$/i)).toBeInTheDocument();
    expect(screen.getByText(/Edad: --/i)).toBeInTheDocument();
    expect(screen.getByText(/Estatus: Jugador/i)).toBeInTheDocument();
  });
});
