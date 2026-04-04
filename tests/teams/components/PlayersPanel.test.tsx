import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { TeamPlayer } from '@/pages/teams/types';

const mockPlayer: TeamPlayer = {
  id: 'p1',
  fullName: 'Carlos Ruiz',
  firstName: 'Carlos',
  lastName: 'Ruiz',
  position: ['Fly Half'],
  number: '10',
  imageSrc: '/images/p1.jpg',
};

vi.mock('@/pages/teams/components/players/usePlayersCatalog', () => ({
  usePlayersCatalog: () => ({
    page: 1,
    pages: 2,
    query: '',
    teams: ['Todos'],
    teamFilter: 'Todos',
    positions: ['Todas'],
    positionFilter: 'Todas',
    paginatedPlayers: [mockPlayer],
    filteredCount: 1,
    onChangeTeam: vi.fn(),
    onChangePosition: vi.fn(),
    onChangeQuery: vi.fn(),
    setPage: vi.fn(),
  }),
}));

vi.mock('@/pages/teams/components/players/PlayersFilters', () => ({
  default: () => <div data-testid="players-filters" />,
}));

vi.mock('@/pages/teams/components/players/PlayersGrid', () => ({
  default: ({ onSelectPlayer }: { onSelectPlayer: (player: TeamPlayer) => void }) => (
    <button type="button" onClick={() => onSelectPlayer(mockPlayer)}>
      Abrir jugador
    </button>
  ),
}));

vi.mock('@/pages/teams/components/players/PlayerQuickView', () => ({
  default: ({ player, onClose }: { player: TeamPlayer | null; onClose: () => void }) =>
    player ? (
      <button type="button" onClick={onClose}>
        Cerrar quick view
      </button>
    ) : null,
}));

import PlayersPanel from '@/pages/teams/components/PlayersPanel';

describe('<PlayersPanel />', () => {
  it('opens and closes quick view through selected player callbacks', async () => {
    const user = userEvent.setup();
    render(<PlayersPanel players={[]} />);

    await user.click(screen.getByRole('button', { name: /Abrir jugador/i }));
    expect(screen.getByRole('button', { name: /Cerrar quick view/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Cerrar quick view/i }));
    expect(screen.queryByRole('button', { name: /Cerrar quick view/i })).not.toBeInTheDocument();
  });
});
