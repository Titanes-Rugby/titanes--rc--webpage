import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

import { cn } from '@/utils/cn';

import { tierLabels } from '../sponsors.data';
import type { SponsorItem } from '../types';

type SponsorsGridProps = {
  sponsors: SponsorItem[];
};

const tierCardClass: Record<SponsorItem['tier'], string> = {
  main: 'border-accent-300 bg-accent-50',
  gold: 'border-secondary-300 bg-secondary-50',
  support: 'border-titanes-200 bg-white',
};

const SponsorsGrid = ({ sponsors }: SponsorsGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sponsors.map((sponsor) => (
        <article key={sponsor.id} className={cn('rounded-2xl border p-5 shadow-sm', tierCardClass[sponsor.tier])}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-titanes-500 uppercase">{tierLabels[sponsor.tier]}</p>
              <h3 className="mt-2 text-xl font-bold text-titanes-900">{sponsor.name}</h3>
            </div>
            <BuildingOffice2Icon className="h-6 w-6 text-titanes-600" />
          </div>
          <p className="mt-3 text-xs font-semibold tracking-[0.1em] text-titanes-500 uppercase">{sponsor.category}</p>
          <p className="mt-2 text-sm text-titanes-700">{sponsor.summary}</p>
        </article>
      ))}
    </div>
  );
};

export default SponsorsGrid;
