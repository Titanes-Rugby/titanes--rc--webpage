import { Link } from 'react-router-dom';

import { cn } from '@/utils/cn';

import { mediaSections } from '../media.data';
import type { MediaSectionId } from '../types';

type MediaTabsProps = {
  activeSection: MediaSectionId;
};

const MediaTabs = ({ activeSection }: MediaTabsProps) => {
  return (
    <div className="sticky top-0 z-20 border-b border-primary-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3">
        {mediaSections.map((section) => (
          <Link
            key={section.id}
            to={`/media/${section.id}`}
            className={cn(
              'rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors',
              activeSection === section.id ? 'bg-primary-700 text-white' : 'text-primary-700 hover:bg-primary-100'
            )}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MediaTabs;
