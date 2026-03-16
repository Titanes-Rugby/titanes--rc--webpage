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
  support: 'border-primary-200 bg-white',
};

const SponsorsGrid = ({ sponsors }: SponsorsGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sponsors.map((sponsor) => (
        <article
          id={sponsor.id}
          key={sponsor.id}
          className={cn('rounded-2xl border p-5 shadow-sm', tierCardClass[sponsor.tier])}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">{tierLabels[sponsor.tier]}</p>
              <h3 className="mt-2 text-xl font-bold text-primary-900">
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-primary-900 transition-colors duration-150 hover:text-accent-700"
                  >
                    {sponsor.name}
                  </a>
                ) : (
                  <span className="inline-block transition-colors duration-150 hover:text-accent-700">{sponsor.name}</span>
                )}
              </h3>
              {sponsor.logoSrc ? (
                <a
                  href={sponsor.url ?? '#'}
                  target={sponsor.url ? '_blank' : undefined}
                  rel={sponsor.url ? 'noreferrer' : undefined}
                  className="mt-3 inline-flex h-10 w-24 items-center justify-center overflow-hidden rounded-lg bg-white/70 transition hover:bg-white hover:scale-105"
                >
                  <img
                    src={sponsor.logoSrc}
                    alt={`${sponsor.name} logo`}
                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </a>
              ) : null}
            </div>
            <BuildingOffice2Icon className="h-8 w-8 text-primary-600" />
          </div>
          <p className="mt-3 text-xs font-semibold tracking-[0.1em] text-primary-500 uppercase">{sponsor.category}</p>
          <p className="mt-2 text-sm text-primary-700">{sponsor.summary}</p>
        </article>
      ))}
    </div>
  );
};

export default SponsorsGrid;
