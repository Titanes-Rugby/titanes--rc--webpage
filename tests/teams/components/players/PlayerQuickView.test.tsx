import type { ComponentProps, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
  motion: {
    button: (props: ComponentProps<'button'>) => <button {...props} />,
    aside: (props: ComponentProps<'aside'>) => <aside {...props} />,
  },
}));

import PlayerQuickView from '@/pages/teams/components/players/PlayerQuickView';

describe('<PlayerQuickView />', () => {
  it('does not render panel when player is null', () => {
    render(<PlayerQuickView player={null} onClose={vi.fn()} />);
    expect(screen.queryByRole('button', { name: /Close/i })).not.toBeInTheDocument();
  });

  it('renders player data and handles close actions', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <PlayerQuickView
        onClose={onClose}
        player={{ id: 'p1', name: 'Carlos Ruiz', position: 'Fly Half', number: '10', imageSrc: '/p.png' }}
      />,
    );

    expect(screen.getByText(/Carlos Ruiz/i)).toBeInTheDocument();
    expect(screen.getByText(/Jugador clave del plantel/i)).toBeInTheDocument();
    expect(screen.getAllByText('--')).toHaveLength(3);

    const closeButtons = screen.getAllByRole('button');
    await user.click(closeButtons[0]);
    await user.click(screen.getByRole('button', { name: /Close/i }));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
