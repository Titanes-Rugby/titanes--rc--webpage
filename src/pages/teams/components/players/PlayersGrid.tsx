import type { TeamPlayer } from '../../types';
import PlayerGridCard from './PlayerGridCard';

type PlayersGridProps = {
  players: TeamPlayer[];
  page: number;
  pages: number;
  filteredCount: number;
  onSelectPlayer: (player: TeamPlayer) => void;
  onPageChange: (page: number) => void;
};

const PlayersGrid = ({ players, page, pages, filteredCount, onSelectPlayer, onPageChange }: PlayersGridProps) => {
  return (
    <div className="space-y-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">
        {filteredCount} jugadores encontrados
      </p>
      {players.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <PlayerGridCard key={player.id} player={player} onSelectPlayer={onSelectPlayer} />
          ))}
        </div>
      ) : (
        <article className="rounded-2xl border border-primary-100 bg-white p-6 text-center text-sm text-primary-600">
          No se encontraron jugadores con los filtros actuales.
        </article>
      )}
      <div className="flex items-center justify-center gap-2">
        <PagerButton disabled={page === 1} onClick={() => onPageChange(page - 1)}>
          Anterior
        </PagerButton>
        <span className="px-2 text-xs font-semibold tracking-[0.12em] text-primary-600 uppercase">
          Página {page} / {pages}
        </span>
        <PagerButton disabled={page === pages} onClick={() => onPageChange(page + 1)}>
          Siguiente
        </PagerButton>
      </div>
    </div>
  );
};

type PagerButtonProps = {
  children: string;
  disabled: boolean;
  onClick: () => void;
};

const PagerButton = ({ children, disabled, onClick }: PagerButtonProps) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className="rounded-lg border border-primary-200 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-primary-700 uppercase disabled:cursor-not-allowed disabled:opacity-45"
  >
    {children}
  </button>
);

export default PlayersGrid;
