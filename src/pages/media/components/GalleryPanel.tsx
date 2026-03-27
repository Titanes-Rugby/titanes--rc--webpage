import { useState } from 'react';

import { MasonryGallery, type MasonryGalleryItem } from '@/components/ui';

import MediaGalleryLightbox from './MediaGalleryLightbox';
import type { GalleryItem } from '../types';

type GalleryPanelProps = {
  items: GalleryItem[];
};

const GalleryPanel = ({ items }: GalleryPanelProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const masonryItems: MasonryGalleryItem[] = items.map((item) => ({
    id: item.id,
    imageSrc: item.imageSrc,
    title: item.title,
    subtitle: 'Click para ampliar',
  }));

  return (
    <>
      <div data-testid="gallery-classic-grid" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.imageLink ?? item.imageSrc}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-primary-100 bg-white"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-70 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8" data-testid="gallery-masonry-grid">
        <MasonryGallery
          items={masonryItems}
          minItems={10}
          maxItems={30}
          requestedItems={30}
          onItemClick={(clicked) => {
            const mediaItem = items.find((item) => item.id === clicked.id) ?? null;
            setSelectedItem(mediaItem);
          }}
        />
      </div>
      <MediaGalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
};

export default GalleryPanel;
