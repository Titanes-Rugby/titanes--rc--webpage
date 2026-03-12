type PlayersFiltersProps = {
  positions: string[];
  positionFilter: string;
  query: string;
  onChangePosition: (position: string) => void;
  onChangeQuery: (query: string) => void;
};

const PlayersFilters = ({ positions, positionFilter, query, onChangePosition, onChangeQuery }: PlayersFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        {positions.map((position) => (
          <button
            key={position}
            type="button"
            onClick={() => onChangePosition(position)}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase ${
              positionFilter === position ? 'border-titanes-700 bg-titanes-700 text-white' : 'border-titanes-200 text-titanes-700'
            }`}
          >
            {position}
          </button>
        ))}
      </div>
      <label className="flex min-w-[14rem] items-center rounded-xl border border-titanes-200 bg-white px-3 py-2 text-sm text-titanes-700">
        <span className="sr-only">Buscar jugador</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onChangeQuery(event.target.value)}
          placeholder="Buscar jugador..."
          className="w-full border-0 bg-transparent p-0 text-sm outline-none placeholder:text-titanes-400"
        />
      </label>
    </div>
  );
};

export default PlayersFilters;
