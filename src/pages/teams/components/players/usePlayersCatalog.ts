import { useMemo, useState } from 'react';

import type { TeamPlayer } from '../../types';

const PAGE_SIZE = 9;

const FIXED_POSITIONS = ['Prop', 'Hooker', 'Scrum-half', 'Fly Half', 'Center', 'Wing', 'Fullback'];
const getPositions = (player: TeamPlayer) => (Array.isArray(player.position) ? player.position : [player.position]);
const getPlayerName = (player: TeamPlayer) => {
	const legacyName = (player as TeamPlayer & { name?: string }).name;
	return player.fullName || legacyName || `${player.firstName} ${player.lastName}`.trim();
};

export const usePlayersCatalog = (players: TeamPlayer[]) => {
	const [teamFilter, setTeamFilter] = useState('Todos los equipos');
	const [positionFilter, setPositionFilter] = useState('Todas');
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);

	const teams = useMemo(() => ['Todos los equipos', ...new Set(players.map((player) => player.team ?? ''))], [players]);
	const positions = useMemo(() => ['Todas', ...FIXED_POSITIONS], []);

	const filteredPlayers = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return players.filter((player) => {
			const positions = getPositions(player);
			const inTeam = teamFilter === 'Todos los equipos' || player.team === teamFilter;
			const inPosition = positionFilter === 'Todas' || positions.includes(positionFilter);
			if (!normalizedQuery) return inTeam && inPosition;

			const content = `${getPlayerName(player)} ${positions.join(' ')} ${player.number}`.toLowerCase();
			return inTeam && inPosition && content.includes(normalizedQuery);
		});
	}, [players, teamFilter, positionFilter, query]);

	const pages = Math.max(1, Math.ceil(filteredPlayers.length / PAGE_SIZE));
	const safePage = Math.min(page, pages);

	const paginatedPlayers = useMemo(() => {
		const start = (safePage - 1) * PAGE_SIZE;
		return filteredPlayers.slice(start, start + PAGE_SIZE);
	}, [filteredPlayers, safePage]);

	const onChangeTeam = (team: string) => {
		setTeamFilter(team);
		setPage(1);
	};

	const onChangePosition = (position: string) => {
		setPositionFilter(position);
		setPage(1);
	};

	const onChangeQuery = (nextQuery: string) => {
		setQuery(nextQuery);
		setPage(1);
	};

	return {
		page: safePage,
		pages,
		query,
		teams,
		positions,
		teamFilter,
		positionFilter,
		paginatedPlayers,
		filteredCount: filteredPlayers.length,
		onChangeTeam,
		onChangePosition,
		onChangeQuery,
		setPage,
	};
};
