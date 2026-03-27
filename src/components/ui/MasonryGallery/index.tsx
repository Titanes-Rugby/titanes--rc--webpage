import { type ReactNode } from 'react';

import MasonryLayout from '@/components/ui/MasonryLayout';

export type MasonryGalleryItem = {
  id: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt?: string;
};

type MasonryGalleryProps = {
  items: MasonryGalleryItem[];
  className?: string;
  requestedItems?: number;
  minItems?: number;
  maxItems?: number;
  renderItemActions?: (item: MasonryGalleryItem) => ReactNode;
  onItemClick?: (item: MasonryGalleryItem) => void;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const MasonryGallery = ({
  items,
  className,
  requestedItems,
  minItems = 10,
  maxItems = 30,
  renderItemActions,
  onItemClick,
}: MasonryGalleryProps) => {
  const safeMax = Math.max(maxItems, minItems);
  const count = requestedItems ? clamp(requestedItems, minItems, safeMax) : safeMax;
  const visibleItems = items.slice(0, Math.min(count, items.length));

  return (
    <MasonryLayout
      items={visibleItems}
      className={className}
      getItemKey={(item) => item.id}
      itemContentClassName="h-full"
      renderItem={(item) => {
        const content = (
          <>
            <div className="relative h-full overflow-hidden rounded-2xl">
              <img
                src={item.imageSrc}
                alt={item.imageAlt ?? item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                {item.subtitle ? <p className="text-xs text-primary-100">{item.subtitle}</p> : null}
              </div>
            </div>
            {renderItemActions ? <div className="mt-2">{renderItemActions(item)}</div> : null}
          </>
        );

        return (
          onItemClick ? (
            <button
              type="button"
              onClick={() => onItemClick(item)}
              aria-label={`Abrir imagen: ${item.title}`}
              className="group block w-full overflow-hidden rounded-2xl border border-primary-100 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {content}
            </button>
          ) : (
            <div className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">{content}</div>
          )
        );
      }}
    />
  );
};

export default MasonryGallery;
