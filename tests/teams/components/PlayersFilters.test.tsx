import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import PlayersFilters from '@/pages/teams/components/players/PlayersFilters';

describe('<PlayersFilters />', () => {
  it('calls position and query callbacks from user interactions', async () => {
    const user = userEvent.setup();
    const onChangePosition = vi.fn();
    const onChangeQuery = vi.fn();

    render(
      <PlayersFilters
        positions={['All', 'Wing', 'Hooker']}
        positionFilter="All"
        query=""
        onChangePosition={onChangePosition}
        onChangeQuery={onChangeQuery}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Wing' }));
    await user.type(screen.getByPlaceholderText(/Buscar jugador/i), 'Chris');

    expect(onChangePosition).toHaveBeenCalledWith('Wing');
    expect(onChangeQuery).toHaveBeenCalled();
  });
});
