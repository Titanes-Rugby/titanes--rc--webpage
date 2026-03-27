import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type MasonryLayoutProps<T> = {
  items: T[];
  className?: string;
  itemClassName?: string;
  itemContentClassName?: string;
  getItemHeightClassName?: (item: T, index: number) => string;
  heightPattern?: string[];
  getItemKey?: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => ReactNode;
};

const DEFAULT_HEIGHT_PATTERN = ['h-56', 'h-72', 'h-64', 'h-80'];

const MasonryLayout = <T,>({
  items,
  className,
  itemClassName,
  itemContentClassName,
  getItemHeightClassName,
  heightPattern = DEFAULT_HEIGHT_PATTERN,
  getItemKey,
  renderItem,
}: MasonryLayoutProps<T>) => {
  return (
    <div className={cn('columns-1 gap-4 sm:columns-2 lg:columns-3', className)}>
      {items.map((item, index) => {
        const heightClass = getItemHeightClassName
          ? getItemHeightClassName(item, index)
          : heightPattern[index % heightPattern.length];

        return (
        <article
          key={getItemKey ? getItemKey(item, index) : String(index)}
          className={cn('mb-4 break-inside-avoid', itemClassName)}
        >
          <div className={cn(heightClass, itemContentClassName)}>{renderItem(item, index)}</div>
        </article>
        );
      })}
    </div>
  );
};

export default MasonryLayout;
