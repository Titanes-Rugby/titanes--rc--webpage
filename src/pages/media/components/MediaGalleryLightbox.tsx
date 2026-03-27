import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

import type { GalleryItem } from '../types';

type MediaGalleryLightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

const MediaGalleryLightbox = ({ item, onClose }: MediaGalleryLightboxProps) => {
  useEscapeKey(onClose, !!item);
  useLockBodyScroll(!!item);

  return createPortal(
    <AnimatePresence>
      {item ? (
        <>
          <motion.button
            type="button"
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            aria-label="Cerrar visor de imagen"
          />
          <motion.div
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.992 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure
              role="dialog"
              aria-modal="true"
              aria-label={item.title}
              className="pointer-events-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-primary-950 shadow-2xl"
            >
              <img src={item.imageSrc} alt={item.title} className="h-[55vh] w-full object-cover sm:h-[65vh]" />
              <figcaption className="flex items-end justify-between gap-4 bg-primary-950/95 px-5 py-4 text-left">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
                  <p className="text-xs text-primary-300 sm:text-sm">Galeria oficial Titanes Rugby Club.</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {item.imageLink ? (
                    <a
                      href={item.imageLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-primary-500 px-4 py-2 text-xs font-semibold text-primary-100 transition hover:border-white hover:bg-white/10"
                    >
                      Abrir enlace
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-primary-500 px-4 py-2 text-xs font-semibold text-primary-100 transition hover:border-white hover:bg-white/10"
                  >
                    Cerrar
                  </button>
                </div>
              </figcaption>
            </figure>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};

export default MediaGalleryLightbox;
