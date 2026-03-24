import { motion } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/utils/cn';

import GalleryLightbox from './history-gallery/GalleryLightbox';
import type { GalleryItem } from './history-gallery/galleryItems';

type ClubLogoItem = {
  id: string;
  period: string;
  title: string;
  image: string;
  logoBgClass?: string;
};

const CLUB_LOGOS: ClubLogoItem[] = [
  {
    id: 'logo-2006',
    period: '2006 - 2011',
    title: 'Origenes del club',
    image: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774322396/logo_primero_wedoyy.png',
    logoBgClass: 'bg-primary-600',
  },
  {
    id: 'logo-2011',
    period: '2011 - 2018',
    title: 'Fundacion Titanes',
    image: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774322397/logo_segundo_htopo0.png',
  },
  {
    id: 'logo-2018',
    period: '2018 - 2025',
    title: 'Consolidacion competitiva',
    image: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774322397/logo_tercero_jp0kpy.png',
  },
  {
    id: 'logo-2025',
    period: '2025 - Presente',
    title: 'Identidad actual',
    image: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774322398/logo_cuarto_ltv8ip.png',
  },
];

const ClubLogoTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border-2 border-primary-200 bg-gradient-to-br from-white via-primary-50/50 to-lime-50/50 p-8 shadow-lg"
      >
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">Identidad visual</p>
          <h3 className="text-2xl font-bold text-primary-900">Evolucion de logos del club</h3>
          <p className="text-sm leading-relaxed text-primary-700">
            Cada escudo representa una etapa de crecimiento; la esencia Titanes se mantiene en todas sus versiones.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLUB_LOGOS.map((logo) => (
            <motion.figure
              key={logo.id}
              layoutId={`gallery-item-${logo.image}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() =>
                  setSelectedItem({
                    image: logo.image,
                    title: `Logo ${logo.period}`,
                    caption: logo.title,
                  })
                }
                aria-label={`Abrir logo: ${logo.period}`}
                className="w-full"
              >
                <div className={cn('mx-auto flex h-24 w-24 items-center justify-center rounded-2xl p-3', logo.logoBgClass ?? 'bg-primary-50')}>
                  <img src={logo.image} alt={`Logo ${logo.period}`} className="max-h-full w-auto object-contain" />
                </div>
                <p className="mt-3 text-sm font-bold text-primary-900">{logo.period}</p>
                <p className="mt-1 text-xs text-primary-700">{logo.title}</p>
              </button>
            </motion.figure>
          ))}
        </div>
      </motion.article>

      <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
};

export default ClubLogoTimeline;
