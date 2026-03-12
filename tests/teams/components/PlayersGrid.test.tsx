import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/ui/AnimatedTiltCard', () => {
  return {
    default: ({ children }: { children: (props: { contentX: number; contentY: number; contentScale: number }) => JSX.Element }) =>
      children({ contentX: 0, contentY: 0, contentScale: 1 }),
  };
});

import PlayersGrid from '@/pages/teams/components/players/PlayersGrid';

describe('<PlayersGrid />', () => {
  it('renders empty-state message when there are no players', () => {
    render(
      <PlayersGrid
        players={[]}
        page={1}
        pages={1}
        filteredCount={0}
        onSelectPlayer={vi.fn()}
        onPageChange={vi.fn()}
      />,
    );

    expect(screen.getByText(/No players found with the current filters/i)).toBeInTheDocument();
    expect(screen.getByText(/Page 1 \/ 1/i)).toBeInTheDocument();
  });

  it('renders players and triggers callbacks on click and paging', async () => {
    const user = userEvent.setup();
    const onSelectPlayer = vi.fn();
    const onPageChange = vi.fn();

    render(
      <PlayersGrid
        players={[{ id: 'p1', name: 'Carlos Ruiz', position: 'Fly Half', number: '10', imageSrc: '/images/p.png' }]}
        page={1}
        pages={2}
        filteredCount={7}
        onSelectPlayer={onSelectPlayer}
        onPageChange={onPageChange}
      />,
    );

    await user.click(screen.getByRole('button', { name: /Carlos Ruiz/i }));
    await user.click(screen.getByRole('button', { name: /Next/i }));

    expect(onSelectPlayer).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(screen.getByText(/7 players found/i)).toBeInTheDocument();
  });
});
