import { useEffect, useMemo, useState } from 'react';

import type { TeamPlayer } from '../../types';

const PAGE_SIZE = 9;

const hasValue = (value?: string): value is string => Boolean(value);
const normalizePosition = (value: string) => value.trim().toLowerCase();
const buildSearchIndex = (player: TeamPlayer) =>
	[
		player.fullName,
		player.firstName,
		player.lastName,
		player.number,
		player.team,
		player.position.join(' '),
		player.statuses?.join(' '),
		player.birthDate,
		player.height,
		player.weight,
		player.experienceYears,
		player.bio,
	]
		.filter(hasValue)
		.join(' ')
		.toLowerCase();

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
	const positions = useMemo(() => {
		const uniquePositions = new Map<string, string>();
		players.flatMap((player) => player.position).forEach((position) => {
			const normalized = normalizePosition(position);
			if (!normalized || uniquePositions.has(normalized)) return;
			uniquePositions.set(normalized, position);
		});
		return ['Todas', ...uniquePositions.values()];
	}, [players]);
	const indexedPlayers = useMemo(
		() => players.map((player) => ({ player, searchIndex: buildSearchIndex(player) })),
		[players],
	);

	const filteredPlayers = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return indexedPlayers
			.filter(({ player, searchIndex }) => {
			const inTeam = teamFilter === 'Todos los equipos' || player.team === teamFilter;
			const inPosition =
				positionFilter === 'Todas' ||
				player.position.some((position) => normalizePosition(position) === normalizePosition(positionFilter));
			if (!normalizedQuery) return inTeam && inPosition;

			return inTeam && inPosition && searchIndex.includes(normalizedQuery);
			})
			.map(({ player }) => player);
	}, [indexedPlayers, teamFilter, positionFilter, query]);

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
