import { useMemo, useState } from 'react';

import type { TeamPlayer } from '../../types';

const PAGE_SIZE = 9;

export const usePlayersCatalog = (players: TeamPlayer[]) => {
  const [teamFilter, setTeamFilter] = useState('All Teams');
  const [positionFilter, setPositionFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const teams = useMemo(() => ['All Teams', ...new Set(players.map((player) => player.team ?? ''))], [players]);
  const positions = useMemo(() => ['All', ...new Set(players.map((player) => player.position))], [players]);

  const filteredPlayers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return players.filter((player) => {
      const inTeam = teamFilter === 'All Teams' || player.team === teamFilter;
      const inPosition = positionFilter === 'All' || player.position === positionFilter;
      if (!normalizedQuery) return inTeam && inPosition;

      const content = `${player.name} ${player.position} ${player.number}`.toLowerCase();
      return inTeam && inPosition && content.includes(normalizedQuery);
    });
  }, [players, teamFilter, positionFilter, query]);

  const pages = Math.max(1, Math.ceil(filteredPlayers.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);

  const paginatedPlayers = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredPlayers.slice(start, start + PAGE_SIZE);
  }, [filteredPlayers, safePage]);

  const onChangePosition = (position: string) => {
    setPositionFilter(position);
    setPage(1);
  };

  const onChangeTeam = (team: string) => {
    setTeamFilter(team);
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
    onChangePosition,
    onChangeTeam,
    onChangeQuery,
    setPage,
  };
};
