import { useState } from 'react';

import type { TeamPlayer } from '../types';
import PlayerQuickView from './players/PlayerQuickView';
import PlayersFilters from './players/PlayersFilters';
import PlayersGrid from './players/PlayersGrid';
import { usePlayersCatalog } from './players/usePlayersCatalog';

type PlayersPanelProps = {
  players: TeamPlayer[];
  currentTeam?: string;
  availableTeams?: string[];
  onNavigateTeam?: (team: string) => void;
};

const PlayersPanel = ({ players, currentTeam = 'Todos los equipos', availableTeams, onNavigateTeam }: PlayersPanelProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<TeamPlayer | null>(null);
  const {
    page,
    pages,
    query,
    teams,
    teamFilter,
    positions,
    positionFilter,
    paginatedPlayers,
    filteredCount,
    onChangeTeam,
    onChangePosition,
    onChangeQuery,
    setPage,
  } = usePlayersCatalog(players, availableTeams, currentTeam);

  const handleChangeTeam = (team: string) => {
    if (team === 'Todos los equipos' || !onNavigateTeam) {
      onChangeTeam(team);
      return;
    }

    onNavigateTeam(team);
  };

  return (
    <section className="space-y-6">
      <PlayersFilters
        teams={teams}
        teamFilter={teamFilter}
        positions={positions}
        positionFilter={positionFilter}
        query={query}
        onChangeTeam={handleChangeTeam}
        onChangePosition={onChangePosition}
        onChangeQuery={onChangeQuery}
      />
      <PlayersGrid
        players={paginatedPlayers}
        page={page}
        pages={pages}
        filteredCount={filteredCount}
        onPageChange={setPage}
        onSelectPlayer={setSelectedPlayer}
      />
      <PlayerQuickView player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </section>
  );
};

export default PlayersPanel;
