import { cn } from '@/utils/cn';

import type { FixtureFilterOption, FixtureStatus, FixtureTeam } from '../types';

type FixtureFiltersProps = {
  team: FixtureTeam;
  status: FixtureStatus;
  teamOptions: FixtureFilterOption[];
  onTeamChange: (value: FixtureTeam) => void;
  onStatusChange: (value: FixtureStatus) => void;
};

const FixtureFilters = ({ team, status, teamOptions, onTeamChange, onStatusChange }: FixtureFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-primary-100 bg-white p-3">
      {teamOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onTeamChange(option.id)}
          className={cn('rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase', team === option.id ? 'bg-primary-700 text-white' : 'text-primary-700 hover:bg-primary-100')}
        >
          {option.label}
        </button>
      ))}
      <div className="ml-auto flex items-center gap-2">
        <button type="button" onClick={() => onStatusChange('upcoming')} className={cn('rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase', status === 'upcoming' ? 'bg-secondary-700 text-white' : 'text-secondary-700 hover:bg-secondary-100')}>Próximos</button>
        <button type="button" onClick={() => onStatusChange('result')} className={cn('rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase', status === 'result' ? 'bg-secondary-700 text-white' : 'text-secondary-700 hover:bg-secondary-100')}>Resultados</button>
      </div>
    </div>
  );
};

export default FixtureFilters;
