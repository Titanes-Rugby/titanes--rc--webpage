import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import PlayersFilters from '@/pages/teams/components/players/PlayersFilters';

describe('<PlayersFilters />', () => {
	it('calls callbacks from quick position filters and search query', async () => {
		const user = userEvent.setup();
		const onChangeTeam = vi.fn();
		const onChangePosition = vi.fn();
		const onChangeQuery = vi.fn();

		render(
			<PlayersFilters
				teams={['Todos los equipos', 'Titanes']}
				teamFilter="Todos los equipos"
				positions={['Todas', 'Wing', 'Hooker']}
				positionFilter="Todas"
				query=""
				onChangeTeam={onChangeTeam}
				onChangePosition={onChangePosition}
				onChangeQuery={onChangeQuery}
			/>,
		);

		await user.click(screen.getByRole('button', { name: /Todas/i }));
		await user.click(screen.getByRole('button', { name: 'Wing' }));
		await user.type(screen.getByPlaceholderText(/Buscar jugador/i), 'Chris');

		expect(onChangePosition).toHaveBeenCalledWith('Wing');
		expect(onChangeQuery).toHaveBeenCalled();
	});

	it('opens selects, applies option values and closes with outside click', async () => {
		const user = userEvent.setup();
		const onChangeTeam = vi.fn();
		const onChangePosition = vi.fn();
		const onChangeQuery = vi.fn();

		render(
			<PlayersFilters
				teams={['Todos los equipos', 'Titanes']}
				teamFilter="Todos los equipos"
				positions={['Todas', 'Wing']}
				positionFilter="Todas"
				query=""
				onChangeTeam={onChangeTeam}
				onChangePosition={onChangePosition}
				onChangeQuery={onChangeQuery}
			/>,
		);

		await user.click(screen.getByRole('button', { name: /Cambiar equipo/i }));
		await user.click(screen.getByRole('button', { name: /^Titanes$/i }));
		expect(onChangeTeam).toHaveBeenCalledWith('Titanes');

		await user.click(screen.getByRole('button', { name: /Cambiar posición/i }));
		expect(screen.getByText('●')).toBeInTheDocument();
		const optionsMenu = screen.getByText('●').closest('div');
		await user.click(within(optionsMenu as HTMLElement).getByRole('button', { name: /^Wing$/i }));
		expect(onChangePosition).toHaveBeenCalledWith('Wing');

		await user.click(screen.getByRole('button', { name: /Cambiar equipo/i }));
		expect(screen.getByRole('button', { name: /^Titanes$/i })).toBeInTheDocument();
		fireEvent.mouseDown(document.body);
		await waitFor(() => {
			expect(screen.queryByRole('button', { name: /^Titanes$/i })).not.toBeInTheDocument();
		});
	});
});
