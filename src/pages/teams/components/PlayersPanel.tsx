import { useState } from 'react';

import type { TeamPlayer } from '../types';
import PlayerQuickView from './players/PlayerQuickView';
import PlayersFilters from './players/PlayersFilters';
import PlayersGrid from './players/PlayersGrid';
import { usePlayersCatalog } from './players/usePlayersCatalog';

type PlayersPanelProps = {
  players: TeamPlayer[];
};

const PlayersPanel = ({ players }: PlayersPanelProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<TeamPlayer | null>(null);
  const { page, pages, query, positions, positionFilter, paginatedPlayers, filteredCount, onChangePosition, onChangeQuery, setPage } = usePlayersCatalog(players);

  return (
    <section className="space-y-6">
      <PlayersFilters
        positions={positions}
        positionFilter={positionFilter}
        query={query}
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
