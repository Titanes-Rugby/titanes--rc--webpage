import { PlayCircleIcon } from '@heroicons/react/24/outline';

import type { VideoItem } from '../types';

type VideosPanelProps = {
  items: VideoItem[];
};

const VideosPanel = ({ items }: VideosPanelProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
          <div className="group relative">
            <img src={item.imageSrc} alt={item.title} className="h-44 w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
              <PlayCircleIcon className="h-11 w-11 text-white" />
            </div>
            <span className="absolute right-3 bottom-3 rounded bg-black/75 px-2 py-0.5 text-xs font-semibold text-white">{item.duration}</span>
          </div>
          <div className="space-y-2 p-5">
            <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
            <p className="text-sm text-primary-700">{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default VideosPanel;
