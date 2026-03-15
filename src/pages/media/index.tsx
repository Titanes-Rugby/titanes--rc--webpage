import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { galleryItems, getMediaSection, isMediaSection, newsItems, videoItems } from './media.data';
import GalleryPanel from './components/GalleryPanel';
import MediaHero from './components/MediaHero';
import MediaTabs from './components/MediaTabs';
import NewsPanel from './components/NewsPanel';
import VideosPanel from './components/VideosPanel';
import type { MediaSectionId } from './types';

const MediaPage = () => {
  const { section } = useParams<{ section?: string }>();
  const activeSection: MediaSectionId = isMediaSection(section) ? section : 'noticias';
  const activeSectionData = useMemo(() => getMediaSection(activeSection), [activeSection]);

  return (
    <main className="bg-primary-50 min-h-screen">
      <MediaHero title={activeSectionData.title} description={activeSectionData.description} />
      <MediaTabs activeSection={activeSection} />

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        {activeSection === 'noticias' ? <NewsPanel items={newsItems} /> : null}
        {activeSection === 'galeria' ? <GalleryPanel items={galleryItems} /> : null}
        {activeSection === 'videos' ? <VideosPanel items={videoItems} /> : null}
      </section>
    </main>
  );
};

export default MediaPage;
