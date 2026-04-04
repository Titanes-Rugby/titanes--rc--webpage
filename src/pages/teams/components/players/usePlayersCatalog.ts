import { useEffect, useMemo, useState } from 'react';

import type { TeamPlayer } from '../../types';

const PAGE_SIZE = 9;

const hasValue = (value?: string): value is string => Boolean(value);

export const usePlayersCatalog = (
	players: TeamPlayer[],
	availableTeams?: string[],
	initialTeam: string = 'Todos los equipos',
) => {
	const [teamFilter, setTeamFilter] = useState(initialTeam);
	const [positionFilter, setPositionFilter] = useState('Todas');
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		setTeamFilter(initialTeam);
		setPage(1);
	}, [initialTeam]);

	const teams = useMemo(() => {
		const sourceTeams = availableTeams?.length ? availableTeams : players.map((player) => player.team);
		return ['Todos los equipos', ...new Set(sourceTeams.filter(hasValue))];
	}, [availableTeams, players]);
	const positions = useMemo(
		() => ['Todas', ...new Set(players.map((player) => player.position).filter(hasValue))],
		[players],
	);

	const filteredPlayers = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return players.filter((player) => {
			const inTeam = teamFilter === 'Todos los equipos' || player.team === teamFilter;
			const inPosition = positionFilter === 'Todas' || player.position.includes(positionFilter);
			if (!normalizedQuery) return inTeam && inPosition;

			const content = `${player.fullName} ${player.position.join(' ')} ${player.number}`.toLowerCase();
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
