import { Filter, ChevronsUpDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type PlayersFiltersProps = {
  teams: string[];
  teamFilter: string;
  positions: string[];
  positionFilter: string;
  query: string;
  onChangeTeam: (team: string) => void;
  onChangePosition: (position: string) => void;
  onChangeQuery: (query: string) => void;
};

const PlayersFilters = ({
  teams,
  teamFilter,
  positions,
  positionFilter,
  query,
  onChangeTeam,
  onChangePosition,
  onChangeQuery,
}: PlayersFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary-100 bg-gradient-to-r from-white via-primary-50/70 to-white p-4 shadow-md">
      <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-600 shadow-sm">
        <Filter className="h-4 w-4 text-primary-500" />
        Filtros
      </div>
      <SelectPill label="Equipo" value={teamFilter} options={teams} onChange={onChangeTeam} ariaLabel="Cambiar equipo" />
      <SelectPill label="Posición" value={positionFilter} options={positions} onChange={onChangePosition} ariaLabel="Cambiar posición" />
      <div className="flex flex-wrap gap-2">
        {positions.map((pos) => (
          <button
            key={pos}
            type="button"
            onClick={() => onChangePosition(pos)}
            aria-pressed={positionFilter === pos}
            className={`inline-flex items-center gap-2 rounded-lg border border-primary-200 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
              positionFilter === pos ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-800 hover:border-primary-400'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>
      <label className="flex min-w-[14rem] flex-1 items-center gap-2 rounded-xl border border-primary-200 bg-white px-3 py-2 text-sm text-primary-700 shadow-sm focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100">
        <span className="sr-only">Buscar jugador</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onChangeQuery(event.target.value)}
          placeholder="Buscar jugador..."
          className="w-full border-0 bg-transparent p-0 text-sm outline-none placeholder:text-primary-400"
        />
      </label>
    </div>
  );
};

type SelectPillProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  ariaLabel?: string;
};

const SelectPill = ({ label, value, options, onChange, ariaLabel }: SelectPillProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-2 rounded-xl border border-primary-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700 shadow-sm transition hover:border-primary-400"
    >
      <span>{label}</span>
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-800 transition hover:border-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      >
        {value}
        <ChevronsUpDown className="h-3.5 w-3.5 text-primary-500" />
      </button>
      {open ? (
        <div className="absolute left-1/2 top-full z-20 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-primary-100 bg-white shadow-lg">
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition hover:bg-primary-50 ${
                  option === value ? 'bg-primary-100 text-primary-900' : 'text-primary-700'
                }`}
              >
                <span>{option}</span>
                {option === value ? <span className="text-[10px] font-bold text-primary-600">●</span> : null}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PlayersFilters;
