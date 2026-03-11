import { cn } from '@/utils/cn';

import type { PlayerMetric } from './types';

type PlayerMetricItemProps = {
  item: PlayerMetric;
  className?: string;
};

const splitMetricValue = (value: string) => {
  const match = value.match(/^([0-9]+(?:[.,][0-9]+)?(?:['’][0-9]+)?)(.*)$/);
  if (!match) return { major: value, minor: '' };

  return { major: match[1], minor: match[2].trim() };
};

export function PlayerMetricItem({ item, className }: PlayerMetricItemProps) {
  const Icon = item.icon;
  const { major, minor } = splitMetricValue(item.value);

  return (
    <div className={cn('min-w-0 flex items-center gap-2.5 sm:gap-3', className)}>
      <Icon className="h-8 w-8 shrink-0 text-white sm:h-10 sm:w-10" aria-hidden="true" />
      <div className="min-w-0 flex items-baseline gap-1 leading-none">
        <span className="text-3xl font-black tracking-tight text-white sm:text-4xl">{major}</span>
        {minor ? <span className="text-base font-medium text-white/95 sm:text-xl">{minor}</span> : null}
      </div>
      <span className="sr-only">{item.label}</span>
    </div>
  );
}
