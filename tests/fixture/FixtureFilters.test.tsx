import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import FixtureFilters from '@/pages/fixture/components/FixtureFilters';

const teamOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'first', label: 'Primera' },
] as const;

describe('<FixtureFilters />', () => {
  it('renders active classes and fires team/status callbacks', async () => {
    const user = userEvent.setup();
    const onTeamChange = vi.fn();
    const onStatusChange = vi.fn();

    render(
      <FixtureFilters
        team="first"
        status="result"
        teamOptions={teamOptions as never}
        onTeamChange={onTeamChange}
        onStatusChange={onStatusChange}
      />,
    );

    expect(screen.getByRole('button', { name: /Primera/i }).className).toContain('bg-primary-700');
    expect(screen.getByRole('button', { name: /Todos/i }).className).toContain('hover:bg-primary-100');
    expect(screen.getByRole('button', { name: /Resultados/i }).className).toContain('bg-secondary-700');
    expect(screen.getByRole('button', { name: /Proximos/i }).className).toContain('hover:bg-secondary-100');

    await user.click(screen.getByRole('button', { name: /Todos/i }));
    await user.click(screen.getByRole('button', { name: /Proximos/i }));

    expect(onTeamChange).toHaveBeenCalledWith('all');
    expect(onStatusChange).toHaveBeenCalledWith('upcoming');
  });
});
