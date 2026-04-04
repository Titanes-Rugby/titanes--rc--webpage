import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/ui/AnimatedTiltCard', () => {
	return {
		default: ({
			children,
		}: {
			children: (props: { contentX: number; contentY: number; contentScale: number }) => JSX.Element;
		}) => children({ contentX: 0, contentY: 0, contentScale: 1 }),
	};
});

import PlayersGrid from '@/pages/teams/components/players/PlayersGrid';

describe('<PlayersGrid />', () => {
	it('renders empty-state message when there are no players', () => {
		render(
			<PlayersGrid players={[]} page={1} pages={1} filteredCount={0} onSelectPlayer={vi.fn()} onPageChange={vi.fn()} />,
		);

		expect(screen.getByText(/No se encontraron jugadores con los filtros actuales/i)).toBeInTheDocument();
		expect(screen.getByText(/Página 1 \/ 1/i)).toBeInTheDocument();
	});

	it('renders players and triggers callbacks on click and paging', async () => {
		const user = userEvent.setup();
		const onSelectPlayer = vi.fn();
		const onPageChange = vi.fn();

		render(
			<PlayersGrid
				players={[{ id: 'p1', fullName: 'Carlos Ruiz', firstName: 'Carlos', lastName: 'Ruiz', position: ['Fly Half'], number: '10', imageSrc: '/images/p.png' }]}
				page={1}
				pages={2}
				filteredCount={7}
				onSelectPlayer={onSelectPlayer}
				onPageChange={onPageChange}
			/>,
		);

		await user.click(screen.getByRole('button', { name: /Carlos Ruiz/i }));
		await user.click(screen.getByRole('button', { name: /Siguiente/i }));

		expect(onSelectPlayer).toHaveBeenCalledTimes(1);
		expect(onPageChange).toHaveBeenCalledWith(2);
		expect(screen.getByText(/7 jugadores encontrados/i)).toBeInTheDocument();
	});

	it('handles pager limits and custom statuses', async () => {
		const user = userEvent.setup();
		const onSelectPlayer = vi.fn();
		const onPageChange = vi.fn();

		render(
			<PlayersGrid
				players={[
					{
						id: 'p2',
						fullName: 'Mario Diaz',
						firstName: 'Mario',
						lastName: 'Diaz',
						position: ['Hooker'],
						number: '2',
						imageSrc: '/images/p2.jpg',
						statuses: ['Capitán', 'Titular'],
						nationalCaps: 27,
					},
				]}
				page={2}
				pages={2}
				filteredCount={1}
				onSelectPlayer={onSelectPlayer}
				onPageChange={onPageChange}
			/>,
		);

		expect(screen.getByText(/Estado: Capitán \/ Titular/i)).toBeInTheDocument();
		expect(screen.getByText(/Selecci.n nacional · 27 CAP/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Siguiente/i })).toBeDisabled();

		await user.click(screen.getByRole('button', { name: /Anterior/i }));
		expect(onPageChange).toHaveBeenCalledWith(1);
	});
});
